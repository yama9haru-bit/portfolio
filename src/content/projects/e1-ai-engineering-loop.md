---
title: "AI Engineering Loop設計資料"
category: "AIエンジニアリング基盤設計"
date: "2026-06-28"
techStack: ["アーキテクチャ設計", "Anthropic multi-agent原則"]
description: "Plan→Implement→Verify→Shipの4層エンジニアリングパイプライン設計"
clientValue: "Plan→Implement→Verify→Shipの4層パイプラインで、AI開発の品質を担保できる"
highlights:
  - "4層アーキテクチャ設計"
  - "Anthropic multi-agent設計原則の取り入れ"
  - "OpenHands Verification Stack参照"
outcome: "401行の設計資料"
order: 12
---

## 解決した課題

AIエージェント環境において、コード生成は安価になった一方で、生成されたコードの品質担保（verification）が真のボトルネックとなっていた。AIが生成したコードをそのまま本番に投入するリスクを管理するため、工程全体を体系的に設計する必要があった。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| アーキテクチャ | 4層パイプライン設計 | Plan→Implement→Verify→Shipの工程体系化 |
| 設計原則 | Anthropic multi-agent原則 | Orchestrator-Workerパターンの適用 |
| 参照モデル | OpenHands Verification Stack | Verification層の設計参照 |

## 実装内容

AIエージェント環境における「ガチガチのengineering」のための仕組みを4層構造で設計した。

**Layer 0 PLAN (writing-plans)**: 実装前に計画を文書化する層。要件定義・タスク分解・リスク評価を構造化し、エージェントが実装前に全体像を把握する。

**Layer 1 IMPLEMENT (TDD, subagent-driven-development)**: テスト駆動開発とサブエージェント駆動開発で実装する層。失敗するテストを先に書き、サブエージェントに実装を委任する。

**Layer 2 VERIFY (output-checker, requesting-code-review)**: 生成コードの検証を行う層。output-checkerによる自動検証と、コードレビュー要求による人間・AIレビューを組み合わせる。

**Layer 3 SHIP (github-pr-workflow)**: 検証済みコードを本番に投入する層。GitHub PRワークフローで、マージ前の最終チェックを行う。

核となる思想は「エージェントがコードを生成することは安価になった。本当のボトルネックはverificationである」（OpenHands "The Verification Stack" 2026-06-22）。

Anthropic multi-agent設計原則を取り入れ、Orchestrator-Workerパターンを採用。Agent=LLMが自律的にツールを使うループとして定義し、Token usageが性能の80%を説明するという知見を設計に反映した。

## 成果・効果

- 401行の設計資料として、AI開発の品質担保のための工程体系を体系化
- Plan→Implement→Verify→Shipの4層パイプラインで、各工程の責任を明確化
- Anthropic multi-agent設計原則の取り入れにより、Orchestrator-Workerパターンを実装
- OpenHands Verification Stackの参照により、verification層の設計根拠を確保