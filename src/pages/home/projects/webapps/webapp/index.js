import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Webapp = ({
  name,
  color,
  imagesFolder,
  imagesBG,
  imagesGallery,
  description,
  position,
  link,
  type,
  techList,
  backgroundImage,
}) => {
  return (
    <Box styles={{ ...styles.wrapper, backgroundColor: `--${color}`, backgroundImage }}>
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

          <Typography text={description} variant='body1' />

          <Box styles={styles.techListWrapper}>
            <Typography styles={styles.techListTitle} text='Tech used:' variant='body1' />
            <Box styles={styles.techList}>
              {techList.map((tech) => (
                <Icon key={tech} name={`${tech}/1`} size={20} style={styles.icon} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Webapp.defaultProps = defaultProps
Webapp.propTypes = propTypes

export default memo(Webapp)
