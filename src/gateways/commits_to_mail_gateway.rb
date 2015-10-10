require 'models/mail'

module GitRec
  module Gateways
    # receives commits and returns mail-text
    class CommitsToMailGateway
      def initialize(commits)
        @commits = commits
      end

      def mail(from, to)
        messages = @commits.map { |e| map_to_mail(e) }
        message = messages.join("\n")
        GitRec::Models::Mail.new.tap do |m|
          m.from = from
          m.to = to
          m.message = message
        end
      end

      def map_to_mail(e)
        "* #{e.commit.message.split("\n").select{ |l| !l.empty? }.map do |line|
          "[#{line}](#{e.url})"
        end.join("\n")}\n"
      end
    end
  end
end
