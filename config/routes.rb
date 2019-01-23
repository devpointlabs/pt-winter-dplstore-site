Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :invoices
    resources :orders
  end
  
end
