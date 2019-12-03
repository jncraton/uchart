uchart = (ctx, y, line, margin=36) => {
  let canvas = ctx.canvas
  let height = canvas.height
  let width = canvas.width
  let min = Math.min(...y)
  let max = Math.max(...y)

  ctx.beginPath()
  ;[
    [margin,max], 
    [height/2,(max+min)/2], 
    [height - margin, min]
  ].map(([y,label]) => {
    ctx.fillText(label, margin, y - 3)
    ctx.moveTo(margin, y)
    ctx.lineTo(width - margin, y)
  })

  y.map((yi, i) => {
    let x = margin*2 + i * (width - 3*margin) / y.length
    let y_pos = margin + (yi - min) * (height - 2*margin) / (max-min)
    y_pos = height - y_pos

    if (line) {
      if (i == 0) ctx.moveTo(x,y_pos)
      else ctx.lineTo(x+3,y_pos)
    }

    ctx.fillRect(x,y_pos-3,6,6)
  })
  ctx.stroke()
}
