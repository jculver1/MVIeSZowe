import axios from 'axios';

const preferredLangs = navigator.languages;
let langs = '';
if (preferredLangs) {
    langs = preferredLangs.join(', ');
}

const instance = axios.create({
    baseURL: '/ZLUX/plugins',
    timeout: 60000,
    headers: {
        common: {
            'Accept-Language': langs
        }
    }
});

const instanceAuth = axios.create({
    baseURL: '',
    timeout: 60000,
    headers: {}
});

const request = (method: string, url: string, data: object) => {
    return new Promise((resolve, reject) => {
        (() => {
            if (method === 'get') {
                return instance.request({
                    url,
                    method,
                    params: data,
                    headers: {}
                });
            } else {
                return instance.request({
                    url,
                    method,
                    data,
                    headers: {}
                });
            }
        })()
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response);
            });
    });
};

const requestAuth = (method: string, url: string, data: object) => {
    return new Promise((resolve, reject) => {
        (() => {
            if (method === 'getAuth') {
                return instanceAuth.request({
                    url,
                    method: 'get',
                    params: data,
                    headers: {}
                });
            } else if (method === 'delete') {
                return instanceAuth.request({
                    url,
                    method,
                    headers: {}
                });
            } else {
                return instanceAuth.request({
                    url,
                    method,
                    data,
                    headers: {}
                });
            }
        })()
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response);
            });
    });
};

const requestText = (method: string, url: string, data: string) => {
    return new Promise((resolve, reject) => {
        (() => {
            return instance.request({
                url,
                method,
                data,
                headers: { 'Content-Type': 'text/plain' }
            });
        })()
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response);
            });
    });
};

const requestBoolean = (method: string, url: string, data: boolean) => {
    return new Promise((resolve, reject) => {
        (() => {
            return instance.request({
                url,
                method,
                data,
                headers: { 'Content-Type': 'text/plain' }
            });
        })()
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response);
            });
    });
};

const requestReport = (method: string, url: string) => {
    return new Promise((resolve, reject) => {
        (() => {
            return instance.request({
                url,
                method: 'post',
                headers: { 'Content-Type': 'text/plain' }
            });
        })()
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response);
            });
    });
};

const requestAll = (chainPromises: any): Promise<Array<{}>> => {
    return axios.all(chainPromises);
};

export default {
    get: (endpoint: string, data: object = {}) => {
        return request('get', endpoint, data);
    },
    post: (endpoint: string, data: object = {}) => {
        return request('post', endpoint, data);
    },
    postBoolean: (endpoint: string, data: boolean) => {
        return requestBoolean('post', endpoint, data);
    },
    postText: (endpoint: string, data: string = '') => {
        return requestText('post', endpoint, data);
    },
    put: (endpoint: string, data: object = {}) => {
        return request('put', endpoint, data);
    },
    postReport: (endpoint: string) => {
        return requestReport('post', endpoint);
    },
    putText: (endpoint: string, data: string = '') => {
        return requestText('put', endpoint, data);
    },
    del: (endpoint: string, data: object = {}) => {
        return request('delete', endpoint, data);
    },
    all: (chainPromises: object) => {
        return requestAll(chainPromises);
    },
    getAuth: (endpoint: string, data: object = {}) => {
        return requestAuth('get', endpoint, data);
    },
    postAuth: (endpoint: string, data: object = {}) => {
        return requestAuth('post', endpoint, data);
    },
    putAuth: (endpoint: string, data: object = {}) => {
        return requestAuth('put', endpoint, data);
    },
    delAuth: (endpoint: string, data: object = {}) => {
        return requestAuth('delete', endpoint, data);
    }
};
