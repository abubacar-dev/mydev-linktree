const html = document.documentElement;
const icon = document.querySelector("#toggle");

function switcher() {
    html.classList.toggle("light");

    if(html.classList.contains("light")) {
        icon.setAttribute("name", "moon-outline");
    } else {
        icon.setAttribute("name", "sunny-outline");
    }
}