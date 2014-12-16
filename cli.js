#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ghBrowse = require('./');

var cli = meow({
  help: [
    'Main command is `gh-browse`, which will open the repo in your browser.',
    '',
    'Possible arguments:',
    '    issues: opens issues in the repo.',
    '    pulls: opens PRs page in the repo',
    '    commits: opens commit log',
    '    commits <branch>: opens commit log for specific branch',
    '',
    'Notice this is all just alpha, I\'m hoping to add more stuff later on.',
    ''
  ].join('\n')
});

ghBrowse(cli.input);
