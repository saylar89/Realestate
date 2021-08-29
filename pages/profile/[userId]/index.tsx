import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();

  console.log(router.pathname); // ==> /profile/[userId] //It shows the exact path on next js
  console.log(router.query); // ==> userId: "aslan" // aslan is just a sample

  //send a request to some backend server
  //to fetch the piece of data with an id of router.query.userId

  const loadPropertyHandler = () => {
    router.push("/profile/Aslan/villa01");
  };

  const loadPropertyHandler2 = () => {
    router.push({
      pathname: "/profile/[userId]/[user-property-id]",
      query: { userId: "Amir", "user-property-id": "apartment01" },
    });
  };

  const loadPropertyHandler3 = () => {
    router.replace("/profile/Ashkan/land01");
  };

  return (
    <div>
      <h2>User Profile</h2>
      <button onClick={loadPropertyHandler}>Villa</button>
      <button onClick={loadPropertyHandler2}>Villa</button>
      <button onClick={loadPropertyHandler3}>Villa</button>
    </div>
  );
};

export default UserProfile;
