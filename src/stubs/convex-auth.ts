// Stub for @convex-dev/auth/react
export function useAuthActions() {
  return {
    signIn: async (_provider: string, _params?: any) => ({ error: new Error("Auth disabled: Convex backend removed") }),
    signOut: async () => {},
  };
}
export function useConvexAuth() {
  return { isLoading: false, isAuthenticated: false };
}
export function ConvexAuthProvider({ children }: { children: any }) { return children; }
