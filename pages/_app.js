import '../styles/globals.css'

import { Layouts } from '../components'
import React from 'react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
