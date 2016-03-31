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