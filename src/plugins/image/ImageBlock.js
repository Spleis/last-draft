/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import styled from 'styled-components'
import BlockContent from './BlockContent'
import BlockInput from './BlockInput'
import Block from './Block'
import icons from '../../components/Icons/'

export default class ImageBlock extends Component {
  static get defaultProps () {
    return {
      showImageAttributes: false
    }
  }

  constructor (props) {
    super(props)

    this.actions = [
      {
        key: 'delete',
        icon: icons.CloseIcon,
        action: this.props.container.remove
      }
    ]
  }

  render () {
    return (
      <Block {...this.props} actions={this.actions}>
        <BlockContent>
          <Image
            src={this.props.data.src}
            srcSet={this.props.data.srcSet}
            className='ld-image-block' />
        </BlockContent>
      </Block>
    )
  }
}

const Image = styled.img`
  display: inline-block;
  maxWidth: 90% !important;
  margin: 0 auto !important;
  verticalAlign: middle;
`

const InputWrap = styled.div`
  display: flex;
`
