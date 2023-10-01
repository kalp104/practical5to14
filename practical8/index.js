const fetchData = require("./fetchData")

async function main() {
  const username = "kalp104"; // Replace with the GitHub username you want to fetch
  const userData = await fetchData(username);
  const {login, id, node_id, url} = userData;

  if (userData) {
    console.log("User Data:");
    console.log(`
id : ${id}
login : ${login}
node_id : ${node_id}
url : ${url}
`);
  } else {
    console.log("User not found or request failed.");
  }
}

main();
