var http = require('http');
var server = http.createServer(function(req,res) {
    var url = req.url;
    var num = 0
    num++
    console.log(num+':'+req.method);
    
    if (url == '/') {
        res.end('Bem vindo a página inicial')
    } else if (url == '/cursos') {
        res.end(`Bem vindo a pagina de ${url}`)
    } else if (url == '/esportes') {
        res.end(`Bem vindo a pagina de ${url}`)
    } else if (url == '/pesquisa') {
        res.end(`Bem vindo a pagina de ${url}`)
    } else if (url == '/esportes') {
        res.end(`Bem vindo a pagina de ${url}`)
    } else if (url == '/extensao') {
        res.end(`Bem vindo a pagina de ${url}`)
    } else if (url == '/ensino') {
        res.end(`Bem vindo a pagina de ${url}`)
    } else {
        res.end('Página Inexistente 404')
    }
}).listen(3000)