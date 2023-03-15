type PointType = {
  x: number
  y: number
  z?: number // 可选参数
}

function printCoordinate(point: PointType) {
  console.log('x坐标：', point.x)
  console.log('y坐标：', point.y)
}

printCoordinate({x: 44, y: 66})

export {}
