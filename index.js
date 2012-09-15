
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

 }(this));