import express from 'express'
import mongooseRestfulCrud from 'mongoose-restful-crud'
import Category from './../../schemas/Category'
const router = express.Router()

const crud = mongooseRestfulCrud(Category, {})

router.get('/', crud.get)
router.get('/:id', crud.getOne)
router.post('/', crud.post)
router.put('/:id', crud.put)
router.delete('/:id', crud.delete)

module.exports = router