"use strict"

var CarLot = (function(originalCarLot){

	var textInsertionTarget = document.getElementsByClassName("container-fluid")[0];

	originalCarLot.populatePage = function(inventory) {
		var cars = CarLot.getInventory();
		var newDiv = document.createElement("div");
		newDiv.className = "row";
		for (var i = 0; i < cars.length; i++) {
			var textFrame =
				`<div class="col-sm-3 reset">
						<h2>${cars[i].year}</h2> 
						<h2>${cars[i].make} ${cars[i].model}</h2>
						<img src="images/car${i}.jpeg" alt="picture of ${cars[i].year} ${cars[i].make} ${cars[i].model}">
						<p>${cars[i].description}<p>
						<h5> Price: $ ${cars[i].price}</h5>
					</div>`
			if (i === 0 || (i % 3) === 2) {
				newDiv.innerHTML += textFrame;
				textInsertionTarget.appendChild(newDiv);
			} else {
				newDiv.innerHTML += textFrame;			
			}
		}
	},
	
	originalCarLot.activateEvents = function() {
		var carBox = document.getElementsByClassName("col-sm-3");
		enterButton.addEventListener("click", function(event){
			textInput.value="";
			for (var i = 0; i < carBox.length; i++){
				originalCarLot.resetBorder(carBox[i], "addBorder");
			}
		});
		textInput.addEventListener("keyup", function(event){
			for (var i = 0; i < carBox.length; i++) {
				if (carBox[i].classList.contains("addBorder")) {
					carBox[i].childNodes[7].innerHTML = textInput.value;
					if (event.keyCode == 13) {
						textInput.value = "";
						originalCarLot.resetBorder(carBox[i], "addBorder");
					}
				}
			}
		});
		for (var i = 0; i < carBox.length; i++) {
			carBox[i].addEventListener("click", function(event){
				var eventTarget = event.currentTarget;
				if (event.currentTarget.classList.contains("addBorder") === false){
					for (var j = 0; j < carBox.length; j++) {
						carBox[j].classList.remove("addBorder");
					}
					originalCarLot.changeBorder(eventTarget, "addBorder");	
				} else {
					originalCarLot.resetBorder(eventTarget, "addBorder");
				}
			});
		}		
	}

	CarLot.loadInventory();

	return originalCarLot;

})(CarLot || {});