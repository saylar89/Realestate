import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import SignupForm from "../components/forms/signupform";
import SignUp2 from "components/forms/signup2";
import FormikContainer from "components/forms/formikContainer";

const SignUp = () => {
  return (
    <Layout pageTitle="signup">
      <FormikContainer />
    </Layout>
  );
};

export default SignUp;
