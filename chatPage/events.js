import chatPage from "./chatPage.js"

const chatPageEventListeners = () => {
  const chatButton = document.querySelector('#chatButton')
  chatButton.addEventListener('click', () => {
    document.querySelector('.current-page').innerHTML = chatPage()
  })
}

export default chatPageEventListeners
