const { Router } = require("express");
const product = require('./models/productModel')

const router = Router()

// POST
router.post(
    '/post',
    async (req, res) => {
        const data = new product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            images: req.body.images
        })
        try {
            const dataToSave = await data.save()
            res.status(200).json(dataToSave)
        } catch (error) {
            res.status(400).json({msg: error.message})
        }
    }
)

// GET ALL
router.get(
    '/getAll',
    async (req, res) => {
        try {
            const data = await product.find()
            res.json(data)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
)

// GET BY ID
router.get(
    '/getById/:id',
    async (req, res) => {
        try {
            const data = await product.findById(req.params.id)
            res.json(data)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
)

// PATCH
router.patch(
    '/update/:id',
    async (req, res) => {
        try {
            const id = req.params.id
            const updateData = req.body
            const options = {new: true}
            const result = await product.findByIdAndUpdate(id, updateData, options)
            res.send(result)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
)

// DELETE
router.delete(
    '/delete/:id',
    async (req, res) => {
        try {
          const id = req.params.id
          const data = await product.findByIdAndDelete(id)
          res.send(`${data.name} has been deleted`)  
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
)

// MESSAGE
router.post(
    '/message',
    async (req, res) => {
        if (req.body.name && req.body.email && req.body.message) {
            res.status(200).json({message: `Your message has been sent! ${req.body.message}`})
        } else {
            res.status(400).json({message: 'Message not correctly filled out'})
        }
    }
)


module.exports = router