---
title: "Recall - Anki準拠の個人用SRS PWA"
category: "AIプロダクト開発"
date: "2026-08-19"
techStack: ["TypeScript", "React 19", "Vinext", "Cloudflare D1/R2", "ts-fsrs", "Dexie", "Playwright", "Zod"]
description: "資格・用語学習向けのAnki準拠間隔反復PWA。iPhoneとMacで同じコレクションをオフライン継続できる"
clientValue: "学習アプリをFSRS・オフライン同期・インポート/バックアップまで含むプロダクト品質で一気通貫実装できる"
highlights:
  - "FSRSによるAgain/Hard/Good/Easy評価とUndo・Suspend・Bury・Flag"
  - "IndexedDBキャッシュとoperationId付きoutboxによるオフライン作成・編集・復習の自動再送"
  - ".apkg/.colpkg/CSV読込とD1正本・R2 Mediaの完全バックアップ/復元"
  - "Playwright E2Eで学習導線・オフライン・アクセシビリティを回帰保証"
outcome: "個人用プロダクトとして実装・運用。Cloudflare互換Sites上でD1/R2を正本に配置"
order: 26
tier: "A"
---

## 解決した課題

Ankiは高機能だが、iPhoneとMacで同じコレクションを安全に持ち歩き、オフラインでも追加・編集・復習を止めない個人用環境を、自分の学習フローに合わせて素早く整えるのは難しい。既存の同期サービスや共有デッキ機能は不要で、学習本体・インポート・バックアップ・PWA体験を一つのプロダクト境界に閉じたかった。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| UI / API | React 19 + Vinext + TypeScript | 学習画面とREST APIを同一アプリとして構築 |
| 間隔反復 | ts-fsrs | Again / Hard / Good / Easy のスケジューリング |
| 正本ストレージ | Cloudflare D1 / R2 | カード・履歴の正本とMedia保存 |
| 端末キャッシュ | Dexie (IndexedDB) | オフライン表示と未送信操作のoutbox |
| 品質保証 | Playwright + Vitest + axe | 学習導線・オフライン・重大なa11y違反の回帰 |
| 入力検証 | Zod + DOMPurify | API入力とAnki由来HTMLの安全化 |

## 実装内容

資格・一般学習・用語向けの個人用Anki準拠PWAを設計・実装した。

1. **学習コア**: 階層デッキ、Basic / Reversed / Type Answer / Cloze、FSRS評価、間隔予告、Undo、Suspend、Bury、Flag、Mark、回答側メモ、キーボード操作を実装した。
2. **オフライン同期**: 画面用Bootstrapと復習セッションをIndexedDBへ保持し、変更は一意な`operationId`と端末内順序で再送する。サーバー側はChange Logの一意制約で重複適用を防ぐ。
3. **インポート / バックアップ**: `.apkg` / `.colpkg` / CSV / TSV読込（Anki 2 / 21 / 21b、Media・履歴を可能な範囲で維持）、完全バックアップZIPと復元、TSV書出しを実装した。
4. **運用品質**: iPhone向けPWA、ライト/ダーク、Web Push、CSP、HTML/URL/Archive/Media検証を入れ、Playwrightで学習・インポート・オフライン・アクセシビリティをE2E検証した。

## 成果・効果

- AnkiWeb同期・共有デッキ・AI生成を意図的に除外し、個人学習に必要な機能境界を明確化した
- オフラインでも作成・編集・削除・復習を継続でき、再接続時に因果順序を保って同期できる
- 学習データの正本をクラウド側に置きつつ、端末キャッシュと完全バックアップで可搬性を確保した
- トースト自動消去やカード全面タップ応答など、実機学習中の摩擦をE2E付きで潰した
