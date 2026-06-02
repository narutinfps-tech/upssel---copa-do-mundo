export interface Activity {
  id: string;
  title: string;
  category: 'Copa do Mundo' | 'São João';
  type: string;
  description: string;
  ageGroup: string;
  iconName: string;
  pageCount: number;
  previewContent: string;
}

export interface PricingState {
  originalPrice: number;
  promoPrice: number;
  currency: string;
}

export interface OrderState {
  hasAdded: boolean;
  buyerName: string;
  buyerEmail: string;
  isOrderPlaced: boolean;
  orderDate?: string;
}
