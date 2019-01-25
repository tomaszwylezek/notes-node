const yargs = require("yargs");

const title = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const body = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

module.exports = () =>
  yargs
    .command("add", "Add a new note", {
      title,
      body
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
      title
    })
    .command("remove", "Remove a note", {
      title
    })
    .help().argv;
