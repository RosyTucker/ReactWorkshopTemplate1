import { React, expect, Sandbox, ComponentHelpers, Enzyme } from '../../TestHelpers';
import { Home } from '../../../src/js/home/Home';
import Banner from '../../../src/js/home/Banner';
import Strings from '../../../src/js/common/Strings';
import bannerImg from '../../../src/images/homeBanner.jpg';

describe('Home.jsx', () => {
    let home;
    const sandbox = new Sandbox();

    beforeEach(() => {
        ComponentHelpers.stub(sandbox, Banner);
        sandbox.stub(bannerImg);

        home = Enzyme.shallow(<Home />);
    });

    it('should contain a login div', () => {
        expect(home.hasClass('home')).to.equal(true);
    });

    it('should contain a banner', () => {
        const banners = home.find(Banner);

        expect(banners).to.have.length(1);

        const banner = banners.first();

        expect(banner.props().imgSrc).to.equal(bannerImg);
        expect(banner.props().title).to.equal(Strings.home.bannerTitle);
        expect(banner.props().subtitle).to.equal(Strings.home.bannerSubtitle);
    });
});
