//const fetch = require('node-fetch');
import fetch from 'node-fetch'
//import { resolve } from 'path';

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
  .then(response => {
    console.log('User details:', response);
  })
  .catch(error => {
    console.error('Error fetching user details:', error.message);
  });
