require 'sinatra'

$LOAD_PATH.unshift(File.dirname(File.expand_path(__FILE__)) + '/src/')

require 'services/mail_service'
require 'services/commits_service'

module GitRec
  # routing
  class App < Sinatra::Base
    enable :sessions

    require 'dotenv'
    Dotenv.load

    def html(view)
      File.read(File.join('public', "#{view}.html"))
    end

    get '/' do
      html :index
    end

    get '/mail/:owner/:repo' do
      commits = GitRec::Services::CommitsService.new('hkdnet', 'komonjo').exec
      GitRec::Services::MailService.new(commits).exec
      'GitRec report was sent successfully :)'
    end
  end
end
