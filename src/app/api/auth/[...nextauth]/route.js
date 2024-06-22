import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

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
                    const currentUser = users.find(user => user?.email === email)
                    if (currentUser && currentUser.password === password) {
                        return currentUser
                    }
                }
                return null
            }
        }),
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

const users = [
    { id: '1', name: 'Mahim', email: 'mahimbabu@gmail.com', password: 'mahimbabu', type: 'user', image: 'https://picsum.photos/200/300' },
    { id: '2', name: 'Mitas', email: 'mitas@email.com', password: 'mahimbabu', type: 'admin', image: 'https://picsum.photos/200/300' }
]