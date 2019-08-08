#!/bin/bash
set -e

exe() { echo "$@" ; $@ ; }

CMD=$1
ROOT_PATH=$2
shift

echo "running $CMD task command $ROOT_PATH"
echo "The current working directory: $PWD"

case $CMD in

  clean)
    echo "Cleaning files and folders in directory: $PWD"
    exe "find . -name coverage -type d -exec rm -rf {} +"
    exe "rm -rf lib"
    exe "rm -rf dist"
    exe "rm -rf node_modules"
    exe "rm -rf package-lock.json"

    echo "Cleaning files and folders in root directory"
    exe "rm -rf $ROOT_PATH/node_modules"
    exe "rm -rf $ROOT_PATH/web"
    exe "rm -rf $ROOT_PATH/storybook-static"
    exe "rm -rf $ROOT_PATH/package-lock.json"
    exe "rm -rf $ROOT_PATH/yarn.lock"
    ;;

  clear)
    echo "Cleaning files and folders in directory: $PWD"
    exe "find . -name coverage -type d -exec rm -rf {} +"
    exe "rm -rf lib"
    exe "rm -rf dist"
    ;;

  compile)
    echo "The current working directory: $PWD"
    exe "$ROOT_PATH/node_modules/.bin/tsc"
    ;;
  
  build_package)
    echo "The current working directory: $PWD"
    exe "$ROOT_PATH/node_modules/.bin/babel --config-file $(pwd)/babel.config.js --verbose -d ./lib ./src --ignore ./src/**/__tests__/,./src/**/__stories__/,./coverage --extensions \".ts,.tsx,.js,.jsx\""
    ;;

  build_package_all)
    echo "The current working directory: $PWD"
    
    # walk each package directory and compile all packages
    cd "./packages/"
    for project in */ ; do
      cd "${project}/"
      echo "The current working directory: $PWD"
      exe "$ROOT_PATH/node_modules/.bin/babel --config-file $(pwd)/babel.config.js --verbose -d ./lib ./src --ignore ./src/**/__tests__/,./src/**/__stories__/,./coverage --extensions \".ts,.tsx,.js,.jsx\""
      cd "../"
    done
    ;;

  test)
    echo "The current working directory: $PWD"
    #echo "basename = $(basename $(pwd))"

    #if [ -d "$(pwd)/src/**/__tests__" ]; then
      exe "$ROOT_PATH/node_modules/.bin/jest -c $(pwd)/jest.config.js --rootDir ./src --colors --passWithNoTests"
    #else
      #echo "No tests to run"
    #fi
    ;;

  lint)
    echo "The current working directory: $PWD"
    exe "$ROOT_PATH/node_modules/.bin/eslint --ext .jsx,.js,.ts,.tsx src/ --report-unused-disable-directives --color --quiet"
    #exe "../node_modules/.bin/eslint ./src -c $(pwd)/eslint.config.js --report-unused-disable-directives"
    ;;

  lint:fix)
    echo "The current working directory: $PWD"
    #exe "../node_modules/.bin/prettier --write './src/**/*.{js,jsx,ts,tsx}'"
    exe "$ROOT_PATH/node_modules/.bin/eslint --ext .jsx,.js,.ts,.tsx src/ --fix"
    ;;
  
  *)
    if [[ -z "$CMD" ]]; then
      echo "USAGE: ./task (clean|compile|test|lint|format|<node_modules_bin_command>) command_args"
      exit 0
    fi
    exe "$ROOT_PATH/node_modules/.bin/$CMD $@"
    ;;
esac