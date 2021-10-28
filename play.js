const config = './config.json'
const storage = require('./index')
const firebase = require('@firebase/app')

const fireConnect = () => {
	try { firebase.initializeApp(config) } catch (ex) { console.log(ex) }
	console.log(`connected`)
}

const getPic = async () => {
	const link = await storage.uploadImage('https://thumbs.dreamstime.com/b/beautiful-woman-shows-small-size-looking-her-finger-wearing-white-shirt-denim-jacket-brunette-lady-knot-192372221.jpg')
	console.log(`link :  ${ link }`)
}

fireConnect()
getPic()
