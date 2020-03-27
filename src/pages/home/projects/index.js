import React, { memo } from 'react'

import Libraries from './libraries'

const projectWrapperId = 'projectWrapper'
export const projectWrapperIdSelector = `#${projectWrapperId}`

const Projects = () => {
  return (
    <div id={projectWrapperId}>
      <Libraries />
    </div>
  )
}

export default memo(Projects)
