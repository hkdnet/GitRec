require 'open-uri'
require 'json'

module GitRec
  module Connections
    # connection to GitHub
    class GitHubConnection
      def user(name)
        fetch("/users/#{name}")
      end

      def commits(owner, repo)
        fetch("/repos/#{owner}/#{repo}/commits")
      end

      def fetch(path)
        res = open(base_url + path)
        code, message = res.status # res.status => ["200", "OK"]

        if code != '200'
          puts "OMG!! #{code} #{message}"
          return
        end
        result = res.read
        JSON[result]
      end

      def base_url
        'https://api.github.com'
      end
    end
  end
end
