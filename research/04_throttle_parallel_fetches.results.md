# 04_throttle_parallel_fetches.results.md

## RUN 1 - 2 per sek

- seems to work flawless

```
fetch-0: 0s
fetch-1: 0s
fetch-2: 1s
fetch-3: 1s
fetch-4: 2s
fetch-5: 2s
fetch-6: 3s
fetch-7: 3s
fetch-8: 4s
fetch-9: 4s
fetch-10: 5s
fetch-11: 5s
fetch-12: 6s
fetch-13: 6s
fetch-14: 7s
fetch-15: 7s
fetch-16: 8s
fetch-17: 8s
fetch-18: 9s
fetch-19: 9s
fetch-20: 10s
fetch-21: 10s
fetch-22: 11s
fetch-23: 11s
fetch-24: 12s
fetch-25: 12s
fetch-26: 13s
fetch-27: 13s
fetch-28: 14s
fetch-29: 14s
fetch-30: 15s
fetch-31: 15s
fetch-32: 16s
fetch-33: 16s
fetch-34: 17s
fetch-35: 17s
fetch-36: 18s
fetch-37: 18s
fetch-38: 19s
fetch-39: 19s
fetch-40: 20s
fetch-41: 20s
fetch-42: 21s
fetch-43: 21s
fetch-44: 22s
fetch-45: 22s
fetch-46: 23s
fetch-47: 23s
fetch-48: 24s
fetch-49: 24s
fetch-50: 25s
fetch-51: 25s
fetch-52: 26s
fetch-53: 26s
fetch-54: 27s
fetch-55: 27s
fetch-56: 28s
fetch-57: 28s
fetch-58: 29s
fetch-59: 29s
```

## RUN 3 - 3 per sek

- works

```
fetch-0: 0s
fetch-1: 0s
fetch-2: 0s
fetch-3: 1s
fetch-4: 1s
fetch-5: 1s
fetch-6: 2s
fetch-7: 2s
fetch-8: 2s
fetch-9: 3s
fetch-10: 3s
fetch-11: 3s
fetch-12: 4s
fetch-13: 4s
fetch-14: 4s
fetch-15: 5s
fetch-16: 5s
fetch-17: 5s
fetch-18: 6s
fetch-19: 6s
fetch-20: 6s
fetch-21: 7s
fetch-22: 7s
fetch-23: 7s
fetch-24: 8s
fetch-25: 8s
fetch-26: 8s
fetch-27: 9s
fetch-28: 9s
fetch-29: 9s
fetch-30: 10s
fetch-31: 11s
fetch-32: 11s
fetch-33: 11s
fetch-34: 12s
fetch-35: 12s
fetch-36: 12s
fetch-37: 13s
fetch-38: 13s
fetch-39: 13s
fetch-40: 14s
fetch-41: 14s
fetch-42: 14s
fetch-43: 15s
fetch-44: 15s
fetch-45: 15s
fetch-46: 16s
fetch-47: 16s
fetch-48: 16s
fetch-49: 17s
fetch-50: 17s
fetch-51: 17s
fetch-52: 18s
fetch-53: 18s
fetch-54: 18s
fetch-55: 19s
fetch-56: 19s
fetch-57: 19s
fetch-58: 20s
fetch-59: 20s
fetch-60: 20s
fetch-61: 21s
fetch-62: 21s
fetch-63: 21s
fetch-64: 22s
fetch-65: 22s
fetch-66: 22s
fetch-67: 23s
fetch-68: 23s
fetch-69: 23s
fetch-70: 24s
fetch-71: 24s
fetch-72: 24s
fetch-73: 25s
fetch-74: 25s
fetch-75: 25s
fetch-76: 26s
fetch-77: 26s
fetch-78: 26s
fetch-79: 27s
fetch-80: 27s
fetch-81: 27s
fetch-82: 28s
fetch-83: 28s
fetch-84: 28s
fetch-85: 29s
fetch-86: 30s
fetch-87: 30s
fetch-88: 30s
fetch-89: 30s
fetch-90: 30s
fetch-91: 31s
fetch-92: 31s
fetch-93: 31s
fetch-94: 32s
fetch-95: 32s
fetch-96: 32s
fetch-97: 33s
fetch-98: 33s
fetch-99: 34s
```

## RUN 4 - 4 per sek

- Test is flawed, problem: now the calls will be made in series again, not in parallel

## RUN 5 & 6

limit: 4
concurrent:

- 2 - success (but concurrency of the already throttled function seems to not do much)
- 3 - success!

```
Task bench-4 deno run -A --unstable ./research/04_throttle_parallel_fetches.ts
fetching 0 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 3
fetching 1 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 3
fetching 2 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 3
fetching 3 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 4 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 5
fetching 5 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 6
fetching 6 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 7
fetching 7 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 8
fetching 10 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 11
fetching 8 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 11
fetching 9 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 11
fetching 11 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 12
fetching 13 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 15
fetching 14 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 15
fetching 12 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 15
fetching 15 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 16
fetching 16 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 17 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 18 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 19 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 20
fetching 20 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 23
fetching 21 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 23
fetching 22 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 23
fetching 23 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 24
fetching 24 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 27
fetching 25 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 27
fetching 26 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 27
fetching 27 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 28
fetching 28 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 31
fetching 29 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 31
fetching 30 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 31
fetching 31 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 33
fetching 32 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 35
fetching 33 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 35
fetching 34 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 35
fetching 35 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 38
fetching 36 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 39
fetching 37 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 39
fetching 38 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 39
fetching 39 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 41
fetching 40 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 43
fetching 41 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 43
fetching 42 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 43
fetching 43 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 44
fetching 45 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 46
fetching 44 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 46
fetching 46 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 47
fetching 47 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 48
fetching 48 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 51
fetching 49 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 51
fetching 50 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 51
fetching 51 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 53
fetching 52 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 55
fetching 53 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 55
fetching 54 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 55
fetching 55 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 56
fetching 57 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 59
fetching 58 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 59
fetching 56 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 59
fetching 59 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 60
fetching 60 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 63
fetching 61 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 63
fetching 62 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 63
fetching 63 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 64
fetching 64 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 67
fetching 65 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 67
fetching 66 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 67
fetching 67 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 69
fetching 68 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 71
fetching 69 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 71
fetching 70 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 71
fetching 71 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 72
fetching 72 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 75
fetching 73 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 75
fetching 74 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 75
fetching 75 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 76
fetching 76 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 79
fetching 78 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 79
fetching 77 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 79
fetching 79 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 80
fetching 80 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 83
fetching 81 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 83
fetching 82 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 83
fetching 83 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 84
fetching 84 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 87
fetching 85 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 87
fetching 86 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 87
fetching 87 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 88
fetching 88 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 91
fetching 89 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 91
fetching 90 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 91
fetching 91 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 94
fetching 92 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 95
fetching 93 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 95
fetching 94 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 95
fetching 95 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 96
fetching 96 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 99
fetching 97 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 99
fetching 98 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 99
fetching 99 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 100
```

## Run 7

concurrent: 4
limit: 4

```
Task bench-4 deno run -A --unstable ./research/04_throttle_parallel_fetches.ts
fetching 0 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 1 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 2 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 3 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 4 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 8
fetching 6 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 8
fetching 7 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 8
fetching 5 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 8
fetching 8 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 12
fetching 9 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 12
fetching 10 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 12
fetching 11 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 12
fetching 13 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 16
fetching 14 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 16
fetching 15 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 16
fetching 12 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 16
fetching 16 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 20
fetching 17 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 20
fetching 18 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 20
fetching 19 ...
    sekDiffSinceStart: 4s,
    errorCount: 0
    goodRequestsSinceLastError: 20
fetching 20 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 24
fetching 21 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 24
fetching 22 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 24
fetching 23 ...
    sekDiffSinceStart: 5s,
    errorCount: 0
    goodRequestsSinceLastError: 24
fetching 24 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 28
fetching 25 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 28
fetching 26 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 28
fetching 27 ...
    sekDiffSinceStart: 6s,
    errorCount: 0
    goodRequestsSinceLastError: 28
fetching 28 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 32
fetching 29 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 32
fetching 30 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 32
fetching 31 ...
    sekDiffSinceStart: 7s,
    errorCount: 0
    goodRequestsSinceLastError: 32
fetching 32 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 36
fetching 33 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 36
fetching 34 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 36
fetching 35 ...
    sekDiffSinceStart: 8s,
    errorCount: 0
    goodRequestsSinceLastError: 36
fetching 36 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 40
fetching 37 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 40
fetching 38 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 40
fetching 39 ...
    sekDiffSinceStart: 9s,
    errorCount: 0
    goodRequestsSinceLastError: 40
fetching 40 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 44
fetching 41 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 44
fetching 42 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 44
fetching 43 ...
    sekDiffSinceStart: 10s,
    errorCount: 0
    goodRequestsSinceLastError: 44
fetching 44 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 48
fetching 45 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 48
fetching 47 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 48
fetching 46 ...
    sekDiffSinceStart: 11s,
    errorCount: 0
    goodRequestsSinceLastError: 48
fetching 48 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 52
fetching 49 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 52
fetching 50 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 52
fetching 51 ...
    sekDiffSinceStart: 12s,
    errorCount: 0
    goodRequestsSinceLastError: 52
fetching 52 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 56
fetching 53 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 56
fetching 54 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 56
fetching 55 ...
    sekDiffSinceStart: 13s,
    errorCount: 0
    goodRequestsSinceLastError: 56
fetching 56 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 60
fetching 58 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 60
fetching 59 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 60
fetching 57 ...
    sekDiffSinceStart: 14s,
    errorCount: 0
    goodRequestsSinceLastError: 60
fetching 60 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 64
fetching 61 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 64
fetching 62 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 64
fetching 63 ...
    sekDiffSinceStart: 15s,
    errorCount: 0
    goodRequestsSinceLastError: 64
fetching 65 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 68
fetching 66 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 68
fetching 64 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 68
fetching 67 ...
    sekDiffSinceStart: 16s,
    errorCount: 0
    goodRequestsSinceLastError: 68
fetching 68 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 72
fetching 69 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 72
fetching 71 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 72
fetching 70 ...
    sekDiffSinceStart: 17s,
    errorCount: 0
    goodRequestsSinceLastError: 72
fetching 72 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 76
fetching 73 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 76
fetching 74 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 76
fetching 75 ...
    sekDiffSinceStart: 18s,
    errorCount: 0
    goodRequestsSinceLastError: 76
fetching 77 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 80
fetching 78 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 80
fetching 79 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 80
fetching 76 ...
    sekDiffSinceStart: 19s,
    errorCount: 0
    goodRequestsSinceLastError: 80
fetching 80 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 84
fetching 83 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 84
fetching 81 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 84
fetching 82 ...
    sekDiffSinceStart: 20s,
    errorCount: 0
    goodRequestsSinceLastError: 84
fetching 84 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 88
fetching 85 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 88
fetching 86 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 88
fetching 87 ...
    sekDiffSinceStart: 21s,
    errorCount: 0
    goodRequestsSinceLastError: 88
fetching 88 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 92
fetching 89 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 92
fetching 90 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 92
fetching 91 ...
    sekDiffSinceStart: 22s,
    errorCount: 0
    goodRequestsSinceLastError: 92
fetching 92 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 96
fetching 93 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 96
fetching 94 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 96
fetching 95 ...
    sekDiffSinceStart: 23s,
    errorCount: 0
    goodRequestsSinceLastError: 96
fetching 96 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 100
fetching 97 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 100
fetching 98 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 100
fetching 99 ...
    sekDiffSinceStart: 24s,
    errorCount: 0
    goodRequestsSinceLastError: 100
```

## RUN 8

limit: 5
concurrency: 4

=> failed!

```
Task bench-4 deno run -A --unstable ./research/04_throttle_parallel_fetches.ts
fetching 0 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 1 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 2 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 3 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 4
fetching 4 ...
    sekDiffSinceStart: 0s,
    errorCount: 0
    goodRequestsSinceLastError: 5
fetching 5 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 9
fetching 8 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 9
fetching 6 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 9
fetching 7 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 9
fetching 9 ...
    sekDiffSinceStart: 1s,
    errorCount: 0
    goodRequestsSinceLastError: 10
fetching 11 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 14
fetching 10 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 14
fetching 12 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 14
fetching 13 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 14
fetching 14 ...
    sekDiffSinceStart: 2s,
    errorCount: 0
    goodRequestsSinceLastError: 16
fetching 15 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 16 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 17 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 18 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 19
fetching 19 ...
    sekDiffSinceStart: 3s,
    errorCount: 0
    goodRequestsSinceLastError: 21
fetch-19: Unavailable (503)
fetch-19: 615ms
fetching 20 ...
    sekDiffSinceStart: 4s,
    errorCount: 1
    goodRequestsSinceLastError: 1
fetching 21 ...
    sekDiffSinceStart: 4s,
    errorCount: 1
    goodRequestsSinceLastError: 1
fetching 22 ...
    sekDiffSinceStart: 4s,
    errorCount: 1
    goodRequestsSinceLastError: 1
fetching 23 ...
    sekDiffSinceStart: 4s,
    errorCount: 1
    goodRequestsSinceLastError: 1
fetching 24 ...
    sekDiffSinceStart: 4s,
    errorCount: 1
    goodRequestsSinceLastError: 3
fetch-20: Unavailable (503)
fetch-20: 1406ms
fetching 28 ...
    sekDiffSinceStart: 5s,
    errorCount: 2
    goodRequestsSinceLastError: 3
fetching 25 ...
    sekDiffSinceStart: 5s,
    errorCount: 2
    goodRequestsSinceLastError: 3
fetching 26 ...
    sekDiffSinceStart: 5s,
    errorCount: 2
    goodRequestsSinceLastError: 3
fetching 27 ...
    sekDiffSinceStart: 5s,
    errorCount: 2
    goodRequestsSinceLastError: 3
fetching 29 ...
    sekDiffSinceStart: 5s,
    errorCount: 2
    goodRequestsSinceLastError: 5
fetch-29: Unavailable (503)
fetch-29: 577ms
fetching 30 ...
    sekDiffSinceStart: 6s,
    errorCount: 3
    goodRequestsSinceLastError: 1
fetching 31 ...
    sekDiffSinceStart: 6s,
    errorCount: 3
    goodRequestsSinceLastError: 1
fetching 32 ...
    sekDiffSinceStart: 6s,
    errorCount: 3
    goodRequestsSinceLastError: 1
fetching 33 ...
    sekDiffSinceStart: 6s,
    errorCount: 3
    goodRequestsSinceLastError: 2
fetching 34 ...
    sekDiffSinceStart: 6s,
    errorCount: 3
    goodRequestsSinceLastError: 3
fetch-30: Unavailable (503)
fetch-30: 1288ms
fetching 35 ...
    sekDiffSinceStart: 7s,
    errorCount: 4
    goodRequestsSinceLastError: 2
fetching 36 ...
    sekDiffSinceStart: 7s,
    errorCount: 4
    goodRequestsSinceLastError: 2
fetching 37 ...
    sekDiffSinceStart: 7s,
    errorCount: 4
    goodRequestsSinceLastError: 2
fetching 38 ...
    sekDiffSinceStart: 7s,
    errorCount: 4
    goodRequestsSinceLastError: 2
fetching 39 ...
    sekDiffSinceStart: 7s,
    errorCount: 4
    goodRequestsSinceLastError: 3
fetch-37: Unavailable (503)
fetch-37: 1000ms
fetch-39: Unavailable (503)
fetch-39: 429ms
fetching 41 ...
    sekDiffSinceStart: 8s,
    errorCount: 6
    goodRequestsSinceLastError: 1
fetching 40 ...
    sekDiffSinceStart: 8s,
    errorCount: 6
    goodRequestsSinceLastError: 1
fetching 42 ...
    sekDiffSinceStart: 8s,
    errorCount: 6
    goodRequestsSinceLastError: 1
fetching 43 ...
    sekDiffSinceStart: 8s,
    errorCount: 6
    goodRequestsSinceLastError: 1
fetching 44 ...
    sekDiffSinceStart: 8s,
    errorCount: 6
    goodRequestsSinceLastError: 2
fetching 45 ...
    sekDiffSinceStart: 9s,
    errorCount: 6
    goodRequestsSinceLastError: 6
fetching 48 ...
    sekDiffSinceStart: 9s,
    errorCount: 6
    goodRequestsSinceLastError: 6
fetching 46 ...
    sekDiffSinceStart: 9s,
    errorCount: 6
    goodRequestsSinceLastError: 6
fetching 47 ...
    sekDiffSinceStart: 9s,
    errorCount: 6
    goodRequestsSinceLastError: 6
fetching 49 ...
    sekDiffSinceStart: 9s,
    errorCount: 6
    goodRequestsSinceLastError: 7
fetch-46: Unavailable (503)
fetch-46: 1307ms
fetch-49: Unavailable (503)
fetch-49: 436ms
fetching 50 ...
    sekDiffSinceStart: 10s,
    errorCount: 8
    goodRequestsSinceLastError: 1
fetching 51 ...
    sekDiffSinceStart: 10s,
    errorCount: 8
    goodRequestsSinceLastError: 1
fetching 53 ...
    sekDiffSinceStart: 10s,
    errorCount: 8
    goodRequestsSinceLastError: 1
fetching 52 ...
    sekDiffSinceStart: 10s,
    errorCount: 8
    goodRequestsSinceLastError: 1
fetching 54 ...
    sekDiffSinceStart: 10s,
    errorCount: 8
    goodRequestsSinceLastError: 2
fetching 57 ...
    sekDiffSinceStart: 11s,
    errorCount: 8
    goodRequestsSinceLastError: 6
fetching 58 ...
    sekDiffSinceStart: 11s,
    errorCount: 8
    goodRequestsSinceLastError: 6
fetching 55 ...
    sekDiffSinceStart: 11s,
    errorCount: 8
    goodRequestsSinceLastError: 6
fetching 56 ...
    sekDiffSinceStart: 11s,
    errorCount: 8
    goodRequestsSinceLastError: 6
fetch-56: Unavailable (503)
fetch-56: 1403ms
fetching 59 ...
    sekDiffSinceStart: 12s,
    errorCount: 9
    goodRequestsSinceLastError: 1
fetching 62 ...
    sekDiffSinceStart: 12s,
    errorCount: 9
    goodRequestsSinceLastError: 5
fetching 63 ...
    sekDiffSinceStart: 12s,
    errorCount: 9
    goodRequestsSinceLastError: 5
fetching 60 ...
    sekDiffSinceStart: 12s,
    errorCount: 9
    goodRequestsSinceLastError: 5
fetching 61 ...
    sekDiffSinceStart: 12s,
    errorCount: 9
    goodRequestsSinceLastError: 5
fetching 64 ...
    sekDiffSinceStart: 12s,
    errorCount: 9
    goodRequestsSinceLastError: 7
fetch-63: Unavailable (503)
fetch-63: 780ms
fetching 66 ...
    sekDiffSinceStart: 13s,
    errorCount: 10
    goodRequestsSinceLastError: 3
fetching 67 ...
    sekDiffSinceStart: 13s,
    errorCount: 10
    goodRequestsSinceLastError: 3
fetching 68 ...
    sekDiffSinceStart: 13s,
    errorCount: 10
    goodRequestsSinceLastError: 3
fetching 65 ...
    sekDiffSinceStart: 13s,
    errorCount: 10
    goodRequestsSinceLastError: 3
fetching 69 ...
    sekDiffSinceStart: 13s,
    errorCount: 10
    goodRequestsSinceLastError: 4
fetch-65: Unavailable (503)
fetch-65: 1471ms
fetching 70 ...
    sekDiffSinceStart: 14s,
    errorCount: 11
    goodRequestsSinceLastError: 3
fetching 71 ...
    sekDiffSinceStart: 14s,
    errorCount: 11
    goodRequestsSinceLastError: 3
fetching 72 ...
    sekDiffSinceStart: 14s,
    errorCount: 11
    goodRequestsSinceLastError: 3
fetching 73 ...
    sekDiffSinceStart: 14s,
    errorCount: 11
    goodRequestsSinceLastError: 3
fetching 74 ...
    sekDiffSinceStart: 14s,
    errorCount: 11
    goodRequestsSinceLastError: 4
fetch-74: Unavailable (503)
fetch-74: 503ms
fetching 76 ...
    sekDiffSinceStart: 15s,
    errorCount: 12
    goodRequestsSinceLastError: 1
fetching 77 ...
    sekDiffSinceStart: 15s,
    errorCount: 12
    goodRequestsSinceLastError: 1
fetching 78 ...
    sekDiffSinceStart: 15s,
    errorCount: 12
    goodRequestsSinceLastError: 1
fetching 75 ...
    sekDiffSinceStart: 15s,
    errorCount: 12
    goodRequestsSinceLastError: 1
fetching 79 ...
    sekDiffSinceStart: 15s,
    errorCount: 12
    goodRequestsSinceLastError: 3
fetch-75: Unavailable (503)
fetch-75: 1311ms
fetching 81 ...
    sekDiffSinceStart: 16s,
    errorCount: 13
    goodRequestsSinceLastError: 3
fetching 82 ...
    sekDiffSinceStart: 16s,
    errorCount: 13
    goodRequestsSinceLastError: 3
fetching 80 ...
    sekDiffSinceStart: 16s,
    errorCount: 13
    goodRequestsSinceLastError: 3
fetching 83 ...
    sekDiffSinceStart: 16s,
    errorCount: 13
    goodRequestsSinceLastError: 3
fetching 84 ...
    sekDiffSinceStart: 16s,
    errorCount: 13
    goodRequestsSinceLastError: 5
fetch-84: Unavailable (503)
fetch-84: 510ms
fetching 85 ...
    sekDiffSinceStart: 17s,
    errorCount: 14
    goodRequestsSinceLastError: 1
fetching 87 ...
    sekDiffSinceStart: 17s,
    errorCount: 14
    goodRequestsSinceLastError: 1
fetching 88 ...
    sekDiffSinceStart: 17s,
    errorCount: 14
    goodRequestsSinceLastError: 1
fetching 86 ...
    sekDiffSinceStart: 17s,
    errorCount: 14
    goodRequestsSinceLastError: 1
fetching 89 ...
    sekDiffSinceStart: 17s,
    errorCount: 14
    goodRequestsSinceLastError: 2
fetch-86: Unavailable (503)
fetch-86: 900ms
fetching 90 ...
    sekDiffSinceStart: 18s,
    errorCount: 15
    goodRequestsSinceLastError: 3
fetching 93 ...
    sekDiffSinceStart: 18s,
    errorCount: 15
    goodRequestsSinceLastError: 3
fetching 91 ...
    sekDiffSinceStart: 18s,
    errorCount: 15
    goodRequestsSinceLastError: 3
fetching 92 ...
    sekDiffSinceStart: 18s,
    errorCount: 15
    goodRequestsSinceLastError: 3
fetching 94 ...
    sekDiffSinceStart: 18s,
    errorCount: 15
    goodRequestsSinceLastError: 5
fetch-91: Unavailable (503)
fetch-91: 1037ms
fetching 95 ...
    sekDiffSinceStart: 19s,
    errorCount: 16
    goodRequestsSinceLastError: 3
fetching 97 ...
    sekDiffSinceStart: 19s,
    errorCount: 16
    goodRequestsSinceLastError: 3
fetching 98 ...
    sekDiffSinceStart: 19s,
    errorCount: 16
    goodRequestsSinceLastError: 3
fetching 96 ...
    sekDiffSinceStart: 19s,
    errorCount: 16
    goodRequestsSinceLastError: 3
fetching 99 ...
    sekDiffSinceStart: 19s,
    errorCount: 16
    goodRequestsSinceLastError: 4
fetch-98: Unavailable (503)
fetch-98: 774ms
```

## Run 9

limit: 4
concurrency: 5

=> not usefull, because progress is not limited by concurrency anymore since concurrency: 4
=> now limit:4 per sek is limiting.

Fastest execution: limit:4, concurrency: 4
