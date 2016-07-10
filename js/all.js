$(function (){
	//head公共
	mttenL($('.nav_anlie_item')[0],700,'top',0,'bounceOut');
	//联系
	if($('.contact_box_text')[0]){
		mttenL($('.contact_box_bg')[0],800,'left',0,'bounceOut', function (){
			mttenL($('.contact_box_bg1')[0],600,'left',0,'bounceOut');
		});
		mttenL($('.contact_box_text')[0],800,'right',0,'bounceOut',function (){
			mttenL($('.zaixian')[0],600,'left',0,'bounceOut');
		});
	}
	//关于
	//console.log($('.about_content_left'))
	if($('.about_content_left')[0]){
		mttenL($('.about_content_left')[0],700,'left',0,'backOut',function (){
			mttenL($('.about_content_left_top')[0],500,'top',0,'easeOut');
			mttenL($('.about_content_left_down')[0],550,'top',100,'easeOut');
		});
		mttenL($('.about_content_right')[0],700,'right',0,'backOut',function (){
			mttenL($('.more_anlie')[0],900,'bottom',-100,'backOut');
		});
	};
	
	//新闻
	if($('.new_box')[0]){
		mttenL($('.new_box_left')[0],700,'left',0,'backOut');
		mttenL($('.new_one')[0],700,'top',0,'easeOut');
		mttenL($('.new_two')[0],700,'top',90,'easeOut',function (){
			mttenL($('.pages')[0],900,'opacity',100,'easeOut')
		});
	}
	
	//案列
	if($('.anliecontent_box')[0]){
		mttenL($('.anliecontent_left')[0],900,'left',0,'backOut');
		mttenL($('.anliecontent_center')[0],900,'right',343,'backOut',function (){
			mttenL($('.anliecontent_right')[0],900,'right',50,'backOut');
			mttenL($('.more_anlie')[0],900,'bottom',-100,'backOut');
		});
	}
	//服务
	if($('.serve_content')[0]){
		var width = $('.serve_content').find('li').eq(0).width();
		$('.serve_content').find('li').each(function (i,elem){
			$(elem).attr('index',i);
//			$(elem).find('img').eq(0).style.zIndex = 22;
			elem.style.left =$(elem).index()*width+'px';
			$(elem).mouseover(function (){
				$(this).find('img')[1].style.display = 'block';
				$(this).find('.down_box_left')[0].style.display = 'block';
				$(this).find('.down_box_right')[0].style.display = 'block'
				mttenL($(this).find('.down_box_left')[0],400,'top',80,'backOut');
				mttenL($(this).find('.down_box_right')[0],700,'top',90,'backOut');
			})
			$(elem).mouseout(function (){
				$(this).find('img')[1].style.display = 'none';
				$(this).find('.down_box_left')[0].style.display = 'none'
				$(this).find('.down_box_right')[0].style.display = 'none'
				mttenL($(this).find('.down_box_left')[0],300,'top',-1000,'backOut');
				mttenL($(this).find('.down_box_right')[0],300,'top',-1100,'backOut');
			});
		});
		
		var num =0;
		var timer = 0;
		setInterval(function(){
			mttenL($('.serve_content_ul').children()[num],800,'top',0,'backOut')
			num++;
			if(num>=4){
				clearInterval(timer)
				num =0;
				mttenL($('.more_anlie')[0],800,'bottom',-100,'easeOut');
			}
	},150)
	}	
});

function mttenL(obj,time,direction,Tar,type,callBack) {
		var MoVe = {
			'element': obj,
			'type': type,
			'time': time,
			'target': {
				[direction]: Tar
			},
			"callBack": callBack
		}
		mTween(MoVe);
	};