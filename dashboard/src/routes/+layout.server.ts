import { redirect } from "@sveltejs/kit";

export async function load({ locals, url }) {
    if (locals.user && url.pathname == "/") {
        throw redirect(302, "/dashboard");
    }
    return {
        user: locals.user,
    };
}