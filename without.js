function without(array1, array2) {

  var source = []
  var diff = []

  for (var i = 0; i < array1.length; i++) {
    source.push(array1[i])
  }

  for (var i = 0; i < array2.length; i++) {
    diff.push(array2[i])
  }

  return difference = source.filter(x => !diff.includes(x));

}
module.exports = without;