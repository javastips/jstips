"use strict";
const fs = require('fs');

/**
  * create a folder
  * @param { string } name
  */
const createFolder = function(name) {
  const message = "";
  if(typeof name === "string") {
    var folderName = name.split(" ");
    var dir = '/';
    fs.mkdir(__dirname + dir + name,{ recursive: true }, (err) => {
      if (err) console.log(err);
    });
    message =`Folder ${folderName} succesly created`;
    return message;
  } else {
    throw new Error('Argument must be a string');
  }
}

/**
 * @param { string } filename
 */
const ContentFile = function(filename) {
  filename.split("");
  if(typeof filename === "string") {
    fs.readFile(__dirname + '/'+filename,"UTF-8",(err, contents) => {
        if(err) console.error(err);
        return contents;
    });
  }
  throw new Error('We need a filename & extension');
};

export default {
  createFolder,
  ContentFile
};
