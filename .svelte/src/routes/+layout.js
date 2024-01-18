export const ssr = false;
// export const prerender = false;

import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ param, route, url }) => {
    let pathname = await url.pathname;
    console.log("urlis " + url);
    console.log(JSON.stringify(route));
    console.log("urlis " + param);
    await fetch('/usercheck', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(async function (response) {
        var responseData;
        await response.json().then(value => {
            console.log(pathname);
            console.log(value);
            responseData = value;
            if (responseData["username"] != "") {
                if (pathname == "/access") {
                    return redirect(302, "/");
                }
                return {}
            }
            else {
                if (pathname != "/access") {
                    return redirect(302, "/access");
                }
                else {
                    // return redirect(302, "/access#login");
                    return {

                    }
                }
            }
        }).catch(reason => {
            if (pathname != "/access") {
                return redirect(302, "/access");
            }
            else {
                // return redirect(302, "/access#login");
                return {

                }
            }
        });
    }).catch(reason => {
        if (pathname != "/access") {
            return redirect(302, "/access");
        }
        else {
            return {

            }
        }
        // return {}
    });
}

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
//     console.log(params);
//     return {
//         post: {

//         }
//     };
// }