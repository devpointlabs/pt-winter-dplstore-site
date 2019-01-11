class Product < ApplicationRecord
  has_many :orders
  validates :name, :description, :price, :stock, :image
  validates :capacity, numberically: { greater_than_or_equal_to: 0, less_than_or_equal_to: 520000 }
end
