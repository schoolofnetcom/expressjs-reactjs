import mongoose from 'mongoose'

const Bill = new mongoose.Schema({
	name: { type: String, required: true },
	value: { type: Number, required: true },
	type: { type: String, enum: ['IN', 'OU'], required: true },
	category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category', required: true }
})

export default mongoose.model('Bill', Bill)