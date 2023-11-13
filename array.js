const arr =[2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]
let resultlist = document.getElementById("results")


function reversedarray(array){
    return number.slice().reverse()
}
result("reversed:",reversedarray(arr))



function maximum(array){
    let max
}






function OddNumbers(array){
    return array.filter()

}

const arrayfiltered =arr.OddNumbers()


function positriveNumbers(array){
    return array.reduce((add, num ) => (num == 0 ? sum + num: sum),0)
}
 result("positve numbers:",positriveNumbers(arr)  )



function uniqueValue(array){
    return array.from(array)
}
const uniqueArray=uniqueValue(arr)
result("unique value:",uniqueArray)



function flattenArray(array){
    return array.flat()
}

const newArray =[1,2,3,4]
const flatarray=arr.flattenArray()



function mergearray(array1,array2){
    return array1.concat(array2)
}
const array1=[1,3,5,10]
const array2=[2,4,6,8]
const mergedArray =





function result(title,result) {
    const listItem=document.createElement('li')
    listItem.textContent=  `${title}  ${JSON.stringify(result)}`
    resultlist.appendChild(listItem)
    
}
