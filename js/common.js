/* 스크롤 */
$(window).scroll(function (e) {
  /* 부드럽게 위로 이 동*/
  if ($(this).scrollTop() > $(window).height() / 2) {
    $(".btn-top-go").addClass("active");
  } else {
    $(".btn-top-go").removeClass("active");
  }
});

$(function () {
  $("body").css({ opacity: "1" }, 250);

  $("#section1").addClass("active");

  /* 부드럽게 상단으로 이동 */
  $(".btn-top-go").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });
});

/* section1 */
gsap.from(".photo-candidate", {
  x: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power4.inOut",
});

gsap.from(".photo-candidate dl", {
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power1.inOut",
});

/* section2 */
const section2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    start: "0 75%",
    end: "100px 0",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section2.to(".promise-wrapper dl dt", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper ol li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper ol li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper ol li:nth-of-type(3)", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper ol li:nth-of-type(4)", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper ol li:nth-of-type(5)", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});
section2.to(".promise-wrapper ol li:nth-of-type(6)", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});

section2.to(".promise-wrapper ul", {
  top: "0",
  opacity: "1",
  duration: 0.5,
  ease: Power1.easeOut,
});

/* section3 */
const section3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "0 70%",
    end: "400px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section3.to("#section3 img", {
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section3.to("#section3 .title-number", {
  left: "50px",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section3.to("#section3 dl dt>strong", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section3.to("#section3 dl dt>span", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section3.to("#section3 dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section3.to("#section3 .contents-wrapper ul>li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section3.to("#section3 .contents-wrapper ul>li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section3.to("#section3 .contents-wrapper ul>li:nth-of-type(3)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section4 */
const section4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    start: "0 70%",
    end: "400px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section4.to("#section4 img", {
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section4.to("#section4 .title-number", {
  right: "50px",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section4.to("#section4 dl dt>strong", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section4.to("#section4 dl dt>span", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section4.to("#section4 dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section4.to("#section4 .contents-wrapper ul>li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section4.to("#section4 .contents-wrapper ul>li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section4.to("#section4 .contents-wrapper ul>li:nth-of-type(3)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section4.to("#section4 .contents-wrapper ul>li:nth-of-type(4)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section5 */
const section5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5",
    start: "0 70%",
    end: "400px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section5.to("#section5 img", {
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section5.to("#section5 .title-number", {
  left: "50px",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section5.to("#section5 dl dt>strong", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section5.to("#section5 dl dt>span", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section5.to("#section5 dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section5.to("#section5 .contents-wrapper ul>li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section5.to("#section5 .contents-wrapper ul>li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section6 */
const section6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section6",
    start: "0 70%",
    end: "400px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section6.to("#section6 img", {
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section6.to("#section6 .title-number", {
  right: "50px",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section6.to("#section6 dl dt>strong", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section6.to("#section6 dl dt>span", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section6.to("#section6 dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section6.to("#section6 .contents-wrapper ul>li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section6.to("#section6 .contents-wrapper ul>li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section7 */
const section7 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section7",
    start: "0 70%",
    end: "400px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section7.to("#section7 img", {
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section7.to("#section7 .title-number", {
  left: "50px",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section7.to("#section7 dl dt>strong", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section7.to("#section7 dl dt>span", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section7.to("#section7 dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section7.to("#section7 .contents-wrapper ul>li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section7.to("#section7 .contents-wrapper ul>li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section7.to("#section7 .contents-wrapper ul>li:nth-of-type(3)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section8 */
const section8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section8",
    start: "0 70%",
    end: "400px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section8.to("#section8 img", {
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section8.to("#section8 .title-number", {
  right: "50px",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section8.to("#section8 dl dt>strong", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section8.to("#section8 dl dt>span", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section8.to("#section8 dl dd", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section8.to("#section8 .contents-wrapper ul>li:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section8.to("#section8 .contents-wrapper ul>li:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section9 */
const section9 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section9",
    start: "0 70%",
    end: "300px 60%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section9.to(".gretting-slogan > div", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section9.to(".gretting-slogan > div .top", {
  opacity: "1",
  duration: 0.1,
  ease: Power3.easeOut,
});
section9.to(".gretting-slogan > div .bottom", {
  opacity: "1",
  duration: 0.1,
  ease: Power3.easeOut,
});

section9.to(".gretting-slogan > dl", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

const section9_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gretting-area",
    start: "0 70%",
    end: "300px 50%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section9_2.to(".gretting-area > div:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section9_2.to(".gretting-area > div:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section9_2.to(".gretting-area > div:nth-of-type(3)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});
section9_2.to(".gretting-area > div:nth-of-type(4)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section9_2.to(".gretting-area > div:nth-of-type(5)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section9_2.to(".gretting-area > div:nth-of-type(6)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section9_2.to(".gretting-area > div:nth-of-type(7)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section10 */
const section10 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section10",
    start: "0 70%",
    end: "300px 50%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});

section10.to(".profile-wrapper h2 .bg", {
  width: "0",
  duration: 0.25,
  ease: Power3.easeOut,
});

section10.to(".profile-area:nth-of-type(1)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

section10.to(".profile-area:nth-of-type(2)", {
  top: "0",
  opacity: "1",
  duration: 0.25,
  ease: Power3.easeOut,
});

/* section11 */
const section11 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section11",
    start: "0 90%",
    end: "50px 80%",
    scrub: 1,
    pin: false,
    //        once: true,
    markers: false,
  },
});
section11.to("#section11 > img", {
  top: "0",
  duration: 0.5,
  ease: Power3.easeOut,
});

section11.to("#section11 > p", {
  opacity: "1",
  duration: 0.5,
  ease: Power3.easeOut,
});
