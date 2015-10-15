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

    get '/mail' do
      owner = params[:owner]
      repo = params[:repo]
      since_date = time_for(params[:since_date])
      until_date = time_for(params[:until_date])
      author = params[:author]
      service = GitRec::Services::CommitsService.new(owner, repo)
      commits = service.exec(filter_since: since_date,
                             filter_until: until_date,
                             filter_author: author)
      GitRec::Services::MailService.new(commits).exec
      'GitRec report was sent successfully :)'
    end
  end
end
