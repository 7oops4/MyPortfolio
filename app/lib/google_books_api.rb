module GoogleBooksApi
  def get_json_from_url(url)
    # urlをURIの仕様にもとづいてエンコードし、JSONを返す
    JSON.parse(Net::HTTP.get(URI.parse(Addressable::URI.encode(url))))
  end

  # 検索するAPIを叩く
  def url_of_searching_from_keyword(keyword)
    "https://www.googleapis.com/books/v1/volumes?q=#{keyword}&country=JP&maxResults=8"
  end
end
