import React, { useState, useMemo } from "react"
import { ProductCard } from "@/components/ProductCard"
import { SearchBar } from "@/components/SearchBar"
import { FilterBar } from "@/components/FilterBar"
import { CartDrawer } from "@/components/CartDrawer"
import { WishlistDrawer } from "@/components/WishlistDrawer"
import { ProductDetailModal } from "@/components/ProductDetailModal"
import { useCart } from "@/hooks/useCart"
import { useWishlist } from "@/hooks/useWishlist"
import { products, categories } from "@/data/products"

const JeeSum = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOption, setSortOption] = useState("name-asc")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  } = useCart()

  const {
    wishlist,
    toggleWishlist,
    isInWishlist,
    removeFromWishlist,
    clearWishlist,
    wishlistCount
  } = useWishlist()

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

    return sorted
  }, [searchQuery, selectedCategory, sortOption])

  const handleProductClick = product => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Small delay before clearing to allow smooth modal exit animation
    setTimeout(() => setSelectedProduct(null), 200)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">
                JeeSum
              </h1>
              <div className="flex items-center gap-3">
                <WishlistDrawer
                  wishlist={wishlist}
                  wishlistCount={wishlistCount}
                  onRemoveItem={removeFromWishlist}
                  onClearWishlist={clearWishlist}
                  onAddToCart={addToCart}
                  onProductClick={handleProductClick}
                />
                <div className="hidden sm:block text-sm text-muted-foreground">
                  {filteredAndSortedProducts.length} products
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <FilterBar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                sortOption={sortOption}
                onSortChange={setSortOption}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-12">
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onProductClick={handleProductClick}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist(product.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={addToCart}
        allProducts={products}
        onProductClick={handleProductClick}
      />

      {/* Cart Drawer */}
      <CartDrawer
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  )
}

export default JeeSum
