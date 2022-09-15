import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id, emojisList} = emoji
    const onclickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <li className="emoji-item" onClick={onclickEmojiItem}>
        <img
          key={id}
          src={emojiUrl}
          alt={emojiName}
          value={emojisList}
          className="emoji-image"
        />
      </li>
    )
  }
}

export default EmojiCard
