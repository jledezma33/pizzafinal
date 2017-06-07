function enableDisable(id) {
    var img = document.getElementById(id);
    if (img.style.visibility === 'visible') {
        img.style.visibility = "hidden";
    }
    else {
        img.style.visibility = "visible";
    }
}
var total = 0;
function addText(evt) {
    var oneDollar = 1;
    var theID = evt.id;
    var listID = document.getElementById('list');
    // if (listID.getElementsByTagName("p").length != 5) {
    if (theID == 'bacon') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            }
            listID.innerHTML += '<p id="itemInList1">Bacon Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList1"));

            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }
    } else if (theID == 'baconL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList2">Bacon Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList2"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }
    } else if (theID == 'baconR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList3">Bacon Added To Right Side $' + oneDollar + '</p>';

        } else {
            listID.removeChild(document.getElementById("itemInList3"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'greenPepper') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList4">Green Peppers Added $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList4"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'greenPepperL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList5">Green Peppers Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList5"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'greenPepperR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList6">Green Peppers Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList6"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'ham') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList7">Ham Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList7"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'hamL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            }
            listID.innerHTML += '<p id="itemInList8">Ham Added To Left Side $' + oneDollar + '</p>';

        } else {
            listID.removeChild(document.getElementById("itemInList8"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'hamR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList9">Hame Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList9"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'mushroom') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList10">Mushrooms Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList10"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'mushroomL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList11">Mushrooms Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList11"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'mushroomR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList12">Mushrooms Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList12"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'olive') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList13">Olives Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList13"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'oliveL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList14">Olives Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList14"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'oliveR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList15">Olives Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList15"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'onion') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList16">Onions Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList16"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'onionL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList17">Onions Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList17"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'onionR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList18">Onions Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList18"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'pepperoni') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            }
            listID.innerHTML += '<p id="itemInList19">Pepperoni Added To Pizza $' + oneDollar + '</p>';

        } else {
            listID.removeChild(document.getElementById("itemInList19"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'pepperoniL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList20">Pepperoni Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList20"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'pepperoniR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList21">Pepperoni Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList21"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'pineapple') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList22">Pineapple Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList22"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'pineappleL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList23">Pineapple Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList23"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'pineappleR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList24">Pineapple Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList24"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'redPepper') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList25">Red Peppers Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList25"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'redPepperL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList26">Red Peppers Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList26"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'redPepperR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList27">Red Peppers Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList27"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'sausage') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList28">Sausage Added To Pizza $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList28"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'sausageL') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList29">Sausage Added To Left Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList29"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    } else if (theID == 'sausageR') {
        if (evt.checked) {
            if (listID.getElementsByTagName("p").length != 0) {
                total += 1;
            } listID.innerHTML += '<p id="itemInList30">Sausage Added To Right Side $' + oneDollar + '</p>';
        } else {
            listID.removeChild(document.getElementById("itemInList30"));
            if (listID.getElementsByTagName("p").length != 0) {
                total -= 1;
            }
        }

    }
    // } 
    if (listID.getElementsByTagName("p").length == 5) {
        listID.innerHTML += '<h5 id="itemInList">5 Ingredient Combo! $' + 3 + '</h5>';
        listID.innerHTML += '<h5 id="itemInListX">-$' + 1 + '</h5>';
        total -= 1;
    }
    if (listID.getElementsByTagName("p").length == 6) {
        if (listID.contains(document.getElementById('itemInList'))) {
            listID.removeChild(document.getElementById("itemInList"));
            listID.removeChild(document.getElementById("itemInListX"));
            total += 1;
        }
    }
    if (listID.getElementsByTagName("p").length == 4) {
        if (listID.contains(document.getElementById('itemInList'))) {
            listID.removeChild(document.getElementById("itemInList"));
            listID.removeChild(document.getElementById("itemInListX"));
                    total += 1;
        }
    }






    if (theID == 'smallSize') {
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
    } else if (theID == 'mediumSize') {
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
    } else if (theID == 'largeSize') {
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
    } else if (theID == 'xlSize') {
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