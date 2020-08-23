import throttle from 'lodash/throttle'

class DisplayOnScrolling {
  constructor() {
    this.itemsToDisplay = document.querySelectorAll(".feature-item")
    this.hideItems()
    this.scrollThrottle = throttle(this.displayCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
  }

  displayCaller() {
    this.itemsToDisplay.forEach(item => {
      if (item.isRevealed == false) {
        this.displayIfScrolledTo(item)
      }
    })
  }

  displayIfScrolledTo(item) {
    if (window.scrollY + window.innerHeight > item.offsetTop) {
      let apperancePercent = (item.getBoundingClientRect().top / window.innerHeight) * 100
      if (apperancePercent < 75) {
        console.log("Item was displayed!!");
        item.classList.add("display-item--visible")
        item.isRevealed = true
        if (item.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }
    }
  }

  hideItems() {
    this.itemsToDisplay.forEach(item => {
      item.classList.add("display-item")
      item.isRevealed = false
    })
    this.itemsToDisplay[this.itemsToDisplay.length - 1].isLastItem = true
  }
}

export default DisplayOnScrolling