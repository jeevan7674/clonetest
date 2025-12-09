import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export const ProductCard = ({
  product,
  onAddToCart,
  onProductClick,
  onToggleWishlist,
  isInWishlist
}) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-card-hover transition-smooth">
      <button
        onClick={() => onProductClick(product)}
        className="w-full text-left"
      >
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-muted relative">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={e => {
                e.stopPropagation()
                onToggleWishlist(product)
              }}
              className={cn(
                "absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-smooth",
                isInWishlist && "text-destructive hover:text-destructive"
              )}
            >
              <Heart
                className={cn(
                  "h-5 w-5 transition-all",
                  isInWishlist && "fill-current"
                )}
              />
            </Button>
          </div>
          <div className="p-4 space-y-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </CardContent>
      </button>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-display text-2xl font-bold text-primary">
          {product.price.toFixed(2)}/-
        </span>
        <Button
          onClick={e => {
            e.stopPropagation()
            onAddToCart(product)
          }}
          variant="default"
          size="sm"
          className="bg-primary hover:bg-primary/90"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  )
}
