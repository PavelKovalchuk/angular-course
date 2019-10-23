import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.log("LoggingService message: ", message);
    console.log("LoggingService this.lastlog: ", this.lastlog);
    this.lastlog = message;
  }
}
