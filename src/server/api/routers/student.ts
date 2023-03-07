import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// :3

export const studentRouter = createTRPCRouter({
  createStudent: publicProcedure
    .input(z.object({ name: z.string(), city: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.students.create({
        data: { name: input.name, city: input.city },
      });
    }),

  getAllStudents: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.students.findMany();
  }),

  getStudent: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(({ input, ctx }) => {
      if (input.id != undefined) {
        return ctx.prisma.students.findUnique({ where: { id: input.id } });
      }
      return null;
    }),

  updateStudent: publicProcedure
    .input(z.object({ id: z.string(), name: z.string(), city: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.students.update({
        where: { id: input.id },
        data: { name: input.name, city: input.city },
      });
    }),

  deleteStudent: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.students.delete({
        where: { id: input.id },
      });
    }),
});
