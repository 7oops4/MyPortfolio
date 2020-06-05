Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # root 'books#show'
  root 'books#index'
  resources :users, only: [:edit, :update]
  resources :books, only: [:index, :new, :create, :edit, :update, :show]
end
