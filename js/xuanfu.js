// 右边悬浮条
function getStyle (obj,attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else {
		return getComputedStyle(obj,false)[attr];
	}
}
window.onload = window.onscroll = window.onresize= function () {
	var oSuspension = document.getElementById('suspension');
	if (getStyle(oSuspension,'position') == 'absolute') {
		//向上滚动的距离
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//可视区高
		var wHeight = document.documentElement.clientHeight || document.body.clientHeight;

	}
}

