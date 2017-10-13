import http from './fetch';

describe.only("fetch util", () => {  
  afterEach(() => {
    sinon.restore();
  });

  it("Should make a GET request to send back some data", () => {

    sinon.stub(global, 'fetch')
      .withArgs('https://secure-url.fake.com')
      .returns(
        Promise.resolve({
          json: () => Promise.resolve({
            users: [
              {
                id: 1,
                first_name: "George",
                last_name: "Bluth",
                avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              },
              {
                id: 2,
                first_name: "Janet",
                last_name: "Weaver",
                avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
              }
            ]
          })
        })
      );

    http.get('https://secure-url.fake.com', data => {
      expect(data.users[0]).to.eql({
        id: 1,
        first_name: "George",
        last_name: "Bluth",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      });
    })
  });

  it('should make POST call to post any data to api', () => {
    sinon.stub(global, 'fetch')
      .withArgs('https://secure-url.fake.com', {method: 'POST'})
      .returns(
        Promise.resolve({
          json: () => Promise.resolve({
            data: {
              "id": "899",
              "createdAt": new Date(Date.now())
            } 
          })
        })
      );
    
    let tenSecondsFromRequest = new Date(Date.now() + 10000);

    http.post('https://secure-url.fake.com', {firstname: 'abc', lastname: 'def'}, data => {
      let createdDate = data.data.createdAt;
      expect(createdDate).to.be.below(tenSecondsFromRequest);

      expect(data.id).to.not.be.null;
      expect(data.createdAt).to.not.be.null;
      expect(data.somethingElse).to.be.undefined;
    });
  });
});