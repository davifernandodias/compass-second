export const Product = ({ products }: { products: GetProductsReponse[] }) => {
  console.log(products);

  if (!products?.length) return null;

  return (
    <div>
      {products.map((productGroup, index) => (
        <div key={index}>
          <h1 className="text-black">{productGroup.products.nome}</h1>
        </div>
      ))}
    </div>
  );
};