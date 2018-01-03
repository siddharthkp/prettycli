const log = require('.');

console.log('');

log.loading('TEST', 'Running unit tests...');

log.info('READY', `Server running on ${log.link('http://localhost:3000')}`);

log.warn('This feature will be deprecated soon.');

log.error('Could not find express. Make sure you have installed it', {
    exit: false
});
