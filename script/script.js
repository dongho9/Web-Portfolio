$(function(){
    var prevScrollTop = 0;
    $(window).on("scroll", function(){
        var nowScrollTop = $(window).scrollTop();
        // console.log(nowScrollTop);
        if(nowScrollTop > prevScrollTop){
            $('.innerHeader').addClass('active');
        } else {
            $('.innerHeader').removeClass('active');
        }
        if(nowScrollTop === 0){
            $('.innerHeader').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    });
});

$(document).on('click', 'a[href="#"]',function(e) {e.preventDefault
    ();})

$(document).ready(function(){
    $('.gnbtoggle').click(function(){
        $(this).toggleClass('close');
        $('html, body').toggleClass('no-scroll');
        $('.gnbwrap').toggleClass('gnbtop');
        $('section').toggleClass('blur');
    })
})
$(document).ready(function(){
    $('.animate').scrolla({
        mobile:true, //모바일 버전시 활성화
        once:true //스크롤시 애니메이션 반복 실행
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
