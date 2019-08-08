import * as moment from 'moment';

// const baseUrl = 'http://amsdevmvdtrah01.dev.rocketsoftware.com:9876/mvce/ws/';

const baseUrl =
  '/ZLUX/plugins/com.rs.newton.mvce/services/leibniz/_current/mvce/ws/';

const getData = () => {
  return Promise.all([
    getRegionList(),
    getVpcList(),
    getSecurityGroupList(),
    getSubnetList(),
    getKeyPairList(),
    getVolumeTypeList(),
    getTagList()
  ]).then(result => {
    return result.reduce((data, record) => {
      data = Object.assign({}, { ...data }, { ...record });
      return data;
    }, {});
  });
};

const getRegionList = () => {
  return fetch(baseUrl + 'provisioning/regions', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      let regionList = response.regions.map(record => {
        return { id: record.endpoint, value: record.region_name };
      });

      return { regionList };
    })
    .catch(() => {
      return {
        regionList: []
      };
    });
};

const getVpcList = () => {
  return fetch(baseUrl + 'provisioning/vpcs', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      let vpcList = response.vpcs.map(record => {
        return { id: record.id, value: record.vpc_id };
      });

      return { vpcList };
    })
    .catch(() => {
      return {
        vpcList: []
      };
    });
};

const getSubnetList = vpcId => {
  return fetch(`${baseUrl}provisioning/vpcs/${vpcId}/subnets`, {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      let subnetList = response.subnets.map(record => {
        return { id: record.id, value: record.subnet_id };
      });

      return { subnetList };
    })
    .catch(() => {
      return {
        subnetList: []
      };
    });
};

const getSecurityGroupList = () => {
  return fetch(baseUrl + 'provisioning/security-groups', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      let securityGroupList = response.security_groups.map(record => {
        return { id: record.group_id, value: record.group_name };
      });

      return { securityGroupList };
    })
    .catch(() => {
      return {
        securityGroupList: []
      };
    });
};

const getKeyPairList = () => {
  return fetch(baseUrl + 'provisioning/key-pairs', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      return {
        keyPairList: response.KeyPairs.map(record => {
          return { id: record.KeyFingerprint, value: record.KeyName };
        })
      };
    })
    .catch(() => {
      return {
        keyPairList: []
      };
    });
};

const getVolumeTypeList = () => {
  return fetch(baseUrl + 'provisioning/volume-types', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      return {
        volumeTypeList: response.map(record => {
          return { id: record.id, value: record.description };
        })
      };
    })
    .catch(() => {
      return {
        volumeTypeList: []
      };
    });
};

const getTagList = () => {
  return fetch(baseUrl + 'provisioning/volume-types', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(() => {
      return {
        tagList: []
      };
    })
    .catch(() => {
      return {
        tagList: []
      };
    });
};

const getInstanceList = () => {
  return fetch(baseUrl + 'provisioning/instance', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      return {
        instanceList: formatInstanceList(response.mvservers)
      };
    })
    .catch(() => {
      return {
        instanceList: []
      };
    });
};

const formatInstanceList = instanceList => {
  return instanceList.map(instance => {
    return {
      id: instance.id,
      data: { ...instance, id: instance.id },
      title: instance.name,
      list: [
        {
          displayName: 'Purpose',
          value: instance.purpose || '-'
        },
        {
          displayName: 'AMI name',
          value: instance.imageId || '-'
        },
        {
          displayName: 'IP',
          value: instance.publicIP || '-'
        },
        {
          displayName: 'Runtime',
          value: instance.runtime
            ? moment(instance.runtime * 1000).fromNow()
            : '-'
        }
      ],
      status: {
        displayName: instance.status
          ? instance.status.charAt(0).toUpperCase() + instance.status.slice(1)
          : 'Running',
        value: instance.status || 'running'
      }
    };
  });
};

const getAmiList = () => {
  return fetch(baseUrl + 'provisioning/ami', {
    method: 'get',
    credentials: 'include'
  })
    .then(res => res.json())
    .then(response => {
      return {
        amiList: response.amiList
      };
    })
    .catch(() => {
      return {
        amiList: []
      };
    });
};

export { getData, getSubnetList, getInstanceList, getAmiList };
