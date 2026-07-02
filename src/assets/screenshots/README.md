# Screenshots

Drop project screenshots here. Name each file after the project `slug` used in
`src/data/projects.js`, for example:

- `oer-ai-agent-1.png`
- `oer-ai-agent-2.png`

Then import them in `src/data/projects.js` and add them to the project's
`screenshots` array:

```js
import oerShot1 from "../assets/screenshots/oer-ai-agent-1.png";
import oerShot2 from "../assets/screenshots/oer-ai-agent-2.png";
// ...
screenshots: [oerShot1, oerShot2],
```

The screenshots gallery only renders when a project has at least one image.
