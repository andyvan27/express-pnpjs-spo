# express-pnpjs-spo
 Server Side Typescript Rest API accessing SharePoint Online

## Setup node js project and express
```
npm init -y
npm i express
```

## Setup typescript and express types for dev
```
npm i -D typescript
npm i -D @types/express
npx tsc --init
```
## Configure typescript in tsconfig.js
- Uncomment "rootDir": "./" and set it to "rootDir": "./src"
- Uncomment "outDir": "./" and set it to "outDir": "./dist"
- Uncomment "noImplicitAny": true, "strictNullChecks": true, "strictFunctionTypes": true

## Transpile
```
npx tsc --build
```

## Run directly js file
```
node ./dist/index.js
```

## Add transpile and run commands to package.json
- Add "build": "tsc --build" to "scripts"
- Add "start": "node ./dist/index.js"

## Setup nodemon and ts-node for dev
```
npm i -D nodemon
npm i -D ts-node
```
- Add "start:dev": "nodemon ./src/index.ts" to package.json at "scripts" section

## Run dev
```
npm run start:dev
```

## Add dotenv, pnpjs and msal-node
```
npm i dotenv
npm i @pnp/core@3.x @pnp/nodejs@3.x @pnp/sp@3.x
```
