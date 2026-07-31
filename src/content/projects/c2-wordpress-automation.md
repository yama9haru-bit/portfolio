---
title: "WordPress自動投稿システム"
category: "コンテンツ自動化パイプライン"
date: "2026-06-25"
techStack: ["JavaScript", "AppleScript", "WordPress REST API"]
description: "記事HTML生成から画像アップロード・下書き保存まで全自動化"
clientValue: "記事HTML生成から画像アップロード・下書き保存まで全自動化できる"
highlights:
  - "HTML生成から投稿まで全自動"
  - "Chrome UIプローブ連携"
  - "画像アップロード自動化"
order: 19
tier: "B"
---

## 解決した課題

WordPressへの記事投稿において、HTML生成、アイキャッチ画像のアップロード、本文画像のアップロード、下書き保存の一連の作業が手動で行われており、工数がかかっていた。これらを全自動化する仕組みが必要だった。特にWordPressの認証とnonce取得が自動化の壁となっていた。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| 記事生成 | JavaScript | 記事HTMLの自動生成 |
| 認証・UI操作 | AppleScript | Chrome UIプローブによる認証・nonce取得 |
| API連携 | WordPress REST API | 画像アップロード・下書き保存 |

## 実装内容

記事のHTML生成から、アイキャッチ画像・本文画像のアップロード、WordPress下書き保存までを全自動化するシステムを構築した。

- **Chrome UIプローブ連携**: AppleScriptでChromeを操作し、WordPress管理画面の認証とnonce取得を自動化。手動ログインなしでAPIアクセスを可能にした。
- **WordPress REST API**: 取得した認証情報を使い、REST APIで画像アップロードと下書き保存を実行。
- **JavaScriptによる記事生成**: 記事コンテンツからHTMLを自動生成し、投稿データを構築。

## 成果・効果

- 記事HTML生成から画像アップロード・下書き保存までの全工程を自動化し、投稿工数を劇的に削減
- Chrome UIプローブ連携により、WordPress認証の壁を解消
- 画像アップロードの自動化により、手作業での画像添付を不要化