Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :products
    resources :invoices
    resources :orders
    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
    put 'products/:id/hidden', to: 'products#hiddenUpdate'
    put 'products/:id/featured', to: 'products#featuredUpdate'

    get '*other', to: 'static#index'
  end

  # namespace :api do
  #   resources :products do
  #     resources :invoices
  #   end
  #   resources :orders do
  #     resources :invoices
  #   end
  #   post '/cart_items', to: 'products#cart_items'
  # end


  # get '*other', to: 'static#index'
end