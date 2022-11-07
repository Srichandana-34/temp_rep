const http = require('http')

const server= http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.end('welcome to home page');
    }
    if(req.url==='/about')
    {
        res.end('Here is about us');
    }
    res.end(`<h1>OPPs!</h1>
    <p>We are unable to find the page you are searching for</p>
    <a href="/">back home</a>
    enter valid address
    `)
//console.log(req);
//res.write('Welcome to our homepage')
//res.end()
})
server.listen(5000) // listen on port 5000