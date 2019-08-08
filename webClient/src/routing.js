import Application from './screens/Application';
import ApplicationDetails from './screens/Application/Details/Details2';
import ApplicationList from './screens/Application/List/ApplicationList';
import InstanceDetails from './screens/Instances/Details/InstanceDetailsContainer';
import Instance from './screens/Instances/Instance/Instance';
import InstanceList from './screens/Instances/InstanceList/InstanceList';
import Ports from './screens/Manage/Ports';
import ServersInstances from './screens/Manage/ServersInstances';

const routeData = [
  {
    path: '/',
    component: InstanceList,
    exact: true
  },
  {
    path: '/instances',
    component: InstanceList,
    exact: true
  },
  {
    path: "/instance/:instanceId",
    component: InstanceDetails,
    exact: true
  },
  {
    path: '/instances/create',
    component: Instance,
    exact: true
  },
  {
    path: '/system/setup',
    component: Ports,
    exact: true
  },
  {
    path: '/setting/users',
    component: ServersInstances,
    exact: true
  },
  {
    path: '/applications',
    component: ApplicationList,
    exact: true
  },
  {
    path: '/instance/details',
    component: InstanceDetails,
    exact: true
  },
  {
    path: '/applications/create',
    component: Application,
    exact: true
  },
  {
    path: '/application/details',
    component: ApplicationDetails,
    exact: true
  }
];

export default routeData;
