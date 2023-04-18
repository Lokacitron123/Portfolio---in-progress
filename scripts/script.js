// Crazy letter swapping
document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {

        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if (index < iterations) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)] 
        }).join("");
       
        // Sluta efter 13 loops
        if(iterations >= 13) clearInterval(interval);
        
        iterations += 1;
        }, 50);
    }


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"





// Mouse effect
const blob = document.documentElement;

blob.addEventListener("mousemove", e => {
    blob.style.setProperty('--mouse-x', e.clientX + "px");
    blob.style.setProperty('--mouse-y', window.scrollY + e.clientY + "px");
});


// animating on scroll

// const mySkillsList = document.getElementById("my-skills-list");

// const checker = new IntersectionObserver(data => {
//     data.forEach(data => {
//         if (data.isIntersecting) {
//             const bars = mySkillsList.querySelectorAll(".animation");
//             bars.forEach(bar => {
//                 bar.style.animation = 'load 3s 0s';
                
//             });
//         } else {
//             const bars = section.querySelectorAll('.animation');
//             bars.forEach(bar => {
//                 bar.style.animation = '';
//             })
//         }
//     })
// })

// checker.observe(mySkillsList);


    window.addEventListener('scroll', function() {
        var section = document.getElementById('my-skills-list');
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var windowScroll = window.pageYOffset || document.documentElement.scrollTop;
        var windowBottomScroll = windowScroll + window.innerHeight;

        // Check if the section is in the viewport
        if (windowBottomScroll >= sectionTop && windowScroll <= (sectionTop + sectionHeight)) {
            // Add the desired class to trigger the animation
            var bars = document.querySelectorAll('.bar');
            for (var i = 0; i < bars.length; i++) {
                bars[i].classList.add('animation');
            }
        }
    });
