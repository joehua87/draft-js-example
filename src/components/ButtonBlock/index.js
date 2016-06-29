import React from 'react'
import { Entity } from 'draft-js'
import styles from './styles.css'

export default class Button extends React.Component { // eslint-disable-line
  render() {
    const text = Entity.get(this.props.block.getEntityAt(0)).getData().text
    return (
      <div className={styles.root}>
        <button>{text}</button>
      </div>
    )
  }
}
