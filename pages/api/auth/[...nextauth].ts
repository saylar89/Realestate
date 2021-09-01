import { verifyPassword } from "helpers/auth";
import { connectDatabase } from "helpers/db-util";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

type CredenType = {
  email: string;
  password: string;
};

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credsentials: CredenType) {
        const client = await connectDatabase();

        const usersCollection = client.db().collection("signUp");

        const user = await usersCollection.findOne({
          email: credsentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("Email or password is incorrect");
        }

        const isValid = await verifyPassword(
          credsentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Email or password is incorrect");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
