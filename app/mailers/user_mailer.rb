class UserMailer < ApplicationMailer 
 default from: "from@example.com"

  def welcome_email(message)
    @message = message
    mail(to: 'hugo200440@gmail.com', subject: 'Mensaje nuevo en la web')
  end
end
