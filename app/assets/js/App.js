import '../styles/styles.css'
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