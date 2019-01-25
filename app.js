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
  case "list": {
    notes.getAll();
    break;
  }
  case "read": {
    notes.getNote(argv.title);
    break;
  }
  case "remove": {
    const noteRemoved = notes.removeNote(argv.title);

    const message = noteRemoved
      ? `Note with title ${argv.title} has been removed`
      : "There is no note with that title";

    console.log(message);
    break;
  }
  default:
    console.log("Command not recognized");
}
