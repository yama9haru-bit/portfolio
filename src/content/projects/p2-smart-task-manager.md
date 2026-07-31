---
title: "Smart Task Manager (AI搭載)"
category: "AIプロダクト開発"
date: "2025-12-08"
techStack: ["Python", "Streamlit", "SQLite3", "Pandas", "EasyOCR", "Pillow", "NumPy"]
description: "Web+DB+AI(OCR)を統合したMVPタスク管理アプリ"
clientValue: "Web+DB+AI(OCR)を統合したMVPを短期構築できる"
highlights:
  - "画像からタスク抽出するOCR機能"
  - "StreamlitによるフルスタックMVP"
  - "SQLite3によるデータ永続化"
order: 2
tier: "B"
---

## 解決した課題

Python基礎文法習得後の実践ステップとして、単なるスクリプト作成ではなく、Webアプリ・データベース・データ分析・AI(OCR)を統合したMVPレベルのプロダクト開発が必要だった。タスク管理という身近な題材を通じて、フルスタック開発の全体像を短期間で習得することを目指した。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| フロントエンド | Streamlit | Python単言語でのWeb UI構築 |
| データベース | SQLite3 | タスクデータの永続化 |
| データ分析 | Pandas | タスクデータの集計・分析 |
| AI(OCR) | EasyOCR | 画像内の文字認識（手書き/活字） |
| 画像処理 | Pillow, NumPy | 画像前処理・フォーマット変換 |

## 実装内容

Streamlitによるフロントエンド構築で、PythonのみでWebアプリケーションを完成させた。SQLite3でタスクの永続化を実現し、CRUD操作を備えたタスク管理機能を実装。EasyOCRによる画像内文字認識（手書き・活字両対応）を搭載し、写真を撮るだけでタスクを自動抽出できる機能を実現した。Pandasによるタスクデータの集計・分析機能も実装し、完了率や期限超過タスクの可視化を行った。

## 成果・効果

- Web UI、DB永続化、AI(OCR)を単一プロジェクトに統合したMVPを短期間で構築
- 画像からタスクを自動抽出するOCR機能により、手書きメモのデジタル化を実現
- Pythonエコシステムを横断的に活用する実践的開発スキルを獲得