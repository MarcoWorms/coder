import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './codetheme.css'
import {
    Editor,
    EditorState,
    convertFromRaw
} from 'draft-js'
import PrismDecorator from 'draft-js-prism'
import CodeUtils from 'draft-js-code'

class App extends Component {
  constructor(props) {
    super(props)
    const decorator = new PrismDecorator({ defaultSyntax: 'javascript' })
    const contentState = convertFromRaw({
      entityMap: {},
      blocks: [
          {
            type: 'code-block',
            text: 'var message = "This is awesome!"'
          }
        ]
      })
    this.state = {editorState: EditorState.createWithContent(contentState, decorator)}
    this.onChange = (editorState) => this.setState({editorState})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coder 0.0.0</h2>
        </div>
        <div className="Editor">
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

export default App
