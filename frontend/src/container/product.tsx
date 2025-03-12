import { Card } from "@/components/ui/card";

export const Product = ({ products }: { products: GetProductsReponse[] }) => {
  console.log(products);

  if (!products?.length) return null;

  return (
    <div className="bg-yellow-200">
      <Card className="flex flex-wrap">

      {products.map((productGroup, index) => (
        <div key={index}>
          <h1 className="text-black">{productGroup.products.nome}</h1>
        </div>
      ))}
      </Card>
    </div>
  );
};