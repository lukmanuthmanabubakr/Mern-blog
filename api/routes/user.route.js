import express from "express";

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({message: `Api is working fine`})
})

// module.exports = router;
export default router;