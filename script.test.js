const googleSearch = require('./script')
dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disnay.com',
  'dogpicture.com'
];

describe('googleSearch', () => {
  it('is a silly test', () => {
    expect('hello').toBe('hello');
  })

  it('is searching google', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture.com'])
  })

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })
})
