import test from 'tape';
import responsiveState from '../../src/responsivestate';

test('public API matches expectaction', t => {
  const rs = responsiveState();
  t.equal(typeof rs.add, 'function', 'add is a method');
  t.equal(typeof rs.remove, 'function', 'remove is a method');
  t.equal(typeof rs.removeAll, 'function', 'removeAll is a method');
  t.equal(typeof rs.getState, 'function', 'getState is a method');
  t.equal(typeof rs.getStates, 'function', 'getStates is a method');
  t.end();
});
