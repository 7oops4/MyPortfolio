![](https://i.gyazo.com/2a000edde2733d375d2dbbbbf82fb356.png)

# アプリ名

[Book Connect](http://www.book-connect-jp.com/ "Book Connect")<br>
本の管理と感想の共有を目的としたアプリケーション

## 概要

当アプリでは本棚を電子化し、所持している本の管理をすることができる。<br>
本の感想を書くと、同じ本に対して感想を書いたもの同士が同じトークルームに入室でき、意見交換をすることができる。<br>

今後実装予定の機能として、書籍コードをスマホアプリから読み取り、ISBNコードを用いて本を特定し、サイト内で管理できるようにする予定。

## 本番環境

http://www.book-connect-jp.com/<br>

- テスト用アカウント
  - ユーザ名：tester
  - メールアドレス：tester001@gmail.com
  - パスワード：tester001

## 開発環境

Ruby/Ruby on Rails/MySQL/Github/AWS/Visual Studio Code

## 制作背景(意図)

1.読書が好きで本を200冊以上持っているが、冊数が多くなる程管理がしづらい。そのため、簡単に本の管理が可能なアプリ開発を行った
1.技術力向上のためにAPIを応用したアプリを開発したいと考え、書籍データの登録を簡易的行うためにGoogleの書籍検索APIを使用しアプリ開発を行った
1.LINEのオープンチャット機能やTwitterのハッシュタグを用いた小規模のコミュニティ作成が流行っているように感じたため、本の管理をしつつコミュニティ作成ができるような仕組みをアプリ内に追加した

## 著者

* name: Daiki Kato

## 工夫したポイント

1. SNSログインの実装を行った
1. Google Books APIsを使用し、書籍情報を簡易的に取得・登録できるよう実装を行った

## DB設計

### usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|name|string|null: false, unique: true|
|password|integer|null: false, uniqueness: true|

#### Association
- has_many :reviews
- has_many :books_users
- has_many :books, through: :books_users

### booksテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null:false|
|subtitle|string||
|image|text||
|total_page_count|integer|null: false|
|already_read_page_count|integer||
|sales_date|integer||
|author_id|integer|null: false, foreign_key: true|
|genre_id|integer|null: false, foreign_key: true|
|publisher_id|integer|null: false, foreign_key: true|

#### Association
- has_many :comments
- has_many :books_users
- has_many :users, through: :books_users

### commentsテーブル

|Column|Type|Options|
|------|----|-------|
|content|string|null: false, unique: true|
|image|string|null: false, unique: true|
|user_id|integer|null: false, uniqueness: true|
|book_id|integer|null: false, uniqueness: true|

#### Association
- belongs_to :user
- belongs_to :book

### books_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, uniqueness: true|
|book_id|integer|null: false, uniqueness: true|

#### Association
- belongs_to :user
- belongs_to :book

### authorsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### genresテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### publishersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|