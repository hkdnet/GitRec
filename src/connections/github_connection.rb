require 'open-uri'
require 'json'

module GitRec
  module Connections
    # connection to GitHub
    class GitHubConnection
      def user(name)
        fetch("/users/#{name}")
      end

      def commits(owner, repo, author: nil, date: nil)
        url = "/repos/#{owner}/#{repo}/commits?" \
              "#{author_query(author)}" \
              "#{date_query(date)}"
        fetch(url)
      end

      private

      def fetch(path)
        res = open(base_url + path)
        code, message = res.status # res.status => ["200", "OK"]
        fail "OMG!! #{code} #{message}" if code != '200'
        JSON[res.read]
      end

      def base_url
        'https://api.github.com'
      end

      def author_query(author)
        author.nil? ? '' : "author=#{author}&"
      end

      def date_query(date)
        date = Date.today unless date
        since_date = date.to_datetime.iso8601
        until_date = (date + 1).to_datetime.iso8601
        since.nil? ? '' : "since=#{since_date}&until=#{until_date}"
      end
    end
  end
end
