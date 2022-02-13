document.getElementById("keypad").addEventListener("click", function(event){
    const number = event.target.innerText
    let displayInput = document.getElementById("display-input")
    if(number == "C"){
        displayInput.value = ""
    }
    else if(number == "<"){
        displayInput.value =  displayInput.value.slice(0, -1)
    }
    else if(number == "."){
        displayInput.value = displayInput.value + number
    }
    else if(number == "%"){
        // if(number == "+" || number == "-" || number == "*" || number == "/"){
        //     let result = eval(displayInput.value)
        //     displayInput.value = result / 100
        // }
        displayInput.value = displayInput.value / 100
    }
    else if(number == "="){
        displayInput.value = eval(displayInput.value)
    }
    else{
        displayInput.value = displayInput.value + number
    }
})
