$(function(){
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        var nowScrollY = window.scrollY;
        console.log(nowScrollY);
        if(nowScrollY > prevScrollTop){
            $('.innerHeader').addClass('active');
        } else {
            $('.innerHeader').removeClass('active');
        }
        if(nowScrollY === 0){
            $('.innerHeader').removeClass('active');
        }
        prevScrollTop = nowScrollY;
    })
})
$(document).on('click', 'a[href="#"]',function(e) {e.preventDefault
    ();})
    
 $(document).ready(function(){
        $('.m_home').click(function(){
            $('.gnbwrap').removeClass('gnbtop');
            $('.gnbtoggle').removeClass('close');
            $('section').removeClass('blur');
            $('html, body').animate({
                scrollTop: 0 // 이동할 스크롤 높이 (예: 790px)
            }, 500); // 스크롤 애니메이션 시간 (300밀리초)
        });
    });
    $(document).ready(function(){
        $('.m_work').click(function(){
            $('.gnbwrap').removeClass('gnbtop');
            $('.gnbtoggle').removeClass('close');
            $('section').removeClass('blur');
            $('html, body').animate({
                scrollTop: 760 // 이동할 스크롤 높이 (예: 790px)
            }, 500); // 스크롤 애니메이션 시간 (300밀리초)
        });
    });
    $(document).ready(function(){
        $('.m_about').click(function(){
            $('.gnbwrap').removeClass('gnbtop');
            $('.gnbtoggle').removeClass('close');
            $('section').removeClass('blur');
            if (window.innerWidth <= 768) {
                // 모바일 버전에서는 다른 높이로 스크롤
                $('html, body').animate({
                    scrollTop: 6400 // 모바일에서의 스크롤 높이
                }, 300);
            } else {
                // 데스크탑 버전에서는 기본 높이로 스크롤
                $('html, body').animate({
                    scrollTop: 4600 // 이동할 스크롤 높이 (예: 790px)
                }, 300); // 스크롤 애니메이션 시간 (300밀리초)
            }
        });
    });
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
