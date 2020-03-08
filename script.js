//slider show

const slides=document.querySelectorAll("div[class^='slide']");
let myIdx=9999;

function goNext(){
	var oldSlide=slides[myIdx%3];
	oldSlide.style.zIndex=myIdx%3+1002;
	oldSlide.classList.add('fadeOut');
	myIdx++;
	slides[myIdx%3].style.zIndex=1000;
	setTimeout(function(){
		oldSlide.classList.remove('fadeOut');
		oldSlide.style.zIndex=oldSlide.dataset.index;
	},800);
	clearInterval(myauto);
	autoShow();
}

function goPrev(){
	var oldSlide=slides[myIdx%3];
	oldSlide.style.zIndex=myIdx%3+1002;
	oldSlide.classList.add('fadeOut');
	if(myIdx==1){
		myIdx=9999;
	}else{
		myIdx--;
	}
	slides[myIdx%3].style.zIndex=1000;
	setTimeout(function(){
		oldSlide.classList.remove('fadeOut');
		oldSlide.style.zIndex=oldSlide.dataset.index;
	},800);
	clearInterval(myauto);
	autoShow();
}

var myauto;

function autoShow(){
	myauto=setInterval(function(){
		var oldSlide=slides[myIdx%3];
		oldSlide.style.zIndex=myIdx%3+1002;
		oldSlide.classList.add('fadeOut');
		myIdx++;
		slides[myIdx%3].style.zIndex=1000;
		setTimeout(function(){
			oldSlide.classList.remove('fadeOut');
			oldSlide.style.zIndex=oldSlide.dataset.index;
		},800);
	},4000)
}

//menu highlight
var nowPath='index.html';
document.querySelector('#menu a[href^="'+nowPath+'"]').classList.add('visited');

//menu close
function closeMenu(th, e){
	if(th.classList.contains('menu-showed')){
		if(e.target.className.match(/^menu/)){
			return;
		}else{
			document.body.classList.remove('menu-showed');
		}
	}
}