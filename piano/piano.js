keys = document.querySelectorAll('.key');
console.log(keys)
regulars = document.getElementsByClassName('white');
console.log(regulars)
sharps = document.getElementsByClassName('black');
console.log(sharps)
whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
blacks = ['w', 'e', 'r', 't', 'y'];
		
keys.forEach((key) =>{
	//console.log(key)
	key.addEventListener("click", () => playNote(key))
});
function playNote(key){
	//console.log(key)
	noteSound = document.getElementById(key.dataset.note);
	console.log(noteSound);
	noteSound.currentTime = 0;
	noteSound.play();
	//console.log(key.classList)
	key.classList.add('active');
	noteSound.addEventListener("ended",() =>{
		key.classList.remove('active');
	})
}
document.addEventListener("keydown",() => keydownFun(event))

function keydownFun(e) {
	console.log(e.key);
	if (e.repeat) return;
	key = e.key;
	whitekeyIndex = whites.indexOf(key);
	console.log(whitekeyIndex);
	blackkeyIndex = blacks.indexOf(key);
	console.log(blackkeyIndex);
	if (whitekeyIndex > -1) playNote(regulars[whitekeyIndex]);
	if (blackkeyIndex > -1) playNote(sharps[blackkeyIndex]);
}

