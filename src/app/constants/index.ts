export enum DEFAULT {
    LANG = 'en_US',
    LOCALE = 'en-US',
    BASE_URL = 'http://192.168.1.123:3000/',
    API_PREFIX = 'api',
    AVATAR_URL = 'https://ui-avatars.com/api/?name='
}


export enum KEYS {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
    E0001 = 'E0001',
    E0002 = 'E0002',
    E0008 = 'E0008'
}

export const EXCLUDES = {
    screens: ['sign-in', 'sign-up']
}

export enum SCREENS {
    HOME = '',
    SIGN_IN = '/sign-in',
    SIGN_UP = '/sign-up'
}

export enum LANG {
    vi_VN = 'vi_VN',
    en_US = 'en_US'
}

export const userMenu = [

    {
        title: 'common.menu-user.user-profile',
        icon: 'people-outline',
        action: () => { },
        link: '/profile'
    },
    {
        title: 'common.menu-user.logout',
        icon: 'log-out-outline',
        link: '/sign-in',
        action: () => {
            localStorage.clear();
        }
    },
]

export enum STATUS_ICON {
    success = 'checkmark-circle-2-outline',
    danger = 'close-circle-outline'
}


export interface UserLogin {
    email?: string;
    password?: string;
}

export interface UserRegister {
    name: string,
    username: string,
    email: string,
    password: string,
}