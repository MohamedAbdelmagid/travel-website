import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import DisplayOnScrolling from './modules/DisplayOnScrolling'
import Header from './modules/Header'


if (module.hot) {
  module.hot.accept()
}

new Header()
new DisplayOnScrolling(document.querySelectorAll(".feature-item"), 75)
new DisplayOnScrolling(document.querySelectorAll(".testimonial"), 60)
new MobileMenu()

let modal

document.querySelectorAll(".open-modal").forEach(
  button => button.addEventListener("click", event => {
    event.preventDefault()
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/Modal')
        .then(Modal => {
          modal = new Modal.default()
          setTimeout(() => () => modal.openModal(), 20)
        })
        .catch(() => console.error("Error loading Modal.js file"))
    } else {
      modal.openModal()
    }
    
  })
)