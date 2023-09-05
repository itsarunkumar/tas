import { prisma } from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	post: async ({ request }) => {
		const data: FormData = await request.formData();
		const title = data.get('title');
		const content = data.get('content');

		const r = await prisma.post.create({
			data: {
				content: content as string,
				title: title as string
			}
		});

		console.log(r);

		return {
			status: 200,
			body: r
		};
	}
};
