import { FunctionComponent } from 'preact'
import renderToString from 'preact-render-to-string'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

export const passToClient = ['pageProps']

type RenderProps = {
  Page: FunctionComponent,
  pageProps: {}
}

export async function render({ Page, pageProps }: RenderProps) {
  return {
    pageContext: {},
    documentHtml: escapeInject`<!doctype html>${dangerouslySkipEscape(
      renderToString(
        <html lang="en-US">
          <head>
            <title>Hello, SSR</title>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1.0" />
          </head>
          <body>
            <Page {...pageProps} />
          </body>
        </html>
      )
    )}`,
  }
}
