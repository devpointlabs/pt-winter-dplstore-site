class Product < ApplicationRecord
  has_many :orders
  validates :name, :description, :price, :stock, :image, presence: true 
  validates :stock, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 520000 }
end
