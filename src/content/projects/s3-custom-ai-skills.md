---
title: "自作AI CLIスキル群（15+スキル）"
category: "AIスキル・ツール設計"
date: "2026-03-01"
techStack: ["SKILL.md", "Python", "bash"]
description: "週次メンターや音声→Obsidian、株価分析など15以上のAIツールを自作"
clientValue: "AIツールを15以上自作できる"
highlights:
  - "weekly-mentor"
  - "voice-to-obsidian"
  - "task-classifier"
  - "stock-paper"
  - "security-aware-harness"
  - "schedule-sync"
  - "readme-generator"
  - "price-hunter"
  - "n8n系5スキル等"
order: 17
---

## 解決した課題

日常の開発・学習・業務において、繰り返し発生するタスクを都度手作業で行う非効率性があった。AI CLIのSkillsシステムを活用することで、これらを再利用可能なツールとしてコード化し、呼び出すだけで実行できるようにする必要があった。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| スキル定義 | SKILL.md | AI CLIスキルの宣言的定義 |
| 実装 | Python | データ処理・API連携・分析ロジック |
| 自動化 | bash | システム連携・パイプライン構築 |

## 実装内容

AI CLIのSkillsシステムを活用し、15以上の自作スキルを構築した。主要スキルは以下の通り。

- **weekly-mentor**: 週次振り返りメンター。1週間の活動を振り返り、改善点を抽出する。
- **voice-to-obsidian**: 音声入力をObsidianノートに変換。音声録音からMarkdownノートを自動生成する。
- **task-classifier**: タスク自動分類。入力されたタスクをカテゴリ・優先度で自動分類する。
- **stock-paper**: 株価分析レポート。株価データから分析レポートを自動生成する。
- **security-aware-harness**: セキュリティ意識付き開発。開発時にセキュリティリスクを自動チェックする。
- **schedule-sync**: スケジュール同期。複数カレンダー間のスケジュール同期を行う。
- **readme-generator**: README自動生成。プロジェクトのREADMEをコードから自動生成する。
- **price-hunter**: 価格比較。複数サイトの価格を比較し、最安値を特定する。
- **n8n系5スキル**: ワークフロー自動化。n8nのワークフロー定義・管理・実行をスキル化した。

## 成果・効果

- 15以上の自作スキルを構築し、日常タスクの自動化を幅広く実現
- 週次振り返り、音声メモ、タスク分類、株価分析など、多様なユースケースをカバー
- n8n系5スキルによるワークフロー自動化で、業務プロセスの効率化を実現
- スキルの再利用性により、同じタスクの2回目以降の工数をゼロに近づけた