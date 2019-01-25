console.log("Starting app");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;

const command = process.argv[2];
console.log("Command:", command);
console.log("argv:", argv);

switch (command) {
  case "add": {
    const note = notes.addNote(argv.title, argv.body);

    if (note) {
      console.log(`${note.title} -- Saved!`);
    } else {
      console.log("Nothing saved -- error");
    }
    break;
  }
  case "read": {
    notes.getNote(argv.title);
    break;
  }
  case "remove": {
    notes.removeNote(argv.title);
    break;
  }
  default:
    console.log("Command not recognized");
}
