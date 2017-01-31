"use strict"

var CarLot = (function(originalCarLot){

  var inventory = [];
  var textInput = document.getElementById("textInput");
  var enterButton = document.getElementById("enterButton");
  

  return {
    loadInventory: function(callback) {
		var inventoryLoader = new XMLHttpRequest();

		inventoryLoader.addEventListener("load", function(event) {
		console.log("Data request complete");
			var objectOfCars = JSON.parse(event.target.responseText);
			inventory = objectOfCars.cars;
			CarLot.populatePage(inventory);
			CarLot.activateEvents();
		});

		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();
    },
	
    getInventory: function(callback) {
        return inventory;
    },
  };

  return originalCarLot;

})(CarLot || {});