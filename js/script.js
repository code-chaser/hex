

(function (window, document) {
	})(window, document);
	function check1(){
var x=document.getElementsByClassName("input");
var i;
	for (i=0; i<x.length;i++)
	{
		x[i].style.borderColor=document.getElementById('color-box').value;
	}

document.getElementById('value-box').value=document.getElementById('color-box').value;
}
	function check2(){
var x=document.getElementsByClassName("input");
var i;
	for (i=0; i<x.length;i++)
	{
		x[i].style.borderColor=document.getElementById('value-box').value;
	}

document.getElementById('color-box').value=document.getElementById('value-box').value;
}



