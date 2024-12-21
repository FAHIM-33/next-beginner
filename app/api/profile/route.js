import { headers } from "next/headers";

export async function GET(req) {
    // const requestHeaders = new Headers(req.headers)
    const headersList = headers()
    // console.log(requestHeaders.get('balsal'));
    console.log(headersList.get('balsal'));
    return new Response('ladasf')
}