export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

export const HIGHLIGHT_CHAT = '@@chat/HIGHLIGHT_CHAT';

export const highlightChat = (chatId) => ({
   type: HIGHLIGHT_CHAT,
   chatId,
});

export const UNHIGHLIGHT_CHAT = '@@chat/UNHIGHLIGHT_CHAT';

export const unhighlightChat = (chatId) => ({
   type: UNHIGHLIGHT_CHAT,
   chatId,
});
