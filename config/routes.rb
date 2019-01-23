Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :invoices
    resources :orders
    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
    put 'products/:id/hidden', to: 'products#hiddenUpdate'
  end
end