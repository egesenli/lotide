const head = function (array) {

  arrayElement = array.find(element => element !== undefined);

  return arrayElement;

}

module.exports = head;
