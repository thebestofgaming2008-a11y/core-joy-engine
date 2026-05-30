import { useEffect, useState } from "react";
// Minimal stubs for `convex/react` used by the app.
export function useQuery(_ref?: any, _args?: any) { return undefined; }
export function useMutation(_ref?: any) { return async (..._a: any[]) => undefined; }
export function useAction(_ref?: any) { return async (..._a: any[]) => undefined; }
export function usePaginatedQuery() { return { results: [], status: "Exhausted" as const, loadMore: () => {}, isLoading: false }; }
export class ConvexReactClient { constructor(_url?: string) {} setAuth() {} clearAuth() {} close() {} }
export function ConvexProvider({ children }: { children: any }) { return children; }
export function useConvex() { return null; }
export { useEffect, useState };
