# Demo Videos

Drop project demo clips here. Name each file after the project `slug` used in
`src/data/projects.js`, for example:

- `oer-ai-agent.mp4`
- `exact-scholars.mp4`
- `hotel-data-automation.mp4`
- `todo-app.mp4`
- `adventure-game.mp4`

Then import it in `src/data/projects.js` and set it as the project's `video` field:

```js
import oerVideo from "../assets/videos/oer-ai-agent.mp4";
// ...
video: oerVideo,
```

Videos are muted + autoplay + loop on the project detail page. Prefer short,
compressed `.mp4` (H.264) clips for fast loading.
