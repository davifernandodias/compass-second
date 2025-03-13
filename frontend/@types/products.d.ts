interface Product {
  id: number;
  nome: string;
  price: number;
  image?: string | null; 
  discount?: number | null;
  type?: string | null;
  description?: string | null;
  assessment: number;
  user_id?: string | null;
}

interface ProductVariant {
  id: number;
  product_id: number;
  size: string;
  color: string;
  quantity: number;
}

interface Review {
  id: number;
  user_id: string;
  product_id: number;
  feedback_date: string;
  comment: string;
}

interface GetProductsResponse {
  products: Product;
  product_variants: ProductVariant[];
  reviews?: Review[]; 
}

interface GetAllProductsProps {
  initial: number;
  finalLimit: number;
  color?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
}


type Color = {
  name: string
  value: string
  textColor: string
  border: string
}

interface FilterState {
  initialPage: number;
  finalLimit: number;
  minPrice: number;
  maxPrice: number;
  color: string;
  size: string;
  currentPage: number;
}


interface FilterActions {
  setValue: (field: keyof FilterState, value: string | number) => void;
  reset: () => void;
}