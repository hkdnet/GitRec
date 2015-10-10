require 'connections/github_connection'
require 'models/github_repository'
require 'gateways/commits_gateway'

module GitRec
  module Services
    # service which fetches commit logs
    class CommitsService
      def initialize(owner, name)
        @repo = GitRec::Models::GitHubRepository.new
        @repo.owner = owner
        @repo.name = name
      end

      def exec(filter_author: nil, filter_since: nil, filter_until: nil)
        @repo.filter_author = filter_author
        @repo.filter_since = filter_since
        @repo.filter_until = filter_until
        commits_hash = fetch
        GitRec::Gateways::CommitsGateway.new(commits_hash).commits
      end

      def fetch
        conn = GitRec::Connections::GitHubConnection.new
        conn.commits(@repo.owner,
                     @repo.name,
                     author: @repo.filter_author,
                     since_date: @repo.filter_since,
                     until_date: @repo.filter_until)
      end
    end
  end
end
