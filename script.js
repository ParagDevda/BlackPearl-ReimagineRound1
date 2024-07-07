function loader() {
    document.addEventListener("DOMContentLoaded", function () {
      const counterElement = document.getElementById("counter");
      const progress = document.querySelector("#progress");
      const duration = 100; // Duration in ms for the animation
      let currentNumber = 0;
  
      function updateCounter() {
        currentNumber += Math.floor(Math.random() * 5);
        if (currentNumber >= 100) {
          currentNumber = 100;
        }
        progress.style.height = `${currentNumber}%`;
        const numberStr = currentNumber.toString().padStart(3, "0");
        const digits = counterElement.querySelectorAll(".digit span");
  
        digits.forEach((digit, index) => {
          const newNumber = numberStr[index];
          const oldNumber = digit.innerText;
  
          if (newNumber !== oldNumber) {
            const newSpan = document.createElement("span");
            newSpan.innerText = newNumber;
            newSpan.style.top = "-100%";
  
            digit.parentElement.appendChild(newSpan);
  
            setTimeout(() => {
              digit.style.top = "400%";
              newSpan.style.top = "0";
            }, 10);
  
            setTimeout(() => {
              digit.remove();
            }, duration);
  
            if (document.getElementById("first-digit").innerText === "0") {
              document.getElementById("first-digit").style.color = "transparent";
            } else {
              setTimeout(() => {
                document.getElementById("first-digit").style.color = "white";
              }, 100);
            }
          }
        });
  
        if (currentNumber < 100) {
          setTimeout(updateCounter, duration);
        } else {
          setTimeout(() => {
            gsap.to("#loader", {
              duration: 1,
              opacity: 0,
              onComplete: () => {
                document.getElementById("loader").style.display = "none";
              },
            });
          }, 1800);
        }
      }
  
      updateCounter();
    });
  }
  
  function progressBar() {
    window.addEventListener("scroll", function () {
      const progressBar = document.getElementById("progress-bar");
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }
  
  function navAnimation() {
    let anchor = document.querySelectorAll("#nav a");
    anchor.forEach((ele) => {
      let clutter = "";
      ele.textContent.split("").forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      ele.innerHTML = clutter;
    });
  
    anchor.forEach((ele) => {
      let spans = ele.querySelectorAll(".part1 span");
      let spans2 = ele.querySelectorAll(".part2 span")
      // let tl= gsap.timeline();
      ele.addEventListener("mouseenter", () => {
        gsap.to(spans, {
          y: -22,
          opacity: 1,
          stagger: 0.05,
          duration: 0.01,
          ease: "power2.out",
        });
        gsap.to(spans2, {
          y: -20,
          opacity: 1,
          stagger: 0.05,
          duration: 0.01,
          ease: "power2.out",
        });
      });
  
      ele.addEventListener("mouseleave", () => {
        gsap.to(spans, {
          y: 0,
          opacity: 1,
          // stagger: 0.05,
          duration: 0.0000000000000000000000000000000000000000000000000000001,
          // ease: "power2.out",
        });
        gsap.to(spans2, {
          y: 0,
          opacity: 1,
          // stagger: 0.05,
          duration: -0.000000000000000000001,
          // ease: "power2.out",
        });
      });
    });
  }
  
  function swiperjs() {
    document.addEventListener("DOMContentLoaded", () => {
      const sliderTrack = document.querySelector(".slider-track");
      const slides = document.querySelectorAll(".slide");
      const prevButton = document.getElementById("prev");
      const nextButton = document.getElementById("next");
      const totalSlides = slides.length;
      const realSlideCount = totalSlides - 2; // exclude the cloned slides
      let currentIndex = 1; // Start at the real first slide
  
      function updateSlider() {
        sliderTrack.style.transition = "transform 0.5s ease";
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
  
      function handleTransitionEnd() {
        if (currentIndex === 0) {
          sliderTrack.style.transition = "none";
          currentIndex = realSlideCount;
          sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else if (currentIndex === totalSlides - 1) {
          sliderTrack.style.transition = "none";
          currentIndex = 1;
          sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      }
  
      sliderTrack.addEventListener("transitionend", handleTransitionEnd);
  
      nextButton.addEventListener("click", () => {
        currentIndex++;
        updateSlider();
      });
  
      prevButton.addEventListener("click", () => {
        currentIndex--;
        updateSlider();
      });
  
      updateSlider();
    });
  }
  
  function page2and3Anime() {
    function page2(){
      gsap.to("#page2 .page2-center-right-img", {
        transform: "translateX(-114.7%) scale(3.3)",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          start: "50% 50%",
          end: "160% 50%",
          scrub: 1,
          pin: true,
        },
      });
      gsap.to("#page2 .page2-img2", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.2% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
      gsap.to("#page2 .page2-img3", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.3% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
    }
    function page2animation600(){
      
      gsap.to("#page2 .page2-center-right-img", {
        transform: "translateY(-76%) scale(3.3)",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          start: "70% 70%",
          end: "160% 70%",
          scrub: 1,
          pin: true,
        },
      });
      gsap.to("#page2 .page2-img2", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.2% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
      gsap.to("#page2 .page2-img3", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.3% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
    }
    let screenWidth = window.innerWidth;
    if (screenWidth > 600) {
      page2();
      page3();
      sheryAni();
      console.log("hi");
    }else{
      console.log("hello");
      page2animation600();
      page3anime600();
    }
    function page3(){
      gsap.to("#page3 .page3-center-left-img", {
        transform: "translateX(114.7%) scale(3.3)",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          // markers: true,
          start: "50% 50%",
          end: "160% 50%",
          scrub: 1,
          pin: true,
        },
      });
      gsap.to("#page3 .page3-img2", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.2% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
      gsap.to("#page3 .page3-img3", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.3% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
    }
    function page3anime600(){
      gsap.to("#page3 .page3-center-left-img", {
        transform: "translateY(-99%) scale(3.3)",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          // markers: true,
          start: "50% 50%",
          end: "160% 50%",
          scrub: 1,
          pin: true,
        },
      });
      gsap.to("#page3 .page3-img2", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.2% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
      gsap.to("#page3 .page3-img3", {
        y: "-150%",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          // markers: true,
          pin: true,
          start: "50.3% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
    }
  }
  
  function page4Anime() {
    gsap.to("body", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "70% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });
  
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page4",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        // markers: true,
        scrub: 1,
      },
    });
    tl7.to("#demo", {
      bottom: "7%",
    });
    tl7.to(
      ".our-work-txt-div",
      {
        height: "60vh",
      },
      "height"
    );
    tl7.to(
      ".our-work-txt",
      {
        height: "60vh",
      },
      "height"
    );
    tl7.to(
      "#our",
      {
        left: "5%",
      },
      "height"
    );
    tl7.to(
      "#work",
      {
        right: "0%",
      },
      "height"
    );
    tl7.to(".scroll-img", {
      marginTop: "-300%",
    });
  }
  
  function page5Anime() {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page5",
        start: "50% 50%",
        end: "250% 50%",
        scrub: true,
        // markers:true,
        pin: true,
      },
    });
  
    tl.to(
      ".rotate-div",
      {
        rotate: -15,
        scale: 0.8,
      },
      "a"
    );
    tl.to(
      "#row-div-2",
      {
        marginTop: "5%",
      },
      "a"
    );
    tl.to(
      "#row-div-3",
      {
        marginTop: "-2%",
      },
      "a"
    );
    tl.to(
      "#row-div-4",
      {
        marginTop: "-8%",
      },
      "a"
    );
    tl.to(
      ".overlay-text",
      {
        opacity: "1",
        delay: 0.2,
      },
      "a"
    );
    tl.to(
      ".overlay-div",
      {
        backgroundColor: "#000000b9",
      },
      "a"
    );
    tl.to(
      ".scrolling",
      {
        width: "100%",
      },
      "a"
    );
  
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "0% 70%",
        end: "50% 50%",
        scrub: true,
        // markers:true,
      },
    });
  
    tl2.to(".rounded-div-wrapper", {
      height: 0,
      marginTop: 0,
    });
  }
  
  var scene = document.getElementById('scene');
//   var parallax = new Parallax(scene);
  
  function sheryAni(){
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.makeMagnet("#nav a", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
  
  
  
  loader();
  
  progressBar();
  
  // navAnimation();
  
  swiperjs();
  
  page2and3Anime();
  
  page4Anime();
  
  page5Anime();