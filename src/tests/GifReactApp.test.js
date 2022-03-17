import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifReactApp } from '../GifReactApp';

describe('Test en GifReactApp', () => {
    test('Debe generarse correctamente', () => {
        const wrapper = shallow(<GifReactApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categorias = ['One Punch','Batman']
        
        const wrapper = shallow(<GifReactApp defaultCategories={categorias}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    });
});