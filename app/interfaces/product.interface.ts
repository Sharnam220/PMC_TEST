export interface ProductInterface {
  productName: string;
  productId: string;
  description: string;
  categories: string[];
  quantity: number;
  price: number;
  dateAdded: Date;
  lastUpdated: Date;
  supplierInfo?: string;
  lowStockThreshold?: number; // field for alert threshold
}
