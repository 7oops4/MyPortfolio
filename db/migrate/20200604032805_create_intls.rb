class CreateIntls < ActiveRecord::Migration[5.2]
  def change
    create_table :intls do |t|

      t.timestamps
    end
  end
end
