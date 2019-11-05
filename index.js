
var arrayItems = [] ;

function Items(category, type, color, size, price, picture) {
	var item = {};

	item.category = category;
	item.type = type;
	item.color = color;
	item.size = size;
	item.price = price;
	item.picture = picture;

	return item;
}

var image1 = $('<img>').attr( "src", "images/1.jpg");
var image2 = $('<img>').attr( "src", "images/2.jpg");
var image3 = $('<img>').attr( "src", "images/3.jpg");
var image4 = $('<img>').attr( "src", "images/4.jpg");

var shoes1 = Items("men", "shoes", "brown", 40, 60, image1);
var shoes2 = Items("men", "shoes", "black", 42, 70, image2);
var shoes3 = Items("woman", "shoes", "black", 38, 80, image3);
var shoes4 = Items("woman", "shoes", "black", 36, 95, image4);


arrayItems.push(shoes1, shoes2, shoes3, shoes4);


