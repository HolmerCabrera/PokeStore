const htmlElement = document.querySelector("html")
const toggleButton = document.querySelector("#toggle-dark")

toggleButton.addEventListener("click", () => toggleDarkMode())

const toggleDarkMode = () => {
    htmlElement.classList.contains("dark") ? 
    htmlElement.classList.remove("dark") : 
    htmlElement.classList.add("dark")
}