const router = require("express").Router()
const pool = require('../config/db');

router.get("/", async (req, res) => {
    try {
        const allReview = await pool.query("select * from review;")
        return res.status(200).json(allReview.rows)
    } catch (err) {
        console.log(err.message)
        return res.status(500).send("Erreur serveur")
    }
})

router.get("/:id_user/:id_album", async (req, res ) => {
  try {
    const {id_user,id_album} = req.params
    const user = await pool.query('SELECT * FROM review where id_user = $1 and id_album = $2;', [id_user,id_album])
    return res.status(200).json(abonne.rows[0])
  } catch (err) {
    console.log(err.message)
    return res.status(500).send("Erreur serveur")
  }
})

router.post("/", async (req, res) => {
    try {
      const { identifiant, pseudo, bio, pronoms, localisation, mail, photo, mot_de_passe } = req.body;
      const newUser = await pool.query(
        "INSERT INTO userbox (identifiant, pseudo, bio, pronoms, localisation, mail, photo, mot_de_passe) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ;",
        [identifiant, pseudo, bio, pronoms, localisation, mail, photo, mot_de_passe]
      );
      res.status(201).json(newUser.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { identifiant, pseudo, bio, pronoms, localisation, mail, photo, mot_de_passe } = req.body;
      const updateUser = await pool.query(
        "UPDATE userbox SET pseudo = $2, bio = $3, pronoms = $4, localisation = $5, mail = $6 , photo = $7, mot_de_passe = $8 WHERE identifiant = $1 ;",
        [identifiant, pseudo, bio, pronoms, localisation, mail, photo, mot_de_passe]
      );
      res.json(updateUser.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

module.exports = router