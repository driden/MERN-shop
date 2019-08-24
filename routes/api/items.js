const express = require('express')
const router = express.Router()

const Item = require('../../models/Item')

// @route  GET api/items
// @desc   GET All Items
// @access Public
router.get('/', (req, response) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => response.json(items))
})

// @route  POST api/items
// @desc   POST an item
// @access Public
router.post('/', (req, response) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => response.json(item))
})

// @route  DELTE api/items/:id
// @desc   DELTE an item
// @access Public
router.delete('/:id', (req, response) => {
    Item.findById(req.params.id)
        .then(item => item.remove())
        .then(() => response.json({ success: true }))
        .catch(err => response.status(404).json({ success: false }))
})


module.exports = router