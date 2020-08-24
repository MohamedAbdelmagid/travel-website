import throttle from 'lodash/throttle'

class Header {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.events()
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
  }

  runOnScroll() {
    if (window.scrollY > 50) {
      this.siteHeader.classList.add("site-header--darker")
    } else {
      this.siteHeader.classList.remove("site-header--darker")
    }
  }
}

export default Header