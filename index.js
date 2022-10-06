
let colorInput = document.getElementById("seedColor")
let scheme = document.getElementById("colorScheme")
let button = document.getElementById("btn")

// swatches to copy:

let swatchOne = document.getElementById("color1swatch")
let swatchTwo = document.getElementById("color2swatch")
let swatchThree = document.getElementById("color3swatch")
let swatchFour = document.getElementById("color4swatch")
let swatchFive = document.getElementById("color5swatch")

/* taking the hex value from the color selector and placing it above the color swatch */
button.addEventListener("click", function() {
    let displayColor = colorInput.value
    let cleanHex = displayColor.substring(1)
    

/* display the color of the hex value */
    color1hex.innerHTML = displayColor
    document.getElementById("color1swatch").style.backgroundColor = `${displayColor}`

    //Send seed color and scheme choice to API & GET scheme values from API
fetch(`https://www.thecolorapi.com/scheme?hex=${cleanHex}&format=json&mode=${scheme.value}&count=4`)
  .then(res => res.json())
  .then(data => {
    
    document.getElementById("color2swatch").style.backgroundColor = data.colors[0].hex.value
    document.getElementById("color3swatch").style.backgroundColor = data.colors[1].hex.value
    document.getElementById("color4swatch").style.backgroundColor = data.colors[2].hex.value
    document.getElementById("color5swatch").style.backgroundColor = data.colors[3].hex.value

    color2hex.innerHTML = data.colors[0].hex.value
    color3hex.innerHTML = data.colors[1].hex.value
    color4hex.innerHTML = data.colors[2].hex.value
    color5hex.innerHTML = data.colors[3].hex.value

    return color2hex.innerHTML
  })

})

// Event listeners for copy on click:

swatchOne.addEventListener("click", function() {
    navigator.clipboard.writeText(`${colorInput.value}`)
 })

swatchTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(`${color2hex.innerHTML}`)
 })

swatchThree.addEventListener("click", function() {
    navigator.clipboard.writeText(`${color3hex.innerHTML}`)
 })

swatchFour.addEventListener("click", function() {
    navigator.clipboard.writeText(`${color4hex.innerHTML}`)
 })

swatchFive.addEventListener("click", function() {
    navigator.clipboard.writeText(`${color5hex.innerHTML}`)
 })