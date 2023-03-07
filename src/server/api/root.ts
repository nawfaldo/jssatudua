import { createTRPCRouter } from "~/server/api/trpc";
import { studentRouter } from "~/server/api/routers/student";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  student: studentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
