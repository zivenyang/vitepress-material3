---
outline: deep
title: Runtime API Examples 2
create: 2023-05-07T20:40:31+08:00
cover: https://lh3.googleusercontent.com/51moDkmVWptBFXRReuACKocS_fsOoYtfT-C78onEUKeRr7ky4l_ZsuZMK2AnE7-MPRbLzcKTAIFmNyyN7ACo0-eygmXaGeR0ItYtRcYNE8-_L8RHqkA=w960
description: |
  This page demonstrates usage of some of the runtime APIs provided by VitePress.
---

# Runtime API Examples 2

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
