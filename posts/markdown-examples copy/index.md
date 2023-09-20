---
title: Markdown Extension Examples 2
create: 2023-05-07T20:40:31+08:00
cover: https://lh3.googleusercontent.com/aiJojq_gpPLqLhU0PZH6Dog-OjIMti_hiclF_6oqxucGuvywn_AEtu2Qrk2f4WxEhRWMjXkz8qXpTCGoj5TZ0DUCEZ5UIXnXTSIu_7ndg2dTNmQbdkCO=w960
description: |
  This page demonstrates some of the built-in markdown extensions provided by VitePress.
---
---

# Markdown Extension Examples 2

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
