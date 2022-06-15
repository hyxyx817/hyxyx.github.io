// JavaScript Document
function Playlist(){
			var playlistlist = document.getElementById("playlistlist").style.height;
			console.log(playlistlist)
			if(playlistlist == "0px")
				document.getElementById("playlistlist").style.height = "108px";
				
				
			if(playlistlist == "108px")
				document.getElementById("playlistlist").style.height = "0px";
			
}
var playing = 0;
function PlayStop(){
	console.log(playing);
	var play = '<path  fill-rule="evenodd" fill="#c6c9ce" d="M3,22.81V3.32a1.25,1.25,0,0,1,1.92-1c.77.42,16.08,9,17.39,9.73a1.2,1.2,0,0,1,0,2.11c-.94.53-16.31,9.15-17.43,9.75A1.25,1.25,0,0,1,3,22.81Z"></path>';
	
	var stop = '<path  fill-rule="evenodd" fill="#c6c9ce" d="M7,2.1h2.8c0.4,0,0.7,0.3,0.7,0.7v20.5c0,0.4-0.3,0.7-0.7,0.7H7c-0.4,0-0.7-0.3-0.7-0.7V2.8 C6.3,2.4,6.6,2.1,7,2.1z M15.1,2.3 M15.1,2.8v20.5c0,0.4,0.3,0.7,0.7,0.7h2.8c0.4,0,0.7-0.3,0.7-0.7V2.8c0-0.4-0.3-0.7-0.7-0.7h-2.8 C15.4,2.1,15.1,2.4,15.1,2.8z"></path>';
	
	if(playing ==0){
		playing =1
		document.getElementById('play').innerHTML = play;
		
	}
	
	else{
		playing =0
		document.getElementById('play').innerHTML = stop;
	}
	
}
function translogo(){	
			var A = document.getElementById("a1").style.transform;
			
			if(A=="translateX(216%)"){
				document.getElementById("a1").style.transform = "translateX(0%)"
				document.getElementById("a2").style.transform = "translateX(216%)";
			}
			
			if(A == "translateX(0%)"){
				document.getElementById("a2").style.transform = "translateX(0%)"
				document.getElementById("a1").style.transform = "translateX(216%)";
			}
}
function tpIndex(){
			document.getElementById("ABOUT").style.zIndex = 0
			document.getElementById("ABOUT").style.opacity = 0
			document.getElementById("MUSIC").style.zIndex = 0
			document.getElementById("MUSIC").style.opacity = 0
			document.getElementById("INFO").style.zIndex = 0
			document.getElementById("INFO").style.opacity = 0
			document.getElementById("CONNECT").style.zIndex = 0
			document.getElementById("CONNECT").style.opacity = 0
			document.getElementById("index").style.zIndex = 1
			document.getElementById("index").style.opacity = 1
			document.getElementById("slideLogo").style.opacity = 1
			translogo()
			
		}



function tpAbout(){
			document.getElementById("ABOUT").style.zIndex = 1
			document.getElementById("ABOUT").style.opacity = 1
			document.getElementById("MUSIC").style.zIndex = 0
			document.getElementById("MUSIC").style.opacity = 0
			document.getElementById("INFO").style.zIndex = 0
			document.getElementById("INFO").style.opacity = 0
			document.getElementById("CONNECT").style.zIndex = 0
			document.getElementById("CONNECT").style.opacity = 0
			document.getElementById("index").style.zIndex = 0
			document.getElementById("index").style.opacity = 0
			document.getElementById("slideLogo").style.opacity = 1
			document.getElementById("aboutContainer").style.opacity = 1
	        translogo()
	
}
function tpMusic(){
			document.getElementById("ABOUT").style.zIndex = 0
			document.getElementById("ABOUT").style.opacity = 0
			document.getElementById("MUSIC").style.zIndex = 1
			document.getElementById("MUSIC").style.opacity = 1
			document.getElementById("INFO").style.zIndex = 0
			document.getElementById("INFO").style.opacity = 0
			document.getElementById("CONNECT").style.zIndex = 0
			document.getElementById("CONNECT").style.opacity = 0
			document.getElementById("index").style.zIndex = 0
			document.getElementById("index").style.opacity = 0
			document.getElementById("slideLogo").style.opacity = 0
}
function tpConnect(){
			document.getElementById("ABOUT").style.zIndex = 0
			document.getElementById("ABOUT").style.opacity = 0
			document.getElementById("MUSIC").style.zIndex = 0
			document.getElementById("MUSIC").style.opacity = 0
			document.getElementById("INFO").style.zIndex = 0
			document.getElementById("INFO").style.opacity = 0
			document.getElementById("CONNECT").style.zIndex = 1
			document.getElementById("CONNECT").style.opacity = 1
			document.getElementById("index").style.zIndex = 0
			document.getElementById("index").style.opacity = 0
			document.getElementById("slideLogo").style.opacity = 0
}
function tpInfo(){
			document.getElementById("ABOUT").style.zIndex = 0
			document.getElementById("ABOUT").style.opacity = 0
			document.getElementById("MUSIC").style.zIndex = 0
			document.getElementById("MUSIC").style.opacity = 0
			document.getElementById("INFO").style.zIndex = 1
			document.getElementById("INFO").style.opacity = 1
			document.getElementById("CONNECT").style.zIndex = 0
			document.getElementById("CONNECT").style.opacity = 0
			document.getElementById("index").style.zIndex = 0
			document.getElementById("index").style.opacity = 0
			document.getElementById("slideLogo").style.opacity = 0
}
function Login(){	
			var A = document.getElementById("accont").value;
			console.log(A)
			var P = document.getElementById("password").value;
			console.log(P)
			if(A !=P){
				document.getElementById("error").innerHTML = "密码错误";
			}
			if(A ==P){
				tpIndex()
				translogo();
			}
				
			
			
				
		}
function pageDown(){
			document.getElementById("PAGE1").style.transform = "translateX(-100%)"
			document.getElementById("PAGE2").style.transform = "translateX(-100%)"
			document.getElementById("PAGEDOWN").style.opacity = 0
			document.getElementById("PAGEUP").style.opacity = 1
			document.getElementById("ACTDOT").style.left = "75%"
		}
function pageUp(){
			document.getElementById("PAGE1").style.transform = "translateX(0%)"
			document.getElementById("PAGE2").style.transform = "translateX(0%)"
			document.getElementById("PAGEDOWN").style.opacity = 1
			document.getElementById("PAGEUP").style.opacity = 0
			document.getElementById("ACTDOT").style.left = "25%"

		}
function returnIndex(){
			document.getElementById("SEARCHRESULT").style.opacity = 0
			document.getElementById("SEARCHRESULT").style.pointerEvents = "none"
			document.getElementById("SEARCH").style.transform = "translateY(0rem) translateX(0rem)"
			document.getElementById("SEARCH").style.width = "13.68rem"
			document.getElementById("INDEXPT").style.opacity = 1
			document.getElementById("slideLogo").style.opacity = 1;
			transLogo()
		}
		function toSearch(){
			var A = document.getElementById("SEARCH").style.transform
			console.log(A)
			document.getElementById("SEARCH").style.transform = "translateY(-10.32rem) translateX(1.6392rem)"
			document.getElementById("SEARCH").style.width = "13.68rem"
			document.getElementById("SEARCHRESULT").style.opacity = 1
			document.getElementById("SEARCHRESULT").style.pointerEvents = "auto"
			document.getElementById("INDEXPT").style.opacity = 0
			translogo();
			document.getElementById("slideLogo").style.opacity = 0
			
			
		}