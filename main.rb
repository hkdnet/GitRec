$LOAD_PATH.unshift(File.dirname(File.expand_path(__FILE__)) + '/src/')

require 'dotenv'
Dotenv.load

require 'services/mail_service'

module GitRec
  # main
  class Main
    def main
      GitRec::Services::MailService.new.exec
    end
  end
end

GitRec::Main.new.main
