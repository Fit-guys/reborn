import React from 'react';
import { shallow, mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';

const createRenderer = (renderFunc, Component, defaultProps = {}) =>
  (props = {}, state = null) => {
    const setupProps = { ...defaultProps, ...props };
    const wrapper = renderFunc(<Component {...setupProps} />);

    if (state) {
      wrapper.setState(state);
    }

    return wrapper;
  };

export const shallowCreator = (Component, defaultProps) =>
  createRenderer(shallow, Component, defaultProps);

export const mountCreator = (Component, defaultProps) =>
  createRenderer(mount, Component, defaultProps);

export const checkProps = (Component, conformingProps) => {
  const propError = checkPropTypes(
    Component.propTypes,
    conformingProps,
    'prop',
    Component.name,
  );

  expect(propError).toBeUndefined();
};

export const findByTestAttr = (wrapper, selector) =>
  wrapper.find({ 'data-test': selector });

export const deepClone = obj => JSON.parse(JSON.stringify(obj));
