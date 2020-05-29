# MyPortfolio

本の管理と感想共有が可能なアプリケーション

## Features

書籍コードをスマホアプリから読み取り、ISBNコードを用いて本を特定し、サイト内で管理する。
本のレビューを書くと、同じ本に対してレビューを書いたもの同士が同じトークルームに入室でき、意見交換をすることができる。

## Requirement

必要なライブラリは未定

* hoge 3.5.2
* hogehoge 1.0.2

## Note

注意点などがあれば書く

## Author

* name: Daiki Kato

## DB

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