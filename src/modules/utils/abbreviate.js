import { round } from '@/modules/utils/math'

export class AbbreviatedValue {
  #raw
  #exp
  abbr
  
  constructor(raw, exp, abbr) {
    this.raw  = raw
    this.exp  = exp
    this.abbr = abbr
  }
  
  get raw() { return this.#raw }
  set raw(value) {
    if (typeof value !== 'number')
      throw new TypeError('"value" must be a number')
    this.#raw = value
  }
  
  get exp() { return this.#exp }
  set exp(exp) {
    if (typeof exp !== 'number')
      throw new TypeError('"exp" must be a number')
    this.#exp = exp
  }
  
  get value() { return this.raw / (10 ** this.exp) }
  
  toString(decimals = 1) { return `${round(this.value, decimals)}${this.abbr}` }
  
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.raw : this.toString()
  }
}

export function abbreviate(val, abbrs) {
  abbrs ||= abbreviate.defaultAbbrevations
  if (typeof val !== 'number')
    throw new TypeError('ERROR: only numbers can be abbreviated!')
  if (abbrs instanceof Map) {
    abbrs = Array.from(abbrs);
  } else if (!Array.isArray(abbrs)) {
    abbrs = Object.entries(abbrs);
  }
  let copy = []
  for (let abbr of abbrs) {
    if (Array.isArray(abbr))
      copy.push([ parseInt(abbr[0]), abbr[1] ])
  }
  copy.sort((a, b) => b[0] - a[0]) // descending order
  
  for (let entry of copy)
    if (val / (10 ** entry[0]) > 1)
      return new AbbreviatedValue(val, entry[0], entry[1])
  // If no match found
  return new AbbreviatedValue(val, 0, '')
}

abbreviate.defaultAbbrevations = {
  3: "K",
  6: "M",
  9: "B",
  12: "t",
  15: "q",
  18: "Q",
  21: "s",
  24: "S",
  27: "o",
  30: "n",
  33: "d",
  36: "U",
  39: "D",
  42: "T",
  45: "Qt",
  48: "Qd",
  51: "Sd",
  54: "St",
  57: "O",
  60: "N",
  63: "v",
  66: "c"
}