class AddReferenceToHolidays < ActiveRecord::Migration[7.0]
  def change
    add_reference :holidays, :album, foreign_key: true
  end
end
