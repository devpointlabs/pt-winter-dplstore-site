class CreateInvoices < ActiveRecord::Migration[5.2]
  def change
    create_table :invoices do |t|
      t.belongs_to :product, foreign_key: true
      t.belongs_to :order, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.string :transactionId
    t.timestamps
    end
  end
end
