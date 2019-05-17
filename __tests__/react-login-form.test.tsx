import * as React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../src/LoginForm';

const props = {
    onSubmit: jest.fn,
    directoryName: 'test',
};

describe('Login form component behaviour', () => {
    test('Component renders without crashing', () => {
        const wrapper = shallow(<LoginForm {...props} />);
        expect(wrapper.length).toEqual(1);
    });
});
