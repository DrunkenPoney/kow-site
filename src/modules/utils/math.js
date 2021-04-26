export function distance(p1, p2) {
  let x1 = p1.x ?? p1[0],
      x2 = p2.x ?? p2[0],
      y1 = p1.y ?? p1[1],
      y2 = p2.y ?? p2[1]
  return Math.sqrt(( x2 - x1 ) ** 2 + ( y2 - y1 ) ** 2)
}

export function constrain(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export function round(value, b = 0) {
  const e = 10 ** b
  return Math.round(value * e) / e
}

export function floor(value, b = 0) {
  const e = 10 ** b
  return Math.floor(value * e) / e
}

export function ceil(value, b = 0) {
  const e = 10 ** b
  return Math.ceil(value * e) / e
}

export function isBetween(value, min, max) {
  return min < value && value < max
}