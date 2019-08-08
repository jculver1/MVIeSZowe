//const baseUrl = 'http://dendevmvasscw01.dev.rocketsoftware.com:9876/mvce/ws/provisioning/instances/';
const baseUrl =
  '/ZLUX/plugins/com.rs.newton.mvce/services/leibniz/_current/mvce/ws/provisioning/instances/';

const getInstanceDetails = instId => {
  return fetch(baseUrl + instId, {
    method: 'get',
    credentials: 'include'
  }).then(res => res.json());
};

export { getInstanceDetails };
