---
title: "VoiceInput - macOS音声入力アプリ"
category: "AIプロダクト開発"
date: "2026-02-26"
techStack: ["Python", "mlx-whisper (large-v3)", "rumps", "sounddevice", "pyperclip"]
description: "Apple Silicon Macでローカル実行するリアルタイム日本語音声認識アプリ"
clientValue: "ローカルAIで音声入力アプリを企画から実装・運用まで完結できる"
highlights:
  - "Whisper large-v3をApple Silicon GPU上で完全オフライン実行"
  - "グローバルホットキー(Ctrl+Option+Space)でトグル録音"
  - "無音検出による自動チャンク分割と逐次テキスト入力"
  - "macOS起動時に自動起動"
order: 1
tier: "B"
---

## 解決した課題

既存の日本語音声入力ツールは、認識精度が低いかクラウドAPIへの依存が必要という問題があった。クラウド依存ではプライバシー懸念や通信遅延が発生し、オフライン環境では利用できない。Apple Silicon MacのGPU性能を活かし、ローカルで高精度なWhisper large-v3を動かすことで、プライバシーを保ちつつリアルタイムに近い音声入力を実現する必要があった。

## 技術スタック

| 分野 | 技術 | 役割 |
|------|------|------|
| 音声認識 | mlx-whisper (large-v3) | Apple Silicon GPU上でWhisper推論をローカル実行 |
| デスクトップUI | rumps | macOSメニューバーアプリの構築とTimerディスパッチ |
| 入力キャプチャ | sounddevice | マイクからの音声録音とバッファリング |
| キー監視 | pynput | グローバルホットキーのリッスン |
| テキスト出力 | pyperclip | 認識結果のクリップボード経由でのペースト |

## 実装内容

約300行の単一Pythonファイルで構成されるmacOSメニューバーアプリ。5つの技術的課題を解決した。

1. **macOSパーミッション対応**: `.app`バンドル構造にすることで、マイク・入力監視・アクセシビリティの各権限を正常に取得可能にした。
2. **Bluetoothマイクの無音問題**: Bluetoothマイク接続時に無音データが流れる問題を回避するため、内蔵マイクを優先使用する設定を実装した。
3. **スレッド安全性**: pynput Listenerスレッドとrumps Timerスレッド間のデータ受け渡しをQueueで行い、Lockとthreading.Eventで排他制御。MAX_BUFFER_SECS=30でバッファ上限を設定し、長時間録音時のメモリ枯渇を防止した。
4. **自動チャンク分割**: 無音区間を検出して自動的にチャンクを分割し、逐次的にテキスト化して入力する仕組みを実装した。
5. **自動起動**: macOSのLogin Itemsに登録し、起動時に自動でアプリが立ち上がる仕組みを構築した。

アーキテクチャは `pynput Listener → Queue → rumps Timer → Recorder → mlx_whisper.transcribe → paste_text` のフロー。開発にはAIエージェント（Claude Code）を使用し、output-checkerが5つのスレッド安全性バグを発見・修正した。

## 成果・効果

- Apple Silicon GPU上でWhisper large-v3を完全オフライン実行し、プライバシーを保ちつつ高精度な日本語音声認識を実現
- グローバルホットキー（Ctrl+Option+Space）でどこからでもトグル録音が可能
- 無音検出による自動チャンク分割で、長時間の発話も逐次テキスト化
- AIエージェント開発×output-checkerレビューの実践により、5つのスレッド安全性バグを事前検出