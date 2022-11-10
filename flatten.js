function flatten(arr) {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let temp = flatten(arr[i])
      output = output.concat(temp);
    }
    else {
      output.push(arr[i])
    }
  }
  return output
}

module.exports = flatten;