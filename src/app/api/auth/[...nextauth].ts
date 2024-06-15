import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'default-client-id', // Replace 'default-client-id' with a fallback
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'default-client-secret', // Replace 'default-client-secret' with a fallback
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/page',  // Custom sign-in page
  },
});
