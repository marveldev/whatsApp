import topNav from "./topNav/topNav.js"
import defaultPage from "./defaultPage/defaultPage.js"
import pageEventListeners from "./helper.js"
import defaultPageEventListeners from "./defaultPage/events.js"

const main = () => {
  return `
    ${topNav()}
    <div class="current-page">
      ${defaultPage()}
    </div>
  `
}

document.querySelector('.main').innerHTML = main()
defaultPageEventListeners()
pageEventListeners()
