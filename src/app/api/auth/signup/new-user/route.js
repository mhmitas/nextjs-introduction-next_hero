import connectDB from "@/lib/connectDB"

export const POST = async (request) => {
    try {
        const db = await connectDB()
        const userColl = db.collection('users')
        // ---------
        const newUser = await request.json()
        const res = await userColl.insertOne(newUser)
        return Response.json({ message: 'new user created', res })
    } catch (err) {
        console.error(err);
        return Response.json({ message: 'something went wrong' })
    }
}