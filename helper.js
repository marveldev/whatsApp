import statusPage from './statusPage/statusPage.js'
import callsPage from './callsPage/callsPage.js'
import chatPage from './chatPage/chatPage.js'

const pageEventListeners = () => {
  const switchCurrentPage = (selector, page) => {
    const button = document.querySelector(selector)
    button.addEventListener('click', () => {
      document.querySelector('.current-page').innerHTML = page
      document.querySelector('.active').classList.remove('active')
      button.classList.add('active')
    })
  }

  switchCurrentPage('.chat', chatPage())
  switchCurrentPage('.status', statusPage())
  switchCurrentPage('.call', callsPage())
}

export default pageEventListeners
