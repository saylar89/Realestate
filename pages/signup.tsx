import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout/layout";
import FormikContainer from "components/forms/signUp/signup";

const SignUp = () => {
  return (
    <Layout pageTitle="Sign-Up">
      <FormikContainer />
    </Layout>
  );
};

export default SignUp;
