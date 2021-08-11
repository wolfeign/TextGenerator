const shugoList = [
    "僕", "ぼくら", "オレ", "俺様", "俺たち", "私", "私たち", "あなた", "君", "君たち", "おまえ", "おまえら", "我が息子", "子どもたち",
    "隣人", "母親", "父親", "両親", "祖母", "祖父", "遠い親戚", "彼", "彼ら", "彼女", "彼女たち", "彼の者", "我々", "宇宙人", "王様", "王子",
    "アイツ", "アイツら", "吾輩", "兄", "姉", "弟", "妹", "従兄弟", "お前さん", "おじさん", "おばさん", "先生", "お医者さん", "患者", "先輩",
    "ワンコ", "ニャンコ", "クマさん", "お客様", "お坊さん", "パイロット", "運転手", "店主", "魔法使い", "プクリポ", "野球選手",
    "陸上自衛隊", "警察官", "プロレスラー", "風来人", "侍", "マンガ家", "脚本家", "翻訳家", "カービィ", "作曲家", "ピアノ奏者", "友人", "親友"
];

const ituList = [
    "夏休みに", "午前中", "昨夜", "昨晩", "正月", "数時間前", "数分前", "数日前", "遥か昔", "今春", "ある晴れた日", "うららかな午後",
    "土用の丑の日", "昨日の午後", "放課後"
];

const relativeList = [
    "今日", "昨日", "一昨日", "先週", "先月", "半月前", "半年前", "去年", "先々週", "先々月",
    "日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜", "前日"
];

const absoluteList = [
    "クリスマス", "クリスマスイブ", "元日", "バレンタイン", "ネコの日", "犬の日", "ひな祭り", "建国記念日", "大晦日", "春分の日", "秋分の日",
    "タロとジロの日", "成人の日", "天皇誕生日", "みどりの日", "昭和の日", "憲法記念日", "こどもの日", "海の日", "やまの日", "敬老の日", "スポーツの日",
    "文化の日", "勤労感謝の日"
];

const relativeAfterList = [
    "日前", "週間前", "ヶ月前", "年前"
];

const jutugoHanasuList = [
    "話した", "言った", "思った", "念じた", "語りかけた", "述べた", "話してくれた", "囁いた", "大声で叫んだ", "書いた", "黒板に書いた", "いう本を出した",
    "ツイートした", "メールした", "ブログに書いた", "掲示板に書き込んだ", "落書きした", "声に出して叫んだ", "笑った", "微笑んだ", "手紙をしたためた",
    "発表した", "嘘をついた", "いう理由で逮捕された", "告白した", "目を丸くした", "泣いた", "泣きじゃくった", "号泣した", "激怒した", "コピペした",
    "翻訳した", "作詞した", "黒板に書き殴った", "電話した"
];

const shinagaraList = [
    "お喋りしながら", "上の空で", "空想しながら", "本を読みながら", "スマホを見つつ", "ナビに従って", "腹をすかせて", "おそるおそる", "慣れない手付きで",
    "ジャンケンに負けて", "ボーッとしながら", "思わず", "叫びながら", "学校から帰る途中、", "自由時間に", "便乗して",
    "親が留守なので", "夕食の前に", "昨日の反省を活かして", "どういうわけか", "不思議なことに", "意を決して", "パソコンの前に座ると", "本当は", "実は",
    "こう言うと変だが", "庭に飛び出し", "これみよがしに", "笑いをこらえて", "ウソか本当か", "念には念を入れて", "とんでもないことに"
];

const bashoList = [
    "道", "駅", "階段", "空港", "港", "雲の上", "道路", "アスファルト", "廊下", "家", "屋根", "海の上", "海底", "店内", "山", "頂上", "狭い小路", "路地裏",
    "嵐の中", "台風の目", "レストラン", "パーキングエリア", "日本", "アメリカ", "水面", "大地", "月面", "太陽の下", "砂浜", "虹の上", "土俵際", "博物館",
    "急カーブ", "谷底", "海底トンネル", "トンネル", "ハイウェイ", "深夜のハイウェイ", "歩道橋", "地下鉄", "動物園", "水族館", "プール", "土星の輪",
    "屋根裏部屋", "秘密基地", "風力発電所", "滑走路", "遠い宇宙", "天文台", "テーブルの下", "冥王星", "岬", "南極大陸", "北極点", "北極星", "吹きすさぶ風の中",
    "オーストラリア", "森の中", "急斜面", "工事現場", "川の中", "土砂降りの中", "雪原", "砂漠地帯", "赤道直下", "仮想空間", "電線の上", "塀の上", "球場",
    "甲子園", "公園", "新宿", "秋葉原", "池袋", "ビルの屋上", "北海道", "青函トンネル", "沖縄", "炎天下の砂漠", "オアシス", "東京タワー"
];

const jutugoBashoList = [
    "通った", "歩いた", "降りた", "登った", "気にした", "滑った", "運転した", "眺めた", "見上げた", "見下ろした", "走った", "駆け抜けた", "踏みしめた", "思った",
    "蹴った", "運転席から見下ろした", "窓から眺めた", "ゆっくりと歩いた", "ウォーキングした", "ジョギングした", "列車旅行した", "横断した", "猫と一緒に歩いた",
    "犬と散歩した"
];

const tabemonoList = [
    "トマト", "じゃがいも", "ピザ", "ラーメン", "ご飯", "味噌汁", "お粥", "米", "ポテトチップス", "りんご", "桃", "牛丼", "コロッケ", "玉子焼き",
    "お鍋", "ソフトクリーム", "玉ねぎ", "ピーマン", "人参", "きゅうり", "カニ", "海苔", "ワカメ", "パン", "フランスパン", "食パン", "チーズ", "豆腐", "湯豆腐",
    "蕎麦", "うどん", "素麺", "パスタ", "天ぷら", "おでん", "唐揚げ", "トンカツ", "カツ丼", "麻婆豆腐", "フライドチキン", "ローストビーフ", "ローストチキン",
    "オムライス", "カレーライス", "ステーキ", "しゃぶしゃぶ", "お好み焼き", "ハンバーガー", "焼き鳥", "ケーキ", "餃子", "うな重", "カレーうどん", "すき焼き",
    "ハヤシライス", "肉まん", "担々麺", "ちゃんこ鍋", "お弁当", "おにぎり", "ベーグル", "エビフライ", "ワッフル", "コロッケパン", "焼きそばパン", "コロッケそば",
    "じゃがりこ"
];

const jutugoTabemonoList = [
    "思った", "料理した", "調理した", "頼んだ", "催促した", "気にした", "食べた", "食べるか悩んだ", "絞った", "刻んだ", "切った",
    "焼いた", "フライパンで焼いた", "フライパンで揚げた", "水洗いした", "湯煎した", "炊いた", "フライにした", "ネットで注文した", "絵に描いた",
    "水揚げした"
];

const setuzokusiList = [
    "ので", "けど", "けれど", "という話だが", "から", "らしいが", "らしいけど", "そして", "が", "とき", "ため", "のだったが"
];

const koutisiList = [
    "のだった", "とのことだ", "のです", "という夢を見た", "というが本当だろうか", "らしい", "というのは嘘だ", "なんて誰にも言えない",
    "ことは内緒にしておいてほしい", "━━━━━!!"
];

const settougoList = [
    "それはつまり", "結局のところ", "言い換えれば", "言うなれば", "とどのつまり", "簡潔に言えば"
];

const setubigoList = [
    "に他ならない。", "なのだろう。", "と言っても過言ではない..."
];

const emojiList = [
    "🥰", "🥴", "🤠", "🥳", "😢", "🐶", "🐻", "🐺", "🍔", "🍜", "🍉", "🥽", "🎧", "📐", "🔫", "🎃", "🎄", "⚾", "🏉", "🧩", "🚂", "🚒", "🚀", "🌜", "👨‍👩‍👧‍👦", "👨‍🔧", "👮", "🚴‍", "👣", "🐕", "🐘", "🦏", "🐬", "🦈", "🌲", "🌵", "🥐", "🧀", "🍙", "🍰", "🎠", "🚓", "🚁", "🌞", "⚡", "🎉", "🎏", "🎣", "🎮", "🥵", "💤", "💬", "👨‍🌾", "👨‍🚀", "👨‍🚒", "🎅", "👨‍👦", "👩‍👧‍👦", "🦮", "🐕‍🦺", "🐱", "🐯", "🐎", "🦌", "🐂",
    "🐑", "🐫", "🐼", "🐾", "🐧", "🐸", "🐊", "🦕", "🦖", "🐳", "🐟", "🌸", "💮", "🌱", "🌳", "🌴", "🌾", "🌿", "🍁", "🍈", "🍌", "🍒",
    "🍓", "🥕", "🍄", "🥞", "🍕", "🌭", "🍛", "🍥", "🍡", "🦞", "🦀", "🍬", "🍭", "🍮", "🍾", "🍸", "🍹", "🥂", "🗻", "🗼", "🗽", "🚙",
    "🚜", "⚓", "⌛", "⏰", "🌛", "⭐", "🌟", "🌠", "🌈", "🌂", "❄", "⛄", "💧", "✨", "🎐", "🏆", "🥋", "🤿", "🧸", "🎨", "👔", "👕", "👑",
    "🧢", "💍", "🔔", "🎵", "🎤", "🎻", "📞", "🔍", "🔎", "💰", "🔑", "🔨", "🧬", "🔭", "📡", "🗿", "☯", "📶", "⭕", "❌", "〽"
];

window.onload = () => {
    const button = document.getElementById("button");
    const textarea = document.getElementById("text");

    button.onclick = () => {
        textarea.innerHTML = generate(1, false);
    };
};

generate = (count, tag) => {
    let text = "";
    for (let i = 0; i < count; i++) {
        text += generateSentence(tag);

        if (tag) {
            if (Math.random() <= 0.5)
                text += "<br />";
        }
    }

    return text;
};

generateSentence = (tag) => {
    let text = "";

    text += generatePhrase(0, 0, tag);

    if (Math.random() <= 0.3) {
        text += setuzokusiList[Math.floor(Math.random() * setuzokusiList.length)];

        if (Math.random() <= 0.5)
            text += "、";

        text += generatePhrase(1, 0, tag);
    }

    if (Math.random() <= 0.3) {
        text += koutisiList[Math.floor(Math.random() * koutisiList.length)];
    }

    if (Math.random() <= 0.4)
        text += getEmoji();

    text += "。";

    if (Math.random() <= 0.2) {
        const list = shugoList.concat(bashoList.concat(tabemonoList));

        text += settougoList[Math.floor(Math.random() * settougoList.length)];
        text += coating(" \"" + list[Math.floor(Math.random() * list.length)] + "\" ", tag);

        text += setubigoList[Math.floor(Math.random() * setubigoList.length)];
    }

    return text;
};

generatePhrase = (count, depth, tag) => {
    const shugo = shugoList[Math.floor(Math.random() * shugoList.length)];

    let text = "";

    if (Math.random() <= 0.8) {
        text += coating(shugo, tag);

        if (Math.random() <= 0.2)
            text += getEmoji();

        text += "は";
    }

    if (0 === count) {
        if (Math.random() <= 0.9) {
            text += getDate(tag);
//            text += ituList[Math.floor(Math.random() * ituList.length)];

            if (Math.random() <= 0.5)
                text += "、";
        }
    }

    if (Math.random() <= 0.3) {
        text += shugoList[Math.floor(Math.random() * shugoList.length)];
        text += "と";
    }

    text = coating(text, tag);

    if (Math.random() <= 0.6) {
        text += coating(shinagaraList[Math.floor(Math.random() * shinagaraList.length)], tag);
    }

    if (Math.random() <= 0.4) {
        let emoji = "";
        if (Math.random() <= 0.3)
            emoji = getEmoji();

        text += coating(bashoList[Math.floor(Math.random() * bashoList.length)] + emoji, tag);
        text += "で";
    }


    const random = Math.random();
    let branch = 0;
    if (depth > 0) {
        if (random <= 0.5)
            branch = 1;
        else
            branch = 2;
    } else {
        if (random <= 0.33)
            branch = 0;
        else if (random <= 0.66)
            branch = 1;
        else
            branch = 2;
    }

    let text2 = "";
    if (0 === branch) {
        text2 += coating("「" + generatePhrase(0, depth + 1) + "」", tag);
        text2 += "と";

        text2 += coating(jutugoHanasuList[Math.floor(Math.random() * jutugoHanasuList.length)], tag);
    } else if (1 === branch) {
        if (Math.random() <= 0.7) {
            text2 += coating(bashoList[Math.floor(Math.random() * bashoList.length)], tag);
            text2 += "を";
        }

        text2 += coating(jutugoBashoList[Math.floor(Math.random() * jutugoBashoList.length)], tag);
    } else {
        if (Math.random() <= 0.7) {
            text2 += coating(tabemonoList[Math.floor(Math.random() * tabemonoList.length)], tag);
            text2 += "を";
        }

        text2 += coating(jutugoTabemonoList[Math.floor(Math.random() * jutugoTabemonoList.length)], tag);
    }

    text += coating(text2, tag);

    return text;
};

getDate = (tag) => {
    let text = "";

    const random1 = Math.random();
    if (random1 <= 0.3) {
        text = ituList[Math.floor(Math.random() * ituList.length)];
    } else {
        let absoblue = false;
        const count = Math.floor(Math.random() * 1) + 1;
        for (let i = 0; i < count; i++) {
            let date = "";

            const random2 = Math.random();
            if (random2 <= 0.5) {
                if (absoblue)
                    date = relativeList[Math.floor(Math.random() * relativeList.length)];
                else {
                    if (Math.random() <= 0.5) {
                        date = relativeList[Math.floor(Math.random() * relativeList.length)];
                    } else {
                        date = absoluteList[Math.floor(Math.random() * absoluteList.length)];
                        absoblue = true;
                    }
                }
            } else {
                date = "" + (Math.floor(Math.random() * 10) + 1);

                const random3 = Math.random();
                if (random3 <= 0.1)
                    date += "年前";
                else if (random3 <= 0.2)
                    date += "ヶ月前";
                else if (random3 <= 0.4)
                    date += "週間前";
                else
                    date += "日前";
            }

            text += coating(date, tag);

            if (count - 1 !== i)
                text += "の";
        }
    }

    return text;
};

coating = (text, tag) => {
    if (!tag)
        return text;

    let result = "";
    let style = "";

    if (Math.random() <= 0.3) {
        const colors = [
            "#d9333f", "#82ae46", "#1e50a2", "#e6b422", "#884898", "#2ca9e1", "#ee7800", "#316745", "#9fa0a0", "#9f6f55", "#ee827c", "#bc64a4", "#5a544b", "#dccb18", "#752100", "#6f4b3e", "#9ea1a3", "#fbd26b", "#524e4d", "#e3acae", "#4d4398", "#fcc800", "#67b5b7", "#00afcc", "#6c3524", "#cbd0d3", "#a1d8e2", "#665a1a", "#f6ae54", "#e73562", "#594e52"
        ];

        style += "color: ";
        style += colors[Math.floor(Math.random() * colors.length)];
        style += "; ";
    }
    if (Math.random() <= 0.4) {
        style += "font-weight: bold; ";
    }
    if (Math.random() <= 0.5) {
        style += "font-size: ";
        style += Math.floor(Math.random() * 120) + 80;
        style += "%; ";
    }

    if ("" !== style)
        result += "<span style=\"" + style + "\">";

    result += text;

    if ("" !== style)
        result += "</span>";

    return result;
};

getEmoji = () => {
    let result = "";
    let count = Math.floor(Math.random() * 1) + 1;

    //for (let i = 0; i < count; i++)
    //    result += emojiList[Math.floor(Math.random() * emojiList.length)]

    return result;
};
