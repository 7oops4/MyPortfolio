class CreatePublishers < ActiveRecord::Migration[5.2]
  def change
    create_table :publishers do |t|
      t.references :book, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
