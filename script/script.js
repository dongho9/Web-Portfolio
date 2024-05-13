// 01.header영역 스크롤이벤트
$(function(){
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        var nowscrollTop = $(window).scrollTop();

        if(nowscrollTop > prevScrollTop){
            $('.innerHeader').addClass('active');
        }else{
            $('.innerHeader').removeClass('active');
        }
        prevScrollTop = nowscrollTop;
    })
})
$(document).ready(function(){
    $('.gnbtoggle').click(function(){
        $('.gnb').slideToggle();
        $('body').toggleClass('no-scroll');
    })
})
$(document).ready(function(){
    $('.animate').scrolla({
        mobile:true, //모바일 버전시 활성화
        once:false //스크롤시 애니메이션 반복 실행
    })
})

gsap.registerPlugin(ScrollTrigger);
// .con02 시작할 때 타이틀 화면밖에서 안으로 들어오기 
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.con02',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.a', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('.b', {x:'100%'},{x:'0%', ease:'none', duration:5},0)
})

$(function(){
    const container = document.querySelector(".container");
    document.body.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;
    
        gsap.to(container,{
            y: y
        })
        gsap.to('.mask',{
            y: -y
        })
    })

})


$(function(){
    $('.con03 .list').simplyScroll({
        speed:4,
        pauseonHover:false,
        pauseonTouch:false,
    })
})
