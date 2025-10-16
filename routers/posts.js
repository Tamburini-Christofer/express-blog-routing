//todo Importo Express
const express = require("express");

//todo Creo il router
const router = express.Router();

const posts = [
    {
      id: 1,
      title: "Il ciambellone",
      content:
        "Un dolce semplice e profumato, perfetto per la colazione o la merenda. Morbido, genuino e irresistibilmente casalingo.",
      image: "/public/images/ciambellone.jpeg",
      tags: ["dolci", "tradizione", "colazione"],
    },
    {
      id: 2,
      title: "I cracker alla barbabietola",
      content:
        "Croccanti e colorati, questi cracker alla barbabietola sono uno snack salutare e sorprendente, perfetto per accompagnare formaggi o hummus.",
      image: "/public/images/cracker_barbabietola.jpeg",
      tags: ["snack", "salati", "vegetariani"],
    },
    {
      id: 3,
      title: "Il buonissimo pane fritto dolce",
      content:
        "Un classico delle feste: soffice pane fritto ricoperto di zucchero, da gustare caldo per un tuffo nei ricordi d’infanzia.",
      image: "/public/images/pane_fritto_dolce.jpeg",
      tags: ["dolci", "tradizione", "streetfood"],
    },
    {
      id: 4,
      title: "La pasta alla barbabietola",
      content:
        "Un primo piatto dal colore vivace e dal sapore delicato, ideale per stupire a tavola con un tocco di originalità.",
      image: "/public/images/pasta_barbabietola.jpeg",
      tags: ["primi", "vegetariani", "creativi"],
    },
    {
      id: 5,
      title: "La torta paesana",
      content:
        "Ricca, rustica e piena di gusto: la torta paesana è un dolce della tradizione lombarda a base di pane raffermo, cacao e latte.",
      image: "/public/images/torta_paesana.jpeg",
      tags: ["dolci", "tradizione", "ricette_di_casa"],
    },
]

//?GET
//todo Restituisco la lista di tutti i post
router.get("/", (req, res) => {
  //todo Restituisco in formato JSON
    res.json({
      message: "Ecco tutti i post",
      data: posts
    });
});

//?SHOW
//todo Mostro un solo post
router.get("/:id", (req, res) => {
  //todo Recupero l'id dai parametri della rotta
  const postId = parseInt(req.params.id);

  //todo Restituisco in formato JSON
  const post = posts.find(p => p.id === postId);

  if (post) {
    res.json({
      message: `Ecco il post con id ${postId}`,
      data: post
    });
  } else {
    res.status(404).json({
      message: `Post con id ${postId} non trovato`
    });
  } 
});

//?CREATE 
//todo Creo un nuovo post
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});


  




module.exports = posts;