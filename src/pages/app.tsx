import { App } from '@client/components/App'
import { PageWrapperContainer } from '@client/components/shared/PageWrapper'

const Page = () => (
  <PageWrapperContainer isAuthentication={true}>
    <App />
  </PageWrapperContainer>
)

export default Page
