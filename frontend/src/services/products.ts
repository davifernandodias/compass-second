import "dotenv/config";

export interface GetAllProductsProps {
  initial: number;
  finalLimit: number;
  color?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
}

const URL_API_BACKEND = process.env.NEXT_PUBLIC_URL_BACKEND;

if (!URL_API_BACKEND) {
  throw new Error("A variável de ambiente NEXT_PUBLIC_URL_BACKEND não foi definida.");
}

export const getAllProducts = async ({ initial, finalLimit, color, size, minPrice, maxPrice }: GetAllProductsProps) => {
  try {
    const params = new URLSearchParams();

    params.append("initial", initial.toString());
    params.append("final", finalLimit.toString());
    
    if (color) params.append("color", color);
    if (size) params.append("size", size);
    if (minPrice !== undefined) params.append("minPrice", minPrice.toString());
    if (maxPrice !== undefined) params.append("maxPrice", maxPrice.toString());

    const response = await fetch(`${URL_API_BACKEND}/products?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return error;
  }
};
