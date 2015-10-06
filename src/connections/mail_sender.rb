require 'net/smtp'

module GitRec
  module Connections
    # send email
    class MailSender
      def send(mail)
        send_mail(mail.message, mail.to, mail.from)
      end

      private

      def send_mail(message, to, from)
        Net::SMTP.start(ENV['domain'],
                        ENV['port'].to_i,
                        ENV['address'],
                        ENV['user_name'],
                        ENV['password'],
                        ENV['authentication']) do |smtp|
          smtp.send_message message, to, from
        end
      end
    end
  end
end
