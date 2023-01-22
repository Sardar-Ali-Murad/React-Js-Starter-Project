rename .env.local to .env put your own credentials in the .env these are mine 
npm install first and for the development use npm start the start commant for the development mode is setup-start
in the cors in the server.js put the client src like local host:3000 in development but in the production host the next js app and put the src in the cors in server.js
You just need to put the src in cors in server.js and put the proxy in package.json in client which point to the src of the server src and there will be no Cors Error
