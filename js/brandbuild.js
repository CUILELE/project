window.onload = window.onresize = function() {
	fAA();
	
//	fA();
	//生成结构数据
//	var have = {
//		"date": [
//			{'src':'caca (5).jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好',
//			},
//			{'src':'12.jpg'},
//			{'src':'caca (7).jpg'},
//			{'src':'caca (6).jpg'},
//			{'src':'case (6).jpg'},
//			{'src':'20.jpg'},
//			{'src':'caca (3).jpg'},
//			{'src':'case (8).jpg'},
//			{'src':'case (4).jpg'},
//			{'src':'caca (5).jpg'}
//		]
//	}
	//生成结构
	
//	var ul = document.getElementById('content_box');
//	for(var i=0;i<have.date.length;i++){
//		var li = document.createElement('li');
//		li.className = 'content_in';
//		ul.appendChild(li);
//		var oImg = document.createElement('img');
//		oImg.src = 'img/'+have.date[i].src;
//		li.appendChild(oImg);
//		var div = document.createElement('div');
//		div.className = 'text1'
//		li.appendChild(div);
//	}
	
//	var ul = document.getElementById('content_box')
//			for (var i = 0; i < dateIn.date.length; i++) {
//				var li = document.createElement('li');
//				li.className = 'content_in '
//				ul.appendChild(li)
//				//a怎么创建
//				var oImg = document.createElement('img');
//				oImg.src = 'img/' + dateIn.date[i].src
//				li.appendChild(oImg);
//				var div = document.createElement('div');
//				li.appendChild(div)
//				div.className = 'text1'
//				var p = document.createElement('p');
//				div.appendChild(p)
//				
//				var span = document.createElement('span');
//				div.appendChild(span)
//			}
//	var dateIn = {
//		"date": [
//			{'src':'case (4).jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'case (6).jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'case (8).jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'case18_2.jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'case19_2.jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'12.jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'21.jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//			{'src':'case (4).jpg',
//			'text1':'你好崔乐',
//			'text2':'我很好'
//			},
//		]
//	}
//	console.log(dateIn.date[0].text1)
	fn1();
//	var NNN = 0;
mousemove()
	window.onscroll = function() {
//		NNN+=10;
//		window.scrollTo(0,NNN);
		if (scrHeight()) {
			var ul = document.getElementById('content_box')
			for (var i = 0; i < dateIn.date.length; i++) {
				var li = document.createElement('li');
				li.className = 'lis_box ';
				ul.appendChild(li);
				
				var div = document.createElement('div');
				div.className = 'content_in';
				li.appendChild(div);
				
				var div1 = document.createElement('div');
				div1.className = 'pic111';
				div.appendChild(div1)
				
				var oImg = document.createElement('img');
				oImg.className = 'classimg'
				oImg.src = 'img/' + dateIn.date[i].src
				div1.appendChild(oImg)
				
				var div2 = document.createElement('div');
				div2.className = 'text1';
				div.appendChild(div2);
				
				var p = document.createElement('p');
				div2.appendChild(p);
				p.innerHTML = dateIn.date[i].text1;
				
				var span = document.createElement('span');
				div2.appendChild(span);
				span.innerHTML = dateIn.date[i].text2;
			}
			fn1();
			mousemove()
		}
	}

}

function fn1() {
	var lis = document.getElementsByClassName('lis_box');
	var ul = document.getElementById('content_box');
	var oliW = lis[0].offsetWidth;
	//console.log(document.documentElement.clientWidth)
	var lie = Math.floor(document.documentElement.clientWidth / oliW);
	ul.style.cssText = 'margin:0 auto;width: ' + oliW * lie + 'px;';
	
	//console.log(lis)
	
//存li的高度
	var arrH = [];
	for (var i = 0; i < lis.length; i++) {
		if (i < lie) {
			arrH.push(lis[i].offsetHeight)
		} else {
			var minH = Math.min.apply(null, arrH);
			
			var index = getindex(arrH, minH);
			lis[i].style.position = 'absolute';
			lis[i].style.left = index * oliW + 'px';
			lis[i].style.top = minH + 'px';
			arrH[index] += lis[i].offsetHeight;
		}
	}
	
	if(lie == 4){
		lis[3].style.cssText = 'position:static';
	}
	if(lie == 3){
		lis[2].style.cssText = 'position:static';
	}
	if(lie == 2){
		lis[1].style.cssText = 'position:static';
	}
}

function getindex(arr, value) {
	for (var i in arr) {
		if (arr[i] == value) {
			return i;
		}
	}
}
var scrollOld = 0;
function scrHeight() {
	var time1 = 0;
	var lis = document.getElementsByClassName('lis_box')
	//最后一个box的一半到顶部的距离
	var lastBoxH = Math.floor(lis[lis.length - 1].offsetHeight / 2) + lis[lis.length - 1].offsetTop;
	//可视区高度
	var wH = document.body.clientHeight || document.documentElement.clientHeight;
//		console.log(wH)
	//滚动距离
	var scrolT = document.body.scrollTop || document.documentElement.scrollTop;

	var head = document.getElementsByClassName('head')[0];
	if(scrolT > 300){
		return1.style.opacity = 1;
		head.style.paddingTop = 15+'px';
	}else{
		head.style.paddingTop = 30+'px'
		clearInterval(time1)
		return1.style.opacity = 0;
	}
	if(scrolT>500 && scrolT>scrollOld){
		fA()
	}
//	console.log(scrolT,scrollOld)
	scrollOld = scrolT;
	return (lastBoxH < wH + scrolT) ? true : false;
}

//鼠标移入
	function mousemove(){
		var ul = document.getElementById('content_box');
		var lis = document.getElementsByTagName('li');
		
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseenter = function (){
				this.children[0].children[0].style.top = -30+'px'
				this.children[0].children[1].style.bottom = 0
			}
			lis[i].onmouseleave = function (){
				this.children[0].children[0].style.top = 0;
				this.children[0].children[1].style.bottom = -90+'px'
			}
		}
	}
	
//返回顶部	
function fAA(){
	window.return1 = document.getElementsByClassName('return')[0];
	var timer = 0;
	var num =0
	return1.onclick = function (){
		timer = setInterval (function(){
			var n = window.pageYOffset;
			n=n-100;
			window.scrollTo(0,n);
			if(n <=0){
				clearInterval(timer);
			}
		},20)
	}
}
	
	//抖
function fA(){
	var return1 = document.getElementsByClassName('return')[0];
//	var arr = [40,-40,30,-30,20,-20,10,-10,0];
	var arr = [16,-16,14,-14,12,-12,10,-10,8,-8,6,-6,4,-4,2,-2,0];
	var timer = 0
	var num = 0;
	timer = setInterval(function (){
		return1.style.right = arr[num]+'px';
		num++;
//		console.log(num)
		if(num ==arr.length){
			clearInterval(timer);
			num = 0;
			return1.style.right = 16+'px';
		}
	},20)
}
