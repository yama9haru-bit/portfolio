---
title: "Mac mini自動復旧・監視システム"
category: "AIエージェント基盤構築"
date: "2026-06-26"
techStack: ["bash", "launchd plist"]
description: "Hermes稼働Mac miniの自動復旧launchdエージェント"
clientValue: "AIエージェント稼働環境の監視・自動復旧を構築できる"
highlights:
  - "launchdによる自動復旧"
  - "障害検知と再起動"
order: 7
---

## 解決した課題

Hermes Agentが稼働するMac miniが稼働環境の障害で応答しなくなる事象が発生し、手動での復旧作業が必要となっていた。AIエージェントの継続稼働には、障害を自動検知して自動復旧する仕組みが必要だった。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| 自動化 | launchd plist | macOSのデーモン管理による自動復旧 |
| スクリプト | bash | 障害検知と復旧処理の実装 |

## 実装内容

Hermes Agentが稼働するMac miniの障害を検知し、自動で復旧するlaunchdエージェントを構築した。bashスクリプトでHermesプロセスのヘルスチェックを行い、応答がない場合はプロセスを再起動する仕組みを実装した。launchd plistでMac起動時の自動登録と、障害時の自動再実行を設定した。

## 成果・効果

- Mac mini障害時の自動復旧メカニズムを構築し、手動介入を不要化
- launchdによるプロセス監視と再起動で、AIエージェントの稼働継続性を担保
- AIエージェント稼働環境の信頼性を向上