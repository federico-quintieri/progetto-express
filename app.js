// Importo express
const express = require("express");
// Creo un istanza di express richiamando la funzione
const app = express();
// Variabile per stabilire a che porta tengo aperto il server
const port = 3000;
// Importo il router
const router = require("./routes/homeRoutes");

// Utilizzo middleware per elaborare il corpo/body della richiesta in formato JSON
app.use(express.json());

// Middleware globale
app.use((req, res, next) => {
  console.log("Middleware globale eseguito");
  next();
});

// Richiamo router con tutti gli endpoint
app.use("/Products", router);

//  Avvio il server, lo metto in ascolto per chiamate API
app.listen(port, () => {
  console.log(`Server in ascolto a porta:${port}`);
});
