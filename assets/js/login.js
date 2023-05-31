const inputs = document.querySelectorAll('input')
const errorMessage = document.querySelector('.erro')
const form = document.querySelector('form')
const passwordMessage = document.querySelector('#senhaErro')
const date = new Date().toLocaleDateString()
document.querySelector('#data').innerText = date

form.addEventListener("submit", (e)=>{
    let allFieldsValid = true;
    e.preventDefault()
    inputs.forEach(input =>{
        input.style.border = "1px solid black"
        errorMessage.innerText = ""
        passwordMessage.innerText = ""
        if(input.value === ""){
            input.style.border = "1px solid red"
            errorMessage.innerText = "Preencha os campos corretamente"
            allFieldsValid = false
        }
        if(input.type === "password"){
            validadePass(input.value)
            if(validadePass(input.value) === false){
                allFieldsValid = false  
            }
        }
    })  
    if(allFieldsValid){
        alert("Dados enviados")
        form.reset()
    }
})

const validadePass = pass =>{
    if(pass.length < 5){
        passwordMessage.innerText = "Senha curta"
        return false
    }
}

