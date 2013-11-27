$(document).ready( function(){
	var arrow = document.getElementById('arrow');
	var toolbar = document.getElementById('toolbar');
	var offset = document.getElementById('headerbar').offsetHeight;
	arrow.style.top = "7.5%"
	toolbar.onmousemove = function (e) {
	    var y = (e.clientY + 20);
	    console.log(offset);
	    arrow.style.top = y-offset-40 + 'px';
	};
})

