const router = require("express").Router()
const pool = require('../config/db');

router.get("/", async (req, res) => {
    try {
        const allAbonnes = await pool.query("select * from userbox")
        return res.status(200).json(allAbonnes.rows)
    } catch (err) {
        console.log(err.message)
        return res.status(500).send("Erreur serveur")
    }
})

router.get("/:id", async (req, res ) => {
  try {
    const {id} = req.params
    const abonne = await pool.query('SELECT * FROM userbox where identifiant = $1', [id])
    return res.status(200).json(abonne.rows[0])
  } catch (err) {
    console.log(err.message)
    return res.status(500).send("Erreur serveur")
  }
})

module.exports = router