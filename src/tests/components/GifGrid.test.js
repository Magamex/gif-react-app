import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    test('Verificar que se genero correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const category= 'One Punch';
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            }
        ]
        const category= 'One Punch';
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});