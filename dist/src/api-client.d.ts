export declare class ApiClient {
    private baseUrl;
    static instance: ApiClient;
    constructor(baseUrl?: string);
    static getInstance(): ApiClient;
    /**
     * Constructs a query string from an object.
     * @param {Object} params - The query parameters as key-value pairs.
     * @returns {string} The query string.
     */
    buildQueryString(params?: object): string;
    /**
     * GET request with dynamic path and query parameters.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object} queryParams - An object containing the query parameters, e.g., { sort: 'asc', page: 2 }.
     * @returns {Promise} The response from the API.
     */
    get<T>(pathTemplate: string, pathParams?: object, queryParams?: object): Promise<T>;
    /**
     * non-GET request that can handle both JSON and FormData.
     * @param {string} method - non-GET Http request method, e.g., 'POST', 'PUT'.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object|FormData} body - The request body, either a JSON object or FormData.
     * @param {Object} [queryParams] - An object containing optional query parameters, e.g., { sort: 'asc' }.
     * @returns {Promise} The response from the API.
     */
    _nonGet<T, R>(method: string, pathTemplate: string, pathParams?: object, body?: object | FormData, queryParams?: object): Promise<R>;
    /**
     * POST request that can handle both JSON and FormData.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object|FormData} body - The request body, either a JSON object or FormData.
     * @param {Object} [queryParams] - An object containing optional query parameters, e.g., { sort: 'asc' }.
     * @returns {Promise} The response from the API.
     */
    post<T, R>(pathTemplate: string, pathParams?: object, body?: object | FormData, queryParams?: object): Promise<R>;
    /**
     * PUT request that can handle both JSON and FormData.
     * @param {string} pathTemplate - The path template with placeholders for dynamic params, e.g., '/users/:id'.
     * @param {Object} pathParams - An object containing the dynamic path parameters, e.g., { id: 123 }.
     * @param {Object|FormData} body - The request body, either a JSON object or FormData.
     * @param {Object} [queryParams] - An object containing optional query parameters, e.g., { sort: 'asc' }.
     * @returns {Promise} The response from the API.
     */
    put<T, R>(pathTemplate: string, pathParams?: object, body?: object | FormData, queryParams?: object): Promise<R>;
}
