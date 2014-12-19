'use strict';

var open = require('open');
var chalk = require('chalk');
var gitConfig = require('gitconfiglocal');

var isGithub = function (remote) {
  return remote.indexOf('github.com') > 0;
};

var getGithubUrl = function (remote) {
  return remote.replace('.git', '');
};

var openGithub = function (url, arg) {
  if (typeof arg === 'undefined' || arg.length === 0) {
    return open(url);
  }

  if (arg[0] === 'issues') {
    return open(url + '/issues');
  }

  if (arg[0] === 'pulls') {
    return open(url + '/pulls');
  }

  if (arg[0] === 'wiki') {
    return open(url + '/wiki');
  }

  if (arg[0] === 'commits') {
    if (!arg[1]) {
      return open(url + '/commits/master');
    } else {
      return open(url + '/commits/' + arg[1]);
    }
  }
};

module.exports = function (arg) {
  gitConfig('./', function (err, config) {
    if (err) {
      return console.log(chalk.red(err.toString()));
    }

    if (!config.remote || !config.remote.origin || !config.remote.origin.url) {
      return console.log(chalk.red('Seems like no remote repo is specified.' + '\n' + chalk.italic('Note that at the moment the remote must be called \'origin\'')));
    }

    var remote = config.remote.origin.url;

    if (!isGithub(remote)) {
      return console.log(chalk.red('Looks like an origin remote is specified, but it isn\'t github'));
    }

    var repoUrl = getGithubUrl(remote);
    openGithub(repoUrl, arg);
  });
};
