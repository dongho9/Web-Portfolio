$(document).ready(function(){
    var prevScrollTop = 0;
    // 이전 스크롤 위치를 저장하는 변수
    $(window).on("scroll", function(){
        var nowScrollTop = $(window).scrollTop();
        // 현재 스크롤 위치를 가져옵니다.

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
        // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트합니다.
    });
});

// 기본 브라우저 동작을 막기
$(document).on('click', 'a[href="#"]',function(e) {
    e.preventDefault();
    }
)

$(document).ready(function(){
    $('.gnbtoggle').click(function(){
        $(this).toggleClass('close');
        $('html, body').toggleClass('no-scroll');
        $('.gnbwrap').toggleClass('gnbtop');
        $('section').toggleClass('blur');
    })
})

$(document).ready(function(){
    $('.gnb li a').click(function(e) {
        e.preventDefault();
        $('.gnbtoggle').removeClass('close');
        $('html, body').removeClass('no-scroll');
        $('.gnbwrap').removeClass('gnbtop');
        $('section').removeClass('blur');
        // 클릭된 메뉴 항목의 인덱스를 가져옵니다.
        var index = $('.gnb li a').index(this);
        // console.log(index);

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
$(document).ready(function(){
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

// .con03 시작할 때 타이틀 화면밖에서 안으로 들어오기 
$(document).ready(function(){
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
    
$(document).ready(function(){
    let activeImage;
    let setX, setY;
    // activeImage는 현재 활성화된 이미지를 저장하고, setX와 setY는 이미지의 위치를 설정하는 함수입니다.

    // 요소 선택 및 이벤트 처리
    let elements = document.querySelectorAll('.con03 ul li a');
    
    elements.forEach((elem) => {
        let image = elem.querySelector('.fadeImg');
    // .con03 ul li a의 각 앵커 태그에 대해 fadeImg 클래스를 가진 이미지를 선택합니다.

        // 마우스 이동에 따른 이미지 위치 조정
        let align = e => {
            setX(e.clientX); //마우스 커서의 X 좌표입니다.
            setY(e.clientY); //마우스 커서의 Y 좌표입니다.
        };

        // 마우스 이동 이벤트 시작 및 중지
        let startPoint = () => document.addEventListener('mousemove', align);
        let stopPoint = () => document.removeEventListener('mousemove', align);

        // 페이드 애니메이션 
        let fade = gsap.to(image, { autoAlpha: 0.8, ease: 'none', paused: true });
        // 이미지의 불투명도를 0.8로 설정하고 애니메이션을 일시 중지 상태로 만듭니다.

        // mouseenter 이벤트가 발생하면 페이드 애니메이션을 재생하고, 마우스 이동 이벤트를 시작합니다.
        elem.addEventListener('mouseenter', (e) => {
            fade.play();
            // play 메서드로 gsap 애니메이션 실행
            startPoint();

            // activeImage가 존재하면 현재 이미지의 위치를 activeImage의 위치로 설정합니다.
            if (activeImage) {
                gsap.set(image, {
                    x: gsap.getProperty(activeImage, "x"),
                    y: gsap.getProperty(activeImage, "y")
                });
            }
            // gsap.set 메서드는 image의 x와 y 속성을 activeImage의 현재 위치로 설정합니다.
            
            activeImage = image;
            // activeImage를 현재 이미지로 설정하고
            
            // gsap.quickTo를 사용하여 빠르게 X, Y 위치를 업데이트할 수 있도록 합니다.
            setX = gsap.quickTo(image, "x", { duration: 0.5, ease: Elastic});
            setY = gsap.quickTo(image, "y", { duration: 0.5, ease: Elastic});

            align(e);
        });

        // mouseleave 이벤트가 발생하면 페이드 애니메이션을 반대로 재생하고, 마우스 이동 이벤트를 중지합니다.
        elem.addEventListener('mouseleave', () => {
            fade.reverse(); //페이드 애니메이션을 반대로 실행
            stopPoint();
        });
    });
});
