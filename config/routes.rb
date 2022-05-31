Rails.application.routes.draw do
  get 'drum_kit/index'
  root 'drum_kit#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
