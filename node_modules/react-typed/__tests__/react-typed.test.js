import 'raf/polyfill';
import React from 'react';
import Typed from '../src';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const {mount} = Enzyme;

class HelperComponent extends React.Component {
    render() {
        return (
            <Typed strings={['test1', 'test2']}/>
        )
    }
}

const restoreSpies = (...args) => {
    args.forEach(spy => {
        spy.mockReset();
        spy.mockRestore();
    })
};
describe('<Typed />',
    () => {
        it('Renders correct',
            () => {
                const component = mount(<Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />);
                expect(component).toHaveLength(1);
            }
        );
        it('Renders correct with children',
            () => {
                const component = mount(<Typed
                    strings={[
                        'Search for products',
                        'Search for categories',
                        'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop>
                    <input type="text"/>
                </Typed>);
                expect(component).toHaveLength(1);
            }
        );
        it('Expect to update if props were change',
            () => {
                const spyShouldComponentUpdate = jest.spyOn(Typed.prototype, 'shouldComponentUpdate');
                const spyRender = jest.spyOn(Typed.prototype, 'render');
                const spyTypedConstruct = jest.spyOn(Typed.prototype, 'constructTyped');


                const props = {
                    loop: true,
                    strings: ['test1', 'test2'],
                    fadeOut: false,
                };
                const component = mount(<Typed {...props}/>);
                expect(spyRender).toHaveBeenCalledTimes(1);
                expect(spyTypedConstruct).toHaveBeenCalledTimes(1);
                expect(component).toHaveLength(1);
                component.setProps({strings: ['test1', 'test3']});
                expect(spyShouldComponentUpdate).toHaveBeenCalled();
                expect(spyRender).toHaveBeenCalledTimes(2);
                expect(spyTypedConstruct).toHaveBeenCalledTimes(1);
                expect(component.prop('strings')).toMatchObject(['test1', 'test3']);
                restoreSpies(spyShouldComponentUpdate, spyRender, spyTypedConstruct);
            }
        );
        it('Expect to reConstruct if strings length change',
            () => {
                const spyShouldComponentUpdate = jest.spyOn(Typed.prototype, 'shouldComponentUpdate');
                const spyRender = jest.spyOn(Typed.prototype, 'render');
                const spyTypedConstruct = jest.spyOn(Typed.prototype, 'constructTyped');
                const props = {
                    loop: true,
                    strings: ['test1', 'test2'],
                    fadeOut: false,
                };
                const component = mount(<Typed {...props}/>);
                expect(spyRender).toHaveBeenCalledTimes(1);
                expect(spyTypedConstruct).toHaveBeenCalledTimes(1);
                expect(component).toHaveLength(1);
                component.setProps({strings: ['test1', 'test2', 'test3']});
                expect(spyShouldComponentUpdate).toHaveBeenCalled();
                expect(spyTypedConstruct).toHaveBeenCalledTimes(2);
                expect(spyRender).toHaveBeenCalledTimes(2);
                restoreSpies(spyShouldComponentUpdate, spyRender, spyTypedConstruct);
            }
        );
        it('Expect to reConstruct if false value change',
            () => {
                const spyShouldComponentUpdate = jest.spyOn(Typed.prototype, 'shouldComponentUpdate');
                const spyRender = jest.spyOn(Typed.prototype, 'render');
                const spyTypedConstruct = jest.spyOn(Typed.prototype, 'constructTyped');
                const props = {
                    loop: true,
                    stopped: true,
                    strings: ['test1', 'test2'],
                    fadeOut: false,
                };
                const component = mount(<Typed {...props}/>);
                expect(spyRender).toHaveBeenCalledTimes(1);
                expect(spyTypedConstruct).toHaveBeenCalledTimes(1);
                expect(component).toHaveLength(1);
                component.setProps({fadeOut: true});
                expect(spyShouldComponentUpdate).toHaveBeenCalled();
                expect(spyTypedConstruct).toHaveBeenCalledTimes(2);
                expect(spyRender).toHaveBeenCalledTimes(2);
                restoreSpies(spyShouldComponentUpdate, spyRender, spyTypedConstruct);
            }
        );
        it('Expect to return the typed object using typedRef prop',
            () => {
                const props = {
                    loop: true,
                    stopped: true,
                    strings: ['test1', 'test2'],
                    fadeOut: false,
                };
                let typedInstance;
                mount(<Typed {...props} typedRef={(typed) => {
                    typedInstance = typed;
                }}/>);
                expect(typedInstance).not.toBeFalsy();
            }
        );
        it('Expect to reConstruct using typed instance',
            () => {
                const spyTypedConstruct = jest.spyOn(Typed.prototype, 'constructTyped');
                const props = {
                    strings: ['test1', 'test2'],
                };

                let typedInstance;
                mount(<Typed {...props} typedRef={(typed) => {
                    typedInstance = typed;
                }}/>);
                expect(typedInstance).not.toBeFalsy();
                expect(spyTypedConstruct).toHaveBeenCalledTimes(1);
                typedInstance.reConstruct();
                expect(spyTypedConstruct).toHaveBeenCalledTimes(2);

                restoreSpies(spyTypedConstruct);
            }
        );
    }
);