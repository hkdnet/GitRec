require 'nkf'

module GitRec
  module Models
    # dto which represents a mail
    class Mail
      attr_accessor :message, :from, :to

      # rubocop:disable MethodLength
      def raw_text
        <<-END
From: GitRecReport <#{@from}>
To: いつもがんばってる君へ <#{@to}>
Subject: #{NKF.nkf('-jWM', '[GitRec]がんばりレポート')}
Date: #{Time.now.strftime('%a, %d %b %Y %X %z')}
Mime-Version: 1.0
Content-Type: text/plain; charset=ISO-2022-JP
Content-Transfer-Encoding: 7bit

こんにちは、元気してる？今週のレポートだよ。

----
#{@message}
----

以上だよ。来週もまたがんばろうね！

END
      end
      # rubocop:enable MethodLength
    end
  end
end
