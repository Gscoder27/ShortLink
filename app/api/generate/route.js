import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.json();
    // console.log("Received data:", body); // Log the received data for debugging
    const client = await clientPromise;
    const db = client.db("shortlink");
    const collection = db.collection("urls"); 

    // Check if the short link exists in the database
    const shortLink = body.shorturl; // Use the short URL from the request body
    const urlMapping = await collection.findOne({ shorturl: shortLink });
    if(urlMapping){
        return Response.json({success:false, error:true, message: 'Short link already exists. Please choose a different one.' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
    })

    return Response.json({success:true, error:false, message: 'Short link generated successfully!' })
}
