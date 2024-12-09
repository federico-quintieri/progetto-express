// Faccio callback function middleware per controllare se esiste un determinato id nel nostro array di oggetti
const middlewareCheckId = (request, result, next) => {
  console.log("Vengo eseguito solo agli endpoint con parametro id");
  next();
};

module.exports = middlewareCheckId;
