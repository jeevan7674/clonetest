import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full sm:w-[200px] bg-card border-border">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border">
          {categories.map(category => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sortOption} onValueChange={value => onSortChange(value)}>
        <SelectTrigger className="w-full sm:w-[200px] bg-card border-border">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border">
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="name-asc">Name: A to Z</SelectItem>
          <SelectItem value="name-desc">Name: Z to A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
