//import shelljs
const shell = require('shelljs');
//argv[0] -> node , argv[1] -> filename
const taskType = process.argv[2];
const packageName = process.argv[3];

const packages = ['baseline-configuration'];
//path for bin folder(execs) --> @nwtn/baseline-configuration/node_modules/.bin
const basePath = `@nwtn/${packages[0]}/node_modules/.bin`;

if (!taskType) {
  //kill if no task type
  process.exit(1);
}

//switch on task type
switch (taskType) {
  // case 'clean':
  //   console.log('Inside clean');
  //   shell.rm('-rf', 'lib');
  //   shell.rm('-rf', 'node_modules');
  //   for(var i=0; i< packages.length; i++) {
  //     shell.rm('-rf',packages[i]+'/lib');
  //     shell.rm('-rf',packages[i]+'/node_modules');
  //   }
  //   break;
case 'clear':
  console.log('Inside clear');
  shell.rm('-rf', 'package');
  shell.rm('-rf', 'node_modules');
  shell.rm('-rf', 'package-lock.json');
  shell.rm('-rf', 'yarn.lock');
  shell.rm('-rf', 'coverage');
  break;
case 'check-types':
  console.log('Inside compile');
  if (packageName === packages[0]) {
    break;
  }
  taskModule = require.resolve(`${basePath}/tsc`);
  shell.exec(`${taskModule}`);
  break;
case 'build-types':
  console.log('Inside build types');
  taskModule = require.resolve(`${basePath}/tsc`);
  shell.exec(`${taskModule} --emitDeclarationOnly --outDir ./package/@types -noEmit false --declaration --allowJs false`);
  break;
case 'build-lib':
  console.log('Inside build-lib');
  taskModule = require.resolve(`${basePath}/babel`);
  shell.exec(`${taskModule} --config-file ./babel.config.js --verbose -d ./package/lib ./src --copy-files --ignore ./src/**/__tests__/,./src/**/__stories__/,./coverage --extensions \".ts,.tsx,.js,.jsx\"`);
  break;
case 'build-package':
  console.log('Inside build-package');
  taskModule = require.resolve(`${basePath}/babel`);
  shell.exec(`${taskModule} --config-file ./babel.config.js --verbose -d ./package/lib ./src --ignore ./src/**/__tests__/,./src/**/__stories__/,./coverage --extensions \".ts,.tsx,.js,.jsx\"`);
  taskModule = require.resolve(`${basePath}/tsc`);
  shell.exec(`${taskModule} --emitDeclarationOnly --outDir ./package/@types -noEmit false --declaration --allowJs false`);
  break;
case 'test':
  console.log('Inside test');
  if (packageName === packages[0]) {
    break;
  }
  taskModule = require.resolve(`${basePath}/jest`);
  shell.exec(`${taskModule} -c ./jest.config.js --rootDir ./src --colors --passWithNoTests`);
  break;
  /* case 'update-snapshot':
    console.log('Inside update snapshot');
    taskModule = require.resolve(`${basePath}/jest`);
    shell.exec(`${taskModule} -c ./jest.config.js --rootDir ./src --colors --passWithNoTests -u`);
    break; */
case 'stylelint':
  console.log('Inside style lint');
  // console.log(shell.pwd());
  if (packageName === packages[0]) {
    break;
  }
  taskModule = require.resolve(`${basePath}/stylelint`);
  shell.exec(`${taskModule} "src/**/*.(scss|css)" --config stylelint.config.js`);
  break;
case 'stylelint-fix':
  console.log('Inside style lint fix');
  // console.log(shell.pwd());
  if (packageName === packages[0]) {
    break;
  }
  taskModule = require.resolve(`${basePath}/stylelint`);
  shell.exec(`${taskModule} "src/**/*.(scss|css)" --config stylelint.config.js --fix`);
  break;
case 'lint':
  console.log('Inside lint');
  if (packageName === packages[0]) {
    break;
  }
  // console.log(shell.pwd());
  taskModule = require.resolve(`${basePath}/eslint`);
  // shell.exec(`${taskModule} -c ./eslint.config.js --ext .jsx,.js,.ts,.tsx src/ --report-unused-disable-directives --color --quiet --no-eslintrc`);
  shell.exec(`${taskModule} --ext .jsx,.js,.ts,.tsx src/ --report-unused-disable-directives --color --quiet`);
  break;
case 'lint-fix':
  console.log('Inside lint-fix');
  if (packageName === packages[0]) {
    break;
  }
  taskModule = require.resolve(`${basePath}/eslint`);
  // shell.exec(`${taskModule} -c ./eslint.config.js --ext .jsx,.js,.ts,.tsx src/ --color --fix --no-eslintrc`);
  shell.exec(`${taskModule} --ext .jsx,.js,.ts,.tsx src/ --color --fix`);
  break;
case 'check-dependencies':
  taskModule = require.resolve(`${basePath}/npm-check`);
  shell.exec(`${taskModule} . --skip-unused`);
  break;
default:
  console.log('Inside default');
}
