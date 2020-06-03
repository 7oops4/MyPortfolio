class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :subtitle
      t.text   :image
      t.integer :total_page_count
      t.integer :already_read_page_count
      t.integer :sales_date
      t.integer :author_id, foreign_key: true
      t.integer :genre_id, foreign_key: true
      t.integer :publisher_id, foreign_key: true
      t.timestamps
    end
  end
end
