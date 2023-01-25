const mongoose = require('mongoose')


const druzynaScheme = mongoose.Schema({
    name:String,
    admin: String,
    adminEmail: String

})

module.exports = mongoose.model('Hufiec', druzynaScheme)