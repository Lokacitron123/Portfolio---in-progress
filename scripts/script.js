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
       
        // Sluta efter 14 loops
        if(iterations >= 14) clearInterval(interval);
        
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

// adding sticky to header
// adding sticky to header
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// // var header = document.getElementById("myHeader");

// // // Get the offset position of the navbar
// // var sticky = header.offsetTop;

// // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// // function myFunction() {
// //   if (window.pageYOffset > sticky) {
// //     header.classList.add("sticky");
// //   } else {
// //     header.classList.remove("sticky");
// //   }
// // }