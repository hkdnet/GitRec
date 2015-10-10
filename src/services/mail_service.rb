require 'connections/mail_sender'
require 'models/mail'

module GitRec
  module Services
    # send mail
    class MailService
      def exec(text)
        GitRec::Connections::MailSender.new.send(mail(text))
      end

      def mail(text)
        GitRec::Models::Mail.new.tap do |e|
          e.message = message(text)
          e.from =  'from@mailtrap.io'
          e.to = 'to@mailtrap.io'
        end
      end

      def message(text)
        m = <<-END
From: Private Person <from@mailtrap.io>
To: A Test User <to@mailtrap.io>
Subject: Hello world!


END
        (m + text).split("\n").map!(&:strip).join("\n")
      end
    end
  end
end
