const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    // axios(APIURL + username).then(response => console.log(response.data)).catch(error => console.log(error)) //using .then .catch method with axios

    try {
        const { data } = await axios(APIURL + username)
        userCard(data)
        getRepositories(username)
    } catch (error) {
        if (error.response.status == 404) {
            errorCard('No profile found with this Username. Please try again.')
        }
    }

}

function userCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img src=${user.avatar_url} alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repositories</strong></li>
            </ul>

            <div id="repos">

            </div>
        </div>
    </div>
    `
    main.innerHTML = cardHTML
}

async function getRepositories(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addRepositories(data)
    } catch (error) {
        // errorCard('Problem fetching Repositories. Please try again after some time.')
        console.log(error)
    }
}

function errorCard(message) {
    const cardHTML = `
        <div class="card">
            <h2>${message}</h2>
    `
    main.innerHTML = cardHTML
}

function addRepositories(repos) {
    const reposElement = document.getElementById('repos')

    repos.slice(0, 10).forEach(repo => {
        const repoElement = document.createElement('a')
        repoElement.classList.add('repo')
        repoElement.href = repo.html_url
        repoElement.target = '_blank'
        repoElement.innerText = repo.name

        reposElement.appendChild(repoElement)
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    } else {
        alert('Please enter a username')
    }
})