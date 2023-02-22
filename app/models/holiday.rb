class Holiday < ApplicationRecord
  has_one :album
  has_one :image
end
