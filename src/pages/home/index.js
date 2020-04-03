import React, { memo } from 'react'

import Projects from './projects'
import Intro from './intro'

const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
    </>
  )
}

export default memo(Home)
