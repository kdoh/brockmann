export default class Brockmann {
  constructor(gridInit = {}) {

      // set properties from initial settings or defaults
      this.containerWidth = gridInit.containerWidth || 1024
      this.numColumns = gridInit.numColumns || 12
      this.gridMargin = gridInit.gridMargin || 100
      this.columnGutter = gridInit.columnGutter || 8
      this.rowGutter = gridInit.rowGutter || 8
      this.rowHeight = gridInit.rowHeight || 40

      // set up some calculated properties

      // account for the left and right margins
      this.marginTotal = this.gridMargin * 2

      // each grid column will have a gutter to the right except for the last column
      this.totalGutterSize = this.columnGutter * (this.numColumns - 1)

      // subtract that margins and gutter size from the container width and divide by the number of columns to get the
      this.columnWidth =  (this.containerWidth - this.totalGutterSize - this.marginTotal) / this.numColumns

      return this
  }


  // helps determine what column an object is in given its pixel size
  // colsFromPX(px) {}

  // rowsFromPX(px) {}

  pxFromCols(cols) {
    const { columnWidth, columnGutter } = this
    return (columnWidth * cols) + (columnGutter * (cols -1))
  }

  pxFromRows(rows) {
    const { rowHeight, rowGutter } = this
    return (rowHeight * rows) + (rowGutter * (rows -1))
  }
}
