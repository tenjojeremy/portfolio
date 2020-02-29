import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'

import * as styles from './styles'

const Name = () => {
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.wrapperInner}>
        <Typography text='Jeremy Tenjo' variant='h1' />
        <Typography text='Portfolio' variant='subtitle' />
        <Typography
          text={`I am a web developer who enjoys the challenges of solving modern problems by using the latest and greatest web tools at my disposal. I love Javascript and I'm always experimenting with new frameworks and libraries that make my development more efficient.`}
          variant='body2'
          styles={styles.description}
        />
      </Box>
    </Box>
  )
}

export default memo(Name)
