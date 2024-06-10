# 概要
- DevcontainerでVue+VuetifyのHello Worldを試すためのサンプル
  - 初回セットアップは割と面倒くさいので
- 状態管理はPiniaを採用
  - 複数ページやコンポーネント間などアプリ全体で変数を共有するためのライブラリ
  
# 実行手順
1. このリポジトリをクローン
2. ディレクトリ移動 `cd VuetifyHelloWorld`
3. `ctrl+shift+P`キーから`Rebuild Container`を実行
4. `npm run serve`コマンドで開発用サーバーが立ち上がる
5. ブラウザで`http://localhost:8085`(ポート番号は任意)にアクセスするとHello World 🎉

# ポート変更
下記2か所の番号を変更
- `./devcontainer/devcontainer.json`
  - `"forwardPorts": [8085]`
- `./vue.config.js`
  - `port: 8085,`
