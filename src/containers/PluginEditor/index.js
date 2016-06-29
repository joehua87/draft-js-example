/* eslint-disable import/no-unresolved */

import React, { Component } from 'react'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import addButton from '../../addButton'
import createButtonPlugin from './createButtonPlugin'
import styles from './styles.css'

const rawContent = require('../../content.json')
const contentState = convertFromRaw(rawContent)

const plugins = [
  createButtonPlugin(),
]

export default class PluginEditor extends Component {
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
          <Editor
            plugins={plugins}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}
