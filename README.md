# Todoリスト

シンプルな Todo リストアプリです。メールアドレスでログインすると、タスクが Firebase（Firestore）に保存されて端末間で同期されます。

公開 URL: <https://keigo-hisazumi.github.io/task-list/>

## 主な機能

- メールアドレス / パスワードによるユーザー登録とログイン
- タスクの追加・編集・削除
- タスクの完了 / 未完了の切り替え
- 完了済みタスクの一括削除
- 進捗の表示（完了率と「完了数 / 合計」、プログレスバー）
- Firestore によるタスクのリアルタイム同期（端末にもキャッシュして起動時に表示）
- ホーム画面に追加したアプリのアイコンに未完了タスク数をバッジ表示（対応ブラウザのみ）

## 使い方

1. メールアドレスとパスワード（6 文字以上）で新規登録またはログインする
2. 右下の「＋」ボタンからタスクを追加する
3. チェックボックスで完了 / 未完了を切り替える
4. タスクをタップすると編集パネルが開き、内容の変更や削除ができる（パネルは下にスワイプしても閉じられる）
5. 右上のメニューからログアウトする

## アプリのバッジ表示

- 未完了タスク数を Badging API でアプリのアイコンに表示します。iOS ではバックグラウンド移行後にバッジが消えることがあるため、Service Worker（`public/sw.js`）からも設定しています
- 通知の許可が拒否されている場合は、画面上部に許可を促すメッセージを表示します

## 技術スタック

- TypeScript
- React
- Vite
- Firebase（Authentication / Firestore）
- ESLint
- GitHub Pages（ホスティング）

## 開発

### 必要な環境

- Node.js 22（`package.json` の `engines` は `^20.19.0 || >=22.12.0`、CI・デプロイのワークフローは 22）
- npm

### コマンド

```bash
npm ci                 # 依存関係のインストール
npm run dev            # 開発サーバーの起動
npm run lint           # ESLint
npm run type-check     # TypeScript の型チェック
npm run build          # 型チェックと本番ビルド（dist/ に出力）
npm run build-only     # 型チェックなしで本番ビルド
npm run preview        # ビルド結果のプレビュー
```

## ディレクトリ構成

```text
src/
  main.tsx            エントリーポイント（Service Worker の登録）
  App.tsx             Todo リスト画面（タスクの操作・Firestore との同期・バッジ表示）
  components/         ログイン / 新規登録フォーム
  firebase.ts         Firebase の初期化
  style.css           スタイル
public/               アイコン・manifest・Service Worker（sw.js）
index.html            HTML のエントリーポイント
vite.config.ts        Vite の設定（ベースパスに合わせた manifest の生成を含む）
generate-icons.mjs    icon.svg から PWA 用アイコンを生成するスクリプト
icon.svg              アイコンの元画像
```

## デプロイ

- `main` への PR マージ時に `.github/workflows/deploy.yml` が GitHub Pages へデプロイします（Actions の画面から手動実行も可能）
- PR ごとに `.github/workflows/pr-preview.yml` がプレビューを `gh-pages` ブランチの `pr-<番号>/` に公開し、URL と QR コードを PR にコメントします（PR クローズ時に削除）

## 開発ルール

開発ルールは [AGENTS.md](./AGENTS.md) を参照してください。

## ライセンス

MIT
