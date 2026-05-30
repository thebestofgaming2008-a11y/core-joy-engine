// Stub: Convex backend removed. Provides a Proxy so any api.x.y access works but resolves to a placeholder reference.
const makeProxy = (): any =>
  new Proxy(function () {}, {
    get: () => makeProxy(),
    apply: () => makeProxy(),
  });
export const api: any = makeProxy();
export const internal: any = makeProxy();
export default api;
