function uchart(canvas, y, line=false, margin=30) {
  let ctx = canvas.getContext('2d')
  let min = y.reduce((min, yi) => yi < min ? yi : min, Infinity)
  let max = y.reduce((max, yi) => yi > max ? yi : max, -Infinity)

  ctx.fillText(min, 5, canvas.height - margin + 3)
  ctx.fillText((max+min)/2, 5, canvas.height/2 + 3)
  ctx.fillText(max, 5, margin + 3)

  ctx.strokeStyle = '#ccc'
  ctx.strokeWidth = .5

  ;[margin, canvas.height/2, canvas.height - margin].forEach((y) => {
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