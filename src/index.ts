import fetchUser from "./githubAPI";

(async () => {
  const userData = await fetchUser('gdpp');
  document.querySelector('h1').innerHTML = JSON.stringify(userData);
})()