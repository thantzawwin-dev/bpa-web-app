const version = process.env.APP_VERSION || 0;
const PREFIX = `MY_APP_v${version}::`;

export function set(key: string, value: string) {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(PREFIX + key, serializedValue);
  } catch (error) {
    throw new Error("store serialization failed");
  }
}

export function get(key: string) {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = localStorage.getItem(PREFIX + key);
    if (serializedValue == null) {
      return;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}
