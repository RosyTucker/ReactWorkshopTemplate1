import { React, expect, Sandbox, ComponentHelpers, Enzyme, sinon } from '../../TestHelpers';
import { Home } from '../../../src/js/home/Home';
import Banner from '../../../src/js/home/Banner';
import LoginButton from '../../../src/js/home/LoginButton';
import FeaturedContent from '../../../src/js/home/FeaturedContent';
import Strings from '../../../src/js/common/Strings';

import bannerImg from '../../../src/images/homeBanner.jpg';

describe('Home.jsx', () => {
    let home;
    let onLoginClicked;
    const sandbox = new Sandbox();

    beforeEach(() => {
        ComponentHelpers.stub(sandbox, Banner);
        sandbox.stub(bannerImg);
        onLoginClicked = sinon.spy();

        home = Enzyme.shallow(<Home onLoginClicked={onLoginClicked} />);
    });

    it('should contain a user div', () => {
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

    it('should contain featured content', () => {
        const featuredContents = home.find(FeaturedContent);

        expect(featuredContents).to.have.length(1);

        const featuredContent = featuredContents.first();

        expect(featuredContent.props().name).to.equal(
            Strings.home.featuredContent.name
        );
        expect(featuredContent.props().description).to.equal(
            Strings.home.featuredContent.description
        );
    });

    it('should contain a mission statement ', () => {
        const missionStatementContainers = home.find('.mission-statement');

        expect(missionStatementContainers).to.have.length(1);

        const missionStatementContainer = missionStatementContainers.first();

        expect(missionStatementContainer.text()).to.equal(
            Strings.home.missionStatement
        );
    });

    it('should contain a login button ', () => {
        const loginButtonContainers = home.find('.login-container');

        expect(loginButtonContainers).to.have.length(1);

        const loginButtonContainer = loginButtonContainers.first();

        expect(loginButtonContainer.find(LoginButton)).to.have.length(1);
    });

    it('should call login clicked on login clicked', () => {
        const loginButton = home.find(LoginButton);

        loginButton.first().simulate('click');

        expect(onLoginClicked.calledOnce).to.equal(true);
    });
});
