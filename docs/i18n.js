const translations = {
  ko: {
    'meta.title': 'EasyClaw — OpenClaw 원클릭 설치 프로그램',
    'meta.description':
      'EasyClaw로 OpenClaw AI 에이전트를 원클릭 설치하세요. Windows & macOS 지원.',
    'nav.download': '다운로드',
    'hero.tagline':
      '복잡한 설정은 잊으세요.<br /><strong>OpenClaw AI 에이전트</strong>를 원클릭으로 설치하고 바로 대화하세요.',
    'hero.versionLoading': '최신 버전 확인 중...',
    'hero.versionFallback': '최신 버전 다운로드',
    'hero.versionRelease': '출시',
    'hero.downloadMac': 'macOS 다운로드',
    'hero.downloadWin': 'Windows 다운로드',
    'hero.starGithub': 'Star on GitHub',
    'hero.openChat': '오픈채팅방 참여하기',
    'features.label': 'Features',
    'features.title': '왜 EasyClaw인가요?',
    'features.sub': '설치부터 실행까지, 모든 과정을 간단하게.',
    'features.oneclick.title': '원클릭 설치',
    'features.oneclick.desc':
      'WSL, Node.js, OpenClaw까지 필요한 모든 환경을 자동으로 감지하고 설치합니다.',
    'features.agent.title': 'AI 에이전트',
    'features.agent.desc':
      'Google, OpenAI, Anthropic, DeepSeek, Ollama 등 7개 제공사를 지원합니다.',
    'features.telegram.title': '텔레그램 연동',
    'features.telegram.desc': '텔레그램 봇을 통해 언제 어디서든 AI 에이전트와 대화할 수 있습니다.',
    'providers.label': 'AI Providers',
    'providers.title': '어떤 AI를 선택할까?',
    'providers.sub':
      '용도와 예산에 맞는 AI 제공사를 골라보세요. 가격은 100만 토큰 기준 입력/출력입니다.',
    'providers.recommended': '추천',
    'providers.signup': '가입하기',
    'providers.download': '다운로드',
    'providers.note':
      '* 가격은 변동될 수 있습니다. 각 제공사 공식 페이지에서 최신 가격을 확인하세요.',
    'steps.label': 'How it works',
    'steps.title': '3단계면 끝',
    'steps.sub': '설치 파일을 받고, 실행하고, 대화하세요.',
    'steps.download.title': '다운로드',
    'steps.download.desc': 'OS에 맞는 설치 파일을<br />한 번에 다운로드',
    'steps.install.title': '설치 & 설정',
    'steps.install.desc': 'EasyClaw가 환경을 감지하고<br />필요한 것만 자동 설치',
    'steps.chat.title': '대화 시작',
    'steps.chat.desc': 'API 키를 입력하면<br />바로 AI 에이전트 사용 가능',
    'cta.title': '지금 바로 시작하세요',
    'cta.desc': '복잡한 터미널 작업 없이, 클릭 한 번으로 AI 에이전트를 설치하세요.',
    'cta.downloadMac': 'macOS 다운로드',
    'cta.downloadWin': 'Windows 다운로드',
    'community.title': '사용법이 궁금하다면?',
    'community.desc': '설치부터 활용까지, 오픈채팅방에서 편하게 물어보세요.',
    'community.btn': '오픈채팅방 참여하기',
    'community.note': '누구나 참여 가능 · 실시간 답변',
    'contact.heading': '문의 사항이 있으시면 편하게 연락해 주세요',
    'contact.openChat': '오픈채팅방',
    'footer.privacy': '개인정보처리방침',
    'footer.copyright':
      '© 2026 <a href="https://needslab.ai" target="_blank" rel="noopener">니즈랩(NeedsLab)</a> | 사업자등록번호: 825-16-02771',
    'nav.tab.claw': 'Claw',
    'nav.tab.code': 'Code',
    'easycode.meta.title': 'EasyCode — Claude Code 원클릭 설치 프로그램',
    'easycode.meta.description':
      'EasyCode로 Claude Code를 원클릭 설치하세요. macOS & Windows 지원.',
    'easycode.hero.tagline':
      '복잡한 설정은 잊으세요.<br /><strong>Claude Code</strong>를 원클릭으로 설치하고 바로 바이브 코딩하세요.',
    'easycode.hero.downloadMac': 'macOS 다운로드',
    'easycode.hero.downloadWin': 'Windows 다운로드',
    'easycode.hero.starGithub': 'Star on GitHub',
    'easycode.hero.openChat': '오픈채팅방 참여하기',
    'easycode.features.title': '왜 EasyCode인가요?',
    'easycode.features.sub': 'Claude Code 설치의 모든 과정을 간단하게.',
    'easycode.features.oneclick.title': '원클릭 설치',
    'easycode.features.oneclick.desc':
      'Claude Code와 필요한 환경을 자동으로 감지하고 한 번에 설치합니다.',
    'easycode.features.envcheck.title': '환경 자동 체크',
    'easycode.features.envcheck.desc':
      'Git, Node.js 등 필요한 도구를 자동 감지하여 누락된 것만 설치합니다.',
    'easycode.features.i18n.title': '다국어 지원',
    'easycode.features.i18n.desc': '한국어, 영어, 일본어, 중국어 4개 언어로 편리하게 사용하세요.',
    'easycode.steps.title': '3단계면 끝',
    'easycode.steps.sub': '설치 파일을 받고, 실행하고, 코딩하세요.',
    'easycode.steps.download.title': '다운로드',
    'easycode.steps.download.desc': 'OS에 맞는 설치 파일을<br />한 번에 다운로드',
    'easycode.steps.install.title': '설치 & 설정',
    'easycode.steps.install.desc': 'EasyCode가 환경을 감지하고<br />필요한 것만 자동 설치',
    'easycode.steps.start.title': '코딩 시작',
    'easycode.steps.start.desc': '터미널에서 claude를 입력하면<br />바로 바이브 코딩 시작',
    'easycode.cta.title': '지금 바로 시작하세요',
    'easycode.cta.desc': '복잡한 터미널 작업 없이, 클릭 한 번으로 Claude Code를 설치하세요.',
    'crossBanner.code.title': 'EasyCode',
    'crossBanner.code.desc': 'Claude Code도 원클릭으로 설치해보세요',
    'crossBanner.code.btn': 'EasyCode 보기',
    'crossBanner.claw.title': 'EasyClaw',
    'crossBanner.claw.desc': 'OpenClaw AI 에이전트도 원클릭으로 설치해보세요',
    'crossBanner.claw.btn': 'EasyClaw 보기'
  },
  en: {
    'meta.title': 'EasyClaw — One-Click OpenClaw Installer',
    'meta.description':
      'Install the OpenClaw AI agent with one click using EasyClaw. Supports Windows & macOS.',
    'nav.download': 'Download',
    'hero.tagline':
      'Forget complicated setup.<br /><strong>Install the OpenClaw AI agent</strong> with one click and start chatting right away.',
    'hero.versionLoading': 'Checking latest version...',
    'hero.versionFallback': 'Download latest version',
    'hero.versionRelease': 'Released',
    'hero.downloadMac': 'macOS Download',
    'hero.downloadWin': 'Windows Download',
    'hero.starGithub': 'Star on GitHub',
    'hero.openChat': 'Join Open Chat',
    'features.label': 'Features',
    'features.title': 'Why EasyClaw?',
    'features.sub': 'From installation to launch, everything made simple.',
    'features.oneclick.title': 'One-Click Install',
    'features.oneclick.desc':
      'Automatically detects and installs everything you need — WSL, Node.js, and OpenClaw.',
    'features.agent.title': 'AI Agent',
    'features.agent.desc':
      'Supports 7 providers including Google, OpenAI, Anthropic, DeepSeek, and Ollama.',
    'features.telegram.title': 'Telegram Integration',
    'features.telegram.desc': 'Chat with your AI agent anytime, anywhere through a Telegram bot.',
    'providers.label': 'AI Providers',
    'providers.title': 'Which AI should you choose?',
    'providers.sub':
      'Pick the provider that fits your needs and budget. Prices are per 1M tokens (input/output).',
    'providers.recommended': 'Recommended',
    'providers.signup': 'Sign up',
    'providers.download': 'Download',
    'providers.note':
      "* Prices may change. Check each provider's official page for the latest pricing.",
    'steps.label': 'How it works',
    'steps.title': 'Done in 3 Steps',
    'steps.sub': 'Download, install, and start chatting.',
    'steps.download.title': 'Download',
    'steps.download.desc': 'Download the installer<br />for your OS',
    'steps.install.title': 'Install & Configure',
    'steps.install.desc': 'EasyClaw detects your environment<br />and auto-installs what you need',
    'steps.chat.title': 'Start Chatting',
    'steps.chat.desc': 'Enter your API key<br />and start using the AI agent',
    'cta.title': 'Get Started Now',
    'cta.desc': 'Install your AI agent with a single click — no terminal needed.',
    'cta.downloadMac': 'macOS Download',
    'cta.downloadWin': 'Windows Download',
    'community.title': 'Have questions?',
    'community.desc': 'From installation to usage, feel free to ask in our open chat.',
    'community.btn': 'Join Open Chat',
    'community.note': 'Anyone can join · Real-time support',
    'contact.heading': 'Feel free to contact us with any questions',
    'contact.openChat': 'Open Chat',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright':
      '© 2026 <a href="https://needslab.ai" target="_blank" rel="noopener">NeedsLab</a> | Business Registration: 825-16-02771',
    'nav.tab.claw': 'Claw',
    'nav.tab.code': 'Code',
    'easycode.meta.title': 'EasyCode — One-Click Claude Code Installer',
    'easycode.meta.description':
      'Install Claude Code with one click using EasyCode. Supports macOS & Windows.',
    'easycode.hero.tagline':
      'Forget complicated setup.<br /><strong>Install Claude Code</strong> with one click and start vibe coding right away.',
    'easycode.hero.downloadMac': 'macOS Download',
    'easycode.hero.downloadWin': 'Windows Download',
    'easycode.hero.starGithub': 'Star on GitHub',
    'easycode.hero.openChat': 'Join Open Chat',
    'easycode.features.title': 'Why EasyCode?',
    'easycode.features.sub': 'Every step of Claude Code installation, simplified.',
    'easycode.features.oneclick.title': 'One-Click Install',
    'easycode.features.oneclick.desc':
      'Automatically detects and installs Claude Code and all required dependencies at once.',
    'easycode.features.envcheck.title': 'Auto Environment Check',
    'easycode.features.envcheck.desc':
      'Automatically detects required tools like Git and Node.js, installing only what is missing.',
    'easycode.features.i18n.title': 'Multi-Language',
    'easycode.features.i18n.desc':
      'Available in 4 languages: Korean, English, Japanese, and Chinese.',
    'easycode.steps.title': 'Done in 3 Steps',
    'easycode.steps.sub': 'Download, install, and start coding.',
    'easycode.steps.download.title': 'Download',
    'easycode.steps.download.desc': 'Download the installer<br />for your OS',
    'easycode.steps.install.title': 'Install & Configure',
    'easycode.steps.install.desc':
      'EasyCode detects your environment<br />and auto-installs what you need',
    'easycode.steps.start.title': 'Start Coding',
    'easycode.steps.start.desc': 'Type claude in the terminal<br />and start vibe coding',
    'easycode.cta.title': 'Get Started Now',
    'easycode.cta.desc': 'Install Claude Code with a single click — no terminal needed.',
    'crossBanner.code.title': 'EasyCode',
    'crossBanner.code.desc': 'Install Claude Code with one click too',
    'crossBanner.code.btn': 'View EasyCode',
    'crossBanner.claw.title': 'EasyClaw',
    'crossBanner.claw.desc': 'Install OpenClaw AI agent with one click too',
    'crossBanner.claw.btn': 'View EasyClaw'
  },
  ja: {
    'meta.title': 'EasyClaw — OpenClaw ワンクリックインストーラー',
    'meta.description':
      'EasyClawでOpenClaw AIエージェントをワンクリックインストール。Windows & macOS対応。',
    'nav.download': 'ダウンロード',
    'hero.tagline':
      '複雑な設定は忘れてください。<br /><strong>OpenClaw AIエージェント</strong>をワンクリックでインストールしてすぐに会話を始めましょう。',
    'hero.versionLoading': '最新バージョン確認中...',
    'hero.versionFallback': '最新バージョンをダウンロード',
    'hero.versionRelease': 'リリース',
    'hero.downloadMac': 'macOS ダウンロード',
    'hero.downloadWin': 'Windows ダウンロード',
    'hero.starGithub': 'Star on GitHub',
    'hero.openChat': 'オープンチャットに参加',
    'features.label': 'Features',
    'features.title': 'なぜEasyClawなのか？',
    'features.sub': 'インストールから実行まで、すべてをシンプルに。',
    'features.oneclick.title': 'ワンクリックインストール',
    'features.oneclick.desc':
      'WSL、Node.js、OpenClawまで必要なすべての環境を自動で検出してインストールします。',
    'features.agent.title': 'AIエージェント',
    'features.agent.desc':
      'Google、OpenAI、Anthropic、DeepSeek、Ollamaなど7つのプロバイダーに対応。',
    'features.telegram.title': 'Telegram連携',
    'features.telegram.desc':
      'Telegramボットを通じていつでもどこでもAIエージェントと会話できます。',
    'providers.label': 'AI Providers',
    'providers.title': 'どのAIを選びますか？',
    'providers.sub':
      '用途と予算に合ったAIプロバイダーを選びましょう。価格は100万トークンあたり（入力/出力）です。',
    'providers.recommended': 'おすすめ',
    'providers.signup': '登録する',
    'providers.download': 'ダウンロード',
    'providers.note':
      '* 価格は変動する場合があります。最新の価格は各プロバイダーの公式ページでご確認ください。',
    'steps.label': 'How it works',
    'steps.title': '3ステップで完了',
    'steps.sub': 'インストーラーをダウンロードして、実行して、会話を始めましょう。',
    'steps.download.title': 'ダウンロード',
    'steps.download.desc': 'お使いのOSに合った<br />インストーラーをダウンロード',
    'steps.install.title': 'インストール＆設定',
    'steps.install.desc': 'EasyClawが環境を検出し<br />必要なものだけ自動インストール',
    'steps.chat.title': '会話開始',
    'steps.chat.desc': 'APIキーを入力すれば<br />すぐにAIエージェントが使えます',
    'cta.title': '今すぐ始めましょう',
    'cta.desc': '複雑なターミナル操作なしで、ワンクリックでAIエージェントをインストール。',
    'cta.downloadMac': 'macOS ダウンロード',
    'cta.downloadWin': 'Windows ダウンロード',
    'community.title': '使い方が気になりますか？',
    'community.desc': 'インストールから活用まで、オープンチャットでお気軽にご質問ください。',
    'community.btn': 'オープンチャットに参加',
    'community.note': '誰でも参加可能 · リアルタイム回答',
    'contact.heading': 'ご質問がありましたらお気軽にお問い合わせください',
    'contact.openChat': 'オープンチャット',
    'footer.privacy': 'プライバシーポリシー',
    'footer.copyright':
      '© 2026 <a href="https://needslab.ai" target="_blank" rel="noopener">NeedsLab</a> | 事業者登録番号: 825-16-02771',
    'nav.tab.claw': 'Claw',
    'nav.tab.code': 'Code',
    'easycode.meta.title': 'EasyCode — Claude Code ワンクリックインストーラー',
    'easycode.meta.description':
      'EasyCodeでClaude Codeをワンクリックインストール。macOS & Windows対応。',
    'easycode.hero.tagline':
      '複雑な設定は忘れてください。<br /><strong>Claude Code</strong>をワンクリックでインストールしてすぐにバイブコーディングを始めましょう。',
    'easycode.hero.downloadMac': 'macOS ダウンロード',
    'easycode.hero.downloadWin': 'Windows ダウンロード',
    'easycode.hero.starGithub': 'Star on GitHub',
    'easycode.hero.openChat': 'オープンチャットに参加',
    'easycode.features.title': 'なぜEasyCodeなのか？',
    'easycode.features.sub': 'Claude Codeインストールのすべてをシンプルに。',
    'easycode.features.oneclick.title': 'ワンクリックインストール',
    'easycode.features.oneclick.desc':
      'Claude Codeと必要な環境を自動で検出し、一度にインストールします。',
    'easycode.features.envcheck.title': '環境自動チェック',
    'easycode.features.envcheck.desc':
      'Git、Node.jsなど必要なツールを自動検出し、不足分だけインストールします。',
    'easycode.features.i18n.title': '多言語対応',
    'easycode.features.i18n.desc': '韓国語、英語、日本語、中国語の4言語で快適にご利用ください。',
    'easycode.steps.title': '3ステップで完了',
    'easycode.steps.sub': 'インストーラーをダウンロードして、実行して、コーディング開始。',
    'easycode.steps.download.title': 'ダウンロード',
    'easycode.steps.download.desc': 'お使いのOSに合った<br />インストーラーをダウンロード',
    'easycode.steps.install.title': 'インストール＆設定',
    'easycode.steps.install.desc': 'EasyCodeが環境を検出し<br />必要なものだけ自動インストール',
    'easycode.steps.start.title': 'コーディング開始',
    'easycode.steps.start.desc': 'ターミナルでclaudeと入力すれば<br />すぐにバイブコーディング開始',
    'easycode.cta.title': '今すぐ始めましょう',
    'easycode.cta.desc': '複雑なターミナル操作なしで、ワンクリックでClaude Codeをインストール。',
    'crossBanner.code.title': 'EasyCode',
    'crossBanner.code.desc': 'Claude Codeもワンクリックでインストール',
    'crossBanner.code.btn': 'EasyCodeを見る',
    'crossBanner.claw.title': 'EasyClaw',
    'crossBanner.claw.desc': 'OpenClaw AIエージェントもワンクリックでインストール',
    'crossBanner.claw.btn': 'EasyClawを見る'
  },
  zh: {
    'meta.title': 'EasyClaw — OpenClaw 一键安装程序',
    'meta.description': '使用EasyClaw一键安装OpenClaw AI代理。支持Windows和macOS。',
    'nav.download': '下载',
    'hero.tagline':
      '忘掉复杂的配置吧。<br /><strong>一键安装OpenClaw AI代理</strong>，立即开始对话。',
    'hero.versionLoading': '正在检查最新版本...',
    'hero.versionFallback': '下载最新版本',
    'hero.versionRelease': '已发布',
    'hero.downloadMac': 'macOS 下载',
    'hero.downloadWin': 'Windows 下载',
    'hero.starGithub': 'Star on GitHub',
    'hero.openChat': '加入开放聊天',
    'features.label': 'Features',
    'features.title': '为什么选择EasyClaw？',
    'features.sub': '从安装到运行，一切从简。',
    'features.oneclick.title': '一键安装',
    'features.oneclick.desc': '自动检测并安装所需的所有环境——WSL、Node.js和OpenClaw。',
    'features.agent.title': 'AI代理',
    'features.agent.desc': '支持Google、OpenAI、Anthropic、DeepSeek、Ollama等7家供应商。',
    'features.telegram.title': 'Telegram集成',
    'features.telegram.desc': '通过Telegram机器人随时随地与AI代理对话。',
    'providers.label': 'AI Providers',
    'providers.title': '选择哪个AI？',
    'providers.sub': '根据用途和预算选择合适的AI供应商。价格按每100万token（输入/输出）计算。',
    'providers.recommended': '推荐',
    'providers.signup': '注册',
    'providers.download': '下载',
    'providers.note': '* 价格可能会有变动。请在各供应商官方页面确认最新价格。',
    'steps.label': 'How it works',
    'steps.title': '3步即可完成',
    'steps.sub': '下载安装文件，运行，开始对话。',
    'steps.download.title': '下载',
    'steps.download.desc': '下载适合您操作系统的<br />安装文件',
    'steps.install.title': '安装和配置',
    'steps.install.desc': 'EasyClaw检测环境<br />自动安装所需组件',
    'steps.chat.title': '开始对话',
    'steps.chat.desc': '输入API密钥<br />即可使用AI代理',
    'cta.title': '立即开始',
    'cta.desc': '无需复杂的终端操作，一键安装AI代理。',
    'cta.downloadMac': 'macOS 下载',
    'cta.downloadWin': 'Windows 下载',
    'community.title': '有使用疑问？',
    'community.desc': '从安装到使用，在开放聊天中随时提问。',
    'community.btn': '加入开放聊天',
    'community.note': '任何人都可以加入 · 实时回复',
    'contact.heading': '如有任何问题，请随时联系我们',
    'contact.openChat': '开放聊天',
    'footer.privacy': '隐私政策',
    'footer.copyright':
      '© 2026 <a href="https://needslab.ai" target="_blank" rel="noopener">NeedsLab</a> | 营业执照号: 825-16-02771',
    'nav.tab.claw': 'Claw',
    'nav.tab.code': 'Code',
    'easycode.meta.title': 'EasyCode — Claude Code 一键安装程序',
    'easycode.meta.description': '使用EasyCode一键安装Claude Code。支持macOS和Windows。',
    'easycode.hero.tagline':
      '忘掉复杂的配置吧。<br /><strong>一键安装Claude Code</strong>，立即开始氛围编程。',
    'easycode.hero.downloadMac': 'macOS 下载',
    'easycode.hero.downloadWin': 'Windows 下载',
    'easycode.hero.starGithub': 'Star on GitHub',
    'easycode.hero.openChat': '加入开放聊天',
    'easycode.features.title': '为什么选择EasyCode？',
    'easycode.features.sub': 'Claude Code安装的每一步都变得简单。',
    'easycode.features.oneclick.title': '一键安装',
    'easycode.features.oneclick.desc': '自动检测并一次性安装Claude Code及所有必需环境。',
    'easycode.features.envcheck.title': '环境自动检测',
    'easycode.features.envcheck.desc': '自动检测Git、Node.js等必需工具，仅安装缺失的部分。',
    'easycode.features.i18n.title': '多语言支持',
    'easycode.features.i18n.desc': '支持韩语、英语、日语、中文4种语言，使用更方便。',
    'easycode.steps.title': '3步即可完成',
    'easycode.steps.sub': '下载安装文件，运行，开始编程。',
    'easycode.steps.download.title': '下载',
    'easycode.steps.download.desc': '下载适合您操作系统的<br />安装文件',
    'easycode.steps.install.title': '安装和配置',
    'easycode.steps.install.desc': 'EasyCode检测环境<br />自动安装所需组件',
    'easycode.steps.start.title': '开始编程',
    'easycode.steps.start.desc': '在终端输入claude<br />即可开始氛围编程',
    'easycode.cta.title': '立即开始',
    'easycode.cta.desc': '无需复杂的终端操作，一键安装Claude Code。',
    'crossBanner.code.title': 'EasyCode',
    'crossBanner.code.desc': '也来一键安装Claude Code吧',
    'crossBanner.code.btn': '查看EasyCode',
    'crossBanner.claw.title': 'EasyClaw',
    'crossBanner.claw.desc': '也来一键安装OpenClaw AI代理吧',
    'crossBanner.claw.btn': '查看EasyClaw'
  }
}

var SUPPORTED_LANGS = ['ko', 'en', 'ja', 'zh']
var DEFAULT_LANG = 'ko'
var STORAGE_KEY = 'easyclaw-lang'
var _currentLang = null

function safeHtml(val) {
  var tmp = document.createElement('div')
  tmp.innerHTML = val
  tmp.querySelectorAll('*').forEach(function (el) {
    Array.from(el.attributes).forEach(function (attr) {
      if (/^on/i.test(attr.name)) el.removeAttribute(attr.name)
    })
  })
  tmp.querySelectorAll('script,iframe,object,embed,form').forEach(function (n) {
    n.remove()
  })
  return tmp.innerHTML
}

function detectLang() {
  var saved = localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved

  var nav = (navigator.language || '').toLowerCase()
  if (nav.startsWith('ko')) return 'ko'
  if (nav.startsWith('ja')) return 'ja'
  if (nav.startsWith('zh')) return 'zh'
  return 'en'
}

function setLang(lang) {
  if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG
  _currentLang = lang
  localStorage.setItem(STORAGE_KEY, lang)
  applyLang(lang)
}

function applyLang(lang) {
  var t = translations[lang]
  if (!t) return

  _currentLang = lang
  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n')
    if (t[key] != null) el.textContent = t[key]
  })

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html')
    if (t[key] != null) el.innerHTML = safeHtml(t[key])
  })

  var selector = document.getElementById('lang-selector')
  if (selector) selector.value = lang

  if (typeof refreshProduct === 'function') refreshProduct()
}

function getCurrentLang() {
  return _currentLang || detectLang()
}

;(function initI18n() {
  var lang = detectLang()
  applyLang(lang)

  var selector = document.getElementById('lang-selector')
  if (selector) {
    selector.value = lang
    selector.addEventListener('change', function () {
      setLang(this.value)
    })
  }
})()
