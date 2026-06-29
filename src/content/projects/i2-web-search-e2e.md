---
title: "実Web検索プラグイン E2E実装"
category: "AIエージェント基盤構築"
date: "2026-06-29"
techStack: ["Python", "DDGS", "Hermes plugin system", "TDD"]
description: "DDGSバックエンドによる実Web検索プラグインのTDD実装"
clientValue: "root cause分析→計画→TDD実装→reviewまで、工程全体を完結できる"
highlights:
  - "root cause分析から実装まで全工程"
  - "TDDによる品質担保"
  - "output-checker review完了"
order: 5
---

## 解決した課題

Hermes AgentのWeb検索機能が実際の検索APIを叩いていない問題を発見した。検索結果が古いキャッシュやダミーデータを返している可能性があり、AIエージェントが最新情報に基づいた意思決定を行うという前提が崩れていた。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| 検索バックエンド | DDGS (DuckDuckGo Search) | 実Web検索の実行 |
| プラグイン基盤 | Hermes plugin system | エージェントへの検索機能統合 |
| 品質担保 | TDD | テスト駆動開発による実装 |

## 実装内容

root cause分析から計画、TDD実装、output-checker reviewまで全工程を完結した。

1. **root cause分析**: Web検索が実際のAPIを叩いていない原因を特定し、影響範囲を整理した。
2. **計画**: 修正方針を策定し、TDDで進めることを決定した。
3. **TDD実装**: DDGSバックエンドによる実Web検索プラグインを、テスト駆動開発で実装した。失敗するテストを先に書き、実装してテストを通すサイクルを繰り返した。
4. **output-checker review**: 実装完了後、output-checkerによるレビューを実施し、品質を担保した。

## 成果・効果

- Hermes AgentのWeb検索が実際の検索APIを叩くよう修正し、最新情報へのアクセスを実現
- root cause分析から実装まで全工程を自走で完結
- TDDによる品質担保で、リグレッションリスクを最小化
- output-checker review完了により、コード品質を第三者視点で確認