Rails.application.routes.draw do
  devise_for :users
  # root 'books#show'
  root 'intls#index'
  resources :users, only: [:edit, :update]
  resources :books, only: [:index, :new, :create, :edit, :update, :show]
end
