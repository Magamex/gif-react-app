import React from 'react';

import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'titulo';
    const url = 'https://media1.giphy.com/media/l2JhxQy0xZxZyQ7XS/200w.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el title', () => {
        expect(wrapper.find('p').text().trim()).toBe(title)
    });

    test('Debe obtener la imagen y el alt', () => {
        const propiedades = wrapper.find('img').props();

        expect(propiedades.src).toBe(url);
        expect(propiedades.alt).toBe(title);
    });

    test('Debe tener animated__fadeIn', () => {
        const classname = wrapper.find('div').prop('className');
        expect(classname.includes('animate__fadeIn')).toBe(true);

    });
});
