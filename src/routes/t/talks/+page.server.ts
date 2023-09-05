import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/prisma';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	comment: async ({ request }) => {
		const data: FormData = await request.formData();
		const comment = data.get('comment');
		const postid = data.get('postid');
		console.log(comment, postid);

		await prisma.comment.create({
			data: {
				content: comment as string,
				postId: postid as string
			}
		});
	}
};
