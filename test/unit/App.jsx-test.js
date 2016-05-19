import {React, ReactDOM, expect, Enzyme, sinon} from '../TestHelpers';
import App from '../../src/App.jsx';

describe('App.jsx', () => {
    it('should say hello world',() => {
        const app = Enzyme.shallow(<App />);
        expect(app.contains(<div>Hello World</div>)).to.be.true;
    });
});