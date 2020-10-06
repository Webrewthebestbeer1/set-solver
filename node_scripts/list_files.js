const fs = require('fs');
const path = require('path'); 

const imagePath = path.join(__dirname, '../yolo/yolo_images');
const trainFile = path.join(__dirname, '../yolo/train.txt');
const validFile = path.join(__dirname, '../yolo/valid.txt');

let trainString = '';
let validString = '';

fs.readdir(imagePath, (error, files) => {
  if (error) {
    console.log('what the corporate fuck', error);
  }
  const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));
  jpgFiles.forEach((fileName, i) => {
    if (i % 10 !== 0) {
      trainString += `../set-solver/yolo/yolo_images/${fileName}\n`;
    } 
    else {
      validString += `../set-solver/yolo/yolo_images/${fileName}\n`;
    }
  });
  fs.writeFile(trainFile, trainString, 'utf8', () => {});
  fs.writeFile(validFile, validString, 'utf8', () => {});
});

