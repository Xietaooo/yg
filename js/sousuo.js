window.onload = function () {
	// 搜索框
var oInput = document.getElementById('input');
	oInput.onfocus = function () {
		this.value = '';
	}
	oInput.onblur = function () {
		this.value = '请输入商品名!';
	}
}