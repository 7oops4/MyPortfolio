class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :googlebooksapi_id
      t.string :title, null: false
      t.text   :image
      t.string :author
      t.string :published_at
      t.integer :total_page_count
      t.integer :already_read_page_count
      t.timestamps
    end
  end
end
