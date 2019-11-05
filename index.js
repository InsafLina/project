
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

var image5 = $('<img>').attr( "src", "images/5.jpg");
var image6 = $('<img>').attr( "src", "images/6.jpg");
var image7 = $('<img>').attr( "src", "images/7.jpg");
var image8 = $('<img>').attr( "src", "images/8.jpg");

var image9 = $('<img>').attr( "src", "images/9.jpg");
var image10 = $('<img>').attr( "src", "images/a.jpg");
var image11 = $('<img>').attr( "src", "images/b.jpg");
var image12 = $('<img>').attr( "src", "images/c.jpg");


var shoes1 = Items("men", "shoes", "brown", 40, 60, image1);
var shoes2 = Items("men", "shoes", "black", 42, 70, image2);
var shoes3 = Items("woman", "shoes", "black", 38, 80, image3);
var shoes4 = Items("woman", "shoes", "black", 36, 95, image4);

var pant1 = Items("men", "pant", "gray", 40, 120, image5);
var pant2 = Items("men", "pant", "black", 44, 80, image6);
var pant4 = Items("woman", "pant", "blue", 38, 110, image7);
var pant3 = Items("woman", "pant", "brown", 38, 150, image8);

var tshirt1 = Items("men", "tshirt", "darkBlue", "M", 80, image9);
var tshirt2 = Items("men", "tshirt", "yellow", "L", 100, image10);
var tshirt3 = Items("woman", "tshirt", "white", "S", 80, image11);
var tshirt4 = Items("woman", "tshirt", "gray", "M", 70, image12);




arrayItems.push(shoes1, shoes2, shoes3, shoes4, pant1, pant2, pant3, pant4, tshirt1, tshirt2, tshirt3, tshirt4);




$(document).ready(function(){
				var $body = $('main');


				
				var cart = [];
			

				for (var i = 0; i < arrayItems.length; i++){
					var s = $('<span></span>'); 
					 s.attr('class', 'big');
					 var s1 = $('<div></div>');
					 var s2 = $('<div></div>');
					 s2.attr('id', 'text');

					 var s3 = $('<div></div>');
					 var s4 = $('<div></div>');
					
					var button = $('<button></button>');
					//button.text('Add');
					button.text(' ADD ');

					var pic = arrayItems[i].picture;
                    pic.attr('id', 'pic');
		            s1.append(pic);

					s2.append("Color: " + arrayItems[i].color + "<br/>");
					s2.append("Size : " + arrayItems[i].size + "<br/>")
					s2.append("Price: " + arrayItems[i].price + "$ <br/>")
					s2.append("Category: " + arrayItems[i].category + "<br>");
					s2.append("Type: " + arrayItems[i].type);

					var imageAdress = arrayItems[i].picture[0].src;
					
	                s3.append(" <br/>" + imageAdress).addClass("transparent");
					button.appendTo(s4);


				    s1.appendTo(s);
					s2.appendTo(s);
					s3.appendTo(s);	
					s4.appendTo(s);
					s.appendTo($('main'));

					
				}
				 var s = 0;

				$('main').on('click', 'span', function() {
						
					var src = this.innerText;// to get all the item info like in the page 
	                var arrSrc = this.innerText.split('');//get all the info of the item as an array of letters
	                 //	console.log(arrSrc); 
					var imageNameLetters = arrSrc.slice(arrSrc.length - 54, arrSrc.length - 4);// get the src of the image as an array of letters 
					 
					var imageFullName = imageNameLetters.join('');// get the src of the image as a string

					var imageNameArray = imageFullName.split('/');
					
					var imageName = imageNameArray[imageNameArray.length-1];

	
					for (var i = 0; i < arrayItems.length; i++){
						//console.log(arrayItems[i].picture[0].src);
						var imageNameArrayItem = arrayItems[i].picture[0].src.split('/');

						var imageNameLastElement = imageNameArrayItem[imageNameArrayItem.length-1];

						if(imageName === imageNameLastElement){

						 	cart.push(arrayItems[i]);
						 	alert('you just have purchased '+ arrayItems[i].color + ' '+arrayItems[i].type+' '+' that worth : '+arrayItems[i].price + ' TND');
						 	s = s + arrayItems[i].price;
						 	console.log(arrayItems[i]);
						 

						 	

						}
					}

				});


				// $('#card').click(function(){
				//     alert('you have pirchased the total of '+'\n'+ s +' TND');

				// });

				$('#card').click(function(){
					var txt;
					  if (confirm('you have pirchased the total of '+ s +' TND')) {
					    txt = "You pressed OK!";
					  } else {
					   s = 0;
					  }
				});



				$('#womenBtn').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "woman") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});

					
				$('#menBtn').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "men") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});


				$('#manShirt').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "men" && arrayItems[i].type === "tshirt") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});
				

				$('#manPant').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "men" && arrayItems[i].type === "pant") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});

				$('#manShoe').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "men" && arrayItems[i].type === "shoes") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});

				$('#womShirt').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "woman" && arrayItems[i].type === "tshirt") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});


				$('#womPant').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "woman" && arrayItems[i].type === "pant") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});

				$('#womShoe').click(function(){
					$('main').empty();

					var cart = [];
			

					for (var i = 0; i < arrayItems.length; i++){
						if(arrayItems[i].category === "woman" && arrayItems[i].type === "shoes") {
							var s = $('<span></span>'); 
						 s.attr('class', 'big');
						 var s1 = $('<div></div>');
						 var s2 = $('<div></div>');
						 var s3 = $('<div></div>');
						 var s4 = $('<div></div>');
						
						var button = $('<button></button>');
						//button.text('Add');
						button.text(' ADD ');

						var pic = arrayItems[i].picture;
	                    pic.attr('id', 'pic');
			            s1.append(pic);

						s2.append("Color: " + arrayItems[i].color + "<br/>");
						s2.append("Size : " + arrayItems[i].size + "<br/>")
						s2.append("Price: " + arrayItems[i].price + "$ <br/>")
						s2.append("Category: " + arrayItems[i].category + "<br>");
						s2.append("Type: " + arrayItems[i].type);

						var imageAdress = arrayItems[i].picture[0].src;
						
		                s3.append(" <br/>" + imageAdress).addClass("transparent");
						button.appendTo(s4);

					    s1.appendTo(s);
						s2.appendTo(s);
						s3.appendTo(s);	
						s4.appendTo(s);
						s.appendTo($('main'));
						}
					}

				});
			});
		
