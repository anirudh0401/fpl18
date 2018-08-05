// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    username: string = '';
    isAuthenticated: boolean = false;
}