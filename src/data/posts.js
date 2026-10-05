import cngImg from '../assets/images/foltila-cng.png'
import svozoveLinkyImg from '../assets/images/pridejte-se-k-nam.webp'
import frantaImg from '../assets/images/Franta-2.webp'
import skolniJidelnaImg from '../assets/images/skolni-jidelna-kucharky.webp'
import romanZelenyImg from '../assets/images/roman-zeleny-ml.webp'

export const posts = [
  {
    slug: 'roman-zeleny-ml-rozhovor',
    title: 'Zbytky z kuchyní mají smysl: rozhovor s Romanem Zeleným ml. o patnácti letech v Greenheaven',
    seoTitle: 'Roman Zelený ml. o patnácti letech v Greenheaven',
    date: '2026-10-05',
    excerpt:
      'Spolumajitel Greenheaven Roman Zelený ml. v rozhovoru popisuje, jak funguje moderní čištění lapačů tuků pomocí mikrobiologie, a představuje kruh, ve kterém se ze starého chleba stává palivo pro firemní dodávky.',
    image: romanZelenyImg,
    imageAlt: 'Roman Zelený ml., spolumajitel Greenheaven',
    content: [
      { type: 'quote', text: '„Zbytky z kuchyní mají smysl. Vracíme je zpátky do života v podobě energie," říká Roman Zelený ml.' },
      'Firma Greenheaven se již patnáct let stará o komplexní nakládání s gastroodpady a odpadními vodami v Jihočeském kraji a na Vysočině. Její spolumajitel Roman Zelený mladší prošel firmou od úplných začátků. V rozhovoru popisuje nejen to, jak funguje moderní čištění lapačů tuků za pomoci mikrobiologie, ale také představuje fascinující kruh, ve kterém se ze starého chleba stává palivo pro firemní dodávky.',

      { type: 'heading', text: 'Romane, ve firmě Greenheaven působíte už patnáct let. Vzpomenete si na moment, kdy jste si uvědomil, že toto je práce, které se chcete naplno věnovat?' },
      'Vlastně to přišlo velmi přirozeně. Původně jsem vyučený instalatér-topenář a na školu jsem šel spíše s kamarádem. Během studia ale můj otec se svým bratrem, mým strýcem, začali budovat základy dnešní firmy. Koupili první malou dodávku, pár soudků a začali svážet gastroodpad. Tehdy mi došlo, že práce v rodinné firmě a možnost budovat něco společně s nejbližšími má obrovskou budoucnost. Postupem času pro mě začala být klíčová také efektivita, chtěl jsem dělat práci, která má hluboký smysl, a zároveň netrávit veškerý čas v zaměstnání na úkor své rodiny a dětí.',

      { type: 'heading', text: 'Když se podíváme na samotnou činnost Greenheaven, jaké jsou hlavní pilíře vašich služeb?' },
      'Základem je komplexní servis v oblasti gastroodpadů. Pro zákazníky zajišťujeme odvoz zbytků z kuchyní, ale staráme se také o odpadní vody, tedy konkrétně o splaškové vody, které odcházejí z kuchyňských provozů. S tím úzce souvisí čištění a údržba tukových lapačů. Třetím důležitým pilířem je pak sběr a odvoz použitého kuchyňského oleje z fritéz.',

      { type: 'heading', text: 'Zmínil jste lapače tuků, které musí mít povinně každý gastroprovoz. Proč jsou tyto systémy tak kritické?' },
      'Lapač tuků zabraňuje tomu, aby se veškerá mastnota z kuchyně dostala do veřejné kanalizace a následně na centrální čistírnu odpadních vod. Pokud je tuků příliš mnoho, čistírny s tím mají obrovské technologické problémy. Bez správné údržby se potrubí ucpává, což pro provozovatele znamená havárii, zápach a nemalé finanční náklady.',

      { type: 'heading', text: 'Vy při údržbě těchto lapačů využíváte speciální mikrobiologii. V čem spočívá její výhoda?' },
      'Setkali jsme se s provozy, kde lapač nikdo nečistil třeba deset let. Obsah doslova zkameněl a dalo by se na něm bruslit. My lapače nejen pravidelně vyvážíme podle domluveného harmonogramu, ale aplikujeme do nich právě mikrobiologii - specifické bakterie. Ty se dávkují automaticky v noci, kdy je v kuchyni klid a potrubím neprotéká voda. Bakterie průběžně rozkládají tuky v potrubí i v samotném lapači, udržují systém průchodný a zabraňují jeho ztuhnutí. Zákazník se díky našemu programu nemusí o nic starat.',

      { type: 'heading', text: 'Kromě tuků svážíte také použitý olej a zbytky jídla. Zmínil jste, že největší zátěž pro odpadní systémy přichází kolem vánočních svátků...' },
      'Přesně tak, v televizním zpravodajství je to každoroční téma. Během svátků smaží lidé doma kapry a řízky a použitý olej masivně vylévají do dřezů a toalet. My se snažíme neustále apelovat na to, a to jak u gastroprovozů, tak v domácnostech, aby se olej sbíral odděleně. V restauracích našim klientům poskytujeme speciální sudy, do kterých studený olej slévají, a my jej následně odvážíme k ekologické likvidaci a dalšímu využití.',

      { type: 'heading', text: 'Kde vidíte budoucnost firmy Greenheaven a jaký je váš profesní cíl?' },
      'Chci, aby si naše firma udržela dobré jméno a zákazníci věděli, že se na nás mohou stoprocentně spolehnout. Mým velkým přáním je, aby si lidé a provozovatelé uvědomili, že zbytky z kuchyní nejsou jen bezcenný odpad, ale surovina, která má další smysl. Vše, co svezeme, končí na kompostárně, kde probíhá další zpracování.',

      { type: 'heading', text: 'Můžete laikovi popsat, jak tento ekologický cyklus ve vašem podání funguje?' },
      'Rád to vysvětluji na jednoduchém příkladu: Na poli vyroste obilí, ze kterého se upeče chléb. Tento chléb putuje do jídelny, kde se nesní celý a zůstane jako zbytek. Firma Greenheaven tento gastroodpad naloží a odveze na kompostárnu. Tam se z něj v rámci procesů zpracuje mimo jiné zemní plyn a my na tento plyn následně s našimi firemními dodávkami jezdíme. Je to uzavřený, dokonale funkční kruh, který má obrovské množství pozitivních ekologických efektů. A to je to, co mě na mé práci baví nejvíce.',
    ],
  },
  {
    slug: 'novy-skolni-rok-ve-skolni-jidelne',
    title: 'Nový školní rok ve školní jídelně: ať je v něm co nejméně starostí',
    seoTitle: 'Nový školní rok ve školní jídelně bez zbytečných starostí',
    date: '2026-09-09',
    excerpt:
      'Všem kuchařkám, kuchařům a týmům školních jídelen přejeme klidný školní rok. S částí práce kolem gastroodpadu jim rádi pomůžeme.',
    image: skolniJidelnaImg,
    imageAlt: 'Kuchařky ve školní jídelně',
    content: [
      'V září se školní jídelny vracejí k plnému provozu. Vaří se, vydává, objednává, hlídají se zásoby i administrativa. Všem, kdo to každý den drží pohromadě, přejeme klidný školní rok – a rádi pomůžeme s částí práce kolem gastroodpadu.',
      { type: 'heading', text: 'V kuchyni je rušno dávno před obědem' },
      'Když děti ráno přicházejí do školy, v jídelně už bývá dávno živo. Připravují se suroviny, vaří polévka, kontrolují dodávky a všechno se chystá tak, aby byl oběd včas hotový.',
      'Samotné vaření je přitom jen část práce. Vedoucí jídelen a jejich týmy řeší také jídelníčky, objednávky, sklad, čistotu provozu, směny a potřebné záznamy. A když se něco zpozdí nebo je někdo nemocný, musí se provoz přesto zvládnout.',
      'Práce školních kuchařek a kuchařů zůstává často v pozadí. Bez ní by ale běžný školní den jednoduše nefungoval.',
      { type: 'heading', text: 'Na nový spotřební koš je více času' },
      'Jedním z témat, která jídelny v poslední době řeší, je nový spotřební koš. Dobrou zprávou je, že jídelny, které zatím vaří podle stávajících pravidel, mohou podle informací Ministerstva školství pokračovat do 31. srpna 2027. Na přípravu změn tedy mají ještě čas.',
      'Vedle pravidel školního stravování je potřeba myslet také na odpady. Zákon o odpadech požaduje mimo jiné jejich správné zařazení, předání v souladu s pravidly a vedení průběžné evidence. Nejde zrovna o část práce, kterou by člověk chtěl řešit během poledního výdeje. Když je ale svoz nastavený dobře a podklady chodí pravidelně, není nutné se k němu stále vracet.',
      { type: 'heading', text: 'Použitá nádoba odjede a čistá zůstane' },
      'Právě s touto částí provozu školním jídelnám pomáháme. Zapůjčíme potřebné množství nádob a domluvíme svoz v intervalu, který odpovídá provozu. Při každé návštěvě odvezeme použité nádoby a místo nich necháme čisté, vymyté a dezinfikované. Funguje to jednoduše: kus za kus.',
      'Vedeme také průběžnou evidenci předaného odpadu a pravidelně ji posíláme e-mailem. Jídelna tak má údaje uložené a nemusí je zpětně dohledávat. Součástí našich služeb je rovněž výkup použitých potravinářských olejů.',
      'Svezený gastroodpad předáváme k odbornému zpracování v bioplynové stanici. Místo aby zůstal bez užitku, slouží dál při výrobě bioplynu.',
      { type: 'heading', text: 'Děkujeme a přejeme klidný školní rok' },
      'Všem vedoucím jídelen, kuchařkám, kuchařům i ostatním kolegům v provozu děkujeme za práci, kterou každý den odvádějí. Do nového školního roku přejeme co nejméně nečekaných komplikací, dostatek sil a spokojené strávníky.',
      'A pokud budete chtít upravit četnost svozů, doplnit nádoby nebo probrat evidenci gastroodpadu, ozvěte se nám. Rádi se podíváme na to, co potřebuje právě váš provoz.',
      { type: 'cta', label: 'Kontaktujte nás', href: '/kontakt' },
    ],
  },
  {
    slug: 'franta-doksansky-20-let-na-ceste',
    title: '20 let na cestě: Franta, který najezdil tisíce kilometrů a miloval kontakt s kuchařkami',
    date: '2026-06-15',
    excerpt:
      'František Doksanský strávil za volantem dodávky dvě dekády. Jako první a nejdéle sloužící zaměstnanec Greenheaven projezdil celý Jihočeský kraj a ze všeho nejvíc si užíval lidi.',
    image: frantaImg,
    imageAlt: 'František Doksanský, řidič Greenheaven',
    content: [
      'Byl vůbec prvním a služebně nejstarším zaměstnancem firmy Greenheaven. František Doksanský strávil za volantem dodávky dvě dekády. Jako bývalý horník byl zvyklý na ledacos, ale práce závozníka ho vyloženě bavila. Projezdil celý Jihočeský kraj, od Orlíku až po Vysočinu, a ze všeho nejvíc si užíval každodenní kontakt s lidmi, tedy hlavně s vedoucími jídelen a kuchařkami. Podle zbytků jídla prý spolehlivě poznal, kde vaří dobře a kde ne.',
      'Za dvacet let zažil spoustu věcí, od stovek kilometrů po tuny odvezeného nákladu. Jednou se mu ale smůla nalepila na paty přímo v autě, když špatně zavřel boční dveře a v zatáčce se mu poroučel náklad.',
      { type: 'quote', text: '„To mi praskla kurtna a všechno letělo. Naštěstí se to ale nevylilo ven, zůstalo to zavřené jenom v autě. No, ale musel jsem to potom vyčistit, uklidit... Byl to smrad, to je jasný, ale jinak v pohodě," vzpomíná s úsměvem Doksanský.' },
      'Dnes už je zasloužilý matador v důchodu. Když má ale zavzpomínat na své nejoblíbenější trasy, má jasno. Nejšťastnější byl na Novohradsku. Tam prý totiž dostával od kuchařek největší svačiny.',
    ],
  },
  {
    slug: 'nove-svozove-linky-gastro-provozy',
    title: 'Otevíráme nové svozové linky pro gastro provozy',
    date: '2026-06-11',
    excerpt:
      'Rozšiřujeme své kapacity a otevíráme nové svozové linky pro restaurace, kuchyně i další gastronomické provozy. Hledáme nové partnery, kteří chtějí řešit gastroodpad spolehlivě a s důrazem na ekologii.',
    image: svozoveLinkyImg,
    imageAlt: 'Přidejte se k nám — Green Heaven svoz gastroodpadů',
    content: [
      'Rozšiřujeme své kapacity a otevíráme nové svozové linky pro restaurace, kuchyně i další gastronomické provozy. Hledáme nové partnery, kteří chtějí řešit gastroodpad spolehlivě, profesionálně a s důrazem na ekologii.',
      { type: 'list', items: [
        'svoz přizpůsobený vašemu harmonogramu',
        'ekologické zpracování odpadu',
        'legislativní dokumentace',
        'individuální přístup ke každému provozu',
      ]},
      'Máte gastro provoz nebo víte o někom, kdo hledá spolehlivého partnera pro svoz gastroodpadu? Budeme rádi, když se nám ozvete.',
      { type: 'cta', label: 'Kontaktujte nás', href: '/kontakt' },
    ],
  },
  {
    slug: 'obnova-vozoveho-parku-cng-2026',
    title: 'Obnovujeme vozový park pro ještě ekologičtější budoucnost',
    date: '2026-06-05',
    excerpt:
      'V průběhu 1. pololetí 2026 jsme rozšířili náš vozový park o další vozy na CNG. Nejde ale jen o nová auta — jde o celý funkční cirkulární systém.',
    image: cngImg,
    imageAlt: 'Nové vozidlo Green Heaven na CNG palivo',
    content: [
      'V průběhu 1. pololetí 2026 jsme rozšířili náš vozový park o další vozy na CNG. Nejde ale jen o nová auta, jde o celý funkční cirkulární systém.',
      'Gastroodpad, kaly a biologický odpad ve spolupráci s Kompostárnou Jarošovice, dostávají druhý život v podobě bioplynu, který následně pohání i naše vlastní vozy.',
      'To, co odvezeme, se tak vrací zpět jako energie pro další provoz.',
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null
}
