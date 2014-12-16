# gh-browse

> Open relevant Github.com pages directly using a CLI

Inspired by [Paul Irish and his lazyweb-request](https://github.com/h5bp/lazyweb-requests/issues/25).

Because every README would need a 30-seconds screencast: [check this one](https://www.youtube.com/watch?v=2f4k4XbZy_g&feature=youtu.be).


## Install

```sh
$ npm install -g gh-browse
```


## Usage

Open issues the repo:
```sh
$ gh-browse
```

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
- [ ] `gh-browse commits HEAD^1`
- [ ] Integrate some tests. The initial project was a quick fiddle, but some basic tests might be welcome.
- [ ] Proper up code. It's needed.

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
