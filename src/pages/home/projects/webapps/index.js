import React, { memo, Fragment } from 'react'

import webapps from '../../../../data/webapps'

import Webapp from './webapp'

const Libraries = () => {
  return webapps.map((webapp) => (
    <Fragment key={webapp.name}>
      <Webapp {...webapp} />
    </Fragment>
  ))
}

export default memo(Libraries)
