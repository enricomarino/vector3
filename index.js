
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

 }(this));