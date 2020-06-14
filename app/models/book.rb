class Book < ApplicationRecord
  def substitute_for_googlebook(google_book)
    self.googlebooksapi_id = google_book.googlebooksapi_id
    self.title = google_book.title
    self.image = google_book.image
    self.author = google_book.author
    self.published_at = google_book.publisher
    self.total_page_count = google_book.total_page_count
    self
  end

  belongs_to :user
  # validates :googlebooksapi_id, uniqueness: true
  # validates :title, uniqueness: true
  # validates :image, uniqueness: true
end
