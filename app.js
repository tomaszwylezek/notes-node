console.log("Starting app");

const notes = require("./notes");
const argv = require("./yargsConfig");

const command = argv._[0];

switch (command) {
  case "add": {
    const note = notes.addNote(argv.title, argv.body);

    if (note) {
      console.log("Note created!");
      notes.logNote(note);
    } else {
      console.log("Nothing saved -- error");
    }
    break;
  }
  case "list": {
    const allNotes = notes.getAll();
    allNotes.forEach(notes.logNote);
    break;
  }
  case "read": {
    const note = notes.getNote(argv.title);
    if (note) {
      console.log("Note found!");
      notes.logNote(note);
    }
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
