const fetch = require("node-fetch");
const swapi = require("./script2");
it("call swapi to get people", () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(61);
  });
});

it("call swapi to get people promise", () => {
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(61);
  });
});

it("getPeople returns counts and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve({
        count: 61,
        results: [0, 1, 2, 3, 4, 5]
      })
    })
  );
  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/planets/');
    expect(data.count).toBe(61);
    expect(data.results.length).toBeGreaterThan(5);
  })
});
