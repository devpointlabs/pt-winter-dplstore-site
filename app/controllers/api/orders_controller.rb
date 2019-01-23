class Api::OrdersController < ApplicationController

  def index
    render json: Order.all
  end 

  def show
    @order = Order.find(params[:id])
    render json: @order
  end 
end
