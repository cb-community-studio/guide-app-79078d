const users = require("./users/users.service.js");
const people = require("./people/people.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(people);
  // ~cb-add-configure-service-name~
};
