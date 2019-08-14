import {Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
<<<<<<< HEAD
export const DEFAULT_CENTER_COORDINATE = [113.31931876194517, 23.140404470231246]
export const SF_OFFICE_COORDINATE = [113.31931876194517, 23.138404470231246]

=======
export const DEFAULT_CENTER_COORDINATE = [ 113.26147, 23.13162];
export const SF_OFFICE_COORDINATE = [-122.400021, 37.789085];
>>>>>>> 7da560239d1ea75cdd00a8b64ad29f281336068e

export function onSortOptions(a, b) {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
}
