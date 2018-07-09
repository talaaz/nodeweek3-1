import * as http from "http";

let state = 10;

createServer((req, res) => {
    console.log(req.method, req.url);
    console.log(state);
    // state
    // response: the current state in a html format
    // when the server starts, this should return "10"
    //http://localhost:8080/state
    if (req.url === "/") {
      res.write(`this is the webserver with state ${state}`)
      return res.end();
    } else if (req.url === "/state") {

      res.write(JSON.stringify(state))
      return res.end();
    }
    // /add
    // Response: "ok" in html format
    // This should add 1 to the current state
    //http://localhost:8080/add
    else if (req.url === "/add") {
      state += 1;
      res.write("adding")
      return res.end();
    }

    // /remove
    // Response: "ok" in html format
    // This should subtract 1 ƒrom the current state
    //http://localhost:8080/remove
    else if (req.url === "/remove") {
      state -= 1;
      res.write("removing")
      return res.end();
    }
    // /reset
    // Response: "ok" in html format
    // This should set the state back to 10
    //http://localhost:8080/reset
    else if (req.url === "/reset") {
      state = 10;
      res.write("reseting")
      return res.end();
    }
    // Any other URL
    // Response: return error code 404: Not found with a friendly message
    // and do not change the state variable
    //http://localhost:8080/subtract
    else {
      res.statusCode = 404;
      res.write("not found");
    }
    res.end();
  })
  .listen(8080);
