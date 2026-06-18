import cngImg from '../assets/images/foltila-cng.png'
import svozoveLinkyImg from '../assets/images/pridejte-se-k-nam.webp'
import frantaImg from '../assets/images/Franta-2.webp'

export const posts = [
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
