import useStorage from './use-storage'
import type { Dispatch, SetStateAction } from 'react'

export type ChatOutlineStyle = {
  color: string
  width: number
}

export type ChatTextStyle = {
  color: string
  fontSize: number
  outline: ChatOutlineStyle
  show?: boolean
}

export type ChatImageStyle = {
  show: boolean
  size: number
}

export type ChatStyles = {
  authorName: ChatTextStyle
  avatar: ChatImageStyle
  engagementMessage: {
    show: boolean
  }
  memberName: ChatTextStyle & {
    badge: ChatImageStyle
  }
  message: ChatTextStyle
  moderatorName: ChatTextStyle & {
    badge: ChatImageStyle
  }
  newMemberBackground: {
    show: boolean
  }
  ownerName: ChatTextStyle
  superChatBackground: {
    show: boolean
  }
  timestamp: ChatTextStyle
}

const defaultChatStyles: ChatStyles = {
  authorName: {
    color: '#ffffff',
    fontSize: 18,
    outline: {
      color: '#000000',
      width: 2
    },
    show: true
  },
  avatar: {
    show: true,
    size: 20
  },
  engagementMessage: {
    show: false
  },
  memberName: {
    badge: {
      show: true,
      size: 16
    },
    color: '#107516',
    fontSize: 18,
    outline: {
      color: '#000000',
      width: 2
    },
    show: true
  },
  message: {
    color: '#ffffff',
    fontSize: 18,
    outline: {
      color: '#000000',
      width: 2
    }
  },
  moderatorName: {
    badge: {
      show: true,
      size: 16
    },
    color: '#5e84f1',
    fontSize: 18,
    outline: {
      color: '#000000',
      width: 2
    },
    show: true
  },
  newMemberBackground: {
    show: true
  },
  ownerName: {
    color: '#ffd600',
    fontSize: 18,
    outline: {
      color: '#000000',
      width: 2
    },
    show: true
  },
  superChatBackground: {
    show: true
  },
  timestamp: {
    color: '#999999',
    fontSize: 16,
    outline: {
      color: '#000000',
      width: 2
    },
    show: false
  }
}

function useChatStyles(): [
  ChatStyles,
  Dispatch<SetStateAction<ChatStyles | undefined>>
] {
  const [chatStyles, setChatStyles] = useStorage(
    'chatStyles:v3',
    defaultChatStyles
  )

  return [chatStyles, setChatStyles]
}

export default useChatStyles
