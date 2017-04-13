;(function(){
	//封装一个插件
	$.fn.CK=function(opt){
		var defaults={
			type:'click',
			left:150,
			top:150,
			width:300,
			height:300,
			isDarge:true,//是否可以拖动
			col:'red',
			abs:'你好',
			isconfine:false//是否限制边界
		}
		var set=$.extend({},defaults,opt) 
		var type=set.type,
			left=set.left,
			top=set.top,
			width=set.width,
			height=set.height,
			W=$(window).width();
			H=$(window).height();
		$(this).on(type,function(){
			var div=$('<div>'+set.abs+'</div>')
			div.width(width).height(height)
			div.css({'left':left,'top':top,'background':set.col})
			div.appendTo($(this).parent())
			if(set.isDarge){
				div.on('mousedown',function(e){
					var movl=e.pageX-div.offset().left
					var movet=e.pageY-div.offset().top
					$(document).on('mousemove',function(ee){
						var L=ee.pageX-movl;
						var T=ee.pageY-movet;
						if(set.isconfine){
							if(L<=0)L=0;
							if(T<=0)T=0;
							if(L>=W-width)L=W-width;
							if(T>=H-height)T=H-height;
						}
						div.css({'left':L,'top':T})
					})	
				})
				div.on('mouseup',function(){
					$(document).off('mousemove')
				})
			}
		})
		
	
			
	
	}

})(jQuery)