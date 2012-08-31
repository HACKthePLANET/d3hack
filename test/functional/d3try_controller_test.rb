require 'test_helper'

class D3tryControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
