// кладем в переменную то что экспортировали  myModule
let myModule = require('./lib');

let newModule = new myModule();
console.log(newModule.hello());