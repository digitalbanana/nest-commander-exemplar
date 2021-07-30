import { LoggerService } from '@nestjs/common';

export class LogService implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
      console.log(`LOG:${JSON.stringify(message)}`)
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    console.log(`ERROR:${JSON.stringify(message)}`)
}

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    console.log(`WARN:${JSON.stringify(message)}`)
}

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    console.log(`DEBUG:${JSON.stringify(message)}`)
}

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    console.log(`VERBOSE:${JSON.stringify(message)}`)
}
}