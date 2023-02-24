class Holiday < ApplicationRecord
  has_one :album

  has_many_attached :pictures

  validates :title, presence: true
  validates :location, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :description, presence: true
  validates :image, presence: true

  def pictures_urls
    if pictures.attached?
      pictures.map do |picture|
        Rails.application.routes.url_helpers.url_for(picture)
      end
    end
  end
end
