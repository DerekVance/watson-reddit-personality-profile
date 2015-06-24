function personParse(input) {
  var result = [];
  var personality = input.children[0].children[0].children[0].children;
  for (var i = 0; i < personality.length; i++) {
    var obj = {};
    obj.label = personality[i].name;
    obj.value = personality[i].percentage;
    result.push(obj);
  }
  console.log(input);
  return result;

};
