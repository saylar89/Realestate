import { User } from "../models/user/user";

let users: object[] = [];

const myUser = new User(
  "Ashkan",
  "Ashtiani",
  39,
  "ashkan.ashtiani@gmail.com",
  "09132402868",
  "123987"
);

users.push(myUser);

localStorage.setItem("users", JSON.stringify(users));
