export const isObject = (val: any) => {
  if (val === null) {
    return false;
  }
  return typeof val === 'object';
};