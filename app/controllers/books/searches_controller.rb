class SearchBooksForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :keyword, :string, default: ""
end

class Books::SearchesController < ApplicationController
  include GoogleBooksApi

  def new
    # keyword = ""
    @result = Book.new
    # フォームに入力されたキーワードを取得してserch_formに格納
    @search_form = SearchBooksForm.new(search_books_params)
    @results = GoogleBook.search(@search_form.keyword)
  end

  def create
    @result = Book.new(regist_book_params)
    if @result.save
      redirect_to root_path, notice: '本を登録しました'
    else
      render :new
    end
  end

  private
  def search_books_params
    params.fetch(:q, :keyword => "").permit(:keyword)
  end

  def regist_book_params
    params.require(:book).permit(:googlebooksapi_id, :title, :image, :author, :published_at, :total_page_count).merge(user_id: current_user.id)
  end
end
