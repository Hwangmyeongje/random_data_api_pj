const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();

app.get("/fake/users/", function (req, res) {
  const { num } = req.query;
  let index = 1;
  let users = [];

  while (i <= num) {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      contact: faker.phone.number({ style: "national" }),
    });
    i++;
  }
  res.status(200).json(users);
});

app.listen(5555);
