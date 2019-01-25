const person = {
  name: "andres"
};

person.age = 30;

debugger;

person.name = "mike";

console.log(person);


// node inspect [file] (options : c - continue/n - next/repl - interactive)
// node --inspect-brk [file] - open in chrome://inspect
