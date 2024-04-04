const checkbox = document.getElementById('darkmode')

checkbox.addEventListener('click', checkMode)

function darkMode(){
    document.body.classList.add('dark-mode')
}

function lightMode(){
    document.body.classList.remove('dark-mode')
}

function checkMode() {
    if (checkbox.checked) {
        darkMode()
    }else {
        lightMode()
    }
}
