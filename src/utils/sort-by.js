/**
 * @function sortBy
 *
 * Сортирует массив объектов по указанному столбцу.
 * Эта функция предназначена для использования в качестве метода массива.
 * Она сортирует массив на месте и возвращает отсортированный массив.
 * Использует метод массива `sort`
 *
 * @param {Object} model - объект, содержащий информацию о столбцах элементов и сортировке
 * @param {string} sortCol - название столбца, по которому нужно отсортировать массив
 *
 * @returns {Array} Sorted array based on the specified column
 */
export function sortBy(model, sortCol) {
  if (!sortCol || !this.length) return this

  const sortEl = el => {
    const sortFieldCallback = model[sortCol].sort

    if (sortFieldCallback && typeof sortFieldCallback === 'function') {
      return sortFieldCallback(el)
    }
    return el[sortCol]
  }

  return this.sort((a, b) => {
    const sortA = sortEl(a)
    const sortB = sortEl(b)
    if (sortA < sortB) return -1
    if (sortA > sortB) return 1
    return 0
  })
}
