var canvas = new fabric.Canvas('myCanvas');
blockimage_ancho = 30;
blockimage_alto = 30;
player_X = 10;
player_Y = 10;
var player_object = "";
function player_update(){
	fabric.Image.fromURL('player.png', function(Img){
		player_object = Img;
		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
			top:player_Y,
			left:player_X
		});
		canvas.add(player_object);
	});
}
function newimage(get_Image){
	fabric.Image.fromURL(get_Image, function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(blockimage_ancho);
		block_image_object.scaleToHeight(blockimage_alto);
		block_image_object.set({
			top:player_Y,
			left:player_X
		});
		canvas.add(block_image_object);
	});
}
window.addEventListener("keydown", my_key_down);
function my_key_down(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '80'){
		console.log("shfit+P");
		blockimage_ancho = blockimage_ancho + 10;
		blockimage_alto = blockimage_alto + 10;
		document.getElementById("current_width").innerHTML = blockimage_ancho;
		document.getElementById("current_height").innerHTML =blockimage_alto;
	}
	if(e.shiftKey == true && keyPressed == '77'){
		console.log("shfit+M");
		blockimage_ancho = blockimage_ancho - 10;
		blockimage_alto = blockimage_alto - 10;
		document.getElementById("current_width").innerHTML = blockimage_ancho;
		document.getElementById("current_height").innerHTML =blockimage_alto;
	}
	if(keyPressed == '38'){
		up();
		console.log("arriba");
	}
	if(keyPressed == '40'){
		down();
		console.log("abajo");
	}
	if(keyPressed == '39'){
		right();
		console.log("izquierda");
	}
	if(keyPressed == '37'){
		left();
		console.log("izquierda");
	}
	if(keyPressed == '87'){
		newimage('wall.jpg');
		console.log("W");
	}
	if(keyPressed == '71'){
		newimage('ground.png');
		console.log("G");
	}
	if(keyPressed == '76'){
		newimage('light_green.png');
		console.log("L");
	}
	if(keyPressed == '84'){
		newimage('trunk.jpg');
		console.log("T");
	}
	if(keyPressed == '68'){
		newimage('dark_green.png');
		console.log("D");
	}
	if(keyPressed == '82'){
		newimage('roof.jpg');
		console.log("R");
	}
	if(keyPressed == '89'){
		newimage('yellow_wall.png');
		console.log("Y");
	}
	if(keyPressed == '85'){
		newimage('unique.png');
		console.log("U");
	}
	if(keyPressed == '67'){
		newimage('cloud.jpg');
		console.log("C");
	}
}
function up(){
	if(player_Y >=0){
		player_Y = player_Y - blockimage_alto;
		console.log("altura del bloque" + blockimage_alto);
		console.log("cuando se presiona la flecha hacia arriba, X =" + player_X + ", Y es = " + player_Y);
		canvas.remove(player_object);
		player_update();
	}
}
function down(){
	if(player_Y <=500){
		player_Y = player_Y + blockimage_alto;
		console.log("altura del bloque" + blockimage_alto);
		console.log("cuando se presiona la flecha hacia abajo, X =" + player_X + ", Y es = " + player_Y);
		canvas.remove(player_object);
		player_update();
		}
	}
function left(){
	if(player_X >0){
		player_X = player_X - blockimage_ancho;
		console.log("ancho del bloque" + blockimage_ancho);
		console.log("cuando se presiona la flecha hacia la izquierda, X=" + player_X + ", Y es = " + player_Y);
		canvas.remove(player_object);
		player_update();
	}
}
function right(){
	if(player_X <=1000){
		player_X = player_X + blockimage_ancho;
		console.log("ancho del bloque" + blockimage_ancho);
		console.log("cuando se presiona la felcha hacia la izquierda, X=" + player_X + ", Y es = " + player_Y);
		canvas.remove(player_object);
		player_update();
	}
}