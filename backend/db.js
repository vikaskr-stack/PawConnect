const Datastore = require('nedb-promises')

const db = {
    users: Datastore.create({ filename: './data/users.db', autoload: true }),
    pets: Datastore.create({ filename: './data/pets.db', autoload: true }),
    posts: Datastore.create({ filename: './data/posts.db', autoload: true })
}

module.exports = db