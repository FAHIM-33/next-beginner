import comments from "@/app/(API)/data/data";

export async function GET(_request, { params }) {
    const commentId = params.id
    const comment = comments.find(com => com.id.toString() === commentId.toString())
    return Response.json(comment)
}

export async function PATCH(request, { params }) {
    const requestCommnet = await request.json()
    const commentId = params.id
    const commentIdx = comments.findIndex(com => com.id.toString() === commentId.toString())
    comments[commentIdx].text = requestCommnet.text
    return Response.json(comments[commentIdx])
}

export async function DELETE(request, { params }) {

    const commentId = params.id
    const commentIdx = comments.findIndex(com => com.id.toString() === commentId.toString())
    if (commentIdx < 0) { return Response.json({ error: 'Comment does not exist' }) }
    const commentsToDelete = comments[commentIdx]
    comments.splice(commentIdx, 1)

    return Response.json({ deleteOption: `Comment number ${commentId} is deleted.`, ...commentsToDelete })
}