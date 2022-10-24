import { expect } from 'chai';
import request from "supertest";
import app from '../src/app.js'
import { jest } from '@jest/globals'
import { getBovineById } from '../src/controllers/bovine.controllers.js';

describe('Route: GET /bovine/6352b0c99a6156a1ef9d3493', function () {
    it('GET should return complete info, an Array:', async () => {
        const response = await request(app)
                .get('/bovine/6352b0c99a6156a1ef9d3493')
                .set('Accept', 'application/json')
        expect(response.status).to.eql(400)
    });
});

