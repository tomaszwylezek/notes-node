console.log("Starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  console.log("Adding note", title, body);

  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString.toString());
  } catch (e) {}

  let duplicateNotes = notes.some(note => note.title === title);

  if (!duplicateNotes) {
    notes.push(note);

    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};
const getAll = () => {
  console.log("Getting all notes");
};
const getNote = title => {
  console.log("Getting note", title);
};
const removeNote = title => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
