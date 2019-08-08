echo 'The following "yarn" command builds your React application for'
echo 'dev in the local "web" directory (i.e. within the'
echo '"/var/jenkins_home/workspace/MVIeSZowe" directory),'
echo 'correctly bundles React in dev mode and optimizes the build for'
echo 'the best performance.'
set -x
yarn build-dev
set +x
