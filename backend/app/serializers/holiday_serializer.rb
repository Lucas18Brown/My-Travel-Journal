class HolidaySerializer
  include JSONAPI::Serializer
  attributes :id, :title, :pictures, :created_at, :updated_at, :pictures_urls
end
