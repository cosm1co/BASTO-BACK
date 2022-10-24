import { expect } from 'chai';
import request  from 'supertest';
import app from '../src/app.js';

describe('Route: GET /bovine/allbovines', function () {
    it('GET should return complete info, an Array:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        expect(response.body).to.be.an('array')
    });
    it('GET should position [0] Array potrero names:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        expect(response.body[0].names).to.be.an('array')
    });  
    it('GET correct bovine Schema:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        response.body.slice(1, response.body.length).map((bovine) => {
            expect(bovine).to.have.property('SENASA_ID');
            expect(bovine).to.have.property('type');
            expect(bovine).to.have.property('potrero');
            expect(bovine).to.have.property('weight');
            expect(bovine).to.have.property('device');
            expect(bovine).to.have.property('n_device');
        })
    });   
});

describe('Route Query: GET /bovine/allbovines?SENASA_ID=....', function () {

    it('GET Query should return complete info, an Array:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
                .query({
                    SENASA_ID: 'AGUADA098765443'
                 })
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        expect(response.body).to.be.an('array')
    });
    it('GET Query should position [0] Array files names:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
                .query({
                    SENASA_ID: 'AGUADA098765443'
                 })
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        expect(response.body[0].names).to.be.an('array')
    });  
    it('GET Query correct bovine Schema:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
                .query({
                    SENASA_ID: 'AGUADA098765443'
                 })
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        response.body.slice(1, response.body.length).map((bovine) => {
            expect(bovine).to.have.property('SENASA_ID');
            expect(bovine).to.have.property('potrero');
            expect(bovine).to.have.property('type');
            expect(bovine).to.have.property('weight');
            expect(bovine).to.have.property('device');
            expect(bovine).to.have.property('n_device');
        })
    });   
    it('GET Query correct filter by query:', async function () {
        const response = await request(app)
                .get('/bovine/allbovines')
                .query({
                    SENASA_ID: 'AGUADA098765443'
                 })
        expect('Content-Type', /json/)
        expect(response.status).to.eql(200)
        response.body.slice(1, response.body.length).map((bovine) => {
            expect(bovine).to.have.property('SENASA_ID');
            expect(bovine.SENASA_ID).to.be.eql('AGUADA098765443');
        })
    });   
});
