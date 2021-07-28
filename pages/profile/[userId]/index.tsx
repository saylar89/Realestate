import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();

  console.log(router.pathname); // ==> /profile/[userId] //It shows the exact path on next js
  console.log(router.query); // ==> userId: "aslan" // aslan is just a sample

  //send a request to some backend server
  //to fetch the piece of data with an id of router.query.userId

  return <div>User Profile</div>;
};

export default UserProfile;
