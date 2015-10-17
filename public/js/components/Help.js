'use strict'

import React from 'react';
import { Button, Grid, Row, Col, Label } from 'react-bootstrap';

export default class Help extends React.Component {
  render() {
    return (
      <div>
        <h2>How to Use</h2>
        <section>
          <ul>
            <li>GitHubレポジトリを指定します。 例: hkdnet/GitRec</li>
            <li>日付フィルタを指定します。デフォルトは直近1週間です。</li>
            <li>コミッタフィルタを指定します。ない場合はレポジトリの全ログを取得します。</li>
            <li>送信ボタンをクリックします。</li>
          </ul>
        </section>
      </div>
    )
  }
}
