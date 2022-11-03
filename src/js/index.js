// const setter = {
//   name: "Laman",
//   surname: "Yagubova",
//   avatar: "https://cdn.fakercloud.com/avatars/joemdesign_128.jpg",
//   //   id: "25",
// };

// function setUser(data) {
//   fetch("https://624b18f944505084bc4c1fed.mockapi.io/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }

// setUser(setter);
// // const fetchedJson = fetched.then((item) => item.json());
// // fetchedJson
// //   .then((item) => {
// //     console.log(item);
// //   })
// //   .catch((err) => console.log(err));
// const fetched = fetch("https://624b18f944505084bc4c1fed.mockapi.io/users");

// fetched.then((response) => response.json()).then((data) => console.log(data));

// const promise = new Promise((resolve, reject) => {
//   if (1 === 1) {
//     resolve([{ name: "salam", surname: "p326" }]);
//   } else {
//     reject("Error by blabla");
//   }
// });

// // console.log();

// promise
//   .then(
//     (response) => console.log("response:", response)
//     //   (res) => console.log("res:", res)
//   )
//   .catch((res) => console.log("res:", res));

import { getAllUsers, getUserById } from "./actions/mockdata.js";

// console.log(getAllUsers());
getAllUsers().then((data) => console.log(data));
getUserById("23").then((data) => console.log(data));
