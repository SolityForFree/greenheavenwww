import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

const LEADY_SRC = 'https://ct.leady.com/3W89p62NocJQ06DS/L.js'
const ECOMAIL_SRC = '//d70shl7vidtft.cloudfront.net/ecmtr-2.4.2.js'

function loadLeadyScript() {
  if (document.querySelector(`script[src="${LEADY_SRC}"]`)) return
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = LEADY_SRC
  document.head.appendChild(s)
}

function loadEcomailScript() {
  if (document.querySelector(`script[src="${ECOMAIL_SRC}"]`)) return
  ;(function (p, l, o, w, i, n, g) {
    if (!p[i]) {
      p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || []
      p.GlobalSnowplowNamespace.push(i)
      p[i] = function () { (p[i].q = p[i].q || []).push(arguments) }
      p[i].q = p[i].q || []
      n = l.createElement(o)
      g = l.getElementsByTagName(o)[0]
      n.async = 1
      n.src = w
      g.parentNode.insertBefore(n, g)
    }
  })(window, document, 'script', ECOMAIL_SRC, 'ecotrack')
  window.ecotrack('newTracker', 'cf', 'd2dpiwfhf3tz0r.cloudfront.net', { appId: 'agrokom' })
  window.ecotrack('setUserIdFromLocation', 'ecmid')
  window.ecotrack('trackPageView')
}

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'bar',
          position: 'bottom',
          equalWeightButtons: false,
        },
        preferencesModal: {
          layout: 'box',
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^c$/ },
              { name: /^leady/ },
            ],
          },
        },
      },

      onConsent() {
        if (CookieConsent.acceptedCategory('analytics')) {
          loadLeadyScript()
          loadEcomailScript()
        }
      },

      onChange({ changedCategories }) {
        if (changedCategories.includes('analytics')) {
          if (CookieConsent.acceptedCategory('analytics')) {
            loadLeadyScript()
            loadEcomailScript()
          }
        }
      },

      language: {
        default: 'cs',
        translations: {
          cs: {
            consentModal: {
              title: 'Používáme cookies',
              description:
                'Tento web používá soubory cookie ke zlepšení svých služeb. Analytické nástroje (Leady.cz, Ecomail) nám pomáhají porozumět návštěvnosti a chování návštěvníků. Svůj souhlas můžete kdykoli změnit.',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Pouze nezbytné',
              showPreferencesBtn: 'Nastavení',
            },
            preferencesModal: {
              title: 'Nastavení cookies',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Pouze nezbytné',
              savePreferencesBtn: 'Uložit nastavení',
              closeIconLabel: 'Zavřít',
              sections: [
                {
                  title: 'Jak používáme cookies',
                  description:
                    'Cookies jsou malé soubory ukládané ve vašem prohlížeči. Níže si můžete zvolit, které kategorie povolíte. Svá nastavení můžete kdykoli změnit kliknutím na odkaz v patičce stránky.',
                },
                {
                  title: 'Nezbytné cookies',
                  description:
                    'Tyto cookies jsou nutné pro správné fungování webu a nelze je vypnout.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytické cookies',
                  description:
                    'Pomáhají nám pochopit, jak návštěvníci web používají. Využíváme nástroj Leady.cz, který identifikuje firemní návštěvníky na základě IP adresy. Data zpracováváme v souladu s GDPR.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
    })
  }, [])

  return null
}
