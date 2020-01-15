// Your code goes here
const myNav = document.querySelector(".nav-container");

myNav.addEventListener('mouseleave', () => {
    myNav.style.backgroundColor = "teal";
});

const heading = document.querySelector('h1')

heading.addEventListener('mouseover', () => {

    heading.style.fontSize = '7rem'
})

document.querySelectorAll('.nav-link').forEach(element => {

    element.addEventListener('mouseenter', () => {
        element.style.transform = 'rotateY(-360deg)'
        element.style.transitionDuration = '1000ms'
        element.style.color = 'orange'
    })
});

const topImg = document.querySelector('img')

window.addEventListener('resize', () => {
    topImg.src = 'https://images.unsplash.com/photo-1544448045-ef21e76c8221?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'

})

document.querySelectorAll('p').forEach(text => {
    console.log(text)
    text.addEventListener('click', (event) => {
        alert('You click on some text')
    })
})


window.addEventListener('load', (event) => {
    alert('Page is fully loaded')

})

let theWheel = document.querySelector("body");
theWheel.addEventListener("wheel", () => {
    theWheel.style.backgroundColor = "olive";
});

// document.querySelectorAll('.destination').forEach(item => {
//     console.log(destination)
//     item.addEventListener('doublcick, () => {
//         item.style.backgroundColor = 'tomato'
//     })
// });
const mouseFocus = document.querySelector('.footer')

mouseFocus.addEventListener('mousemove', () => {

    mouseFocus.style.backgroundColor = "grey"

}) 
