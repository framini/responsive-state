import { defaults } from 'lodash';

function add() {}

function remove() {}

function removeAll() {}

function getState() {}

function getStates() {}

export default function responsiveState(cfg) {
  // this one will be private to the module
  const internalCache = new Map();
  const config = defaults(cfg, {
    internalCache,
  });

  return {
    add,
    remove,
    removeAll,
    getState,
    getStates,
  };
}
