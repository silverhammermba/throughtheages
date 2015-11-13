function hide_class(klass) {
	var els = document.getElementsByClassName(klass);
	for (var j = 0; j < els.length; ++j) {
		els[j].style.display = "none";
	}
}

function show_simple() {
	hide_class('advanced');
	hide_class('advanced-only');
	hide_class('full');
}

function show_advanced() {
	hide_class('simple');
	hide_class('full');
}

function show_full() {
	hide_class('simple');
	hide_class('advanced-only');
}
