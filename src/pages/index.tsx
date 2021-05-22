import Layout from '../components/layout'
import Preview from '../components/preview'
import Result from '../components/result'
import StylesForm from '../components/styles-form'
import type { NextPage } from 'next'

const Generator: NextPage = () => {
  return (
    <Layout>
      <div className="container flex items-start mx-auto relative">
        <div className="px-4 sm:w-full w-6/12">
          <StylesForm />
        </div>
        <div className="px-4 sm:w-full sticky top-0 w-6/12">
          <Preview />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Result />
      </div>
    </Layout>
  )
}

export default Generator
