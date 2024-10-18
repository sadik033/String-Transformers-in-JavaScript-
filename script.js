const userInput = document.querySelector('input')
const lowerCase = document.querySelector('#lowercase span')
const upperCase = document.querySelector('#uppercase span')
const camelcase = document.querySelector('#camelcase span')
const pascalcase = document.querySelector('#pascalcase span')
const snakecase = document.querySelector('#snakecase span')
const kebabcase = document.querySelector('#kebabcase span')
const Trim = document.querySelector('#trim span')

function capitalizeString (str){
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1, str.lenght)
}

function camelCase(string){
    const toLower = string.toLowerCase()
    const wordArray = toLower.split(' ')
    const finalArray = wordArray.map((word, i) =>{
        if(i===0) return word
        return capitalizeString(word)
    })
   return finalArray.join('')
}
function pascalCase(string){
    const toLower = string.toLowerCase()
    const wordArray = toLower.split(' ')
    const finalArray = wordArray.map((word, i) =>{
        return capitalizeString(word)
    })
   return finalArray.join('')
}
function snakeCase(string){
    return string.replaceAll(' ', '_')
}
function kebabCase(string){
    return string.replaceAll(' ', '-')
}
function TrimCase(string){
    return string.replaceAll(' ', '')
}

function updateDisplayText(){
    lowerCase.innerText = userInput.value.trim().toLowerCase()
    upperCase.innerText = userInput.value.trim().toUpperCase()
    camelcase.innerText = camelCase(userInput.value.trim())
    pascalcase.innerText = pascalCase(userInput.value.trim())
    snakecase.innerText = snakeCase(userInput.value.trim())
    kebabcase.innerText = kebabCase(userInput.value.trim())
    Trim.innerText = TrimCase(userInput.value.trim())
}

updateDisplayText()

userInput.addEventListener('input',() =>{
    updateDisplayText()
})