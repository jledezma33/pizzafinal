function checkvalue(fieldvalue) {
    switch(fieldvalue){
        case 1:
            document.getElementById("image").innerHTML = "<img src ='images/hawaiian.png'>";
            break;
        case 2:
            document.getElementById("image").innerHTML = "<img src ='images/meatlovers.png'>";
            break;
        case 3:
            document.getElementById("image").innerHTML = "<img src ='images/supreme.png'>";
            break;
        case 4:
            document.getElementById("image").innerHTML = "<img src ='images/supersupreme.png'>";
            break;
        case 5:
            document.getElementById("image").innerHTML = "<img src ='images/veggie.png'>";
    }
}