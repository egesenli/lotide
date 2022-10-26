let output = []

function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      flatten(arr[i])
    }else{
      output.push(arr[i])
    }
  }
  return output
}
console.log(flatten([1, 2, [[3, 4]], 5, [6]]));