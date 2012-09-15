
/* !
 * vector3
 * JavaScript math library for 3d vector
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var vector3 = exports.vector3 = {};

  /**
   * Library version.
   */

  vector3.version = '0.0.0';

  /**
   * create
   * Create a 3d vector.
   * 
   * @return {Float32Array} 3d vector
   * @api public
   */

  vector3.create = function () {
    return new Float32Array([0.0, 0.0, 0.0]);
  };

  /**
   * set
   * Set vector.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} v source vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.set = function (self, v) {
    self[0] = v[0];
    self[1] = v[1];
    self[2] = v[2];

    return self;
  };

  /**
   * zero
   * Set vector to zero.
   * 
   * @param {Float32Array} self destination vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.zero = function (self) {
    self[0] = 0.0;
    self[1] = 0.0;
    self[2] = 0.0;

    return self;
  };

  /**
   * sum
   * Set vector to the sum of `a` and `b`.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} a vector
   * @param {Float32Array} b vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.sum = function (self, a, b) {
    self[0] = a[0] + b[0];
    self[1] = a[1] + b[1];
    self[2] = a[2] + b[2];

    return self;
  };

  /**
   * diff
   * Set vector to the difference of `a` and `b`.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} a vector
   * @param {Float32Array} b vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.diff = function (self, a, b) {
    self[0] = a[0] - b[0];
    self[1] = a[1] - b[1];
    self[2] = a[2] - b[2];

    return self;
  };

  /**
   * add
   * Add vector.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} v vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.add = function (self, v) {
    self[0] += v[0];
    self[1] += v[1];
    self[2] += v[2];

    return self;
  };

  /**
   * sub
   * Sub vector.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} v vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.sub = function (self, v) {
    self[0] -= v[0];
    self[1] -= v[1];
    self[2] -= v[2];

    return self;
  };

  /**
   * opposite
   * Set vector to the opposite of `v`.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} v vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.opposite = function (self, v) {
    self[0] = -v[0];
    self[1] = -v[1];
    self[2] = -v[2];

    return self;
  };

 }(this));