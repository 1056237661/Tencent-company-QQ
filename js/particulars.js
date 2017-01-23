
function particulars(dealerName, showName){
	var clickerDom = document.getElementsByClassName(dealerName); 
	var intro = document.getElementsByClassName(showName)[0];
	for (var i = 0; i<clickerDom.length; i++) {
		clickerDom[i].onmouseover = function(e){
			var e = e || window.event;
			var top = this.parentNode.offsetTop + this.parentNode.offsetHeight;
			var left = e.clientX + 5;
			intro.setAttribute("style","display:block; position:absolute; left:" + left + "px;top:" + top +"px;")
		}
		clickerDom[i].onmouseleave = function(){
			intro.setAttribute("style","display: none;")
		}
	}
}

