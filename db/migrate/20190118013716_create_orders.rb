class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :firstName
      t.string :middleName
      t.string :lastName
      t.string :address
      t.string :city
      t.string :zipcode
      t.string :state
      t.string :phone
      t.string :email
      t.integer :qty
      t.text :comment
    
      t.timestamps
    end
  end
end
