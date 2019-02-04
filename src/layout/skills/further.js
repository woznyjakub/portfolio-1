import React from 'react'
import { Caption } from '../../components'
import IconsWrapper from './icons-wrapper'

import gatsbyIcon from '../../images/gatsby.png'
import webpackIcon from '../../images/webpack.png'
import gitIcon from '../../images/git.png'
import linuxIcon from '../../images/linux.png'

const FurtherSkills = () => {
  const iconsData = [
    {
      url: gatsbyIcon,
      caption: 'GatsbyJS',
    },
    {
      url: webpackIcon,
      caption: 'Webpack',
    },
    {
      url: gitIcon,
      caption: 'Git',
    },
    {
      url: linuxIcon,
      caption: 'Linux',
    },
  ]
  return (
    <>
      {iconsData.map(({ url, caption }, i, arr) => (
        <IconsWrapper childAmount={arr.length} key={i}>
          <img src={url} alt={caption} />
          <Caption>{caption}</Caption>
        </IconsWrapper>
      ))}
    </>
  )
}

export default FurtherSkills
