import config from "@/utils/config";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: config.githubClientId,
      clientSecret: config.githubClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log("callback token: ", token);

      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;

      console.log("callback session: ", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
