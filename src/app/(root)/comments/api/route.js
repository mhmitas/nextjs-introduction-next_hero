
export async function GET() {
    return Response.json(
        comments,
        {
            headers: {
                "Set-Cookie": 'theme=dark'
            }
        }

    )
}

export async function POST(request) {
    const newComment = await request.json()
    console.log(newComment)
    comments.push(newComment)
    return Response.json({
        comments
    })
}


const comments = [
    { comment: 'comment 1', id: 1 },
    { comment: 'comment 2', id: 2 },
    { comment: 'comment 3', id: 3 },
]