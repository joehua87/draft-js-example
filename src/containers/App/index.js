/* eslint-disable import/no-unresolved */

import React, { Component } from 'react'
import Editor from '../Editor'
import PluginEditor from '../PluginEditor'
import styles from './styles.css'

export default class App extends Component {
  state = {
    tabIndex: 0,
    entities: []
  };

  // handleTabSelect = (tabIndex) => {
  //   this.setState({ tabIndex })
  // };

  render() {
    return (
      <div className={styles.root} style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 auto' }}>
          <h2>Normal Editor</h2>
          <Editor />
        </div>
        <div style={{ flex: '1 0 auto' }}>
          <h2>Plugin Editor</h2>
          <PluginEditor />
        </div>

      </div>
    )
  }
}
