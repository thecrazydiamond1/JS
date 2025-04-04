//When working with APIs, we need to handle Network errors(e.g., no internet) and HTTP errors(e.g., 404 Not found).
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Post", body: "This is a test." })
    });
  
    // Check for HTTP errors (like 404, 500)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    // If no errors, process the JSON response
    const data = await response.json();
    console.log("Post created:", data);
  
  } catch (error) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      // This is a network error (e.g., no internet connection)
      console.error("Network error: Unable to reach the server. Please check your internet connection.");
    } else {
      // Handle HTTP errors or other types of errors
      console.error("Error:", error.message);
    }
  }
  