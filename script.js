document.querySelector('input[name = "text_user"]').addEventListener('keyup', () => {
    if(document.querySelector('input[name = "text_user"] + span') != null){
        document.querySelector('input[name = "text_user"] + span').remove()
    }
})

document.querySelector('input[name = "text_password"]').addEventListener('keyup', () => {
    if(document.querySelector('input[name = "text_password"] + span') != null){
        document.querySelector('input[name = "text_password"] + span').remove()
    }
})


document.form_login.addEventListener('submit', (event)=>{
    let user = event.target.text_user.value
    let password = event.target.text_password.value
    let submit = true

    document.querySelectorAll('.error')

    if(user === ""){
        submit = false

        let tmp = document.querySelector('input[name = "text_user"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Usuário é de preenchimento obrigatório</span>')
    }

    if(password === ""){
        submit = false

        let tmp = document.querySelector('input[name = "text_password"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Senha é de preenchimento obrigatório</span>')
    }

    if(!submit){
        event.preventDefault()
    }
})