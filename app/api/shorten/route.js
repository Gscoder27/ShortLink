// In-memory storage for URL mappings
// Note: This will reset when the server restarts
// For production, use a database like MongoDB, PostgreSQL, etc.
const urlMappings = new Map();

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shortCode } = body;

    // Validation
    if (!url || !shortCode) {
      return Response.json(
        { success: false, error: 'URL and short code are required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (e) {
      return Response.json(
        { success: false, error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Check if short code already exists
    if (urlMappings.has(shortCode)) {
      return Response.json(
        { success: false, error: 'This short code is already taken. Please choose another one.' },
        { status: 409 }
      );
    }

    // Store the mapping
    urlMappings.set(shortCode, url);

    // Return success with the full short URL
    const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/${shortCode}`;
    
    return Response.json(
      { success: true, shortUrl, shortCode },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in shorten API:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve a URL by short code
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const shortCode = searchParams.get('code');

    if (!shortCode) {
      return Response.json(
        { success: false, error: 'Short code is required' },
        { status: 400 }
      );
    }

    const originalUrl = urlMappings.get(shortCode);

    if (!originalUrl) {
      return Response.json(
        { success: false, error: 'Short code not found' },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, url: originalUrl },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in GET shorten API:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
