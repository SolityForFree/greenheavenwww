import cngImg from '../assets/images/foltila-cng.png'
import svozoveLinkyImg from '../assets/images/pridejte-se-k-nam.webp'
import frantaImg from '../assets/images/Franta-2.webp'
import skolniJidelnaImg from '../assets/images/skolni-jidelna-kucharky.webp'

export const posts = [
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
