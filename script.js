function animateProgressBar(elementId, targetPercentage) {
  let progressBar = document.querySelector(elementId);
  let progressText = document.querySelector(elementId + "-text");
  let width = 0;

  let interval = setInterval(() => {
      if (width >= targetPercentage) {
          clearInterval(interval);
      } else {
          width++;
          progressBar.style.width = width + "%";
          progressText.textContent = width + "%";
      }
  },25); // Adjust speed of animation
}
// Start animation when page loads
window.onload = () => {
animateProgressBar("#html-progress",90);
animateProgressBar("#css-progress", 75);
animateProgressBar("#js-progress", 60);
animateProgressBar("#c-progress", 80);
};

const typed = new Typed('#element', {
    strings:['Web Developer.', 'Freelancer .','Content Creater .','Student .'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,

  });

  var myanime = gsap.timeline();

  myanime.from(".navbar h1",{
   x:-100,
   opacity:0,
   duration:1
  })
  // myanime.from(".nav-list ",{
  //  y:100,
  //  opacity:0,
  //  duration:1
  // })
  myanime.from(".left-section ,.left-icon, .left-btn",{
    x:-70,
    opacity:0,

  })
  myanime.from(".right-section",{
    y:30,
    opacity:0,
  duration:1

  })
  gsap.from(".about-page .about, .about-img ",{
    x:-20,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.5,
    scrollTrigger:{
      trigger: ".about-page",
      scroller:"body",
      start:"top 55%",
      end:"top 20%",
      scrub:3
    }
  })
  gsap.from(".container, .skill , .skills-img img ",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.3,
    scrollTrigger:{
      trigger: ".skill-page",
      scroller:"body",
      start:"top 55%",
      end:"top 20%",
      scrub:3
      
    }
  })
  gsap.from(".contact-left ",{
    x:-100,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.3,
    scrollTrigger:{
      trigger: ".contact-page",
      scroller:"body",
      start:"top 55%",
      end:"top 20%",
      scrub:3
      
    }
  })
  gsap.from(".contact-right ",{
    x:30,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.3,
    scrollTrigger:{
      trigger: ".contact-page",
      scroller:"body",
      start:"top 55%",
      end:"top 20%",
      scrub:3
      
    }
  })

  function sendmail(){
    let param = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value
    }
    emailjs.send("service_d15vino","template_dasllcf", param).then(function(res){
      alert("success your message has been send ✔🚀 " + res.status);
    })
  }

  const nav_btn = document.querySelector(".navbar i");
  let flag = true;
 nav_btn.addEventListener("click", ()=>{

if(flag){
  nav_btn.className = "ri-close-large-line";
  flag = false;
}else{
  nav_btn.className = "ri-menu-line";
  flag = true;
  
}
  let navbar = document.querySelector(".nav-list")
  navbar.classList.toggle("navon")
  
  
 })