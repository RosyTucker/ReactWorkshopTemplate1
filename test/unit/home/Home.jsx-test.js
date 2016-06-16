import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import React, { Component, PropTypes } from 'react';
import Home from '../../../src/js/home/Home.jsx';

class Element extends Component {
    componentDidMount() {
        this.props.onMount('string');
    }

    render() {
        const { onClick } = this.props;

        return (
            <button onClick={onClick}>Click me</button>
        );
    }
}

Element.propTypes = {
    onClick: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired
};

describe('<Element />', () => {
    it('calls onClick when the button gets clicked', () => {
        const onClick = sinon.spy();

        const wrapper = shallow(<Element onClick={onClick} onMount={() => {}} />);
        wrapper.find('button').simulate('click');

        expect(onClick.calledOnce).to.equal(true);
    });

    it('calls onMount when the button gets clicked', () => {
        const onMount = sinon.spy();

        const wrapper = mount(<Element onClick={() => {}} onMount={onMount} />);
        wrapper.find('button').simulate('click');

        expect(onMount.calledOnce).to.equal(true);
    });
});
