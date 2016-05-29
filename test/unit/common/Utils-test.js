import { expect } from '../../TestHelpers';
import Utils from '../../../src/js/common/Utils';

describe('Utils.js', () => {
    describe('formattedDate', () => {
        it('should return a formatted date', () => {
            const date = 'Sat June 13 2016 18:30:00 GMT+0100 (BST)';

            expect(Utils.formattedDate(date)).to.equal('13th Jun 16');
        });
    });

    describe('formattedTime', () => {
        it('should return a formatted date', () => {
            const date = 'Sat June 13 2016 18:30:00 GMT+0100 (BST)';

            expect(Utils.formattedTime(date)).to.equal('18:30 pm');
        });
    });
});
