const router = require("express").Router()
const pool = require('../config/db');

router.get("/", async (req, res) => {
    try {
        const allUsers = await pool.query("select * from userbox;")
        return res.status(200).json(allUsers.rows)
    } catch (err) {
        console.log(err.message)
        return res.status(500).send("Erreur serveur")
    }
})

router.get("/id/:id", async (req, res ) => {
  try {
    const {id} = req.params;
    const user = await pool.query('SELECT * FROM userbox where identifiant = $1;', [id]);
    res.json(user.rows);
  } catch (err) {
    console.log(err.message);
  }
})

router.get("/mail/:mail", async (req, res ) => {
  try {
    const {mail} = req.params
    const user = await pool.query('SELECT * FROM userbox where mail = $1;', [mail])
    return res.status(200).json(user.rows)
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({message: "Erreur serveur"})
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