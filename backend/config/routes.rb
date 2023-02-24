Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :holidays, only: %i[index show create] do
        resources :albums, only: %i[index]
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
