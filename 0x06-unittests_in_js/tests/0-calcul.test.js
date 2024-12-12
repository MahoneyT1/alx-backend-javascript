import calculateNumber from '../0-calcul.js';
import assert from 'assert';

// test cases for the function add
describe('add function', ()=> {
    it('adds two numbers', ()=> {
        const result = calculateNumber(1, 3);
        assert.equal(result, 4)
    });

    it('adds a number and a float', ()=> {
        const result = calculateNumber(1, 3.7);
        assert.equal(result, 5);
    });

    it('adds a float and a float', ()=> {
        const result = calculateNumber(1.2, 3.7);
        assert.equal(result, 5);
    });

    it('adds a number and a float', ()=> {
        const result = calculateNumber(1.5, 3.7);
        assert.equal(result, 6);
    });
});
