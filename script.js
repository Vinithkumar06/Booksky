var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"

})

// calcel button

var cancelbtn = document.getElementById("cancel-popup")
cancelbtn.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})


var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookForm = document.getElementById("bookForm")
var booktittleinput = document.getElementById("tittle-input")
var bookauthorinput = document.getElementById("author-input")
var bookdescriptioninput = document.getElementById("descripiton-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = ` <h2>${booktittleinput.value}</h2>            
    <h5>${bookauthorinput.value}</h5>            
    <p>${bookdescriptioninput.value}</p> 
    <button onclick="deletebook(event)">Delete</button> `
    container.append(div)

    // Reset the form
    bookForm.reset()

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}