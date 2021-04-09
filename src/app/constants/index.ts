export enum DEFAULT  {
    LANG = 'en_US',
    LOCALE = 'en-US',
    BASE_URL = 'http://localhost:3000/'
}


export enum KEYS {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token'
}

export const EXCLUDES = {
    screens : ['sign-in','sign-up']
}

export enum SCREENS  {
    HOME = '',
    SIGN_IN = '/sign-in',
    SIGN_UP = '/sign-up'
}

export enum STATUS_ICON  {
    success = 'checkmark-circle-2-outline',
    danger = 'close-circle-outline'
}