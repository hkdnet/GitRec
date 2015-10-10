$LOAD_PATH.unshift(File.dirname(File.expand_path(__FILE__)) + '/src/')

require 'dotenv'
Dotenv.load

require 'services/mail_service'
require 'services/commits_service'

module GitRec
  # main
  class Main
    def main
      commits = fetch_commits
      send_mail(commits)
    end

    def fetch_commits
      service = GitRec::Services::CommitsService.new('hkdnet', 'komonjo')
      service.exec
    end

    def send_mail(commits)
      service = GitRec::Services::MailService.new(commits)
      service.exec
    end
  end
end

GitRec::Main.new.main
