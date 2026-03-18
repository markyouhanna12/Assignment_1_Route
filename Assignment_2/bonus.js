function findthKthPositive(arr,k){
    let missing = [];
    let current = 1;
    let i = 0;
    while (missing.length < k){
        if(i < arr.length && arr[i] === current){
            i++;
        }else{
            missing.push(current)
        }
        current++;
    }
    return missing[k-1];
}


let arr = [2,3,4,7,11];
let k = 5

console.log(findthKthPositive(arr,k));
