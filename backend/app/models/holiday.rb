class Holiday < ApplicationRecord
  has_one :album
  # has_one_attached :image
end
