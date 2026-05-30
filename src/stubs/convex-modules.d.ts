declare module "convex/react" {
  export const useQuery: any;
  export const useMutation: any;
  export const useAction: any;
  export const usePaginatedQuery: any;
  export const useConvex: any;
  export class ConvexReactClient { constructor(url?: string); setAuth(): void; clearAuth(): void; close(): void; }
  export const ConvexProvider: any;
}
declare module "@convex-dev/auth/react" {
  export const useAuthActions: any;
  export const useConvexAuth: any;
  export const ConvexAuthProvider: any;
}
