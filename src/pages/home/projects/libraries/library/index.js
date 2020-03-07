import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Image from '@tenjojeremy/web-toolkit/media/image'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Library = ({ logo, name, description, repo, site, backgroundIMG }) => {
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.titleWrapper}>
        <Image src={logo} />
        <Typography text={name} />
      </Box>
      <Typography text={description} variant='body2' />
      <Box styles={styles.titleWrapper}>
        <Icon name='github/1' />
        <Icon name='storybook/1' />
      </Box>
    </Box>
  )
}

Library.defaultProps = defaultProps
Library.propTypes = propTypes

export default memo(Library)
