class Api::InvoicesController < ApplicationController

  def index
    render json: Invoice.all
  end 

  def show
    @invoice = Invoice.find(params[:id])
    render json: @invoice
  end 

  def create
    invoice = Invoice.new(invoice_params)
    if invoice.save
      render json: invoice
    else
      render json: invoice.errors, status: 422
    end
  end 

  private
    def set_order
      @order = Order.find(params[:order_id])
    end
      
    def set_invoice
      @invoice = Invoice.find(params[:id])
    end  

    def invoice_params
      params.required(:invoice).permit(:transactionId, :order_id)
    end
end
