/*!***************************************
 * Level Up Theme for High Level (GHL)
 * https//levelupthemes.com
 * Version: v1.7.32
 ****************************************/

const CHAT_EMBED_CONTAINER_SELECTOR = "#levelup-chat-embed";
const MAX_ATTEMPTS = 20;
const embedChat = (attempts = 1) => {
  var _a;
  const embedDiv = document.querySelector(
    CHAT_EMBED_CONTAINER_SELECTOR
  );
  if (!embedDiv) {
    return;
  }
  const retry = () => {
    if (attempts > MAX_ATTEMPTS) {
      console.warn("Level Up Theme: embedChat max attempts reached");
      return;
    }
    setTimeout(() => {
      embedChat(attempts + 1);
    }, 50 * attempts + 100);
  };
  const chat = document.querySelector("chat-widget");
  const root = chat == null ? void 0 : chat.shadowRoot;
  if (!chat || !root) {
    return retry();
  }
  const button = root.querySelector(".lc_text-widget--btn");
  const widget = root.querySelector(".lc_text-widget");
  const box = root.querySelector(".lc_text-widget--box");
  const heading = root.querySelector(
    ".lc_text-widget_heading--root"
  );
  if (!button || !widget || !box || !heading) {
    return retry();
  }
  (_a = chat.parentElement) == null ? void 0 : _a.removeChild(chat);
  widget.style.position = "static";
  widget.style.width = "100%";
  box.style.maxWidth = "100%";
  embedDiv.appendChild(chat);
  button == null ? void 0 : button.click();
  button.style.display = "none";
};

export { embedChat };
//# sourceMappingURL=embedChat.js.map
