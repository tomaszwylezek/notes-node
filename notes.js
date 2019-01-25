console.log("Starting notes.js");

const fs = require("fs");

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  console.log("Adding note", title, body);

  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  let duplicateNotes = notes.some(note => note.title === title);

  if (!duplicateNotes) {
    notes.push(note);
    saveNotes(notes);
    return note;
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
