class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
    # @book.users << current_user
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to root_path, notice: '本の登録をしました！'
    else
      render :new
    end
  end

  def show
    @book = Book.find(params[:id])
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    if @book.update(book_params)
      redirect_to book_path(@book.id), notice: '本の登録内容を更新しました'
    else
      render :show
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :image, :total_page_count).merge(user_id: current_user.id)
  end
end
