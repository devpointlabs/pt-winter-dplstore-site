require 'test_helper'

class Api::BraintreeControllerTest < ActionDispatch::IntegrationTest
  test "should get token" do
    get api_braintree_token_url
    assert_response :success
  end

  test "should get payment" do
    get api_braintree_payment_url
    assert_response :success
  end

end
