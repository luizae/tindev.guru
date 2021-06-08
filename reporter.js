const fs = require('fs');

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    fs.rename(
      './coverage/coverage-final.json',
      './coverage/coverage.raw.json',
      err => {
        if (err) throw err;
        console.log('renamed complete');
      },
    );
  }
}

module.exports = MyCustomReporter;
