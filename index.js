const express = require("express");
const app = express();
const checkTime = require("./middleware/checkTime");
//app.get("/", (req, res) => {
// res.send("Hello World");
//});
app.use(express.json());
const port = process.env.PORT || 9000;

app.use(checkTime);
app.use(express.static("public"));
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port${port}...`);
});

//create data
// let users = [
//   {
//     name: "kaouther",
//     age: "23",
//     id: 5,
//   },
//   {
//     name: "sahar",
//     age: "27",
//     id: 4,
//   },
//   {
//     name: "malek",
//     age: "25",
//     id: 2,
//   },
// ];
// console.log(users);
// //get users
// //Get/api/users
// //description.display the list of users
// app.get("/api/users", (req, res) => {
//   res.status(200).json(users);
// });
// //add user
// //post/api/users
// //des add a user
// app.post("/api/users", (req, res) => {
//   let newUser = { ...req.body, id: Math.random() };
//   users.push(newUser);
//   res.status(200).json({
//     msg: "user is added with sucess",
//     users,
//   });
// });
// //Delete user
// //Delete/api/users/:id
// //disc Delete  user
// //app.delete("/api/users/:id", (req, res) => {
// //   let id = Number(req.params.id);
// //   console.log(req.params.id);
// //   users = users.filter((user) => user.id !== id);
// //   res.status(200).json({
// //     msg: "the user with the id ${id} has been deleted",
// //     users,
// //   });
// // });
// //Update user
// //Put/api/users/:id
// //disc update user
// app.put("/api/users/:id", (req, res) => {
//   let id = Number(req.params.id);
//   users = users.map((user) =>
//     user.id === id ? { ...user, ...req.body } : user
//   );
//   res.status(200).json({
//     msg: "the user has been updated",
//     users,
//   });
// });
