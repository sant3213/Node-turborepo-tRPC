import * as trpcExpress from '@trpc/server/adapters/express';
import { publicProcedure, router } from './src/trpc';
import * as trpc from '@trpc/server';
import { z } from 'zod';
import express from 'express';

const app = express();

const appRouter = router({
  carList: publicProcedure
    .query(async () => {
      // Retrieve users from a datasource, this is an imaginary database
      //const users = await db.user.findMany();
             
      return [{}]//users;
    }),
carById: publicProcedure
  .input(z.string())
  .query(async (opts) => {
    const { input } = opts;
             
    // Retrieve the user with the given ID
    //const user = await db.user.findById(input);
           
    return {}//user;
  }),
  carCreate: publicProcedure
  .input(z.object({ name: z.string() }))
  .mutation(async (opts) => {
    const { input } = opts;
     // Create a new user in the database
     //const user = await db.user.create(input);
     return {} //user;
    }),
});


// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}) // no context
type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);


app.listen(4000);
// export type definition of API
export type AppRouter = typeof appRouter;