import { useMemo } from 'react'
import useChatStyles from './use-chat-styles'
import type { ChatOutlineStyle, ChatStyles } from './use-chat-styles'

export const generateTextShadow = (outlineStyle: ChatOutlineStyle): string => {
  if (outlineStyle.width < 1) return 'none'

  const values = []
  for (
    let x = -outlineStyle.width;
    x <= outlineStyle.width;
    x += Math.ceil(outlineStyle.width / 4)
  ) {
    for (
      let y = -outlineStyle.width;
      y <= outlineStyle.width;
      y += Math.ceil(outlineStyle.width / 4)
    ) {
      values.push(`${x}px ${y}px 0 ${outlineStyle.color}`)
    }
  }

  return `\n    ${values.join(',\n    ')}`
}

export const generateStyleSheet = (chatStyles: ChatStyles): string =>
  `@charset "UTF-8";

@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500&display=swap");

body {
  background-color: transparent !important;
  font-family: "Noto Sans JP", sans-serif !important;
  overflow-y: hidden !important;
}

yt-live-chat-renderer {
  background-color: transparent !important;
}

yt-live-chat-ticker-renderer {
  display: none !important;
}

yt-live-chat-item-list-renderer {
  --yt-live-chat-author-chip-owner-text-color: ${chatStyles.ownerName.color};
  --yt-live-chat-deleted-message-color: rgba(153, 153, 153, 0.5);
  --yt-live-chat-item-timestamp-display: none;
  --yt-live-chat-item-timestamp-margin: 0 5px 0 0;
  --yt-live-chat-message-highlight-background-color: transparent;
  --yt-live-chat-message-highlight-text-color: ${chatStyles.ownerName.color};
  --yt-live-chat-moderator-color: ${chatStyles.moderatorName.color};
  --yt-live-chat-owner-color: ${chatStyles.ownerName.color};
  --yt-live-chat-paid-message-author-name-color: ${chatStyles.authorName.color};
  --yt-live-chat-primary-text-color: ${chatStyles.message.color};
  --yt-live-chat-secondary-text-color: ${chatStyles.authorName.color};
  --yt-live-chat-sponsor-color: ${chatStyles.memberName.color};
  --yt-live-chat-tertiary-text-color: ${chatStyles.timestamp.color};
}

#item-scroller {
  overflow-y: hidden !important;
}

yt-live-chat-text-message-renderer {
  padding: 4px 5px !important;
}

yt-live-chat-text-message-renderer[is-deleted] {
  display: none !important;
}

yt-live-chat-text-message-renderer #author-photo {
  display: ${chatStyles.avatar.show ? 'block' : 'none'} !important;
  height: ${chatStyles.avatar.size}px !important;
  margin: ${Math.max(
    2,
    (26 - chatStyles.avatar.size) / 2
  )}px 10px 0 0 !important;
  width: ${chatStyles.avatar.size}px !important;
}

yt-live-chat-text-message-renderer #author-photo img {
  height: 100% !important;
  width: 100% !important;
}

yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  font-size: ${chatStyles.authorName.fontSize}px !important;
  letter-spacing: 0.15em;
  line-height: 1.4 !important;
  margin: 0 !important;
  text-shadow: ${generateTextShadow(chatStyles.authorName.outline)};
}

yt-live-chat-text-message-renderer[author-type="owner"] yt-live-chat-author-chip {
  font-size: ${chatStyles.ownerName.fontSize}px !important;
  text-shadow: ${generateTextShadow(chatStyles.ownerName.outline)};
}

yt-live-chat-text-message-renderer[author-type="moderator"] yt-live-chat-author-chip {
  font-size: ${chatStyles.moderatorName.fontSize}px !important;
  text-shadow: ${generateTextShadow(chatStyles.moderatorName.outline)};
}

yt-live-chat-text-message-renderer[author-type="member"] yt-live-chat-author-chip {
  font-size: ${chatStyles.memberName.fontSize}px !important;
  text-shadow: ${generateTextShadow(chatStyles.memberName.outline)};
}

yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
  color: var(--yt-live-chat-secondary-text-color, hsla(0, 0%, 6.7%, .6));
  content: ":";
  display: ${chatStyles.authorName.show ? 'block' : 'none'};
  font-weight: 500;
  margin: 0 8px 0 3px;
  order: 2;
}

yt-live-chat-text-message-renderer[author-type="owner"] yt-live-chat-author-chip::after {
  color: var(--yt-live-chat-message-highlight-text-color);
  display: ${chatStyles.ownerName.show ? 'block' : 'none'};
}

yt-live-chat-text-message-renderer[author-type="moderator"] yt-live-chat-author-chip::after {
  color: var(--yt-live-chat-moderator-color);
  display: ${
    chatStyles.moderatorName.show || chatStyles.moderatorName.badge.show
      ? 'block'
      : 'none'
  };
}

yt-live-chat-text-message-renderer[author-type="member"] yt-live-chat-author-chip::after {
    color: var(--yt-live-chat-sponsor-color);
    display: ${
      chatStyles.memberName.show || chatStyles.memberName.badge.show
        ? 'block'
        : 'none'
    };
}

yt-live-chat-text-message-renderer #author-name {
  background-color: transparent !important;
  display: ${chatStyles.authorName.show ? 'block' : 'none'};
  order: 0;
  padding: 0 !important;
}

yt-live-chat-text-message-renderer #author-name[type="owner"] {
  display: ${chatStyles.ownerName.show ? 'block' : 'none'};
}

yt-live-chat-text-message-renderer #author-name[type="moderator"] {
  display: ${chatStyles.moderatorName.show ? 'block' : 'none'};
}

yt-live-chat-text-message-renderer #author-name[type="member"] {
  display: ${chatStyles.memberName.show ? 'block' : 'none'};
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer {
  display: none;
  margin: 0  0 2px 3px !important;
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {
  display: ${chatStyles.moderatorName.badge.show ? 'inline-block' : 'none'};
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {
  display: ${chatStyles.memberName.badge.show ? 'inline-block' : 'none'};
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image {
  height: 16px;
  width: 16px;
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] #image {
  height: ${chatStyles.moderatorName.badge.size}px;
  width: ${chatStyles.moderatorName.badge.size}px;
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] #image {
  height: ${chatStyles.memberName.badge.size}px;
  width: ${chatStyles.memberName.badge.size}px;
}

yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image img,
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image yt-icon {
  height: 100% !important;
  width: 100% !important;
}

yt-live-chat-text-message-renderer[author-type="moderator"] yt-live-chat-author-badge-renderer #image svg {
  filter: ${
    chatStyles.moderatorName.outline.width > 0
      ? `drop-shadow(1px 1px ${chatStyles.moderatorName.outline.color})
    drop-shadow(-1px 1px ${chatStyles.moderatorName.outline.color})
    drop-shadow(1px -1px ${chatStyles.moderatorName.outline.color})
    drop-shadow(-1px -1px ${chatStyles.moderatorName.outline.color})`
      : 'none'
  };
}

yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer yt-formatted-string {
  font-size: ${chatStyles.message.fontSize}px !important;
  letter-spacing: 0.15em;
  line-height: 1.4 !important;
  text-shadow: ${generateTextShadow(chatStyles.message.outline)};
}

yt-live-chat-text-message-renderer #timestamp {
  font-size: ${chatStyles.timestamp.fontSize}px !important;
  line-height: 1.4 !important;
}

yt-live-chat-legacy-paid-message-renderer,
yt-live-chat-paid-message-renderer {
  padding: 4px 2px !important;
}

yt-live-chat-legacy-paid-message-renderer {
  ${
    !chatStyles.newMemberBackground.show
      ? '--yt-live-chat-sponsor-color: transparent !important;'
      : ''
  }
}

yt-live-chat-paid-message-renderer {
  --yt-live-chat-paid-message-author-name-color: var(--yt-live-chat-secondary-text-color) !important;
  --yt-live-chat-paid-message-color: var(--yt-live-chat-primary-text-color) !important;
  --yt-live-chat-paid-message-header-color: var(--yt-live-chat-primary-text-color) !important;
  --yt-live-chat-paid-message-timestamp-color: var(--yt-live-chat-tertiary-text-color) !important;
  ${
    !chatStyles.superChatBackground.show
      ? `--yt-live-chat-paid-message-primary-color: transparent !important;
  --yt-live-chat-paid-message-secondary-color: transparent !important;`
      : ''
  }
}

yt-live-chat-legacy-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo {
  display: ${chatStyles.avatar.show ? 'display' : 'none'} !important;
  height: ${chatStyles.avatar.size}px !important;
  margin: ${Math.max(
    2,
    (26 - chatStyles.avatar.size) / 2
  )}px 10px 0 0 !important;
  width: ${chatStyles.avatar.size}px !important;
}

yt-live-chat-legacy-paid-message-renderer #author-photo img,
yt-live-chat-paid-message-renderer #author-photo img {
  height: 100% !important;
  width: 100% !important;
}

yt-live-chat-legacy-paid-message-renderer #card,
yt-live-chat-paid-message-renderer #card {
  box-shadow: none !important;
}

yt-live-chat-legacy-paid-message-renderer #card {
  padding: 4px 2px !important;
}

yt-live-chat-legacy-paid-message-renderer #event-text,
yt-live-chat-legacy-paid-message-renderer #detail-text {
  font-size: ${chatStyles.message.fontSize}px !important;
  letter-spacing: 0.15em;
  line-height: 1.4 !important;
  text-shadow: ${generateTextShadow(chatStyles.message.outline)};
}

yt-live-chat-legacy-paid-message-renderer #event-text {
  color: var(--yt-live-chat-paid-message-author-name-color) !important
}

yt-live-chat-legacy-paid-message-renderer #detail-text {
  color: var(--yt-live-chat-primary-text-color) !important;
  padding: 4px 0 0 0 !important;
}

${
  !chatStyles.superChatBackground.show
    ? `yt-live-chat-paid-message-renderer #header,
yt-live-chat-paid-message-renderer #content {
  transition: none !important;
}`
    : ''
}

yt-live-chat-paid-message-renderer #header {
  align-items: flex-start !important;
  padding: 4px 2px !important;
}

yt-live-chat-paid-message-renderer #header-content {
  align-items: flex-end !important;
}

yt-live-chat-paid-message-renderer #header-content-primary-column {
  align-items: flex-end;
  flex-direction: row !important;
  justify-content: flex-start;
}

yt-live-chat-paid-message-renderer #content {
  padding: 4px 2px 4px ${
    chatStyles.avatar.show ? +chatStyles.avatar.size + 7 : 2
  }px !important;
}

yt-live-chat-paid-message-renderer #author-name {
  font-size: ${chatStyles.authorName.fontSize}px !important;
  letter-spacing: 0.15em;
  line-height: 1.4 !important;
  text-shadow: ${generateTextShadow(chatStyles.authorName.outline)};
}

yt-live-chat-paid-message-renderer #author-name::after {
  content: ":";
  display: inline-block;
  font-weight: 500;
  margin-left: 3px;
}

yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #message {
  font-size: ${chatStyles.message.fontSize}px !important;
  letter-spacing: 0.15em;
  line-height: 1.4 !important;
  text-shadow: ${generateTextShadow(chatStyles.message.outline)};
}

yt-live-chat-paid-message-renderer #purchase-amount {
  padding: 0 5px 0 10px !important;
  white-space: nowrap !important;
}

yt-live-chat-viewer-engagement-message-renderer {
  border-top: none !important;
  display: ${chatStyles.engagementMessage.show ? 'block' : 'none'} !important;
  padding: 2px 4px;

  --yt-live-chat-primary-text-color: #000;
  --yt-live-chat-vem-background-color: rgba(255, 255, 255, .8);
}

yt-live-chat-viewer-engagement-message-renderer #icon {
  height: 36px;
  margin-right: 8px;
  width: 36px;
}

yt-live-chat-viewer-engagement-message-renderer #message {
  font-size: ${chatStyles.message.fontSize - 3}px !important;
  line-height: 1.4;
}

yt-live-chat-viewer-engagement-message-renderer #action-button {
  display: none !important;
}

yt-live-chat-header-renderer,
yt-live-chat-message-input-renderer,
yt-live-chat-mode-change-message-renderer,
yt-live-chat-restricted-participation-renderer {
  display: none !important;
}
`

function useStyleSheet(): string {
  const [chatStyles] = useChatStyles()
  const styleSheet = useMemo(() => generateStyleSheet(chatStyles), [chatStyles])

  return styleSheet
}

export default useStyleSheet
