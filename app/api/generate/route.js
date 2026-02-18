import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db("shortlink");
        const collection = db.collection("urls"); 

        // Check if the short link exists in the database
        const shortLink = body.shorturl;
        const urlMapping = await collection.findOne({ shorturl: shortLink });
        if(urlMapping){
            return Response.json({success:false, error:true, message: 'Short link already exists. Please choose a different one.' })
        }

        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            visit: 0 // Initialize visit count
        })

        return Response.json({success:true, error:false, message: 'Short link generated successfully!' })
    } catch (error) {
        console.error("Error in /api/generate:", error);
        return Response.json({ success: false, error: true, message: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}
