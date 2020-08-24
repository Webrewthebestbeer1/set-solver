const fs = require('fs'); 
const parser = require('fast-xml-parser');

const myFile = fs.readFileSync('./DSC00559.xml', {encoding:'utf8', flag:'r'});
const jsonObj = parser.parse(myFile);

console.log(jsonObj);
console.log(jsonObj.annotation);
console.log(jsonObj.annotation.object[0].name);

jsonObj.annotation.object.forEach(object => {
  const objectClass = object.name;
  const xValue = object.bndbox.x


  console.log(`${object.name} ${object.bndbox.xmin}  ;
});
