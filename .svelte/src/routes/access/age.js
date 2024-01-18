import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log(params);
    fetch("/ ", (data) => {

    })
    return {
        post: {
            params: params
        }
    };
}