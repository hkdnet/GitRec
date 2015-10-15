require 'open-uri'
require 'json'

module GitRec
  module Connections
    # connection to GitHub
    class GitHubConnection
      def user(name)
        fetch("/users/#{name}")
      end

      def commits(owner, repo, author: nil, since_date: nil, until_date: nil)
        url = "/repos/#{owner}/#{repo}/commits?" \
              "#{author_query(author)}" \
              "#{date_query(since_date, until_date)}"
        puts url
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

      def date_query(since_date, until_date)
        query = ''
        unless since_date.nil?
          since_str = since_date.to_datetime.iso8601
          query += "&since=#{since_str}"
        end
        unless until_date.nil?
          until_str = until_date.to_datetime.iso8601
          query += "&until=#{until_str}"
        end
        query
      end
    end
  end
end
