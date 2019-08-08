import { KeyConstants } from './appConstants';

const mvdWindow: any = window.parent;

export function startAnimation(callback: () => void) {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            callback();
        });
    });
}

export function deepCopy(input: any) {
    return JSON.parse(JSON.stringify(input));
}

export const onEnterWrapper = (
    handleEnter: (event: React.KeyboardEvent) => void
) => (event: React.KeyboardEvent) => {
    if (event.keyCode === KeyConstants.ENTER_KEY) {
        handleEnter(event);
    }
};

export const getErrorMessage = (
    error: any,
    key: string,
    t: (text: string) => string
) => {
    if (typeof error === 'object' && error && error.data && error.data.error) {
        return error.data.error;
    } else if (typeof error === 'object' && error && error.error) {
        return error.error;
    } else if (typeof error === 'object' && error && error.message) {
        return error.message;
    } else {
        return t(`errors.${key}`) + t(`errors.tryAgain`);
    }
};

export const getSuccessMessage = (key: string, t: (text: string) => string) => {
    return t(`errors.${key}`);
};

export const isHexDark = (hex: string) => {
    hex = hex.substring(1); // strip #
    const rgb = parseInt(hex, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma < 128;
};

export const formatDate = (date: Date): string => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime =
        hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    return (
        date.getDate() + ' ' + month + ' ' + date.getFullYear() + '  ' + strTime
    );
};

export const timeAgo = (t: (text: string) => string, date: string): string => {
    const prev = new Date(date);
    const now = new Date();
    const secondsPast = (now.getTime() - prev.getTime()) / 1000;
    if (secondsPast >= 86400) {
        return (
            Math.floor(secondsPast / 86400).toString() +
            ' ' +
            (Math.floor(secondsPast / 86400) === 1 ? t('time.day') : t('time.days'))
        );
    } else if (secondsPast < 86400 && secondsPast >= 3600) {
        return (
            Math.floor(secondsPast / 3600).toString() +
            ' ' +
            (Math.floor(secondsPast / 3600) === 1
                ? t('time.hour-long')
                : t('time.hours-long'))
        );
    } else if (secondsPast < 3600 && secondsPast >= 60) {
        return (
            Math.floor(secondsPast / 60).toString() +
            ' ' +
            (Math.floor(secondsPast / 60) === 1
                ? t('time.minute-long')
                : t('time.minutes-long'))
        );
    } else {
        return (
            Math.floor(secondsPast).toString() +
            ' ' +
            (secondsPast === 1 ? t('time.second-long') : t('time.seconds-long'))
        );
    }
};

export const capitalizeString = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const reverseString = (str: string): string => {
    return str
        .split('')
        .reverse()
        .join('');
};

export const determineTime = (
    t: (text: string) => string,
    date: string
): string => {
    const prev = new Date(date);
    const now = new Date();
    const secondsPast = (now.getTime() - prev.getTime()) / 1000;
    if (secondsPast >= 86400) {
        return Math.floor(secondsPast / 86400).toString() + ' ' + t('time.day');
    } else if (secondsPast < 86400 && secondsPast >= 3600) {
        return Math.floor(secondsPast / 3600).toString() + ' ' + t('time.hour');
    } else if (secondsPast < 3600 && secondsPast >= 60) {
        return Math.floor(secondsPast / 60).toString() + ' ' + t('time.minute');
    } else {
        return Math.floor(secondsPast).toString() + ' ' + t('time.second');
    }
};

export const getDb2ObjectTypes = (t: any) => {
    const objTypes = [
        { id: 'DB', name: t('db2ObjectTypes.database') },
        { id: 'TS', name: t('db2ObjectTypes.tablespace') },
        { id: 'TB', name: t('db2ObjectTypes.table') },
        { id: 'IX', name: t('db2ObjectTypes.index') },
        { id: 'SY', name: t('db2ObjectTypes.synonym') },
        { id: 'AL', name: t('db2ObjectTypes.alias') },
        { id: 'VW', name: t('db2ObjectTypes.view') },
        { id: 'TG', name: t('db2ObjectTypes.trigger') },
        { id: 'UDF', name: t('db2ObjectTypes.userFunction') },
        { id: 'SP', name: t('db2ObjectTypes.storedProc') },
        { id: 'UDT', name: t('db2ObjectTypes.userType') },
        { id: 'SEQ', name: t('db2ObjectTypes.sequence') }
    ];
    return objTypes;
};

/**
 * Function to convert KBs to GBs
 * @param n number in kb
 * @returns result number converted to gb
 */
export const convertKbsToGbs = (n: number) => {
    let result: number = 0;
    if (n > 0) {
        result = parseFloat((n / 1048576).toFixed(3));
    }
    return result;
};

/**
 * Function to sort the Storage page columns which has buttons in it (All other tables continue to use React's SORT functionality)
 */
export const storageLimitSort = (
    cellA: any,
    cellB: any,
    { sortDirection, sortStates, locale }: any
): number => {
    if (sortDirection === sortStates.ASC) {
        return compareCells(cellA, cellB, locale);
    }

    return compareCells(cellB, cellA, locale);
};

/**
 * The following code is identical to what the React Sort uses, but with the addition of sorting buttons/objects
 */
export const compareCells = (a: any, b: any, locale: any): number => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return compareStrings(a, b, locale);
    }

    // New compare function for Limit column - Checks if cell contents is an object or empty (in case of no buttons)
    // This is used solely for StorageLimit columns "Limit (GB)" and "Status" - no other tables have components inside the cells
    if (typeof a === ('object' || '') && typeof b === ('object' || '')) {
        // Access props of object
        const aProps: any = a.props;
        const bProps: any = b.props;

        // Access the storage limit parameter of the props
        const aStorageLimit: any = aProps && aProps.initialStorageLimit;
        const bStorageLimit: any = bProps && bProps.initialStorageLimit;

        // Set initial limit of the cells (CREATE LIMIT buttons considered as -1 since storage limits range from 0 to 65535)
        let aLimit: number = -1;
        let bLimit: number = -1;

        // Set the limit if the cell (a and/or b) has the storageLimit parameter
        if (aStorageLimit && aStorageLimit.length > 0) {
            aLimit = aStorageLimit[0].storageLimit;
        }

        if (bStorageLimit && bStorageLimit.length > 0) {
            bLimit = bStorageLimit[0].storageLimit;
        }

        return aLimit - bLimit;
    }

    return compareStrings('' + a, '' + b, locale);
};

/**
 * The following code is reused from React Sort
 */
export const compareStrings = (a: string, b: string, locale = 'en'): number => {
    return a.localeCompare(b, locale, { numeric: true });
};

/*
* Defaulted the version to 1.0.0 , 
* this might break the local setup if runnning on localhost:3000 directly
*  and the plugin version is not 1.0.0
*/
export const pluginVersion =
    mvdWindow && mvdWindow.ZoweZLUX
        ? mvdWindow.ZoweZLUX.pluginManager.getPlugin('com.rs.newton.mvcloud').version
        : '1.0.0';
