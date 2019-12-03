function uchart(ctx, y, line=false, margin=36) {
  let height = ctx.canvas.height
  let width = ctx.canvas.width
  let min = Math.min(...y)
  let max = Math.max(...y)

  ;[
    [margin,max], 
    [height/2,(max+min)/2], 
    [height - margin, min]
  ].forEach(([y,label]) => {
    ctx.fillText(label, margin, y - 3)
    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(width - margin, y)
    ctx.stroke()
  })

  ctx.beginPath()
  y.forEach((yi, i) => {
    let x = margin*2 + i * (width - 3*margin) / y.length
    let y_pos = (margin + (yi - min) * (height - 2*margin) / (max-min))
    y_pos = height - y_pos

    if (line) {
      if (i == 0) ctx.moveTo(x,y_pos)
      else ctx.lineTo(x+3,y_pos)
    }

    ctx.fillRect(x,y_pos-3,6,6)
  })
  ctx.stroke()
}
