class Holiday < ApplicationRecord
  has_one :album

  validates :title, presence: true
  validates :location, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :description, presence: true
  validates :image, presence: true
end
