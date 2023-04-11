let logoutBtn = document.getElementById('logout')


function logout() {
    sessionStorage.removeItem('activeUser')
   window.location.replace("../FoodieJoint_Client/login.html")
}

logoutBtn.addEventListener('click', logout)