const array = [0,1,1,0,1,0,1,0,1,0]

let start
let end 
let swapCount = 0


for(let i = 0; i < array.length; i++){
    if(array[i] === 1){
        start = i
        break
    }
}

for(let  i = array.length; i >=0; i--){
    if(array[i] === 1){
        end = i
        break
    }
}


function getSwapCount(){
    let i = start
    let j = end
    let tempArray = [...array]

    while(i < j){
        if(tempArray[i] === 0){
            tempArray[i] = 1
            tempArray[j] = 0
            
            while(tempArray[j] !== 1 && j >=0){
                j--
            }

            
            swapCount++
            console.log(tempArray, swapCount)
        }
        i++
    }
}

getSwapCount()




