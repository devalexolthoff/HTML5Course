document.addEventListener("DOMContentLoaded", function() {
    var banner = document.querySelector('main')
    setTimeout(function(){
        banner.className = "visible"
    }, 2000)
})
banner.addEventListener("mouseover", ()=>{
    banner.className = "over"
})

banner.addEventListener("mouseout", ()=>{
    banner.className = "visible"
})