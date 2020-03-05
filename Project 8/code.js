var restaurantName = "Indian Heaven"
var order = [];

window.addEventListener("load", function(){
    updateCart()
    // alert("Welcome to " + restaurantName)
    var lnkCancel = document.querySelector("#lnkStartOver");
    lnkCancel.addEventListener("click", function(){
        var areYouSure = confirm("Are you sure you are going to cancel?")
        if (areYouSure){

        }
    })
    var meals = document.querySelectorAll(".meal")
    for (var meal of meals){
        meal.addEventListener("click", function(){
            var title = this.dataset.title;
            order.push(title)
            updateCart()
        })
    }
})

function updateCart(){
    let html = ""
    for (var meal of order){
        html += `<li> ${meal} </li`
    }
    let ul = document.querySelector("#cart ul")
    ul.innerHTML = html
    var cart = document.querySelector("#cart")
    if (order.length === 0){
        cart.style.backgroundColor = "grey"
    } else {
        cart.style.backgroundColor = "#006"
    }
}