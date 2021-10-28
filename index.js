const fetch = require('node-fetch');
const firebase = require('@firebase/app')
require("firebase/storage");

const uploadImage = async (image , picPath) => {

    console.log('image 2 blob')
    const resp = await fetch(image)
    const blob = await resp.blob()

    const Buffer = await blob.arrayBuffer()

    var storageRef = firebase.storage().ref('/WooPix')
    // var random = getRandom(0, 99999999)
    // var picPath = `pic_${random}.jpg`
    var ref = storageRef.child(picPath)
    var metadata = { contentType: 'image/jpeg', public: true }

    await ref.put(Buffer, metadata)
    var downloadUrl = await ref.getDownloadURL()
    console.log('Download Url :: ' + downloadUrl)

    // return ({ src: downloadUrl, filePath: '/WooPix/' + picPath, success: true })
    return downloadUrl
}


const fn = () => {
    console.log("success")
}


module.exports = {
    uploadImage,
    fn
}

