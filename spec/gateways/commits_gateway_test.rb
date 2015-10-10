require 'gateways/commits_gateway'
require 'models/github_repository'

describe GitRec::Gateways::CommitsGateway do
  describe '#commits' do
    repo = GitRec::Models::GitHubRepository.new
    repo.owner = 'hkdnet'
    repo.name = 'komonjo'
    gw = GitRec::Gateways::CommitsGateway.new(repo)
    gw.commits
  end
end
