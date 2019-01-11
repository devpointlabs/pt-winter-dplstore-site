class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.string :description
      t.integer :stock
      t.string :image

      t.timestamps
    end
  end
end
