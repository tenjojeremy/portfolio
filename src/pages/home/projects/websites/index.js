import React, { memo, Fragment } from 'react'

import websites from '../../../../data/websites'

import Webapp from './website'

const Libraries = () => {
  return websites.map((webapp) => (
    <Fragment key={webapp.name}>
      <Webapp {...webapp} />
    </Fragment>
  ))
}

export default memo(Libraries)
