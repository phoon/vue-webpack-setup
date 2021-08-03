import axios from 'axios'

const getRepos = (name) =>
    axios.get(`https://api.github.com/users/${name}/repos`)

export default getRepos