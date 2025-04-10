/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	var response = await resolve(event, {
		preload({ type, path }) {
			return type == 'font' || path.includes('/fonts');
		}
	});

	return response;
}
