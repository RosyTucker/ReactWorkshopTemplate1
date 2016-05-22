import { React, expect, Enzyme } from '../../TestHelpers';
import Banner from '../../../src/js/home/Banner';
import Strings from '../../../src/js/common/Strings';

describe('Banner.jsx', () => {
    const title = 'A title';
    const subtitle = 'A subtitle';

    let banner;
    let imgSrc;

    beforeEach(() => {
        imgSrc = { someImgSrc: 'some value' };
        banner = Enzyme.shallow(<Banner imgSrc={imgSrc} title={title} subtitle={subtitle} />);
    });

    it('should be a container', () => {
        expect(banner.type()).to.equal('div');
        expect(banner.hasClass('banner-container'));
    });

    it('should contain an img with alt and src', () => {
        const img = banner.find('img').first();

        expect(img.props().src).to.equal(imgSrc);
        expect(img.props().alt).to.equal(Strings.home.bannerAlt);
    });

    it('should contain a banner message', () => {
        const bannerMessage = banner.find('.banner-message').first();

        expect(bannerMessage.type()).to.equal('div');

        const headings = bannerMessage.find('h1');
        expect(headings).to.have.length(1);

        const heading = headings.first();
        expect(heading).to.not.equal(undefined);
        expect(heading.text()).to.equal(title);

        const subHeadings = bannerMessage.find('h2');
        expect(subHeadings).to.have.length(1);
        const subHeading = subHeadings.first();
        expect(subHeading.text()).to.equal(subtitle);
    });
});
