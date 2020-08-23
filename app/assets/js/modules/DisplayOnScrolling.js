class DisplayOnScrolling {
  constructor() {
    this.itemsToDisplay = document.querySelectorAll(".feature-item")
    this.hideItems()
    this.events()
  }

  events() {
    window.addEventListener("scroll", () => {
      this.itemsToDisplay.forEach(item => {
        this.displayIfScrolledTo(item)
      })
    })
  }

  displayIfScrolledTo(item) {
    let apperancePercent = (item.getBoundingClientRect().top / window.innerHeight) * 100
    if (apperancePercent < 75) {
      item.classList.add("display-item--visible")
    }
  }

  hideItems() {
    this.itemsToDisplay.forEach(item => (item.classList.add("display-item")))
  }
}

export default DisplayOnScrolling