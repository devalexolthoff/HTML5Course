document.addEventListener("DOMContentLoaded", function() {
    var banner = document.querySelector('main')
    var logo = document.querySelector("#logo")
    setTimeout(function(){
        banner.className = "visible"
    }, 2000)
    banner.addEventListener("mouseover", ()=>{
        banner.className = "over"
        logo.className = "upsidedown"
    })
    
    banner.addEventListener("mouseout", ()=>{
        banner.className = "visible"
        logo.className = "";
    })
})
