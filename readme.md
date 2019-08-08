//test jenkins pollSCm
# Newton Unified UI

Newton React application installs on the Zowe framework as a plugin. It manages DevOps, Administration and Performance Experiences on the mainframe.

## SETUP DEVELOPMENT ENVIRONMENT
Please follow all of the steps below carefully in order to get your local machine setup correctly for development. Provided
within each step section is troubleshooting notes. You will most likely run into issues getting your machine setup 
initially but once it is done inittially you will not have to do these steps again. So you will only feel the pain of this
setup once. 

### HIGH LEVEL STEPS

- __Clone Repo__ Clone Newton Unified UI repository from Bitbucket
- __Configure Zowe Plugin__ Add a Zowe plugin for Newton Unified UI
- __Install Global Depenendecies__ Install Yarn and Lerna globally
- __Install Local Depenendecies__ Install repository npm dependencies
- __Bootstrap Application__ Link packages within the monorepo
- __Build Application__ Transpile TypeScript and ECMAScript code
- __Run Application__ Run Newton Unified UI in browser

## GETTING STARTED

#### INSTALLATION

```bash
npm install -g yarn
npm install -g lerna
```

#### BOOTSTRAPPING

```bash
yarn
lerna bootstrap
```

This command will download (external) and setup all the dependencies for the projects.

## COMMANDS

The main `package.json` includes the following npm wrappers of lerna commands:

- `bootstrap` Bootstrap all projects
- `compile` Compiles all projects
- `clean` Clean all projects
- `lint` Lint all projects
- `test` Run tests on all projects
- `update-version` Update version of all packages
- `check-packages` Check if all packages are clean, lint ok and tests pass
- `publish-packages` Publish all packages
- `build-storybook` Builds components for storybook of all projects
- `storybook` Opens browser showcasing components of all projects
- `lint` Find Lint errors in all projects
- `lint-fix` Fix Lint errors in all projects
- `check-types` Do static type checking (tsc) all projects

## PACKAGES

- [baseline-configuration][base-configuration-link] Baseline configuration shared by all packages
- [common-components][common-components-link] Newton Common React Components
- [experience-components][experience-components-link] Newton Experience React Components
- [newton-react-application][newton-react-application-link] Newton Experience React Application

## LERNA/YARN WORKSPACES

Workspaces can be thought of as git submodules except those directories can contain multiple repositories

- `packages` contains configuration files and shared components
- `webClient` contains main ui application built with react

## NEWTON APP STRUCTURE

#### ZOWE INTEGRATION

The Newton React application must be copied under the Zowe folder structure as a child plugin. Zowe zlux-build will run `ant build` which runs npm run build under each child pluginName/webClient folder which builds and bundles the plugin which allows it to run within the framework.

#### COMMANDS

- `build-zowe` builds the projects with webpack so it can run within Zowe framework
- `start:dev` builds and runs the project as a standalone application

#### INTERNATIONALIZATION

Internationalization for this app is done using [react-i18next][react-i18next-link]. Any component that needs access to the translation functions can simply be wrapped in the react translate HOC. Any string that is used in the app should be a translated string, including title tags, labels, etc. The actual translations are found in the `assets/i18n/locales` directory and each language gets its own json file. To add a translation it can be added to the English file and from there it can be translated to the other languages as well.

[base-configuration-link]: https://git.rocketsoftware.com/projects/NWTN/repos/newton-unified-ui/tree/master/packages/base-configuration
[common-components-link]: https://git.rocketsoftware.com/projects/NWTN/repos/newton-unified-ui/tree/master/packages/common-components
[experience-components-link]: https://git.rocketsoftware.com/projects/NWTN/repos/newton-unified-ui/tree/master/packages/experience-components
[newton-react-application-link]: https://git.rocketsoftware.com/projects/NWTN/repos/newton-unified-ui/tree/master/webClient/newton-react-application
[carbon-components-link]: https://git.rocketsoftware.com/projects/NWTN/repos/newton-unified-ui/tree/master/vendor/carbon-components
[carbon-components-react-link]: https://git.rocketsoftware.com/projects/NWTN/repos/newton-unified-ui/tree/master/vendor/carbon-components-react
[react-i18next-link]: https://react.i18next.com/guides/quick-start


