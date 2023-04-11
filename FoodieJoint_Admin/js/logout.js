let logoutBtn = document.getElementById('logout')


function logout() {
    sessionStorage.removeItem('activeUser')
   window.location.replace("../login.html")
}

logoutBtn.addEventListener('click', logout)