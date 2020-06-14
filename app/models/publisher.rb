class Publisher < ApplicationRecord
  validates :name, uniqueness: true
end
