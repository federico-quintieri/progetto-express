// Faccio un array di oggetti qui solo a scopo didattico perché non abbiamo ancora fatto i database
const arrayOggetti = [
  {
    nome: "Billy",
    eta: 50,
  },
  {
    nome: "Ruby",
    eta: 10,
  },
  {
    nome: "Marco",
    eta: 70,
  },
];

// Definizione callback function per gli endpoint

// Index
const index = (request, result) => {
  result.json("Ti mostro tutte le risorse");
};

// Show
const show = (request, result) => {
  result.json("Ti mostro una sola risorsa specifica");
};
// Store
const store = (request, result) => {
  result.json(
    "Inserisco una risorsa che mi hai mandato tramite il corpo della richiesta API"
  );
};
// Update
const update = (request, result) => {
  result.json("Aggiorna una risorsa già presente");
};

// Modify
const modify = (request, result) => {
  result.json("Modifico solo alcune proprietà della risorsa");
};

// Destroy
const destroy = (request, result) => {
  result.json("Cancello una risorsa specifica");
};

// Esporto le mie callback function
module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
