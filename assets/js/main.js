function changeColorDark(){
    document.getElementById("body").style.backgroundColor = "#000" 
    document.getElementById("body").style.color = "#fff"
    document.getElementById("whiteOne").style.color = "#fff"
    document.getElementById("whiteTwo").style.color = "#fff"
    document.getElementById("whiteThree").style.color = "#fff"
    document.getElementById("nav").style.borderBottom = "1px solid #fff"
    document.getElementById("buttonTwo").style.border = "1px solid #fff"
    document.getElementById("buttonTwo").style.zIndex = "99"
    document.getElementById("bildOne").setAttribute("src", "assets/img/darkmode-img/image_12.jpg")
    document.getElementById("bildTwo").setAttribute("src", "assets/img/darkmode-img/image_4.jpg") 
    document.getElementById("bildThree").setAttribute("src", "assets/img/darkmode-img/image_5.jpg") 
    document.getElementById("imageOne").setAttribute("src", "assets/img/darkmode-img/image_1.jpg")
    document.getElementById("imageTwo").setAttribute("src", "assets/img/darkmode-img/image_2.jpg")
    document.getElementById("imageThree").setAttribute("src", "assets/img/darkmode-img/image_6.jpg")
    document.getElementById("imageFour").setAttribute("src", "assets/img/darkmode-img/image_7.jpg")
    document.getElementById("imageFive").setAttribute("src", "assets/img/darkmode-img/image_8.jpg")
}

function reloadPage() {
    window.location.reload()
}