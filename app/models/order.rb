class Order < ApplicationRecord
  has_many :products, through: :invoice
end
