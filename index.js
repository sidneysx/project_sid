function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    //if (html.classList.contains("light")) {
    //html.classList.remove("light")
    //} else {
    //html.classList.add("light")
    //}
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./fotos/avatar-light.png")
      img.setAttribute("alt", "Sid na Praia")
    } else {
      img.setAttribute("src", "./fotos/avatar-dark.png")
      img.setAttribute("alt", "Sid no Espelho")
    }
  
    //const alt = document.querySelector("#profile img")
    //if (html.classList.contains("light")) {
     // img.setAttribute("alt", "Sid na Praia")
    //} else {
    //  img.setAttribute("alt", "Sid no Espelho")
    //}
  }
  
