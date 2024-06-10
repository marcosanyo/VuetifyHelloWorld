# ベースイメージとしてNode.jsを使用
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# 作業ディレクトリの設定
WORKDIR /workspace

# 必要なパッケージをインストール
RUN npm install -g @vue/cli

# ユーザーをnodeに設定
USER node
