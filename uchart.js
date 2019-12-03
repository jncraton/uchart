uchart = (ctx, y, line, margin=36) => {
  let canvas = ctx.canvas
  let height = canvas.height
  let width = canvas.width
  let min = Math.min(...y)
  let max = Math.max(...y)

  let draw_line = (x1,y1,x2) => {
    if (x2) ctx.moveTo(x2, y1)
    if (x1) ctx.lineTo(x1, y1)  
  }

  ctx.beginPath()
  ;[
    [margin,max], 
    [height/2,(max+min)/2], 
    [height - margin, min]
  ].forEach(([y,label]) => {
    ctx.fillText(label, margin, y - 3)
    draw_line(margin, y, width-margin)
  })

  y.reduce((prev, yi, i) => {
    let x = margin*2 +  i * (width - 3*margin) / y.length
    let y_pos = margin + (yi - min) * (height - 2*margin) / (max-min)
    y_pos = height - y_pos

    if (line) {
      draw_line(prev ? x : 0, y_pos, prev ? 0 : x+3 )
    }

    ctx.fillRect(x,y_pos-3,6,6)

    return x
  },0)
  ctx.stroke()
}
