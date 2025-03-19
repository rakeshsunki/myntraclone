const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enabled CORS
server.use(cors());
server.use(middlewares);
server.use(router);

// Used Render-assigned PORT (Default: 4000 if running locally)
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Myntra Clone JSON Server is running on port ${PORT}`);
});
