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

  const notes = fetchNotes();
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
const getAll = () => fetchNotes();

const getNote = title => {
  const notes = fetchNotes();

  return notes.find(note => note.title === title);
};

const removeNote = title => {
  const notes = fetchNotes();

  const filteredNotes = notes.filter(note => note.title !== title);

  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  console.log("---");
  console.log(`Note title: ${note.title}`);
  console.log(`Note body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
