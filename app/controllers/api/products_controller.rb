class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy, :hiddenUpdate, :featuredUpdate]

  def index
    render json: Product.all
  end 

  def show
    render json: @product 
  end 

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: product.errors, status: 422
    end
  end 

  def update
    if @product.update(product_params)
      render json: @product
    else 
      render json: @product.errors, status: 422
    end 
  end 

  def hiddenUpdate
    if @product.update(hidden: !@product.hidden)
      render json: @product
    else
      render json: @product.errors, status: 422
    end
  end

  def featuredUpdate
    if @product.update(featured: !@product.featured)
      render json: @product
    else
      render json: @product.errors, status: 422
    end
  end
    
  def destroy
    @product.destroy
  end 

  private
    def set_product
      @product = Product.find(params[:id])
    end  

    def product_params
      params.required(:product).permit(:name, :price, :description, :stock, :image, :featured, :hidden)
    end
end
