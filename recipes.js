
var total = 0;



function checkvalue(fieldvalue) {
    switch (fieldvalue) {
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
function loadRecipe(recipevalue) {
    var recipePrice = 0;
    switch (recipevalue) {
        case 1:
            document.getElementById("list").innerHTML = "Ham,Pineapple,Bacon,Red Pepper";
            recipePrice = 3;
            break;
        case 2:
            document.getElementById("list").innerHTML = "Bacon,Ham,Pepperoni,Sausage";
            recipePrice = 3;
            break;
        case 3:
            document.getElementById("list").innerHTML = "Pepperoni,Sausage,Green Peppers,Mushrooms,Onions";
            recipePrice = 3;
            break;
        case 4:
            document.getElementById("list").innerHTML = "Ham,Pepperoni,Sausage,Onions,Green Peppers,Mushrooms,Olives";
            recipePrice = 5;
            break;
        case 5:
            document.getElementById("list").innerHTML = "Green Peppers,Mushrooms,Onions,Red Peppers";
            recipePrice = 3;
            break;
    }
    total += recipePrice;
}

function sizePrice(sizevalue) {
    var sizePrices = 0;

    switch (sizevalue) {

        case 1:
            sizePrices = 4;
            break;
        case 2:
            sizePrices = 8;
            break;
        case 3:
            sizePrices = 12;
            break;
        case 4:
            sizePrices = 16;
            break;
    }
    total += sizePrices;
}

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}