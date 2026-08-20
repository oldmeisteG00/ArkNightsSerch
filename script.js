// ============================================================
// 堅守協定：盟約検索
// ============================================================

const operatorImagePath = name => `images/operators/${name}.png`;
const pactImagePath = name => `images/pacts/${name}.png`;
const professionImagePath = name => `images/professions/${name}.png`;


// ============================================================
// 核心盟約
// ============================================================

const corePacts = {
    "炎": {
        1: ["レイズ"],
        2: ["グレインバッズ"],
        3: ["スワイヤー", "琳琅スワイヤー"],
        4: ["ホシグマ"],
        5: ["レコードキーパー", "熾炎ブレイズ", "シー"],
        6: ["ユー", "チューバイ"]
    },
    "サルゴン": {
        1: ["エステル"],
        2: ["パピルス", "バブル"],
        3: ["フィラエ", "ミニマリスト"],
        4: ["カーネリアン", "百錬ガヴィル"],
        5: ["ティティ"],
        6: ["パッセンジャー", "ペペ"]
    },
    "ヴィクトリア": {
        1: ["ヴァンデラ"],
        2: ["ハロルド", "ロックロック"],
        3: ["ミント"],
        4: ["バグパイプ", "キャサリン"],
        5: ["熾炎ブレイズ", "ホルン"],
        6: ["ヴィーナ・ヴィクトリア", "焔影リード"]
    },
    "イェラグ": {
        1: ["マッターホルン"],
        2: ["ハロルド"],
        3: ["スノーハンター", "プラマニクス", "イェラ"],
        4: ["ノーシス", "シルバーアッシュ"],
        5: ["凛御シルバーアッシュ"],
        6: ["聖聆プラマニクス", "デーゲンブレヒャー"]
    },
    "ラテラーノ": {
        1: ["インサイダー"],
        2: ["イグゼキュター"],
        3: ["エクシア", "アルケット"],
        4: ["サンクタ・ミキサー", "モスティマ"],
        5: ["聖約イグゼキュター"],
        6: ["レミュアン", "新約エクシア", "ヴィルトゥオーサ"]
    },
    "エーギル": {
        1: ["アンダーフロー"],
        2: ["スペクター"],
        3: ["スカジ", "ルシーラ"],
        4: ["ミヅキ", "グレイディーア"],
        5: ["ウルピアヌス", "帰溟スペクター"],
        6: ["濁心スカジ"]
    },
    "シラクーザ": {
        1: ["テキサス", "プロヴァンス"],
        2: ["ラップランド"],
        3: ["ヴィジェル", "ウルピスフォリア"],
        4: ["アロマ", "血掟テキサス"],
        5: ["スズラン"],
        6: ["アンジェリーナ", "荒蕪ラップランド"]
    },
    "カジミエーシュ": {
        1: ["ワイルドメイン"],
        2: ["グラベル", "アッシュロック"],
        3: ["ブレミシャイン", "メテオ"],
        4: ["フレイムテイル", "ファートゥース"],
        5: ["ムリナール"],
        6: ["耀騎士ニアール", "デーゲンブレヒャー"]
    }
};


// ============================================================
// 附加盟約
// ============================================================

const additionalPacts = {
    "精密": {
        1: ["ケイパー", "インディゴ"],
        2: ["イグゼキュター"],
        3: ["スノーハンター"],
        4: ["寒芒クルース", "レオンハルト", "ファートゥース"],
        5: ["ティティ"],
        6: ["パッセンジャー", "レミュアン", "焔影リード", "ロスモンティス"]
    },
    "俊敏": {
        1: ["インサイダー", "ワイルドメイン"],
        2: ["ブリキ", "ティッピ"],
        3: ["パインコーン", "ウルピスフォリア"],
        4: ["レオンハルト"],
        5: ["凛御シルバーアッシュ", "引星ソーンズ", "ニンフ"],
        6: ["パッセンジャー", "デーゲンブレヒャー"]
    },
    "器用": {
        1: ["グレイ"],
        2: ["グレインバッズ", "ティッピ"],
        3: ["エアースカーペ", "ミニマリスト", "アルケット"],
        4: ["キャサリン", "ノーシス", "フィリオプシス"],
        5: ["エンテレケイア"],
        6: ["溯光アステジーニ"]
    },
    "秘術": {
        1: ["インディゴ"],
        2: ["ロックロック"],
        3: ["ルシーラ"],
        4: ["モスティマ", "アロマ"],
        5: ["スルト", "シー"],
        6: ["聖聆プラマニクス", "溯光アステジーニ"]
    },
    "堅守": {
        1: ["マッターホルン", "グム"],
        2: ["バブル", "ヴェトチキ", "アッシュロック"],
        3: ["スカジ", "クオーラ"],
        4: ["サンクタ・ミキサー"],
        5: ["サリア"],
        6: ["ユー"]
    },
    "助力": {
        1: ["ヴァンデラ", "ポデンコ"],
        2: ["パフューマー"],
        3: ["イェラ"],
        4: ["カーネリアン", "フィリオプシス"],
        6: ["ルーメン", "純燼エイヤフィヤトラ"]
    },
    "先見": {
        2: ["サイレンス"],
        3: ["スワイヤー", "プラマニクス"],
        4: ["イネス", "バグパイプ"],
        5: ["聖約イグゼキュター", "サンタラ"],
        6: ["ロスモンティス"]
    },
    "奇跡": {
        2: ["カゼマル"],
        3: ["ヴィジェル", "エクシア"],
        4: ["ワルファリン"],
        5: ["レコードキーパー", "引星ソーンズ", "アンジェリーナ"],
        6: ["ヴィーナ・ヴィクトリア"]
    },
    "投資家": {
        2: ["ブリキ"],
        3: ["琳琅スワイヤー"],
        5: ["凛御シルバーアッシュ", "マウンテン"]
    },
    "強襲": {
        1: ["ウタゲ"],
        2: ["ヒューマス"],
        3: ["スカジ", "ブレミシャイン"],
        4: ["イネス", "血掟テキサス"],
        5: ["スルト"],
        6: ["チューバイ", "耀騎士ニアール"]
    },
    "不屈": {
        1: ["リスカム"],
        2: ["グラベル"],
        3: ["クオーラ"],
        4: ["バグパイプ"],
        5: ["エンテレケイア", "帰溟スペクター"],
        6: ["ペペ"]
    },
    "調和": {
        1: ["予備隊員-補助"],
        6: ["ミュルジス"]
    },
    "共同防衛陣営": {
        1: ["予備隊員-補助"],
        2: ["パフューマー"],
        3: ["パインコーン"],
        4: ["シヴィライト・エテルナ"],
        5: ["スズラン"],
        6: ["ロスモンティス"]
    },
    "孤高": {
        1: ["テキサス"],
        2: ["ヴェトチキ"],
        3: ["メテオ"],
        4: ["ミヅキ", "マドロック"],
        5: ["サリア"]
    }
};


// ============================================================
// 職分
// ============================================================

const operatorProfessions = {
    "アッシュロック": "重装",
    "アルケット": "狙撃",
    "アロマ": "術師",
    "アンジェリーナ": "補助",
    "アンダーフロー": "重装",
    "イェラ": "術師",
    "イグゼキュター": "狙撃",
    "イネス": "先鋒",
    "インサイダー": "狙撃",
    "インディゴ": "術師",
    "ウタゲ": "前衛",
    "ウルピアヌス": "前衛",
    "ウルピスフォリア": "先鋒",
    "エアースカーペ": "前衛",
    "エクシア": "狙撃",
    "エステル": "前衛",
    "エンテレケイア": "前衛",
    "カゼマル": "特殊",
    "カーネリアン": "術師",
    "キャサリン": "補助",
    "クオーラ": "重装",
    "グム": "重装",
    "グラベル": "特殊",
    "グレイ": "術師",
    "グレイディーア": "特殊",
    "グレインバッズ": "補助",
    "ケイパー": "狙撃",
    "サイレンス": "医療",
    "サリア": "重装",
    "サンクタ・ミキサー": "重装",
    "サンタラ": "術師",
    "シルバーアッシュ": "前衛",
    "シヴィライト・エテルナ": "補助",
    "シー": "術師",
    "スカジ": "前衛",
    "スズラン": "補助",
    "スノーハンター": "狙撃",
    "スペクター": "前衛",
    "スルト": "前衛",
    "スワイヤー": "前衛",
    "チューバイ": "前衛",
    "ティッピ": "特殊",
    "ティティ": "医療",
    "テキサス": "先鋒",
    "デーゲンブレヒャー": "前衛",
    "ニンフ": "術師",
    "ノーシス": "補助",
    "ハロルド": "医療",
    "バグパイプ": "先鋒",
    "バブル": "重装",
    "パインコーン": "狙撃",
    "パッセンジャー": "術師",
    "パピルス": "医療",
    "パフューマー": "医療",
    "ヒューマス": "前衛",
    "ファートゥース": "狙撃",
    "フィラエ": "重装",
    "フィリオプシス": "医療",
    "フレイムテイル": "先鋒",
    "ブリキ": "特殊",
    "ブレミシャイン": "重装",
    "プラマニクス": "補助",
    "プロヴァンス": "狙撃",
    "ペペ": "前衛",
    "ホシグマ": "重装",
    "ホルン": "重装",
    "ポデンコ": "補助",
    "マウンテン": "前衛",
    "マッターホルン": "重装",
    "マドロック": "重装",
    "ミヅキ": "特殊",
    "ミニマリスト": "術師",
    "ミュルジス": "先鋒",
    "ミント": "術師",
    "ムリナール": "前衛",
    "メテオ": "狙撃",
    "モスティマ": "術師",
    "ユー": "重装",
    "ラップランド": "前衛",
    "リスカム": "重装",
    "ルシーラ": "補助",
    "ルーメン": "医療",
    "レイズ": "術師",
    "レオンハルト": "術師",
    "レコードキーパー": "医療",
    "レミュアン": "狙撃",
    "ロスモンティス": "狙撃",
    "ロックロック": "術師",
    "ワイルドメイン": "先鋒",
    "ワルファリン": "医療",
    "ヴァンデラ": "医療",
    "ヴィジェル": "先鋒",
    "ヴィルトゥオーサ": "補助",
    "ヴィーナ・ヴィクトリア": "前衛",
    "ヴェトチキ": "先鋒",
    "予備隊員-補助": "補助",
    "凛御シルバーアッシュ": "先鋒",
    "寒芒クルース": "狙撃",
    "帰溟スペクター": "特殊",
    "引星ソーンズ": "特殊",
    "新約エクシア": "特殊",
    "溯光アステジーニ": "補助",
    "濁心スカジ": "補助",
    "焔影リード": "医療",
    "熾炎ブレイズ": "術師",
    "琳琅スワイヤー": "特殊",
    "百錬ガヴィル": "前衛",
    "純燼エイヤフィヤトラ": "医療",
    "耀騎士ニアール": "前衛",
    "聖約イグゼキュター": "前衛",
    "聖聆プラマニクス": "術師",
    "荒蕪ラップランド": "術師",
    "血掟テキサス": "特殊"
};


// ============================================================
// 盟約効果
// ============================================================

const pactEffects = {
    "炎": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "【炎】オペレーターの攻撃力+(23+0.9×盟約加算数)%" },
            { label: "6名", text: "戦闘開始時、【炎】オペレーターの一部ステータスを集計して「炎佑」を召喚（攻撃力・HPは【炎】オペレーター合計の30%）\n「炎佑」は3体同時攻撃、攻撃時に攻撃力20%の灼燃ダメージ付与、周囲敵に元素脆弱+20%、周期的に「破邪の炎」を使用" },
            { label: "9名", text: "「炎佑」を2体召喚、「炎佑」の攻撃力1.5倍、被ダメージ-90%" }
        ],
        notes: ["「炎佑」は【調和】オペレーターのステータスを参照しない（そのオペレーターが同時に【炎】である場合を除く）"]
    },
    "サルゴン": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "【サルゴン】オペレーターがスキル発動時、全【サルゴン】オペレーターの攻撃速度+12（最大+300）、持続(5+0.22×盟約加算数)秒" },
            { label: "6名", text: "スキル発動時、さらに全【サルゴン】オペレーターの攻撃力+12%（最大+300%）" }
        ],
        notes: ["戦略【ナラントゥヤ】選択時、6名効果は変化", "ゲーム内詳細の持続時間表示は実際の2倍で誤表示、本表は実際の持続時間基準"]
    },
    "ヴィクトリア": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "装備を持つ【ヴィクトリア】オペレーターの与ダメージが(125+0.8×盟約加算数)%になる" },
            { label: "25層ごと", text: "ランダム特殊効果付きのヴィクトリア式重錘を1つ獲得" },
            { label: "6名", text: "【ヴィクトリア】オペレーターは装備1つごとに攻撃力+50%、上級装備なら+80%" }
        ],
        notes: []
    },
    "イェラグ": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "【イェラグ】オペレーターの与ダメージ125%、寒冷/凍結敵にはさらに(135+1×盟約加算数)%" },
            { label: "6名", text: "25秒ごとに寒風が吹き、敵を(20+0.1×盟約加算数)秒寒冷状態にする" }
        ],
        notes: []
    },
    "ラテラーノ": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "【ラテラーノ】オペレーターがスキル発動時に得る弾薬量+(5+1.5×盟約加算数)%（端数切り捨て）" },
            { label: "6名", text: "任意の【ラテラーノ】オペレーターが弾薬を1発消費するたび、全【ラテラーノ】オペレーターの攻撃力+4%（最大+200%）" }
        ],
        notes: []
    },
    "エーギル": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "【エーギル】オペレーターの最大HP+(35+1×盟約加算数)%\n戦闘開始時、【エーギル】オペレーターは順番に前方1マスのオペレーター、および自身に捕食された【エーギル】オペレーターの前方1マスのオペレーターを捕食する\n捕食対象に5000の物理HP減少を与え、その対象の基礎攻撃力とブロック数を獲得し、対象の等級に等しい盟約加算数を加算する" },
            { label: "5名", text: "最初の3名の【エーギル】オペレーターは初回撃破時に即復活" }
        ],
        notes: [
            "【エーギル】同士では、より左かつ上のオペレーターが優先して捕食を行う",
            "各マークは付与順に【捕食】を発動し、初回撃破後は未発動の【捕食】マークを解除",
            "【捕食】による物理HP減少の発生源は対象自身だが、撃破元は対応するマーク付与元になる",
            "復活は、移動以外で退場した際に次回再配置まで再配置時間・コスト0になる形で実装"
        ]
    },
    "シラクーザ": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "【シラクーザ】オペレーターは配置後、攻撃速度+(25+0.8×盟約加算数)、持続(32+0.4×盟約加算数)秒" },
            { label: "6名", text: "配置後、同時間のステルス状態に入る\nステルス中およびステルス解除後10秒以内に敵を攻撃した際、3%で(5000+50×盟約加算数)の確定ダメージ＋3秒恐怖" }
        ],
        notes: ["ステルス解除後10秒以内に状態異常/状態異常耐性が変化すると加算タイマー更新", "通常ダメージを与えた時のみ、オペレーター自身を発生源とする追加確定ダメージと恐怖を試行"]
    },
    "カジミエーシュ": {
        type: "核心盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "オペレーターが配置されるたび、【カジミエーシュ】オペレーターの攻撃力+20%（最大+(50+1×盟約加算数)%）" },
            { label: "6名", text: "【カジミエーシュ】オペレーターは敵をブロック中、2秒ごとに周囲（半径0.8）の敵へ攻撃力120%の確定ダメージ＋0.1秒スタン\n敵をブロックしていない時は、通常ダメージを与えるたびに攻撃力30%分の確定ダメージを追加" }
        ],
        notes: ["ブロック中はオペレーター自身を発生源とする通常の確定ダメージ、非ブロック時は発生源を持たない追加確定ダメージ"]
    },
    "精密": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "【精密】の攻撃力+(10+1.2×盟約加算数)%" },
            { label: "3名", text: "効果範囲が全【精密】オペレーターと遠距離オペレーターに拡大し、攻撃時に防御力と術耐性を30%無視" }
        ],
        notes: []
    },
    "俊敏": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "【俊敏】オペレーターはスキル終了時、(20+0.35×盟約加算数)%で即座に12SP回復" },
            { label: "40層", text: "全オペレーターがスキル終了時、等確率で追加15SP回復" }
        ],
        notes: []
    },
    "器用": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "【器用】オペレーターおよび周囲4マスのオペレーターの攻撃速度+(10+1×盟約加算数)" },
            { label: "40層", text: "効果範囲が【器用】オペレーターの周囲8マスに拡大" }
        ],
        notes: []
    },
    "秘術": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "【秘術】オペレーターが術ダメージを与えた時、対象が受ける術ダメージを(20+1×盟約加算数)%上昇、持続3秒" },
            { label: "3名", text: "【秘術】オペレーターがHP50%未満の敵に与えるダメージ上昇率が(68+1.4×盟約加算数)%になる" }
        ],
        notes: ["同一オペレーターは同一目標にこの効果を同時に1つまでしか付与できない"]
    },
    "堅守": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "全オペレーターの最大HP+(25+1.2×盟約加算数)%" },
            { label: "3名", text: "【堅守】以外のオペレーターが受けたダメージの40%を【堅守】オペレーターが均等に肩代わりする\n【堅守】オペレーターがダメージを受けた時、ダメージ源に(850+10×盟約加算数)の術ダメージを与え、5秒間40%の脆弱を付与（0.2秒ごとに最大1回）" }
        ],
        notes: ["術反射は各オペレーターごとに独立してクールダウンを持ち、発生源を選別せず直接ダメージ源を対象にする"]
    },
    "助力": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "全オペレーターの防御力+(15+1.2×盟約加算数)%、再配置時間-30%\n整備フェーズ終了時、現在発動中の全盟約加算数+2" },
            { label: "3名", text: "場に異なる名前、または異なる精鋭状態の【助力】オペレーターが3名いる場合、盟約加算数増加が+4になる" }
        ],
        notes: ["3人効果は条件を満たせばよく、実際に有効人数3人に達している必要はない"]
    },
    "先見": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "10層ごとに2資金獲得" },
            { label: "80層初到達", text: "全【先見】オペレーターの購入価格が永続的に-1資金" },
            { label: "150層初到達", text: "上記効果が調度センター内の全オペレーターの購入価格永続-1資金に変化" }
        ],
        notes: ["整備区の【先見】オペレーターも発動人数に数える"]
    },
    "奇跡": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "調度センター更新時、(18+0.3×盟約加算数)%で次回更新が無料になる" },
            { label: "100層ごと", text: "20資金獲得" }
        ],
        notes: ["整備区の【奇跡】オペレーターも発動人数に数える"]
    },
    "投資家": {
        type: "附加盟約",
        requiredCount: 3,
        effects: [
            { label: "3名", text: "オペレーターの「獲得時」系特性が毎回2回発動" },
            { label: "100層", text: "「獲得時」系特性が毎回3回発動" }
        ],
        notes: ["整備区の【投資家】オペレーターも発動人数に数える"]
    },
    "強襲": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "【強襲】オペレーターが10秒間攻撃していない、またはスキル準備完了時に範囲内に敵がいない場合、SPを保持したまま即座に地上敵の周囲へ再配置され、その間、攻撃力と最大HP+(25+1×盟約加算数)%" },
            { label: "50層", text: "全オペレーターの攻撃速度+50" }
        ],
        notes: []
    },
    "不屈": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "地上オペレーターが撃破された時、(18+0.4×盟約加算数)%で即座に再配置される" },
            { label: "3名", text: "地上オペレーターが撃破された時、場の全オペレーターのSP+5" }
        ],
        notes: ["即時再配置は、退場時に次回再配置まで再配置時間とコストが0になる形で実装（復活効果を優先消費）"]
    },
    "調和": {
        type: "附加盟約",
        requiredCount: 1,
        effects: [
            { label: "1名", text: "発動時、場の核心盟約の発動人数を+1でき、【調和】オペレーターは発動中の核心盟約の効果を受ける" }
        ],
        notes: []
    },
    "共同防衛陣営": {
        type: "附加盟約",
        requiredCount: 2,
        effects: [
            { label: "2名", text: "全オペレーターが受ける物理・術ダメージ-20%\n【共同防衛陣営】の与ダメージは120%、精鋭【共同防衛陣営】は140%になる" }
        ],
        notes: []
    },
    "孤高": {
        type: "附加盟約",
        requiredCount: 1,
        effects: [
            { label: "1名", text: "場に【孤高】オペレーターが1名いる時、【孤高】オペレーターの攻撃力・最大HP+60%、配置後SP+15" },
            { label: "無効条件", text: "場に異なる【孤高】オペレーターが2名以上いる場合、この効果は無効" }
        ],
        notes: []
    }
};


// ============================================================
// オペレーター生成
// ============================================================

const operatorsMap = new Map();

function ensureOperator(name) {
    if (!operatorsMap.has(name)) {
        operatorsMap.set(name, {
            name,
            profession: operatorProfessions[name] || "不明",
            corePacts: [],
            additionalPacts: []
        });
    }

    return operatorsMap.get(name);
}

Object.entries(corePacts).forEach(([pactName, levels]) => {
    Object.entries(levels).forEach(([level, names]) => {
        names.forEach(name => {
            ensureOperator(name).corePacts.push({
                name: pactName,
                level: Number(level)
            });
        });
    });
});

Object.entries(additionalPacts).forEach(([pactName, levels]) => {
    Object.entries(levels).forEach(([level, names]) => {
        names.forEach(name => {
            ensureOperator(name).additionalPacts.push({
                name: pactName,
                level: Number(level)
            });
        });
    });
});

const operators = Array.from(operatorsMap.values());


// ============================================================
// 状態
// ============================================================

const selectedCorePacts = new Set();
const selectedAdditionalPacts = new Set();
const selectedProfessions = new Set();
const selectedLevels = new Set();
const formationOperators = new Set();


// ============================================================
// DOM
// ============================================================

const corePactButtons = document.getElementById("corePactButtons");
const additionalPactButtons = document.getElementById("additionalPactButtons");
const professionButtons = document.getElementById("professionButtons");
const levelButtons = document.getElementById("levelButtons");
const resetButton = document.getElementById("resetButton");
const searchInput = document.getElementById("searchInput");
const operatorList = document.getElementById("operatorList");
const resultCount = document.getElementById("resultCount");

const selectedConditionsArea = document.getElementById("selectedConditionsArea");
const selectedConditions = document.getElementById("selectedConditions");

const formationOperatorsElement = document.getElementById("formationOperators");
const formationCoreSummary = document.getElementById("formationCoreSummary");
const formationAdditionalSummary = document.getElementById("formationAdditionalSummary");
const clearFormationButton = document.getElementById("clearFormationButton");


// ============================================================
// 共通画像
// ============================================================

function createImageWithFallback(path, alt, imgClass, fallbackClass, fallbackText) {
    const wrap = document.createElement("div");

    const img = document.createElement("img");
    img.src = path;
    img.alt = alt;
    img.classList.add(imgClass);

    const fallback = document.createElement("div");
    fallback.classList.add(fallbackClass);
    fallback.textContent = fallbackText;
    fallback.style.display = "none";

    img.addEventListener("error", () => {
        img.style.display = "none";
        fallback.style.display = "flex";
    });

    wrap.appendChild(img);
    wrap.appendChild(fallback);

    return wrap;
}

function createInlineIcon(path, alt, imgClass, fallbackClass, fallbackText) {
    const img = document.createElement("img");
    img.src = path;
    img.alt = alt;
    img.classList.add(imgClass);

    const fallback = document.createElement("span");
    fallback.classList.add(fallbackClass);
    fallback.textContent = fallbackText;
    fallback.style.display = "none";

    img.addEventListener("error", () => {
        img.style.display = "none";
        fallback.style.display = "inline-flex";
    });

    return { img, fallback };
}

function createPactIcon(name, imgClass, fallbackClass) {
    return createInlineIcon(
        pactImagePath(name),
        `${name}マーク`,
        imgClass,
        fallbackClass,
        name.slice(0, 1)
    );
}

function createProfessionIcon(name, imgClass, fallbackClass) {
    return createInlineIcon(
        professionImagePath(name),
        `${name}マーク`,
        imgClass,
        fallbackClass,
        name.slice(0, 1)
    );
}


// ============================================================
// ツールチップ
// ============================================================

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

function getPactLevels(pactName) {
    return corePacts[pactName] || additionalPacts[pactName] || null;
}

function appendTooltipOperatorList(pactName, highlightFormation = false) {
    const levels = getPactLevels(pactName);

    if (!levels) {
        return;
    }

    const title = document.createElement("div");
    title.classList.add("tooltip-operators-title");
    title.textContent = "対応オペレーター";
    tooltip.appendChild(title);

    const levelGroups =
        document.createElement("div");

    levelGroups.classList.add(
        "tooltip-level-groups"
    );

    tooltip.appendChild(
        levelGroups
    );

    Object.entries(levels)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .forEach(([level, names]) => {
            const group = document.createElement("div");
            group.classList.add("tooltip-level-group");

            const levelLabel = document.createElement("div");
            levelLabel.classList.add("tooltip-level-label");
            levelLabel.dataset.level = String(level);
            levelLabel.textContent = toRoman(Number(level));
            group.appendChild(levelLabel);

            const grid = document.createElement("div");
            grid.classList.add("tooltip-operator-grid");

            names.forEach(name => {
                const item = document.createElement("div");
                item.classList.add("tooltip-operator-item");

                if (
                    highlightFormation &&
                    formationOperators.has(name)
                ) {
                    item.classList.add("selected");
                }

                const imageWrap = createImageWithFallback(
                    operatorImagePath(name),
                    name,
                    "tooltip-operator-image",
                    "tooltip-operator-image-fallback",
                    "画像なし"
                );

                imageWrap.classList.add(
                    "tooltip-operator-image-wrap"
                );

                const nameEl =
                    document.createElement("div");

                nameEl.classList.add(
                    "tooltip-operator-name"
                );

                nameEl.textContent = name;

                item.appendChild(imageWrap);
                item.appendChild(nameEl);
                grid.appendChild(item);
            });

            group.appendChild(grid);
            levelGroups.appendChild(group);
        });
}

function buildTooltipContent(pactName, options = {}) {
    const data = pactEffects[pactName];

    if (!data) {
        return;
    }

    tooltip.innerHTML = "";

    const title = document.createElement("div");
    title.classList.add("tooltip-title");
    title.textContent = pactName;
    tooltip.appendChild(title);

    const type = document.createElement("div");
    type.classList.add("tooltip-type");
    type.textContent = data.type;
    tooltip.appendChild(type);

    const required = document.createElement("div");
    required.classList.add("tooltip-required");
    required.textContent = `発動に必要な人数：${data.requiredCount}`;
    tooltip.appendChild(required);

    if (options.formationCount !== undefined) {
        const status = document.createElement("div");
        status.classList.add("tooltip-formation-status");

        const missing =
            Math.max(
                0,
                data.requiredCount - options.formationCount
            );

        if (missing === 0) {
            status.classList.add("active");
            status.textContent =
                `現在 ${options.formationCount}名 / 必要 ${data.requiredCount}名　✓ 発動中`;
        } else {
            status.classList.add("missing");
            status.textContent =
                `現在 ${options.formationCount}名 / 必要 ${data.requiredCount}名　あと${missing}名で発動`;
        }

        tooltip.appendChild(status);
    }

    data.effects.forEach(effect => {
        const block = document.createElement("div");
        block.classList.add("tooltip-effect");

        const label = document.createElement("div");
        label.classList.add("tooltip-effect-label");
        label.textContent = effect.label;

        const text = document.createElement("div");
        text.classList.add("tooltip-effect-text");
        text.textContent = effect.text;

        block.appendChild(label);
        block.appendChild(text);
        tooltip.appendChild(block);
    });

    if (data.notes && data.notes.length > 0) {
        const notesTitle = document.createElement("div");
        notesTitle.classList.add("tooltip-notes-title");
        notesTitle.textContent = "注記";
        tooltip.appendChild(notesTitle);

        data.notes.forEach(note => {
            const noteEl = document.createElement("div");
            noteEl.classList.add("tooltip-note");
            noteEl.textContent = `・${note}`;
            tooltip.appendChild(noteEl);
        });
    }

    appendTooltipOperatorList(
        pactName,
        options.highlightFormation === true
    );
}

function showTooltip(event, pactName, options = {}) {
    buildTooltipContent(pactName, options);
    tooltip.classList.add("visible");
    moveTooltip(event);
}

function moveTooltip(event) {
    const gap = 14;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let x = event.clientX + gap;
    let y = event.clientY + gap;

    if (x + tooltipWidth > window.innerWidth - 10) {
        x = event.clientX - tooltipWidth - gap;
    }

    if (y + tooltipHeight > window.innerHeight - 10) {
        y = window.innerHeight - tooltipHeight - 10;
    }

    x = Math.max(10, x);
    y = Math.max(10, y);

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function hideTooltip() {
    tooltip.classList.remove("visible");
}


// ============================================================
// フィルターボタン
// ============================================================

function createPactButton(pactName, selectedSet) {
    const button = document.createElement("button");
    button.classList.add("pact-button");
    button.dataset.pact = pactName;

    const icon = createPactIcon(
        pactName,
        "pact-button-icon",
        "pact-button-icon-fallback"
    );

    button.appendChild(icon.img);
    button.appendChild(icon.fallback);

    const label = document.createElement("span");
    label.textContent = pactName;
    button.appendChild(label);

    button.addEventListener("click", () => {
        if (selectedSet.has(pactName)) {
            selectedSet.delete(pactName);
        } else {
            selectedSet.add(pactName);
        }

        refreshAll();
    });

    button.addEventListener("mouseenter", event => {
        showTooltip(event, pactName);
    });

    button.addEventListener("mousemove", moveTooltip);
    button.addEventListener("mouseleave", hideTooltip);

    return button;
}

Object.keys(corePacts).forEach(pactName => {
    corePactButtons.appendChild(
        createPactButton(pactName, selectedCorePacts)
    );
});

Object.keys(additionalPacts).forEach(pactName => {
    additionalPactButtons.appendChild(
        createPactButton(pactName, selectedAdditionalPacts)
    );
});

const professions = [
    "先鋒",
    "前衛",
    "重装",
    "狙撃",
    "術師",
    "医療",
    "補助",
    "特殊"
];

professions.forEach(professionName => {
    const button = document.createElement("button");
    button.classList.add("profession-button");
    button.dataset.profession = professionName;

    const icon = createProfessionIcon(
        professionName,
        "profession-icon",
        "profession-icon-fallback"
    );

    button.appendChild(icon.img);
    button.appendChild(icon.fallback);

    const label = document.createElement("span");
    label.textContent = professionName;
    button.appendChild(label);

    button.addEventListener("click", () => {
        if (selectedProfessions.has(professionName)) {
            selectedProfessions.delete(professionName);
        } else {
            selectedProfessions.add(professionName);
        }

        refreshAll();
    });

    professionButtons.appendChild(button);
});

[1, 2, 3, 4, 5, 6].forEach(level => {
    const button = document.createElement("button");
    button.classList.add("level-button");
    button.dataset.level = String(level);
    button.textContent = toRoman(level);

    button.addEventListener("click", () => {
        if (selectedLevels.has(level)) {
            selectedLevels.delete(level);
        } else {
            selectedLevels.add(level);
        }

        refreshAll();
    });

    levelButtons.appendChild(button);
});

function updateFilterButtons() {
    document
        .querySelectorAll("#corePactButtons .pact-button")
        .forEach(button => {
            button.classList.toggle(
                "active",
                selectedCorePacts.has(button.dataset.pact)
            );
        });

    document
        .querySelectorAll("#additionalPactButtons .pact-button")
        .forEach(button => {
            button.classList.toggle(
                "active",
                selectedAdditionalPacts.has(button.dataset.pact)
            );
        });

    document
        .querySelectorAll(".profession-button")
        .forEach(button => {
            button.classList.toggle(
                "active",
                selectedProfessions.has(button.dataset.profession)
            );
        });

    document
        .querySelectorAll(".level-button")
        .forEach(button => {
            button.classList.toggle(
                "active",
                selectedLevels.has(Number(button.dataset.level))
            );
        });
}


// ============================================================
// 選択中条件
// ============================================================

function createConditionChip(label, removeHandler) {
    const chip = document.createElement("div");
    chip.classList.add("condition-chip");

    const text = document.createElement("span");
    text.textContent = label;

    const remove = document.createElement("button");
    remove.classList.add("condition-chip-remove");
    remove.type = "button";
    remove.textContent = "×";
    remove.addEventListener("click", removeHandler);

    chip.appendChild(text);
    chip.appendChild(remove);

    return chip;
}

function updateSelectedConditions() {
    selectedConditions.innerHTML = "";

    const chips = [];
    const searchText = searchInput.value.trim();

    if (searchText !== "") {
        chips.push(
            createConditionChip(`名前：${searchText}`, () => {
                searchInput.value = "";
                refreshAll();
            })
        );
    }

    selectedCorePacts.forEach(name => {
        chips.push(
            createConditionChip(`核心：${name}`, () => {
                selectedCorePacts.delete(name);
                refreshAll();
            })
        );
    });

    selectedAdditionalPacts.forEach(name => {
        chips.push(
            createConditionChip(`附加：${name}`, () => {
                selectedAdditionalPacts.delete(name);
                refreshAll();
            })
        );
    });

    selectedProfessions.forEach(name => {
        chips.push(
            createConditionChip(`職分：${name}`, () => {
                selectedProfessions.delete(name);
                refreshAll();
            })
        );
    });

    selectedLevels.forEach(level => {
        chips.push(
            createConditionChip(`レベル：${toRoman(level)}`, () => {
                selectedLevels.delete(level);
                refreshAll();
            })
        );
    });

    chips.forEach(chip => selectedConditions.appendChild(chip));

    selectedConditionsArea.classList.toggle(
        "empty",
        chips.length === 0
    );
}

resetButton.addEventListener("click", () => {
    selectedCorePacts.clear();
    selectedAdditionalPacts.clear();
    selectedProfessions.clear();
    selectedLevels.clear();
    searchInput.value = "";
    refreshAll();
});

searchInput.addEventListener("input", refreshAll);


// ============================================================
// 検索判定
// ============================================================

function pactMatchesLevel(pact) {
    return (
        selectedLevels.size === 0 ||
        selectedLevels.has(pact.level)
    );
}

function operatorMatchesSelectedPacts(operator) {
    const matchesCore =
        [...selectedCorePacts].every(pactName =>
            operator.corePacts.some(pact =>
                pact.name === pactName &&
                pactMatchesLevel(pact)
            )
        );

    const matchesAdditional =
        [...selectedAdditionalPacts].every(pactName =>
            operator.additionalPacts.some(pact =>
                pact.name === pactName &&
                pactMatchesLevel(pact)
            )
        );

    const noPactSelected =
        selectedCorePacts.size === 0 &&
        selectedAdditionalPacts.size === 0;

    if (noPactSelected && selectedLevels.size > 0) {
        return [
            ...operator.corePacts,
            ...operator.additionalPacts
        ].some(pact =>
            selectedLevels.has(pact.level)
        );
    }

    return matchesCore && matchesAdditional;
}

function operatorMatchesProfession(operator) {
    return (
        selectedProfessions.size === 0 ||
        selectedProfessions.has(operator.profession)
    );
}

function isMatchedPact(pact, type) {
    const set =
        type === "core"
            ? selectedCorePacts
            : selectedAdditionalPacts;

    if (!set.has(pact.name)) {
        return false;
    }

    if (
        selectedLevels.size > 0 &&
        !selectedLevels.has(pact.level)
    ) {
        return false;
    }

    return true;
}


// ============================================================
// カード表示
// ============================================================

function createOperatorImage(operatorName) {
    const wrap = document.createElement("div");
    wrap.classList.add("operator-image-wrap");

    const img = document.createElement("img");
    img.src = operatorImagePath(operatorName);
    img.alt = operatorName;
    img.classList.add("operator-image");

    const fallback = document.createElement("div");
    fallback.classList.add("operator-image-fallback");
    fallback.textContent = "画像未設定";
    fallback.style.display = "none";

    img.addEventListener("error", () => {
        img.style.display = "none";
        fallback.style.display = "flex";
    });

    wrap.appendChild(img);
    wrap.appendChild(fallback);

    return wrap;
}

function createPactTag(pact, type) {
    const tag = document.createElement("span");
    tag.classList.add("pact-tag");
    tag.dataset.level = String(pact.level);

    if (isMatchedPact(pact, type)) {
        tag.classList.add("matched");
    }

    const icon = createPactIcon(
        pact.name,
        "pact-tag-icon",
        "pact-tag-icon-fallback"
    );

    tag.appendChild(icon.img);
    tag.appendChild(icon.fallback);

    const text = document.createElement("span");
    text.textContent = `${pact.name} ${toRoman(pact.level)}`;
    tag.appendChild(text);

    tag.addEventListener("mouseenter", event => {
        showTooltip(event, pact.name);
    });

    tag.addEventListener("mousemove", moveTooltip);
    tag.addEventListener("mouseleave", hideTooltip);

    return tag;
}

function displayOperators() {
    operatorList.innerHTML = "";

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();

    const filteredOperators =
        operators.filter(operator => {
            const matchesName =
                operator.name
                    .toLowerCase()
                    .includes(searchText);

            return (
                matchesName &&
                operatorMatchesSelectedPacts(operator) &&
                operatorMatchesProfession(operator)
            );
        });

    resultCount.textContent = `${filteredOperators.length}件`;

    filteredOperators.forEach(operator => {
        const card = document.createElement("div");
        card.classList.add("operator-card");

        if (formationOperators.has(operator.name)) {
            card.classList.add("in-formation");
        }

        card.appendChild(createOperatorImage(operator.name));

        const body = document.createElement("div");
        body.classList.add("operator-card-body");

        const nameRow = document.createElement("div");
        nameRow.classList.add("operator-name-row");

        const professionIcon = createProfessionIcon(
            operator.profession,
            "operator-name-profession-icon",
            "operator-name-profession-icon-fallback"
        );

        nameRow.appendChild(professionIcon.img);
        nameRow.appendChild(professionIcon.fallback);

        const name = document.createElement("h4");
        name.classList.add("operator-name");
        name.textContent = operator.name;

        nameRow.appendChild(name);
        body.appendChild(nameRow);

        const coreTitle = document.createElement("div");
        coreTitle.classList.add("pact-section-title");
        coreTitle.textContent = "核心盟約";
        body.appendChild(coreTitle);

        const coreList = document.createElement("div");
        coreList.classList.add("pact-list");

        if (operator.corePacts.length === 0) {
            const none = document.createElement("span");
            none.classList.add("pact-none");
            none.textContent = "なし";
            coreList.appendChild(none);
        } else {
            operator.corePacts.forEach(pact => {
                coreList.appendChild(createPactTag(pact, "core"));
            });
        }

        body.appendChild(coreList);

        const additionalTitle = document.createElement("div");
        additionalTitle.classList.add("pact-section-title");
        additionalTitle.textContent = "附加盟約";
        body.appendChild(additionalTitle);

        const additionalList = document.createElement("div");
        additionalList.classList.add("pact-list");

        if (operator.additionalPacts.length === 0) {
            const none = document.createElement("span");
            none.classList.add("pact-none");
            none.textContent = "なし";
            additionalList.appendChild(none);
        } else {
            operator.additionalPacts.forEach(pact => {
                additionalList.appendChild(
                    createPactTag(pact, "additional")
                );
            });
        }

        body.appendChild(additionalList);

        const formationButton = document.createElement("button");
        formationButton.classList.add("formation-toggle-button");

        const inFormation =
            formationOperators.has(operator.name);

        formationButton.classList.toggle("active", inFormation);
        formationButton.textContent =
            inFormation
                ? "編成候補から外す"
                : "編成候補に追加";

        formationButton.addEventListener("click", () => {
            toggleFormationOperator(operator.name);
        });

        body.appendChild(formationButton);

        card.appendChild(body);
        operatorList.appendChild(card);
    });

    if (filteredOperators.length === 0) {
        const empty = document.createElement("div");
        empty.classList.add("no-result");
        empty.textContent = "該当するオペレーターがいません。";
        operatorList.appendChild(empty);
    }
}


// ============================================================
// 編成候補
// ============================================================

function toggleFormationOperator(operatorName) {
    if (formationOperators.has(operatorName)) {
        formationOperators.delete(operatorName);
    } else {
        formationOperators.add(operatorName);
    }

    displayOperators();
    updateFormation();
}

clearFormationButton.addEventListener("click", () => {
    formationOperators.clear();
    displayOperators();
    updateFormation();
});

function createFormationOperatorChip(operatorName) {
    const operator = operatorsMap.get(operatorName);

    const chip = document.createElement("div");
    chip.classList.add("formation-operator-chip");

    if (operator) {
        const icon = createProfessionIcon(
            operator.profession,
            "operator-name-profession-icon",
            "operator-name-profession-icon-fallback"
        );

        chip.appendChild(icon.img);
        chip.appendChild(icon.fallback);
    }

    const text = document.createElement("span");
    text.textContent = operatorName;
    chip.appendChild(text);

    const remove = document.createElement("button");
    remove.classList.add("formation-operator-remove");
    remove.type = "button";
    remove.textContent = "×";

    remove.addEventListener("click", () => {
        formationOperators.delete(operatorName);
        displayOperators();
        updateFormation();
    });

    chip.appendChild(remove);

    return chip;
}

function buildFormationCounts(type) {
    const counts = new Map();

    formationOperators.forEach(operatorName => {
        const operator = operatorsMap.get(operatorName);

        if (!operator) {
            return;
        }

        const pacts =
            type === "core"
                ? operator.corePacts
                : operator.additionalPacts;

        pacts.forEach(pact => {
            counts.set(
                pact.name,
                (counts.get(pact.name) || 0) + 1
            );
        });
    });

    return counts;
}

function createFormationPactRow(pactName, count) {
    const data = pactEffects[pactName];
    const requiredCount = data?.requiredCount ?? 0;
    const isActive = count >= requiredCount;

    const row = document.createElement("div");
    row.classList.add(
        "formation-pact-row",
        isActive ? "active" : "inactive"
    );

    const nameWrap = document.createElement("div");
    nameWrap.classList.add("formation-pact-name");

    const icon = createPactIcon(
        pactName,
        "pact-tag-icon",
        "pact-tag-icon-fallback"
    );

    nameWrap.appendChild(icon.img);
    nameWrap.appendChild(icon.fallback);

    const name = document.createElement("span");
    name.textContent = pactName;
    nameWrap.appendChild(name);

    const status = document.createElement("div");
    status.classList.add("formation-pact-status");
    status.textContent =
        isActive
            ? `${count}名 / ${requiredCount}名　✓ 発動`
            : `${count}名 / ${requiredCount}名`;

    row.appendChild(nameWrap);
    row.appendChild(status);

    row.addEventListener("mouseenter", event => {
        showTooltip(event, pactName, {
            formationCount: count,
            highlightFormation: true
        });
    });

    row.addEventListener("mousemove", moveTooltip);
    row.addEventListener("mouseleave", hideTooltip);

    return row;
}

function renderFormationSummary(targetElement, type) {
    targetElement.innerHTML = "";

    const counts = buildFormationCounts(type);

    if (counts.size === 0) {
        const empty = document.createElement("div");
        empty.classList.add("formation-empty");
        empty.textContent = "該当する盟約はありません。";
        targetElement.appendChild(empty);
        return;
    }

    [...counts.entries()]
        .sort((a, b) => {
            const aActive =
                a[1] >= (pactEffects[a[0]]?.requiredCount ?? 0);

            const bActive =
                b[1] >= (pactEffects[b[0]]?.requiredCount ?? 0);

            if (aActive !== bActive) {
                return Number(bActive) - Number(aActive);
            }

            return b[1] - a[1];
        })
        .forEach(([pactName, count]) => {
            targetElement.appendChild(
                createFormationPactRow(pactName, count)
            );
        });
}

function updateFormation() {
    formationOperatorsElement.innerHTML = "";

    if (formationOperators.size === 0) {
        const empty = document.createElement("div");
        empty.classList.add("formation-empty");
        empty.textContent =
            "オペレーターカードの「編成候補に追加」から選択できます。";
        formationOperatorsElement.appendChild(empty);
    } else {
        formationOperators.forEach(operatorName => {
            formationOperatorsElement.appendChild(
                createFormationOperatorChip(operatorName)
            );
        });
    }

    renderFormationSummary(
        formationCoreSummary,
        "core"
    );

    renderFormationSummary(
        formationAdditionalSummary,
        "additional"
    );
}


// ============================================================
// 共通更新
// ============================================================

function refreshAll() {
    updateFilterButtons();
    updateSelectedConditions();
    displayOperators();
}

function toRoman(number) {
    const roman = [
        "Ⅰ",
        "Ⅱ",
        "Ⅲ",
        "Ⅳ",
        "Ⅴ",
        "Ⅵ"
    ];

    return roman[number - 1] || number;
}

refreshAll();
updateFormation();
