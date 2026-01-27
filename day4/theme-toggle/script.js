const toggleBtn = document.getElementById('toggleBtn')
const body = document.body

// load saved theme
const isDark = localStorage.getItem('theme') === 'dark'
body.classList.toggle('dark', isDark)
toggleBtn.textContent = isDark ? 'Light' : 'Dark'

toggleBtn.addEventListener('click', () => {
  const darkMode = body.classList.toggle('dark')
  localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  toggleBtn.textContent = darkMode ? 'Light' : 'Dark'
})
