document.addEventListener("DOMContentLoaded", function(event) {
    
    //For increase or reduce image thumnail
    let thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
    if(thumbnailElement.className == "") {
        thumbnailElement.className = "small";    
    } else {
        thumbnailElement.className = "";
    }