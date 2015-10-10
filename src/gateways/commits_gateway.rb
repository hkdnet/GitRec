require 'extensions/hash_extensions'
require 'models/github_repository_commit'
require 'models/github_commit'

module GitRec
  module Gateways
    # a gateway for GitHubCommits
    class CommitsGateway
      using GitRec::Extensions::HashExtensions
      def initialize(hash_commits)
        @hash_commits = hash_commits
      end

      def commits
        @hash_commits.map { |e| map_to_model(e) }
      end

      def map_to_model(e)
        GitRec::Models::GitHubRepositoryCommit.new.tap do |r|
          r.url = e['url']
          r.commit = GitRec::Models::GitHubCommit.new.tap do |commit|
            commit.message = e['commit']['message']
          end
        end
      end
    end
  end
end
