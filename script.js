const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    // axios(APIURL + username).then(response => console.log(response.data)).catch(error => console.log(error)) //using .then .catch method with axios

    try {
        const { data } = await axios(APIURL + username)
        console.log(data)
    } catch (error) {
        alert(error + '- Please check for any error in your code')
    }

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