import {Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const DEFAULT_CENTER_COORDINATE = [113.31931876194517, 23.140404470231246]
export const SF_OFFICE_COORDINATE = [113.31931876194517, 23.138404470231246]


export function onSortOptions(a, b) {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
}
