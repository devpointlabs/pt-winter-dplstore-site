20.times do
  Product.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_f,
    description: Faker::Commerce.material,
    stock: 1 + rand(10),
    image: Faker::Avatar.image,
    hidden: false, 
    featured: false,
  )
end

5.times do
  order = Order.create(
    firstName: Faker::Name.first_name,
    middleName: Faker::Name.middle_name,
    lastName: Faker::Name.last_name,
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    zipcode: Faker::Address.zip,
    state: Faker::Address.state,
    phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email
  )
    Invoice.create(
      product_id: rand(1..20),
      order_id: order.id,
      transactionId: Faker::Number.number(8)
    )
end

puts "seeded successfully"