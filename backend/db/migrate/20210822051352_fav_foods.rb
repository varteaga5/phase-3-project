class FavFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :fav_foods do |t|
      t.string :name
      t.integer :category_id
    end
  end
end
