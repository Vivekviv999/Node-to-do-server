const http = require("http"); //importing http

const port = 8081; //port name

const toDoList = ["hey hope", "you all are", "doing well and", " awesome"]; //array

//creating a server
http.createServer((req, res)=>{
    //call back function
     const {method, url} = req;

     if(url === "/todos"){
        if(method === "GET")
         console.log("todos route n its a GET method")
          res.writeHead(200);
          res.write(toDoList.toString())

     }else if (url === "/") {
        console.log("/ home default route")
     }
     res.end();
})

.listen(port,()=>{
    console.log("node.js server started running on port ${port} ");
})