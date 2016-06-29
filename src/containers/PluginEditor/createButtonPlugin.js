import decorateComponentWithProps from 'decorate-component-with-props'
import { Entity } from 'draft-js'
import ButtonBlock from '../../components/ButtonBlock'

export default function createButtonPlugin(config = {}) {
  // const theme = config.theme ? config.theme : {}
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  }

  return {
    initialize: ({ getEditorState, setEditorState, setReadOnly, getReadOnly }) => {
      store.getEditorState = getEditorState
      store.setEditorState = setEditorState
      store.setReadOnly = setReadOnly
      store.getReadOnly = getReadOnly
    },
    blockRendererFn: (contentBlock) => {
      const blockType = contentBlock.getType()
      if (blockType === 'atomic') {
        const entity = Entity.get(contentBlock.getEntityAt(0))
        const type = entity.getType()
        if (type === 'button') {
          return {
            component: decorateComponentWithProps(ButtonBlock, { editorStore: store }),
            editable: false,
          }
        }
      }
      return null
    },
  }
}
