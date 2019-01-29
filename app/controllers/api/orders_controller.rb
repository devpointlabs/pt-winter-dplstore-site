class Api::OrdersController < ApplicationController

  def index
    render json: Order.all
  end 

  def show
    @order = Order.find(params[:id])
    render json: @order
  end 

  def create
    order = Order.new(order_params)
    if order.save
      render json: order
    else
      render json: order.errors, status: 422
    end
  end 

  private
  def set_order
    @order = Order.find(params[:id])
  end  

  def order_params
    params.required(:order).permit(:firstName, :middleName, :lastName, :address, :city, :zipcode, :state, :phone, :email)
  end
end
