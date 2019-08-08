echo 'The following "yarn" command builds your Unified UI application for'
echo 'zowe in the local "web" directory (i.e. within the'
echo '"/var/jenkins_home/workspace/MVIeSZowe" directory),'
echo 'correctly bundles Unified UI in zowe mode and optimizes the build for'
echo 'the best performance.'
set -x
yarn build-zowe-prod
# set +x
