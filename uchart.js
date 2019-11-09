function uchart(canvas, y, line=false, margin=30) {
  let ctx = canvas.getContext('2d')
  let min = y.reduce((min, yi) => yi < min ? yi : min, Infinity)
  let max = y.reduce((max, yi) => yi > max ? yi : max, -Infinity)
  let y_labels = [max, (max+min)/2, min]

  ctx.strokeStyle = '#ccc'
  ctx.strokeWidth = .5

  ;[margin, canvas.height/2, canvas.height - margin].forEach((y, i) => {
    ctx.fillText(y_labels[i], 5, y + 3)
    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(canvas.width - margin, y)
    ctx.stroke()
  })

  ctx.beginPath()
  y.forEach((yi, i) => {
    let x = margin + i * (canvas.width - 2*margin) / y.length
    let y_pos = (margin + (yi - min) * (canvas.height - 2*margin) / (max-min))
    y_pos = canvas.height - y_pos

    if (line) {
      if (i == 0) ctx.moveTo(x,y_pos)
      else ctx.lineTo(x+3,y_pos)
    }

    ctx.fillRect(x,y_pos-3,6,6)
  })
  ctx.stroke()
}
