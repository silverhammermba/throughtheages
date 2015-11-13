/* hide elements with klass */
function hide_class(klass) {
	var els = document.getElementsByClassName(klass);
	for (var i = 0; i < els.length; ++i) {
		els[i].style.display = "none";
	}
}

/* remove rule classes from elements with klass */
function unrule(klass) {
	var els = document.getElementsByClassName(klass);
	for (var i = els.length; i-- > 0;) {
		els[i].classList.remove('rule');
		els[i].classList.remove(klass);
	}
}

function show_simple() {
	hide_class('exp');

	unrule('simple');
	hide_class('advanced');
	hide_class('advanced-only');
	hide_class('full');
}

function show_advanced() {
	hide_class('exp');

	hide_class('simple');
	unrule('advanced');
	unrule('advanced-only');
	hide_class('full');
}

function show_full() {
	hide_class('exp');

	hide_class('simple');
	unrule('advanced');
	hide_class('advanced-only');
	unrule('full');
}
