var nowPath=location.href.split('/').pop().split('#').shift();

//header.html load
var headerXhr=new XMLHttpRequest();

headerXhr.open('GET', 'header.html', true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
	if(headerXhr.readyState==4 && headerXhr.status==200){
		header.innerHTML=headerXhr.responseText;
	}
};

//menu.html load
var menuXhr=new XMLHttpRequest();

menuXhr.open('GET', 'menu.html', true);
menuXhr.send();

menuXhr.onreadystatechange=function(){
	if(menuXhr.readyState==4 && menuXhr.status==200){
		menu.innerHTML=menuXhr.responseText;
		//menu highlight
		document.querySelector('#menu a[href^="'+nowPath+'"]').classList.add('visited');
	}
};

//footer.html load
var footerXhr=new XMLHttpRequest();

footerXhr.open('GET', 'footer.html', true);
footerXhr.send();

footerXhr.onreadystatechange=function(){
	if(footerXhr.readyState==4 && footerXhr.status==200){
		footer.innerHTML=footerXhr.responseText;
	}
};

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

// menu open
var scrollbarWidth=window.innerWidth-document.body.clientWidth;
function openMenu(){
	document.body.style.paddingRight=scrollbarWidth+'px';
	document.body.classList.add('menu-showed');
}

//menu close
function closeMenu(th, e){
	if(th.classList.contains('menu-showed')){
		if(e.target.className.match(/menu/)){
			return;
		}else{
			document.body.classList.remove('menu-showed');
			document.body.style.paddingRight='';
		}
	}
}
