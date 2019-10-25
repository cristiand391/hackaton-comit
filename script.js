function showUserData() {
  let user = getUserData().then(function (user) {

    let repo_url = `${user.html_url}/?tab=repositories`

    document.querySelector("#usuario").innerText = user.login
    document.querySelector("#nombre").innerText += ` ${user.name}`
    document.querySelector("#ubicacion").innerText += ` ${user.location}`
    document.querySelector("#url").innerText = `${user.html_url}`
    document.querySelector("#url").href = `${user.html_url}`
    document.querySelector("#repos").innerText += repo_url
    document.querySelector("#repos").href= repo_url
    document.querySelector("#seguidores").innerText += ` ${user.followers}`

    document.querySelector('#imagen').style.backgroundImage = `url(${user.avatar_url})`

  })
}

function getUserData() {
  let userName = document.querySelector("#username").value;

  let user_url = `https://api.github.com/users/${userName}`;

  return fetch(user_url)
    .then(response => response.json())
}