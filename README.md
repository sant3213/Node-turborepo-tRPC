To know which process is being executed with port 3000
lsof -i :3000   
kill -9 <PID>



pnpm add @trpc/server zod cors --filter server
pnpm add @types/cors -D --filter server
pnpm add typescript --filter server
Go to apps/server and pnpm tsc --init

Modify the tsconfig.json to:
```js script
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["*.ts"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```