import cngImg from '../assets/images/2_Foltila - CNG.png'

export const posts = [
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
