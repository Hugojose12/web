class WelconeController < ApplicationController

  def index
  	@messages = Message.new
  end
end
