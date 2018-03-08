class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: 422
    end
end
