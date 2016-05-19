

var picList = new Array(11);
var locationData = new Array(11);
var captionData = new Array(11);
var whichPic = 0;

var fButtonListener;
var bButtonListener;





picList[0] = "images/airport.png";
picList[1] = "images/beach.jpg";
picList[2] = "images/caroline.jpg";
picList[3] = "images/cave.JPG";
picList[4] = "images/frank.jpeg";
picList[5] = "images/iguana.jpg";
picList[6] = "images/lohmother.jpg";
picList[7] = "images/marshmallow.jpeg";
picList[8] = "images/sleepover.jpeg";
picList[9] = "images/snorkel.jpg";
picList[10] = "images/blainepose.jpeg";

locationData[0] = "Belize City, Belize";
locationData[1] = "South Water Caye, Belize";
locationData[2] = "Blue Creek, Toledo, Belize";
locationData[3] = "Blue Creek, Toledo, Belize";
locationData[4] = "Blue Creek, Toledo, Belize";
locationData[5] = "Blue Creek, Toledo, Belize";
locationData[6] = "South Water Caye, Belize";
locationData[7] = "South Water Caye, Belize";
locationData[8] = "South Water Caye, Belize";
locationData[9] = "South Water Caye, Belize";
locationData[10] = "South Water Caye, Belize";

captionData[0] = "Post Harry Watt, Pre 5 Hour Bus Ride";
captionData[1] = "The water is so blue";
captionData[2] = "No you cannot carry my bag";
captionData[3] = "Scariest part of the whole trip";
captionData[4] = "They gave me drugs";
captionData[5] = "I don't guana";
captionData[6] = "Live Love Lohmother";
captionData[7] = "I feel like I've sinned";
captionData[8] = "Guys I had a really weird dream someone was in my bed";
captionData[9] = "Oh look an Osprey";
captionData[10] = "Blaine Pose";

window.onload = function(){	
	document.getElementById("picView").src = picList[whichPic];
	document.getElementById("location").innerHTML = locationData[whichPic];
	document.getElementById("captionLoc").innerHTML = captionData[whichPic];


	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");

	fButtonListener.addEventListener('click', function(event){

		++whichPic;
		if (whichPic >= picList.length) {
			whichPic = 0;
		}
		document.getElementById("location").innerHTML = locationData[whichPic];
		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("captionLoc").innerHTML = captionData[whichPic];




	});

	bButtonListener.addEventListener('click', function(event){
		--whichPic;
		if (whichPic < 0) {
			whichPic = picList.length - 1;
		}
		document.getElementById("location").innerHTML = locationData[whichPic];
		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("captionLoc").innerHTML = captionData[whichPic];



	});
	

}
