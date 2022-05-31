require 'test_helper'

class DrumKitControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get drum_kit_index_url
    assert_response :success
  end

end
