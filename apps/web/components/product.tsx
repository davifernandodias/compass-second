import { Card } from "@repo/ui/card";
import PreviousNextProduct from "@repo/ui/previous-next-product";
import Link from "next/link";

// Definindo a interface para Produto
interface Produto {
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

// Interface para os Props do componente Product
interface ProdutosProps {
  produto: Produto[];  // Agora é um array de Produto
  routeIsActive?: boolean;   
}
// @components/product.tsx
const Product = ({ produto, routeIsActive }: ProdutosProps) => {
  // Componente Product
  return (
    <div>
      <div className="flex gap-2 flex-wrap lg:gap-4 justify-around">
        {produto.map((e) => (
          <Card key={e.id}>
            <div className="flex flex-col gap-3 bg-white ">
              {routeIsActive ? (
                <Link href={`casual/${e.id}`}>
                  <div className="flex justify-center items-center rounded-2xl h-[174px] w-[172px] bg-gray-200 lg:w-[298px] lg:h-[298px]">
                    <p>{e.nome}</p>
                  </div>
                </Link>
              ) : (
                <div className="flex justify-center items-center rounded-2xl h-[174px] w-[172px] bg-gray-200 lg:w-[298px] lg:h-[298px]">
                  <p>{e.nome}</p>
                </div>
              )}
              <div>
                <div>
                  <p className="font-family-satoshi-medium font-bold">
                    {e.description || "Produto sem descrição"}
                  </p>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-2 ">
                      <p>s</p>
                      <p>s</p>
                      <p>s</p>
                      <p>s</p>
                    </div>
                    <div className="font-family-satoshi-regular text-12">
                      {e.assessment}
                      <span className="text-gray-text">/5</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="font-family-satoshi-medium font-bold text-20 ">
                      ${e.price}
                    </p>
                    {e.discount && (
                      <p className="font-family-satoshi-medium font-bold text-20 line-through text-[#999999] ">
                        ${e.price + (e.discount || 0)}
                      </p>
                    )}
                    {e.discount && (
                      <p className="flex justify-center items-center font-family-satoshi-regular text-10 bg-[#ffebeb] text-[#ff3333] h-5 w-12 rounded-3xl">
                        -{e.discount}%
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <PreviousNextProduct />
    </div>
  );
}

export default Product; // Certifique-se de usar 'export default Product'
