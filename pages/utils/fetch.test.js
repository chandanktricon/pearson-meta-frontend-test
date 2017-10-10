import http from './fetch';

describe("fetch util", () => {
  it("Should make a get request to send back some data", () => {
    http.get("https://reqres.in/api/users?page=2", data => {
      expect(data).eql([
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
        },
        {
          id: 3,
          first_name: "Emma",
          last_name: "Wong",
          avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }
      ]);
    })
  });
});