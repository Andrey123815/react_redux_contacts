export const NAME_REGEXP: RegExp = /^[А-ЯA-Z][a-zа-я]{1,20}(\s[А-ЯA-Z][a-zа-я]{1,20})?$/;
export const EMAIL_REGEXP: RegExp = /^((([0-9A-Za-z]+[-0-9A-z.]+[0-9A-Za-z]+)|([0-9А-Яа-я]+[-0-9А-я.]+[0-9А-Яа-я]+))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,})$/u;
export const PHONE_REGEXP: RegExp = /^8[0-9]{10}$/;
export const CITY_REGEXP: RegExp = /^[А-Яа-яa-zA-Z]{2,}$/;
export const STREET_REGEXP: RegExp = /^[А-ЯA-Zа-яa-z\s]{2,}$/;
