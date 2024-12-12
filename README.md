# Permissioning the City SDK

## Install package

```bash
npm install @dark-matter-labs/ptc-sdk
```

## How to use

```js
import { ApiClient, PermissionRequestAPI } from "@dark-matter-labs/ptc-sdk";

const apiClient = ApiClient.getInstance();
const permissionRequestAPI = new PermissionRequestAPI(apiClient);

const permissionReqeusts = await permissionRequestAPI.findAll();
```
