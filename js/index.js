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

//Code for stopping propagation here
document.querySelectorAll('p').forEach(text => {
    text.addEventListener('click', (event) => {
        text.style.backgroundColor = 'purple'
        event.stopPropagation()
    })

})// Code fof stopping proppagation ends


heading2 = document.querySelector('.intro h2')

heading2.addEventListener('click', () => {
    heading2.style.fontSize = '4rem';
    console.log('me second')
})

const body = document.querySelector('body')

body.addEventListener('click', () => {
    body.style.color = 'peru'

})

window.addEventListener('load', (event) => {
    alert('Page is fully loaded')


})



let theWheel = document.querySelector("body");
theWheel.addEventListener("wheel", () => {
    theWheel.style.backgroundColor = "olive";
});

document.querySelectorAll('.btn').forEach(item => {

    item.addEventListener('dblclick', () => {
        item.style.backgroundColor = 'tomato'
        item.textContent = ' Fun Bus '


    })
});
const mouseMove = document.querySelector('.footer')

mouseMove.addEventListener('mousemove', () => {

    mouseMove.style.backgroundColor = "grey"

})

// Code for preventDefault here
const stopLink = document.querySelector(" a:nth-of-type(2)");
stopLink.addEventListener("click", (event) => {
    event.preventDefault();

}) // Code for PreventDefault ends