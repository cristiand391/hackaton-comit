//funcion main que invoca a las funciones que muestran la informacion
// del usuario y de los repositorios del mismo.

const funcionMain = ()=>{
    showUserData()
    showReposData()
}

//Arrow function que nos muestra la informacion del usuario
const showUserData = () => {
  let user = getUserData().then(function (user) {

    let repo_url = `${user.html_url}/?tab=repositories`

    document.getElementById("usuario").innerText = user.login
    document.getElementById("nombre").innerText = ` ${user.name}`
    document.getElementById("ubicacion").innerText = ` ${user.location}`
    document.getElementById("url").innerText = `${user.html_url}`
    document.getElementById("url").href = `${user.html_url}`
    document.getElementById("repos").innerText = repo_url
    document.getElementById("repos").href= repo_url
    document.getElementById("seguidores").innerText = ` ${user.followers}`

    document.getElementById('imagen').style.backgroundImage = `url(${user.avatar_url})`

  })
}

const  getUserData = () => {
  let userName = document.getElementById("username").value;

  let user_url = `https://api.github.com/users/${userName}`;

  return fetch(user_url)
    .then(response => response.json())
}

const getReposUser = ()=> {
    let reposUser = document.getElementById("username").value;

    let repos_url = `https://api.github.com/users/${reposUser}/repos`;

    return fetch(repos_url)
        .then(res => res.json())
}

//Arrow function que nos muestra la informacion de los repositorios del usuario
const showReposData = () => {
      getReposUser().then(function (user) {

    let html = "";  
    user.forEach((usuario)=>{
        
        html += `
            <div>
                <ul>
                    <li>${usuario.name}</li>
                    <p><a target="_blank" href="${usuario.html_url}">Link al repo</a></p>
                </ul>
            </div>
        `    
    })
    document.getElementById("info").innerHTML = html
    })
  }

//Variable que hace referencia al boton que al hacer click mostrara el usuario que se este buscando
let boton = document.getElementById("btnClick");


boton.addEventListener('click', funcionMain);