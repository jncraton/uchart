uchart
======

A microscopic js charting library in under 512 bytes.

Usage
-----

```js
uchart(canvas_element, data)
```

Example
-------

```js
uchart(document.querySelector('canvas').getContext('2d'), [1,3,5,4,3])
```

![Example 1](media/a.png)

```js
uchart(document.querySelector('canvas').getContext('2d'), [10,5,8.3,12.3,-3.4,-1.1], line=true)
```

![Example 2](media/b.png)
