var userInput = document.querySelector(".txt_input")
var translateInput = document.querySelector(".translate_txt")
var displayOutput = document.querySelector(".txt_output")

var url = "https://api.funtranslations.com/translate/ferb-latin.json"

function generateUrl(text) {
    return url+"?text="+text
}

function errorHandler(error) {
    alert("Somethimg went wrong. Try after some time.")
}

function clickResponse(text) {

    fetch(generateUrl(userInput.value)).then(response=>response.json()).then(json=>{
        var translatedText = json.contents.translated
        displayOutput.innerText = translatedText
    })
}

translateInput.addEventListener("click",clickResponse)
