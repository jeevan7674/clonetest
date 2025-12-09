import { useState, useEffect } from "react"
import { toast } from "@/hooks/use-toast"

const WISHLIST_STORAGE_KEY = "wishlist"

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = product => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev
      }
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`
      })
      return [...prev, product]
    })
  }

  const removeFromWishlist = productId => {
    setWishlist(prev => prev.filter(item => item.id !== productId))
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist"
    })
  }

  const toggleWishlist = product => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const isInWishlist = productId => {
    return wishlist.some(item => item.id === productId)
  }

  const clearWishlist = () => {
    setWishlist([])
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist"
    })
  }

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: wishlist.length
  }
}
