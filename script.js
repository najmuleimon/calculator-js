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
        // let pattern = /\./g
        // if(!pattern.test(displayInput.value))
        displayInput.value = displayInput.value + number
    }
    else if(number == "%"){
        // displayInput.value = displayInput.value / 100
        let pInput = displayInput.value.split("*")
        let percent = pInput[0] * (pInput[1] / 100)
        displayInput.value = percent
    }
    else if(number == "="){
        displayInput.value = eval(displayInput.value)
    }
    else{
        displayInput.value = displayInput.value + number
    }
})
