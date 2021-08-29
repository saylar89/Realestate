import dynamic from "next/dynamic";
const ContactComp = dynamic(() => import("components/forms/contact"));
const Layout = dynamic(() => import("components/layout/layout"));

const ContactUs = () => {
  return (
    <Layout pageTitle="Contact Us">
      <div>
        <ContactComp />
      </div>
    </Layout>
  );
};

export default ContactUs;
