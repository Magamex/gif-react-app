import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        const value = 'Hola Mundo';
        input.simulate('change',{target: { value }});

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        //Simular inputChange
        wrapper.find('input').simulate('change',{target: { value: value}});

        //Simular submit
        wrapper.find('form').simulate('submit',{ preventDefault(){}});

        //setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();

        //Verifica cuantas veces se llamo setCategories
        expect(setCategories).toHaveBeenCalledTimes(1);

        //Verificar que sea una funcion
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //Valor del input debe tener valor ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});