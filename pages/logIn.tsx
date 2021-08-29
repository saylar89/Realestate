import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = dynamic(() => import("../components/layout/layout"));
const LogInComp = dynamic(() => import("../components/forms/logIn/logInComp"));

const SignUp = () => {
  return (
    <Layout pageTitle="Log-In">
      <LogInComp />
    </Layout>
  );
};

export default SignUp;
