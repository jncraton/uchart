function uchart(canvas, y, margin=30) {
  let ctx = canvas.getContext('2d')
  let min = y.reduce((min, yi) => yi < min ? yi : min, Infinity)
  let max = y.reduce((max, yi) => yi > max ? yi : max, -Infinity)

  ctx.fillText(min, 5, canvas.height - margin)
  ctx.fillText(max, 5, margin)

  ctx.scale(1,-1)
  ctx.translate(0,-canvas.height)

  y.forEach((yi, i) => {
    let x = margin + i * (canvas.width - 2*margin) / y.length
    let y_pos = margin + (yi - min) * (canvas.height - 2*margin) / (max-min)
    ctx.fillRect(x,y_pos,5,5);
  })

}