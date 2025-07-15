# Cascade Layer crash reproduction

1. Open the provided reproduction file (`index.html`) in a debug build of Chromium
2. Open Dev Tools, select the element tab, and make sure the "style" tab is visible
3. Find the _first_ `<style>` tag and delete it
4. Crash  (while technically intermittent it is generally quite reliable)

# Not-so-minimal cascade Layer crash reproduction

This one reproduces it happening on navigation.

1. `npm run dev`
2. Open `localhost:5173` in a debug build of Chromium
3. Open Dev Tools, select the element tab, and make sure the "style" tab is visible
4. Click the "other" page link
5. Crash (while technically intermittent it is generally quite reliable)

Note: this may or may not take a handful of clicks to reproduce the first time. It feels like it becomes *more* reliable after the first crash but I'm not 100% sure on that.
