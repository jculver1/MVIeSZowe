import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../packages/admin-experience-components/src/HelloWorld/', true, /\.stories\.js$/);
//const req = require.context('../packages/**/src/HelloWorld/__stories__', true, /.story.(jsx?|js?)$/);
//function loadStories() {
//require('../packages/admin-experience-components/src/HelloWorld/__stories__/HelloWorld.story');
//require('../packages/admin-experience-components/src/TypeScript/__stories__/HelloWorld.story');
//req.keys().forEach(filename => req(filename));
//}

function loadStories() {
  require('glob-loader!./stories.pattern');
}

configure(loadStories, module);
