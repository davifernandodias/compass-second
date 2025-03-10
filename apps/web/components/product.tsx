
import type { Products } from "@interfaces/products-interfaces"

interface ProdutosProps {
  products: Products[]
  routeIsActive?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Product = ({ products, routeIsActive }: ProdutosProps) => {
  const a : number[] = [1,2,3,4,5] 
  return (<div className="flex flex-wrap gap-6">

    {a.map((a) => (
      <div key={a} className="bg-gray-300 h-[174px] w-[167px]">
        <h1>oiiii</h1>
      </div>

))}
</div>
  )
}

export default Product

