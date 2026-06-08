# Kenichi Kato — Portfolio v2

個人事業主・店舗向けのLP制作・Web制作を行うフリーランスWeb制作者のポートフォリオサイトです。

🔗 **Live Site:** https://kkato0219.github.io/portfolio-v2/

---

## 使用技術

| 技術 | 用途 |
|------|------|
| HTML5 | セマンティックなマークアップ |
| CSS3 | レスポンシブデザイン・アニメーション |
| JavaScript | ハンバーガーメニュー・スクロール制御 |
| Google Fonts | Noto Sans JP |
| AOS.js | スクロールアニメーション |

---

## セクション構成

1. **Navbar** — スティッキーナビゲーション・ハンバーガーメニュー
2. **Hero** — キャッチコピー・PetPass Japan モックアップ・Trust Badges
3. **Featured Works** — 4プロジェクト・フィルタータブ
4. **Services** — LP制作・レスポンシブ・サイト修正・WordPress
5. **Why Work With Me** — 4つの強み
6. **Process** — 5ステップの制作フロー
7. **About** — プロフィール・スキルバッジ・情報カード
8. **Contact + Footer** — CrowdWorks・GitHubリンク

---

## フォルダ構成

```
portfolio-v2/
│
├── index.html
│
├── css/
│   ├── style.css        # リセット・CSS変数・共通レイアウト
│   ├── navbar.css
│   ├── hero.css
│   ├── works.css
│   ├── services.css
│   ├── why.css
│   ├── process.css
│   ├── about.css
│   └── contact.css
│
├── js/
│   └── main.js          # AOS初期化・ハンバーガーメニュー・スクロール
│
├── images/
│   ├── profile/
│   │   └── kenichi.jpg
│   └── works/
│       ├── petpass-japan.png
│       ├── may-beauty.png
│       ├── weather-dashboard.png
│       └── movie-explorer.png
│
└── README.md
```

---

## デザインシステム

| 項目 | 値 |
|------|----|
| Primary color | `#0F172A` Dark Navy |
| Accent color | `#639922` Green |
| Background | `#FFFFFF` White |
| Alt background | `#F8F8F6` Light Gray |
| Dark section | `#0F172A` Dark Navy |
| Font | Noto Sans JP 400 / 700 |
| Max width | 1100px |
| Border radius | 12px (cards) / 6px (buttons) |

---

## 制作実績（掲載プロジェクト）

| プロジェクト | カテゴリ | リンク |
|------------|---------|--------|
| PetPass Japan | LP制作 | https://kkato0219.github.io/petpass-japan/ |
| May Beauty Clinic | LP制作 | https://kkato0219.github.io/may-beauty-clinic/ |
| Weather Dashboard | JSアプリ | https://kkato0219.github.io/weather-dashboard-app/ |
| Movie Explorer | Reactアプリ | https://sage-empanada-9fe8ef.netlify.app/ |

---

## ブレークポイント

| ブレークポイント | 対象 |
|--------------|------|
| `≥ 1100px` | デスクトップ |
| `768px — 1099px` | タブレット |
| `≤ 767px` | モバイル |

---

## セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/kkato0219/portfolio-v2.git

# フォルダに移動
cd portfolio-v2

# Live Server で開く（VS Code拡張機能）
# index.html を右クリック → Open with Live Server
```

---

## 今後の予定

- [ ] main.js — ハンバーガーメニュー実装
- [ ] main.js — Navbar スクロール時の shadow
- [ ] main.js — フィルタータブの動作
- [ ] フォームの実装（Formspree など）
- [ ] GitHub Pages へのデプロイ
- [ ] OGP / meta タグの最適化

---

## 作者

**Kenichi Kato**
フリーランス Web制作者 / LP制作

- CrowdWorks: https://crowdworks.jp/public/employees/6943906
- GitHub: https://github.com/kkato0219
- Portfolio: https://kkato0219.github.io/portfolio-v2/