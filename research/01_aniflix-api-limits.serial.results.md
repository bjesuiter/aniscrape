# Results of aniflix-api-limits.serial.ts

## RUN 1

Problems: slow fetchShow (20 sek!)
Probable reasons:

- Cold-start of API
- This show (log-horizon) was not in cache anymore

```
Task bench-aniflix-serial deno run -A --unstable ./research/aniflix-api-limits.serial.ts
fetchShowUncached function was called with show-id "log-horizon" which produces url "https://www.aniflix.cc/api/show/log-horizon"! (Should only happen after cache clear or with different url!)
fetch-show: 19709ms
fetching-episode-6781: 807ms
fetching-episode-6782: 464ms
fetching-episode-6783: 496ms
fetching-episode-6784: 582ms
fetching-episode-6785: 481ms
fetching-episode-6786: 743ms
fetching-episode-6787: 470ms
fetching-episode-6788: 491ms
fetching-episode-6789: 702ms
fetching-episode-6790: 470ms
fetching-episode-6791: 496ms
fetching-episode-6792: 846ms
fetching-episode-6793: 613ms
fetching-episode-6794: 627ms
fetching-episode-6795: 524ms
fetching-episode-6796: 524ms
fetching-episode-6797: 532ms
fetching-episode-6798: 660ms
fetching-episode-6799: 823ms
fetching-episode-6800: 820ms
fetching-episode-6801: 1114ms
fetching-episode-6802: 520ms
fetching-episode-6803: 614ms
fetching-episode-6804: 615ms
fetching-episode-6806: 513ms
fetching-episode-6807: 614ms
fetching-episode-6808: 494ms
fetching-episode-6809: 530ms
fetching-episode-6810: 525ms
fetching-episode-6811: 597ms
fetching-episode-6812: 501ms
fetching-episode-6813: 835ms
fetching-episode-6814: 514ms
fetching-episode-6815: 816ms
fetching-episode-6816: 775ms
fetching-episode-6817: 557ms
fetching-episode-6818: 499ms
fetching-episode-6819: 580ms
fetching-episode-6820: 559ms
fetching-episode-6821: 2150ms
fetching-episode-6822: 545ms
fetching-episode-6823: 585ms
fetching-episode-6824: 510ms
fetching-episode-6825: 748ms
fetching-episode-6826: 583ms
fetching-episode-6827: 508ms
fetching-episode-6828: 530ms
fetching-episode-6829: 1113ms
fetching-episode-33059: 1122ms
fetching-episode-33212: 1029ms
fetching-episode-33369: 1287ms
fetching-episode-33477: 1003ms
fetching-episode-33932: 1005ms
fetching-episode-34351: 799ms
fetching-episode-34791: 821ms
fetching-episode-34942: 817ms
fetching-episode-35015: 1023ms
fetching-episode-35518: 1028ms
fetching-episode-36331: 1009ms
fetching-episode-36949: 1068ms
fetch-complete: 62937ms
```

## RUN 2

- probably in cache and not cold-start

```
Task bench-aniflix-serial deno run -A --unstable ./research/aniflix-api-limits.serial.ts
A new release of Deno is available: 1.35.2 → 1.36.1 Run `deno upgrade` to install it.
fetchShowUncached function was called with show-id "log-horizon" which produces url "https://www.aniflix.cc/api/show/log-horizon"! (Should only happen after cache clear or with different url!)
fetch-show: 517ms
fetching-episode-6781: 106ms
fetching-episode-6782: 365ms
fetching-episode-6783: 107ms
fetching-episode-6784: 363ms
fetching-episode-6785: 104ms
fetching-episode-6786: 107ms
fetching-episode-6787: 372ms
fetching-episode-6788: 108ms
fetching-episode-6789: 377ms
fetching-episode-6790: 121ms
fetching-episode-6791: 97ms
fetching-episode-6792: 98ms
fetching-episode-6793: 97ms
fetching-episode-6794: 106ms
fetching-episode-6795: 104ms
fetching-episode-6796: 99ms
fetching-episode-6797: 1764ms
fetching-episode-6798: 108ms
fetching-episode-6799: 109ms
fetching-episode-6800: 353ms
fetching-episode-6801: 107ms
fetching-episode-6802: 102ms
fetching-episode-6803: 455ms
fetching-episode-6804: 106ms
fetching-episode-6806: 407ms
fetching-episode-6807: 103ms
fetching-episode-6808: 95ms
fetching-episode-6809: 416ms
fetching-episode-6810: 106ms
fetching-episode-6811: 107ms
fetching-episode-6812: 106ms
fetching-episode-6813: 110ms
fetching-episode-6814: 390ms
fetching-episode-6815: 108ms
fetching-episode-6816: 100ms
error: Uncaught (in promise) SyntaxError: Unexpected token '<', "<html>
<he"... is not valid JSON
  const res = await fetch(url).then((fetchResponse) => fetchResponse.json());
              ^
    at parse (<anonymous>)
    at packageData (ext:deno_fetch/22_body.js:368:14)
    at consumeBody (ext:deno_fetch/22_body.js:245:12)
    at eventLoopTick (ext:core/01_core.js:183:11)
    at async fetchEpisodeUncached (file:///Users/bjesuiter/Develop/bjesuiter/aniscrape/src/aniflix_api.ts:81:15)
    at async file:///Users/bjesuiter/Develop/bjesuiter/aniscrape/research/aniflix-api-limits.serial.ts:14:25
```

Result: Runs into an error bc. of unhandled HTML! :O

## RUN 3 - with HTTP Error detection

- coldstart issues again

```
✖ deno task bench-aniflix-serial
Task bench-aniflix-serial deno run -A --unstable ./research/aniflix-api-limits.serial.ts
fetchShowUncached function was called with show-id "log-horizon" which produces url "https://www.aniflix.cc/api/show/log-horizon"! (Should only happen after cache clear or with different url!)
fetch-show: 20293ms
fetching-episode-6781: 899ms
fetching-episode-6782: 615ms
fetching-episode-6783: 489ms
fetching-episode-6784: 535ms
fetching-episode-6785: 501ms
fetching-episode-6786: 734ms
fetching-episode-6787: 509ms
fetching-episode-6788: 507ms
fetching-episode-6789: 816ms
fetching-episode-6790: 468ms
fetching-episode-6791: 569ms
fetching-episode-6792: 806ms
fetching-episode-6793: 490ms
fetching-episode-6794: 500ms
fetching-episode-6795: 471ms
fetching-episode-6796: 475ms
fetching-episode-6797: 500ms
fetching-episode-6798: 500ms
fetching-episode-6799: 481ms
fetching-episode-6800: 777ms
fetching-episode-6801: 1033ms
fetching-episode-6802: 513ms
fetching-episode-6803: 507ms
fetching-episode-6804: 494ms
fetching-episode-6806: 451ms
fetching-episode-6807: 479ms
fetching-episode-6808: 460ms
fetching-episode-6809: 458ms
fetching-episode-6810: 470ms
fetching-episode-6811: 722ms
fetching-episode-6812: 478ms
fetching-episode-6813: 475ms
fetching-episode-6814: 490ms
fetching-episode-6815: 502ms
fetching-episode-6816: 537ms
fetching-episode-6817: 644ms
fetching-episode-6818: 552ms
fetching-episode-6819: 573ms
fetching-episode-6820: 514ms
fetching-episode-6821: 817ms
fetching-episode-6822: 615ms
fetching-episode-6823: 520ms
fetching-episode-6824: 506ms
fetching-episode-6825: 504ms
fetching-episode-6826: 431ms
fetching-episode-6827: 597ms
fetching-episode-6828: 479ms
fetching-episode-6829: 749ms
fetching-episode-33059: 1129ms
fetching-episode-33212: 1131ms
fetching-episode-33369: 1122ms
fetching-episode-33477: 1127ms
fetching-episode-33932: 1129ms
fetching-episode-34351: 788ms
fetching-episode-34791: 784ms
fetching-episode-34942: 982ms
fetching-episode-35015: 1128ms
fetching-episode-35518: 1034ms
fetching-episode-36331: 1019ms
fetching-episode-36949: 1016ms
fetch-complete: 59895ms
```

## RUN 4

- Coldstart gone
- Completed! - probably some with undefined response!

```
Task bench-aniflix-serial deno run -A --unstable ./research/aniflix-api-limits.serial.ts
fetchShowUncached function was called with show-id "log-horizon" which produces url "https://www.aniflix.cc/api/show/log-horizon"! (Should only happen after cache clear or with different url!)
fetch-show: 351ms
fetching-episode-6781: 141ms
fetching-episode-6782: 103ms
fetching-episode-6783: 93ms
fetching-episode-6784: 87ms
fetching-episode-6785: 116ms
fetching-episode-6786: 98ms
fetching-episode-6787: 97ms
fetching-episode-6788: 92ms
fetching-episode-6789: 96ms
fetching-episode-6790: 476ms
fetching-episode-6791: 100ms
fetching-episode-6792: 476ms
fetching-episode-6793: 94ms
fetching-episode-6794: 95ms
fetching-episode-6795: 469ms
fetching-episode-6796: 90ms
fetching-episode-6797: 475ms
fetching-episode-6798: 100ms
fetching-episode-6799: 86ms
fetching-episode-6800: 959ms
fetching-episode-6801: 91ms
fetching-episode-6802: 95ms
fetching-episode-6803: 93ms
fetching-episode-6804: 90ms
fetching-episode-6806: 474ms
fetching-episode-6807: 97ms
fetching-episode-6808: 475ms
fetching-episode-6809: 90ms
fetching-episode-6810: 90ms
fetching-episode-6811: 462ms
fetching-episode-6812: 98ms
fetching-episode-6813: 469ms
fetching-episode-6814: 93ms
fetching-episode-6815: 94ms
fetching-episode-6816: 466ms
fetching-episode-6817: 94ms
fetching-episode-6818: 475ms
fetching-episode-6819: 98ms
fetching-episode-6820: 459ms
fetching-episode-6821: 97ms
fetching-episode-6822: 91ms
fetching-episode-6823: 461ms
fetching-episode-6824: 94ms
fetching-episode-6825: 469ms
fetching-episode-6826: 104ms
fetching-episode-6827: 90ms
fetching-episode-6828: 465ms
fetching-episode-6829: 102ms
fetching-episode-33059: 474ms
fetching-episode-33212: 97ms
fetching-episode-33369: 106ms
fetching-episode-33477: 485ms
fetching-episode-33932: 102ms
fetching-episode-34351: 466ms
fetching-episode-34791: 95ms
fetching-episode-34942: 93ms
fetching-episode-35015: 462ms
fetching-episode-35518: 97ms
fetching-episode-36331: 473ms
fetching-episode-36949: 96ms
fetch-complete: 14120ms
```
