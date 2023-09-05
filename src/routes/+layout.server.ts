import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib/prisma';

export const load = (async () => {
	return {
		posts: prisma.post.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				comments: {
					orderBy: {
						createdAt: 'desc'
					}
				}
			}
		})
	};
}) satisfies LayoutServerLoad;
