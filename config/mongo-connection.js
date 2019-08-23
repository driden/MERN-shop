import { user, password } from "./keys"

const uri = `mongodb+srv://${user}:${password}@merntodo-nub0f.mongodb.net/test?retryWrites=true&w=majority`

module.exports = {
    mongoURI: uri
}