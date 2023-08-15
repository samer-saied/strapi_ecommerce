'use strict';

/**
 * transactions-part service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transactions-part.transactions-part');
