
import Container from '../common/Container';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import products from '../../data/products.json'
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

const FeatureProducts = () => {

    const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

  return (
    <section className='py-16 md:py-20 bg-gray-50'>
        <Container>
            <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10'>
                <SectionHeader 
                badge="Best Picks"
                title="Feature Products"
                description="Browse top-rated products selected to give your storefront a premium and trustworthy feel.."
                />
                <Link to="/products">
                    <Button>View All Products</Button>
                </Link>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {featuredProducts.map(product => (
               <ProductCard product={product}/>
            ))}
            </div>
        </Container>
    </section>
  )
}

export default FeatureProducts;