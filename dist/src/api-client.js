"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
class ApiClient {
    constructor(baseUrl = "/api/v1/") {
        this.baseUrl = baseUrl;
        if (ApiClient.instance) {
            return ApiClient.instance;
        }
        else {
            this.baseUrl = baseUrl;
            ApiClient.instance = this;
        }
    }
    static getInstance() {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }
    /**
     * Constructs a query string from an object.
     * @param {Object} params - The query parameters as key-value pairs.
     * @returns {string} The query string.
     */
    buildQueryString(params = {}) {
        const queryString = Object.keys(params)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join("&");
        return queryString ? `?${queryString}` : "";
    }
    /**
     * GET request with dynamic path and query parameters.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object} queryParams - An object containing the query parameters, e.g., { sort: 'asc', page: 2 }.
     * @returns {Promise} The response from the API.
     */
    async get(pathTemplate, pathParams = {}, queryParams = {}) {
        // Replace placeholders in the path template with actual values
        const path = pathTemplate.replace(/:([a-zA-Z]+)/g, (_, key) => encodeURIComponent(pathParams[key]));
        // Build the query string
        const queryString = this.buildQueryString(queryParams);
        // Construct the full URL
        const url = `${this.baseUrl}${path}${queryString}`;
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error("GET request failed", error);
            throw error;
        }
    }
    /**
     * non-GET request that can handle both JSON and FormData.
     * @param {string} method - non-GET Http request method, e.g., 'POST', 'PUT'.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object|FormData} body - The request body, either a JSON object or FormData.
     * @param {Object} [queryParams] - An object containing optional query parameters, e.g., { sort: 'asc' }.
     * @returns {Promise} The response from the API.
     */
    async _nonGet(method = "POST", pathTemplate, pathParams = {}, body = {}, queryParams = {}) {
        const path = pathTemplate.replace(/:([a-zA-Z]+)/g, (_, key) => encodeURIComponent(pathParams[key]));
        const queryString = this.buildQueryString(queryParams);
        const url = `${this.baseUrl}${path}${queryString}`;
        const isFormData = body instanceof FormData;
        try {
            const response = await fetch(url, {
                method: method,
                headers: isFormData
                    ? {
                        Accept: "*/*",
                    } // Let the browser set the Content-Type for FormData
                    : { "Content-Type": "application/json" },
                body: isFormData ? body : JSON.stringify(body), // Send FormData directly or JSON string
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error("POST request failed", error);
            throw error;
        }
    }
    /**
     * POST request that can handle both JSON and FormData.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object|FormData} body - The request body, either a JSON object or FormData.
     * @param {Object} [queryParams] - An object containing optional query parameters, e.g., { sort: 'asc' }.
     * @returns {Promise} The response from the API.
     */
    async post(pathTemplate, pathParams = {}, body = {}, queryParams = {}) {
        return await this._nonGet("POST", pathTemplate, pathParams, body, queryParams);
    }
    /**
     * PUT request that can handle both JSON and FormData.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object|FormData} body - The request body, either a JSON object or FormData.
     * @param {Object} [queryParams] - An object containing optional query parameters, e.g., { sort: 'asc' }.
     * @returns {Promise} The response from the API.
     */
    async put(pathTemplate, pathParams = {}, body = {}, queryParams = {}) {
        return await this._nonGet("PUT", pathTemplate, pathParams, body, queryParams);
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=api-client.js.map