const bg = document.getElementById('header')

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset)
  bg.style.backgroundSize = 160 - window.pageYOffset / 12 + '%'
  bg.style.opacity = 1 - window.pageYOffset / 700
})
