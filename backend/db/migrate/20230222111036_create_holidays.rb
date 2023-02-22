class CreateHolidays < ActiveRecord::Migration[7.0]
  def change
    create_table :holidays do |t|
      t.string :title
      t.string :location
      t.string :google_map_url
      t.string :start_date
      t.string :end_date
      t.string :description

      t.timestamps
    end
  end
end
