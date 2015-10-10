require 'net/smtp'

module GitRec
  module Connections
    # send email
    class MailSender
      def send(mail)
        send_mail(mail.raw_text, mail.to, mail.from)
      end

      private

      def send_mail(raw_text, to, from)
        Net::SMTP.start(ENV['domain'],
                        ENV['port'].to_i,
                        ENV['address'],
                        ENV['user_name'],
                        ENV['password'],
                        ENV['authentication']) do |smtp|
          smtp.send_message(raw_text, to, from)
        end
      end
    end
  end
end
