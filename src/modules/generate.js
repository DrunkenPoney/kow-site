
let lastId = 0

/**
 * Generates a unique numeric identifier (not universal)
 *
 * @returns {number}
 * @see uniqueId#alpha
 * @see uniqueId#alphanum
 */
function uniqueId() { return ++lastId }

/**
 * Generates a unique alphabetic identifier (not universal)
 *
 * @returns {string}
 * @see uniqueId
 */
uniqueId.alpha = () => uniqueId().toString(26)
  .replace(/\d/g, (c) => String.fromCharCode(c.charCodeAt(0) + 65))

/**
 * Generates a unique alpha-numeric identifier (not universal)
 *
 * @returns {string}
 * @see uniqueId
 */
uniqueId.alphanum = () => uniqueId().toString(36)

export {
  uniqueId
}