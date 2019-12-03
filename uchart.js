function uchart(ctx, y, line=false, margin=36) {
  let canvas = ctx.canvas   
  let min = Math.min(...y)
  let max = Math.max(...y)

  let y_labels = [max, (max+min)/2, min]

  ;[margin, canvas.height/2, canvas.height - margin].forEach((y, i) => {
    ctx.fillText(y_labels[i], margin, y - 3)
    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(canvas.width - margin, y)
    ctx.stroke()
  })

  ctx.beginPath()
  y.forEach((yi, i) => {
    let x = margin*2 + i * (canvas.width - 3*margin) / y.length
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
