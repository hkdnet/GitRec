require 'nkf'
require 'redcarpet'

module GitRec
  module Models
    # dto which represents a mail
    class Mail
      attr_accessor :message, :from, :to

      # rubocop:disable MethodLength
      def raw_text
        md = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
        <<-EOS
From: GitRecReport <#{@from}>
To: いつもがんばってる君へ <#{@to}>
Subject: #{NKF.nkf('-jWM', '[GitRec]がんばりレポート')}
Date: #{Time.now.strftime('%a, %d %b %Y %X %z')}
Mime-Version: 1.0
Content-Type: text/html; charset=ISO-2022-JP
Content-Transfer-Encoding: 7bit

<html>
<body>
#{md.render(markdown_message)}
</body>
</html>
EOS
      end
      # rubocop:enable MethodLength

      def markdown_message
        <<-EOS
## 今週のレポートだよ。

----

#{@message}

----

以上だよ。来週もまたがんばろうね！
EOS
      end
    end
  end
end
