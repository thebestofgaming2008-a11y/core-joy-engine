// Convex removed. This is a no-op client so the app loads without a backend.
const noop = async () => undefined;
export const convex: any = {
  query: noop,
  mutation: noop,
  action: noop,
  setAuth: () => {},
  clearAuth: () => {},
  close: () => {},
};
