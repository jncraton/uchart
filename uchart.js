function uchart(canvas, y, line=false, margin=30) {
  let ctx = canvas.getContext('2d')
  let min = y.reduce((min, yi) => yi < min ? yi : min, Infinity)
  let max = y.reduce((max, yi) => yi > max ? yi : max, -Infinity)

  ctx.strokeStyle = '#ccc'
  ctx.strokeWidth = .5

  y_labels = [min, (max+min)/2, max]

  ;[margin, canvas.height/2, canvas.height - margin].forEach((y, i) => {
    ctx.fillText(y_labels[i], 5, y + 3)
    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(canvas.width - margin, y)
    ctx.stroke()
  })

  ctx.scale(1,-1)
  ctx.translate(0,-canvas.height)

  ctx.beginPath()
  y.forEach((yi, i) => {
    let x = margin + i * (canvas.width - 2*margin) / y.length
    let y_pos = margin + (yi - min) * (canvas.height - 2*margin) / (max-min)

    if (line) {
      if (i == 0) {
        ctx.moveTo(x,y_pos)
      } else {
        ctx.lineTo(x+3,y_pos)
      }
    }

    ctx.fillRect(x,y_pos-3,6,6)
  })
  ctx.stroke()
}
