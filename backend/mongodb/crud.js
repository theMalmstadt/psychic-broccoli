// Add functions that make DB calls here
async function createListing(client, newListing) {
    const result = await client.db("stickers").collection("stickerlistings").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

export default createListing