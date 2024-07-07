# AppName:はぐ
野菜作りを通じて子どもに野菜好きになって貰いたい。<br>
そんなあなたに、初めての家庭菜園をサポートするアプリです。

1. 育成ステージ毎にアドバイスを表示します。<br>
2. 水やり通知と水やり時の楽しみあり。<br>
3. 苗は作成時に性格が付与され、性格によって
　コメントが変わります。お楽しみに☺️<br>
4. 日々の写真をタイムラプス表示させる事ができます。<br>
5. 友達のタイムラインも確認できます。

# How to use
- app url:https://hagu-prod-7e1e5ace3cd8.herokuapp.com/

1. LINE認証によるログイン

2. Home画面<br>新規ログイン時は苗追加。（吹き出しにより誘導）

3. 苗追加画面で苗選択or苗作成

4. 作成画面<br>
`野菜選択` -> `名前入力`（10文字以内）-> `選択する`ボタンで苗情報を作成<br>
　※選択時に野菜の特徴とカレンダーを表示

5. 苗を植える手順を表示。準備が出来たら準備OKボタンをタッチ。

6. a: 苗の育成ステージに合わせたアドバイス表示<br>
b: ステージが進むor戻る際はスライドで実施。

7. お世話画面（子ども向けUI）<br>
a: 水やり前の時は震えて、性格に合わせたコメントが出ます。<br>
b: ジョウロで水やりをすると風船が飛び笑顔に変わります。<br>
c: カメラでその日の写真を撮影できます。

8. カメラ画面
初回はターゲット、２回目以降は前回の写真が透けて表示されます。<br>
ゲージで透け具合を調整し、カメラボタンで撮影できます。

9. 撮影後画面<br>撮り直しor保存を選択

10. タイムラプス選択画面（自分）<br>
自分が撮影した写真一覧を表示。<br>

11. タイムラプス選択画面（フレンド）<br>
友達の追加は右下の＋アイコンで可能。<br>
※アプリ利用者全員が対象です。

12. タイムラプス画面<br>
a: 再生ボタンで自動再生<br>
b: スライダーで再生を操作可能

1.<img width="100" alt="1.ログイン" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/74223678-c616-499d-9756-d62978b46133">
2.<img width="100" alt="2.Home(新規)" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/0da0b2a4-b31f-4cd8-8f5f-2499a7d9fbf2">
３.<img width="100" alt="3.苗選択or追加" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/b6c6ba4f-1490-4bef-a734-7be9d5251ffa">
4.<img width="100" alt="4.苗作成" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/f55ee47f-9d69-426c-a7a6-b6b87e6bdafc">
5.<img width="100" alt="5.苗準備" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/a4974075-084b-4158-a890-f04c3edb0483">
6.<img width="100" alt="6.Home(苗作成後)" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/5cd4633d-6c19-44ba-a9f0-e57839d73d97">
7.<img width="100" alt="7.お世話画面" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/5f8f0ce1-ee93-4187-8b45-8d0596b0b127">
8.<img width="100" alt="8.カメラ画面" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/9b29bd20-0924-4071-944e-48246eb6ad92">
9.<img width="100" alt="9.撮影後画面" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/f0d20308-3ca3-4795-bdc1-a982203c8488">
10.<img width="100" alt="10.タイムラプス画面(自分)" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/eae06a98-1592-4e6d-8e8a-84a7aa6a6a50">
11.<img width="100" alt="11.タイムラプス画面(フレンド)" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/34a167f9-0426-492e-855c-e7d6bd6654f5">
12.<img width="100" alt="12.タイムラプス再生画面" src="https://github.com/DIG-BTC6-Final-Project-Team-Fair-Play/Hagu/assets/116330146/d2f7f414-a113-4e30-99af-b458ea380b66">



# Index
- [About](#about)
- [Technology](#technology)
- [Setup](#setup)
- [Schema](#schema)
- [Future Plans](#future-plans)

# About
野菜作りを通じて子どもに野菜好きになって貰いたい。<br>
そんなあなたに、初めての家庭菜園をサポートするアプリです。<br>
本アプリは「セットキットに付属するアプリ」を想定しています。<br>
プランターや苗の準備はセットキットに含まれ、その後の育成から本アプリを使用します。


"Wish children to love vegetables through growing them."<br>
This application supports home gardening for parents who feel this way.<br>
This app is intended to be the app that comes with the set kit.<br>
Preparation of planters and seedlings is included in the kit, and this app is used from subsequent cultivation.

# Technology

### < frontend >
- React<br>
- Typescript<br>
- Mantine UI<br>

### < backend >
- Typescript<br>
- knex<br>
- Firebase<br>
- LINE auth<br>
- Open AI API<br>

### < Database >
- Postgres


# Setup
### < Downloading and installing steps >
※local environment

1. create database<br>

   `database name : hagudb`

2. clone from git hub
```zh
git clone git@github.com:DIG-BTC6-Final-Project-Team-Fair-Play/Hagu.git
```

3. make `.env` file in `Hagu/backend` folder<br>
   Inside this file, please write the following information<br>
   You need to fill in all fields except DB, PORT, and HOST by yourself.

```zh
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=hagudb
POSTGRES_PORT=5432
POSTGRES_HOST=127.0.0.1

OPEN_AI_API_KEY=

LINE_LOGIN_CHANNEL_ID=
LINE_LOGIN_CHANNEL_SECRET=
LINE_LOGIN_CALLBACK_URL=
```

4. run npm install
```zh
npm run heroku-postbuild
```

5. run seed data
```zh
npm run seed-data --prefix ./backend
```

6. startup server
```zh
npm run start
```

7. access to web page<br>
   `http://localhost:3000`


# Schema

```mermaid
erDiagram
    users ||--o| friends : "user_id"

    users{
        int id PK
        int line_id "LINEのID"
        string user_name "ユーザー名"
    }

    vegetables{
        int id PK
        string label ""
        text description ""
        string content ""
        string equipment_list ""
        text image ""
        int planting_start "苗植え開始時期"
        int planting_end "苗植え終了時期"
        int harvest_start "収穫開始時期"
        int harvest_end "収穫終了時期"
    }

    seedlings{
        int id PK
        int user_id FK
        int vegetable_id FK
        int growing_stage_no "育成ステージ"
        datetime last_watering "最終水やり時間"
    }

    vegetable_advice{
        int vegetable_id
        int growing_stage_no "育成ステージ"
        text advice ""
    }

    photos{
        int id PK
        int seedling_id FK
        text photo_data "Firebaseの保存先URL"
        timestamps 
    }

    eat_photos{
        int id PK
        int seedling_id FK
        text photo_data "Firebaseの保存先URL"
        timestamps 
    }

    friends{
        int id PK
        int user_id FK
        int friend_id "友達のID"
    }
```

# Future Plans
- LINE導入済みの機種でのPWA化
- ブラッシュアップ
- リリース後の利用者のフィードバック対応
