# Todoリスト

Vue.jsとTypeScriptで作成されたシンプルなTodoリストアプリケーションです。

🌐 **デモ**: [https://keigo-hisazumi.github.io/task-list/](https://keigo-hisazumi.github.io/task-list/)

## 機能

- ✅ Todo項目の追加
- ✅ Todo項目の削除
- ✅ Todo項目の完了/未完了の切り替え
- ✅ Todo項目の統計表示（合計、完了、未完了）
- 🎨 ダークモード・ライトモード対応

## 技術スタック

- **Vue.js 3** - プログレッシブJavaScriptフレームワーク
- **TypeScript** - 型安全なJavaScript
- **Vite** - 高速なビルドツール

## セットアップ

### 必要な環境

- Node.js 18.x以上
- npm 9.x以上

### インストール

```bash
# 依存関係のインストール
npm install
```

## 使い方

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173/ にアクセスしてください。

### プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### プロダクションプレビュー

```bash
npm run preview
```

## デプロイ

このアプリケーションはGitHub Pagesにデプロイされています。

### 自動デプロイ

mainブランチにプッシュすると、GitHub Actionsが自動的にビルドしてGitHub Pagesにデプロイします。

デプロイのステータスは[Actionsタブ](https://github.com/keigo-hisazumi/task-list/actions)で確認できます。

### 手動デプロイ

GitHub Actionsの[ワークフロー](https://github.com/keigo-hisazumi/task-list/actions/workflows/deploy.yml)から「Run workflow」ボタンで手動実行することもできます。

## プロジェクト構造

```
task-list/
├── src/
│   ├── App.vue          # メインのTodoリストコンポーネント
│   ├── main.ts          # アプリケーションのエントリーポイント
│   ├── style.css        # グローバルスタイル
│   └── vite-env.d.ts    # Vite型定義
├── index.html           # HTMLエントリーポイント
├── icon.svg             # リポジトリ用アイコン（SVG）
├── package.json         # プロジェクト設定
├── tsconfig.json        # TypeScript設定
├── vite.config.ts       # Vite設定
└── README.md           # このファイル
```

## ライセンス

MIT