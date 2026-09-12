/* Lucky Farm — 页面上用到的全部文案,一个 key 一行,六种语言。
   只打包页面真正引用的 key:价格、地址、时间这类信息一律不进这个文件。 */
window.LF_I18N = {
  langs: [{"code": "en", "name": "English", "tag": "EN"}, {"code": "zh", "name": "简体中文", "tag": "ZH"}, {"code": "es", "name": "Español", "tag": "ES"}, {"code": "ko", "name": "한국어", "tag": "KO"}, {"code": "vi", "name": "Tiếng Việt", "tag": "VI"}, {"code": "ja", "name": "日本語", "tag": "JA"}],
  dict: {
 "a1.full": {
  "en": "Do you deliver or ship anywhere?",
  "es": "¿Entregan o envían a algún sitio?",
  "ja": "配達や発送はしていますか?",
  "ko": "배달이나 택배가 되나요?",
  "vi": "Các bạn có giao hàng hay gửi đi đâu không?",
  "zh": "你们送货或者发快递吗?"
 },
 "a1.h": {
  "en": "Short answer: no. Long answer: ask.",
  "es": "Respuesta corta: no. Respuesta larga: pregunta.",
  "ja": "短い答えは「いいえ」。長い答えは、聞いてください。",
  "ko": "짧게 답하면 아니요. 길게는 물어보세요.",
  "vi": "Trả lời ngắn: không. Trả lời dài: hỏi đi.",
  "zh": "短答案是不送。长答案,问它。"
 },
 "a1.q": {
  "en": "Do you deliver?",
  "es": "¿Hacen entregas?",
  "ja": "配達はしますか?",
  "ko": "배달하나요?",
  "vi": "Có giao hàng không?",
  "zh": "你们送货吗?"
 },
 "ask.h2": {
  "en": "Ask it the way you would ask a person",
  "es": "Pregúntale como le preguntarías a una persona",
  "ja": "人に聞くように聞いてください",
  "ko": "사람에게 묻듯이 물어보세요",
  "vi": "Cứ hỏi như hỏi một người",
  "zh": "像问人一样问它"
 },
 "ask.kicker": {
  "en": "Everything else",
  "es": "Todo lo demás",
  "ja": "そのほか全部",
  "ko": "나머지 전부",
  "vi": "Còn lại tất cả",
  "zh": "别的都在这儿"
 },
 "ask.lede": {
  "en": "One farm, one assistant, any language. It answers with what the farmer told it, and puts you in touch when it does not know.",
  "es": "Una granja, un asistente, cualquier idioma. Responde con lo que le contó el agricultor y te pone en contacto cuando no lo sabe.",
  "ja": "農園ひとつ、アシスタントひとつ、言語は何でも。農家から聞いた内容で答え、分からないときは人につなぎます。",
  "ko": "농장 하나, 어시스턴트 하나, 언어는 무엇이든. 농부가 알려준 내용으로 답하고, 모르면 사람에게 연결해 드립니다.",
  "vi": "Một nông trại, một trợ lý, ngôn ngữ nào cũng được. Nó trả lời bằng lời nhà vườn, và nối bạn với người khi nó không biết.",
  "zh": "一个农场,一个助手,什么语言都行。它用农场主的话回答;不知道的,就把你接给人。"
 },
 "ask.note": {
  "en": "Answered by AI using what the farmer told it. Opens in a new tab.",
  "es": "Responde una IA con lo que le contó el agricultor. Se abre en una pestaña nueva.",
  "ja": "農家から聞いた内容をもとに AI が答えます。新しいタブで開きます。",
  "ko": "농부가 알려준 내용을 바탕으로 AI가 답합니다. 새 탭에서 열립니다.",
  "vi": "AI trả lời dựa trên những gì nhà vườn cung cấp. Mở trong tab mới.",
  "zh": "由 AI 回答,内容来自农场主。会在新标签页打开。"
 },
 "ba1.h": {
  "en": "The short answer is on this page. Ask for the long one.",
  "es": "La respuesta corta está en esta página. Pide la larga.",
  "ja": "短い答えはこのページに。長い答えは聞いてください。",
  "ko": "짧은 답은 이 페이지에 있습니다. 긴 답은 물어보세요.",
  "vi": "Trả lời ngắn nằm trên trang này. Muốn dài thì hỏi.",
  "zh": "短答案就在这一页上。长的,问它。"
 },
 "ba1.q": {
  "en": "Do you spray?",
  "es": "¿Rocían?",
  "ja": "農薬は使いますか?",
  "ko": "약 치세요?",
  "vi": "Có phun thuốc không?",
  "zh": "你们打药吗?"
 },
 "ba2.h": {
  "en": "A working farm has its rules. Ask first.",
  "es": "Una granja en activo tiene sus normas. Pregunta antes.",
  "ja": "働いている農園には決まりがあります。まず聞いてください。",
  "ko": "일하는 농장에는 규칙이 있습니다. 먼저 물어보세요.",
  "vi": "Vườn đang canh tác có luật của nó. Hỏi trước đã.",
  "zh": "地里有地里的规矩,先问清楚。"
 },
 "ba2.q": {
  "en": "Can I bring kids?",
  "es": "¿Puedo traer niños?",
  "ja": "子ども連れでも?",
  "ko": "아이를 데려가도 되나요?",
  "vi": "Dẫn trẻ theo được không?",
  "zh": "能带孩子来吗?"
 },
 "ba3.full": {
  "en": "Can I place a bulk order for a family gathering?",
  "es": "¿Puedo hacer un pedido grande para una reunión familiar?",
  "ja": "家族の集まり用にまとめて注文できますか?",
  "ko": "가족 모임용으로 대량 주문할 수 있나요?",
  "vi": "Tôi đặt số lượng lớn cho một buổi họp mặt gia đình được không?",
  "zh": "家里聚会,可以大量订吗?"
 },
 "ba3.h": {
  "en": "For volume, leave an email and talk it through.",
  "es": "Para volumen, deja un correo y lo hablamos.",
  "ja": "まとまった量はメールを残してご相談ください。",
  "ko": "물량 건은 이메일을 남기고 상의하세요.",
  "vi": "Số lượng lớn thì để lại email rồi bàn.",
  "zh": "量大的事留个邮箱,当面谈。"
 },
 "ba3.q": {
  "en": "Can I order in bulk?",
  "es": "¿Puedo pedir al por mayor?",
  "ja": "まとめ買いできますか?",
  "ko": "대량 주문 되나요?",
  "vi": "Đặt số lượng lớn được không?",
  "zh": "能大量订吗?"
 },
 "brand.tag": {
  "en": "Redmond, WA · pick-up only",
  "es": "Redmond, WA · solo recogida",
  "ja": "ワシントン州レドモンド · 受け取りのみ",
  "ko": "워싱턴주 레드먼드 · 픽업 전용",
  "vi": "Redmond, WA · chỉ nhận tại vườn",
  "zh": "华盛顿州 Redmond · 只做自取"
 },
 "c.apple.name": {
  "en": "Red-fleshed apples",
  "es": "Manzanas de pulpa roja",
  "ja": "赤肉りんご",
  "ko": "속빨간 사과",
  "vi": "Táo ruột đỏ",
  "zh": "红肉苹果"
 },
 "c.apple.note": {
  "en": "Red all the way through. Cut one open in front of someone and watch their face.",
  "es": "Rojas por dentro y por fuera. Corta una delante de alguien y mírale la cara.",
  "ja": "中まで真っ赤です。人の前で一つ切ってみてください。その顔が見ものです。",
  "ko": "속까지 온통 붉습니다. 누군가 앞에서 하나 잘라보세요. 표정이 볼만합니다.",
  "vi": "Đỏ suốt từ vỏ vào ruột. Cắt một quả trước mặt ai đó mà xem nét mặt họ.",
  "zh": "切开是通红的。当着人面切一个,看他们的表情就值了。"
 },
 "c.apple.when": {
  "en": "September – October",
  "es": "Septiembre – octubre",
  "ja": "9月 – 10月",
  "ko": "9월 – 10월",
  "vi": "T9 – T10",
  "zh": "九月 – 十月"
 },
 "c.beans.name": {
  "en": "Green beans",
  "es": "Judías verdes",
  "ja": "いんげん",
  "ko": "그린빈",
  "vi": "Đậu que",
  "zh": "四季豆"
 },
 "c.beans.note": {
  "en": "It snaps, it does not bend. Picked wet with dew and still squeaky by lunch.",
  "es": "Se parte, no se dobla. Cogidas con el rocío y aún crujientes al mediodía.",
  "ja": "曲がらずに、ぱきっと折れます。露のうちにもいで、昼まで音が鳴るほど。",
  "ko": "구부러지지 않고 똑 부러집니다. 이슬 맞은 채로 따서, 점심때까지 아삭합니다.",
  "vi": "Bẻ là gãy, không cong. Hái lúc còn đẫm sương, tới trưa vẫn giòn.",
  "zh": "一折就断,不是弯。带露水摘的,中午还脆得响。"
 },
 "c.beans.when": {
  "en": "July – September",
  "es": "Julio – septiembre",
  "ja": "7月 – 9月",
  "ko": "7월 – 9월",
  "vi": "T7 – T9",
  "zh": "七月 – 九月"
 },
 "c.blueberry.name": {
  "en": "Blueberries",
  "es": "Arándanos",
  "ja": "ブルーベリー",
  "ko": "블루베리",
  "vi": "Việt quất",
  "zh": "蓝莓"
 },
 "c.blueberry.note": {
  "en": "We go down the row twice a week. Sweet enough that half of them never reach the house.",
  "es": "Recorremos la hilera dos veces por semana. Tan dulces que la mitad nunca llega a casa.",
  "ja": "週に二度、畝を回ります。半分は家までたどり着かないほど甘いです。",
  "ko": "일주일에 두 번 고랑을 훑습니다. 절반은 집까지 오지도 못할 만큼 답니다.",
  "vi": "Mỗi tuần đi hai lượt dọc luống. Ngọt tới mức một nửa chẳng bao giờ về tới nhà.",
  "zh": "一周过两遍垄。甜到有一半根本进不了屋。"
 },
 "c.blueberry.when": {
  "en": "July – August",
  "es": "Julio – agosto",
  "ja": "7月 – 8月",
  "ko": "7월 – 8월",
  "vi": "T7 – T8",
  "zh": "七月 – 八月"
 },
 "c.cherry.name": {
  "en": "Cherries",
  "es": "Cerezas",
  "ja": "さくらんぼ",
  "ko": "체리",
  "vi": "Cherry",
  "zh": "樱桃"
 },
 "c.cherry.note": {
  "en": "Bing and Rainier, left on the tree until they go dark. They stop being cherries the day after they come off.",
  "es": "Bing y Rainier, en el árbol hasta que se ponen oscuras. Al día siguiente de cogerlas ya no son lo mismo.",
  "ja": "ビングとレーニア。黒くなるまで木に置きます。もいだ翌日にはもう別物です。",
  "ko": "빈과 레이니어. 검어질 때까지 나무에 둡니다. 딴 다음 날이면 이미 다른 과일입니다.",
  "vi": "Giống Bing và Rainier, để trên cây tới khi sẫm màu. Hái xuống một ngày là đã khác hẳn.",
  "zh": "宾樱桃和雷尼尔,在树上挂到发黑才摘。下了树第二天,就不是那个味了。"
 },
 "c.cherry.when": {
  "en": "Mid-June – July",
  "es": "Med. junio – julio",
  "ja": "6月中旬 – 7月",
  "ko": "6월 중순 – 7월",
  "vi": "Giữa T6 – T7",
  "zh": "六月中 – 七月"
 },
 "c.hawthorn.name": {
  "en": "Hawthorn",
  "es": "Espino",
  "ja": "山査子",
  "ko": "산사",
  "vi": "Sơn tra",
  "zh": "山楂"
 },
 "c.hawthorn.note": {
  "en": "Tart and bright, a little wild. Good raw, better cooked down into something red and sticky.",
  "es": "Ácido y vivo, algo silvestre. Crudo está bien; cocido hasta quedar rojo y espeso, mejor.",
  "ja": "澄んだ酸味と、少しの野性味。生でもいいですが、赤く煮詰めるともっといい。",
  "ko": "맑게 시고 조금 거칠죠. 그냥 먹어도 좋지만, 붉게 졸이면 더 좋습니다.",
  "vi": "Chua thanh, hơi hoang dã. Ăn sống đã ngon, nấu rim đỏ quánh còn ngon hơn.",
  "zh": "酸得清亮,带点野气。生吃够劲,熬成红亮的一锅更好。"
 },
 "c.hawthorn.when": {
  "en": "September – October",
  "es": "Septiembre – octubre",
  "ja": "9月 – 10月",
  "ko": "9월 – 10월",
  "vi": "T9 – T10",
  "zh": "九月 – 十月"
 },
 "c.persimmon.name": {
  "en": "Persimmons",
  "es": "Caquis",
  "ja": "柿",
  "ko": "감",
  "vi": "Hồng giòn",
  "zh": "柿子"
 },
 "c.persimmon.note": {
  "en": "Fuyu, eaten crisp like an apple. The last thing off the trees before the rain settles in.",
  "es": "Fuyu, se comen crujientes como una manzana. Lo último que baja de los árboles antes de que se instalen las lluvias.",
  "ja": "富有柿。りんごのようにさくさく食べます。雨季が居座る前、最後に木から降りるものです。",
  "ko": "부유감. 사과처럼 아삭하게 먹습니다. 우기가 자리 잡기 전, 나무에서 내려오는 마지막 열매입니다.",
  "vi": "Giống Fuyu, ăn giòn như táo. Thứ cuối cùng rời cây trước khi mùa mưa về hẳn.",
  "zh": "富有柿,脆着吃,像苹果。雨季落定之前,树上最后一样东西。"
 },
 "c.persimmon.when": {
  "en": "October – November",
  "es": "Octubre – noviembre",
  "ja": "10月 – 11月",
  "ko": "10월 – 11월",
  "vi": "T10 – T11",
  "zh": "十月 – 十一月"
 },
 "coda.h2": {
  "en": "Still wondering about something?",
  "es": "¿Te queda alguna duda?",
  "ja": "まだ気になることがありますか?",
  "ko": "아직 궁금한 게 있나요?",
  "vi": "Còn gì bạn chưa rõ?",
  "zh": "还有什么想不明白的?"
 },
 "coda.lede": {
  "en": "Type it the way you would say it out loud. Any language works.",
  "es": "Escríbelo como lo dirías en voz alta. En cualquier idioma.",
  "ja": "口に出すとおりに打ってください。どの言語でも大丈夫です。",
  "ko": "말하듯이 그대로 쓰세요. 어떤 언어든 괜찮습니다.",
  "vi": "Cứ gõ như bạn nói ra miệng. Ngôn ngữ nào cũng được.",
  "zh": "怎么说话就怎么打,什么语言都行。"
 },
 "coda.ph": {
  "en": "e.g. can I still come on Saturday afternoon?",
  "es": "p. ej. ¿puedo ir el sábado por la tarde?",
  "ja": "例:土曜の午後でも行けますか?",
  "ko": "예: 토요일 오후에도 갈 수 있나요?",
  "vi": "ví dụ: chiều thứ Bảy tôi đến được không?",
  "zh": "比如:周六下午还能来取吗?"
 },
 "foot.about": {
  "en": "A small family farm in Redmond, WA. Nothing sprayed, picked the morning you come and get it.",
  "es": "Una pequeña granja familiar en Redmond, WA. Sin pesticidas, recogido la mañana que vienes a por ello.",
  "ja": "ワシントン州レドモンドの小さな家族農園。薬は使わず、取りに来られる日の朝にもぎます。",
  "ko": "워싱턴주 레드먼드의 작은 가족 농장. 약을 치지 않고, 가지러 오시는 날 아침에 땁니다.",
  "vi": "Một nông trại gia đình nhỏ ở Redmond, WA. Không phun thuốc, hái vào sáng bạn đến lấy.",
  "zh": "华盛顿州 Redmond 的一家小小家庭农场。不打药,你来取的那天早上才摘。"
 },
 "foot.anything": {
  "en": "Ask us anything",
  "es": "Pregúntanos lo que sea",
  "ja": "何でも聞いてください",
  "ko": "무엇이든 물어보세요",
  "vi": "Hỏi gì cũng được",
  "zh": "随便问点什么"
 },
 "foot.by": {
  "en": "Answers by Leptex",
  "es": "Respuestas de Leptex",
  "ja": "回答は Leptex",
  "ko": "답변 제공: Leptex",
  "vi": "Hỏi đáp bởi Leptex",
  "zh": "问答由 Leptex 提供"
 },
 "foot.reach": {
  "en": "Reach us",
  "es": "Contacto",
  "ja": "連絡先",
  "ko": "연락",
  "vi": "Liên hệ",
  "zh": "联系"
 },
 "foot.rights": {
  "en": "© 2026 Lucky Farm · Redmond, WA · pick-up only, no shipping",
  "es": "© 2026 Lucky Farm · Redmond, WA · solo recogida, sin envíos",
  "ja": "© 2026 Lucky Farm · ワシントン州レドモンド · 受け取りのみ、配送なし",
  "ko": "© 2026 Lucky Farm · 워싱턴주 레드먼드 · 픽업 전용, 배송 없음",
  "vi": "© 2026 Lucky Farm · Redmond, WA · chỉ nhận tại vườn, không giao hàng",
  "zh": "© 2026 幸运农场 · 华盛顿州 Redmond · 只做自取,不发货"
 },
 "hail.label": {
  "en": "Ask the farm",
  "es": "Pregunta a la granja",
  "ja": "農園に聞く",
  "ko": "농장에 물어보기",
  "vi": "Hỏi nông trại",
  "zh": "问问农场"
 },
 "home.eyebrow": {
  "en": "Redmond, WA · no sprays, ever · pick-up only",
  "es": "Redmond, WA · sin pesticidas, nunca · solo recogida",
  "ja": "ワシントン州レドモンド · 農薬は一切なし · 受け取りのみ",
  "ko": "워싱턴주 레드먼드 · 농약 일절 없음 · 픽업 전용",
  "vi": "Redmond, WA · không bao giờ phun thuốc · chỉ nhận tại vườn",
  "zh": "华盛顿州 Redmond · 从不打药 · 只做自取"
 },
 "home.h1": {
  "en": "What would you like today?",
  "es": "¿Qué le apetece hoy?",
  "ja": "今日は何をお探しですか?",
  "ko": "오늘 무엇을 찾으세요?",
  "vi": "Hôm nay bạn muốn mua gì?",
  "zh": "今天想买点什么?"
 },
 "home.ph": {
  "en": "e.g. how much are the cherries today?",
  "es": "p. ej. ¿a cuánto están hoy las cerezas?",
  "ja": "例:今日のさくらんぼはいくら?",
  "ko": "예: 오늘 체리 얼마예요?",
  "vi": "ví dụ: hôm nay cherry bao nhiêu tiền?",
  "zh": "比如:今天樱桃多少钱?"
 },
 "home.sub": {
  "en": "Ask what is ripe, what it costs, where to collect it. You get today's answer, not last month's.",
  "es": "Pregunta qué está maduro, cuánto cuesta y dónde recogerlo. Te responde con lo de hoy, no con lo del mes pasado.",
  "ja": "何が食べ頃か、いくらか、どこで受け取るか。先月ではなく、今日の答えが返ってきます。",
  "ko": "무엇이 익었는지, 얼마인지, 어디서 받는지 물어보세요. 지난달이 아니라 오늘의 답을 드립니다.",
  "vi": "Hỏi hôm nay có gì chín, giá bao nhiêu, nhận ở đâu. Bạn nhận được câu trả lời của hôm nay, không phải tháng trước.",
  "zh": "问今天熟了什么、多少钱、去哪儿取 —— 得到的是今天的答案,不是上个月的。"
 },
 "l.collect": {
  "en": "Where do I collect?",
  "es": "¿Dónde lo recojo?",
  "ja": "受け取りはどこ?",
  "ko": "어디서 받나요?",
  "vi": "Nhận ở đâu?",
  "zh": "去哪儿取?"
 },
 "l.pests": {
  "en": "Then what about pests?",
  "es": "¿Y las plagas?",
  "ja": "では虫は?",
  "ko": "그럼 벌레는요?",
  "vi": "Thế còn sâu bệnh?",
  "zh": "那虫子怎么办?"
 },
 "l.price": {
  "en": "How much today?",
  "es": "¿Cuánto cuesta hoy?",
  "ja": "今日はいくら?",
  "ko": "오늘 얼마예요?",
  "vi": "Hôm nay bao nhiêu?",
  "zh": "今天多少钱?"
 },
 "l.ripe": {
  "en": "Ask if they are ready",
  "es": "Pregunta si ya están",
  "ja": "食べ頃か聞く",
  "ko": "익었는지 물어보기",
  "vi": "Hỏi xem chín chưa",
  "zh": "问问熟了没"
 },
 "l.today": {
  "en": "What is ripe today?",
  "es": "¿Qué está maduro hoy?",
  "ja": "今日は何が食べ頃?",
  "ko": "오늘 뭐가 익었나요?",
  "vi": "Hôm nay có gì chín?",
  "zh": "今天有什么熟了?"
 },
 "l.visit": {
  "en": "Can I walk the rows?",
  "es": "¿Puedo recorrer las hileras?",
  "ja": "畝を歩いてもいい?",
  "ko": "고랑을 둘러봐도 되나요?",
  "vi": "Tôi đi xem luống được không?",
  "zh": "能去地里走走吗?"
 },
 "m.home.title": {
  "en": "Lucky Farm 幸运农场 — Redmond, WA · no sprays, pick-up only",
  "es": "Lucky Farm 幸运农场 — Redmond, WA · sin pesticidas, solo recogida",
  "ja": "Lucky Farm 幸运農場 — ワシントン州レドモンド · 無農薬、受け取りのみ",
  "ko": "Lucky Farm 幸运농장 — 워싱턴주 레드먼드 · 무농약, 픽업 전용",
  "vi": "Lucky Farm — Redmond, WA · không phun thuốc, chỉ nhận tại vườn",
  "zh": "幸运农场 Lucky Farm — 华盛顿州 Redmond · 不打药,只做自取"
 },
 "nav.ask": {
  "en": "Ask us",
  "es": "Pregúntanos",
  "ja": "質問する",
  "ko": "문의하기",
  "vi": "Hỏi chúng tôi",
  "zh": "问一问"
 },
 "p1.k": {
  "en": "One family, one piece of land",
  "es": "Una familia, una tierra",
  "ja": "一家族、一つの土地",
  "ko": "한 가족, 한 땅",
  "vi": "Một gia đình, một mảnh đất",
  "zh": "一家人,一块地"
 },
 "p1.v": {
  "en": "Everything we sell, we grew ourselves in Redmond. We do not buy produce in and resell it.",
  "es": "Todo lo que vendemos lo cultivamos nosotros en Redmond. No compramos producto para revenderlo.",
  "ja": "売っているものはすべて、レドモンドで自分たちが育てたものです。仕入れて売ることはしません。",
  "ko": "파는 것은 전부 레드먼드에서 저희가 직접 길렀습니다. 사와서 되파는 것은 없습니다.",
  "vi": "Mọi thứ chúng tôi bán đều do chính chúng tôi trồng ở Redmond. Không nhập hàng về bán lại.",
  "zh": "卖的每一样都是我们自己在 Redmond 种的。不从别处进货再转手。"
 },
 "p2.k": {
  "en": "Nothing sprayed",
  "es": "Sin rociar nada",
  "ja": "薬は撒かない",
  "ko": "약을 치지 않음",
  "vi": "Không phun gì",
  "zh": "不打药"
 },
 "p2.v": {
  "en": "No pesticides and no herbicides go on this land, in any season. Ask us what we do instead.",
  "es": "En esta tierra no entran pesticidas ni herbicidas, en ninguna temporada. Pregúntanos qué hacemos en su lugar.",
  "ja": "この土地に殺虫剤も除草剤も入れません。どの季節にも。では何をしているのか、聞いてください。",
  "ko": "이 땅에는 살충제도 제초제도 들어가지 않습니다. 어느 철에도요. 그럼 어떻게 하는지 물어보세요.",
  "vi": "Mảnh đất này không có thuốc trừ sâu, không có thuốc diệt cỏ, mùa nào cũng vậy. Hỏi chúng tôi làm cách khác thế nào.",
  "zh": "这块地上不打杀虫剂,也不打除草剂,任何季节都不打。想知道那靠什么?问一句。"
 },
 "p3.k": {
  "en": "Come and look",
  "es": "Ven a verlo",
  "ja": "見に来てください",
  "ko": "직접 보러 오세요",
  "vi": "Cứ đến xem",
  "zh": "可以来看"
 },
 "p3.v": {
  "en": "The rows are a few steps from where you collect your bag. Walk them. Ask what goes on them.",
  "es": "Las hileras están a unos pasos de donde recoges tu bolsa. Recórrelas. Pregunta qué se les echa.",
  "ja": "畝は袋を受け取る場所から数歩です。歩いてみて、何が入っているか聞いてください。",
  "ko": "고랑은 봉지를 받는 곳에서 몇 걸음 거리입니다. 한 바퀴 돌아보고, 무엇이 들어가는지 물어보세요.",
  "vi": "Luống cây chỉ cách chỗ nhận túi vài bước. Cứ đi một vòng, hỏi xem trên đó có gì.",
  "zh": "地垄就在你取袋子的地方旁边。走一圈,问问地里到底放了什么。"
 },
 "pickup.note": {
  "en": "Where to come, what time, and what to bring are all answered in the chat — that way you get the arrangement that fits the day you are actually coming.",
  "es": "Dónde ir, a qué hora y qué llevar se resuelven en el chat: así recibes el plan que encaja con el día en que realmente vienes.",
  "ja": "どこへ、何時に、何を持って来るかは、すべてチャットでお答えします。実際に来られる日に合った案内をお渡しするためです。",
  "ko": "어디로, 몇 시에, 무엇을 가져올지는 대화에서 안내합니다. 그래야 실제로 오시는 날에 맞는 안내를 받으실 수 있습니다.",
  "vi": "Đến đâu, mấy giờ, mang theo gì — tất cả trả lời trong phần trò chuyện, để bạn nhận được sắp xếp đúng cho ngày bạn thật sự tới.",
  "zh": "去哪儿、几点、带什么,都在对话里说 —— 这样你拿到的是你真正要来的那天的安排。"
 },
 "pickup.short": {
  "en": "Where, when, and what to bring.",
  "es": "Dónde, cuándo y qué llevar.",
  "ja": "どこへ、いつ、何を持って。",
  "ko": "어디로, 언제, 무엇을 가져올지.",
  "vi": "Đến đâu, khi nào, mang theo gì.",
  "zh": "去哪儿、几点、带什么。"
 },
 "price.note": {
  "en": "Prices are not printed here on purpose. What a bag costs moves with the week and with how much came off the trees that morning — so ask, and you get today's number instead of a stale one.",
  "es": "Los precios no están impresos aquí a propósito. Lo que cuesta una bolsa cambia con la semana y con cuánto se recogió esa mañana: pregunta y te damos el precio de hoy, no uno caducado.",
  "ja": "価格をここに載せていないのは意図的です。一袋の値段は、その週と、その朝どれだけもげたかで動きます。聞いていただければ、古い値段ではなく今日の値段をお伝えします。",
  "ko": "가격을 여기 적지 않은 것은 일부러입니다. 한 봉지 값은 그 주와 그날 아침 수확량에 따라 달라집니다. 물어보시면 지난 가격이 아니라 오늘 가격을 알려드립니다.",
  "vi": "Giá không in ở đây là có chủ ý. Một túi bao nhiêu còn tùy tuần đó và tùy sáng hôm ấy hái được bao nhiêu — cứ hỏi, bạn sẽ nhận giá của hôm nay chứ không phải giá cũ.",
  "zh": "价格故意没写在这儿。一袋多少钱,随这一周、随那天早上摘下来多少而动 —— 问一句,拿到的是今天的数,不是一个过期的数。"
 },
 "price.note.short": {
  "en": "Today's number, not last month's.",
  "es": "El precio de hoy, no el del mes pasado.",
  "ja": "先月ではなく、今日の値段です。",
  "ko": "지난달이 아니라 오늘 가격입니다.",
  "vi": "Giá của hôm nay, không phải tháng trước.",
  "zh": "拿到的是今天的数,不是上个月的。"
 },
 "q.collect": {
  "en": "Where and when do I collect my order?",
  "es": "¿Dónde y cuándo recojo mi pedido?",
  "ja": "注文はどこで、いつ受け取れますか?",
  "ko": "어디서, 언제 주문한 것을 받나요?",
  "vi": "Tôi nhận đơn ở đâu và khi nào?",
  "zh": "我去哪儿、什么时候取?"
 },
 "q.kids": {
  "en": "Can I bring my children to the farm?",
  "es": "¿Puedo llevar a mis hijos a la granja?",
  "ja": "子どもを農園に連れて行けますか?",
  "ko": "아이들을 농장에 데려가도 되나요?",
  "vi": "Tôi dẫn con tới vườn được không?",
  "zh": "可以带孩子来农场吗?"
 },
 "q.pests": {
  "en": "If you do not spray, what do you do about pests?",
  "es": "Si no rocían, ¿qué hacen con las plagas?",
  "ja": "薬を撒かないなら、虫はどうしているのですか?",
  "ko": "약을 치지 않으면 벌레는 어떻게 하시나요?",
  "vi": "Không phun thuốc thì các bạn xử lý sâu bệnh thế nào?",
  "zh": "不打药的话,虫子怎么办?"
 },
 "q.price": {
  "en": "What are today's prices?",
  "es": "¿Cuáles son los precios de hoy?",
  "ja": "今日の価格を教えてください。",
  "ko": "오늘 가격이 어떻게 되나요?",
  "vi": "Giá hôm nay thế nào?",
  "zh": "今天的价格是多少?"
 },
 "q.ripe.apple": {
  "en": "How is a red-fleshed apple different from a normal one?",
  "es": "¿En qué se diferencia una manzana de pulpa roja de una normal?",
  "ja": "赤肉りんごは普通のりんごとどう違いますか?",
  "ko": "속빨간 사과는 보통 사과와 어떻게 다른가요?",
  "vi": "Táo ruột đỏ khác táo thường thế nào?",
  "zh": "红肉苹果和普通苹果有什么不一样?"
 },
 "q.ripe.beans": {
  "en": "How should I store green beans to keep them crisp?",
  "es": "¿Cómo guardo las judías verdes para que sigan crujientes?",
  "ja": "いんげんはどう保存すれば歯ごたえが残りますか?",
  "ko": "그린빈은 어떻게 보관해야 아삭한가요?",
  "vi": "Bảo quản đậu que thế nào để còn giòn?",
  "zh": "四季豆怎么存才脆?"
 },
 "q.ripe.blueberry": {
  "en": "Are the blueberries ready to pick right now?",
  "es": "¿Los arándanos ya están para recoger?",
  "ja": "ブルーベリーは今もぎ頃ですか?",
  "ko": "지금 블루베리를 딸 수 있나요?",
  "vi": "Việt quất bây giờ hái được chưa?",
  "zh": "蓝莓现在能摘了吗?"
 },
 "q.ripe.cherry": {
  "en": "Are the cherries ready to pick right now?",
  "es": "¿Las cerezas ya están para recoger?",
  "ja": "さくらんぼは今もぎ頃ですか?",
  "ko": "지금 체리를 딸 수 있나요?",
  "vi": "Cherry bây giờ hái được chưa?",
  "zh": "樱桃现在能摘了吗?"
 },
 "q.ripe.hawthorn": {
  "en": "Are the hawthorns ready to pick right now?",
  "es": "¿El espino ya está para recoger?",
  "ja": "山査子は今もぎ頃ですか?",
  "ko": "지금 산사를 딸 수 있나요?",
  "vi": "Sơn tra bây giờ hái được chưa?",
  "zh": "山楂现在能摘了吗?"
 },
 "q.ripe.persimmon": {
  "en": "Are the persimmons sweet yet, or still astringent?",
  "es": "¿Los caquis ya están dulces o todavía astringentes?",
  "ja": "柿はもう甘いですか、まだ渋いですか?",
  "ko": "감이 벌써 달아졌나요, 아직 떫은가요?",
  "vi": "Hồng đã ngọt chưa hay còn chát?",
  "zh": "柿子甜了吗,还是还涩?"
 },
 "q.spray": {
  "en": "Do you spray your crops with anything at all?",
  "es": "¿Rocían los cultivos con algo?",
  "ja": "作物に何か薬を撒いていますか?",
  "ko": "작물에 무엇이든 약을 치시나요?",
  "vi": "Các bạn có phun bất cứ thứ gì lên cây không?",
  "zh": "你们的地到底打不打药?"
 },
 "q.today": {
  "en": "What is ripe and ready today?",
  "es": "¿Qué está maduro y listo hoy?",
  "ja": "今日、食べ頃で持ち帰れるものは何ですか?",
  "ko": "오늘 익어서 바로 가져갈 수 있는 건 뭔가요?",
  "vi": "Hôm nay có gì đã chín và sẵn sàng?",
  "zh": "今天有什么熟了、可以拿的?"
 },
 "q.visit": {
  "en": "Can I walk the rows and see how you grow?",
  "es": "¿Puedo recorrer las hileras y ver cómo cultivan?",
  "ja": "畝を歩いて、どう育てているか見てもいいですか?",
  "ko": "고랑을 걸으며 어떻게 기르시는지 봐도 될까요?",
  "vi": "Tôi có thể đi dọc luống xem các bạn trồng thế nào không?",
  "zh": "我可以去地里走走,看看你们怎么种的吗?"
 },
 "s.lede": {
  "en": "Cherries in June, blueberries through August, hawthorn and red-fleshed apples in the autumn. Nothing is stored and nothing is shipped.",
  "es": "Cerezas en junio, arándanos hasta agosto, espino y manzanas de pulpa roja en otoño. Nada se almacena ni se envía.",
  "ja": "6月はさくらんぼ、8月までブルーベリー、秋は山査子と赤肉りんご。保管も配送もしません。",
  "ko": "6월에는 체리, 8월까지는 블루베리, 가을에는 산사와 속빨간 사과. 보관도 배송도 하지 않습니다.",
  "vi": "Tháng Sáu có cherry, tới tháng Tám có việt quất, mùa thu có sơn tra và táo ruột đỏ. Không trữ kho, không giao hàng.",
  "zh": "六月樱桃,七八月蓝莓,秋天是山楂和红肉苹果。不入库,也不发货。"
 },
 "s1.h2": {
  "en": "Fruit picked the morning you come for it",
  "es": "Fruta recogida la mañana que vienes a buscarla",
  "ja": "取りに来られる日の朝にもぐ果物",
  "ko": "가지러 오시는 날 아침에 딴 과일",
  "vi": "Trái cây hái vào buổi sáng bạn đến lấy",
  "zh": "你来取的那天早上才摘的果子"
 },
 "s1.kicker": {
  "en": "In season now",
  "es": "De temporada",
  "ja": "いま旬",
  "ko": "제철",
  "vi": "Đang vào mùa",
  "zh": "本季"
 },
 "sure.h2": {
  "en": "You can trace every bag back to a row",
  "es": "Cada bolsa se puede rastrear hasta su hilera",
  "ja": "どの袋も、どの畝から来たか言えます",
  "ko": "봉지마다 어느 고랑에서 왔는지 말할 수 있습니다",
  "vi": "Mỗi túi đều truy được về đúng luống",
  "zh": "每一袋,都说得出是哪一垄"
 },
 "sure.kicker": {
  "en": "How you can be sure",
  "es": "Cómo estar seguro",
  "ja": "なぜ安心できるか",
  "ko": "어떻게 믿을 수 있나",
  "vi": "Làm sao chắc chắn",
  "zh": "凭什么放心"
 },
 "sure.note": {
  "en": "We do not say “pesticide-free” and we do not say “certified organic.” Those are claims about a label. Ours is a claim about a practice: we do not spray, and you are welcome to come and check.",
  "es": "No decimos «sin pesticidas» ni «orgánico certificado». Eso son afirmaciones sobre una etiqueta. La nuestra es sobre una práctica: no rociamos, y puedes venir a comprobarlo.",
  "ja": "「残留農薬ゼロ」とも「有機認証」とも言いません。それはラベルの話です。私たちの話はやり方です。薬は撒きません。いつでも見に来てください。",
  "ko": "저희는 ‘무농약 잔류 제로’라고도, ‘유기농 인증’이라고도 하지 않습니다. 그건 라벨에 대한 주장입니다. 저희 주장은 방식에 대한 것입니다. 약을 치지 않으며, 언제든 오셔서 확인하셔도 됩니다.",
  "vi": "Chúng tôi không nói “không tồn dư thuốc”, cũng không nói “hữu cơ được chứng nhận”. Đó là chuyện của cái nhãn. Chuyện của chúng tôi là cách làm: không phun thuốc, và bạn cứ đến kiểm chứng.",
  "zh": "我们不说「零农残」,也不说「有机认证」—— 那是标签上的话。我们说的是做法:这块地不打药,你随时可以来看。"
 },
 "ui.askph": {
  "en": "Ask Lucky Farm anything",
  "es": "Pregúntale a Lucky Farm",
  "ja": "Lucky Farm に質問",
  "ko": "Lucky Farm에 물어보기",
  "vi": "Hỏi Lucky Farm",
  "zh": "问问幸运农场"
 },
 "ui.go": {
  "en": "Ask",
  "es": "Preguntar",
  "ja": "聞く",
  "ko": "물어보기",
  "vi": "Hỏi",
  "zh": "去问"
 },
 "ui.lang": {
  "en": "Language",
  "es": "Idioma",
  "ja": "言語",
  "ko": "언어",
  "vi": "Ngôn ngữ",
  "zh": "语言"
 },
 "ui.send": {
  "en": "Send",
  "es": "Enviar",
  "ja": "送信",
  "ko": "보내기",
  "vi": "Gửi",
  "zh": "发送"
 },
 "ui.skip": {
  "en": "Skip to content",
  "es": "Ir al contenido",
  "ja": "本文へスキップ",
  "ko": "본문으로 건너뛰기",
  "vi": "Đến nội dung chính",
  "zh": "跳到正文"
 },
 "ui.theme": {
  "en": "Light or dark",
  "es": "Claro u oscuro",
  "ja": "ライト / ダーク",
  "ko": "밝게 / 어둡게",
  "vi": "Sáng hoặc tối",
  "zh": "明暗切换"
 }
}
};
