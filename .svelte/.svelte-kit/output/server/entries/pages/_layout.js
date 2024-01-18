import { r as redirect } from "../../chunks/index.js";
const ssr = false;
const load = async ({ param, route, url }) => {
  let pathname = await url.pathname;
  await fetch("/usercheck", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async function(response) {
    var responseData;
    await response.json().then((value) => {
      console.log(pathname);
      console.log(value);
      responseData = value;
      if (responseData["username"] != "") {
        return {};
      } else {
        if (pathname != "/access") {
          return redirect(302, "/access");
        } else {
          return {};
        }
      }
    }).catch((reason) => {
      if (pathname != "/access") {
        return redirect(302, "/access");
      } else {
        return {};
      }
    });
  }).catch((reason) => {
    if (pathname != "/access") {
      return redirect(302, "/access");
    } else {
      return {};
    }
  });
};
export {
  load,
  ssr
};