import expect from 'expect'
import Brockmann from '../src'

describe('an unsmiling swiss gentelman', () => {
  it('will lay out a grid for you if you give him well thought out starting values', () => {
      const grid = new Brockmann({
        containerWidth: 1440,
        numColumns: 12,
        gridMargin: 100,
        columnGutter: 8,
        rowGutter: 8,
        rowHeight: 42,
      })
      expect(grid).toBeA(Brockmann)
      expect(grid.containerWidth).toEqual(1440)
      expect(grid.numColumns).toEqual(12)
      expect(grid.gridMargin).toEqual(100)
      expect(grid.columnGutter).toEqual(8)
      expect(grid.rowGutter).toEqual(8)
      expect(grid.rowHeight).toEqual(42)
  })

  it('has some thoughts about what the defaults should be if you decide to leave off essential context', () => {
    const grid = new Brockmann()
    expect(grid.containerWidth).toEqual(1024)
    expect(grid.numColumns).toEqual(12)
    expect(grid.gridMargin).toEqual(100)
    expect(grid.columnGutter).toEqual(8)
    expect(grid.rowGutter).toEqual(8)
    expect(grid.rowHeight).toEqual(40)
  })

  it('will combine your preferences with defaults if you only supply a few values', () => {
    const grid = new Brockmann({ rowHeight: 42 })

    expect(grid.containerWidth).toEqual(1024)
    expect(grid.rowHeight).toEqual(42)
  })

  it('will properly calculate column width cause he knows math', () => {
    const grid = new Brockmann()
    expect(grid.marginTotal).toExist()
    expect(grid.totalGutterSize).toExist()
    expect(grid.columnWidth).toExist().toEqual(61.333333333333336)
  })

  describe('and his undying love of calculatiing of pixel values from row / cols', () => {
    it('results in the precise calculation of a pixel value when given columns', () => {
      const grid = new Brockmann()
      const size = { cols: 4 }

      const calc = (grid.columnWidth * size.cols) + (grid.columnGutter * (size.cols -1))
      expect(grid.pxFromCols(size.cols))
            .toBeA('number')
            .toEqual(calc)
    })

    it('results in the precise calculation of a pixel value when given a row count', () => {
      const grid = new Brockmann()
      const size = { rows: 8 }
      const calc = (grid.rowHeight * size.rows) + (grid.rowGutter * (size.rows -1))
      expect(grid.pxFromRows(size.rows))
            .toBeA('number')
            .toEqual(calc)
    })
  })

})
