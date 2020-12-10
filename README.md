# react-hideandseekmenu
[![npm version](https://badge.fury.io/js/react-hideandseekmenu.svg)](https://badge.fury.io/js/react-hideandseekmenu)

A simple React hook to hide and show your site's menubar when scrolling.

![GIF showing react-hideandseekmenu](https://media.giphy.com/media/j1DcokVU0RO8qh7XJ7/giphy.gif)

---

## Features
🪝React Hook

---

### Installation

Install with NPM:

```sh
npm install react-hideandseekmenu --save
```

---

### Usage

#### `useHideAndSeekMenu`
```js
import { useHideAndSeekMenu } from 'react-hideandseekmenu'
```

You use this hook by passing in a `ref`. The hook will handle all the "hide and seek styling" for you by accessing `ref.curent.style` and setting inline-styles. You can pass in some [options](https://github.com/tlorent/react-hideandseekmenu/blob/master/README.md#options) to change the CSS and behaviour of the menu hiding & showing.

```js
useHideAndSeekMenu({
    ref: yourRef
})
```

```jsx
import { useHideAndSeekMenu } from 'react-hideandseekmenu'
import { useRef } from 'react'

const Navigation = () => {
    const navref = useRef<HTMLElement>(null);
    useHideAndSeekMenu({
        ref: navref,
        offset: 120,
        transitionDuration: 0.3,
    })

    return (
        <Nav ref={navref} />
    )
}
```

The hook will then handle the "hide and seek styling" of your navigation bar.

#### Default stylings

```css
position: sticky;
transition: top 0.3s ease;
top: 0;
```

---

### Options

These options can be passed to the `useHideAndSeekMenu` hook:

| Option  | Type  | Default  | Description  |
|---|---|---|---|
| offset  | number  | 90  | The offset at which the menu should disappear  |
| debounceTime  | number  | 10  | The debounce time for the hook to be fired  |
| ref  | RefObject<HTMLElement>  | undefined  | Pass a ref to the hook to let the hook handle all the "hide and seek styling"  |
| transitionDuration  | number  | 0.3  | Set a transition duration for the CSS transition property  |
| transitionTimingFunction  | string  | ease  | Set a transition timing function for the CSS transition property  |
