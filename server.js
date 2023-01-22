const express = require("express");

const app = express();

app.use(express.json());
const port = 8081;
const todolist = ["Complete Node Byte", "Play Cricket","Abba nhi Manenge"];

app.get("/todos", (req, res) => {
  res.status(200).send(todolist);

});

app.post("/todos", (req, res) => {
  let newtodolist = req.body.item;
  todolist.push(newtodolist);
  res.status(201).send({
    message: "Your task is done now"
  });
});

app.delete("/todos", (req, res) => {
  const todelete = req.body.item;
  todolist.find((element, index) => {
    if (element === todelete) {
      todolist.splice(index, 1);
    }
  });

  res.status(202).send({
    message: `deleted item - $ {req.body.item}`
  });
});

//just some additional examples
//app.get("/todos/create")
//app.post("/todos/create")


//all the others method in particular routes
app.all("/todos", (req, res) => {
  res.status(501).send({
    "messsge" : "Tumse Na Ho Payega"
  });
});

//all the others routes
app.all('*', (req, res) => {
  res.status(404).send({
    message : "Areh kaha Aa Gye Ho"
  })
})

app.listen(port, () => {
  console.log(`Nodejs server started on ${port}`)
});