async function getJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  document.querySelector('#joke').innerHTML = data.joke;
}

getJoke();

document.querySelector('button').addEventListener('click', getJoke);
