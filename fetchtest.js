const fetch = require('node-fetch');

function fetchGitHubUsers(username) {
  const apiUrl = `https://api.github.com/users/${username}`;

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Example usage
const username = 'octocat'; // Replace with the GitHub username you want to fetch
fetchGitHubUsers(username)
  .then(user => {
    console.log('User details:', user);
  })
  .catch(error => {
    console.error('Error fetching user details:', error.message);
  });
