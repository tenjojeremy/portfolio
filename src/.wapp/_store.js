import React, { cloneElement } from 'react'

import { CarouselProvider } from '../common/carousel/carousel.state.js'

const providers = [<CarouselProvider key={1} />]

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  )

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={providers}>{children}</ProviderComposer>
)

export default ContextProvider
