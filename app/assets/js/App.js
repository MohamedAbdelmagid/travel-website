import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import DisplayOnScrolling from './modules/DisplayOnScrolling'


if (module.hot) {
  module.hot.accept()
}

new DisplayOnScrolling()
new MobileMenu()