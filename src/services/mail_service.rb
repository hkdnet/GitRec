require 'connections/mail_sender'
require 'gateways/commits_to_mail_gateway'

module GitRec
  module Services
    # send mail
    class MailService
      def initialize(commits)
        @commits = commits
      end

      def exec
        GitRec::Connections::MailSender.new.send(mail)
      end

      def mail
        service = GitRec::Gateways::CommitsToMailGateway.new(@commits)
        service.mail(ENV['from_address'], ENV['to_address'])
      end
    end
  end
end
