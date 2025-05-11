 // Menu functionality
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Cart functionality
        const cartButton = document.getElementById('cart-button');
        const cartOverlay = document.querySelector('.cart-overlay');
        const closeButton = document.querySelector('.close-button');
        
        cartButton.addEventListener('click', () => {
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            mobileMenu.classList.remove('active'); // Close menu if open
        });
        
        closeButton.addEventListener('click', () => {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Create duplicate scrolling text for seamless scrolling
        document.addEventListener('DOMContentLoaded', () => {
            const scrollingWrapper = document.querySelector('.scrolling-wrapper');
            const scrollingText = document.querySelector('.scrolling-text');
            
            // Clone the text element for continuous scrolling
            const clone = scrollingText.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            scrollingWrapper.appendChild(clone);
        });
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbarAnimation()

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadinganimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursor",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();
document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);

      const icons = [
        'fa-star', 'fa-heart', 'fa-bolt', 'fa-circle', 'fa-square',
        'fa-diamond', 'fa-triangle', 'fa-plus', 'fa-minus', 'fa-check',
        'fa-lightbulb', 'fa-sun', 'fa-moon', 'fa-cloud', 'fa-droplet',
        'fa-fire', 'fa-leaf', 'fa-feather', 'fa-gem', 'fa-snowflake',
        'fa-crown', 'fa-star-half', 'fa-circle-dot', 'fa-asterisk', 'fa-sparkles'
      ];

      const svgShapes = [ /* [Same SVG definitions you had] */ ];

      const words = document.querySelectorAll('.word');

      words.forEach(word => {
        const text = word.textContent;
        word.innerHTML = '';

        [...text].forEach((char, i) => {
          const charContainer = document.createElement('div');
          charContainer.className = 'char-container';
          charContainer.style.display = 'inline-flex';
          charContainer.style.opacity = '0';
          charContainer.style.transform = 'translateY(100%)';

          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.position = 'relative';

          const iconElement = document.createElement('i');
          iconElement.className = `fa-solid ${icons[Math.floor(Math.random() * icons.length)]} icon-behind`;
          iconElement.style.position = 'absolute';
          iconElement.style.opacity = '0.1';
          iconElement.style.fontSize = '0.5em';
          iconElement.style.top = '-0.5em';
          iconElement.style.left = '50%';
          iconElement.style.transform = 'translateX(-50%)';
          iconElement.style.color = 'currentColor';
          iconElement.style.zIndex = '-1';

          span.appendChild(iconElement);
          charContainer.appendChild(span);

          const animatedElement = document.createElement('div');
          animatedElement.className = 'animated-element';
          animatedElement.style.opacity = '0';
          
          
          charContainer.appendChild(animatedElement);
          word.appendChild(charContainer);
        });
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      words.forEach((word, wordIndex) => {
        const charContainers = word.querySelectorAll('.char-container');
        const svgElements = word.querySelectorAll('.animated-element');
        const icons = word.querySelectorAll('.icon-behind');

        tl.to(charContainers, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.03,
          delay: wordIndex * 0.05
        }, wordIndex * 0.1);

        tl.to(svgElements, {
          opacity: 1,
          duration: 0.5,
          stagger: 0.02,
          delay: 0.1
        }, wordIndex * 0.1 + 0.3);

        tl.to(svgElements, {
          y: -5,
          rotation: 10,
          duration: 1,
          stagger: 0.02,
          yoyo: true,
          repeat: -1
        }, wordIndex * 0.1 + 0.5);

        tl.to(icons, {
          opacity: 0.15,
          scale: 1.5,
          duration: 1,
          stagger: 0.03,
          delay: 0.2
        }, wordIndex * 0.1);
      });

      gsap.from('.mission-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5
      });

      gsap.from('.impact-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.8
      });

      gsap.from('.cta-button', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 2.1
      });

      if (window.innerWidth > 768) {
        gsap.to('.tagline-container', {
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: '-20%'
        });

        gsap.to('.mission-container', {
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: '20%'
        });
      }
    });


    //footer//
    document.addEventListener('DOMContentLoaded', () => {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate gradient backgrounds
      gsap.set('#gradient1', {
        x: '20%',
        y: '30%',
        opacity: 0
      });
      
      gsap.set('#gradient2', {
        x: '70%',
        y: '60%',
        opacity: 0
      });
      
      gsap.to('#gradient1', {
        opacity: 0.7,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top bottom',
          toggleActions: 'play none none reverse'
        }
      });
      
      gsap.to('#gradient2', {
        opacity: 0.4,
        duration: 1.5,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top bottom',
          toggleActions: 'play none none reverse'
        }
      });
      
      // Create a dynamic floating animation for the gradients
      gsap.to('#gradient1', {
        x: '25%',
        y: '25%',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      gsap.to('#gradient2', {
        x: '65%',
        y: '65%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      // Staggered entrance animations for content
      const footerElements = [
        '.contact-link',
        '.footer-heading',
        '.contact-info',
        '.footer-nav',
        '.logo-container',
        '.footer-bottom'
      ];
      
      gsap.fromTo(footerElements, 
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Logo animation
      const logoPath = document.querySelectorAll('.logo path');
      
      gsap.fromTo(logoPath, 
        {
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.logo',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });