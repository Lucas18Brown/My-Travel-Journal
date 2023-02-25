class RemoveForeignKey < ActiveRecord::Migration[7.0]
  def change
    remove_reference :holidays, :album, foreign_key: true, index: false
  end
end
