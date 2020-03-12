const server = require("./api/server.js");
//make the port be assigned by the server
// heroku will place the .PORT environment value on thier server// gave heroku the power to change ports if needed
const port = process.env.PORT || 5000;  // PORT here has to be uppercase, reserved keyword in linux
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
