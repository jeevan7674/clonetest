import React from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, X, ShoppingCart } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export const WishlistDrawer = ({
  wishlist,
  wishlistCount,
  onRemoveItem,
  onClearWishlist,
  onAddToCart,
  onProductClick
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-border hover:bg-accent"
        >
          <Heart className="h-5 w-5" />
          {wishlistCount > 0 && (
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {wishlistCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">My Wishlist</SheetTitle>
        </SheetHeader>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Your wishlist is empty</p>
            <p className="text-sm text-muted-foreground mt-2">
              Add items you love to save them for later
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4 my-6">
              <div className="space-y-4">
                {wishlist.map(item => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-border group"
                  >
                    <button
                      onClick={() => onProductClick(item)}
                      className="h-24 w-24 rounded-md overflow-hidden bg-muted flex-shrink-0 transition-smooth hover:scale-105"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <button
                          onClick={() => onProductClick(item)}
                          className="text-left"
                        >
                          <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                        </button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                          className="h-8 w-8 p-0 -mt-1 -mr-2"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-display text-lg font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => onAddToCart(item)}
                          className="bg-secondary hover:bg-secondary/90"
                        >
                          <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={onClearWishlist}
              >
                Clear Wishlist
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
