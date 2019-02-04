import React from 'react'
import { Caption } from '../../components'
import IconsWrapper from './icons-wrapper'

import htmlIcon from '../../images/html.png'
import cssIcon from '../../images/css.png'
import jsIcon from '../../images/js.jpg'
import sassIcon from '../../images/sass.png'
import reactIcon from '../../images/react.png'
import styledComponentsIcon from '../../images/styled.jpg'

const BasicSkills = () => {
  const iconsData = [
    {
      url: htmlIcon,
      caption: 'HTML',
    },
    {
      url: cssIcon,
      caption: 'CSS',
    },
    {
      url: jsIcon,
      caption: 'JavaScript',
    },
    {
      url: sassIcon,
      caption: 'Sass',
    },
    {
      url: reactIcon,
      caption: 'React',
    },
    {
      url: styledComponentsIcon,
      caption: 'Styled Components',
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

export default BasicSkills
