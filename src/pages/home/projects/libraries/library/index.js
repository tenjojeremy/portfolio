import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Image from '@tenjojeremy/web-toolkit/media/image'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon'
import Link from '@tenjojeremy/web-toolkit/navigation/link'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Library = ({ logo, name, description, repo, site }) => {
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.titleWrapper}>
        <Image src={logo} />
        <Typography text={name} />
      </Box>
      <Typography text={description} variant='body2' />
      <Box styles={styles.titleWrapper}>
        <Link href={repo}>
          <Icon name='github/1' />
        </Link>
        <Link href={site}>
          <Icon name='storybook/1' />
        </Link>
      </Box>
    </Box>
  )
}

Library.defaultProps = defaultProps
Library.propTypes = propTypes

export default memo(Library)
