Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # root 'books#show'
  root 'books#index'
  resources :users, only: [:edit, :update]
  namespace :books do
    resources :searches, only: [:new, :create]
  end
  resources :books
end
