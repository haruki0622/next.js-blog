---
title: "キーボードだけでMacを操作する方法"
excerpt: "キーボードだけでPCの操作をするために試行錯誤した内容をまとめています。"
coverImage: "/assets/blog/only-use-keyboard/thumbnail.jpg"
date: "2022-08-24"
author:
  name: 泉原 遥輝 | Haruki Izumihara
  picture: "/assets/blog/authors/haruki.jpg"
ogImage:
  url: "/assets/blog/only-use-keyboard/thumbnail.jpg"
---
こんにちわ。泉原です。今回はキーボードだけでMacを操作する方法について解説したいと思います！マウスを極力触らず、キーボードで操作を完結させたいと思っていて試行錯誤しました。ようやく最適解が出たのでシェアしたいと思い、ブログを書きました！参考にして下さい。

別の記事で[無しでは生きられないアプリ3選](https://www.haru-haru0.com/posts/the-best-apps-for-mac)も紹介しているので合わせてご覧下さい！特にAlfredは必ず使用したほうが良いです！生産性が上がります。

これから快適な操作をするための大前提が1つあります。それは**Macのキーバインド(emacs)を使える事です。** キーバインドとはマウスやトラックパッドを使わずにショートカットでカーソル移動や、特定のアクションをする事が出来る機能です。1週間もすれば慣れるのでサクッとマスターしましょう！

## この記事の目的
- 毎日のPC作業を出来るだけ合理化したい
- マウスを極力触らず、キーボードで操作を完結させたい人向け

## 1. キーバインドを習得する
冒頭で説明した通りまずはキーバインドを習得します。なぜなら、キーボードの矢印キーを使うとホームポジションが崩れるからです。大前提としていかにホームポジションを崩さずに、ブラウザで検索したりテキストを書くかって事を大切にしています。だから、キーバインドを習得する事は大切だと考えています。慣れれば簡単です！少しずつ慣れていきましょう。

キーバインドのサンプルgif
![key-binding-demo](/assets/blog/only-use-keyboard/key-biding-demo.gif)

このようにカーソルを動かしたり、テキストを削除したり出来ます！右下にある矢印や`deleteキー`は使用していません。基本的に**control + アルファベット**を押すことで、カーソル移動が出来ます。

### キーバインド一覧
| ショートカット | 役割 |
| -------------- | -------------- |
| control + f    | 前に移動       |
| control + b    | 後ろに移動     |
| control + n    | 下に移動       |
| control + p    | 上に移動       |
| control + h    | カーソルの前のテキストを削除     |
| control + d    | カーソルの後ろテキストを削除     |
| control + k    | カーソルの後ろテキストを全て削除 |
| control + a    | 先頭に移動 |
| control + d    | 行末に移動 |

他にもありますが、基本的に以上のショートカットで必要十分です。

## 2. Karabinerを使って全てのアプリでキーバインドが使えるようにする
1.のステップでキーバインドがマスター出来たら、次のステップに移行します。Karabiner Elementsをインストールして、Finderやその他のアプリでもキーバインドを使えるようにします。まずはKarabiner Elements

1. [Karabiner-Elements](https://karabiner-elements.pqrs.org/)をインストールする
![install-karabiner](/assets/blog/only-use-keyboard/how-to-install-karabiner-1.jpg)
2. Karabiner-Elementsを開いて「Complex Modifications」→「Add rule」を選択
![install-karabiner](/assets/blog/only-use-keyboard/how-to-install-karabiner-2.jpg)
3. 検索バーに「emacs」と入力して、「Emacs key biding」をインポートする
![install-karabiner](/assets/blog/only-use-keyboard/how-to-install-karabiner-3.jpg)
4. Enable Allで有効化します。
![install-karabiner](/assets/blog/only-use-keyboard/how-to-install-karabiner-4.jpg)

設定することで矢印キーの移動がキーバインドで移動をすることが出来ます。圧倒的に便利なので、導入して下さい！

## 3. ブラウザ操作もキーボードで操作する
ブラウザもキーボードで操作出来るようにします。これはGoogle拡張機能の「[vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=ja)」をインストールすることで可能です。Macのキーバインドの操作性は違いますが、慣れるとキーボードだけでほとんどの事が出来るようになります。

vimium
![vimium-demo](/assets/blog/only-use-keyboard/vimium-demo.gif)

## 4. ウィンドウにアプリを設定
最後にアプリの切り替えをスムーズにするためにウィンドウの設定を行います。Macでは`⌘+tab`でアプリの切り替えが出来ますが、複数のアプリを起動していると、探すのが手間な時があります。そんなときに各ウィンドウにアプリを指定しておいて、ショートカットで設定出来るようにしていきます。


1. トラックパッドを上にスワイプしてMisson Controlを開く
![window-settings](/assets/blog/only-use-keyboard/window-settings-1.jpg)
ウィンドウを10個開く(仕様の関係で10個のウィンドウを開かないと、設定が出来ません)
1. 「設定」→「キーボード」→「Misson Control」に移動し、各ウィンドウのショートカットを設定
![window-settings](/assets/blog/only-use-keyboard/window-settings-2.jpg)
4, 1~10のウィンドウにアプリを設定する。ウィンドウに移動して、ドックから右クリック→「オプション」→「このデスクトップ」
![window-settings](/assets/blog/only-use-keyboard/window-settings-3.jpg)

以上でウィンドウにアプリを設定することが出来てショートカットでアプリの切り替えが出来ます。私の場合は`control+数字(1~10)`を設定します。1番目がGoogle Chrome 2番目がobsidian 3番目がvscodeです。よく使用するアプリごとに設定すると良いと思います！それでは今回は以上です。ありがとうございました。

<div class="test">test</div>