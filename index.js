import http  from "node:http";

const server=http.createServer((_req,res)=>{
    if (req.url === "/a/login" && req.method === "GET") {
        res.end("Hii amalia");
    }    
});

server.listen(3000);
console.log("server berjalan di http://localhost:3000");