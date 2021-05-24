var imglist = ["Darjeeling.jpg","Dudhsagar-Falls.jpg","goa.jpg","Gulmarg.jpg","kodaikanal-hills.jpg","Leh-Ladakh.jpg","manali.jpg","Ooty-2.jpg"];
var num = 0;
function Start(){
	document.getElementById("prev").style.backgroundImage = "url("+imglist[imglist.length-1]+")";
	document.getElementById("center").style.backgroundImage = "url("+imglist[num]+")";
	document.getElementById("next").style.backgroundImage = "url("+imglist[num+1]+")";
	
}
function next(){
	num++;
	if(num >= imglist.length){
		num = 0;
		
		document.getElementById("center").style.backgroundImage = "url("+imglist[num]+")";
		document.getElementById("img"+(imglist.length-1)).style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("prev").style.backgroundImage = "url("+imglist[imglist.length-1]+")";
		document.getElementById("next").style.backgroundImage = "url("+imglist[num+1]+")";
	}
	else{
		
		document.getElementById("center").style.backgroundImage = "url("+imglist[num]+")";
		document.getElementById("img"+(num-1)).style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("prev").style.backgroundImage = "url("+imglist[num-1]+")";
		
		if(num == imglist.length-1){
			document.getElementById("next").style.backgroundImage = "url("+imgList[0]+")";
		}
		else{
		document.getElementById("next").style.backgroundImage = "url("+imglist[num+1]+")";
		}
	}
}
function prev(){
	num--;
	if(num < 0){
		num = imglist.length-1;
		document.getElementById("center").style.backgroundImage = "url("+imglist[num]+")";
		document.getElementById("img0").style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("prev").style.backgroundImage = "url("+imglist[num-1]+")";
		document.getElementById("next").style.backgroundImage = "url("+imglist[0]+")";
	}
	else{
		document.getElementById("center").style.backgroundImage = "url("+imglist[num]+")";
		document.getElementById("img"+(num+1)).style.transform = "scale(1)";
		document.getElementById("img"+num).style.transform = "scale(1.2)";
		document.getElementById("next").style.backgroundImage = "url("+imglist[num+1]+")";
		if(num == 0){
			document.getElementById("prev").style.backgroundImage = "url("+imglist[imglist.length-1]+")";
		}
		else{
			document.getElementById("prev").style.backgroundImage = "url("+imglist[num-1]+")";
		}
	}
}
function preview(){
	for(var i = 0; i < imglist.length;i++){
	document.getElementById("preview").innerHTML += "<img id = 'img"+i+"' onclick = 'photo("+'"'+imglist[i]+'"'+")'  src='"+imglist[i]+"'"+"/"+">";
	}	
}
preview();
function photo(input){
	for(var i = 0; i <imglist.length; i++ ){
		if(imglist[i] == input){
			if(i == 0){
				document.getElementById("center").style.backgroundImage = "url("+imglist[i]+")";
				document.getElementById("prev").style.backgroundImage = "url("+imglist[imglist.length-1]+")";
				document.getElementById("next").style.backgroundImage = "url("+imglist[i+1]+")";
			}
			else if(i == imglist.length-1){
				document.getElementById("center").style.backgroundImage = "url("+imglist[i]+")";
				document.getElementById("prev").style.backgroundImage = "url("+imglist[i-1]+")";
				document.getElementById("next").style.backgroundImage = "url("+imglist[0]+")";
			}
			else{
				document.getElementById("center").style.backgroundImage = "url("+imglist[i]+")";
				document.getElementById("prev").style.backgroundImage = "url("+imglist[i-1]+")";
				document.getElementById("center").style.backgroundImage = "url("+imglist[i+1]+")";
				}
		}
	}
	
}
var j = 0;
var stp;
function time(){
	if(j < imglist.length){	
		next()
		stp = setTimeout(time,1000);
		console.log(stp);
		j++;
	}
}
function play(){	
				time();
				j = 0;
				}

function stop(){
		clearTimeout(stp);
		num = 0;
		j = 0;
		Start();
}
function pause(){
			clearTimeout(stp);
			}


