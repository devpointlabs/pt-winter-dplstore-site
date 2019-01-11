20.times do
  Product.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_f,
    description: Faker::Commerce.material,
    stock: 1 + rand(10),
    image: Faker::Avatar.image
  )
end
