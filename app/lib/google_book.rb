class GoogleBook
  class << self
    include GoogleBooksApi

    def new_from_item(item)
      @item = item
      @volume_info = @item['volumeInfo']
      hash = {}
      hash.store(:googlebooksapi_id, @item['id'])
      hash.store(:title, @volume_info['title'])
      hash.store(:image, image_url)
      hash.store(:author, @volume_info['authors'])
      hash.store(:publisher, @volume_info['publisher'])
      hash.store(:total_page_count, @volume_info['pageCount'].to_i)
      return hash
    end

    def search(keyword)
      # フォームに入力されたキーワードが渡される
      # キーワードを元にGoogleAPIを叩く
      url = url_of_searching_from_keyword(keyword)
      # GoogleAPIを叩いた時に取得できるjsonデータを格納する
      json = get_json_from_url(url)
      items = json['items']
      return [] unless items
      items.map do |item|
        @book_info = GoogleBook.new_from_item(item)
      end
    end

    private
    def image_url
      @volume_info['imageLinks']['smallThumbnail'] if @volume_info['imageLinks'].present?
    end
  end
end
