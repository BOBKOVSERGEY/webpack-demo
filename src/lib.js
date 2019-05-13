function myModule() {
  this.hello = function () {
    return 'Hello!';
  };

  this.goodbye = function () {
    return 'Goodbye!';
  }
}

// экспортируем myModule
module.exports = myModule;