import { redirect } from 'next/navigation';
import clientPromise from '@/lib/mongodb';

export default async function ShortCodeRedirect({ params }) {
  const { shortCode } = await params;

  if (!shortCode) {
    redirect("/");
  }

  let urlMapping = null;

  try {
    const client = await clientPromise;
    const db = client.db("shortlink");
    const collection = db.collection("urls");
    
    // Atomically find the document and increment the visit count
    const result = await collection.findOneAndUpdate(
      { shorturl: shortCode },
      { $inc: { visit: 1 } },
      { returnDocument: "after" } // Return the updated document
    );

    urlMapping = result;
  } catch (error) {
    console.error('Error fetching short URL:', error);
    // If there is a DB error, we will render the error page below
    return (
      <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-6">
            Something went wrong while trying to redirect you.
          </p>
          <a 
            href="/"
            className="inline-block bg-purple-500 text-white rounded-lg shadow-lg px-6 py-3 font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-105"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }

  if (urlMapping) {
      redirect(urlMapping.url);
  }

  // If URL not found
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">🔗</div>
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Link Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, this short link doesn't exist or may have expired.
        </p>
        <a 
          href="/"
          className="inline-block bg-purple-500 text-white rounded-lg shadow-lg px-6 py-3 font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-105"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
