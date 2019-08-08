if (process.env.CI) {
  return;
}

const shell = require('shelljs');
const fs = require('fs');

const configDir = 'config';

const zoweHome = '..';
const zoweServer = `${zoweHome}/zlux-app-server`;
const zoweBuild = `${zoweHome}/zlux-build`;

const pluginDef = `${configDir}/com.rs.newton.MVIeSZowe.json`;
const pluginDir = `${zoweServer}/plugins/`;
const DeployPluginDir = `${zoweServer}/deploy/instance/ZLUX/plugins/`;

console.log('Copying plugin definition to plugin directory');
// shell.cp(pluginDef, pluginDir);
shell.cp(pluginDef, DeployPluginDir);

const pluginStorageDir = `${zoweServer}/deploy/product/ZLUX/pluginStorage/com.rs.newton.MVIeSZowe/_internal/services`;
const leibnizDir = `${pluginStorageDir}/leibniz`;
const leibnizTarget = `${leibnizDir}/remote.json`;
const localLeibnizConfig = `${configDir}/remote.local.json`;
const leibnizConfig = `${configDir}/remote.json`;

shell.mkdir('-p', pluginStorageDir);
shell.mkdir('-p', leibnizDir);

console.log('Copying leibniz remote configuration file to plugin storage');
if (shell.test('-e', localLeibnizConfig)) {
  console.log('Using local leibniz configuration file');
  shell.cp(localLeibnizConfig, leibnizTarget);
} else {
  console.log('Using default leibniz configuration file');
  shell.cp(leibnizConfig, leibnizTarget);
}

// console.log('Copying db2 auth service and configs');
// const auth = `${configDir}/authentication.json`;
// shell.cp(auth, `${leibnizDir}/`);

// const db2AuthDir = 'db2-auth';
// const db2Plugin = 'com.rs.auth.db2Auth';
// const db2AuthDef = `${db2AuthDir}/${db2Plugin}.json`;

// shell.cp(db2AuthDef, pluginDir);
// shell.cp('-r', db2AuthDir, zoweHome);

// console.log('Making sure Zowe config includes db2 auth');
// const zluxConfigFile = `${zoweServer}/config/zluxserver.json`;
// let zluxConfig = fs.readFileSync(zluxConfigFile, 'utf-8');
// zluxConfig = decomment(zluxConfig);
// zluxConfig = JSON.parse(zluxConfig);
// let configValid = true;
// let db2Config = zluxConfig.dataserviceAuthentication.implementationDefaults.db2;
// if (!db2Config) {
//   console.log('Db2 auth not set, adding implementation default');
//   db2Config = {
//     plugins: [db2Plugin],
//   };
//   configValid = false;
// } else {
//   if (db2Config.plugins.indexOf(db2Plugin) === -1) {
//     console.log('Missing Db2 auth plugin information, adding plugin id');
//     db2Config.plugins.push(db2Plugin);
//     configValid = false;
//   }
// }
// zluxConfig.dataserviceAuthentication.implementationDefaults.db2 = db2Config;

// if (configValid) {
//   console.log('Db2 auth already configured correctly');
// } else {
//   console.log('Updating Zowe config file');
//   const configContent = JSON.stringify(zluxConfig, null, 2);
//   fs.writeFileSync(zluxConfigFile, configContent, 'utf8');
// }

// console.log('Running Zowe deploy');
// const { code } = shell.exec(`cd ${zoweBuild} && ant deploy`, { silent: true });
// if (code) {
//   console.log('Zowe deploy did not execute correctly, try manually deploying');
// }
