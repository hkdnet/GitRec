module GitRec
  module Models
    # GitHubCommit. Only with message
    class GitHubCommit
      attr_accessor :message
    end
  end
end

__END__
"commit": {
  "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
  "author": {
    "name": "Monalisa Octocat",
    "email": "support@github.com",
    "date": "2011-04-14T16:00:49Z"
  },
  "committer": {
    "name": "Monalisa Octocat",
    "email": "support@github.com",
    "date": "2011-04-14T16:00:49Z"
  },
  "message": "Fix all the bugs",
  "tree": {
    "url": "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
  },
  "comment_count": 0
}
