import throttle from 'lodash/throttle'

class Header {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.pageSections = document.querySelectorAll(".page-section")
    this.previousScrollY = window.scrollY
    this.events()
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
  }

  runOnScroll() {
    this.setScrollingDirection()

    if (window.scrollY > 50) {
      this.siteHeader.classList.add("site-header--darker")
    } else {
      this.siteHeader.classList.remove("site-header--darker")
    }

    this.pageSections.forEach(section => this.locateSection(section))
  }

  setScrollingDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollingDirection = 'down'
    } else {
      this.scrollingDirection = 'up'
    }
    this.previousScrollY = window.scrollY
  }

  locateSection(section) {
    if (window.scrollY + window.innerHeight > section.offsetTop && window.scrollY < section.offsetTop) {
      let scrollPercent = section.getBoundingClientRect().top / window.innerHeight * 100
      if (
        (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollingDirection == 'down') ||
        (scrollPercent < 33 && this.scrollingDirection == 'up')
      ) {
        let matchingLink = section.getAttribute("data-matching-link")

        document.querySelectorAll(`.nav-bar a:not(${matchingLink})`)
          .forEach(link => link.classList.remove("is-current-link"))

        document.querySelector(matchingLink).classList.add("is-current-link")
      }
    }
  }
}

export default Header