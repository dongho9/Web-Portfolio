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

$(document).ready(function() {
    $('.gnb li a').click(function(e) {
        e.preventDefault();
        $('.gnbtoggle').removeClass('close');
        $('html, body').removeClass('no-scroll');
        $('.gnbwrap').removeClass('gnbtop');
        $('section').removeClass('blur');
        // 클릭된 메뉴 항목의 인덱스를 가져옵니다.
        var index = $('.gnb li a').index(this);
        console.log(index);

        // 해당 인덱스의 섹션을 찾습니다.
        var target = $('main section').eq(index);
        
        // 해당 섹션으로 부드럽게 스크롤합니다.
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
    });
});
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

// .con02 시작할 때 타이틀 화면밖에서 안으로 들어오기 
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.con03',
            start:'20% 100%',
            end:'0% 20%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.wrap', {background:'#F6F3EA'},{background:'#1c1515', ease:'none', duration:3},0)
    .fromTo(
        '.innerHeader',
        { backgroundColor: 'rgba(246, 243, 234, 0.8)' }, // 시작 색상
        { backgroundColor: 'rgba(28, 21, 21, 0.8)', ease: 'none', duration: 3},0 // 끝 색상, 애니메이션 설정
      )
      .fromTo('.a', {x:'100%'},{x:'0%', ease:'none', duration:5},0)
      .fromTo('.b', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
})
    
$(function() {
    let activeImage;
    let setX, setY;

    gsap.utils.toArray('.con03 ul li a').forEach((elem) => {
        let image = elem.querySelector('.fadeImg');

        let align = e => {
            setX(e.clientX);
            setY(e.clientY);
        };

        let startPoint = () => document.addEventListener('mousemove', align);
        let stopPoint = () => document.removeEventListener('mousemove', align);

        let fade = gsap.to(image, { autoAlpha: 0.8, ease: 'none', paused: true });

        elem.addEventListener('mouseenter', (e) => {
            fade.play();
            startPoint();

            if (activeImage) {
                gsap.set(image, {
                    x: gsap.getProperty(activeImage, "x"),
                    y: gsap.getProperty(activeImage, "y")
                });
            }
            activeImage = image;
            setX = gsap.quickTo(image, "x", { duration: 0.5, ease: Elastic});
            setY = gsap.quickTo(image, "y", { duration: 0.5, ease: Elastic});

            align(e);
        });

        elem.addEventListener('mouseleave', () => {
            fade.reverse();
            stopPoint();
        });
    });
});
