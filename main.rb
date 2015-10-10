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
      commit_messages = commits.map { |e| e.commit.message }
      text = commit_messages.join("\n")
      GitRec::Services::MailService.new.exec(text)
    end

    def fetch_commits
      service = GitRec::Services::CommitsService.new('hkdnet', 'komonjo')
      service.exec
    end
  end
end

GitRec::Main.new.main
