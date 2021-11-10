
var create      = require('../utils/create'),
    Artwork     = require('./artwork');

module.exports = Info;

/**
 * Render podcast top-level information
 *
 * @access public
 * @param {object} data
 * @return {object} Info instance
 */
function Info(data) {
    this.node = create('div', {
        className:      'pb-embed--info'
    });
    this.components = {};


    return this;
}
