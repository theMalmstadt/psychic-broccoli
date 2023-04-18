const { MongoClient } = require('mongodb');


ConnectMongodb = async () => {
    const uri = "mongodb+srv://Sneevle:xrohapS9cYqrw2tS@cluster0.jfsa202.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri)

    try {
        return await client.connect()
    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }

}

export default ConnectMongodb