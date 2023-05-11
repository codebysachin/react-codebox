import { shallow } from 'enzyme';
import Foo from './Foo';

describe('Foo', () => {
    it('renders three <Bar /> components', () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.find('Bar')).toHaveLength(3);
      });
});