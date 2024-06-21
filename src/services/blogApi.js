export async function fetchBlogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json()
    return data
}

export async function fetchBlog(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    const data = await res.json()
    return data
}
