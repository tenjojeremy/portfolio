import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon'
import List from '@tenjojeremy/web-toolkit/dataDisplay/list'
import Image from '@tenjojeremy/web-toolkit/media/image'
import Link from '@tenjojeremy/web-toolkit/navigation/link'
import Button from '@tenjojeremy/web-toolkit/input/button/styles/base'

import useCarousel from '../../../../../common/carousel/carousel.state'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Webapp = ({
  name,
  color,
  description,
  position,
  techList,
  backgroundImage,
  screenshots,
  site,
}) => {
  const { updateCarousel } = useCarousel()

  const handleScreenshotClick = (index) => updateCarousel(screenshots, index)

  return (
    <Box styles={styles.wrapper(color, backgroundImage)}>
      <Box styles={styles.innerWrapper}>
        <Box styles={styles.infoWrapper}>
          <Box styles={styles.titlesWrapper}>
            <Typography styles={styles.titles} text={name} variant='headerTwo' />
            <Typography
              styles={{ ...styles.titles, ...styles.position }}
              text={position}
              variant='subtitle1'
            />
          </Box>

          <Typography styles={styles.description} text={description} variant='body1' />

          <Box styles={styles.techListWrapper}>
            <Typography styles={styles.techListTitle} text='Tech used:' variant='body1' />

            <Box styles={styles.techList}>
              {techList.map((tech) => (
                <Icon
                  key={tech}
                  name={`${tech}/1`}
                  width='auto'
                  height='20px'
                  style={styles.icon}
                  plain
                />
              ))}
            </Box>

            <List photoGrid style={{ maxHeight: '200px', overflow: 'auto' }}>
              {screenshots.map((screenshot, index) => (
                <Image
                  key={screenshot}
                  src={screenshot}
                  styles={styles.screenshots}
                  isLazyLoaded
                  onClick={() => handleScreenshotClick(index)}
                />
              ))}
            </List>

            {site && (
              <Link
                href={site}
                styles={{ margin: ['--0 auto', '--0 auto', '--initial'], padding: 'm' }}
              >
                <Button text='DEMO' />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Webapp.defaultProps = defaultProps
Webapp.propTypes = propTypes

export default memo(Webapp)
