import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const code = searchParams.get('code');

        if (!code) {
            return NextResponse.json(
                { success: false, error: 'Short code is required' },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("shortlink");
        const collection = db.collection("urls");

        // Find the URL mapping by short code
        const urlMapping = await collection.findOne({ shorturl: code });

        if (urlMapping) {
            return NextResponse.json({
                success: true,
                url: urlMapping.url,
                shorturl: urlMapping.shorturl
            });
        } else {
            return NextResponse.json(
                { success: false, error: 'Short URL not found' },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error('Error fetching URL:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
