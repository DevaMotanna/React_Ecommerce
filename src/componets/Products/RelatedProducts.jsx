import ProductCard from '../Home/ProductCard'

const RelatedProducts = ({products}) => {

    if(!products.length) return null;
  return (
    <section className="mt-16">
        <h2 className="text-2xl text-gray-900 dark:text-white mb-2">Related Products</h2>
        <div className="grid sm:grid-col-2 xl:grid-cols-4 gap-5">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </section>
  )
}

export default RelatedProducts