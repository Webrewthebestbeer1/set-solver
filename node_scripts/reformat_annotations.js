const fs = require('fs');
const path = require('path'); 
const parser = require('fast-xml-parser');

const inputPath = path.join(__dirname, '../images/annotations');
const outputPath = path.join(__dirname, '../images/annotations/txt');

fs.readdir(inputPath, (error, files) => {
  if (error) {
    console.error('FUUUK', error);
  }
  files.forEach((fileName) => {

    if (fileName.toLowerCase().endsWith('.xml')) {
      const myFile = fs.readFileSync(`${inputPath}/${fileName}`, {encoding:'utf8', flag:'r'});
      const jsonObj = parser.parse(myFile);
      
      const { width: imgWidth, height: imgHeight } = jsonObj.annotation.size;
      
      let str = '';
      
      if (jsonObj.annotation.object) {
        let annotations;
        if (!Array.isArray(jsonObj.annotation.object)) {
          annotations = [jsonObj.annotation.object];
        } else {
          annotations = jsonObj.annotation.object;
        }
        annotations.forEach(object => {
          const { xmin, ymin, xmax, ymax } = object.bndbox;
          const { name } = object;
        
          const xcenter = (xmin + xmax) / 2 / imgWidth;
          const ycenter = (ymin + ymax) / 2 / imgHeight;
          const width = (xmax - xmin) / imgWidth;
          const height = (ymax - ymin) / imgWidth;
        
          const result = `${name} ${xcenter} ${ycenter} ${width} ${height}`;
          str += `${result}\n`;
        });
      fs.writeFile(`${outputPath}/${fileName.replace('.xml', '.txt')}`, str, 'utf8', () => {});
      console.log('Wrote annotations for', fileName);
      } else {
        console.error('Cannot find annotations for', fileName);
      }
    }
  });
});



