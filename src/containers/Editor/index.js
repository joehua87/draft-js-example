/* eslint-disable import/no-unresolved */

import React, { Component } from 'react'
import { Editor as DraftEditor, EditorState, Entity, convertToRaw, convertFromRaw } from 'draft-js'
import ButtonBlock from '../../components/ButtonBlock'
import addButton from '../../addButton'
import styles from './styles.css'

const rawContent = require('../../content.json')
const contentState = convertFromRaw(rawContent)

function blockRendererFn (contentBlock) {
  const blockType = contentBlock.getType()
  if (blockType === 'atomic') {
    const entity = Entity.get(contentBlock.getEntityAt(0))
    const type = entity.getType()
    if (type === 'button') {
      return {
        component: ButtonBlock,
        editable: false,
      }
    }
  }
  return null
}

export default class Editor extends Component {
  state = {
    editorState: EditorState.createWithContent(contentState),
  };

  onChange = (editorState) => this.setState({ editorState });

  handleAddButton = () => {
    const nextState = addButton(this.state.editorState, 'Hello')
    this.onChange(nextState)
  };

  logState = () => {
    const content = this.state.editorState.getCurrentContent()
    console.log(JSON.stringify(convertToRaw(content), null, 2)) // eslint-disable-line no-console
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleAddButton}>Add Button</button>
          <button onClick={this.logState}>Log State</button>
        </div>
        <div className={styles.editor}>
          <DraftEditor
            blockRendererFn={blockRendererFn}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}
