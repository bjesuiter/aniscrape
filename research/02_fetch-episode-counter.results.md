# Results for fetch-episode-counter.ts

## RUN 1

- scraped, because I've seen variations in response speed but i didn't log times for each fetch!

## RUN 2 - now with time output per fetch

```
fetch-1: 317ms
fetch-2: 214ms
fetch-3: 90ms
fetch-4: 98ms
fetch-5: 92ms
fetch-6: 102ms
fetch-7: 97ms
fetch-8: 99ms
fetch-9: 820ms
fetch-10: 93ms
fetch-11: 95ms
fetch-12: 96ms
fetch-13: 442ms
fetch-14: 97ms
fetch-15: 94ms
fetch-16: 102ms
fetch-17: 914ms
fetch-18: 94ms
fetch-19: 94ms
fetch-20: 98ms
fetch-21: 95ms
fetch-22: 85ms
fetch-23: 465ms
fetch-24: 91ms
fetch-25: 458ms
fetch-26: 99ms
fetch-27: 471ms
fetch-28: 93ms
fetch-29: 105ms
fetch-30: 468ms
fetch-31: 98ms
fetch-32: 478ms
fetch-33: 102ms
fetch-34: 92ms
fetch-35: 469ms
fetch-36: 95ms
fetch-37: 466ms
fetch-38: 102ms
fetch-39: 93ms
fetch-40: 474ms
fetch-41: 96ms
fetch-42: 469ms
fetch-43: 94ms
fetch-44: 468ms
fetch-45: 100ms
fetch-46: 96ms
fetch-47: 473ms
fetch-48: 100ms
fetch-49: 476ms
fetch-50: 96ms
fetch-51: 101ms
fetch-52: 476ms
fetch-53: 98ms
fetch-54: 465ms
fetch-55: 100ms
fetch-56: 99ms
fetch-57: 470ms
fetch-58: 94ms
fetch-59: 589ms
fetch-60: 97ms
fetch-61: 97ms
fetch-62: 468ms
fetch-63: 94ms
fetch-64: 97ms
 fetch-65: 470ms
fetch-66: 97ms
fetch-67: 469ms
fetch-68: 102ms
fetch-69: 94ms
fetch-70: 469ms
fetch-71: 95ms
fetch-72: 467ms
fetch-73: 97ms
fetch-74: 96ms
fetch-75: 472ms
fetch-76: 103ms
fetch-77: 471ms
fetch-78: 94ms
fetch-79: 466ms
fetch-80: 98ms
fetch-81: 91ms
```

Findings:

- There seem to be no errors anymore :O
- each second to fourth request seems to be much slower than the rest. (95 ms to 470 ms)
