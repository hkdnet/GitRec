require 'connections/github_connection'
require 'models/github_repository'

module GitRec
  module Services
    # service which fetches commit logs
    class CommitsService
      def exec(repo)
        conn = GitRec::Connections::GitHubConnection
        conn.commits(repo.owner,
                     repo.name,
                     repo.filter_author,
                     repo.filter_since,
                     repo.filter_until)
      end
    end
  end
end
