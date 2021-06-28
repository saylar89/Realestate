import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import SignupForm from "../components/signupform";

const SignUp = () => {
  return (
    <Layout pageTitle="signup">
      <SignupForm />
    </Layout>
  );
};

export default SignUp;
