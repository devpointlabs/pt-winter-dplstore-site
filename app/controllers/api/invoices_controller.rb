class Api::InvoicesController < ApplicationController

  def index
    render json: Invoice.all
  end 

  def show
    @invoice = Invoice.find(params[:id])
    render json: @invoice
  end 
end
