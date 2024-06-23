import connectDB from "@/lib/connectDB"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";



export const authOption = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: 'email',
                    require: true,
                    placeholder: 'Your Email'
                },
                password: {
                    label: "Password",
                    type: 'text',
                    require: true,
                    placeholder: 'Your Password'
                },
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!credentials) {
                    return null
                }
                if (email) {
                    const db = await connectDB()
                    const userColl = db.collection('users')
                    const currentUser = await userColl.findOne({ email: email })
                    console.log({ currentUser });
                    if (currentUser && currentUser.password === password) {
                        return currentUser
                    }
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type;
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        }
    }
}
const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
