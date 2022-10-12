import { FunctionComponent, hydrate, render as mount } from 'preact'

export const clientRouting = true

type RenderProps = {
  Page: FunctionComponent
  pageProps: {}
  isHydration: boolean
}

export async function render({ Page, pageProps, isHydration }: RenderProps) {
  if (isHydration) {
    hydrate(<Page {...pageProps} />, document.body)
  } else {
    mount(<Page {...pageProps} />, document.body)
  }
}
