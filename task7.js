var maxProfit = function(prices) {
    let min = [prices[0],0]
    let max = [0,0]


    for( let i = 0 ; i<prices.length; i++){
     if(prices[i]<min[0]){
        min[0]=prices[i]
        min[1]=i
     }
    }

    for( let j = min[1]+1 ; j<prices.length; j++){
     console.log(j)
     if(prices[j]>max[0]){
        
        max[0]=prices[j]
        max[1]=j
     }
    }

    console.log(min)
    console.log(max)
    console.log(max[0]-min[0])
    return max[0]-min[0]
};

maxProfit([7,1,5,3,6,4])