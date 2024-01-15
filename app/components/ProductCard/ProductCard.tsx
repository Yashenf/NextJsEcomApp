import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden shadow-lg">
      <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.category}
        </span>
      </div>
    </div>
  )
}

export default ProductCard 