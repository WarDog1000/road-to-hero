const DARK_BUTTON = document.querySelector('#darkmode')

DARK_BUTTON.addEventListener('click', () => {

  document.documentElement.classList.toggle('dark')
 
} )