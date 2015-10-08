module GitRec
  module Models
    # model which represents a GtiHub Repository
    class GitHubRepository
      attr_accessor :owner, :name, :filter_author, :filter_since, :filter_until
    end
  end
end
