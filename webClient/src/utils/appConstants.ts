export enum KeyConstants {
    ENTER_KEY = 13,
}

export const PullRequestStatus = {
    NEEDSWORK: 'needs_work',
    APPROVED: 'approved',
    MERGING: 'merging',
    MERGED: 'merged',
    DECLINED: 'declined'
};

export const STORAGE_URL = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/policy/storageusage`;

export const ISSUPERADMIN_URL = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/policy/userprofile/`;

export const DIFF_URL: string = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/policy/instances/`;

export const DB2_URL: string = `com.rs.newton.mvcloud/services/leibniz/_current/ws/administration/subsystems/`;

export const SUBSYSTEM_URL: string = `com.rs.newton.mvcloud/services/leibniz/_current/ws/policy/subsystems/`;

export const PROFILE_URL: string = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/policy/userprofile`;

export const DISCOVERY_BASE_URL: string = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/discovery/session`;

export const DISCOVERY_DEFAULT_PLAN_URL: string = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/discovery/discoveryplan/getNewPlanName`;

export const RACF_PROFILE_URL: string = `/security-mgmt/classes/default-class/profiles/`;

export const RACF_ACCESS_URL: string = `/security-mgmt/access`;

export const DISCOVERY_LOAD_GRAPH_URL: string = `/com.rs.newton.mvcloud/services/leibniz/_current/ws/discovery`;

export const IBMColorSwatches = [
    '#c8daf4',
    '#79a6f6',
    '#3c6df0',
    '#a0e3f0',
    '#00b6cb',
    '#8ee9d4',
    '#00baa1',
    '#89eda0',
    '#34bc6e',
    '#b4e876',
    '#81b532',
    '#fbeaae',
    '#e3bc13',
    '#fdcfad',
    '#fe8500',
    '#fccec7',
    '#ff806c',
    '#83231e',
    '#f5cedb',
    '#f87eac',
    '#e4adea',
    '#cb71d7',
    '#c7b6f7',
    '#9b82f3'
];

export const VerificationTypeConstants = {
    LIKE: 'string_like',
    NOT_LIKE: 'string_not_like',
    STARTS_WITH: 'starts_with',
    ENDS_WITH: 'ends_with',
    MUST_BE: 'must_be',
    MUST_NOT_BE: 'must_not_be',
    PRESENT: 'must_be_present',
    ABSENT: 'must_be_absent',
    IN_LIST: 'in_list',
    NOT_IN_LIST: 'not_in_list',
    GREATER_THAN: 'greater_than',
    LESS_THAN: 'less_than',
    IN_RANGE: 'in_range',
    APPROVAL: 'approval'
};

export const RuleModalType = {
    EDIT: 'edit',
    CREATE: 'create',
    DUPLICATE: 'duplicate',
    VIEW: 'view',
    STORAGETEAM: 'storageTeam',
    STORAGEENV: 'storageEnv',
    STORAGEUSER: 'storageUser',
    STORAGEAPP: 'storageApp'
};

export const InstanceStatus = {
    COMPLETE: 'complete',
    LOADING: 'loading',
    INSTANTIATING: 'instantiating',
    DELETING: 'deleting',
    ERROR: 'error',
    PROVISIONERROR: 'provision_error',
    DEPROVISIONERROR: 'deprovision_error'
};

export enum RuleType {
    SCHEMA,
    DATABASE,
}
