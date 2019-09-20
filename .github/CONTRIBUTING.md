# 🚧 Notice 🚧

Pardon the mess. The `master` branch is in flux while we work on javastips v1. This
means things like npm scripts, which we encourage using for contributions, may
not be working. Thank you for your patience.

# Contributing to javastips

Contributions are always welcome. Before contributing please read the
[code of conduct](https://js.foundation/community/code-of-conduct) &
[search the issue tracker](https://github.com/svngoku/JavasTips/issues); your issue
may have already been discussed or fixed in `master`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) Lodash, commit your changes,
& [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Feature Requests

Feature requests should be submitted in the
[issue tracker](https://github.com/svngoku/JavasTips/issues), with a description of
the expected behavior & use case, where they’ll remain closed until sufficient interest,
[e.g. 👍 reactions](https://help.github.com/articles/about-discussions-in-issues-and-pull-requests/).
## Pull Requests

...

## Contributor License Agreement

...

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already
established in the code.

- **Spacing**:<br>
  Use two spaces for indentation. No tabs.

- **Naming**:<br>
  Keep variable & method names concise & descriptive.<br>
  Variable names `index`, `array`, & `iterate` are preferable to
  `i`, `arr`, & `fn`.

- **Quotes**:<br>
  Single-quoted strings are preferred to double-quoted strings; however,
  please use a double-quoted string if the value contains a single-quote
  character to avoid unnecessary escaping.

- **Comments**:<br>
  Please use single-line comments to annotate significant additions, &
  [JSDoc-style](http://www.2ality.com/2011/08/jsdoc-intro.html) comments for
  functions.

Guidelines are enforced using [ESLint](https://www.npmjs.com/package/eslint):
```bash
  $ npm run style
```

## Tips

You can opt-in to a pre-push git hook by adding an `.opt-in` file to the root of
the project containing:
```txt
pre-push
```

With that, when you `git push`, the pre-push git hook will trigger and execute
`npm run validate`.
