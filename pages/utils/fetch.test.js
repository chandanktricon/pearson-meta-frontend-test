import http from './fetch';

describe("fetch util", () => {
  it("Should make a GET request to send back some data", () => {
    http.get("https://reqres.in/api/users?page=1", data => {
      expect(data.data[0]).eql(
        {
          id: 1,
          first_name: "George",
          last_name: "Bluth",
          avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        });
    })
  });

  it('should make POST call to post any data to api', () => {
    let tenSecondsFromRequest = new Date(Date.now() + 10000);

    http.post('https://reqres.in/api/users', {firstname: 'abc', lastname: 'def'}, data => {
      let createdDate = new Date(data.createdAt);
      expect(createdDate).to.be.below(tenSecondsFromRequest);

      expect(data.id).to.not.be.null;
      expect(data.createdAt).to.not.be.null;
      expect(data.somethingElse).to.be.undefined;
    });
  });
});