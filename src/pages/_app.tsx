import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
