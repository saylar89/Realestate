import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/layout/layout"));
const FormikContainer = dynamic(() => import("components/forms/signUp/signup"));

const SignUp = () => {
  return (
    <Layout pageTitle="Sign-Up">
      <FormikContainer />
    </Layout>
  );
};

export default SignUp;
