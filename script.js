const categories = document.querySelectorAll(".mobile-category-icons")
const label = document.getElementById("iconLabel")
function activeIcon() {
    categories.forEach((item) => 
    item.classList.remove("mobileActiveIcon"))
    this.classList.add("mobileActiveIcon")
    label.style.visibility = "visible"
}
categories.forEach((item) =>
item.addEventListener("click", activeIcon))