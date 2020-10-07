function setListener(element) {
	element.addEventListener('click', function (event) {
		scroll(element);

		event.preventDefault();
	});
}

function scroll(element) {
	var to = document.getElementById(element.getAttribute("href").substring(1, element.getAttribute("href").length)).offsetTop;
	var duration = 400;

	doScroll(element, to, duration);
}





function doScroll(element, to, duration) {
	console.log("HEY");
	if (duration <= 0) return;
	var difference = to - document.body.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		document.body.scrollTop = document.body.scrollTop + perTick;
		if (document.body.scrollTop == to) return;
		doScroll(element, to, duration - 10);
	}, 10);
}

window.onload = function () {
	var elems = document.getElementsByTagName("a");
	for (var i = 0; i < elems.length; i++) {
		if (elems[i].hasAttribute("anchor")) {
			if (elems[i].getAttribute("anchor")) setListener(elems[i]);
		}
	}

	var lazyboys = document.getElementsByClassName("lazyloaded");
	for (var i = 0; i < lazyboys.length; i++) { 
		lazyboys[i].setAttribute('src', lazyboys[i].getAttribute('data-src'));
		lazyboys[i].onload = function() {
			lazyboys[i].removeAttribute('data-src');
		};
	};
};



var TxtRotate = function(el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 10) || 2000;
this.txt = '';
this.tick();
this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];

if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

var that = this;
var delta = 300 - Math.random() * 100;

if (this.isDeleting) { delta /= 2; }

if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
}

setTimeout(function() {
  that.tick();
}, delta);
};

window.onload = function() {
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
  var toRotate = elements[i].getAttribute('data-rotate');
  var period = elements[i].getAttribute('data-period');
  if (toRotate) {
    new TxtRotate(elements[i], JSON.parse(toRotate), period);
  }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
document.body.appendChild(css);
};

