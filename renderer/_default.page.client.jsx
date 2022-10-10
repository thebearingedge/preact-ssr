import { hydrate, render as mount } from 'preact'

export const clientRouting = true

export function render({ Page, pageProps, isHydration }) {
  if (isHydration) {
    hydrate(<Page {...pageProps} />, document.body)
  } else {
    mount(<Page {...pageProps} />, document.body)
  }
}
