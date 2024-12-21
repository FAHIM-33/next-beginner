import comments from "@/app/(API)/data/data"
import { headers } from "next/headers";

export async function GET() {
    return Response.json(comments)
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