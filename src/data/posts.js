import cngImg from '../assets/images/2_Foltila - CNG.png'
import svozoveLinkyImg from '../assets/images/3_pridejte se k nám.webp'

export const posts = [
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
