---
title: "Reactをシンプルに解説する"
excerpt: "Next.jsでブログを作成しました！学習した技術や、読書のアウトプットに使用します！"
coverImage: "/assets/blog/react/react.png"
date: "2022-05-07"
author:
  name: 泉原 遥輝 | Haruki Izumihara
  picture: "/assets/blog/authors/haruki.jpg"
ogImage:
  url: "/assets/blog/react/react.png"
---

こんにちわ！はじめまして、Web系フリーランスの泉原です。これからReactを学ぶ人に向けて分かりやすく解説していきます！私自身もReact初心者なので、詳細のニュアンスが違う可能性があります。予めご了承下さい。

## Reactとは何か？
ReactはJavaScriptのライブラリです。Facebook社が運営していて効率的にUIを実装するためのライブラリです。UIとはWebサイトやWebアプリを使用するための部品です。

例えば、いいねを押すことができるUIです。
![goodbutton](/assets/blog/react/goodbtn.gif)

こういったUIをReactで効率的に作成することが出来ます!いきなりReactを解説しても従来のJS(Javascript)と何が違うのか分からないので、Javascriptを使用したDOM操作から見ていきます！

## JavascriptのDOM操作
まずはJavaScriptを使用した従来のDOM操作から見ていきます！そもそもDOMとはDocument Object Modelの略で簡単に言うと、HTMLファイルをブラウザが解釈している構造です。HTMLのようにheadやbodyの情報をブラウザが解釈しています。
![goodbutton](/assets/blog/react/dom.png)
このようなDOMをJavaScriptを使用して画面を描画していきます！

## ReactではどのようにDOMを構築しているのか？
Reactでは仮想DOMと呼ばれる独自のオブジェクトをブラウザに表示させる前に作成しています！仮想と呼ばれるのはブラウザで表示させることが出来ず、あくまでReact側で構築しているDOMだからです。

仮想DOMのままでは画面を表示することが出来ないので、仮想DOMをDOMに変換します。そこで始めて画面を表示させることが出来ます。
![goodbutton](/assets/blog/react/reactdom.png)

Reactがしていることはこれだけです。シンプルではないでしょうか？より詳しく見ると、仮想DOMでは変更前と変更後の状態を持っていたり、JSXと呼ばれる言語を使って仮想DOMを構築していたりします。まずは概要をざっくりと掴んで、具体的なことはあとから学習すると良いですね。ありがとうございました！

