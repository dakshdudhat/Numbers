var txtInput = document.querySelector("#txt-input")
var button = document.querySelector("#btn-translate")
var txtOutput = document.querySelector("#txt-output")

var server = "https://api.funtranslations.com/translate/numbers.json"

function getUrl(input) {
    return server + "?" + "text=" + input

}

button.addEventListener("click", translate);


function translate() {
    input = txtInput.value;

    fetch(getUrl(input))
        .then(response => response.json())
        .then(json => {
            var translateText = json.contents.translated;
            txtOutput.innerText = translateText;

        })

}