import UserProfile from "../components/profile/user-profile";
import Layout from "components/layout/layout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

const ProfilePage = () => {
  return (
    <Layout pageTitle="Profile">
      <UserProfile />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProfilePage;
