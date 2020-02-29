import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'
import Particles from '@tenjojeremy/web-toolkit/ambient/particles'
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon'

import * as styles from './styles'

const Intro = () => {
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.wrapperParticles}>
        <Particles height='100%' width='100%' />
      </Box>
      <Box styles={styles.wrapperInner}>
        <Box styles={styles.wrapperTitle}>
          <Typography
            text='Jeremy Tenjo'
            variant='title'
            tag='h1'
            styles={styles.title}
          />
          <Typography text='Portfolio' variant='subtitle' tag='h2' />
        </Box>
        <Typography
          text={`I am a web developer who enjoys the challenges of solving modern problems by using the latest and greatest web tools at my disposal. I love Javascript and I'm always experimenting with new frameworks and libraries that make my development more efficient.`}
          variant='body2'
          styles={styles.description}
        />
        <Box styles={styles.wrapperIcon}>
          <a
            title='Linkedin'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ca.linkedin.com/in/jeremy-tenjo-244048120'
          >
            <Icon name='linkedin/1' {...styles.icon} />
          </a>
          <a
            title='Github'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/tenjojeremy'
          >
            <Icon name='github/1' {...styles.icon} />
          </a>

          <a
            title='Portfolio'
            target='_blank'
            rel='noopener noreferrer'
            href='https://firebasestorage.googleapis.com/v0/b/portfolio-83749.appspot.com/o/Resume%20-%20Jeremy%20Tenjo.pdf?alt=media&token=920f127b-f57d-4aae-a530-c123d6e409c9'
          >
            <Icon name='paper/1' {...styles.icon} />
          </a>
        </Box>
        <Icon name='arrow/feather' {...styles.icon} />
      </Box>
    </Box>
  )
}

export default memo(Intro)
