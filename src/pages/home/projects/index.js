import React, { memo } from 'react'

import Libraries from './libraries'
import Webapps from './webapps'

const projectWrapperId = 'projectWrapper'
export const projectWrapperIdSelector = `#${projectWrapperId}`

const Projects = () => {
  return (
    <div id={projectWrapperId}>
      <Libraries />
      <Webapps />
    </div>
  )
}

export default memo(Projects)
