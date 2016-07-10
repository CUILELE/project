window.onload = function fnnn() {
	
	
//	fnnn();
//
//	function fnnn() {
//		var abox = document.getElementsByTagName('span')[0];
//		var cccc = document.getElementsByClassName('ccccc')[0];
//		var box = document.getElementById('boxccc');
//		var num = 0;
//		var timer = 0;
//		var Hi = document.documentElement.clientHeight;
//		//		console.log(Hi)
//		//		console.log(dateIn.date2.length)
//		var aaa = document.createElement('img')
//		for (var i = 0; i < dateIn.date2.length; i++) {
//			var oImg = new Image();
//
//			oImg.src = dateIn.date2[i].src;
//
//			oImg.onload = function() {
//				num++;
//				var scale = Math.floor(num / dateIn.date2.length * 100);
//				//				console.log(scale)
//				abox.innerHTML = scale + '%'
//				box.style.height = (Hi - scale * (Hi / 100)) + 'px';
//				//				console.log(scale*(Hi/100)+'px')
//				//				abox[1].style.height = scale*(Hi/100)+'px';
//				if (num == dateIn.date2.length) {
//
//					cccc.style.display = 'none'
//				}
//			}
//
//			oImg.onerror = function() {
//				num++;
//				if (num == dateIn.date2.length) {
//					abox.style.opacity = 0;
//				}
//			}
//		}
//
//	}

	document.onmousedown = function() {
		return false;
	}
	
	
//	var HG = window.innerHeight;
	function start() {
		this.box = $('#box');
		this.nav = $('.nav', $('#box'))[0];
		this.yingwen2 = $('.yingwen2', $('#box'))[0];
		this.yungpic = $('.yuanpic', $('#box'))[0];
		this.yungpic1 = $('.yuanpic1', $('#box'))[0];
		this.yuan_h1 = $('.yuan_h1', $('#box'))[0];
		this.yuan = $('.yuan', $('#box'))[0];
		this.content3_text = $('.content3_text', $('#box'))[0];
		this.content4_pic = $('.content4_pic', $('#box'))[0];
		this.green2 = $('.green2', $('#box'))[0];
		this.computer = $('.computer', $('#box'))[0];
		this.text1 = $('.text', $('#box'))[0];
		this.section4_1 = $('.section4_1', $('#box'))[0];
		this.section4_2 = $('.section4_2', $('#box'))[0];
		this.section4_3 = $('.section4_3', $('#box'))[0];
		this.menus = this.nav.children;
		this.h2 = $('h2', $('#box'))[0];
		this.my = $('.my', $('#box'))[0];
		this.green = $('.green', $('#box'))[0];
		this.tree = $('.tree', $('#box'))[0];
		this.focus_item = $('.focus_item', $('#box'))[0];
		this.li = this.focus_item.children;

		//无缝页
		this.M = $('.M')
		this.box2 = $('#box2')
		this.iW = window.innerHeight;
		this.lastpageG = $('.lastpageG')[0]
		this.lastpageM = $('.lastpageM')[0];
		this.lastpageY = $('.lastpageY')[0]
		//page
		this.page = $('.pages', $('#box'))[0];
		this.ali = this.page.children[0].children;

		this.num = 0;
		this.num1 = 0;
		this.timer4 = 0;
		this.timer5 = 0;
		this.iH = window.innerHeight;
		//computer的高度
		this.comHeight =  this.computer.offsetHeight;
		console.log(this.comHeight)
	}
	//刚进页面
	start.prototype.MMbox = function() {
			var _this = this;
			mttenT(_this.tree, 0, function() {
				setTimeout(function() {
					mttenBB(_this.h2,(_this.iH/2+60.5), 1000, 100, function(){
						mttenBB(_this.my,(_this.iH/2+10), 600, 100,function(){})
						mttenBB(_this.green,(_this.iH/2-90),600, 100);
						_this.onOff = true;
					});
				}, 60)
			});
		}
		//menu
	start.prototype.menumove = function() {
		var _this = this
		this.nav.onmouseover = function() {
			mttenL(_this.menus[1], 0, 400)

		}
		this.nav.onmouseout = function() {
			mttenL(_this.menus[1], -70, 400)
		}
		this.nav.onclick = function() {
			window.location.href = 'menu.html';
		}
	}

	//鼠标移入几条线复用,css3也有效果，在tool.css里
	//	function reuseLine(){
	//		this.lis = $('.focus_item_one');
	////		this.line = $('.line');
	//	}
	//	reuseLine.prototype.mouse = function (){
	//		var _this = this
	//		for(var i=0;i<this.lis.length;i++){
	//			this.lis[i].index = i;
	////			this.line = this.lis[i].getElementsByClassName('line');
	//			this.lis[i].onmouseover = function (){
	//				var aLine = _this.lis[this.index].getElementsByClassName('line');
	//				aLine[0].style.left = 0;
	//				aLine[1].style.top = 0;
	//				aLine[2].style.right = 0;
	//				aLine[3].style.bottom = 0;
	//			}
	//			this.lis[i].onmouseout = function (){
	//				var aLine = _this.lis[this.index].getElementsByClassName('line');
	//				aLine[0].style.left = '-100%';
	//				aLine[1].style.top = '-100%';
	//				aLine[2].style.right = '-100%';
	//				aLine[3].style.bottom = '-100%';
	//			}
	//		}
	//	}
	//	var Line = new reuseLine();
	//	Line.mouse();

	//page点击
	start.prototype.Page = function() {
			var _this = this;
			for (var i = 0; i < this.ali.length; i++) {
				this.ali[i].index = i;
				//console.log(this.ali[i].index)
				this.ali[i].onclick = function() {
					//清洗
					for (var i = 0; i < _this.ali.length; i++) {
						_this.ali[i].className = '';
					}
					this.className = 'active';
					_this.num = this.index;
					mttenTT(_this.box2, -_this.num * _this.iW, 500);
					s1.DH(_this.num)
				}
			}
		}
		//滚轮
	start.prototype.mous = function() {
			if (this.num == 0) {
				this.onOff = false;
			} else {
				this.onOff = true;
			}

			var _this = this;
			addWhell(document, function(down) {
				if (_this.onOff) {
					_this.onOff = false;
					if (down) {
						if (_this.num <= 0) {
							_this.num = _this.M.length - 1;
							_this.box2.style.top = (-_this.num * _this.iW) + 'px';
						}
						_this.num--;
						for (var i = 0; i < _this.ali.length; i++) {
							_this.ali[i].className = '';
						}
						_this.ali[_this.num % _this.ali.length].className = 'active';
						mttenTT(_this.box2, -_this.num * _this.iW, 500)
					} else {
						if (_this.num == 3) {
							s1.MMbox();
						}
						if (_this.num == _this.M.length - 1) {

							_this.box2.style.top = 0;
							_this.num = 0;
						}
						_this.num++;
						for (var i = 0; i < _this.ali.length; i++) {
							_this.ali[i].className = '';
						}
						_this.ali[_this.num % _this.ali.length].className = 'active';
						mttenTT(_this.box2, -_this.num * _this.iW, 500)

					}
					s1.DH(_this.num)
					setTimeout(function() {
						_this.onOff = true;
					}, 1500);
				}
			});
		}
		//复原
	start.prototype.FY = function() {
			this.num1 = 0;
			mttenBB(this.computer,-(this.iH+10), 800, 0);
			mttenBB(this.yingwen2,-(this.iH+10), 800, 0);
			mttenBB(this.text1, -(this.iH+10), 800);
			mttenBB(this.green2, (this.iH/2-60), 50, 0);
			//0
			mttenBB(this.h2,(this.iH+10), 1000, 100);
			mttenBB(this.my,-(this.iH+10), 1000, 100);
			mttenBB(this.green,-(this.iH+10), 1000, 100);
			//4
			mttenBB(this.lastpageY,(this.iH+10), 800, 100);
			mttenBB(this.lastpageM,-(this.iH+10), 800, 100);
			mttenBB(this.lastpageG,-(this.iH+10), 800, 100);
			
			this.yungpic1.style.display = 'none';
			mttenTT(this.yuan_h1, -230, 1500);
			mttenBB(this.yungpic, -230, 1500);
			mttenTT(this.yungpic1, 0, 4000);
			this.content3_text.style.opacity = 0;
			this.yuan.style.backgroundSize = 0;
			mttenL(this.section4_1, -880, 1000)
			mttenL(this.section4_2, 880, 1000)
			mttenBB(this.section4_3, -410, 80,0)
			this.content4_pic.style.backgroundSize = 0;
		}
		//动画
	start.prototype.DH = function(Num) {
		var _this = this;
		switch (Num) {
			case 0:
				s1.FY()
				mttenBB(_this.h2,(_this.iH/2+60.5), 1000, 100);
				mttenBB(_this.my,(_this.iH/2+10), 1000, 100);
				mttenBB(_this.green,(_this.iH/2-90),1000, 100);
				break;
				
			case 4:
				s1.FY()
				mttenBB(_this.lastpageY,(_this.iH/2+60.5), 1000, 100);
				mttenBB(_this.lastpageM,(_this.iH/2+10), 1000, 100);
				mttenBB(_this.lastpageG,(_this.iH/2-90),1000, 100);
				break;	
			case 1:
				s1.FY()
				mttenBB(this.computer, ((_this.iH/2)-(_this.comHeight/2)), 1500, 100, function() {
					mttenBB(_this.green2, (_this.iH/2-60),600, 100);
				});
				mttenBB(this.yingwen2, (_this.iH/2+71), 500, 100);
				mttenBB(this.text1, (_this.iH/2+12), 500);
				break;
			case 2:
				s1.FY()
				this.timer4 = setInterval(function() {
					_this.num1 += 10;
					if (_this.num1 >= 476) {
						_this.num1 += 0;
						clearInterval(_this.timer4)
					}
					_this.yuan.style.backgroundSize = _this.num1 + 'px';
					_this.content3_text.style.opacity = 1;
				}, 25)
				this.yungpic1.style.display = 'block';
				mttenTT(this.yuan_h1, 100, 1500);
				mttenBB(this.yungpic, 100, 1500);
				mttenTT(this.yungpic1, 210, 4000);
				break;
			case 3:
				s1.FY();
				this.timer5 = setInterval(function() {
					_this.num1 += 20;
					if (_this.num1 >= 1366) {
						clearInterval(_this.timer5)
					}
					_this.content4_pic.style.backgroundSize = _this.num1 + 'px';
				}, 15)
				mttenL(this.section4_1, 0, 1000)
				mttenL(this.section4_2, 0, 1000)
				mttenBB(this.section4_3, 0, 1000)
			default:
				break;
		}
	}

	var s1 = new start();
	s1.menumove();
	s1.MMbox();
	s1.mous();
	s1.Page();

	function mttenL(obj, Tar, timm) {
		var MoVe = {
			'element': obj,
			'type': "easeOut",
			'time': timm,
			'target': {
				'left': Tar
			}
		};
		mTween(MoVe);
	}

	function mttenT(obj, Tar, objj) {
		var MoVe = {
			'element': obj,
			'type': "easeOut",
			'time': 1000,
			'target': {
				'top': Tar
			},
			"callBack": objj
		};
		mTween(MoVe);
	}

	function mttenTT(obj, Tar, objj) {
		var MoVe = {
			'element': obj,
			'type': "easeOut",
			'time': 1000,
			'target': {
				'top': Tar
			}
		};
		mTween(MoVe);
	}

	function mttenB(obj, Tar) {
		var MoVe = {
			'element': obj,
			'type': "easeOut",
			'time': 1200,
			'target': {
				'bottom': Tar
			},
			"callBack": function() {
				obj.style.display = 'none'
			}
		};
		mTween(MoVe);
	}

	function mttenBB(obj, Tar, timm, opacity, callBack) {
		if (typeof opacity == 'undefined') {
			opacity = 100;
		}

		//console.log(opacity)
		var MoVe = {
			'element': obj,
			'type': "easeOut",
			'time': timm,
			'target': {
				'bottom': Tar,
				'opacity': opacity
			},
			"callBack": callBack
		};
		//console.log(MoVe.target.opacity)
		mTween(MoVe);
	}
}