


const find = (s) => {
    let res = 0

    for(let i = 0; i < s.length; i++) {
        let temp = []
        
        let j = i + 1
        
        for(let j = 0; j < s.length; j++) {
            if(s[j] > (temp[temp.length - 1] || 0)) {
                temp.push(s[j])
            }
        }
        
        if(temp.length > res){
            res = temp.length
        }
    }
    console.log(res)
    return res
}














find([1,2,3,4 ])