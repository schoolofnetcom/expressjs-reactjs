module.exports = (app) => {
	app.use('/hello', require('./api/hello/'))
	app.use('/category', require('./api/category/'))
	app.use('/bill', require('./api/bill/'))
}