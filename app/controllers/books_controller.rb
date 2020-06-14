class BooksController < ApplicationController
  before_action :move_to_index, except: :index

  def index
    @books = Book.includes(:user).where(user_id: current_user.id)
    # includes(:user).order("created_at DESC").page(params[:page]).per(5)
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to root_path, notice: '本を登録しました'
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

  def destroy
    book_info = Book.find(params[:id])
    if book_info.destroy
      redirect_to root_path, notice: '登録された本情報を削除しました'
    else
      render :show
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :image, :total_page_count).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
