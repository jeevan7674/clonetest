import { useState, useEffect } from "react"
import { toast } from "@/hooks/use-toast"

const CART_STORAGE_KEY = "shopping-cart"

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        toast({
          title: "Updated cart",
          description: `Increased ${product.name} quantity`
        })
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`
      })
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = productId => {
    setCart(prev => prev.filter(item => item.id !== productId))
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart"
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setCart([])
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart"
    })
  }

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  }
}
