const { NextResponse } = require("next/server");

export function middleware(req) {
    // return NextResponse.json({
    //     hello: 'blah blah blah..'
    // })
    console.log(req.url);

    return NextResponse.redirect(new URL('/posts/2', req.url))

    // return NextResponse.next() 
    // a;ldkfjasdklasdlasdd
}
export const config = {
    matcher: "/dashboard"
}
