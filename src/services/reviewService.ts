export interface ProductReview {
  id: string;
  product_id: string;
  customer_name: string | null;
  customer_email: string | null;
  rating: number;
  title: string | null;
  body: string | null;
  media_urls: string[] | null;
  status: string;
  created_at: string | null;
}

const STORAGE_KEY = "he_reviews_v1";

function readAll(): ProductReview[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as ProductReview[]) : [];
  } catch {
    return [];
  }
}

function writeAll(reviews: ProductReview[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch {
    // ignore quota errors
  }
}

export async function listPublishedReviews(productId: string): Promise<ProductReview[]> {
  return readAll()
    .filter((r) => r.product_id === productId && r.status === "published")
    .sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""));
}

export async function submitReview(input: {
  productId: string;
  rating: number;
  title?: string | null;
  body?: string | null;
  customerName?: string | null;
}): Promise<ProductReview | null> {
  const review: ProductReview = {
    id: `rv_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    product_id: input.productId,
    customer_name: input.customerName ?? "Verified Customer",
    customer_email: null,
    rating: Math.max(1, Math.min(5, Number(input.rating) || 5)),
    title: input.title ?? null,
    body: input.body ?? null,
    media_urls: null,
    status: "published",
    created_at: new Date().toISOString(),
  };
  writeAll([review, ...readAll()]);
  return review;
}

export async function canReviewProduct(_productId: string): Promise<boolean> {
  // Open reviewing while there's no backend. Moderation happens later in admin.
  return true;
}
