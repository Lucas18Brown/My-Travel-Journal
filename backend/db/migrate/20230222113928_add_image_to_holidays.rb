class AddImageToHolidays < ActiveRecord::Migration[7.0]
  def change
    add_column :holidays, :image, :string
  end
end
