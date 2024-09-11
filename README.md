# express-pnpjs-spo
 Server Side Typescript Rest API accessing SharePoint Online

## Run when cloned only
```
npm install
npm run build
npm run start
```

## Run with nodemon
```
npm run dev
```

## Setup steps
### Setup node js project and express
```
npm init -y
npm i express
```

### Setup typescript and express types for dev
```
npm i -D typescript
npm i -D @types/express
npx tsc --init
```
### Configure typescript
- Uncomment and set values as in tsconfig.js
- Add "type": "module" to package.json

### Transpile
```
npx tsc --build
```

### Run directly js file
```
node ./dist/index.js
```

### Add transpile and run commands to package.json
- Add "build": "tsc --build" to "scripts"
- Add "start": "node ./dist/index.js"

### Setup nodemon and ts-node for dev
```
npm i -D nodemon
npm i -D ts-node
```
- Add "dev": "nodemon ./src/index.ts" to package.json at "scripts" section
- Add nodemon configuration file nodemon.json

### Run dev
```
npm run dev
```

### Add dotenv, pnpjs and msal-node
```
npm i dotenv
npm i @pnp/core @pnp/nodejs @pnp/sp @azure/msal-node
```
### Add dev dependency @types/node
```
npm i -D @types/node
```

## References
- https://www.youtube.com/watch?v=TFeI-yMfg0w&list=LL&index=23
- https://github.com/PiaSys/Conferences-Samples/tree/master/nodejs-pnpjs
- https://www.youtube.com/watch?v=BWUi6BS9T5Y&list=LL&index=2
- https://github.com/TomDoesTech/REST-API-Tutorial-Updated
- https://typescript.tv/hands-on/effortless-nodemon-setup-with-typescript-and-esm/