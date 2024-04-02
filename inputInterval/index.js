
const input = document.getElementById('inputTime');
const startTimer = document.getElementById('startTimer');
const addTimer = document.getElementById('addTimer');
const timers = document.getElementById('timers');



let inputValue = input.value 


input.addEventListener('change',function() {
    inputValue = parseInt(input.value, 10)
})



startTimer.addEventListener('click',function() {
    let interval = setInterval(function() {
        if(inputValue > 0) {
            console.log('this',inputValue)
            inputValue -= 1
            input.value = inputValue
        }else {
            clearInterval(interval)
        }
    }, 1000)
})

function createNewTimerElement(){
    let newTimerElement = document.createElement('div')
    let newCount = inputValue
    let newInterval = setInterval(function() {
        if(newCount >= 0){
            newTimerElement.innerHTML = newCount 
            newCount -= 1
        }else {
            clearInterval(newInterval)
        }
    }, 1000)


    return newTimerElement
}

addTimer.addEventListener('click', function(){
    let newTimerEl = createNewTimerElement()

    timers.append(newTimerEl)
})
