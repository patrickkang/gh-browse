# gh-browse

> Open relevant Github.com pages directly using a CLI

Inspired by [Paul Irish and his lazyweb-request](https://github.com/h5bp/lazyweb-requests/issues/25).


## Install

```sh
$ npm install -g gh-browse
```


## Usage

Open issues in browser:
```sh
$ gh-browse issues
```

Open commit log in browser:
```sh
$ gh-browse commits
```

Open commit log for specified branch:
```
$ gh-browse commits <branch>
```

Open PRs:
```
$ gh-browse pulls
```

## Todo

Pull requests are highly accepted.

- [ ] `gh-browse parent`: must open the parent (if the project is a fork)
- [ ] `gh-browse <branch>`: must open homepage in a specific branch
- [ ] `gh-browse wiki`
- [ ] Integrate some tests. The initial project was a quick fiddle, but some basic tests might be welcome.
- [ ] Proper up code. It's needed.

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
