import topNav from "./topNav/topNav.js"
import chatPage from "./chatPage/chatPage.js"
import statusPage from "./statusPage/statusPage.js"

const main = () => {
  return `
    ${topNav()}
    <div class="current-page">
      ${chatPage()}
    </div>
    <div class="pages">
      ${statusPage()}
    </div>
  `
}

document.querySelector('.main').innerHTML = main()
