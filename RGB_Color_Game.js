var numOfColors = 6;
var colors = generateRandomColors(numOfColors);
var squares = document.querySelectorAll(".square");
var viewcolor = document.querySelector("#pickedColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor = pickColor(numOfColors);
var resetButton = document.querySelector("#reset")
var eseBtn = document.querySelector("#esebtn")
var hardBtn = document.querySelector("#hardbtn")

viewcolor.textContent = pickedColor;


resetButton.addEventListener("click",function(){

  colors = generateRandomColors(numOfColors);
  pickedColor = pickColor(numOfColors);
  viewcolor.textContent = pickedColor;
  h1.style.background = "steelblue";
  messageDisplay.textContent = ""


 for(var i=0; i<squares.length; i++){

        squares[i].style.background = colors[i];
 }

		 resetButton.textContent = "New Colors"
		 // eseBtn.classList.remove("selected");
		 // hardBtn.classList.remove("selected");
		 
})

eseBtn.addEventListener("click",function(){

	h1.style.background = "steelblue";
    resetButton.textContent = "New Colors"
    eseBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    
    numOfColors = 3;

    colors = generateRandomColors(numOfColors);
    pickedColor = pickColor(numOfColors);
    viewcolor.textContent = pickedColor;

    for(var i = 0; i<squares.length; i++){

    	if(colors[i]){
    		squares[i].style.background = colors[i];
    	}
    	else{
    		squares[i].style.display = "none"
    	}
    }

})

hardBtn.addEventListener("click",function(){
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors"
    hardBtn.classList.add("selected")
    eseBtn.classList.remove("selected");

     numOfColors = 6;

    colors = generateRandomColors(numOfColors);
    pickedColor = pickColor(numOfColors);
    viewcolor.textContent = pickedColor;

    for(var i = 0; i<squares.length; i++){

    		squares[i].style.background = colors[i]; 	
       		squares[i].style.display = "block";
    }
})

for(var i = 0; i<squares.length; i++){

	squares[i].style.background = colors[i];

      squares[i].addEventListener("click",function(){

        var clickedColor = this.style.background
	

		if(clickedColor == pickedColor){

            pickedDisplayColor(pickedColor);
			messageDisplay.textContent = "Correct"
			h1.style.background = pickedColor;
			resetButton.textContent ="Play Again?"
		}
		else{
			
			this.style.background = "#232323"
            messageDisplay.textContent = "Try again"


		}
})

	}


function pickedDisplayColor(color){

	for(var i = 0; i < squares.length; i++){
 
      squares[i].style.background = color

	}
}

function pickColor(numOfColors){

  var random = Math.floor(Math.random()* numOfColors);

  return(colors[random]);
}

function generateRandomColors(num){


      var arr = []; 
	for(var i = 0; i < num; i++){
       arr.push(randomColors());
	}

	return arr;
}

function randomColors(){

   var r = Math.floor(Math.random()*256);
   var g = Math.floor(Math.random()*256);
   var b = Math.floor(Math.random()*256);

     return "rgb(" + r + ", " + g + ", " + b + ")"
}


