const notifContainer = document.querySelector('.notifContainer')
const button = document.getElementById('button')

const notifications = [
  'Whatsapp ',
  'LinkedIn ',
  'Twitter ',
  'YouTube ',
  'Instagram ',
]

const colors = ['red', 'black', 'green', 'blue', 'gray', 'orange', 'purple']

button.addEventListener('click', () => createNotification())

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('notif')
  notif.classList.add(getRandomColor())

  notif.innerText = getRandomNotif()

  notifContainer.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomNotif() {
  return notifications[Math.floor(Math.random() * notifications.length)]
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}