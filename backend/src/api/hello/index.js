import express from 'express'
const router = express.Router()

import hello from './hello'

router.get('/', hello)

module.exports = router