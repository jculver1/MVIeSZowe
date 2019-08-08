# Newton Unified UI / Baseline Configuration

Base configuration contains all of the dependencies and configuration files that are shared by all of the packages in this repository. This allows for functionality reuse while removing any duplication of code or configuration. All new dependencies should be added to this package along with any configuration that will be used by more than one package.

### TECHNOLOGY OVERVIEW

* __React__ - JavaScript library for the UI
* __Babel__ - JavaScript compiler for the UI
* __TypeScript__ - Typed superset of JavaScript for the UI
* __Storybook__ - Acceptance test framework for React
* __Jest__ - Unit test framework for React
* __Enzyme__ - Integration test framework for React
* __ESLint__ - Tests and formats JavaScript code
* __Prettier__ - Tests and formats JavaScript code

#### SHARED DEPENDENCIES

| Name      | Version | License | Stars | Site                                                 |
| --------- | ------- | ------- | ----- | ---------------------------------------------------- |
| React     | 16.8.1  | MIT     | 100k  | [github][react-link] - [website][react-link]         |
| Storybook | 4.1.11  | MIT     | 34k   | [github][storybook-link] - [website][storybook-link] |
| Jest      | 4.1.11  | MIT     | 34k   | [npm][react-link] - [website][storybook-link]        |
| Enzyme    | 4.1.11  | MIT     | 34k   | [website][react-link] - [website][storybook-link]    |
| ESLint    | 4.1.11  | MIT     | 34k   | [website][react-link] - [website][storybook-link]    |
| Enzyme    | 4.1.11  | MIT     | 34k   | [website][react-link] - [website][storybook-link]    |


#### SHARED CONFIGURATION

| Name                      | File               | Experience Components | Web Client |
| ------------------------- | ------------------ | --------------------- | ---------- |
| [Babel](babel-link)       | babel.config.js    | X                     | X          |
| [Jest](jest-link)         | jest.config.js     | X                     | X          |
| [Enzyme](enzyme-link)     |                    | X                     | X          |
| [ESLint](eslint-link)     | eslint.config.js   | X                     | X          |
| [Prettier](prettier-link) | prettier.config.js | X                     | X          |


#### ROOT COMMANDS

The main `package.json` includes the following npm wrappers of lerna commands:

- `format` Format all projects
- `lint` Lint all projects
- `test` Run tests on all projects
- `build-storybook` Builds components for storybook of all projects
- `storybook` Opens browser showcasing components of all projects

#### SUB COMMANDS

- `format:code` formats js/jsx code against prettier configuration
- `fix:code` formats js/jsx code against eslint configuration

[react-link]: https://github.com/facebook/react
[storybook-link]: https://github.com/storybooks/storybook