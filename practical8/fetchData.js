// Create an async function to fetch GitHub user data by username
 async function fetchData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        return userData;
      } else {
        return null; // User not found or request failed
      }
    } catch (error) {
      return null; // Request failed
    }
  }
  
  module.exports = fetchData;