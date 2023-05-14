const http = require('http');
const os = require('os');

const hostname = '0.0.0.0'; //adres do nasluchiwania
const port = 3000; //port do nasluchiwania

//serwer HTTP
const server = http.createServer((req, res) => {
  const ip = req.connection.remoteAddress;
  const date = new Date().toLocaleString();

// nagłówki HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // tres wysiwetlana na stronie w html
  res.write('<html><body>');
  res.write('<h1>Informacje o kliencie</h1>');
  res.write(`<p>Adres IP: ${ip}</p>`);
  res.write(`<p>Data i godzina: ${date}</p>`);
  res.write('</body></html>');
  res.end();
});
//uruchamiam serwer i podaje informacje w konsoli
server.listen(port, hostname, () => {
  const author = 'Szymon Prygiel';
  const date = new Date().toLocaleString(); 
      //ta czesc jest z githuba, bo mimo staran nie potrafilem samodzielnie wyciagnac ip
  const ip = Object.values(os.networkInterfaces())
    .flat()
    .filter((iface) => iface.family === 'IPv4' && !iface.internal)
    .map((iface) => iface.address)[0];
      //
  console.log(`Serwer uruchomiony przez: ${author}`);
  console.log(`Data uruchomienia: ${date}`);
  console.log(`Nasluchiwanie na porcie ${port}`);
  console.log(`Adres IP serwera: ${ip}`);
});
