export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  clientValue: string;
  techStack: string[];
  date: string;
  sourcePath?: string;
  externalUrl?: string;
  highlights: string[];
  outcome?: string;
  tier: 'S' | 'A' | 'B';
}

export const projects: Project[] = [
  // ── AIプロダクト開発 ──
  {
    id: 'P1',
    slug: 'p1-voice-input',
    tier: 'B',
    title: 'VoiceInput - macOS音声入力アプリ',
    category: 'AIプロダクト開発',
    description:
      'Apple Silicon Macでローカル実行するリアルタイム日本語音声認識アプリ',
    clientValue: 'ローカルAIで音声入力アプリを企画から実装・運用まで完結できる',
    techStack: ['Python', 'mlx-whisper (large-v3)', 'rumps', 'sounddevice', 'pyperclip'],
    date: '2026-02-26',
    highlights: [
      'Whisper large-v3をApple Silicon GPU上で完全オフライン実行',
      'グローバルホットキー(Ctrl+Option+Space)でトグル録音',
      '無音検出による自動チャンク分割と逐次テキスト入力',
      'macOS起動時に自動起動',
    ],
  },
  {
    id: 'P2',
    slug: 'p2-smart-task-manager',
    tier: 'B',
    title: 'Smart Task Manager (AI搭載)',
    category: 'AIプロダクト開発',
    description: 'Web+DB+AI(OCR)を統合したMVPタスク管理アプリ',
    clientValue: 'Web+DB+AI(OCR)を統合したMVPを短期構築できる',
    techStack: ['Python', 'Streamlit', 'SQLite3', 'Pandas', 'EasyOCR', 'Pillow', 'NumPy'],
    date: '2025-12-08',
    highlights: [
      '画像からタスク抽出するOCR機能',
      'StreamlitによるフルスタックMVP',
      'SQLite3によるデータ永続化',
    ],
  },
  {
    id: 'P3',
    slug: 'p3-agent-sdk-app',
    tier: 'A',
    title: 'Agent SDK App (OpenAI Agents SDK × Next.js)',
    category: 'AIプロダクト開発',
    description:
      'マルチエージェントチャットアプリ。型キャスト解消・Guardrail統合・セキュリティ強化',
    clientValue:
      'AIエージェントをプロダクトに組み込める。型安全性・Guardrail・セキュリティも考慮',
    techStack: ['TypeScript', 'Next.js', 'OpenAI Agents SDK', 'Zod v4'],
    date: '2026-06-28',
    highlights: [
      '型キャスト解消による理解負債の解消',
      'GuardrailのAgent統合',
      'Rate Limit重複登録の修正',
      'セキュリティ強化',
    ],
    outcome: 'GitHubリポジトリ化済み',
  },

  // ── AIエージェント基盤構築 ──
  {
    id: 'I1',
    slug: 'i1-ollama-cloud-hermes',
    tier: 'B',
    title: 'Ollama Cloud × Hermes 統合（35モデル利用環境構築）',
    category: 'AIエージェント基盤構築',
    description:
      '35モデル（GLM/Kimi/DeepSeek/MiniMax/Qwen等）をHermesから利用可能にする設定',
    clientValue:
      '最新AIモデルを35種類統合し、コスト最適化したエージェント基盤を構築できる',
    techStack: ['Hermes Agent', 'Ollama Cloud API', 'YAML config'],
    date: '2026-06-25',
    highlights: [
      '35モデル利用可能',
      'プロファイル独立.env問題の切り分けと解決',
      'フォールバック連鎖の設計',
    ],
  },
  {
    id: 'I2',
    slug: 'i2-web-search-e2e',
    tier: 'B',
    title: '実Web検索プラグイン E2E実装',
    category: 'AIエージェント基盤構築',
    description: 'DDGSバックエンドによる実Web検索プラグインのTDD実装',
    clientValue: 'root cause分析→計画→TDD実装→reviewまで、工程全体を完結できる',
    techStack: ['Python', 'DDGS', 'Hermes plugin system', 'TDD'],
    date: '2026-06-29',
    highlights: [
      'root cause分析から実装まで全工程',
      'TDDによる品質担保',
      'output-checker review完了',
    ],
  },
  {
    id: 'I3',
    slug: 'i3-ai-cost-visualization',
    tier: 'B',
    title: 'AIコスト可視化・分析システム',
    category: 'AIエージェント基盤構築',
    description: 'AI利用のtoken/コストをモデル別に可視化',
    clientValue:
      'AI利用のtoken/コストをモデル別に可視化し、最適なプラン選択を支援できる',
    techStack: ['Python', 'SQLite', 'Hermes state.db'],
    date: '2026-06-26',
    highlights: [
      '93セッション・9254万トークンを可視化',
      'モデル別コスト内訳',
      '$31.34のAPI換算料金試算',
    ],
  },
  {
    id: 'I4',
    slug: 'i4-macmini-auto-recover',
    tier: 'B',
    title: 'Mac mini自動復旧・監視システム',
    category: 'AIエージェント基盤構築',
    description: 'Hermes稼働Mac miniの自動復旧launchdエージェント',
    clientValue: 'AIエージェント稼働環境の監視・自動復旧を構築できる',
    techStack: ['bash', 'launchd plist'],
    date: '2026-06-26',
    highlights: ['launchdによる自動復旧', '障害検知と再起動'],
  },
  {
    id: 'I5',
    slug: 'i5-agent-safety-guards',
    tier: 'B',
    title: 'エージェント安全ガード（削除・外部書き込み保護）',
    category: 'AIエージェント基盤構築',
    description: 'AIエージェントの暴走を機械的に防ぐガードレール',
    clientValue: 'AIエージェントの暴走を機械的に防ぐガードレールを構築できる',
    techStack: ['Python', 'Hermes plugin system', 'pytest'],
    date: '2026-06-24',
    highlights: [
      'rm-confirm-guardによる削除保護',
      'external-write-guardによる外部書き込み保護',
      '8つのテスト全パス',
    ],
  },

  // ── 競合調査・市場分析レポート ──
  {
    id: 'B1',
    slug: 'b1-ai-agent-connector-research',
    tier: 'A',
    title: '日本企業向けAIエージェント接続インフラ 競合調査レポート',
    category: '競合調査・市場分析レポート',
    description:
      'MCP標準・海外競合11社・既存iPaaS・日本市場での差別化余地を分析',
    clientValue: 'AI接続インフラ市場の競合11社を調査し、差別化余地を特定できる',
    techStack: ['市場調査', 'MCP標準分析'],
    date: '2026-06-26',
    highlights: [
      '海外競合11社のマッピング',
      '日本SaaS接続ターゲット8サービスのAPI/価格分析',
      'セキュリティ懸念6項目の整理',
      '価格設計案の提示',
    ],
    outcome: '237行のビジネスレポート',
  },
  {
    id: 'B2',
    slug: 'b2-ai-coding-service-comparison',
    tier: 'B',
    title: 'AIコーディングサービス比較調査',
    category: '競合調査・市場分析レポート',
    description: 'Ollama Cloud Pro vs Devin CLI Proの価格・性能・統合性比較',
    clientValue: '複数AIサービスを価格・性能・統合性で比較し、最適解を提示できる',
    techStack: ['比較分析', 'コスト試算'],
    date: '2026-06-24',
    highlights: [
      '価格・使用量メカニズムの比較',
      '利用可能モデル一覧',
      'Hermes統合可能性の評価',
    ],
  },
  {
    id: 'B3',
    slug: 'b3-retail-dx-proposal',
    tier: 'S',
    title: '小売・製造系企業向け DX自動化提案',
    category: '競合調査・市場分析レポート',
    description:
      '顧客の業務課題をヒアリングから分析し、年間504時間の削減余地を試算した自動化提案を作成',
    clientValue:
      '顧客の業務課題をヒアリングから分析し、年間504時間の削減余地を試算した自動化提案を作成できる',
    techStack: ['提案書作成', '業務分析', 'Square API'],
    date: '2026-06-28',
    highlights: [
      '店舗売上/Square連携の自動化提案',
      '交通費・立替経費精算の半自動化提案',
      '情シスへの20項目の確認事項',
      '年間504時間の削減余地を定量試算',
    ],
    outcome: '年間504時間の削減余地を試算（月42時間）',
  },

  // ── AIエンジニアリング基盤設計 ──
  {
    id: 'E1',
    slug: 'e1-ai-engineering-loop',
    tier: 'A',
    title: 'AI Engineering Loop設計資料',
    category: 'AIエンジニアリング基盤設計',
    description: 'Plan→Implement→Verify→Shipの4層エンジニアリングパイプライン設計',
    clientValue:
      'Plan→Implement→Verify→Shipの4層パイプラインで、AI開発の品質を担保できる',
    techStack: ['アーキテクチャ設計', 'Anthropic multi-agent原則'],
    date: '2026-06-28',
    highlights: [
      '4層アーキテクチャ設計',
      'Anthropic multi-agent設計原則の取り入れ',
      'OpenHands Verification Stack参照',
    ],
    outcome: '401行の設計資料',
  },
  {
    id: 'E2',
    slug: 'e2-agent-sdk-firebase-guide',
    tier: 'A',
    title: 'Agent SDK × Firebase実装ガイド',
    category: 'AIエンジニアリング基盤設計',
    description: 'AIエージェント×クラウドDBの実装ガイド',
    clientValue: 'AIエージェント×クラウドDBの実装ガイドを688行で書ける',
    techStack: ['TypeScript', 'OpenAI Agents SDK', 'Firebase'],
    date: '2026-06-24',
    highlights: [
      'Agent SDKの用語集から実装まで網羅',
      'Firebase Security Rulesの設計',
      '2プロダクト短期実装のロードマップ',
    ],
    outcome: '688行の実装ガイド',
  },
  {
    id: 'E3',
    slug: 'e3-claude-codex-operations',
    tier: 'B',
    title: 'Claude Code × Codex 並行運用設計',
    category: 'AIエンジニアリング基盤設計',
    description: '2つのAI CLIを並行運用する体制設計',
    clientValue: '複数AI CLIを並行運用し、開発効率を最大化する体制を設計できる',
    techStack: ['AI CLI運用設計', 'プロンプト設計'],
    date: '2026-03-30',
    highlights: [
      '自律×安全弁のモデル',
      'スキル化×進化のモデル',
      '並行AIの3モデル設計',
    ],
  },

  // ── AIスキル・ツール設計 ──
  {
    id: 'S1',
    slug: 's1-supermovie-pipeline',
    tier: 'B',
    title: 'AI動画編集パイプライン設計（SuperMovie構想）',
    category: 'AIスキル・ツール設計',
    description: '8スキル直列のAI動画編集パイプライン設計',
    clientValue: '動画編集の全工程をAIパイプライン化し、工数を劇的に削減できる',
    techStack: ['Remotion', 'TypeScript', 'AI CLI Skills'],
    date: '2026-05-04',
    highlights: [
      '8スキル直列パイプライン設計',
      '非破壊編集の実現',
      '型安全なデータ受け渡し',
    ],
  },
  {
    id: 'S2',
    slug: 's2-ai-learning-system',
    tier: 'B',
    title: 'AI対話型学習システム設計（三想法メソッド）',
    category: 'AIスキル・ツール設計',
    description: 'AI対話型学習のルーティンをプロンプト設計',
    clientValue: 'AIを使った学習システムをプロンプト設計から構築できる',
    techStack: ['Prompt design', '学習サイクル設計'],
    date: '2026-05-05',
    highlights: [
      '予想・連想・回想の3思考サイクル',
      'AI対話学習プロンプトの設計',
      '基本情報技術者試験への適用',
    ],
  },
  {
    id: 'S3',
    slug: 's3-custom-ai-skills',
    tier: 'B',
    title: '自作AI CLIスキル群（15+スキル）',
    category: 'AIスキル・ツール設計',
    description: '週次メンターや音声→Obsidian、株価分析など15以上のAIツールを自作',
    clientValue: 'AIツールを15以上自作できる',
    techStack: ['SKILL.md', 'Python', 'bash'],
    date: '2026-03-01',
    highlights: [
      'weekly-mentor',
      'voice-to-obsidian',
      'task-classifier',
      'stock-paper',
      'security-aware-harness',
      'schedule-sync',
      'readme-generator',
      'price-hunter',
      'n8n系5スキル等',
    ],
  },

  // ── コンテンツ自動化パイプライン ──
  {
    id: 'C1',
    slug: 'c1-morning-mentor',
    tier: 'S',
    title: 'Morning Mentor（X自動収集→HTML→Gmail毎日配信）',
    category: 'コンテンツ自動化パイプライン',
    description:
      'X(Twitter)からAI関連情報を自動収集・HTML整形してGmail送信する毎日パイプライン',
    clientValue: 'SNS情報を毎日自動収集・整形・配信するパイプラインを構築・運用できる',
    techStack: ['Python', 'HTML', 'Cron', 'Gmail API'],
    date: '2026-06-25',
    highlights: ['Xからの自動収集', 'HTML整形', 'Gmail自動送信', '毎日運用中'],
    outcome: '毎日運用中',
  },
  {
    id: 'C2',
    slug: 'c2-wordpress-automation',
    tier: 'B',
    title: 'WordPress自動投稿システム',
    category: 'コンテンツ自動化パイプライン',
    description: '記事HTML生成から画像アップロード・下書き保存まで全自動化',
    clientValue: '記事HTML生成から画像アップロード・下書き保存まで全自動化できる',
    techStack: ['JavaScript', 'AppleScript', 'WordPress REST API'],
    date: '2026-06-25',
    highlights: [
      'HTML生成から投稿まで全自動',
      'Chrome UIプローブ連携',
      '画像アップロード自動化',
    ],
  },
  {
    id: 'C3',
    slug: 'c3-notion-export',
    tier: 'B',
    title: 'Notion一括エクスポートパイプライン',
    category: 'コンテンツ自動化パイプライン',
    description: 'Notion DBからMarkdownへ一括エクスポート',
    clientValue: 'Notion DBからMarkdownへ一括エクスポートするツールを構築できる',
    techStack: ['Python', 'Notion API', 'Markdown'],
    date: '2026-06-26',
    highlights: ['複数DB横断検索', 'フィルタリング機能', 'Markdown一括変換'],
  },
  {
    id: 'C4',
    slug: 'c4-academic-slides',
    tier: 'B',
    title: '学術スライド自動生成',
    category: 'コンテンツ自動化パイプライン',
    description: 'テキストからプレゼン資料を自動生成',
    clientValue: 'テキストからプレゼン資料を自動生成するツールを構築できる',
    techStack: ['JavaScript', 'pptxgenjs', 'Keynote'],
    date: '2026-06-28',
    highlights: ['JSからPPTX生成', 'Keynoteフォーマット対応', '学術発表向け'],
  },
  {
    id: 'C5',
    slug: 'c5-saas-internal-ai-dx',
    tier: 'A',
    title: 'SaaS社内AI-DX自動化（会議後タスク整理・通知ボット等）',
    category: 'コンテンツ自動化パイプライン',
    description:
      '会議後タスク整理、通知ボット、反復業務フローの自動化など社内SaaSのAI-DXを担当',
    clientValue:
      '会議後タスク整理、通知ボット、反復業務フローの自動化など、社内SaaSのAI-DXを担当できる',
    techStack: ['Python', 'AI CLI', '社内コミュニケーションツール連携', 'cron'],
    date: '2026-06-01',
    highlights: [
      '会議後タスク整理の自動化',
      '通知ボット運用',
      '反復業務フローの一部自動化',
    ],
    outcome: '運用中',
  },

  // ── AI-driven ビジネス構築 ──
  {
    id: 'R1',
    slug: 'r1-ai-driven-business',
    tier: 'S',
    title: 'AI-driven ビジネスアイデア発掘→醸成→売上化',
    category: 'AI-driven ビジネス構築',
    description:
      'AIを使ってビジネスアイデアを発見し、コンテンツ化し、受注・売上化につなげた実績',
    clientValue:
      'AIを使ってビジネスアイデアを発見し、コンテンツ化し、受注・売上化につなげた経験がある',
    techStack: ['AI企画', 'コンテンツ生成', '提案→受注'],
    date: '2026-06-25',
    highlights: [
      'AIによるアイデア発掘',
      'コンテンツ自動生成',
      '提案→受注の実績',
    ],
    outcome: '受注・売上化済み',
  },
  {
    id: 'R2',
    slug: 'r2-ai-native-sales-system',
    tier: 'S',
    title: 'AI-native営業システム（企画立案→相談→受注プロセスを運用中）',
    category: 'AI-driven ビジネス構築',
    description:
      '営業活動自体をAI-nativeに設計・運用。アイデア発掘から企画立案、顧客相談、受注までのプロセスを可視化・システム化',
    clientValue:
      '営業活動自体をAI-nativeに設計・運用している。アイデア発掘から企画立案、顧客相談、受注までの営業プロセスを可視化・運用中',
    techStack: ['AI企画', '提案書自動生成', 'クライアント管理', 'コンテンツ自動化'],
    date: '2026-06-01',
    highlights: [
      'アイデア発掘から企画立案までAI化',
      '顧客相談プロセスのシステム化',
      '受注までの営業プロセスを可視化・運用中',
    ],
    outcome: '運用中',
  },
];