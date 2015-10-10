require 'models/mail'

module GitRec
  module Gateways
    # receives commits and returns mail-text
    class CommitsToMailGateway
      def initialize(commits)
        @commits = commits
      end

      def mail(from, to)
        messages = @commits.map do |e|
          [e.url, e.commit.message].join("\n")
        end
        message = messages.join("\n")
        GitRec::Models::Mail.new.tap do |m|
          m.from = from
          m.to = to
          m.message = message
        end
      end
    end
  end
end
