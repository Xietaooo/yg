
$(function () {
	//购物车显示隐藏
	$('.car').mouseenter(function () {
		$('.shopping').show();
		$('.shopping-1').css('border-bottom','none');
	})
	$('.car').mouseleave(function () {
		$('.shopping').hide();
	})

	//吸顶条
	var top = $('#top-2').offset().top;
	console.log(top);

		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= top ) {
				// 让吸顶条的position:fixed;显示替代的条
				$('#top-2').css('position','fixed');
				$('#bar').show();
				$('#top-2').css('background','rgba(51,51,51,0.3)');
			} else {
				$('#top-2').css('position','static');
				$('#bar').hide();
				$('#top-2').css('background','#e0e0e0');
			}
		});
});
//轮播图
window.onload = function () {
	var oT3 = document.getElementById('top-3');
	//ul1
	var oUl1 = document.getElementById('ul1');
	var aLi1 = oUl1.getElementsByTagName('li');

	//ul2 
	var oUl2 = document.getElementById('ul2');
	var aLi2 = oUl2.getElementsByTagName('li');

	// 图片的下标
	var iNow = 0;
	aLi1[0].className = 'active';
	aLi2[0].style.display = 'block';
	for (var i = 0;i < aLi1.length;i++) {
		aLi1[i].index = i;
		aLi1[i].onmouseenter = function () {
			iNow = this.index;
			clearAdd();
		}
	}
	// 清空所有,给自己添加
		function clearAdd () {
			// 先清空所有
			for (var j = 0;j < aLi1.length;j++) {
				aLi1[j].className = '';
				aLi2[j].style.display = 'none';
			}
			// 再给自己添加
			// i = 0,1,2,3,4,5,0,1,2,3,4,5
			aLi1[iNow].className = 'active';
			aLi2[iNow].style.display = 'block';
		}

	// 开启定时器,自动播放
	var tid = setInterval(next,2500);
	// 给整个父盒子添加鼠标移入
	oT3.onmouseenter = function () {
		clearInterval(tid);
	}
	oT3.onmouseleave = function () {
	  	tid = setInterval(next,2500);
	}
	function next() {
			iNow++;
			// this.index = 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0
			if (iNow == aLi1.length) {
				iNow = 0;
			}
			clearAdd();
		}



}

//蘑菇街
$(function () {
	$.extend({
			tab: function tab (selector1,selector2) {
					$(selector1).mouseenter(function () {
						// 移出所有
						$(selector1).removeClass('active');
						$(selector2).hide();
						// 给自己添加
						$(this).addClass('active');
						$(selector2).eq($(this).index()).show();
					})
				}
		})
	$.tab('.mr-2 .mr-2-right li','.mr-2 .mr-2-left li');
	console.log($());
})
// // 右边悬浮条
// function getStyle (obj,attr) {
// 	if (obj.currentStyle) {
// 		return obj.currentStyle[attr];
// 	}else {
// 		return getComputedStyle(obj,false)[attr];
// 	}
// }
// window.onload = window.onscroll = window.onresize= function () {
// 	var oSuspension = document.getElementById('suspension');
// 	if (getStyle(oSuspension,'position') == 'absolute') {
// 		//向上滚动的距离
// 		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
// 		//可视区高
// 		var wHeight = document.documentElement.clientHeight || document.body.clientHeight;

// 	}
// }

	
