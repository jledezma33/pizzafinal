
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