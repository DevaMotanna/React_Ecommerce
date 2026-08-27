import React from 'react'
import Container from '../common/Container'
import SectionHeader from './SectionHeader'
import categories from "../../data/categories.json"
import CategoryCard from './CategoryCard'

const FeatureCategories = () => {
  return (
    <section id="featured-categories" className='py-16 md:py-20 bg-white'>
        <Container>
            <SectionHeader
          badge="Top Categories"
          title="Shop by category"
          description="Explore handpicked collections across the most popular categories in our store."
        />
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((category) =>(
                <CategoryCard category={category} />
            ))}
        </div>
        </Container>
    </section>
  )
}

export default FeatureCategories