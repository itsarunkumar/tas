import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/prisma';

export const load = (async ({ params }) => {
	const post = await prisma.post.findUnique({
		where: {
			id: params.id
		},
		include: {
			comments: {
				orderBy: {
					createdAt: 'desc'
				}
			}
		}
	});
	return {
		post
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	comment: async ({ request, params }) => {
		const data: FormData = await request.formData();
		const comment = data.get('comment');

		const postid = params.id;

		await prisma.comment.create({
			data: {
				content: comment as string,
				postId: postid as string
			}
		});
	}
};
