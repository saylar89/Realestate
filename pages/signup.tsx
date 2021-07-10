import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import FormikContainer from "components/forms/formikContainer";

const SignUp = () => {
  return (
    <Layout pageTitle="Sign-Up">
      <FormikContainer />
    </Layout>
  );
};

export default SignUp;
