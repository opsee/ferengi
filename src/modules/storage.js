export function setItem(keyName, keyValue) {
  if (typeof window !== 'undefined') {
    // Use of localStorage using Safari in private mode throws an error
    try {
      window.localStorage.setItem(keyName, keyValue);
    } catch (e) {
      return; // no-op
    }
  }
}

export function getItem(keyName) {
  if (typeof window !== 'undefined') {
    // Use of localStorage using Safari in private mode throws an error
    try {
      return window.localStorage.getItem(keyName);
    } catch (e) {
      console.warn(e);
      return ''; // no-op
    }
  }
  return '';
}
