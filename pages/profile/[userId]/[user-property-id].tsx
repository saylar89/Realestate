import { useRouter } from "next/router";

const UserProperty = () => {
  const router = useRouter();

  //if we search ""profile/aslan/vila""" then we have these logs

  console.log(router.pathname); // ==> /profile/[userId]/[user-property-id] //It shows the exact path on next js
  console.log(router.query); // ==> user-property-id: "vila"  userId: "aslan"

  //send a request to some backend server
  //to fetch the piece of data with an id of router.query.userId

  return <div>User Property</div>;
};

export default UserProperty;
