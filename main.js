import topNav from "./topNav/topNav.js"
import chatPage from "./chatPage/chatPage.js"
import statusPage from "./statusPage/statusPage.js"
import statusPageEventListeners from "./statusPage/events.js"
import chatPageEventListeners from "./chatPage/events.js"
import callsPageEventListeners from "./callsPage/events.js"

const main = () => {
  return `
    ${topNav()}
    <div class="current-page">
      ${chatPage()}
    </div>
  `
}

document.querySelector('.main').innerHTML = main()
statusPageEventListeners()
chatPageEventListeners()
callsPageEventListeners()
