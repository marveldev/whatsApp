import callsPage from "./callsPage.js"

const callsPageEventListeners = () => {
  const callButton = document.querySelector('#callButton')
  callButton.addEventListener('click', () => {
    document.querySelector('.current-page').innerHTML = callsPage()
  })
}

export default callsPageEventListeners
