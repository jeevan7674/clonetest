import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart } from "lucide-react"
import { getRelatedProducts } from "@/utils/productUtils"

export const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  allProducts,
  onProductClick
}) => {
  if (!product) return null

  const relatedProducts = getRelatedProducts(product, allProducts)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-card border-border">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 space-y-6">
            {/* Header */}
            <DialogHeader>
              <DialogTitle className="font-display text-3xl text-foreground">
                {product.name}
              </DialogTitle>
              <Badge variant="secondary" className="w-fit mt-2">
                {product.category}
              </Badge>
            </DialogHeader>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                {/* Price and Add to Cart */}
                <div className="space-y-4">
                  <div className="font-display text-4xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </div>
                  <Button
                    onClick={() => {
                      onAddToCart(product)
                    }}
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>

                <Separator />

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-semibold">
                    Description
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications */}
                {product.specifications && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-semibold">
                        Specifications
                      </h3>
                      <dl className="space-y-2">
                        {Object.entries(product.specifications).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between py-2"
                            >
                              <dt className="text-sm font-medium text-muted-foreground">
                                {key}
                              </dt>
                              <dd className="text-sm text-foreground">
                                {value}
                              </dd>
                            </div>
                          )
                        )}
                      </dl>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <>
                <Separator className="my-8" />
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-semibold">
                    You May Also Like
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {relatedProducts.map(relatedProduct => (
                      <button
                        key={relatedProduct.id}
                        onClick={() => onProductClick(relatedProduct)}
                        className="group text-left transition-smooth hover:scale-105"
                      >
                        <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-2">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                          />
                        </div>
                        <h4 className="font-medium text-sm line-clamp-1">
                          {relatedProduct.name}
                        </h4>
                        <p className="font-display text-lg font-bold text-primary">
                          ${relatedProduct.price.toFixed(2)}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
