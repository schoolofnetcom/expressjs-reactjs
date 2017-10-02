import mongoose from 'mongoose'

const Category = new mongoose.Schema({
	name: { type: String, required: true },
	date_created: { type: Date, default: Date.now() }
})

export default mongoose.model('Category', Category)