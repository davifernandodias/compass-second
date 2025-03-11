interface Product {
  id: number;
  nome: string;
  price: number;
  image: string | null;
  discount: number | null;
  type: string | null;
  description: string | null;
  assessment: number;
  user_id: string | null;
}

interface GetProductsReponse {
  
    products: Product
    product_variants: [ unknown[] ]

}

interface GetAllProductsProps {
  initial: number;
  finalLimit: number;
  color?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
}