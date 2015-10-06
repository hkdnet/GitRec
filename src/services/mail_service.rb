require 'connections/mail_sender'
require 'models/mail'

module GitRec
  module Services
    # send mail
    class MailService
      def exec
        GitRec::Connections::MailSender.new.send(mail)
      end

      def mail
        GitRec::Models::Mail.new.tap do |e|
          e.message = message
          e.from =  'from@mailtrap.io'
          e.to = 'to@mailtrap.io'
        end
      end

      def message
        <<-END.split("\n").map!(&:strip).join("\n")
From: Private Person <from@mailtrap.io>
To: A Test User <to@mailtrap.io>
Subject: Hello world!

This is a test e-mail message.
END
      end
    end
  end
end
