Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :invoices
    resources :orders
    put 'products/:id/hidden', to: 'products#hiddenUpdate'
  end
  
end
