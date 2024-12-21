import comments from "@/app/(API)/data/data"
import { headers } from "next/headers";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    if (query) {
        const filteredComments = comments.filter(com => com.text.toLowerCase().includes(query.toLowerCase()))
        return Response.json(filteredComments)
    } else {
        return Response.json(comments)
    }
}

export async function POST(req) {
    const comment = await req.json()
    console.log(comment);
    const newComment = { id: comments.length + 1, text: comment.text }
    comments.push(newComment)
    // return Response.json(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': "application/json",
        },
        status: 201
    },
    )
}