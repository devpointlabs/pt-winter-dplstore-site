class Order < ApplicationRecord
  has_many :invoices
  has_many :products, through: :invoices
end
