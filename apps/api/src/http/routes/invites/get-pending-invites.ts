import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'

import { BadRequestError } from '../_errors/bad-request-error'

export async function getPendingInvites(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/pending-invites',
      {
        schema: {
          tags: ['invites'],
          summary: 'Accept an invite',
          params: z.object({
            inviteId: z.string().uuid(),
          }),
          response: {
            200: z.object({
              invites: z.array(z.object({})),
            }),
          },
        },
      },
      async (request, reply) => {
        const userId = await request.getCurrentUserId()

        const invites = await prisma.invite.findMany({
          where: {
            author: {
              id: userId,
            },
          },
        })

        return reply.status(200).send()
      },
    )
}
