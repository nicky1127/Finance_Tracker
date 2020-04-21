import log from 'loglevel';

const level = window.localStorage ? window.localStorage.getItem('LOGLEVEL') : 5;

switch (level) { 
  case '0':
    log.setLevel('trace');
    console.log('set trace',)
    break;
  case '1':
    log.setLevel('debug');
    break;
  case '2':
    log.setLevel('info');
    break;
  case '3':
    log.setLevel('warn');
    break;
  case '4':
    log.setLevel('error');
    break;
  default:
    log.setLevel('silent');
    console.log('set silent',)
}

export default log;
