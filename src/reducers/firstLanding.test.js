import firstLanding from './firstLanding'

describe("Reducer unit test", ()=>{
  it("should return null when initial state and action is undefined", () => {
    expect(firstLanding({}, {})).toEqual({})
  })
})