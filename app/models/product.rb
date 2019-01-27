class Product < ApplicationRecord
  validates :name, :description, :price, :stock, :image, presence: true 
  validates :stock, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 520000 }
  has_many :invoices
  has_many :orders, through: :invoices
end
