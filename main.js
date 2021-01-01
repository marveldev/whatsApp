import topNav from "./topNav/topNav.js"
import chatPage from "./chatPage/chatPage.js"
import pageEventListeners from "./helper.js"

const main = () => {
  return `
    ${topNav()}
    <div class="current-page">
      ${chatPage()}
    </div>
  `
}

document.querySelector('.main').innerHTML = main()
pageEventListeners()
