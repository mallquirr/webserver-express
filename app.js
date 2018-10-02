const http = require('http');
http.createServer((req, res)=>{
//    res.write('testing set up');
//    res.end();
    res.writeHead(200, {'Content-TYpe':'application/json'});

    let salida = {
        nombre:'rodrigo',
        signo: 'sagitario',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8081);
console.log('Escuchando el puerto 8080');