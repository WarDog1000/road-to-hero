const menuBtn = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
  const menuLinks = document.getElementById('mobile-links')
  menuLinks.classList.toggle('hidden')
})