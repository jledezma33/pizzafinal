
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

function sizePrice(evt) {
    var listID = document.getElementById('list');
    var oneDollar = 3;
    var theID = evt.id;
    if (theID == 'h') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 3;
            } listID.innerHTML += '<p id="itemInList5">Ham,Pineapple,Bacon,Red Pepper $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList5"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 3;
            }
        }
    } else if (theID == 'm') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 3;
            } listID.innerHTML += '<p id="itemInList6">Bacon,Ham,Pepperoni,Sausage $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList6"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 3;
            }
        }
    } else if (theID == 's') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 3;
            } listID.innerHTML += '<p id="itemInList7">Pepperoni,Sausage,Green Peppers,Mushrooms,Onions $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList7"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 3;
            }
        }
    } else if (theID == 'ss') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 5;
            } listID.innerHTML += '<p id="itemInList8">Ham,Pepperoni,Sausage,Onions,Green Peppers,Mushrooms,Olives $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList8"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 5;
            }
        }
    } else if (theID == 'v') {

        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 3;
            } listID.innerHTML += '<p id="itemInList9">Green Peppers,Mushrooms,Onions,Red Peppers $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList9"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 3;
            }
        }
    }

        if (theID == 'small') {
            document.getElementById('list').innerHTML += '<h2 id="itemInListsm">Small Pizza $' + 4 + '</h2>';
            if (document.getElementById('list').contains(document.getElementById('itemInListM'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListM"));
                total -= 8;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListL'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListL"));
                total -= 12;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListXL'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListXL"));
                total -= 16;
            }
            total += 4;
        } else if (theID == 'medium') {
            document.getElementById('list').innerHTML += '<h2 id="itemInListM">Medium Pizza $' + 8 + '</h2>';
            if (document.getElementById('list').contains(document.getElementById('itemInListL'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListL"));
                total -= 12;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListXL'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListXL"));
                total -= 16;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListsm'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListsm"));
                total -= 4;
            }
            total += 8;
        } else if (theID == 'large') {
            document.getElementById('list').innerHTML += '<h2 id="itemInListL">Large Pizza $' + 12 + '</h2>';
            if (document.getElementById('list').contains(document.getElementById('itemInListM'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListM"));
                total -= 8;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListXL'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListXL"));
                total -= 16;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListsm'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListsm"));
                total -= 4;
            }
            total += 12;
        } else if (theID == 'xl') {
            document.getElementById('list').innerHTML += '<h2 id="itemInListXL">Extra Large Pizza $' + 16 + '</h2>';
            if (document.getElementById('list').contains(document.getElementById('itemInListM'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListM"));
                total -= 8;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListL'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListL"));
                total -= 12;
            }
            if (document.getElementById('list').contains(document.getElementById('itemInListsm'))) {
                document.getElementById('list').removeChild(document.getElementById("itemInListsm"));
                total -= 4;
            }
            total += 16;
        }
        document.getElementById('list').innerHTML += '<h4 id="total">Total $' + total + '</h4>';
    }