const express = require('express');
const Kid = require('../models/Kid');
const router = express.Router();

/**
 * @route GET /
 * @description Fetch all kids
 */
router.get('/', async (req, res) => {
  try {
    const kids = await Kid.find();
    res.json(kids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @route POST /
 * @description Create a new kid
 */
router.post('/', async (req, res) => {
  const kid = new Kid({
    name: req.body.name,
    age: req.body.age,
    schoolLevel: req.body.schoolLevel
  });

  try {
    const newKid = await kid.save();
    res.status(201).json(newKid);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route GET /:id
 * @description Fetch a single kid by ID
 */
router.get('/:id', getKid, (req, res) => {
  res.json(res.kid);
});

/**
 * @route PUT /:id
 * @description Update a kid by ID
 */
router.put('/:id', getKid, async (req, res) => {
  if (req.body.name != null) {
    res.kid.name = req.body.name;
  }
  if (req.body.age != null) {
    res.kid.age = req.body.age;
  }
  if (req.body.schoolLevel != null) {
    res.kid.schoolLevel = req.body.schoolLevel;
  }
  try {
    const updatedKid = await res.kid.save();
    res.json(updatedKid);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route DELETE /:id
 * @description Delete a kid by ID
 */
router.delete('/:id', getKid, async (req, res) => {
  try {
    await res.kid.remove();
    res.json({ message: 'Deleted Kid' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @middleware getKid
 * @description Middleware to fetch a single kid by ID
 */
async function getKid(req, res, next) {
  let kid;
  try {
    kid = await Kid.findById(req.params.id);
    if (kid == null) {
      return res.status(404).json({ message: 'Cannot find kid' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.kid = kid;
  next();
}

module.exports = router;
