async function slideShow() {
	let i_slideshow = 0;
	let i_slideshow2 = 1;
	let bool = true;
	let str = null;
	let numPics = 14;
	let time = 3000; //+ 1000ms for timers between opacity change and image change

	str = "url("  + "images/" + i_slideshow.toString() + ".jpg)";
	document.getElementById("slideshow").style.backgroundImage = str;

	str = "url("  + "images/" + i_slideshow2.toString() + ".jpg)";
	document.getElementById("slideshow2").style.backgroundImage = str;

	const timer = ms => new Promise(res => setTimeout(res, ms));
	while(true){
		if(bool){
			document.getElementById("slideshow2").style.opacity = "1.0";
			await timer(1000);
			bool = !bool;
			str = "url("  + "images/" + i_slideshow.toString() + ".jpg)";
			document.getElementById("slideshow").style.backgroundImage = str;
			if(i_slideshow2 + 2 > numPics){
				i_slideshow2 = 1;
			}
			else{
				i_slideshow2 += 2;
			}
		}else{
			document.getElementById("slideshow2").style.opacity = "0";
			await timer(1000);
			bool = !bool;
			str = "url("  + "images/" + i_slideshow2.toString() + ".jpg)";
			document.getElementById("slideshow2").style.backgroundImage = str;
			if(i_slideshow + 2 > numPics){
				i_slideshow = 0;
			}
			else{
				i_slideshow += 2;
			}
		}
		await timer(time);
	}
}