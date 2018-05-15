import axios from 'axios'
// Promise based HTTP client for the browser and node.js

// Brings information back and forth 

export default() => {
  return axios.create({
    baseURL: `localhost:3000/api`
  })
}