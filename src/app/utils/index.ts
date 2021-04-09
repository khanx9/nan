import { KEYS } from "../constants";

export class Utils {
    static isValidDate = (d) => {
        return !isNaN(d) && d instanceof Date;
    }

    static getParamsOnUrl = (isLast?: boolean) => {
        if (isLast) {
            const a = location.hash.split('/');
            return a[a.length - 1]
        }
        return location.hash.split('/');
    }

    static goBack = () => history.back()

    static getToken = () => localStorage.getItem(KEYS.ACCESS_TOKEN)
}