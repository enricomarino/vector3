/**!
 * vector3
 * Vector 3Dcomponent
 *
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Library namespace.
 */

var vector3 = exports;

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

/**
 * neg
 * Negate vector.
 * 
 * @param {Float32Array} self destination vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector3.neg = function (self) {
  self[0] = -self[0];
  self[1] = -self[1];
  self[2] = -self[2];

  return self;
};

/**
 * scale
 * Scale vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Number} k scaling value
 * @return {Float32Array} destination vector
 * @api public
 */

vector3.scale = function (self, k) {
  self[0] *= k;
  self[1] *= k;
  self[2] *= k;

  return self;
};

/**
 * length
 * Get vector length.
 * 
 * @param {Float32Array} self vector
 * @return {Number} vector length
 * @api public
 */

vector3.length = function (self) {
  var x = self[0];
  var y = self[1];
  var z = self[2];

  return sqrt(x*x + y*y + z*z);
};

/**
 * length_squared
 * Get vector length squared.
 * 
 * @param {Float32Array} self vector
 * @return {Number} vector length
 * @api public
 */

vector3.length_squared = function (self) {
  var x = self[0];
  var y = self[1];
  var z = self[2];

  return (x*x + y*y + z*z);
};

/**
 * normalize
 * Get vector length squared.
 * 
 * @param {Float32Array} self vector
 * @return {Float32Array} normalized vector
 * @api public
 */

vector3.normalize = function (self) {
  var x = self[0];
  var y = self[1];
  var z = self[2];
  var w = 1.0 / sqrt(x*x + y*y + z*z);

  self[0] *= w;
  self[1] *= w;
  self[2] *= w;

  return self;
};

/**
 * dot
 * Calculate the dot product of two vectors.
 * 
 * @param {Float32Array} self vector
 * @param {Float32Array} v vector
 * @return {Number} dot product
 * @api public
 */

vector3.dot = function (self, v) {
  return self[0] * v[0] + self[1] * v[1] + self[2] * v[2];
};

/**
 * cross
 * Calculate the cross product of two vectors.
 * 
 * @param {Float32Array} self vector
 * @param {Float32Array} a vector
 * @param {Float32Array} b vector
 * @return {Number} cross product
 * @api public
 */

vector3.cross = function (self, a, b) {
  self[0] = a[1] * b[2] - a[2] * b[1];
  self[1] = a[2] * b[0] - a[0] * b[2];
  self[2] = a[0] * b[1] - a[1] * b[0];

  return self;
};
