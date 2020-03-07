import React, { memo, Fragment } from 'react'

import libraries from '../../../../data/libraries'

import Library from './library'

const Libraries = () => {
  return libraries.map((lib) => (
    <Fragment key={lib.id}>
      <Library {...lib} />
    </Fragment>
  ))
}

export default memo(Libraries)
