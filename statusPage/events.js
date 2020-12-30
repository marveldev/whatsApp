import statusPage from "./statusPage.js"

const statusPageEventListeners = () => {
  const statusButton = document.querySelector('#statusButton')
  statusButton.addEventListener('click', () => {
    document.querySelector('.current-page').innerHTML = statusPage
  })
}

export default statusPageEventListeners
