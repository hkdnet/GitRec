require 'connections/github_connection'

conn = GitRec::Connections::GitHubConnection.new

describe GitRec::Connections::GitHubConnection do
  describe '#author_query' do
    it 'should return empty with nil' do
      assert { conn.send(:author_query, nil) == '' }
    end

    it 'should return GET parameter with not-nil' do
      assert { conn.send(:author_query, 'hoge') == 'author=hoge&' }
    end
  end

  describe '#date_query' do
    it 'should return empty with nil' do
      assert { conn.send(:date_query, nil, nil) == '' }
    end
  end
end
