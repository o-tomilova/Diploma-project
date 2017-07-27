
window.onload = function() {
	var tableContainer = document.getElementById("tableContainer"),
		addBtn = document.getElementById("addProduct"),
		addBlock = document.getElementById("addBlock"),
		addForm = document.getElementById("addForm");
		submitForm = document.getElementById("submit"),
		cancelForm = document.getElementById("cancel");

// -------------------------------products array---------------------

	var products = [
			{id: "1", name: "T-shirt", category: "clothes", description: "Cool summer T-shirt", price: "16.99"}, 
			{id: "2", name: "Shorts", category: "clothes", description: "Cool summer shorts", price: "20"}, 
			{id: "3", name: "Hawians", category: "shoes", description: "Nice beach flip-flops", price: "15"},
			{id: "4", name: "Nacklace", category: "accessories", description: "Silver nacklace", price: "25"}, 
			{id: "5", name: "Dress", category: "clothes", description: "Long sleeveless", price: "29.90"}, 
			{id: "6", name: "Boots", category: "shoes", description: "Warm winter boots", price: "50"}];
	console.log(products);

// --------------------------adding a product ?????------------------

	output = function(arr){ 

		var myTable = "<div><table id='productsTable' class='table'><thead align='left'>";
		myTable += "<th>ID</th> <th>Product name</th> <th>Category</th> <th>Description</th> <th id='priceTH' data-type='number'>Price $</th> </thead>";
		myTable += "<tbody>"
			for (var i = 0; i < arr.length; i++) {
				myTable += "<tr class="+arr[i].category+" id="+arr[i].id+"><td>" + arr[i].id + "</td> <td>" + arr[i].name + "</td><td>" + arr[i].category + "</td><td>"
				+ arr[i].description + "</td><td class='price'>" + arr[i].price + "</td></tr>";
			}
		myTable += "</tbody> </table> </div>";
		tableContainer.innerHTML = myTable;
	}		
	output(products); // Виводить товари з масиву, АЛЕ не додані вручну



	addBtn.addEventListener("click", function(){
		addBlock.className = "showBlock";
	});

	// function Product(id, name, category, description, price){
	// 	this.id = id;
	// 	this.name = name;
	// 	this.category = category;
	// 	this.description = description;
	// 	this.price = price;
	// }

	var item;

	submitForm.addEventListener("click", function () {
		// var last = products.length;
		// var item = new Product(last, document['addForm']['name'].value, document['addForm']['category'].value, document['addForm']['desc'].value, document['addForm']['price'].value)

		// products.push(item);
		// console.log(products[last]); // виводить останній доданий елемент
		// console.log(products);      // виводить всі товари включно з доданим
		// output(products); // товар НЕ відображається в табоиці  
	});

	cancelForm.addEventListener("click", function(){
		alert("Do you want to discard changes?");
		document.forms["addForm"].reset();
	});


// ---------------------------category sort-----------------------------

	var categorySort = document.getElementById("categorySort");

	categorySort.onchange = setCategory;

	var shoesArr = document.getElementsByClassName("shoes"),
		clothesArr = document.getElementsByClassName("clothes"),
		accessArr = document.getElementsByClassName("accessories"),
		bagsArr = document.getElementsByClassName("bags");

		// var all = [].slice.call(allll); // converting an HTML Collection into Array

	function setCategory(){
		var categoryName = categorySort.value;

		switch(categoryName){
			case 'clothes':
			{
				clearSortRes();
				for (var i = 0; i < shoesArr.length; i++) {
					shoesArr[i].style.display = "none";
				}
				for (var i = 0; i < accessArr.length; i++) {
					accessArr[i].style.display = "none";
				}
				for (var i = 0; i < bagsArr.length; i++) {
					bagsArr[i].style.display = "none";
				}
			};
			break;
			
			case 'shoes':
			{
				clearSortRes();
				for (var i = 0; i < clothesArr.length; i++) {
					clothesArr[i].style.display = "none";
				}
				for (var i = 0; i < accessArr.length; i++) {
					accessArr[i].style.display = "none";
				}
				for (var i = 0; i < bagsArr.length; i++) {
					bagsArr[i].style.display = "none";
				}
			};
			break;
			
			case 'accessories':
			{
				clearSortRes();
				for (var i = 0; i < shoesArr.length; i++) {
					shoesArr[i].style.display = "none";
				}
				for (var i = 0; i < clothesArr.length; i++) {
					clothesArr[i].style.display = "none";
				}
				for (var i = 0; i < bagsArr.length; i++) {
					bagsArr[i].style.display = "none";
				}
			};
			break;

			case 'bags':
			{
				clearSortRes();
				for (var i = 0; i < shoesArr.length; i++) {
					shoesArr[i].style.display = "none";
				}
				for (var i = 0; i < accessArr.length; i++) {
					accessArr[i].style.display = "none";
				}
				for (var i = 0; i < clothesArr.length; i++) {
					clothesArr[i].style.display = "none";
				}
			};
			break;
			case 'defaultCat':
			{
				clearSortRes();
			};
			break;
		}
	}

	function clearSortRes(){
		for (var i = 0; i < clothesArr.length; i++) {
			clothesArr[i].style.display = "table-row";
		}
		for (var i = 0; i < shoesArr.length; i++) {
			shoesArr[i].style.display = "table-row";
		}
		for (var i = 0; i < accessArr.length; i++) {
			accessArr[i].style.display = "table-row";
		}
		for (var i = 0; i < bagsArr.length; i++) {
			bagsArr[i].style.display = "table-row";
		}
	}
					
// --------------------------price sort---------------------------

	var priceSort = document.getElementById("priceSort");
	var productsTable = document.getElementById("productsTable");
 	var priceCell = document.getElementById("priceTH");

	priceSort.onchange = function(){ 
    	sortByPrice(4, priceSort.value);
  	};



	function sortByPrice(colNum, type){
    	var tbody = productsTable.getElementsByTagName('tbody')[0];
    	var priceRowsArr = [].slice.call(tbody.rows);
    	var compare;  
    
    switch (type) {
        case 'ascending':
        compare = function(rowA, rowB){
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
    	break;
    	case 'descending':
        compare = function(rowA, rowB){
          return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
        };
    	break;

    		// !!!!! after output(products) sortByPrice stops working ???

    	case 'defaultPriceSort':
    	compare = function(){
    //		output(products);  
    	};
    	break;
    }
    
    priceRowsArr.sort(compare);
    
    productsTable.removeChild(tbody);
    
    for (var i = 0; i < priceRowsArr.length; i++){
      tbody.appendChild(priceRowsArr[i]);
    }
    
    productsTable.appendChild(tbody);

  }


} //window.onload

