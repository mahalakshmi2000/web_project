var imgList = ["Darjeeling.jpg","Dudhsagar-Falls.jpg","goa.jpg","Gulmarg.jpg","kodaikanal-hills.jpg","Leh-Ladakh.jpg","manali.jpg","Ooty-2.jpg"];
var num = 0;
var l = imgList.length;
console.log(l);

function preview(){
	for(var j = 0;j < imgList.length; j++){
		document.getElementById("preview").innerHTML += "<img id = 'img"+j+"'onclick = 'photo("+'"'+imgList[j]+'"'+")'   src='"+imgList[j]+"'"+"/"+">";
		
	}
	//console.log(preview);	
}
preview();
function photo(input){
	for(var j = 0; j < imgList.length;j++){
		if(imgList[j] == input){
			if(j == 0){
				document.getElementById("center").style.backgroundImage = "url("+imgList[j]+")";
				document.getElementById("prev").style.backgroundImage = "url("+imgList[imgList.length-1]+")";
				document.getElementById("next").style.backgroundImage = "url("+imgList[j+1]+")";
			}
			else if(j == imgList.length-1){
				document.getElementById("center").style.backgroundImage = "url("+imgList[j]+")";
				document.getElementById("prev").style.backgroundImage = "url("+imgList[j-1]+")";
				document.getElementById("next").style.backgroundImage = "url("+imgList[0]+")";
			}
			else{
				document.getElementById("center").style.backgroundImage = "url("+imgList[j]+")";
				document.getElementById("prev").style.backgroundImage = "url("+imgList[j-1]+")";
				document.getElementById("next").style.backgroundImage = "url("+imgList[j+1]+")";
				}
		}
	}
}


function start(){
	document.getElementById("center").style.backgroundImage = "url("+imgList[num]+")";
	//document.getElementById("img0").style.transform = "scale(1.2)";
	document.getElementById("prev").style.backgroundImage = "url("+imgList[imgList.length-1]+")";
	document.getElementById("next").style.backgroundImage = "url("+imgList[num+1]+")";
	//console.log("url("+imgList[num]+")");
	
}
//console.log(start());
function next(){
	num++;
	if(num >= imgList.length){
		num = 0;
		
		document.getElementById("center").style.backgroundImage = "url("+imgList[num]+")";
		document.getElementById("img"+(imgList.length-1)).style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("prev").style.backgroundImage = "url("+imgList[imgList.length-1]+")";
		document.getElementById("next").style.backgroundImage = "url("+imgList[num+1]+")";
		
	}
	else{
		
		document.getElementById("center").style.backgroundImage = "url("+imgList[num]+")";
		document.getElementById("img"+(num-1)).style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("prev").style.backgroundImage = "url("+imgList[num-1]+")";
		if(num == imgList.length-1){
			document.getElementById("next").style.backgroundImage = "url("+imgList[0]+")";
		}
		else{
		document.getElementById("next").style.backgroundImage = "url("+imgList[num+1]+")";
		}
		
	}
	
	
}


function prev(){
	num--;
	if(num < 0){
		num = imgList.length-1;
		document.getElementById("center").style.backgroundImage = "url("+imgList[num]+")";
		document.getElementById("img0").style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("prev").style.backgroundImage = "url("+imgList[num-1]+")";
		document.getElementById("next").style.backgroundImage = "url("+imgList[0]+")";
	}
	else{
		document.getElementById("center").style.backgroundImage = "url("+imgList[num]+")";
		document.getElementById("img"+(num+1)).style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("next").style.backgroundImage = "url("+imgList[num+1]+")";
		if(num == 0){
			
			document.getElementById("prev").style.backgroundImage = "url("+imgList[imgList.length-1]+")";
		}
		else{
			
			document.getElementById("prev").style.backgroundImage = "url("+imgList[num-1]+")";
		}
		
	}
}
var i = 0;
var stp;
function time(){
	if(i < imgList.length){	
		next()
		stp = setTimeout(time,1000);
		console.log(stp);
		i++;
	}
}


function play(){	
				time();
				i = 0;
				}

function stop(){
		clearTimeout(stp);
		num = 0;
		i = 0;
		start();
}
function pause(){
			clearTimeout(stp);
			}





























