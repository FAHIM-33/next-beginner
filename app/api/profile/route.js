import { headers, cookies } from "next/headers";

export async function GET(req) {
    // const requestHeaders = new Headers(req.headers) raw
    const headersList = headers()
    // console.log(requestHeaders.get('balsal'));
    console.log(headersList.get('balsal'));
    cookies().set('page', '2')

    // console.log(req.cookies.get('theme')); raw
    console.log(cookies().get('page'));

    return new Response('ladasf', {
        headers: {
            "Set-cookie": 'theme=dark'
        }
    })
}