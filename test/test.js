const request = require('supertest');
const fs = require('fs');


describe('get campus', () => {
    it('should return first campus', async() => {
        await request('https://campus-api-example.netlify.app')
            .get('/.netlify/functions/api/campus')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect((res) => {

                fs.writeFile("output.json", JSON.stringify(res.body[0]), 'utf8', function(err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }

                    console.log("JSON file has been saved.");
                });
                console.log(res.body[0])
            })
    });
});