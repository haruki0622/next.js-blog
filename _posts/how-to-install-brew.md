---
title: "Homebrewのインストール方法"
excerpt: "Homebrewのインストール方法を解説しました。Nodeやnpmを使用するときに必ず使用するので、導入しておきましょう！"
coverImage: "/assets/blog/how-to-install-brew/thumbnail.jpg"
date: "2022-06-19"
author:
  name: 泉原 遥輝 | Haruki Izumihara
  picture: "/assets/blog/authors/haruki.jpg"
ogImage:
  url: "/assets/blog/how-to-install-brew/thumbnail.jpg"
---
こんにちわ。泉原です。今回はHomebrewのインストールの方法を紹介したいと思います。`Node`や`npm`を使用する際に必ず使用するのでインストール方法をまとめます。

Homebrewとはバージョン管理ソフトです。ライブラリやプログラミング言語にはバージョンがあります。それぞれのバージョンで仕様が違ったりします。したがって、A環境では動くけど、B環境では動かない！なんてことが起こります。

そこで複数のバージョンを管理出来るソフトが必要になります。それがHomebrewです。プログラミングで環境構築をするときはhomebrewをよく使用するので、今のうちに導入しておきましょう！

## Homebrewのインストール方法
Homebrewのインストール方法を解説します。

### インストールされているか確認する
まずはインストールされているか確認します。ターミナルを開いて、`brew -v`と入力します。

```bash
brew -v
```

インストールされてないと`command not found: brew`と表示されます。安心して下さいね。

```bash
commnad not found: brew
```

既にインストールされていたらHomebrewと表示されます。

```bash
Homebrew 3.3.15
```

### 公式サイトからHomebrewをインストールする

[公式サイト](https://brew.sh/index_ja)に移動します。
![homebrew-site](/assets/blog/how-to-install-brew/homebrew_hp.png)

コマンドをコピーしてターミナルに貼り付ける

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

PCにログインするpasswordを入力し、しばらく待機します。完了すると、`Next steps`と表示されるので、2つのコマンドを入力を入力します。

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/ユーザー名/.zprofile
```

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

homebrewがインストールされていることを確認

```bash
brew -v
```

versionが表示されたらインストール完了
```bash
Homebrew 3.3.1
```

いかがだったでしょうか？もしうまく行かない方はTwitterに[DM](https://twitter.com/haruharu_0622x)をいただけるとサポートします！ありがとうございました。