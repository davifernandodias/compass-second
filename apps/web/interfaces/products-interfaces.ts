export interface Products {
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