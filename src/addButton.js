import { Entity, AtomicBlockUtils } from 'draft-js'

export default function addButton(editorState, text) {
  const entityKey = Entity.create('button', 'IMMUTABLE', { text })
  return AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  )
}
