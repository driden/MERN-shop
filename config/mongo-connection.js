const keys = require("./keys")

const uri = `mongodb+srv://${keys.user}:${keys.password}@merntodo-nub0f.mongodb.net/test?retryWrites=true&w=majority`

module.exports =  uri