$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('.btn_box li a').each(function(index){
		$(this).click(function(){
			$('.btn_box li a').removeClass('on1').eq(index).addClass('on1');
			$('.btn_box li').css('border-bottom','2px solid #fff').eq(index).css('border-bottom','2px solid #ce1a38')
		})
	})
	$('.m5_btn li').click(function(){
		$('.m5_btn li').removeClass('active').eq($(this).index()).addClass('active');
		$('.m5_show').hide().eq($(this).index()).show()
	})
})