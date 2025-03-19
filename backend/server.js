const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(middlewares);
server.use(router);
app.use(cors());
server.listen(4000, () => {
  console.log("JSON Server is running on port 4000");
});

