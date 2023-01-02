import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, UrlSegmentGroup } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { UrlMatchResult, UrlSegment } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomResolver implements Resolve<any> {
    constructor() {
        console.log('CustomResolver constructor');
    }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('here', route);
    return of(route.params);
  }
}




export function matcherWithParam(allowedParams: Array<string>): (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult {
    return function (segments, group, route): UrlMatchResult {
        debugger;
        const numberOfSegments = segments.length;
        // console.log(`#${numberOfSegments} Segments:`, [...segments]);
        // console.log('Group:', group.toString());
        if (numberOfSegments === 0) {
            return <UrlMatchResult>(null as any);
        }

        if (numberOfSegments === 1 && segments[0].path !== allowedParams[0]) {
            return <UrlMatchResult>(null as any);
        }

        if (numberOfSegments === 1) {
            return {
                consumed: segments,
                posParams: { }
            };       
        }

        if (numberOfSegments >= 1 && segments[0].path === allowedParams[0]) {
            const pairsNo = Math.floor(numberOfSegments / 2);
            const even = numberOfSegments % 2 === 0;
            // write an algorithm that pairs each segment with the next one 
            // and checks if the first one is in the allowedParams array
            const posParams = {} as Record<string, UrlSegment>;

            for (let i = 0; i < pairsNo; i++) {
                const index = allowedParams.indexOf(segments[2 * i].path);
                if (index === -1) {
                    return <UrlMatchResult>(null as any);
                }

                // we got here, we should save the pair to posParams
                posParams[allowedParams[index]] = segments[2 * i + 1];

                // we got here, means we have a valid pair, return it with consumed and posParams
                if (i === pairsNo - 1) {
                    return {
                        consumed: segments,
                        posParams
                    };
                }

            }
        }

        return <UrlMatchResult>(null as any);
    }
}