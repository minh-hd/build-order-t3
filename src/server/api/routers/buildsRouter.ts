import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const buildsRouter = createTRPCRouter({
  submitBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });
    }),
    getBuilds: publicProcedure
      .query(async ({ctx}) => {
        return await ctx.prisma.buildOrder.findMany();
      })
});
