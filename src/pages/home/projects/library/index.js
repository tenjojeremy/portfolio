import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Library = (props) => {
  return <Box styles={styles.wrapper}>hi</Box>
}

Library.defaultProps = defaultProps
Library.propTypes = propTypes

export default memo(Library)
