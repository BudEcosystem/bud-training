
import { Card, AreaChart, Title, Text, LineChart } from '@tremor/react';

const data = [
    {
      "Step": 0,
      "brisk-pond-1 - train/loss": 1.6425,
      "brisk-pond-1 - train/loss__MIN": 1.6425,
      "brisk-pond-1 - train/loss__MAX": 1.6425
    },
    {
      "Step": 1,
      "brisk-pond-1 - train/loss": 1.6584,
      "brisk-pond-1 - train/loss__MIN": 1.6584,
      "brisk-pond-1 - train/loss__MAX": 1.6584
    },
    {
      "Step": 2,
      "brisk-pond-1 - train/loss": 1.7086,
      "brisk-pond-1 - train/loss__MIN": 1.7086,
      "brisk-pond-1 - train/loss__MAX": 1.7086
    },
    {
      "Step": 3,
      "brisk-pond-1 - train/loss": 1.721,
      "brisk-pond-1 - train/loss__MIN": 1.721,
      "brisk-pond-1 - train/loss__MAX": 1.721
    },
    {
      "Step": 4,
      "brisk-pond-1 - train/loss": 1.8091,
      "brisk-pond-1 - train/loss__MIN": 1.8091,
      "brisk-pond-1 - train/loss__MAX": 1.8091
    },
    {
      "Step": 5,
      "brisk-pond-1 - train/loss": 1.585,
      "brisk-pond-1 - train/loss__MIN": 1.585,
      "brisk-pond-1 - train/loss__MAX": 1.585
    },
    {
      "Step": 6,
      "brisk-pond-1 - train/loss": 1.6635,
      "brisk-pond-1 - train/loss__MIN": 1.6635,
      "brisk-pond-1 - train/loss__MAX": 1.6635
    },
    {
      "Step": 7,
      "brisk-pond-1 - train/loss": 1.67,
      "brisk-pond-1 - train/loss__MIN": 1.67,
      "brisk-pond-1 - train/loss__MAX": 1.67
    },
    {
      "Step": 8,
      "brisk-pond-1 - train/loss": 1.6983,
      "brisk-pond-1 - train/loss__MIN": 1.6983,
      "brisk-pond-1 - train/loss__MAX": 1.6983
    },
    {
      "Step": 9,
      "brisk-pond-1 - train/loss": 1.7229,
      "brisk-pond-1 - train/loss__MIN": 1.7229,
      "brisk-pond-1 - train/loss__MAX": 1.7229
    },
    {
      "Step": 10,
      "brisk-pond-1 - train/loss": 1.6983,
      "brisk-pond-1 - train/loss__MIN": 1.6983,
      "brisk-pond-1 - train/loss__MAX": 1.6983
    },
    {
      "Step": 11,
      "brisk-pond-1 - train/loss": 1.5614,
      "brisk-pond-1 - train/loss__MIN": 1.5614,
      "brisk-pond-1 - train/loss__MAX": 1.5614
    },
    {
      "Step": 12,
      "brisk-pond-1 - train/loss": 1.5082,
      "brisk-pond-1 - train/loss__MIN": 1.5082,
      "brisk-pond-1 - train/loss__MAX": 1.5082
    },
    {
      "Step": 13,
      "brisk-pond-1 - train/loss": 1.5043,
      "brisk-pond-1 - train/loss__MIN": 1.5043,
      "brisk-pond-1 - train/loss__MAX": 1.5043
    },
    {
      "Step": 14,
      "brisk-pond-1 - train/loss": 1.6271,
      "brisk-pond-1 - train/loss__MIN": 1.6271,
      "brisk-pond-1 - train/loss__MAX": 1.6271
    },
    {
      "Step": 15,
      "brisk-pond-1 - train/loss": 1.4564,
      "brisk-pond-1 - train/loss__MIN": 1.4564,
      "brisk-pond-1 - train/loss__MAX": 1.4564
    },
    {
      "Step": 16,
      "brisk-pond-1 - train/loss": 1.363,
      "brisk-pond-1 - train/loss__MIN": 1.363,
      "brisk-pond-1 - train/loss__MAX": 1.363
    },
    {
      "Step": 17,
      "brisk-pond-1 - train/loss": 1.3324,
      "brisk-pond-1 - train/loss__MIN": 1.3324,
      "brisk-pond-1 - train/loss__MAX": 1.3324
    },
    {
      "Step": 18,
      "brisk-pond-1 - train/loss": 1.3352,
      "brisk-pond-1 - train/loss__MIN": 1.3352,
      "brisk-pond-1 - train/loss__MAX": 1.3352
    },
    {
      "Step": 19,
      "brisk-pond-1 - train/loss": 1.3328,
      "brisk-pond-1 - train/loss__MIN": 1.3328,
      "brisk-pond-1 - train/loss__MAX": 1.3328
    },
    {
      "Step": 20,
      "brisk-pond-1 - train/loss": 1.153,
      "brisk-pond-1 - train/loss__MIN": 1.153,
      "brisk-pond-1 - train/loss__MAX": 1.153
    },
    {
      "Step": 21,
      "brisk-pond-1 - train/loss": 1.2767,
      "brisk-pond-1 - train/loss__MIN": 1.2767,
      "brisk-pond-1 - train/loss__MAX": 1.2767
    },
    {
      "Step": 22,
      "brisk-pond-1 - train/loss": 1.2576,
      "brisk-pond-1 - train/loss__MIN": 1.2576,
      "brisk-pond-1 - train/loss__MAX": 1.2576
    },
    {
      "Step": 23,
      "brisk-pond-1 - train/loss": 1.1667,
      "brisk-pond-1 - train/loss__MIN": 1.1667,
      "brisk-pond-1 - train/loss__MAX": 1.1667
    },
    {
      "Step": 24,
      "brisk-pond-1 - train/loss": 1.2624,
      "brisk-pond-1 - train/loss__MIN": 1.2624,
      "brisk-pond-1 - train/loss__MAX": 1.2624
    },
    {
      "Step": 25,
      "brisk-pond-1 - train/loss": 1.0659,
      "brisk-pond-1 - train/loss__MIN": 1.0659,
      "brisk-pond-1 - train/loss__MAX": 1.0659
    },
    {
      "Step": 26,
      "brisk-pond-1 - train/loss": 1.083,
      "brisk-pond-1 - train/loss__MIN": 1.083,
      "brisk-pond-1 - train/loss__MAX": 1.083
    },
    {
      "Step": 27,
      "brisk-pond-1 - train/loss": 1.0517,
      "brisk-pond-1 - train/loss__MIN": 1.0517,
      "brisk-pond-1 - train/loss__MAX": 1.0517
    },
    {
      "Step": 28,
      "brisk-pond-1 - train/loss": 1.021,
      "brisk-pond-1 - train/loss__MIN": 1.021,
      "brisk-pond-1 - train/loss__MAX": 1.021
    },
    {
      "Step": 29,
      "brisk-pond-1 - train/loss": 0.9875,
      "brisk-pond-1 - train/loss__MIN": 0.9875,
      "brisk-pond-1 - train/loss__MAX": 0.9875
    },
    {
      "Step": 30,
      "brisk-pond-1 - train/loss": 1.0326,
      "brisk-pond-1 - train/loss__MIN": 1.0326,
      "brisk-pond-1 - train/loss__MAX": 1.0326
    },
    {
      "Step": 31,
      "brisk-pond-1 - train/loss": 0.9926,
      "brisk-pond-1 - train/loss__MIN": 0.9926,
      "brisk-pond-1 - train/loss__MAX": 0.9926
    },
    {
      "Step": 32,
      "brisk-pond-1 - train/loss": 1.015,
      "brisk-pond-1 - train/loss__MIN": 1.015,
      "brisk-pond-1 - train/loss__MAX": 1.015
    },
    {
      "Step": 33,
      "brisk-pond-1 - train/loss": 1.038,
      "brisk-pond-1 - train/loss__MIN": 1.038,
      "brisk-pond-1 - train/loss__MAX": 1.038
    },
    {
      "Step": 34,
      "brisk-pond-1 - train/loss": 0.9715,
      "brisk-pond-1 - train/loss__MIN": 0.9715,
      "brisk-pond-1 - train/loss__MAX": 0.9715
    },
    {
      "Step": 35,
      "brisk-pond-1 - train/loss": 1.0169,
      "brisk-pond-1 - train/loss__MIN": 1.0169,
      "brisk-pond-1 - train/loss__MAX": 1.0169
    },
    {
      "Step": 36,
      "brisk-pond-1 - train/loss": 0.9742,
      "brisk-pond-1 - train/loss__MIN": 0.9742,
      "brisk-pond-1 - train/loss__MAX": 0.9742
    },
    {
      "Step": 37,
      "brisk-pond-1 - train/loss": 0.9748,
      "brisk-pond-1 - train/loss__MIN": 0.9748,
      "brisk-pond-1 - train/loss__MAX": 0.9748
    },
    {
      "Step": 38,
      "brisk-pond-1 - train/loss": 0.9558,
      "brisk-pond-1 - train/loss__MIN": 0.9558,
      "brisk-pond-1 - train/loss__MAX": 0.9558
    },
    {
      "Step": 39,
      "brisk-pond-1 - train/loss": 0.8842,
      "brisk-pond-1 - train/loss__MIN": 0.8842,
      "brisk-pond-1 - train/loss__MAX": 0.8842
    },
    {
      "Step": 40,
      "brisk-pond-1 - train/loss": 0.9621,
      "brisk-pond-1 - train/loss__MIN": 0.9621,
      "brisk-pond-1 - train/loss__MAX": 0.9621
    },
    {
      "Step": 41,
      "brisk-pond-1 - train/loss": 0.8886,
      "brisk-pond-1 - train/loss__MIN": 0.8886,
      "brisk-pond-1 - train/loss__MAX": 0.8886
    },
    {
      "Step": 42,
      "brisk-pond-1 - train/loss": 0.9106,
      "brisk-pond-1 - train/loss__MIN": 0.9106,
      "brisk-pond-1 - train/loss__MAX": 0.9106
    },
    {
      "Step": 43,
      "brisk-pond-1 - train/loss": 1.0275,
      "brisk-pond-1 - train/loss__MIN": 1.0275,
      "brisk-pond-1 - train/loss__MAX": 1.0275
    },
    {
      "Step": 44,
      "brisk-pond-1 - train/loss": 0.9665,
      "brisk-pond-1 - train/loss__MIN": 0.9665,
      "brisk-pond-1 - train/loss__MAX": 0.9665
    },
    {
      "Step": 45,
      "brisk-pond-1 - train/loss": 0.9796,
      "brisk-pond-1 - train/loss__MIN": 0.9796,
      "brisk-pond-1 - train/loss__MAX": 0.9796
    },
    {
      "Step": 46,
      "brisk-pond-1 - train/loss": 0.9284,
      "brisk-pond-1 - train/loss__MIN": 0.9284,
      "brisk-pond-1 - train/loss__MAX": 0.9284
    },
    {
      "Step": 47,
      "brisk-pond-1 - train/loss": 0.8489,
      "brisk-pond-1 - train/loss__MIN": 0.8489,
      "brisk-pond-1 - train/loss__MAX": 0.8489
    },
    {
      "Step": 48,
      "brisk-pond-1 - train/loss": 0.9219,
      "brisk-pond-1 - train/loss__MIN": 0.9219,
      "brisk-pond-1 - train/loss__MAX": 0.9219
    },
    {
      "Step": 49,
      "brisk-pond-1 - train/loss": 0.9093,
      "brisk-pond-1 - train/loss__MIN": 0.9093,
      "brisk-pond-1 - train/loss__MAX": 0.9093
    },
    {
      "Step": 50,
      "brisk-pond-1 - train/loss": 0.9618,
      "brisk-pond-1 - train/loss__MIN": 0.9618,
      "brisk-pond-1 - train/loss__MAX": 0.9618
    },
    {
      "Step": 51,
      "brisk-pond-1 - train/loss": 0.9016,
      "brisk-pond-1 - train/loss__MIN": 0.9016,
      "brisk-pond-1 - train/loss__MAX": 0.9016
    },
    {
      "Step": 52,
      "brisk-pond-1 - train/loss": 0.9351,
      "brisk-pond-1 - train/loss__MIN": 0.9351,
      "brisk-pond-1 - train/loss__MAX": 0.9351
    },
    {
      "Step": 53,
      "brisk-pond-1 - train/loss": 0.9844,
      "brisk-pond-1 - train/loss__MIN": 0.9844,
      "brisk-pond-1 - train/loss__MAX": 0.9844
    },
    {
      "Step": 54,
      "brisk-pond-1 - train/loss": 0.8657,
      "brisk-pond-1 - train/loss__MIN": 0.8657,
      "brisk-pond-1 - train/loss__MAX": 0.8657
    },
    {
      "Step": 55,
      "brisk-pond-1 - train/loss": 0.8956,
      "brisk-pond-1 - train/loss__MIN": 0.8956,
      "brisk-pond-1 - train/loss__MAX": 0.8956
    },
    {
      "Step": 56,
      "brisk-pond-1 - train/loss": 0.9675,
      "brisk-pond-1 - train/loss__MIN": 0.9675,
      "brisk-pond-1 - train/loss__MAX": 0.9675
    },
    {
      "Step": 57,
      "brisk-pond-1 - train/loss": 0.9116,
      "brisk-pond-1 - train/loss__MIN": 0.9116,
      "brisk-pond-1 - train/loss__MAX": 0.9116
    },
    {
      "Step": 58,
      "brisk-pond-1 - train/loss": 0.9199,
      "brisk-pond-1 - train/loss__MIN": 0.9199,
      "brisk-pond-1 - train/loss__MAX": 0.9199
    },
    {
      "Step": 59,
      "brisk-pond-1 - train/loss": 0.8696,
      "brisk-pond-1 - train/loss__MIN": 0.8696,
      "brisk-pond-1 - train/loss__MAX": 0.8696
    },
    {
      "Step": 60,
      "brisk-pond-1 - train/loss": 0.8931,
      "brisk-pond-1 - train/loss__MIN": 0.8931,
      "brisk-pond-1 - train/loss__MAX": 0.8931
    },
    {
      "Step": 61,
      "brisk-pond-1 - train/loss": 0.8449,
      "brisk-pond-1 - train/loss__MIN": 0.8449,
      "brisk-pond-1 - train/loss__MAX": 0.8449
    },
    {
      "Step": 62,
      "brisk-pond-1 - train/loss": 0.8616,
      "brisk-pond-1 - train/loss__MIN": 0.8616,
      "brisk-pond-1 - train/loss__MAX": 0.8616
    },
    {
      "Step": 63,
      "brisk-pond-1 - train/loss": 0.8782,
      "brisk-pond-1 - train/loss__MIN": 0.8782,
      "brisk-pond-1 - train/loss__MAX": 0.8782
    },
    {
      "Step": 64,
      "brisk-pond-1 - train/loss": 0.8581,
      "brisk-pond-1 - train/loss__MIN": 0.8581,
      "brisk-pond-1 - train/loss__MAX": 0.8581
    },
    {
      "Step": 65,
      "brisk-pond-1 - train/loss": 0.9142,
      "brisk-pond-1 - train/loss__MIN": 0.9142,
      "brisk-pond-1 - train/loss__MAX": 0.9142
    },
    {
      "Step": 66,
      "brisk-pond-1 - train/loss": 0.8443,
      "brisk-pond-1 - train/loss__MIN": 0.8443,
      "brisk-pond-1 - train/loss__MAX": 0.8443
    },
    {
      "Step": 67,
      "brisk-pond-1 - train/loss": 0.9229,
      "brisk-pond-1 - train/loss__MIN": 0.9229,
      "brisk-pond-1 - train/loss__MAX": 0.9229
    },
    {
      "Step": 68,
      "brisk-pond-1 - train/loss": 0.8398,
      "brisk-pond-1 - train/loss__MIN": 0.8398,
      "brisk-pond-1 - train/loss__MAX": 0.8398
    },
    {
      "Step": 69,
      "brisk-pond-1 - train/loss": 0.894,
      "brisk-pond-1 - train/loss__MIN": 0.894,
      "brisk-pond-1 - train/loss__MAX": 0.894
    },
    {
      "Step": 70,
      "brisk-pond-1 - train/loss": 0.8823,
      "brisk-pond-1 - train/loss__MIN": 0.8823,
      "brisk-pond-1 - train/loss__MAX": 0.8823
    },
    {
      "Step": 71,
      "brisk-pond-1 - train/loss": 0.8758,
      "brisk-pond-1 - train/loss__MIN": 0.8758,
      "brisk-pond-1 - train/loss__MAX": 0.8758
    },
    {
      "Step": 72,
      "brisk-pond-1 - train/loss": 0.8714,
      "brisk-pond-1 - train/loss__MIN": 0.8714,
      "brisk-pond-1 - train/loss__MAX": 0.8714
    },
    {
      "Step": 73,
      "brisk-pond-1 - train/loss": 0.826,
      "brisk-pond-1 - train/loss__MIN": 0.826,
      "brisk-pond-1 - train/loss__MAX": 0.826
    },
    {
      "Step": 74,
      "brisk-pond-1 - train/loss": 0.8684,
      "brisk-pond-1 - train/loss__MIN": 0.8684,
      "brisk-pond-1 - train/loss__MAX": 0.8684
    },
    {
      "Step": 75,
      "brisk-pond-1 - train/loss": 0.8613,
      "brisk-pond-1 - train/loss__MIN": 0.8613,
      "brisk-pond-1 - train/loss__MAX": 0.8613
    },
    {
      "Step": 76,
      "brisk-pond-1 - train/loss": 0.9005,
      "brisk-pond-1 - train/loss__MIN": 0.9005,
      "brisk-pond-1 - train/loss__MAX": 0.9005
    },
    {
      "Step": 77,
      "brisk-pond-1 - train/loss": 0.8769,
      "brisk-pond-1 - train/loss__MIN": 0.8769,
      "brisk-pond-1 - train/loss__MAX": 0.8769
    },
    {
      "Step": 78,
      "brisk-pond-1 - train/loss": 0.854,
      "brisk-pond-1 - train/loss__MIN": 0.854,
      "brisk-pond-1 - train/loss__MAX": 0.854
    },
    {
      "Step": 79,
      "brisk-pond-1 - train/loss": 0.9016,
      "brisk-pond-1 - train/loss__MIN": 0.9016,
      "brisk-pond-1 - train/loss__MAX": 0.9016
    },
    {
      "Step": 80,
      "brisk-pond-1 - train/loss": 0.8172,
      "brisk-pond-1 - train/loss__MIN": 0.8172,
      "brisk-pond-1 - train/loss__MAX": 0.8172
    },
    {
      "Step": 81,
      "brisk-pond-1 - train/loss": 0.866,
      "brisk-pond-1 - train/loss__MIN": 0.866,
      "brisk-pond-1 - train/loss__MAX": 0.866
    },
    {
      "Step": 82,
      "brisk-pond-1 - train/loss": 0.8261,
      "brisk-pond-1 - train/loss__MIN": 0.8261,
      "brisk-pond-1 - train/loss__MAX": 0.8261
    },
    {
      "Step": 83,
      "brisk-pond-1 - train/loss": 0.9349,
      "brisk-pond-1 - train/loss__MIN": 0.9349,
      "brisk-pond-1 - train/loss__MAX": 0.9349
    },
    {
      "Step": 84,
      "brisk-pond-1 - train/loss": 0.9153,
      "brisk-pond-1 - train/loss__MIN": 0.9153,
      "brisk-pond-1 - train/loss__MAX": 0.9153
    },
    {
      "Step": 85,
      "brisk-pond-1 - train/loss": 0.8494,
      "brisk-pond-1 - train/loss__MIN": 0.8494,
      "brisk-pond-1 - train/loss__MAX": 0.8494
    },
    {
      "Step": 86,
      "brisk-pond-1 - train/loss": 0.851,
      "brisk-pond-1 - train/loss__MIN": 0.851,
      "brisk-pond-1 - train/loss__MAX": 0.851
    },
    {
      "Step": 87,
      "brisk-pond-1 - train/loss": 0.8598,
      "brisk-pond-1 - train/loss__MIN": 0.8598,
      "brisk-pond-1 - train/loss__MAX": 0.8598
    },
    {
      "Step": 88,
      "brisk-pond-1 - train/loss": 0.8448,
      "brisk-pond-1 - train/loss__MIN": 0.8448,
      "brisk-pond-1 - train/loss__MAX": 0.8448
    },
    {
      "Step": 89,
      "brisk-pond-1 - train/loss": 0.9178,
      "brisk-pond-1 - train/loss__MIN": 0.9178,
      "brisk-pond-1 - train/loss__MAX": 0.9178
    },
    {
      "Step": 90,
      "brisk-pond-1 - train/loss": 0.868,
      "brisk-pond-1 - train/loss__MIN": 0.868,
      "brisk-pond-1 - train/loss__MAX": 0.868
    },
    {
      "Step": 91,
      "brisk-pond-1 - train/loss": 0.8184,
      "brisk-pond-1 - train/loss__MIN": 0.8184,
      "brisk-pond-1 - train/loss__MAX": 0.8184
    },
    {
      "Step": 92,
      "brisk-pond-1 - train/loss": 0.8396,
      "brisk-pond-1 - train/loss__MIN": 0.8396,
      "brisk-pond-1 - train/loss__MAX": 0.8396
    },
    {
      "Step": 93,
      "brisk-pond-1 - train/loss": 0.8141,
      "brisk-pond-1 - train/loss__MIN": 0.8141,
      "brisk-pond-1 - train/loss__MAX": 0.8141
    },
    {
      "Step": 94,
      "brisk-pond-1 - train/loss": 0.947,
      "brisk-pond-1 - train/loss__MIN": 0.947,
      "brisk-pond-1 - train/loss__MAX": 0.947
    },
    {
      "Step": 95,
      "brisk-pond-1 - train/loss": 0.8711,
      "brisk-pond-1 - train/loss__MIN": 0.8711,
      "brisk-pond-1 - train/loss__MAX": 0.8711
    },
    {
      "Step": 96,
      "brisk-pond-1 - train/loss": 0.8208,
      "brisk-pond-1 - train/loss__MIN": 0.8208,
      "brisk-pond-1 - train/loss__MAX": 0.8208
    },
    {
      "Step": 97,
      "brisk-pond-1 - train/loss": 0.8212,
      "brisk-pond-1 - train/loss__MIN": 0.8212,
      "brisk-pond-1 - train/loss__MAX": 0.8212
    },
    {
      "Step": 98,
      "brisk-pond-1 - train/loss": 0.8493,
      "brisk-pond-1 - train/loss__MIN": 0.8493,
      "brisk-pond-1 - train/loss__MAX": 0.8493
    },
    {
      "Step": 99,
      "brisk-pond-1 - train/loss": 0.8334,
      "brisk-pond-1 - train/loss__MIN": 0.8334,
      "brisk-pond-1 - train/loss__MAX": 0.8334
    },
    {
      "Step": 100,
      "brisk-pond-1 - train/loss": 0.8611,
      "brisk-pond-1 - train/loss__MIN": 0.8611,
      "brisk-pond-1 - train/loss__MAX": 0.8611
    },
    {
      "Step": 101,
      "brisk-pond-1 - train/loss": 0.8275,
      "brisk-pond-1 - train/loss__MIN": 0.8275,
      "brisk-pond-1 - train/loss__MAX": 0.8275
    },
    {
      "Step": 102,
      "brisk-pond-1 - train/loss": 0.919,
      "brisk-pond-1 - train/loss__MIN": 0.919,
      "brisk-pond-1 - train/loss__MAX": 0.919
    },
    {
      "Step": 103,
      "brisk-pond-1 - train/loss": 0.8839,
      "brisk-pond-1 - train/loss__MIN": 0.8839,
      "brisk-pond-1 - train/loss__MAX": 0.8839
    },
    {
      "Step": 104,
      "brisk-pond-1 - train/loss": 0.8662,
      "brisk-pond-1 - train/loss__MIN": 0.8662,
      "brisk-pond-1 - train/loss__MAX": 0.8662
    },
    {
      "Step": 105,
      "brisk-pond-1 - train/loss": 0.8964,
      "brisk-pond-1 - train/loss__MIN": 0.8964,
      "brisk-pond-1 - train/loss__MAX": 0.8964
    },
    {
      "Step": 106,
      "brisk-pond-1 - train/loss": 0.8634,
      "brisk-pond-1 - train/loss__MIN": 0.8634,
      "brisk-pond-1 - train/loss__MAX": 0.8634
    },
    {
      "Step": 107,
      "brisk-pond-1 - train/loss": 0.8685,
      "brisk-pond-1 - train/loss__MIN": 0.8685,
      "brisk-pond-1 - train/loss__MAX": 0.8685
    },
    {
      "Step": 108,
      "brisk-pond-1 - train/loss": 0.8124,
      "brisk-pond-1 - train/loss__MIN": 0.8124,
      "brisk-pond-1 - train/loss__MAX": 0.8124
    },
    {
      "Step": 109,
      "brisk-pond-1 - train/loss": 0.7903,
      "brisk-pond-1 - train/loss__MIN": 0.7903,
      "brisk-pond-1 - train/loss__MAX": 0.7903
    },
    {
      "Step": 110,
      "brisk-pond-1 - train/loss": 0.8312,
      "brisk-pond-1 - train/loss__MIN": 0.8312,
      "brisk-pond-1 - train/loss__MAX": 0.8312
    },
    {
      "Step": 111,
      "brisk-pond-1 - train/loss": 0.8355,
      "brisk-pond-1 - train/loss__MIN": 0.8355,
      "brisk-pond-1 - train/loss__MAX": 0.8355
    },
    {
      "Step": 112,
      "brisk-pond-1 - train/loss": 0.8175,
      "brisk-pond-1 - train/loss__MIN": 0.8175,
      "brisk-pond-1 - train/loss__MAX": 0.8175
    },
    {
      "Step": 113,
      "brisk-pond-1 - train/loss": 0.8337,
      "brisk-pond-1 - train/loss__MIN": 0.8337,
      "brisk-pond-1 - train/loss__MAX": 0.8337
    },
    {
      "Step": 114,
      "brisk-pond-1 - train/loss": 0.8533,
      "brisk-pond-1 - train/loss__MIN": 0.8533,
      "brisk-pond-1 - train/loss__MAX": 0.8533
    },
    {
      "Step": 115,
      "brisk-pond-1 - train/loss": 0.8477,
      "brisk-pond-1 - train/loss__MIN": 0.8477,
      "brisk-pond-1 - train/loss__MAX": 0.8477
    },
    {
      "Step": 116,
      "brisk-pond-1 - train/loss": 0.8588,
      "brisk-pond-1 - train/loss__MIN": 0.8588,
      "brisk-pond-1 - train/loss__MAX": 0.8588
    },
    {
      "Step": 117,
      "brisk-pond-1 - train/loss": 0.8353,
      "brisk-pond-1 - train/loss__MIN": 0.8353,
      "brisk-pond-1 - train/loss__MAX": 0.8353
    },
    {
      "Step": 118,
      "brisk-pond-1 - train/loss": 0.91,
      "brisk-pond-1 - train/loss__MIN": 0.91,
      "brisk-pond-1 - train/loss__MAX": 0.91
    },
    {
      "Step": 119,
      "brisk-pond-1 - train/loss": 0.8533,
      "brisk-pond-1 - train/loss__MIN": 0.8533,
      "brisk-pond-1 - train/loss__MAX": 0.8533
    },
    {
      "Step": 120,
      "brisk-pond-1 - train/loss": 0.8002,
      "brisk-pond-1 - train/loss__MIN": 0.8002,
      "brisk-pond-1 - train/loss__MAX": 0.8002
    },
    {
      "Step": 121,
      "brisk-pond-1 - train/loss": 0.8464,
      "brisk-pond-1 - train/loss__MIN": 0.8464,
      "brisk-pond-1 - train/loss__MAX": 0.8464
    },
    {
      "Step": 122,
      "brisk-pond-1 - train/loss": 0.8495,
      "brisk-pond-1 - train/loss__MIN": 0.8495,
      "brisk-pond-1 - train/loss__MAX": 0.8495
    },
    {
      "Step": 123,
      "brisk-pond-1 - train/loss": 0.8456,
      "brisk-pond-1 - train/loss__MIN": 0.8456,
      "brisk-pond-1 - train/loss__MAX": 0.8456
    },
    {
      "Step": 124,
      "brisk-pond-1 - train/loss": 0.8233,
      "brisk-pond-1 - train/loss__MIN": 0.8233,
      "brisk-pond-1 - train/loss__MAX": 0.8233
    },
    {
      "Step": 125,
      "brisk-pond-1 - train/loss": 0.8433,
      "brisk-pond-1 - train/loss__MIN": 0.8433,
      "brisk-pond-1 - train/loss__MAX": 0.8433
    },
    {
      "Step": 126,
      "brisk-pond-1 - train/loss": 0.8309,
      "brisk-pond-1 - train/loss__MIN": 0.8309,
      "brisk-pond-1 - train/loss__MAX": 0.8309
    },
    {
      "Step": 127,
      "brisk-pond-1 - train/loss": 0.8525,
      "brisk-pond-1 - train/loss__MIN": 0.8525,
      "brisk-pond-1 - train/loss__MAX": 0.8525
    },
    {
      "Step": 128,
      "brisk-pond-1 - train/loss": 0.8147,
      "brisk-pond-1 - train/loss__MIN": 0.8147,
      "brisk-pond-1 - train/loss__MAX": 0.8147
    },
    {
      "Step": 129,
      "brisk-pond-1 - train/loss": 0.8469,
      "brisk-pond-1 - train/loss__MIN": 0.8469,
      "brisk-pond-1 - train/loss__MAX": 0.8469
    },
    {
      "Step": 130,
      "brisk-pond-1 - train/loss": 0.868,
      "brisk-pond-1 - train/loss__MIN": 0.868,
      "brisk-pond-1 - train/loss__MAX": 0.868
    },
    {
      "Step": 131,
      "brisk-pond-1 - train/loss": 0.8316,
      "brisk-pond-1 - train/loss__MIN": 0.8316,
      "brisk-pond-1 - train/loss__MAX": 0.8316
    },
    {
      "Step": 132,
      "brisk-pond-1 - train/loss": 0.8718,
      "brisk-pond-1 - train/loss__MIN": 0.8718,
      "brisk-pond-1 - train/loss__MAX": 0.8718
    },
    {
      "Step": 133,
      "brisk-pond-1 - train/loss": 0.8205,
      "brisk-pond-1 - train/loss__MIN": 0.8205,
      "brisk-pond-1 - train/loss__MAX": 0.8205
    },
    {
      "Step": 134,
      "brisk-pond-1 - train/loss": 0.8111,
      "brisk-pond-1 - train/loss__MIN": 0.8111,
      "brisk-pond-1 - train/loss__MAX": 0.8111
    },
    {
      "Step": 135,
      "brisk-pond-1 - train/loss": 0.7946,
      "brisk-pond-1 - train/loss__MIN": 0.7946,
      "brisk-pond-1 - train/loss__MAX": 0.7946
    },
    {
      "Step": 136,
      "brisk-pond-1 - train/loss": 0.8318,
      "brisk-pond-1 - train/loss__MIN": 0.8318,
      "brisk-pond-1 - train/loss__MAX": 0.8318
    },
    {
      "Step": 137,
      "brisk-pond-1 - train/loss": 0.8421,
      "brisk-pond-1 - train/loss__MIN": 0.8421,
      "brisk-pond-1 - train/loss__MAX": 0.8421
    },
    {
      "Step": 138,
      "brisk-pond-1 - train/loss": 0.8016,
      "brisk-pond-1 - train/loss__MIN": 0.8016,
      "brisk-pond-1 - train/loss__MAX": 0.8016
    },
    {
      "Step": 139,
      "brisk-pond-1 - train/loss": 0.8176,
      "brisk-pond-1 - train/loss__MIN": 0.8176,
      "brisk-pond-1 - train/loss__MAX": 0.8176
    },
    {
      "Step": 140,
      "brisk-pond-1 - train/loss": 0.8186,
      "brisk-pond-1 - train/loss__MIN": 0.8186,
      "brisk-pond-1 - train/loss__MAX": 0.8186
    },
    {
      "Step": 141,
      "brisk-pond-1 - train/loss": 0.872,
      "brisk-pond-1 - train/loss__MIN": 0.872,
      "brisk-pond-1 - train/loss__MAX": 0.872
    },
    {
      "Step": 142,
      "brisk-pond-1 - train/loss": 0.8564,
      "brisk-pond-1 - train/loss__MIN": 0.8564,
      "brisk-pond-1 - train/loss__MAX": 0.8564
    },
    {
      "Step": 143,
      "brisk-pond-1 - train/loss": 0.8376,
      "brisk-pond-1 - train/loss__MIN": 0.8376,
      "brisk-pond-1 - train/loss__MAX": 0.8376
    },
    {
      "Step": 144,
      "brisk-pond-1 - train/loss": 0.8028,
      "brisk-pond-1 - train/loss__MIN": 0.8028,
      "brisk-pond-1 - train/loss__MAX": 0.8028
    },
    {
      "Step": 145,
      "brisk-pond-1 - train/loss": 0.8312,
      "brisk-pond-1 - train/loss__MIN": 0.8312,
      "brisk-pond-1 - train/loss__MAX": 0.8312
    },
    {
      "Step": 146,
      "brisk-pond-1 - train/loss": 0.8432,
      "brisk-pond-1 - train/loss__MIN": 0.8432,
      "brisk-pond-1 - train/loss__MAX": 0.8432
    },
    {
      "Step": 147,
      "brisk-pond-1 - train/loss": 0.8149,
      "brisk-pond-1 - train/loss__MIN": 0.8149,
      "brisk-pond-1 - train/loss__MAX": 0.8149
    },
    {
      "Step": 148,
      "brisk-pond-1 - train/loss": 0.8177,
      "brisk-pond-1 - train/loss__MIN": 0.8177,
      "brisk-pond-1 - train/loss__MAX": 0.8177
    },
    {
      "Step": 149,
      "brisk-pond-1 - train/loss": 0.8573,
      "brisk-pond-1 - train/loss__MIN": 0.8573,
      "brisk-pond-1 - train/loss__MAX": 0.8573
    },
    {
      "Step": 150,
      "brisk-pond-1 - train/loss": 0.8003,
      "brisk-pond-1 - train/loss__MIN": 0.8003,
      "brisk-pond-1 - train/loss__MAX": 0.8003
    },
    {
      "Step": 151,
      "brisk-pond-1 - train/loss": 0.8322,
      "brisk-pond-1 - train/loss__MIN": 0.8322,
      "brisk-pond-1 - train/loss__MAX": 0.8322
    },
    {
      "Step": 152,
      "brisk-pond-1 - train/loss": 0.8409,
      "brisk-pond-1 - train/loss__MIN": 0.8409,
      "brisk-pond-1 - train/loss__MAX": 0.8409
    },
    {
      "Step": 153,
      "brisk-pond-1 - train/loss": 0.8739,
      "brisk-pond-1 - train/loss__MIN": 0.8739,
      "brisk-pond-1 - train/loss__MAX": 0.8739
    },
    {
      "Step": 154,
      "brisk-pond-1 - train/loss": 0.8575,
      "brisk-pond-1 - train/loss__MIN": 0.8575,
      "brisk-pond-1 - train/loss__MAX": 0.8575
    },
    {
      "Step": 155,
      "brisk-pond-1 - train/loss": 0.7733,
      "brisk-pond-1 - train/loss__MIN": 0.7733,
      "brisk-pond-1 - train/loss__MAX": 0.7733
    },
    {
      "Step": 156,
      "brisk-pond-1 - train/loss": 0.8063,
      "brisk-pond-1 - train/loss__MIN": 0.8063,
      "brisk-pond-1 - train/loss__MAX": 0.8063
    },
    {
      "Step": 157,
      "brisk-pond-1 - train/loss": 0.841,
      "brisk-pond-1 - train/loss__MIN": 0.841,
      "brisk-pond-1 - train/loss__MAX": 0.841
    },
    {
      "Step": 158,
      "brisk-pond-1 - train/loss": 0.7848,
      "brisk-pond-1 - train/loss__MIN": 0.7848,
      "brisk-pond-1 - train/loss__MAX": 0.7848
    },
    {
      "Step": 159,
      "brisk-pond-1 - train/loss": 0.8635,
      "brisk-pond-1 - train/loss__MIN": 0.8635,
      "brisk-pond-1 - train/loss__MAX": 0.8635
    },
    {
      "Step": 160,
      "brisk-pond-1 - train/loss": 0.858,
      "brisk-pond-1 - train/loss__MIN": 0.858,
      "brisk-pond-1 - train/loss__MAX": 0.858
    },
    {
      "Step": 161,
      "brisk-pond-1 - train/loss": 0.8488,
      "brisk-pond-1 - train/loss__MIN": 0.8488,
      "brisk-pond-1 - train/loss__MAX": 0.8488
    },
    {
      "Step": 162,
      "brisk-pond-1 - train/loss": 0.8177,
      "brisk-pond-1 - train/loss__MIN": 0.8177,
      "brisk-pond-1 - train/loss__MAX": 0.8177
    },
    {
      "Step": 163,
      "brisk-pond-1 - train/loss": 0.8306,
      "brisk-pond-1 - train/loss__MIN": 0.8306,
      "brisk-pond-1 - train/loss__MAX": 0.8306
    },
    {
      "Step": 164,
      "brisk-pond-1 - train/loss": 0.8449,
      "brisk-pond-1 - train/loss__MIN": 0.8449,
      "brisk-pond-1 - train/loss__MAX": 0.8449
    },
    {
      "Step": 165,
      "brisk-pond-1 - train/loss": 0.8478,
      "brisk-pond-1 - train/loss__MIN": 0.8478,
      "brisk-pond-1 - train/loss__MAX": 0.8478
    },
    {
      "Step": 166,
      "brisk-pond-1 - train/loss": 0.8769,
      "brisk-pond-1 - train/loss__MIN": 0.8769,
      "brisk-pond-1 - train/loss__MAX": 0.8769
    },
    {
      "Step": 167,
      "brisk-pond-1 - train/loss": 0.854,
      "brisk-pond-1 - train/loss__MIN": 0.854,
      "brisk-pond-1 - train/loss__MAX": 0.854
    },
    {
      "Step": 168,
      "brisk-pond-1 - train/loss": 0.7913,
      "brisk-pond-1 - train/loss__MIN": 0.7913,
      "brisk-pond-1 - train/loss__MAX": 0.7913
    },
    {
      "Step": 169,
      "brisk-pond-1 - train/loss": 0.8308,
      "brisk-pond-1 - train/loss__MIN": 0.8308,
      "brisk-pond-1 - train/loss__MAX": 0.8308
    },
    {
      "Step": 170,
      "brisk-pond-1 - train/loss": 0.8099,
      "brisk-pond-1 - train/loss__MIN": 0.8099,
      "brisk-pond-1 - train/loss__MAX": 0.8099
    },
    {
      "Step": 171,
      "brisk-pond-1 - train/loss": 0.8339,
      "brisk-pond-1 - train/loss__MIN": 0.8339,
      "brisk-pond-1 - train/loss__MAX": 0.8339
    },
    {
      "Step": 172,
      "brisk-pond-1 - train/loss": 0.8747,
      "brisk-pond-1 - train/loss__MIN": 0.8747,
      "brisk-pond-1 - train/loss__MAX": 0.8747
    },
    {
      "Step": 173,
      "brisk-pond-1 - train/loss": 0.8313,
      "brisk-pond-1 - train/loss__MIN": 0.8313,
      "brisk-pond-1 - train/loss__MAX": 0.8313
    },
    {
      "Step": 174,
      "brisk-pond-1 - train/loss": 0.8648,
      "brisk-pond-1 - train/loss__MIN": 0.8648,
      "brisk-pond-1 - train/loss__MAX": 0.8648
    },
    {
      "Step": 175,
      "brisk-pond-1 - train/loss": 0.8272,
      "brisk-pond-1 - train/loss__MIN": 0.8272,
      "brisk-pond-1 - train/loss__MAX": 0.8272
    },
    {
      "Step": 176,
      "brisk-pond-1 - train/loss": 0.8154,
      "brisk-pond-1 - train/loss__MIN": 0.8154,
      "brisk-pond-1 - train/loss__MAX": 0.8154
    },
    {
      "Step": 177,
      "brisk-pond-1 - train/loss": 0.8441,
      "brisk-pond-1 - train/loss__MIN": 0.8441,
      "brisk-pond-1 - train/loss__MAX": 0.8441
    },
    {
      "Step": 178,
      "brisk-pond-1 - train/loss": 0.8341,
      "brisk-pond-1 - train/loss__MIN": 0.8341,
      "brisk-pond-1 - train/loss__MAX": 0.8341
    },
    {
      "Step": 179,
      "brisk-pond-1 - train/loss": 0.7459,
      "brisk-pond-1 - train/loss__MIN": 0.7459,
      "brisk-pond-1 - train/loss__MAX": 0.7459
    },
    {
      "Step": 180,
      "brisk-pond-1 - train/loss": 0.8291,
      "brisk-pond-1 - train/loss__MIN": 0.8291,
      "brisk-pond-1 - train/loss__MAX": 0.8291
    },
    {
      "Step": 181,
      "brisk-pond-1 - train/loss": 0.8279,
      "brisk-pond-1 - train/loss__MIN": 0.8279,
      "brisk-pond-1 - train/loss__MAX": 0.8279
    },
    {
      "Step": 182,
      "brisk-pond-1 - train/loss": 0.8841,
      "brisk-pond-1 - train/loss__MIN": 0.8841,
      "brisk-pond-1 - train/loss__MAX": 0.8841
    },
    {
      "Step": 183,
      "brisk-pond-1 - train/loss": 0.8222,
      "brisk-pond-1 - train/loss__MIN": 0.8222,
      "brisk-pond-1 - train/loss__MAX": 0.8222
    },
    {
      "Step": 184,
      "brisk-pond-1 - train/loss": 0.8105,
      "brisk-pond-1 - train/loss__MIN": 0.8105,
      "brisk-pond-1 - train/loss__MAX": 0.8105
    },
    {
      "Step": 185,
      "brisk-pond-1 - train/loss": 0.8592,
      "brisk-pond-1 - train/loss__MIN": 0.8592,
      "brisk-pond-1 - train/loss__MAX": 0.8592
    },
    {
      "Step": 186,
      "brisk-pond-1 - train/loss": 0.8637,
      "brisk-pond-1 - train/loss__MIN": 0.8637,
      "brisk-pond-1 - train/loss__MAX": 0.8637
    },
    {
      "Step": 187,
      "brisk-pond-1 - train/loss": 0.7842,
      "brisk-pond-1 - train/loss__MIN": 0.7842,
      "brisk-pond-1 - train/loss__MAX": 0.7842
    },
    {
      "Step": 188,
      "brisk-pond-1 - train/loss": 0.8246,
      "brisk-pond-1 - train/loss__MIN": 0.8246,
      "brisk-pond-1 - train/loss__MAX": 0.8246
    },
    {
      "Step": 189,
      "brisk-pond-1 - train/loss": 0.754,
      "brisk-pond-1 - train/loss__MIN": 0.754,
      "brisk-pond-1 - train/loss__MAX": 0.754
    },
    {
      "Step": 190,
      "brisk-pond-1 - train/loss": 0.82,
      "brisk-pond-1 - train/loss__MIN": 0.82,
      "brisk-pond-1 - train/loss__MAX": 0.82
    },
    {
      "Step": 191,
      "brisk-pond-1 - train/loss": 0.7668,
      "brisk-pond-1 - train/loss__MIN": 0.7668,
      "brisk-pond-1 - train/loss__MAX": 0.7668
    },
    {
      "Step": 192,
      "brisk-pond-1 - train/loss": 0.6896,
      "brisk-pond-1 - train/loss__MIN": 0.6896,
      "brisk-pond-1 - train/loss__MAX": 0.6896
    },
    {
      "Step": 193,
      "brisk-pond-1 - train/loss": 0.8171,
      "brisk-pond-1 - train/loss__MIN": 0.8171,
      "brisk-pond-1 - train/loss__MAX": 0.8171
    },
    {
      "Step": 194,
      "brisk-pond-1 - train/loss": 0.8556,
      "brisk-pond-1 - train/loss__MIN": 0.8556,
      "brisk-pond-1 - train/loss__MAX": 0.8556
    },
    {
      "Step": 195,
      "brisk-pond-1 - train/loss": 0.7998,
      "brisk-pond-1 - train/loss__MIN": 0.7998,
      "brisk-pond-1 - train/loss__MAX": 0.7998
    },
    {
      "Step": 196,
      "brisk-pond-1 - train/loss": 0.7945,
      "brisk-pond-1 - train/loss__MIN": 0.7945,
      "brisk-pond-1 - train/loss__MAX": 0.7945
    },
    {
      "Step": 197,
      "brisk-pond-1 - train/loss": 0.8122,
      "brisk-pond-1 - train/loss__MIN": 0.8122,
      "brisk-pond-1 - train/loss__MAX": 0.8122
    },
    {
      "Step": 198,
      "brisk-pond-1 - train/loss": 0.739,
      "brisk-pond-1 - train/loss__MIN": 0.739,
      "brisk-pond-1 - train/loss__MAX": 0.739
    },
    {
      "Step": 199,
      "brisk-pond-1 - train/loss": 0.8317,
      "brisk-pond-1 - train/loss__MIN": 0.8317,
      "brisk-pond-1 - train/loss__MAX": 0.8317
    },
    {
      "Step": 201,
      "brisk-pond-1 - train/loss": 0.8377,
      "brisk-pond-1 - train/loss__MIN": 0.8377,
      "brisk-pond-1 - train/loss__MAX": 0.8377
    },
    {
      "Step": 202,
      "brisk-pond-1 - train/loss": 0.8125,
      "brisk-pond-1 - train/loss__MIN": 0.8125,
      "brisk-pond-1 - train/loss__MAX": 0.8125
    },
    {
      "Step": 203,
      "brisk-pond-1 - train/loss": 0.8328,
      "brisk-pond-1 - train/loss__MIN": 0.8328,
      "brisk-pond-1 - train/loss__MAX": 0.8328
    },
    {
      "Step": 204,
      "brisk-pond-1 - train/loss": 0.8266,
      "brisk-pond-1 - train/loss__MIN": 0.8266,
      "brisk-pond-1 - train/loss__MAX": 0.8266
    },
    {
      "Step": 205,
      "brisk-pond-1 - train/loss": 0.7711,
      "brisk-pond-1 - train/loss__MIN": 0.7711,
      "brisk-pond-1 - train/loss__MAX": 0.7711
    },
    {
      "Step": 206,
      "brisk-pond-1 - train/loss": 0.8,
      "brisk-pond-1 - train/loss__MIN": 0.8,
      "brisk-pond-1 - train/loss__MAX": 0.8
    },
    {
      "Step": 207,
      "brisk-pond-1 - train/loss": 0.8064,
      "brisk-pond-1 - train/loss__MIN": 0.8064,
      "brisk-pond-1 - train/loss__MAX": 0.8064
    },
    {
      "Step": 208,
      "brisk-pond-1 - train/loss": 0.8251,
      "brisk-pond-1 - train/loss__MIN": 0.8251,
      "brisk-pond-1 - train/loss__MAX": 0.8251
    },
    {
      "Step": 209,
      "brisk-pond-1 - train/loss": 0.7359,
      "brisk-pond-1 - train/loss__MIN": 0.7359,
      "brisk-pond-1 - train/loss__MAX": 0.7359
    },
    {
      "Step": 210,
      "brisk-pond-1 - train/loss": 0.8351,
      "brisk-pond-1 - train/loss__MIN": 0.8351,
      "brisk-pond-1 - train/loss__MAX": 0.8351
    },
    {
      "Step": 211,
      "brisk-pond-1 - train/loss": 0.7983,
      "brisk-pond-1 - train/loss__MIN": 0.7983,
      "brisk-pond-1 - train/loss__MAX": 0.7983
    },
    {
      "Step": 212,
      "brisk-pond-1 - train/loss": 0.8397,
      "brisk-pond-1 - train/loss__MIN": 0.8397,
      "brisk-pond-1 - train/loss__MAX": 0.8397
    },
    {
      "Step": 213,
      "brisk-pond-1 - train/loss": 0.781,
      "brisk-pond-1 - train/loss__MIN": 0.781,
      "brisk-pond-1 - train/loss__MAX": 0.781
    },
    {
      "Step": 214,
      "brisk-pond-1 - train/loss": 0.874,
      "brisk-pond-1 - train/loss__MIN": 0.874,
      "brisk-pond-1 - train/loss__MAX": 0.874
    },
    {
      "Step": 215,
      "brisk-pond-1 - train/loss": 0.8266,
      "brisk-pond-1 - train/loss__MIN": 0.8266,
      "brisk-pond-1 - train/loss__MAX": 0.8266
    },
    {
      "Step": 216,
      "brisk-pond-1 - train/loss": 0.8218,
      "brisk-pond-1 - train/loss__MIN": 0.8218,
      "brisk-pond-1 - train/loss__MAX": 0.8218
    },
    {
      "Step": 217,
      "brisk-pond-1 - train/loss": 0.7839,
      "brisk-pond-1 - train/loss__MIN": 0.7839,
      "brisk-pond-1 - train/loss__MAX": 0.7839
    },
    {
      "Step": 218,
      "brisk-pond-1 - train/loss": 0.8506,
      "brisk-pond-1 - train/loss__MIN": 0.8506,
      "brisk-pond-1 - train/loss__MAX": 0.8506
    },
    {
      "Step": 219,
      "brisk-pond-1 - train/loss": 0.822,
      "brisk-pond-1 - train/loss__MIN": 0.822,
      "brisk-pond-1 - train/loss__MAX": 0.822
    },
    {
      "Step": 220,
      "brisk-pond-1 - train/loss": 0.7697,
      "brisk-pond-1 - train/loss__MIN": 0.7697,
      "brisk-pond-1 - train/loss__MAX": 0.7697
    },
    {
      "Step": 221,
      "brisk-pond-1 - train/loss": 0.8525,
      "brisk-pond-1 - train/loss__MIN": 0.8525,
      "brisk-pond-1 - train/loss__MAX": 0.8525
    },
    {
      "Step": 222,
      "brisk-pond-1 - train/loss": 0.8236,
      "brisk-pond-1 - train/loss__MIN": 0.8236,
      "brisk-pond-1 - train/loss__MAX": 0.8236
    },
    {
      "Step": 223,
      "brisk-pond-1 - train/loss": 0.7749,
      "brisk-pond-1 - train/loss__MIN": 0.7749,
      "brisk-pond-1 - train/loss__MAX": 0.7749
    },
    {
      "Step": 224,
      "brisk-pond-1 - train/loss": 0.8339,
      "brisk-pond-1 - train/loss__MIN": 0.8339,
      "brisk-pond-1 - train/loss__MAX": 0.8339
    },
    {
      "Step": 225,
      "brisk-pond-1 - train/loss": 0.8019,
      "brisk-pond-1 - train/loss__MIN": 0.8019,
      "brisk-pond-1 - train/loss__MAX": 0.8019
    },
    {
      "Step": 226,
      "brisk-pond-1 - train/loss": 0.8069,
      "brisk-pond-1 - train/loss__MIN": 0.8069,
      "brisk-pond-1 - train/loss__MAX": 0.8069
    },
    {
      "Step": 227,
      "brisk-pond-1 - train/loss": 0.7617,
      "brisk-pond-1 - train/loss__MIN": 0.7617,
      "brisk-pond-1 - train/loss__MAX": 0.7617
    },
    {
      "Step": 228,
      "brisk-pond-1 - train/loss": 0.8271,
      "brisk-pond-1 - train/loss__MIN": 0.8271,
      "brisk-pond-1 - train/loss__MAX": 0.8271
    },
    {
      "Step": 229,
      "brisk-pond-1 - train/loss": 0.7921,
      "brisk-pond-1 - train/loss__MIN": 0.7921,
      "brisk-pond-1 - train/loss__MAX": 0.7921
    },
    {
      "Step": 230,
      "brisk-pond-1 - train/loss": 0.894,
      "brisk-pond-1 - train/loss__MIN": 0.894,
      "brisk-pond-1 - train/loss__MAX": 0.894
    },
    {
      "Step": 231,
      "brisk-pond-1 - train/loss": 0.7821,
      "brisk-pond-1 - train/loss__MIN": 0.7821,
      "brisk-pond-1 - train/loss__MAX": 0.7821
    },
    {
      "Step": 232,
      "brisk-pond-1 - train/loss": 0.8142,
      "brisk-pond-1 - train/loss__MIN": 0.8142,
      "brisk-pond-1 - train/loss__MAX": 0.8142
    },
    {
      "Step": 233,
      "brisk-pond-1 - train/loss": 0.7653,
      "brisk-pond-1 - train/loss__MIN": 0.7653,
      "brisk-pond-1 - train/loss__MAX": 0.7653
    },
    {
      "Step": 234,
      "brisk-pond-1 - train/loss": 0.769,
      "brisk-pond-1 - train/loss__MIN": 0.769,
      "brisk-pond-1 - train/loss__MAX": 0.769
    },
    {
      "Step": 235,
      "brisk-pond-1 - train/loss": 0.8624,
      "brisk-pond-1 - train/loss__MIN": 0.8624,
      "brisk-pond-1 - train/loss__MAX": 0.8624
    },
    {
      "Step": 236,
      "brisk-pond-1 - train/loss": 0.7935,
      "brisk-pond-1 - train/loss__MIN": 0.7935,
      "brisk-pond-1 - train/loss__MAX": 0.7935
    },
    {
      "Step": 237,
      "brisk-pond-1 - train/loss": 0.7876,
      "brisk-pond-1 - train/loss__MIN": 0.7876,
      "brisk-pond-1 - train/loss__MAX": 0.7876
    },
    {
      "Step": 238,
      "brisk-pond-1 - train/loss": 0.7972,
      "brisk-pond-1 - train/loss__MIN": 0.7972,
      "brisk-pond-1 - train/loss__MAX": 0.7972
    },
    {
      "Step": 239,
      "brisk-pond-1 - train/loss": 0.7867,
      "brisk-pond-1 - train/loss__MIN": 0.7867,
      "brisk-pond-1 - train/loss__MAX": 0.7867
    },
    {
      "Step": 240,
      "brisk-pond-1 - train/loss": 0.8002,
      "brisk-pond-1 - train/loss__MIN": 0.8002,
      "brisk-pond-1 - train/loss__MAX": 0.8002
    },
    {
      "Step": 241,
      "brisk-pond-1 - train/loss": 0.828,
      "brisk-pond-1 - train/loss__MIN": 0.828,
      "brisk-pond-1 - train/loss__MAX": 0.828
    },
    {
      "Step": 242,
      "brisk-pond-1 - train/loss": 0.733,
      "brisk-pond-1 - train/loss__MIN": 0.733,
      "brisk-pond-1 - train/loss__MAX": 0.733
    },
    {
      "Step": 243,
      "brisk-pond-1 - train/loss": 0.8175,
      "brisk-pond-1 - train/loss__MIN": 0.8175,
      "brisk-pond-1 - train/loss__MAX": 0.8175
    },
    {
      "Step": 244,
      "brisk-pond-1 - train/loss": 0.8162,
      "brisk-pond-1 - train/loss__MIN": 0.8162,
      "brisk-pond-1 - train/loss__MAX": 0.8162
    },
    {
      "Step": 245,
      "brisk-pond-1 - train/loss": 0.8331,
      "brisk-pond-1 - train/loss__MIN": 0.8331,
      "brisk-pond-1 - train/loss__MAX": 0.8331
    },
    {
      "Step": 246,
      "brisk-pond-1 - train/loss": 0.7902,
      "brisk-pond-1 - train/loss__MIN": 0.7902,
      "brisk-pond-1 - train/loss__MAX": 0.7902
    },
    {
      "Step": 247,
      "brisk-pond-1 - train/loss": 0.7709,
      "brisk-pond-1 - train/loss__MIN": 0.7709,
      "brisk-pond-1 - train/loss__MAX": 0.7709
    },
    {
      "Step": 248,
      "brisk-pond-1 - train/loss": 0.7963,
      "brisk-pond-1 - train/loss__MIN": 0.7963,
      "brisk-pond-1 - train/loss__MAX": 0.7963
    },
    {
      "Step": 249,
      "brisk-pond-1 - train/loss": 0.7752,
      "brisk-pond-1 - train/loss__MIN": 0.7752,
      "brisk-pond-1 - train/loss__MAX": 0.7752
    },
    {
      "Step": 250,
      "brisk-pond-1 - train/loss": 0.8025,
      "brisk-pond-1 - train/loss__MIN": 0.8025,
      "brisk-pond-1 - train/loss__MAX": 0.8025
    },
    {
      "Step": 251,
      "brisk-pond-1 - train/loss": 0.8061,
      "brisk-pond-1 - train/loss__MIN": 0.8061,
      "brisk-pond-1 - train/loss__MAX": 0.8061
    },
    {
      "Step": 252,
      "brisk-pond-1 - train/loss": 0.7596,
      "brisk-pond-1 - train/loss__MIN": 0.7596,
      "brisk-pond-1 - train/loss__MAX": 0.7596
    },
    {
      "Step": 253,
      "brisk-pond-1 - train/loss": 0.7838,
      "brisk-pond-1 - train/loss__MIN": 0.7838,
      "brisk-pond-1 - train/loss__MAX": 0.7838
    },
    {
      "Step": 254,
      "brisk-pond-1 - train/loss": 0.8077,
      "brisk-pond-1 - train/loss__MIN": 0.8077,
      "brisk-pond-1 - train/loss__MAX": 0.8077
    },
    {
      "Step": 255,
      "brisk-pond-1 - train/loss": 0.8406,
      "brisk-pond-1 - train/loss__MIN": 0.8406,
      "brisk-pond-1 - train/loss__MAX": 0.8406
    },
    {
      "Step": 256,
      "brisk-pond-1 - train/loss": 0.807,
      "brisk-pond-1 - train/loss__MIN": 0.807,
      "brisk-pond-1 - train/loss__MAX": 0.807
    },
    {
      "Step": 257,
      "brisk-pond-1 - train/loss": 0.7234,
      "brisk-pond-1 - train/loss__MIN": 0.7234,
      "brisk-pond-1 - train/loss__MAX": 0.7234
    },
    {
      "Step": 258,
      "brisk-pond-1 - train/loss": 0.8588,
      "brisk-pond-1 - train/loss__MIN": 0.8588,
      "brisk-pond-1 - train/loss__MAX": 0.8588
    },
    {
      "Step": 259,
      "brisk-pond-1 - train/loss": 0.81,
      "brisk-pond-1 - train/loss__MIN": 0.81,
      "brisk-pond-1 - train/loss__MAX": 0.81
    },
    {
      "Step": 260,
      "brisk-pond-1 - train/loss": 0.7997,
      "brisk-pond-1 - train/loss__MIN": 0.7997,
      "brisk-pond-1 - train/loss__MAX": 0.7997
    },
    {
      "Step": 261,
      "brisk-pond-1 - train/loss": 0.7895,
      "brisk-pond-1 - train/loss__MIN": 0.7895,
      "brisk-pond-1 - train/loss__MAX": 0.7895
    },
    {
      "Step": 262,
      "brisk-pond-1 - train/loss": 0.8097,
      "brisk-pond-1 - train/loss__MIN": 0.8097,
      "brisk-pond-1 - train/loss__MAX": 0.8097
    },
    {
      "Step": 263,
      "brisk-pond-1 - train/loss": 0.7503,
      "brisk-pond-1 - train/loss__MIN": 0.7503,
      "brisk-pond-1 - train/loss__MAX": 0.7503
    },
    {
      "Step": 264,
      "brisk-pond-1 - train/loss": 0.7362,
      "brisk-pond-1 - train/loss__MIN": 0.7362,
      "brisk-pond-1 - train/loss__MAX": 0.7362
    },
    {
      "Step": 265,
      "brisk-pond-1 - train/loss": 0.7595,
      "brisk-pond-1 - train/loss__MIN": 0.7595,
      "brisk-pond-1 - train/loss__MAX": 0.7595
    },
    {
      "Step": 266,
      "brisk-pond-1 - train/loss": 0.7824,
      "brisk-pond-1 - train/loss__MIN": 0.7824,
      "brisk-pond-1 - train/loss__MAX": 0.7824
    },
    {
      "Step": 267,
      "brisk-pond-1 - train/loss": 0.8398,
      "brisk-pond-1 - train/loss__MIN": 0.8398,
      "brisk-pond-1 - train/loss__MAX": 0.8398
    },
    {
      "Step": 268,
      "brisk-pond-1 - train/loss": 0.7381,
      "brisk-pond-1 - train/loss__MIN": 0.7381,
      "brisk-pond-1 - train/loss__MAX": 0.7381
    },
    {
      "Step": 269,
      "brisk-pond-1 - train/loss": 0.7585,
      "brisk-pond-1 - train/loss__MIN": 0.7585,
      "brisk-pond-1 - train/loss__MAX": 0.7585
    },
    {
      "Step": 270,
      "brisk-pond-1 - train/loss": 0.8026,
      "brisk-pond-1 - train/loss__MIN": 0.8026,
      "brisk-pond-1 - train/loss__MAX": 0.8026
    },
    {
      "Step": 271,
      "brisk-pond-1 - train/loss": 0.8125,
      "brisk-pond-1 - train/loss__MIN": 0.8125,
      "brisk-pond-1 - train/loss__MAX": 0.8125
    },
    {
      "Step": 272,
      "brisk-pond-1 - train/loss": 0.7347,
      "brisk-pond-1 - train/loss__MIN": 0.7347,
      "brisk-pond-1 - train/loss__MAX": 0.7347
    },
    {
      "Step": 273,
      "brisk-pond-1 - train/loss": 0.8255,
      "brisk-pond-1 - train/loss__MIN": 0.8255,
      "brisk-pond-1 - train/loss__MAX": 0.8255
    },
    {
      "Step": 274,
      "brisk-pond-1 - train/loss": 0.7541,
      "brisk-pond-1 - train/loss__MIN": 0.7541,
      "brisk-pond-1 - train/loss__MAX": 0.7541
    },
    {
      "Step": 275,
      "brisk-pond-1 - train/loss": 0.842,
      "brisk-pond-1 - train/loss__MIN": 0.842,
      "brisk-pond-1 - train/loss__MAX": 0.842
    },
    {
      "Step": 276,
      "brisk-pond-1 - train/loss": 0.805,
      "brisk-pond-1 - train/loss__MIN": 0.805,
      "brisk-pond-1 - train/loss__MAX": 0.805
    },
    {
      "Step": 277,
      "brisk-pond-1 - train/loss": 0.7958,
      "brisk-pond-1 - train/loss__MIN": 0.7958,
      "brisk-pond-1 - train/loss__MAX": 0.7958
    },
    {
      "Step": 278,
      "brisk-pond-1 - train/loss": 0.8014,
      "brisk-pond-1 - train/loss__MIN": 0.8014,
      "brisk-pond-1 - train/loss__MAX": 0.8014
    },
    {
      "Step": 279,
      "brisk-pond-1 - train/loss": 0.8404,
      "brisk-pond-1 - train/loss__MIN": 0.8404,
      "brisk-pond-1 - train/loss__MAX": 0.8404
    },
    {
      "Step": 280,
      "brisk-pond-1 - train/loss": 0.7912,
      "brisk-pond-1 - train/loss__MIN": 0.7912,
      "brisk-pond-1 - train/loss__MAX": 0.7912
    },
    {
      "Step": 281,
      "brisk-pond-1 - train/loss": 0.8099,
      "brisk-pond-1 - train/loss__MIN": 0.8099,
      "brisk-pond-1 - train/loss__MAX": 0.8099
    },
    {
      "Step": 282,
      "brisk-pond-1 - train/loss": 0.82,
      "brisk-pond-1 - train/loss__MIN": 0.82,
      "brisk-pond-1 - train/loss__MAX": 0.82
    },
    {
      "Step": 283,
      "brisk-pond-1 - train/loss": 0.804,
      "brisk-pond-1 - train/loss__MIN": 0.804,
      "brisk-pond-1 - train/loss__MAX": 0.804
    },
    {
      "Step": 284,
      "brisk-pond-1 - train/loss": 0.802,
      "brisk-pond-1 - train/loss__MIN": 0.802,
      "brisk-pond-1 - train/loss__MAX": 0.802
    },
    {
      "Step": 285,
      "brisk-pond-1 - train/loss": 0.7994,
      "brisk-pond-1 - train/loss__MIN": 0.7994,
      "brisk-pond-1 - train/loss__MAX": 0.7994
    },
    {
      "Step": 286,
      "brisk-pond-1 - train/loss": 0.8122,
      "brisk-pond-1 - train/loss__MIN": 0.8122,
      "brisk-pond-1 - train/loss__MAX": 0.8122
    },
    {
      "Step": 287,
      "brisk-pond-1 - train/loss": 0.8014,
      "brisk-pond-1 - train/loss__MIN": 0.8014,
      "brisk-pond-1 - train/loss__MAX": 0.8014
    },
    {
      "Step": 288,
      "brisk-pond-1 - train/loss": 0.7782,
      "brisk-pond-1 - train/loss__MIN": 0.7782,
      "brisk-pond-1 - train/loss__MAX": 0.7782
    },
    {
      "Step": 289,
      "brisk-pond-1 - train/loss": 0.7773,
      "brisk-pond-1 - train/loss__MIN": 0.7773,
      "brisk-pond-1 - train/loss__MAX": 0.7773
    },
    {
      "Step": 290,
      "brisk-pond-1 - train/loss": 0.7595,
      "brisk-pond-1 - train/loss__MIN": 0.7595,
      "brisk-pond-1 - train/loss__MAX": 0.7595
    },
    {
      "Step": 291,
      "brisk-pond-1 - train/loss": 0.7504,
      "brisk-pond-1 - train/loss__MIN": 0.7504,
      "brisk-pond-1 - train/loss__MAX": 0.7504
    },
    {
      "Step": 292,
      "brisk-pond-1 - train/loss": 0.8591,
      "brisk-pond-1 - train/loss__MIN": 0.8591,
      "brisk-pond-1 - train/loss__MAX": 0.8591
    },
    {
      "Step": 293,
      "brisk-pond-1 - train/loss": 0.7671,
      "brisk-pond-1 - train/loss__MIN": 0.7671,
      "brisk-pond-1 - train/loss__MAX": 0.7671
    },
    {
      "Step": 294,
      "brisk-pond-1 - train/loss": 0.7757,
      "brisk-pond-1 - train/loss__MIN": 0.7757,
      "brisk-pond-1 - train/loss__MAX": 0.7757
    },
    {
      "Step": 295,
      "brisk-pond-1 - train/loss": 0.7983,
      "brisk-pond-1 - train/loss__MIN": 0.7983,
      "brisk-pond-1 - train/loss__MAX": 0.7983
    },
    {
      "Step": 296,
      "brisk-pond-1 - train/loss": 0.7596,
      "brisk-pond-1 - train/loss__MIN": 0.7596,
      "brisk-pond-1 - train/loss__MAX": 0.7596
    },
    {
      "Step": 297,
      "brisk-pond-1 - train/loss": 0.8199,
      "brisk-pond-1 - train/loss__MIN": 0.8199,
      "brisk-pond-1 - train/loss__MAX": 0.8199
    },
    {
      "Step": 298,
      "brisk-pond-1 - train/loss": 0.7706,
      "brisk-pond-1 - train/loss__MIN": 0.7706,
      "brisk-pond-1 - train/loss__MAX": 0.7706
    },
    {
      "Step": 299,
      "brisk-pond-1 - train/loss": 0.7992,
      "brisk-pond-1 - train/loss__MIN": 0.7992,
      "brisk-pond-1 - train/loss__MAX": 0.7992
    },
    {
      "Step": 300,
      "brisk-pond-1 - train/loss": 0.7767,
      "brisk-pond-1 - train/loss__MIN": 0.7767,
      "brisk-pond-1 - train/loss__MAX": 0.7767
    },
    {
      "Step": 301,
      "brisk-pond-1 - train/loss": 0.7817,
      "brisk-pond-1 - train/loss__MIN": 0.7817,
      "brisk-pond-1 - train/loss__MAX": 0.7817
    },
    {
      "Step": 302,
      "brisk-pond-1 - train/loss": 0.759,
      "brisk-pond-1 - train/loss__MIN": 0.759,
      "brisk-pond-1 - train/loss__MAX": 0.759
    },
    {
      "Step": 303,
      "brisk-pond-1 - train/loss": 0.8102,
      "brisk-pond-1 - train/loss__MIN": 0.8102,
      "brisk-pond-1 - train/loss__MAX": 0.8102
    },
    {
      "Step": 304,
      "brisk-pond-1 - train/loss": 0.8463,
      "brisk-pond-1 - train/loss__MIN": 0.8463,
      "brisk-pond-1 - train/loss__MAX": 0.8463
    },
    {
      "Step": 305,
      "brisk-pond-1 - train/loss": 0.7818,
      "brisk-pond-1 - train/loss__MIN": 0.7818,
      "brisk-pond-1 - train/loss__MAX": 0.7818
    },
    {
      "Step": 306,
      "brisk-pond-1 - train/loss": 0.8404,
      "brisk-pond-1 - train/loss__MIN": 0.8404,
      "brisk-pond-1 - train/loss__MAX": 0.8404
    },
    {
      "Step": 307,
      "brisk-pond-1 - train/loss": 0.849,
      "brisk-pond-1 - train/loss__MIN": 0.849,
      "brisk-pond-1 - train/loss__MAX": 0.849
    },
    {
      "Step": 308,
      "brisk-pond-1 - train/loss": 0.8614,
      "brisk-pond-1 - train/loss__MIN": 0.8614,
      "brisk-pond-1 - train/loss__MAX": 0.8614
    },
    {
      "Step": 309,
      "brisk-pond-1 - train/loss": 0.8211,
      "brisk-pond-1 - train/loss__MIN": 0.8211,
      "brisk-pond-1 - train/loss__MAX": 0.8211
    },
    {
      "Step": 310,
      "brisk-pond-1 - train/loss": 0.7988,
      "brisk-pond-1 - train/loss__MIN": 0.7988,
      "brisk-pond-1 - train/loss__MAX": 0.7988
    },
    {
      "Step": 311,
      "brisk-pond-1 - train/loss": 0.8327,
      "brisk-pond-1 - train/loss__MIN": 0.8327,
      "brisk-pond-1 - train/loss__MAX": 0.8327
    },
    {
      "Step": 312,
      "brisk-pond-1 - train/loss": 0.789,
      "brisk-pond-1 - train/loss__MIN": 0.789,
      "brisk-pond-1 - train/loss__MAX": 0.789
    },
    {
      "Step": 313,
      "brisk-pond-1 - train/loss": 0.7763,
      "brisk-pond-1 - train/loss__MIN": 0.7763,
      "brisk-pond-1 - train/loss__MAX": 0.7763
    },
    {
      "Step": 314,
      "brisk-pond-1 - train/loss": 0.7964,
      "brisk-pond-1 - train/loss__MIN": 0.7964,
      "brisk-pond-1 - train/loss__MAX": 0.7964
    },
    {
      "Step": 315,
      "brisk-pond-1 - train/loss": 0.7805,
      "brisk-pond-1 - train/loss__MIN": 0.7805,
      "brisk-pond-1 - train/loss__MAX": 0.7805
    },
    {
      "Step": 316,
      "brisk-pond-1 - train/loss": 0.7527,
      "brisk-pond-1 - train/loss__MIN": 0.7527,
      "brisk-pond-1 - train/loss__MAX": 0.7527
    },
    {
      "Step": 317,
      "brisk-pond-1 - train/loss": 0.7791,
      "brisk-pond-1 - train/loss__MIN": 0.7791,
      "brisk-pond-1 - train/loss__MAX": 0.7791
    },
    {
      "Step": 318,
      "brisk-pond-1 - train/loss": 0.7664,
      "brisk-pond-1 - train/loss__MIN": 0.7664,
      "brisk-pond-1 - train/loss__MAX": 0.7664
    },
    {
      "Step": 319,
      "brisk-pond-1 - train/loss": 0.727,
      "brisk-pond-1 - train/loss__MIN": 0.727,
      "brisk-pond-1 - train/loss__MAX": 0.727
    },
    {
      "Step": 320,
      "brisk-pond-1 - train/loss": 0.7864,
      "brisk-pond-1 - train/loss__MIN": 0.7864,
      "brisk-pond-1 - train/loss__MAX": 0.7864
    },
    {
      "Step": 321,
      "brisk-pond-1 - train/loss": 0.728,
      "brisk-pond-1 - train/loss__MIN": 0.728,
      "brisk-pond-1 - train/loss__MAX": 0.728
    },
    {
      "Step": 322,
      "brisk-pond-1 - train/loss": 0.7954,
      "brisk-pond-1 - train/loss__MIN": 0.7954,
      "brisk-pond-1 - train/loss__MAX": 0.7954
    },
    {
      "Step": 323,
      "brisk-pond-1 - train/loss": 0.8084,
      "brisk-pond-1 - train/loss__MIN": 0.8084,
      "brisk-pond-1 - train/loss__MAX": 0.8084
    },
    {
      "Step": 324,
      "brisk-pond-1 - train/loss": 0.7648,
      "brisk-pond-1 - train/loss__MIN": 0.7648,
      "brisk-pond-1 - train/loss__MAX": 0.7648
    },
    {
      "Step": 325,
      "brisk-pond-1 - train/loss": 0.8346,
      "brisk-pond-1 - train/loss__MIN": 0.8346,
      "brisk-pond-1 - train/loss__MAX": 0.8346
    },
    {
      "Step": 326,
      "brisk-pond-1 - train/loss": 0.7822,
      "brisk-pond-1 - train/loss__MIN": 0.7822,
      "brisk-pond-1 - train/loss__MAX": 0.7822
    },
    {
      "Step": 327,
      "brisk-pond-1 - train/loss": 0.8047,
      "brisk-pond-1 - train/loss__MIN": 0.8047,
      "brisk-pond-1 - train/loss__MAX": 0.8047
    },
    {
      "Step": 328,
      "brisk-pond-1 - train/loss": 0.7814,
      "brisk-pond-1 - train/loss__MIN": 0.7814,
      "brisk-pond-1 - train/loss__MAX": 0.7814
    },
    {
      "Step": 329,
      "brisk-pond-1 - train/loss": 0.7799,
      "brisk-pond-1 - train/loss__MIN": 0.7799,
      "brisk-pond-1 - train/loss__MAX": 0.7799
    },
    {
      "Step": 330,
      "brisk-pond-1 - train/loss": 0.8185,
      "brisk-pond-1 - train/loss__MIN": 0.8185,
      "brisk-pond-1 - train/loss__MAX": 0.8185
    },
    {
      "Step": 331,
      "brisk-pond-1 - train/loss": 0.7625,
      "brisk-pond-1 - train/loss__MIN": 0.7625,
      "brisk-pond-1 - train/loss__MAX": 0.7625
    },
    {
      "Step": 332,
      "brisk-pond-1 - train/loss": 0.7491,
      "brisk-pond-1 - train/loss__MIN": 0.7491,
      "brisk-pond-1 - train/loss__MAX": 0.7491
    },
    {
      "Step": 333,
      "brisk-pond-1 - train/loss": 0.7638,
      "brisk-pond-1 - train/loss__MIN": 0.7638,
      "brisk-pond-1 - train/loss__MAX": 0.7638
    },
    {
      "Step": 334,
      "brisk-pond-1 - train/loss": 0.7697,
      "brisk-pond-1 - train/loss__MIN": 0.7697,
      "brisk-pond-1 - train/loss__MAX": 0.7697
    },
    {
      "Step": 335,
      "brisk-pond-1 - train/loss": 0.7608,
      "brisk-pond-1 - train/loss__MIN": 0.7608,
      "brisk-pond-1 - train/loss__MAX": 0.7608
    },
    {
      "Step": 336,
      "brisk-pond-1 - train/loss": 0.7902,
      "brisk-pond-1 - train/loss__MIN": 0.7902,
      "brisk-pond-1 - train/loss__MAX": 0.7902
    },
    {
      "Step": 337,
      "brisk-pond-1 - train/loss": 0.8035,
      "brisk-pond-1 - train/loss__MIN": 0.8035,
      "brisk-pond-1 - train/loss__MAX": 0.8035
    },
    {
      "Step": 338,
      "brisk-pond-1 - train/loss": 0.8082,
      "brisk-pond-1 - train/loss__MIN": 0.8082,
      "brisk-pond-1 - train/loss__MAX": 0.8082
    },
    {
      "Step": 339,
      "brisk-pond-1 - train/loss": 0.767,
      "brisk-pond-1 - train/loss__MIN": 0.767,
      "brisk-pond-1 - train/loss__MAX": 0.767
    },
    {
      "Step": 340,
      "brisk-pond-1 - train/loss": 0.8566,
      "brisk-pond-1 - train/loss__MIN": 0.8566,
      "brisk-pond-1 - train/loss__MAX": 0.8566
    },
    {
      "Step": 341,
      "brisk-pond-1 - train/loss": 0.8043,
      "brisk-pond-1 - train/loss__MIN": 0.8043,
      "brisk-pond-1 - train/loss__MAX": 0.8043
    },
    {
      "Step": 342,
      "brisk-pond-1 - train/loss": 0.7691,
      "brisk-pond-1 - train/loss__MIN": 0.7691,
      "brisk-pond-1 - train/loss__MAX": 0.7691
    },
    {
      "Step": 343,
      "brisk-pond-1 - train/loss": 0.7244,
      "brisk-pond-1 - train/loss__MIN": 0.7244,
      "brisk-pond-1 - train/loss__MAX": 0.7244
    },
    {
      "Step": 344,
      "brisk-pond-1 - train/loss": 0.8459,
      "brisk-pond-1 - train/loss__MIN": 0.8459,
      "brisk-pond-1 - train/loss__MAX": 0.8459
    },
    {
      "Step": 345,
      "brisk-pond-1 - train/loss": 0.8228,
      "brisk-pond-1 - train/loss__MIN": 0.8228,
      "brisk-pond-1 - train/loss__MAX": 0.8228
    },
    {
      "Step": 346,
      "brisk-pond-1 - train/loss": 0.8118,
      "brisk-pond-1 - train/loss__MIN": 0.8118,
      "brisk-pond-1 - train/loss__MAX": 0.8118
    },
    {
      "Step": 347,
      "brisk-pond-1 - train/loss": 0.7533,
      "brisk-pond-1 - train/loss__MIN": 0.7533,
      "brisk-pond-1 - train/loss__MAX": 0.7533
    },
    {
      "Step": 348,
      "brisk-pond-1 - train/loss": 0.8549,
      "brisk-pond-1 - train/loss__MIN": 0.8549,
      "brisk-pond-1 - train/loss__MAX": 0.8549
    },
    {
      "Step": 349,
      "brisk-pond-1 - train/loss": 0.8368,
      "brisk-pond-1 - train/loss__MIN": 0.8368,
      "brisk-pond-1 - train/loss__MAX": 0.8368
    },
    {
      "Step": 350,
      "brisk-pond-1 - train/loss": 0.763,
      "brisk-pond-1 - train/loss__MIN": 0.763,
      "brisk-pond-1 - train/loss__MAX": 0.763
    },
    {
      "Step": 351,
      "brisk-pond-1 - train/loss": 0.8069,
      "brisk-pond-1 - train/loss__MIN": 0.8069,
      "brisk-pond-1 - train/loss__MAX": 0.8069
    },
    {
      "Step": 352,
      "brisk-pond-1 - train/loss": 0.8201,
      "brisk-pond-1 - train/loss__MIN": 0.8201,
      "brisk-pond-1 - train/loss__MAX": 0.8201
    },
    {
      "Step": 353,
      "brisk-pond-1 - train/loss": 0.8499,
      "brisk-pond-1 - train/loss__MIN": 0.8499,
      "brisk-pond-1 - train/loss__MAX": 0.8499
    },
    {
      "Step": 354,
      "brisk-pond-1 - train/loss": 0.7674,
      "brisk-pond-1 - train/loss__MIN": 0.7674,
      "brisk-pond-1 - train/loss__MAX": 0.7674
    },
    {
      "Step": 355,
      "brisk-pond-1 - train/loss": 0.7212,
      "brisk-pond-1 - train/loss__MIN": 0.7212,
      "brisk-pond-1 - train/loss__MAX": 0.7212
    },
    {
      "Step": 356,
      "brisk-pond-1 - train/loss": 0.7897,
      "brisk-pond-1 - train/loss__MIN": 0.7897,
      "brisk-pond-1 - train/loss__MAX": 0.7897
    },
    {
      "Step": 357,
      "brisk-pond-1 - train/loss": 0.8442,
      "brisk-pond-1 - train/loss__MIN": 0.8442,
      "brisk-pond-1 - train/loss__MAX": 0.8442
    },
    {
      "Step": 358,
      "brisk-pond-1 - train/loss": 0.8002,
      "brisk-pond-1 - train/loss__MIN": 0.8002,
      "brisk-pond-1 - train/loss__MAX": 0.8002
    },
    {
      "Step": 359,
      "brisk-pond-1 - train/loss": 0.7933,
      "brisk-pond-1 - train/loss__MIN": 0.7933,
      "brisk-pond-1 - train/loss__MAX": 0.7933
    },
    {
      "Step": 360,
      "brisk-pond-1 - train/loss": 0.8169,
      "brisk-pond-1 - train/loss__MIN": 0.8169,
      "brisk-pond-1 - train/loss__MAX": 0.8169
    },
    {
      "Step": 361,
      "brisk-pond-1 - train/loss": 0.7534,
      "brisk-pond-1 - train/loss__MIN": 0.7534,
      "brisk-pond-1 - train/loss__MAX": 0.7534
    },
    {
      "Step": 362,
      "brisk-pond-1 - train/loss": 0.7912,
      "brisk-pond-1 - train/loss__MIN": 0.7912,
      "brisk-pond-1 - train/loss__MAX": 0.7912
    },
    {
      "Step": 363,
      "brisk-pond-1 - train/loss": 0.7576,
      "brisk-pond-1 - train/loss__MIN": 0.7576,
      "brisk-pond-1 - train/loss__MAX": 0.7576
    },
    {
      "Step": 364,
      "brisk-pond-1 - train/loss": 0.7887,
      "brisk-pond-1 - train/loss__MIN": 0.7887,
      "brisk-pond-1 - train/loss__MAX": 0.7887
    },
    {
      "Step": 365,
      "brisk-pond-1 - train/loss": 0.7796,
      "brisk-pond-1 - train/loss__MIN": 0.7796,
      "brisk-pond-1 - train/loss__MAX": 0.7796
    },
    {
      "Step": 366,
      "brisk-pond-1 - train/loss": 0.7901,
      "brisk-pond-1 - train/loss__MIN": 0.7901,
      "brisk-pond-1 - train/loss__MAX": 0.7901
    },
    {
      "Step": 367,
      "brisk-pond-1 - train/loss": 0.8226,
      "brisk-pond-1 - train/loss__MIN": 0.8226,
      "brisk-pond-1 - train/loss__MAX": 0.8226
    },
    {
      "Step": 368,
      "brisk-pond-1 - train/loss": 0.8915,
      "brisk-pond-1 - train/loss__MIN": 0.8915,
      "brisk-pond-1 - train/loss__MAX": 0.8915
    },
    {
      "Step": 369,
      "brisk-pond-1 - train/loss": 0.7822,
      "brisk-pond-1 - train/loss__MIN": 0.7822,
      "brisk-pond-1 - train/loss__MAX": 0.7822
    },
    {
      "Step": 370,
      "brisk-pond-1 - train/loss": 0.7715,
      "brisk-pond-1 - train/loss__MIN": 0.7715,
      "brisk-pond-1 - train/loss__MAX": 0.7715
    },
    {
      "Step": 371,
      "brisk-pond-1 - train/loss": 0.8743,
      "brisk-pond-1 - train/loss__MIN": 0.8743,
      "brisk-pond-1 - train/loss__MAX": 0.8743
    },
    {
      "Step": 372,
      "brisk-pond-1 - train/loss": 0.7803,
      "brisk-pond-1 - train/loss__MIN": 0.7803,
      "brisk-pond-1 - train/loss__MAX": 0.7803
    },
    {
      "Step": 373,
      "brisk-pond-1 - train/loss": 0.8164,
      "brisk-pond-1 - train/loss__MIN": 0.8164,
      "brisk-pond-1 - train/loss__MAX": 0.8164
    },
    {
      "Step": 374,
      "brisk-pond-1 - train/loss": 0.8191,
      "brisk-pond-1 - train/loss__MIN": 0.8191,
      "brisk-pond-1 - train/loss__MAX": 0.8191
    },
    {
      "Step": 375,
      "brisk-pond-1 - train/loss": 0.7518,
      "brisk-pond-1 - train/loss__MIN": 0.7518,
      "brisk-pond-1 - train/loss__MAX": 0.7518
    },
    {
      "Step": 376,
      "brisk-pond-1 - train/loss": 0.7839,
      "brisk-pond-1 - train/loss__MIN": 0.7839,
      "brisk-pond-1 - train/loss__MAX": 0.7839
    },
    {
      "Step": 377,
      "brisk-pond-1 - train/loss": 0.7502,
      "brisk-pond-1 - train/loss__MIN": 0.7502,
      "brisk-pond-1 - train/loss__MAX": 0.7502
    },
    {
      "Step": 378,
      "brisk-pond-1 - train/loss": 0.762,
      "brisk-pond-1 - train/loss__MIN": 0.762,
      "brisk-pond-1 - train/loss__MAX": 0.762
    },
    {
      "Step": 379,
      "brisk-pond-1 - train/loss": 0.8164,
      "brisk-pond-1 - train/loss__MIN": 0.8164,
      "brisk-pond-1 - train/loss__MAX": 0.8164
    },
    {
      "Step": 380,
      "brisk-pond-1 - train/loss": 0.7489,
      "brisk-pond-1 - train/loss__MIN": 0.7489,
      "brisk-pond-1 - train/loss__MAX": 0.7489
    },
    {
      "Step": 381,
      "brisk-pond-1 - train/loss": 0.7575,
      "brisk-pond-1 - train/loss__MIN": 0.7575,
      "brisk-pond-1 - train/loss__MAX": 0.7575
    },
    {
      "Step": 382,
      "brisk-pond-1 - train/loss": 0.7932,
      "brisk-pond-1 - train/loss__MIN": 0.7932,
      "brisk-pond-1 - train/loss__MAX": 0.7932
    },
    {
      "Step": 383,
      "brisk-pond-1 - train/loss": 0.8244,
      "brisk-pond-1 - train/loss__MIN": 0.8244,
      "brisk-pond-1 - train/loss__MAX": 0.8244
    },
    {
      "Step": 384,
      "brisk-pond-1 - train/loss": 0.8346,
      "brisk-pond-1 - train/loss__MIN": 0.8346,
      "brisk-pond-1 - train/loss__MAX": 0.8346
    },
    {
      "Step": 385,
      "brisk-pond-1 - train/loss": 0.7988,
      "brisk-pond-1 - train/loss__MIN": 0.7988,
      "brisk-pond-1 - train/loss__MAX": 0.7988
    },
    {
      "Step": 386,
      "brisk-pond-1 - train/loss": 0.8377,
      "brisk-pond-1 - train/loss__MIN": 0.8377,
      "brisk-pond-1 - train/loss__MAX": 0.8377
    },
    {
      "Step": 387,
      "brisk-pond-1 - train/loss": 0.7777,
      "brisk-pond-1 - train/loss__MIN": 0.7777,
      "brisk-pond-1 - train/loss__MAX": 0.7777
    },
    {
      "Step": 388,
      "brisk-pond-1 - train/loss": 0.753,
      "brisk-pond-1 - train/loss__MIN": 0.753,
      "brisk-pond-1 - train/loss__MAX": 0.753
    },
    {
      "Step": 389,
      "brisk-pond-1 - train/loss": 0.8109,
      "brisk-pond-1 - train/loss__MIN": 0.8109,
      "brisk-pond-1 - train/loss__MAX": 0.8109
    },
    {
      "Step": 390,
      "brisk-pond-1 - train/loss": 0.7626,
      "brisk-pond-1 - train/loss__MIN": 0.7626,
      "brisk-pond-1 - train/loss__MAX": 0.7626
    },
    {
      "Step": 391,
      "brisk-pond-1 - train/loss": 0.8269,
      "brisk-pond-1 - train/loss__MIN": 0.8269,
      "brisk-pond-1 - train/loss__MAX": 0.8269
    },
    {
      "Step": 392,
      "brisk-pond-1 - train/loss": 0.8,
      "brisk-pond-1 - train/loss__MIN": 0.8,
      "brisk-pond-1 - train/loss__MAX": 0.8
    },
    {
      "Step": 393,
      "brisk-pond-1 - train/loss": 0.7581,
      "brisk-pond-1 - train/loss__MIN": 0.7581,
      "brisk-pond-1 - train/loss__MAX": 0.7581
    },
    {
      "Step": 394,
      "brisk-pond-1 - train/loss": 0.7591,
      "brisk-pond-1 - train/loss__MIN": 0.7591,
      "brisk-pond-1 - train/loss__MAX": 0.7591
    },
    {
      "Step": 395,
      "brisk-pond-1 - train/loss": 0.7631,
      "brisk-pond-1 - train/loss__MIN": 0.7631,
      "brisk-pond-1 - train/loss__MAX": 0.7631
    },
    {
      "Step": 396,
      "brisk-pond-1 - train/loss": 0.8011,
      "brisk-pond-1 - train/loss__MIN": 0.8011,
      "brisk-pond-1 - train/loss__MAX": 0.8011
    },
    {
      "Step": 397,
      "brisk-pond-1 - train/loss": 0.7953,
      "brisk-pond-1 - train/loss__MIN": 0.7953,
      "brisk-pond-1 - train/loss__MAX": 0.7953
    },
    {
      "Step": 398,
      "brisk-pond-1 - train/loss": 0.7826,
      "brisk-pond-1 - train/loss__MIN": 0.7826,
      "brisk-pond-1 - train/loss__MAX": 0.7826
    },
    {
      "Step": 399,
      "brisk-pond-1 - train/loss": 0.7635,
      "brisk-pond-1 - train/loss__MIN": 0.7635,
      "brisk-pond-1 - train/loss__MAX": 0.7635
    },
    {
      "Step": 400,
      "brisk-pond-1 - train/loss": 0.7659,
      "brisk-pond-1 - train/loss__MIN": 0.7659,
      "brisk-pond-1 - train/loss__MAX": 0.7659
    },
    {
      "Step": 402,
      "brisk-pond-1 - train/loss": 0.7825,
      "brisk-pond-1 - train/loss__MIN": 0.7825,
      "brisk-pond-1 - train/loss__MAX": 0.7825
    },
    {
      "Step": 403,
      "brisk-pond-1 - train/loss": 0.8197,
      "brisk-pond-1 - train/loss__MIN": 0.8197,
      "brisk-pond-1 - train/loss__MAX": 0.8197
    },
    {
      "Step": 404,
      "brisk-pond-1 - train/loss": 0.7765,
      "brisk-pond-1 - train/loss__MIN": 0.7765,
      "brisk-pond-1 - train/loss__MAX": 0.7765
    },
    {
      "Step": 405,
      "brisk-pond-1 - train/loss": 0.8235,
      "brisk-pond-1 - train/loss__MIN": 0.8235,
      "brisk-pond-1 - train/loss__MAX": 0.8235
    },
    {
      "Step": 406,
      "brisk-pond-1 - train/loss": 0.7973,
      "brisk-pond-1 - train/loss__MIN": 0.7973,
      "brisk-pond-1 - train/loss__MAX": 0.7973
    },
    {
      "Step": 407,
      "brisk-pond-1 - train/loss": 0.7847,
      "brisk-pond-1 - train/loss__MIN": 0.7847,
      "brisk-pond-1 - train/loss__MAX": 0.7847
    },
    {
      "Step": 408,
      "brisk-pond-1 - train/loss": 0.705,
      "brisk-pond-1 - train/loss__MIN": 0.705,
      "brisk-pond-1 - train/loss__MAX": 0.705
    },
    {
      "Step": 409,
      "brisk-pond-1 - train/loss": 0.8288,
      "brisk-pond-1 - train/loss__MIN": 0.8288,
      "brisk-pond-1 - train/loss__MAX": 0.8288
    },
    {
      "Step": 410,
      "brisk-pond-1 - train/loss": 0.7338,
      "brisk-pond-1 - train/loss__MIN": 0.7338,
      "brisk-pond-1 - train/loss__MAX": 0.7338
    },
    {
      "Step": 411,
      "brisk-pond-1 - train/loss": 0.8329,
      "brisk-pond-1 - train/loss__MIN": 0.8329,
      "brisk-pond-1 - train/loss__MAX": 0.8329
    },
    {
      "Step": 412,
      "brisk-pond-1 - train/loss": 0.8015,
      "brisk-pond-1 - train/loss__MIN": 0.8015,
      "brisk-pond-1 - train/loss__MAX": 0.8015
    },
    {
      "Step": 413,
      "brisk-pond-1 - train/loss": 0.7786,
      "brisk-pond-1 - train/loss__MIN": 0.7786,
      "brisk-pond-1 - train/loss__MAX": 0.7786
    },
    {
      "Step": 414,
      "brisk-pond-1 - train/loss": 0.7683,
      "brisk-pond-1 - train/loss__MIN": 0.7683,
      "brisk-pond-1 - train/loss__MAX": 0.7683
    },
    {
      "Step": 415,
      "brisk-pond-1 - train/loss": 0.8175,
      "brisk-pond-1 - train/loss__MIN": 0.8175,
      "brisk-pond-1 - train/loss__MAX": 0.8175
    },
    {
      "Step": 416,
      "brisk-pond-1 - train/loss": 0.7602,
      "brisk-pond-1 - train/loss__MIN": 0.7602,
      "brisk-pond-1 - train/loss__MAX": 0.7602
    },
    {
      "Step": 417,
      "brisk-pond-1 - train/loss": 0.8083,
      "brisk-pond-1 - train/loss__MIN": 0.8083,
      "brisk-pond-1 - train/loss__MAX": 0.8083
    },
    {
      "Step": 418,
      "brisk-pond-1 - train/loss": 0.8038,
      "brisk-pond-1 - train/loss__MIN": 0.8038,
      "brisk-pond-1 - train/loss__MAX": 0.8038
    },
    {
      "Step": 419,
      "brisk-pond-1 - train/loss": 0.7974,
      "brisk-pond-1 - train/loss__MIN": 0.7974,
      "brisk-pond-1 - train/loss__MAX": 0.7974
    },
    {
      "Step": 420,
      "brisk-pond-1 - train/loss": 0.7532,
      "brisk-pond-1 - train/loss__MIN": 0.7532,
      "brisk-pond-1 - train/loss__MAX": 0.7532
    },
    {
      "Step": 421,
      "brisk-pond-1 - train/loss": 0.8123,
      "brisk-pond-1 - train/loss__MIN": 0.8123,
      "brisk-pond-1 - train/loss__MAX": 0.8123
    },
    {
      "Step": 422,
      "brisk-pond-1 - train/loss": 0.7935,
      "brisk-pond-1 - train/loss__MIN": 0.7935,
      "brisk-pond-1 - train/loss__MAX": 0.7935
    },
    {
      "Step": 423,
      "brisk-pond-1 - train/loss": 0.8062,
      "brisk-pond-1 - train/loss__MIN": 0.8062,
      "brisk-pond-1 - train/loss__MAX": 0.8062
    },
    {
      "Step": 424,
      "brisk-pond-1 - train/loss": 0.7429,
      "brisk-pond-1 - train/loss__MIN": 0.7429,
      "brisk-pond-1 - train/loss__MAX": 0.7429
    },
    {
      "Step": 425,
      "brisk-pond-1 - train/loss": 0.7172,
      "brisk-pond-1 - train/loss__MIN": 0.7172,
      "brisk-pond-1 - train/loss__MAX": 0.7172
    },
    {
      "Step": 426,
      "brisk-pond-1 - train/loss": 0.7701,
      "brisk-pond-1 - train/loss__MIN": 0.7701,
      "brisk-pond-1 - train/loss__MAX": 0.7701
    },
    {
      "Step": 427,
      "brisk-pond-1 - train/loss": 0.7735,
      "brisk-pond-1 - train/loss__MIN": 0.7735,
      "brisk-pond-1 - train/loss__MAX": 0.7735
    },
    {
      "Step": 428,
      "brisk-pond-1 - train/loss": 0.7594,
      "brisk-pond-1 - train/loss__MIN": 0.7594,
      "brisk-pond-1 - train/loss__MAX": 0.7594
    },
    {
      "Step": 429,
      "brisk-pond-1 - train/loss": 0.8248,
      "brisk-pond-1 - train/loss__MIN": 0.8248,
      "brisk-pond-1 - train/loss__MAX": 0.8248
    },
    {
      "Step": 430,
      "brisk-pond-1 - train/loss": 0.8262,
      "brisk-pond-1 - train/loss__MIN": 0.8262,
      "brisk-pond-1 - train/loss__MAX": 0.8262
    },
    {
      "Step": 431,
      "brisk-pond-1 - train/loss": 0.8226,
      "brisk-pond-1 - train/loss__MIN": 0.8226,
      "brisk-pond-1 - train/loss__MAX": 0.8226
    },
    {
      "Step": 432,
      "brisk-pond-1 - train/loss": 0.7628,
      "brisk-pond-1 - train/loss__MIN": 0.7628,
      "brisk-pond-1 - train/loss__MAX": 0.7628
    },
    {
      "Step": 433,
      "brisk-pond-1 - train/loss": 0.8189,
      "brisk-pond-1 - train/loss__MIN": 0.8189,
      "brisk-pond-1 - train/loss__MAX": 0.8189
    },
    {
      "Step": 434,
      "brisk-pond-1 - train/loss": 0.7669,
      "brisk-pond-1 - train/loss__MIN": 0.7669,
      "brisk-pond-1 - train/loss__MAX": 0.7669
    },
    {
      "Step": 435,
      "brisk-pond-1 - train/loss": 0.7971,
      "brisk-pond-1 - train/loss__MIN": 0.7971,
      "brisk-pond-1 - train/loss__MAX": 0.7971
    },
    {
      "Step": 436,
      "brisk-pond-1 - train/loss": 0.7874,
      "brisk-pond-1 - train/loss__MIN": 0.7874,
      "brisk-pond-1 - train/loss__MAX": 0.7874
    },
    {
      "Step": 437,
      "brisk-pond-1 - train/loss": 0.7368,
      "brisk-pond-1 - train/loss__MIN": 0.7368,
      "brisk-pond-1 - train/loss__MAX": 0.7368
    },
    {
      "Step": 438,
      "brisk-pond-1 - train/loss": 0.8285,
      "brisk-pond-1 - train/loss__MIN": 0.8285,
      "brisk-pond-1 - train/loss__MAX": 0.8285
    },
    {
      "Step": 439,
      "brisk-pond-1 - train/loss": 0.7115,
      "brisk-pond-1 - train/loss__MIN": 0.7115,
      "brisk-pond-1 - train/loss__MAX": 0.7115
    },
    {
      "Step": 440,
      "brisk-pond-1 - train/loss": 0.7626,
      "brisk-pond-1 - train/loss__MIN": 0.7626,
      "brisk-pond-1 - train/loss__MAX": 0.7626
    },
    {
      "Step": 441,
      "brisk-pond-1 - train/loss": 0.7366,
      "brisk-pond-1 - train/loss__MIN": 0.7366,
      "brisk-pond-1 - train/loss__MAX": 0.7366
    },
    {
      "Step": 442,
      "brisk-pond-1 - train/loss": 0.81,
      "brisk-pond-1 - train/loss__MIN": 0.81,
      "brisk-pond-1 - train/loss__MAX": 0.81
    },
    {
      "Step": 443,
      "brisk-pond-1 - train/loss": 0.755,
      "brisk-pond-1 - train/loss__MIN": 0.755,
      "brisk-pond-1 - train/loss__MAX": 0.755
    },
    {
      "Step": 444,
      "brisk-pond-1 - train/loss": 0.8154,
      "brisk-pond-1 - train/loss__MIN": 0.8154,
      "brisk-pond-1 - train/loss__MAX": 0.8154
    },
    {
      "Step": 445,
      "brisk-pond-1 - train/loss": 0.7993,
      "brisk-pond-1 - train/loss__MIN": 0.7993,
      "brisk-pond-1 - train/loss__MAX": 0.7993
    },
    {
      "Step": 446,
      "brisk-pond-1 - train/loss": 0.7134,
      "brisk-pond-1 - train/loss__MIN": 0.7134,
      "brisk-pond-1 - train/loss__MAX": 0.7134
    },
    {
      "Step": 447,
      "brisk-pond-1 - train/loss": 0.8047,
      "brisk-pond-1 - train/loss__MIN": 0.8047,
      "brisk-pond-1 - train/loss__MAX": 0.8047
    },
    {
      "Step": 448,
      "brisk-pond-1 - train/loss": 0.814,
      "brisk-pond-1 - train/loss__MIN": 0.814,
      "brisk-pond-1 - train/loss__MAX": 0.814
    },
    {
      "Step": 449,
      "brisk-pond-1 - train/loss": 0.7956,
      "brisk-pond-1 - train/loss__MIN": 0.7956,
      "brisk-pond-1 - train/loss__MAX": 0.7956
    },
    {
      "Step": 450,
      "brisk-pond-1 - train/loss": 0.693,
      "brisk-pond-1 - train/loss__MIN": 0.693,
      "brisk-pond-1 - train/loss__MAX": 0.693
    },
    {
      "Step": 451,
      "brisk-pond-1 - train/loss": 0.8006,
      "brisk-pond-1 - train/loss__MIN": 0.8006,
      "brisk-pond-1 - train/loss__MAX": 0.8006
    },
    {
      "Step": 452,
      "brisk-pond-1 - train/loss": 0.8609,
      "brisk-pond-1 - train/loss__MIN": 0.8609,
      "brisk-pond-1 - train/loss__MAX": 0.8609
    },
    {
      "Step": 453,
      "brisk-pond-1 - train/loss": 0.7521,
      "brisk-pond-1 - train/loss__MIN": 0.7521,
      "brisk-pond-1 - train/loss__MAX": 0.7521
    },
    {
      "Step": 454,
      "brisk-pond-1 - train/loss": 0.776,
      "brisk-pond-1 - train/loss__MIN": 0.776,
      "brisk-pond-1 - train/loss__MAX": 0.776
    },
    {
      "Step": 455,
      "brisk-pond-1 - train/loss": 0.8552,
      "brisk-pond-1 - train/loss__MIN": 0.8552,
      "brisk-pond-1 - train/loss__MAX": 0.8552
    },
    {
      "Step": 456,
      "brisk-pond-1 - train/loss": 0.7487,
      "brisk-pond-1 - train/loss__MIN": 0.7487,
      "brisk-pond-1 - train/loss__MAX": 0.7487
    },
    {
      "Step": 457,
      "brisk-pond-1 - train/loss": 0.7344,
      "brisk-pond-1 - train/loss__MIN": 0.7344,
      "brisk-pond-1 - train/loss__MAX": 0.7344
    },
    {
      "Step": 458,
      "brisk-pond-1 - train/loss": 0.7513,
      "brisk-pond-1 - train/loss__MIN": 0.7513,
      "brisk-pond-1 - train/loss__MAX": 0.7513
    },
    {
      "Step": 459,
      "brisk-pond-1 - train/loss": 0.723,
      "brisk-pond-1 - train/loss__MIN": 0.723,
      "brisk-pond-1 - train/loss__MAX": 0.723
    },
    {
      "Step": 460,
      "brisk-pond-1 - train/loss": 0.7901,
      "brisk-pond-1 - train/loss__MIN": 0.7901,
      "brisk-pond-1 - train/loss__MAX": 0.7901
    },
    {
      "Step": 461,
      "brisk-pond-1 - train/loss": 0.8391,
      "brisk-pond-1 - train/loss__MIN": 0.8391,
      "brisk-pond-1 - train/loss__MAX": 0.8391
    },
    {
      "Step": 462,
      "brisk-pond-1 - train/loss": 0.7987,
      "brisk-pond-1 - train/loss__MIN": 0.7987,
      "brisk-pond-1 - train/loss__MAX": 0.7987
    },
    {
      "Step": 463,
      "brisk-pond-1 - train/loss": 0.7619,
      "brisk-pond-1 - train/loss__MIN": 0.7619,
      "brisk-pond-1 - train/loss__MAX": 0.7619
    },
    {
      "Step": 464,
      "brisk-pond-1 - train/loss": 0.807,
      "brisk-pond-1 - train/loss__MIN": 0.807,
      "brisk-pond-1 - train/loss__MAX": 0.807
    },
    {
      "Step": 465,
      "brisk-pond-1 - train/loss": 0.734,
      "brisk-pond-1 - train/loss__MIN": 0.734,
      "brisk-pond-1 - train/loss__MAX": 0.734
    },
    {
      "Step": 466,
      "brisk-pond-1 - train/loss": 0.7702,
      "brisk-pond-1 - train/loss__MIN": 0.7702,
      "brisk-pond-1 - train/loss__MAX": 0.7702
    },
    {
      "Step": 467,
      "brisk-pond-1 - train/loss": 0.8009,
      "brisk-pond-1 - train/loss__MIN": 0.8009,
      "brisk-pond-1 - train/loss__MAX": 0.8009
    },
    {
      "Step": 468,
      "brisk-pond-1 - train/loss": 0.7675,
      "brisk-pond-1 - train/loss__MIN": 0.7675,
      "brisk-pond-1 - train/loss__MAX": 0.7675
    },
    {
      "Step": 469,
      "brisk-pond-1 - train/loss": 0.8103,
      "brisk-pond-1 - train/loss__MIN": 0.8103,
      "brisk-pond-1 - train/loss__MAX": 0.8103
    },
    {
      "Step": 470,
      "brisk-pond-1 - train/loss": 0.7637,
      "brisk-pond-1 - train/loss__MIN": 0.7637,
      "brisk-pond-1 - train/loss__MAX": 0.7637
    },
    {
      "Step": 471,
      "brisk-pond-1 - train/loss": 0.7368,
      "brisk-pond-1 - train/loss__MIN": 0.7368,
      "brisk-pond-1 - train/loss__MAX": 0.7368
    },
    {
      "Step": 472,
      "brisk-pond-1 - train/loss": 0.8328,
      "brisk-pond-1 - train/loss__MIN": 0.8328,
      "brisk-pond-1 - train/loss__MAX": 0.8328
    },
    {
      "Step": 473,
      "brisk-pond-1 - train/loss": 0.7265,
      "brisk-pond-1 - train/loss__MIN": 0.7265,
      "brisk-pond-1 - train/loss__MAX": 0.7265
    },
    {
      "Step": 474,
      "brisk-pond-1 - train/loss": 0.8175,
      "brisk-pond-1 - train/loss__MIN": 0.8175,
      "brisk-pond-1 - train/loss__MAX": 0.8175
    },
    {
      "Step": 475,
      "brisk-pond-1 - train/loss": 0.8773,
      "brisk-pond-1 - train/loss__MIN": 0.8773,
      "brisk-pond-1 - train/loss__MAX": 0.8773
    },
    {
      "Step": 476,
      "brisk-pond-1 - train/loss": 0.7816,
      "brisk-pond-1 - train/loss__MIN": 0.7816,
      "brisk-pond-1 - train/loss__MAX": 0.7816
    },
    {
      "Step": 477,
      "brisk-pond-1 - train/loss": 0.802,
      "brisk-pond-1 - train/loss__MIN": 0.802,
      "brisk-pond-1 - train/loss__MAX": 0.802
    },
    {
      "Step": 478,
      "brisk-pond-1 - train/loss": 0.7295,
      "brisk-pond-1 - train/loss__MIN": 0.7295,
      "brisk-pond-1 - train/loss__MAX": 0.7295
    },
    {
      "Step": 479,
      "brisk-pond-1 - train/loss": 0.7827,
      "brisk-pond-1 - train/loss__MIN": 0.7827,
      "brisk-pond-1 - train/loss__MAX": 0.7827
    },
    {
      "Step": 480,
      "brisk-pond-1 - train/loss": 0.8475,
      "brisk-pond-1 - train/loss__MIN": 0.8475,
      "brisk-pond-1 - train/loss__MAX": 0.8475
    },
    {
      "Step": 481,
      "brisk-pond-1 - train/loss": 0.7221,
      "brisk-pond-1 - train/loss__MIN": 0.7221,
      "brisk-pond-1 - train/loss__MAX": 0.7221
    },
    {
      "Step": 482,
      "brisk-pond-1 - train/loss": 0.6763,
      "brisk-pond-1 - train/loss__MIN": 0.6763,
      "brisk-pond-1 - train/loss__MAX": 0.6763
    },
    {
      "Step": 483,
      "brisk-pond-1 - train/loss": 0.8386,
      "brisk-pond-1 - train/loss__MIN": 0.8386,
      "brisk-pond-1 - train/loss__MAX": 0.8386
    },
    {
      "Step": 484,
      "brisk-pond-1 - train/loss": 0.7681,
      "brisk-pond-1 - train/loss__MIN": 0.7681,
      "brisk-pond-1 - train/loss__MAX": 0.7681
    },
    {
      "Step": 485,
      "brisk-pond-1 - train/loss": 0.8038,
      "brisk-pond-1 - train/loss__MIN": 0.8038,
      "brisk-pond-1 - train/loss__MAX": 0.8038
    },
    {
      "Step": 486,
      "brisk-pond-1 - train/loss": 0.8008,
      "brisk-pond-1 - train/loss__MIN": 0.8008,
      "brisk-pond-1 - train/loss__MAX": 0.8008
    },
    {
      "Step": 487,
      "brisk-pond-1 - train/loss": 0.7799,
      "brisk-pond-1 - train/loss__MIN": 0.7799,
      "brisk-pond-1 - train/loss__MAX": 0.7799
    },
    {
      "Step": 488,
      "brisk-pond-1 - train/loss": 0.7649,
      "brisk-pond-1 - train/loss__MIN": 0.7649,
      "brisk-pond-1 - train/loss__MAX": 0.7649
    },
    {
      "Step": 489,
      "brisk-pond-1 - train/loss": 0.8174,
      "brisk-pond-1 - train/loss__MIN": 0.8174,
      "brisk-pond-1 - train/loss__MAX": 0.8174
    },
    {
      "Step": 490,
      "brisk-pond-1 - train/loss": 0.762,
      "brisk-pond-1 - train/loss__MIN": 0.762,
      "brisk-pond-1 - train/loss__MAX": 0.762
    },
    {
      "Step": 491,
      "brisk-pond-1 - train/loss": 0.7211,
      "brisk-pond-1 - train/loss__MIN": 0.7211,
      "brisk-pond-1 - train/loss__MAX": 0.7211
    },
    {
      "Step": 492,
      "brisk-pond-1 - train/loss": 0.769,
      "brisk-pond-1 - train/loss__MIN": 0.769,
      "brisk-pond-1 - train/loss__MAX": 0.769
    },
    {
      "Step": 493,
      "brisk-pond-1 - train/loss": 0.8012,
      "brisk-pond-1 - train/loss__MIN": 0.8012,
      "brisk-pond-1 - train/loss__MAX": 0.8012
    },
    {
      "Step": 494,
      "brisk-pond-1 - train/loss": 0.7697,
      "brisk-pond-1 - train/loss__MIN": 0.7697,
      "brisk-pond-1 - train/loss__MAX": 0.7697
    },
    {
      "Step": 495,
      "brisk-pond-1 - train/loss": 0.8585,
      "brisk-pond-1 - train/loss__MIN": 0.8585,
      "brisk-pond-1 - train/loss__MAX": 0.8585
    },
    {
      "Step": 496,
      "brisk-pond-1 - train/loss": 0.8565,
      "brisk-pond-1 - train/loss__MIN": 0.8565,
      "brisk-pond-1 - train/loss__MAX": 0.8565
    },
    {
      "Step": 497,
      "brisk-pond-1 - train/loss": 0.7461,
      "brisk-pond-1 - train/loss__MIN": 0.7461,
      "brisk-pond-1 - train/loss__MAX": 0.7461
    },
    {
      "Step": 498,
      "brisk-pond-1 - train/loss": 0.7924,
      "brisk-pond-1 - train/loss__MIN": 0.7924,
      "brisk-pond-1 - train/loss__MAX": 0.7924
    },
    {
      "Step": 499,
      "brisk-pond-1 - train/loss": 0.7947,
      "brisk-pond-1 - train/loss__MIN": 0.7947,
      "brisk-pond-1 - train/loss__MAX": 0.7947
    },
    {
      "Step": 500,
      "brisk-pond-1 - train/loss": 0.7694,
      "brisk-pond-1 - train/loss__MIN": 0.7694,
      "brisk-pond-1 - train/loss__MAX": 0.7694
    },
    {
      "Step": 501,
      "brisk-pond-1 - train/loss": 0.727,
      "brisk-pond-1 - train/loss__MIN": 0.727,
      "brisk-pond-1 - train/loss__MAX": 0.727
    },
    {
      "Step": 502,
      "brisk-pond-1 - train/loss": 0.8609,
      "brisk-pond-1 - train/loss__MIN": 0.8609,
      "brisk-pond-1 - train/loss__MAX": 0.8609
    },
    {
      "Step": 503,
      "brisk-pond-1 - train/loss": 0.7704,
      "brisk-pond-1 - train/loss__MIN": 0.7704,
      "brisk-pond-1 - train/loss__MAX": 0.7704
    },
    {
      "Step": 504,
      "brisk-pond-1 - train/loss": 0.7786,
      "brisk-pond-1 - train/loss__MIN": 0.7786,
      "brisk-pond-1 - train/loss__MAX": 0.7786
    },
    {
      "Step": 505,
      "brisk-pond-1 - train/loss": 0.8299,
      "brisk-pond-1 - train/loss__MIN": 0.8299,
      "brisk-pond-1 - train/loss__MAX": 0.8299
    },
    {
      "Step": 506,
      "brisk-pond-1 - train/loss": 0.7848,
      "brisk-pond-1 - train/loss__MIN": 0.7848,
      "brisk-pond-1 - train/loss__MAX": 0.7848
    },
    {
      "Step": 507,
      "brisk-pond-1 - train/loss": 0.7291,
      "brisk-pond-1 - train/loss__MIN": 0.7291,
      "brisk-pond-1 - train/loss__MAX": 0.7291
    },
    {
      "Step": 508,
      "brisk-pond-1 - train/loss": 0.8529,
      "brisk-pond-1 - train/loss__MIN": 0.8529,
      "brisk-pond-1 - train/loss__MAX": 0.8529
    },
    {
      "Step": 509,
      "brisk-pond-1 - train/loss": 0.7925,
      "brisk-pond-1 - train/loss__MIN": 0.7925,
      "brisk-pond-1 - train/loss__MAX": 0.7925
    },
    {
      "Step": 510,
      "brisk-pond-1 - train/loss": 0.7676,
      "brisk-pond-1 - train/loss__MIN": 0.7676,
      "brisk-pond-1 - train/loss__MAX": 0.7676
    },
    {
      "Step": 511,
      "brisk-pond-1 - train/loss": 0.7822,
      "brisk-pond-1 - train/loss__MIN": 0.7822,
      "brisk-pond-1 - train/loss__MAX": 0.7822
    },
    {
      "Step": 512,
      "brisk-pond-1 - train/loss": 0.8063,
      "brisk-pond-1 - train/loss__MIN": 0.8063,
      "brisk-pond-1 - train/loss__MAX": 0.8063
    },
    {
      "Step": 513,
      "brisk-pond-1 - train/loss": 0.7579,
      "brisk-pond-1 - train/loss__MIN": 0.7579,
      "brisk-pond-1 - train/loss__MAX": 0.7579
    },
    {
      "Step": 514,
      "brisk-pond-1 - train/loss": 0.7291,
      "brisk-pond-1 - train/loss__MIN": 0.7291,
      "brisk-pond-1 - train/loss__MAX": 0.7291
    },
    {
      "Step": 515,
      "brisk-pond-1 - train/loss": 0.7877,
      "brisk-pond-1 - train/loss__MIN": 0.7877,
      "brisk-pond-1 - train/loss__MAX": 0.7877
    },
    {
      "Step": 516,
      "brisk-pond-1 - train/loss": 0.8108,
      "brisk-pond-1 - train/loss__MIN": 0.8108,
      "brisk-pond-1 - train/loss__MAX": 0.8108
    },
    {
      "Step": 517,
      "brisk-pond-1 - train/loss": 0.7512,
      "brisk-pond-1 - train/loss__MIN": 0.7512,
      "brisk-pond-1 - train/loss__MAX": 0.7512
    },
    {
      "Step": 518,
      "brisk-pond-1 - train/loss": 0.7721,
      "brisk-pond-1 - train/loss__MIN": 0.7721,
      "brisk-pond-1 - train/loss__MAX": 0.7721
    },
    {
      "Step": 519,
      "brisk-pond-1 - train/loss": 0.7998,
      "brisk-pond-1 - train/loss__MIN": 0.7998,
      "brisk-pond-1 - train/loss__MAX": 0.7998
    },
    {
      "Step": 520,
      "brisk-pond-1 - train/loss": 0.7919,
      "brisk-pond-1 - train/loss__MIN": 0.7919,
      "brisk-pond-1 - train/loss__MAX": 0.7919
    },
    {
      "Step": 521,
      "brisk-pond-1 - train/loss": 0.7289,
      "brisk-pond-1 - train/loss__MIN": 0.7289,
      "brisk-pond-1 - train/loss__MAX": 0.7289
    },
    {
      "Step": 522,
      "brisk-pond-1 - train/loss": 0.7627,
      "brisk-pond-1 - train/loss__MIN": 0.7627,
      "brisk-pond-1 - train/loss__MAX": 0.7627
    },
    {
      "Step": 523,
      "brisk-pond-1 - train/loss": 0.8318,
      "brisk-pond-1 - train/loss__MIN": 0.8318,
      "brisk-pond-1 - train/loss__MAX": 0.8318
    },
    {
      "Step": 524,
      "brisk-pond-1 - train/loss": 0.7655,
      "brisk-pond-1 - train/loss__MIN": 0.7655,
      "brisk-pond-1 - train/loss__MAX": 0.7655
    },
    {
      "Step": 525,
      "brisk-pond-1 - train/loss": 0.7857,
      "brisk-pond-1 - train/loss__MIN": 0.7857,
      "brisk-pond-1 - train/loss__MAX": 0.7857
    },
    {
      "Step": 526,
      "brisk-pond-1 - train/loss": 0.8181,
      "brisk-pond-1 - train/loss__MIN": 0.8181,
      "brisk-pond-1 - train/loss__MAX": 0.8181
    },
    {
      "Step": 527,
      "brisk-pond-1 - train/loss": 0.7599,
      "brisk-pond-1 - train/loss__MIN": 0.7599,
      "brisk-pond-1 - train/loss__MAX": 0.7599
    },
    {
      "Step": 528,
      "brisk-pond-1 - train/loss": 0.783,
      "brisk-pond-1 - train/loss__MIN": 0.783,
      "brisk-pond-1 - train/loss__MAX": 0.783
    },
    {
      "Step": 529,
      "brisk-pond-1 - train/loss": 0.7602,
      "brisk-pond-1 - train/loss__MIN": 0.7602,
      "brisk-pond-1 - train/loss__MAX": 0.7602
    },
    {
      "Step": 530,
      "brisk-pond-1 - train/loss": 0.775,
      "brisk-pond-1 - train/loss__MIN": 0.775,
      "brisk-pond-1 - train/loss__MAX": 0.775
    },
    {
      "Step": 531,
      "brisk-pond-1 - train/loss": 0.8244,
      "brisk-pond-1 - train/loss__MIN": 0.8244,
      "brisk-pond-1 - train/loss__MAX": 0.8244
    },
    {
      "Step": 532,
      "brisk-pond-1 - train/loss": 0.798,
      "brisk-pond-1 - train/loss__MIN": 0.798,
      "brisk-pond-1 - train/loss__MAX": 0.798
    },
    {
      "Step": 533,
      "brisk-pond-1 - train/loss": 0.7745,
      "brisk-pond-1 - train/loss__MIN": 0.7745,
      "brisk-pond-1 - train/loss__MAX": 0.7745
    },
    {
      "Step": 534,
      "brisk-pond-1 - train/loss": 0.7504,
      "brisk-pond-1 - train/loss__MIN": 0.7504,
      "brisk-pond-1 - train/loss__MAX": 0.7504
    },
    {
      "Step": 535,
      "brisk-pond-1 - train/loss": 0.778,
      "brisk-pond-1 - train/loss__MIN": 0.778,
      "brisk-pond-1 - train/loss__MAX": 0.778
    },
    {
      "Step": 536,
      "brisk-pond-1 - train/loss": 0.8051,
      "brisk-pond-1 - train/loss__MIN": 0.8051,
      "brisk-pond-1 - train/loss__MAX": 0.8051
    },
    {
      "Step": 537,
      "brisk-pond-1 - train/loss": 0.7966,
      "brisk-pond-1 - train/loss__MIN": 0.7966,
      "brisk-pond-1 - train/loss__MAX": 0.7966
    },
    {
      "Step": 538,
      "brisk-pond-1 - train/loss": 0.7533,
      "brisk-pond-1 - train/loss__MIN": 0.7533,
      "brisk-pond-1 - train/loss__MAX": 0.7533
    },
    {
      "Step": 539,
      "brisk-pond-1 - train/loss": 0.795,
      "brisk-pond-1 - train/loss__MIN": 0.795,
      "brisk-pond-1 - train/loss__MAX": 0.795
    },
    {
      "Step": 540,
      "brisk-pond-1 - train/loss": 0.75,
      "brisk-pond-1 - train/loss__MIN": 0.75,
      "brisk-pond-1 - train/loss__MAX": 0.75
    },
    {
      "Step": 541,
      "brisk-pond-1 - train/loss": 0.7505,
      "brisk-pond-1 - train/loss__MIN": 0.7505,
      "brisk-pond-1 - train/loss__MAX": 0.7505
    },
    {
      "Step": 542,
      "brisk-pond-1 - train/loss": 0.794,
      "brisk-pond-1 - train/loss__MIN": 0.794,
      "brisk-pond-1 - train/loss__MAX": 0.794
    },
    {
      "Step": 543,
      "brisk-pond-1 - train/loss": 0.7714,
      "brisk-pond-1 - train/loss__MIN": 0.7714,
      "brisk-pond-1 - train/loss__MAX": 0.7714
    },
    {
      "Step": 544,
      "brisk-pond-1 - train/loss": 0.8231,
      "brisk-pond-1 - train/loss__MIN": 0.8231,
      "brisk-pond-1 - train/loss__MAX": 0.8231
    },
    {
      "Step": 545,
      "brisk-pond-1 - train/loss": 0.7838,
      "brisk-pond-1 - train/loss__MIN": 0.7838,
      "brisk-pond-1 - train/loss__MAX": 0.7838
    },
    {
      "Step": 546,
      "brisk-pond-1 - train/loss": 0.7321,
      "brisk-pond-1 - train/loss__MIN": 0.7321,
      "brisk-pond-1 - train/loss__MAX": 0.7321
    },
    {
      "Step": 547,
      "brisk-pond-1 - train/loss": 0.7339,
      "brisk-pond-1 - train/loss__MIN": 0.7339,
      "brisk-pond-1 - train/loss__MAX": 0.7339
    },
    {
      "Step": 548,
      "brisk-pond-1 - train/loss": 0.721,
      "brisk-pond-1 - train/loss__MIN": 0.721,
      "brisk-pond-1 - train/loss__MAX": 0.721
    },
    {
      "Step": 549,
      "brisk-pond-1 - train/loss": 0.8506,
      "brisk-pond-1 - train/loss__MIN": 0.8506,
      "brisk-pond-1 - train/loss__MAX": 0.8506
    },
    {
      "Step": 550,
      "brisk-pond-1 - train/loss": 0.7561,
      "brisk-pond-1 - train/loss__MIN": 0.7561,
      "brisk-pond-1 - train/loss__MAX": 0.7561
    },
    {
      "Step": 551,
      "brisk-pond-1 - train/loss": 0.7465,
      "brisk-pond-1 - train/loss__MIN": 0.7465,
      "brisk-pond-1 - train/loss__MAX": 0.7465
    },
    {
      "Step": 552,
      "brisk-pond-1 - train/loss": 0.7478,
      "brisk-pond-1 - train/loss__MIN": 0.7478,
      "brisk-pond-1 - train/loss__MAX": 0.7478
    },
    {
      "Step": 553,
      "brisk-pond-1 - train/loss": 0.7302,
      "brisk-pond-1 - train/loss__MIN": 0.7302,
      "brisk-pond-1 - train/loss__MAX": 0.7302
    },
    {
      "Step": 554,
      "brisk-pond-1 - train/loss": 0.8062,
      "brisk-pond-1 - train/loss__MIN": 0.8062,
      "brisk-pond-1 - train/loss__MAX": 0.8062
    },
    {
      "Step": 555,
      "brisk-pond-1 - train/loss": 0.7409,
      "brisk-pond-1 - train/loss__MIN": 0.7409,
      "brisk-pond-1 - train/loss__MAX": 0.7409
    },
    {
      "Step": 556,
      "brisk-pond-1 - train/loss": 0.77,
      "brisk-pond-1 - train/loss__MIN": 0.77,
      "brisk-pond-1 - train/loss__MAX": 0.77
    },
    {
      "Step": 557,
      "brisk-pond-1 - train/loss": 0.7967,
      "brisk-pond-1 - train/loss__MIN": 0.7967,
      "brisk-pond-1 - train/loss__MAX": 0.7967
    },
    {
      "Step": 558,
      "brisk-pond-1 - train/loss": 0.7552,
      "brisk-pond-1 - train/loss__MIN": 0.7552,
      "brisk-pond-1 - train/loss__MAX": 0.7552
    },
    {
      "Step": 559,
      "brisk-pond-1 - train/loss": 0.8088,
      "brisk-pond-1 - train/loss__MIN": 0.8088,
      "brisk-pond-1 - train/loss__MAX": 0.8088
    },
    {
      "Step": 560,
      "brisk-pond-1 - train/loss": 0.7888,
      "brisk-pond-1 - train/loss__MIN": 0.7888,
      "brisk-pond-1 - train/loss__MAX": 0.7888
    },
    {
      "Step": 561,
      "brisk-pond-1 - train/loss": 0.7731,
      "brisk-pond-1 - train/loss__MIN": 0.7731,
      "brisk-pond-1 - train/loss__MAX": 0.7731
    },
    {
      "Step": 562,
      "brisk-pond-1 - train/loss": 0.7373,
      "brisk-pond-1 - train/loss__MIN": 0.7373,
      "brisk-pond-1 - train/loss__MAX": 0.7373
    },
    {
      "Step": 563,
      "brisk-pond-1 - train/loss": 0.7291,
      "brisk-pond-1 - train/loss__MIN": 0.7291,
      "brisk-pond-1 - train/loss__MAX": 0.7291
    },
    {
      "Step": 564,
      "brisk-pond-1 - train/loss": 0.7632,
      "brisk-pond-1 - train/loss__MIN": 0.7632,
      "brisk-pond-1 - train/loss__MAX": 0.7632
    },
    {
      "Step": 565,
      "brisk-pond-1 - train/loss": 0.8374,
      "brisk-pond-1 - train/loss__MIN": 0.8374,
      "brisk-pond-1 - train/loss__MAX": 0.8374
    },
    {
      "Step": 566,
      "brisk-pond-1 - train/loss": 0.7873,
      "brisk-pond-1 - train/loss__MIN": 0.7873,
      "brisk-pond-1 - train/loss__MAX": 0.7873
    },
    {
      "Step": 567,
      "brisk-pond-1 - train/loss": 0.7982,
      "brisk-pond-1 - train/loss__MIN": 0.7982,
      "brisk-pond-1 - train/loss__MAX": 0.7982
    },
    {
      "Step": 568,
      "brisk-pond-1 - train/loss": 0.7825,
      "brisk-pond-1 - train/loss__MIN": 0.7825,
      "brisk-pond-1 - train/loss__MAX": 0.7825
    },
    {
      "Step": 569,
      "brisk-pond-1 - train/loss": 0.828,
      "brisk-pond-1 - train/loss__MIN": 0.828,
      "brisk-pond-1 - train/loss__MAX": 0.828
    },
    {
      "Step": 570,
      "brisk-pond-1 - train/loss": 0.8032,
      "brisk-pond-1 - train/loss__MIN": 0.8032,
      "brisk-pond-1 - train/loss__MAX": 0.8032
    },
    {
      "Step": 571,
      "brisk-pond-1 - train/loss": 0.7996,
      "brisk-pond-1 - train/loss__MIN": 0.7996,
      "brisk-pond-1 - train/loss__MAX": 0.7996
    },
    {
      "Step": 572,
      "brisk-pond-1 - train/loss": 0.7624,
      "brisk-pond-1 - train/loss__MIN": 0.7624,
      "brisk-pond-1 - train/loss__MAX": 0.7624
    },
    {
      "Step": 573,
      "brisk-pond-1 - train/loss": 0.8201,
      "brisk-pond-1 - train/loss__MIN": 0.8201,
      "brisk-pond-1 - train/loss__MAX": 0.8201
    },
    {
      "Step": 574,
      "brisk-pond-1 - train/loss": 0.7576,
      "brisk-pond-1 - train/loss__MIN": 0.7576,
      "brisk-pond-1 - train/loss__MAX": 0.7576
    },
    {
      "Step": 575,
      "brisk-pond-1 - train/loss": 0.8099,
      "brisk-pond-1 - train/loss__MIN": 0.8099,
      "brisk-pond-1 - train/loss__MAX": 0.8099
    },
    {
      "Step": 576,
      "brisk-pond-1 - train/loss": 0.8204,
      "brisk-pond-1 - train/loss__MIN": 0.8204,
      "brisk-pond-1 - train/loss__MAX": 0.8204
    },
    {
      "Step": 577,
      "brisk-pond-1 - train/loss": 0.7758,
      "brisk-pond-1 - train/loss__MIN": 0.7758,
      "brisk-pond-1 - train/loss__MAX": 0.7758
    },
    {
      "Step": 578,
      "brisk-pond-1 - train/loss": 0.6984,
      "brisk-pond-1 - train/loss__MIN": 0.6984,
      "brisk-pond-1 - train/loss__MAX": 0.6984
    },
    {
      "Step": 579,
      "brisk-pond-1 - train/loss": 0.8039,
      "brisk-pond-1 - train/loss__MIN": 0.8039,
      "brisk-pond-1 - train/loss__MAX": 0.8039
    },
    {
      "Step": 580,
      "brisk-pond-1 - train/loss": 0.7831,
      "brisk-pond-1 - train/loss__MIN": 0.7831,
      "brisk-pond-1 - train/loss__MAX": 0.7831
    },
    {
      "Step": 581,
      "brisk-pond-1 - train/loss": 0.7676,
      "brisk-pond-1 - train/loss__MIN": 0.7676,
      "brisk-pond-1 - train/loss__MAX": 0.7676
    },
    {
      "Step": 582,
      "brisk-pond-1 - train/loss": 0.7316,
      "brisk-pond-1 - train/loss__MIN": 0.7316,
      "brisk-pond-1 - train/loss__MAX": 0.7316
    },
    {
      "Step": 583,
      "brisk-pond-1 - train/loss": 0.7487,
      "brisk-pond-1 - train/loss__MIN": 0.7487,
      "brisk-pond-1 - train/loss__MAX": 0.7487
    },
    {
      "Step": 584,
      "brisk-pond-1 - train/loss": 0.8376,
      "brisk-pond-1 - train/loss__MIN": 0.8376,
      "brisk-pond-1 - train/loss__MAX": 0.8376
    },
    {
      "Step": 585,
      "brisk-pond-1 - train/loss": 0.7528,
      "brisk-pond-1 - train/loss__MIN": 0.7528,
      "brisk-pond-1 - train/loss__MAX": 0.7528
    },
    {
      "Step": 586,
      "brisk-pond-1 - train/loss": 0.8012,
      "brisk-pond-1 - train/loss__MIN": 0.8012,
      "brisk-pond-1 - train/loss__MAX": 0.8012
    },
    {
      "Step": 587,
      "brisk-pond-1 - train/loss": 0.7605,
      "brisk-pond-1 - train/loss__MIN": 0.7605,
      "brisk-pond-1 - train/loss__MAX": 0.7605
    },
    {
      "Step": 588,
      "brisk-pond-1 - train/loss": 0.7683,
      "brisk-pond-1 - train/loss__MIN": 0.7683,
      "brisk-pond-1 - train/loss__MAX": 0.7683
    },
    {
      "Step": 589,
      "brisk-pond-1 - train/loss": 0.8014,
      "brisk-pond-1 - train/loss__MIN": 0.8014,
      "brisk-pond-1 - train/loss__MAX": 0.8014
    },
    {
      "Step": 590,
      "brisk-pond-1 - train/loss": 0.7181,
      "brisk-pond-1 - train/loss__MIN": 0.7181,
      "brisk-pond-1 - train/loss__MAX": 0.7181
    },
    {
      "Step": 591,
      "brisk-pond-1 - train/loss": 0.7411,
      "brisk-pond-1 - train/loss__MIN": 0.7411,
      "brisk-pond-1 - train/loss__MAX": 0.7411
    },
    {
      "Step": 592,
      "brisk-pond-1 - train/loss": 0.7658,
      "brisk-pond-1 - train/loss__MIN": 0.7658,
      "brisk-pond-1 - train/loss__MAX": 0.7658
    },
    {
      "Step": 593,
      "brisk-pond-1 - train/loss": 0.7145,
      "brisk-pond-1 - train/loss__MIN": 0.7145,
      "brisk-pond-1 - train/loss__MAX": 0.7145
    },
    {
      "Step": 594,
      "brisk-pond-1 - train/loss": 0.7981,
      "brisk-pond-1 - train/loss__MIN": 0.7981,
      "brisk-pond-1 - train/loss__MAX": 0.7981
    },
    {
      "Step": 595,
      "brisk-pond-1 - train/loss": 0.8044,
      "brisk-pond-1 - train/loss__MIN": 0.8044,
      "brisk-pond-1 - train/loss__MAX": 0.8044
    },
    {
      "Step": 596,
      "brisk-pond-1 - train/loss": 0.8218,
      "brisk-pond-1 - train/loss__MIN": 0.8218,
      "brisk-pond-1 - train/loss__MAX": 0.8218
    },
    {
      "Step": 597,
      "brisk-pond-1 - train/loss": 0.8056,
      "brisk-pond-1 - train/loss__MIN": 0.8056,
      "brisk-pond-1 - train/loss__MAX": 0.8056
    },
    {
      "Step": 598,
      "brisk-pond-1 - train/loss": 0.7631,
      "brisk-pond-1 - train/loss__MIN": 0.7631,
      "brisk-pond-1 - train/loss__MAX": 0.7631
    },
    {
      "Step": 599,
      "brisk-pond-1 - train/loss": 0.7949,
      "brisk-pond-1 - train/loss__MIN": 0.7949,
      "brisk-pond-1 - train/loss__MAX": 0.7949
    },
    {
      "Step": 600,
      "brisk-pond-1 - train/loss": 0.7637,
      "brisk-pond-1 - train/loss__MIN": 0.7637,
      "brisk-pond-1 - train/loss__MAX": 0.7637
    },
    {
      "Step": 601,
      "brisk-pond-1 - train/loss": 0.7785,
      "brisk-pond-1 - train/loss__MIN": 0.7785,
      "brisk-pond-1 - train/loss__MAX": 0.7785
    },
    {
      "Step": 603,
      "brisk-pond-1 - train/loss": 0.7911,
      "brisk-pond-1 - train/loss__MIN": 0.7911,
      "brisk-pond-1 - train/loss__MAX": 0.7911
    },
    {
      "Step": 604,
      "brisk-pond-1 - train/loss": 0.8331,
      "brisk-pond-1 - train/loss__MIN": 0.8331,
      "brisk-pond-1 - train/loss__MAX": 0.8331
    },
    {
      "Step": 605,
      "brisk-pond-1 - train/loss": 0.8153,
      "brisk-pond-1 - train/loss__MIN": 0.8153,
      "brisk-pond-1 - train/loss__MAX": 0.8153
    },
    {
      "Step": 606,
      "brisk-pond-1 - train/loss": 0.7532,
      "brisk-pond-1 - train/loss__MIN": 0.7532,
      "brisk-pond-1 - train/loss__MAX": 0.7532
    },
    {
      "Step": 607,
      "brisk-pond-1 - train/loss": 0.8061,
      "brisk-pond-1 - train/loss__MIN": 0.8061,
      "brisk-pond-1 - train/loss__MAX": 0.8061
    },
    {
      "Step": 608,
      "brisk-pond-1 - train/loss": 0.766,
      "brisk-pond-1 - train/loss__MIN": 0.766,
      "brisk-pond-1 - train/loss__MAX": 0.766
    },
    {
      "Step": 609,
      "brisk-pond-1 - train/loss": 0.746,
      "brisk-pond-1 - train/loss__MIN": 0.746,
      "brisk-pond-1 - train/loss__MAX": 0.746
    },
    {
      "Step": 610,
      "brisk-pond-1 - train/loss": 0.7407,
      "brisk-pond-1 - train/loss__MIN": 0.7407,
      "brisk-pond-1 - train/loss__MAX": 0.7407
    },
    {
      "Step": 611,
      "brisk-pond-1 - train/loss": 0.7239,
      "brisk-pond-1 - train/loss__MIN": 0.7239,
      "brisk-pond-1 - train/loss__MAX": 0.7239
    },
    {
      "Step": 612,
      "brisk-pond-1 - train/loss": 0.7434,
      "brisk-pond-1 - train/loss__MIN": 0.7434,
      "brisk-pond-1 - train/loss__MAX": 0.7434
    },
    {
      "Step": 613,
      "brisk-pond-1 - train/loss": 0.7957,
      "brisk-pond-1 - train/loss__MIN": 0.7957,
      "brisk-pond-1 - train/loss__MAX": 0.7957
    },
    {
      "Step": 614,
      "brisk-pond-1 - train/loss": 0.8012,
      "brisk-pond-1 - train/loss__MIN": 0.8012,
      "brisk-pond-1 - train/loss__MAX": 0.8012
    },
    {
      "Step": 615,
      "brisk-pond-1 - train/loss": 0.7528,
      "brisk-pond-1 - train/loss__MIN": 0.7528,
      "brisk-pond-1 - train/loss__MAX": 0.7528
    },
    {
      "Step": 616,
      "brisk-pond-1 - train/loss": 0.7638,
      "brisk-pond-1 - train/loss__MIN": 0.7638,
      "brisk-pond-1 - train/loss__MAX": 0.7638
    },
    {
      "Step": 617,
      "brisk-pond-1 - train/loss": 0.7559,
      "brisk-pond-1 - train/loss__MIN": 0.7559,
      "brisk-pond-1 - train/loss__MAX": 0.7559
    },
    {
      "Step": 618,
      "brisk-pond-1 - train/loss": 0.751,
      "brisk-pond-1 - train/loss__MIN": 0.751,
      "brisk-pond-1 - train/loss__MAX": 0.751
    },
    {
      "Step": 619,
      "brisk-pond-1 - train/loss": 0.8162,
      "brisk-pond-1 - train/loss__MIN": 0.8162,
      "brisk-pond-1 - train/loss__MAX": 0.8162
    },
    {
      "Step": 620,
      "brisk-pond-1 - train/loss": 0.7334,
      "brisk-pond-1 - train/loss__MIN": 0.7334,
      "brisk-pond-1 - train/loss__MAX": 0.7334
    },
    {
      "Step": 621,
      "brisk-pond-1 - train/loss": 0.7694,
      "brisk-pond-1 - train/loss__MIN": 0.7694,
      "brisk-pond-1 - train/loss__MAX": 0.7694
    },
    {
      "Step": 622,
      "brisk-pond-1 - train/loss": 0.7493,
      "brisk-pond-1 - train/loss__MIN": 0.7493,
      "brisk-pond-1 - train/loss__MAX": 0.7493
    },
    {
      "Step": 623,
      "brisk-pond-1 - train/loss": 0.753,
      "brisk-pond-1 - train/loss__MIN": 0.753,
      "brisk-pond-1 - train/loss__MAX": 0.753
    },
    {
      "Step": 624,
      "brisk-pond-1 - train/loss": 0.8291,
      "brisk-pond-1 - train/loss__MIN": 0.8291,
      "brisk-pond-1 - train/loss__MAX": 0.8291
    },
    {
      "Step": 625,
      "brisk-pond-1 - train/loss": 0.7889,
      "brisk-pond-1 - train/loss__MIN": 0.7889,
      "brisk-pond-1 - train/loss__MAX": 0.7889
    },
    {
      "Step": 626,
      "brisk-pond-1 - train/loss": 0.7511,
      "brisk-pond-1 - train/loss__MIN": 0.7511,
      "brisk-pond-1 - train/loss__MAX": 0.7511
    },
    {
      "Step": 627,
      "brisk-pond-1 - train/loss": 0.863,
      "brisk-pond-1 - train/loss__MIN": 0.863,
      "brisk-pond-1 - train/loss__MAX": 0.863
    },
    {
      "Step": 628,
      "brisk-pond-1 - train/loss": 0.7733,
      "brisk-pond-1 - train/loss__MIN": 0.7733,
      "brisk-pond-1 - train/loss__MAX": 0.7733
    },
    {
      "Step": 629,
      "brisk-pond-1 - train/loss": 0.7677,
      "brisk-pond-1 - train/loss__MIN": 0.7677,
      "brisk-pond-1 - train/loss__MAX": 0.7677
    },
    {
      "Step": 630,
      "brisk-pond-1 - train/loss": 0.7375,
      "brisk-pond-1 - train/loss__MIN": 0.7375,
      "brisk-pond-1 - train/loss__MAX": 0.7375
    },
    {
      "Step": 631,
      "brisk-pond-1 - train/loss": 0.7654,
      "brisk-pond-1 - train/loss__MIN": 0.7654,
      "brisk-pond-1 - train/loss__MAX": 0.7654
    },
    {
      "Step": 632,
      "brisk-pond-1 - train/loss": 0.8211,
      "brisk-pond-1 - train/loss__MIN": 0.8211,
      "brisk-pond-1 - train/loss__MAX": 0.8211
    },
    {
      "Step": 633,
      "brisk-pond-1 - train/loss": 0.7393,
      "brisk-pond-1 - train/loss__MIN": 0.7393,
      "brisk-pond-1 - train/loss__MAX": 0.7393
    },
    {
      "Step": 634,
      "brisk-pond-1 - train/loss": 0.7761,
      "brisk-pond-1 - train/loss__MIN": 0.7761,
      "brisk-pond-1 - train/loss__MAX": 0.7761
    },
    {
      "Step": 635,
      "brisk-pond-1 - train/loss": 0.7902,
      "brisk-pond-1 - train/loss__MIN": 0.7902,
      "brisk-pond-1 - train/loss__MAX": 0.7902
    },
    {
      "Step": 636,
      "brisk-pond-1 - train/loss": 0.8505,
      "brisk-pond-1 - train/loss__MIN": 0.8505,
      "brisk-pond-1 - train/loss__MAX": 0.8505
    },
    {
      "Step": 637,
      "brisk-pond-1 - train/loss": 0.7958,
      "brisk-pond-1 - train/loss__MIN": 0.7958,
      "brisk-pond-1 - train/loss__MAX": 0.7958
    },
    {
      "Step": 638,
      "brisk-pond-1 - train/loss": 0.7672,
      "brisk-pond-1 - train/loss__MIN": 0.7672,
      "brisk-pond-1 - train/loss__MAX": 0.7672
    },
    {
      "Step": 639,
      "brisk-pond-1 - train/loss": 0.7775,
      "brisk-pond-1 - train/loss__MIN": 0.7775,
      "brisk-pond-1 - train/loss__MAX": 0.7775
    },
    {
      "Step": 640,
      "brisk-pond-1 - train/loss": 0.7467,
      "brisk-pond-1 - train/loss__MIN": 0.7467,
      "brisk-pond-1 - train/loss__MAX": 0.7467
    },
    {
      "Step": 641,
      "brisk-pond-1 - train/loss": 0.7706,
      "brisk-pond-1 - train/loss__MIN": 0.7706,
      "brisk-pond-1 - train/loss__MAX": 0.7706
    },
    {
      "Step": 642,
      "brisk-pond-1 - train/loss": 0.7623,
      "brisk-pond-1 - train/loss__MIN": 0.7623,
      "brisk-pond-1 - train/loss__MAX": 0.7623
    },
    {
      "Step": 643,
      "brisk-pond-1 - train/loss": 0.7303,
      "brisk-pond-1 - train/loss__MIN": 0.7303,
      "brisk-pond-1 - train/loss__MAX": 0.7303
    },
    {
      "Step": 644,
      "brisk-pond-1 - train/loss": 0.7885,
      "brisk-pond-1 - train/loss__MIN": 0.7885,
      "brisk-pond-1 - train/loss__MAX": 0.7885
    },
    {
      "Step": 645,
      "brisk-pond-1 - train/loss": 0.7394,
      "brisk-pond-1 - train/loss__MIN": 0.7394,
      "brisk-pond-1 - train/loss__MAX": 0.7394
    },
    {
      "Step": 646,
      "brisk-pond-1 - train/loss": 0.8074,
      "brisk-pond-1 - train/loss__MIN": 0.8074,
      "brisk-pond-1 - train/loss__MAX": 0.8074
    },
    {
      "Step": 647,
      "brisk-pond-1 - train/loss": 0.7281,
      "brisk-pond-1 - train/loss__MIN": 0.7281,
      "brisk-pond-1 - train/loss__MAX": 0.7281
    },
    {
      "Step": 648,
      "brisk-pond-1 - train/loss": 0.7302,
      "brisk-pond-1 - train/loss__MIN": 0.7302,
      "brisk-pond-1 - train/loss__MAX": 0.7302
    },
    {
      "Step": 649,
      "brisk-pond-1 - train/loss": 0.7701,
      "brisk-pond-1 - train/loss__MIN": 0.7701,
      "brisk-pond-1 - train/loss__MAX": 0.7701
    },
    {
      "Step": 650,
      "brisk-pond-1 - train/loss": 0.7459,
      "brisk-pond-1 - train/loss__MIN": 0.7459,
      "brisk-pond-1 - train/loss__MAX": 0.7459
    },
    {
      "Step": 651,
      "brisk-pond-1 - train/loss": 0.7654,
      "brisk-pond-1 - train/loss__MIN": 0.7654,
      "brisk-pond-1 - train/loss__MAX": 0.7654
    },
    {
      "Step": 652,
      "brisk-pond-1 - train/loss": 0.8108,
      "brisk-pond-1 - train/loss__MIN": 0.8108,
      "brisk-pond-1 - train/loss__MAX": 0.8108
    },
    {
      "Step": 653,
      "brisk-pond-1 - train/loss": 0.7781,
      "brisk-pond-1 - train/loss__MIN": 0.7781,
      "brisk-pond-1 - train/loss__MAX": 0.7781
    },
    {
      "Step": 654,
      "brisk-pond-1 - train/loss": 0.831,
      "brisk-pond-1 - train/loss__MIN": 0.831,
      "brisk-pond-1 - train/loss__MAX": 0.831
    },
    {
      "Step": 655,
      "brisk-pond-1 - train/loss": 0.8061,
      "brisk-pond-1 - train/loss__MIN": 0.8061,
      "brisk-pond-1 - train/loss__MAX": 0.8061
    },
    {
      "Step": 656,
      "brisk-pond-1 - train/loss": 0.7138,
      "brisk-pond-1 - train/loss__MIN": 0.7138,
      "brisk-pond-1 - train/loss__MAX": 0.7138
    },
    {
      "Step": 657,
      "brisk-pond-1 - train/loss": 0.7976,
      "brisk-pond-1 - train/loss__MIN": 0.7976,
      "brisk-pond-1 - train/loss__MAX": 0.7976
    },
    {
      "Step": 658,
      "brisk-pond-1 - train/loss": 0.7796,
      "brisk-pond-1 - train/loss__MIN": 0.7796,
      "brisk-pond-1 - train/loss__MAX": 0.7796
    },
    {
      "Step": 659,
      "brisk-pond-1 - train/loss": 0.7412,
      "brisk-pond-1 - train/loss__MIN": 0.7412,
      "brisk-pond-1 - train/loss__MAX": 0.7412
    },
    {
      "Step": 660,
      "brisk-pond-1 - train/loss": 0.7178,
      "brisk-pond-1 - train/loss__MIN": 0.7178,
      "brisk-pond-1 - train/loss__MAX": 0.7178
    },
    {
      "Step": 661,
      "brisk-pond-1 - train/loss": 0.7628,
      "brisk-pond-1 - train/loss__MIN": 0.7628,
      "brisk-pond-1 - train/loss__MAX": 0.7628
    },
    {
      "Step": 662,
      "brisk-pond-1 - train/loss": 0.7881,
      "brisk-pond-1 - train/loss__MIN": 0.7881,
      "brisk-pond-1 - train/loss__MAX": 0.7881
    },
    {
      "Step": 663,
      "brisk-pond-1 - train/loss": 0.7402,
      "brisk-pond-1 - train/loss__MIN": 0.7402,
      "brisk-pond-1 - train/loss__MAX": 0.7402
    },
    {
      "Step": 664,
      "brisk-pond-1 - train/loss": 0.7533,
      "brisk-pond-1 - train/loss__MIN": 0.7533,
      "brisk-pond-1 - train/loss__MAX": 0.7533
    },
    {
      "Step": 665,
      "brisk-pond-1 - train/loss": 0.7475,
      "brisk-pond-1 - train/loss__MIN": 0.7475,
      "brisk-pond-1 - train/loss__MAX": 0.7475
    },
    {
      "Step": 666,
      "brisk-pond-1 - train/loss": 0.773,
      "brisk-pond-1 - train/loss__MIN": 0.773,
      "brisk-pond-1 - train/loss__MAX": 0.773
    },
    {
      "Step": 667,
      "brisk-pond-1 - train/loss": 0.787,
      "brisk-pond-1 - train/loss__MIN": 0.787,
      "brisk-pond-1 - train/loss__MAX": 0.787
    },
    {
      "Step": 668,
      "brisk-pond-1 - train/loss": 0.7481,
      "brisk-pond-1 - train/loss__MIN": 0.7481,
      "brisk-pond-1 - train/loss__MAX": 0.7481
    },
    {
      "Step": 669,
      "brisk-pond-1 - train/loss": 0.77,
      "brisk-pond-1 - train/loss__MIN": 0.77,
      "brisk-pond-1 - train/loss__MAX": 0.77
    },
    {
      "Step": 670,
      "brisk-pond-1 - train/loss": 0.7618,
      "brisk-pond-1 - train/loss__MIN": 0.7618,
      "brisk-pond-1 - train/loss__MAX": 0.7618
    },
    {
      "Step": 671,
      "brisk-pond-1 - train/loss": 0.7542,
      "brisk-pond-1 - train/loss__MIN": 0.7542,
      "brisk-pond-1 - train/loss__MAX": 0.7542
    },
    {
      "Step": 672,
      "brisk-pond-1 - train/loss": 0.7123,
      "brisk-pond-1 - train/loss__MIN": 0.7123,
      "brisk-pond-1 - train/loss__MAX": 0.7123
    },
    {
      "Step": 673,
      "brisk-pond-1 - train/loss": 0.7554,
      "brisk-pond-1 - train/loss__MIN": 0.7554,
      "brisk-pond-1 - train/loss__MAX": 0.7554
    },
    {
      "Step": 674,
      "brisk-pond-1 - train/loss": 0.7513,
      "brisk-pond-1 - train/loss__MIN": 0.7513,
      "brisk-pond-1 - train/loss__MAX": 0.7513
    },
    {
      "Step": 675,
      "brisk-pond-1 - train/loss": 0.7122,
      "brisk-pond-1 - train/loss__MIN": 0.7122,
      "brisk-pond-1 - train/loss__MAX": 0.7122
    },
    {
      "Step": 676,
      "brisk-pond-1 - train/loss": 0.7563,
      "brisk-pond-1 - train/loss__MIN": 0.7563,
      "brisk-pond-1 - train/loss__MAX": 0.7563
    },
    {
      "Step": 677,
      "brisk-pond-1 - train/loss": 0.8144,
      "brisk-pond-1 - train/loss__MIN": 0.8144,
      "brisk-pond-1 - train/loss__MAX": 0.8144
    },
    {
      "Step": 678,
      "brisk-pond-1 - train/loss": 0.7068,
      "brisk-pond-1 - train/loss__MIN": 0.7068,
      "brisk-pond-1 - train/loss__MAX": 0.7068
    },
    {
      "Step": 679,
      "brisk-pond-1 - train/loss": 0.83,
      "brisk-pond-1 - train/loss__MIN": 0.83,
      "brisk-pond-1 - train/loss__MAX": 0.83
    },
    {
      "Step": 680,
      "brisk-pond-1 - train/loss": 0.7524,
      "brisk-pond-1 - train/loss__MIN": 0.7524,
      "brisk-pond-1 - train/loss__MAX": 0.7524
    },
    {
      "Step": 681,
      "brisk-pond-1 - train/loss": 0.7663,
      "brisk-pond-1 - train/loss__MIN": 0.7663,
      "brisk-pond-1 - train/loss__MAX": 0.7663
    },
    {
      "Step": 682,
      "brisk-pond-1 - train/loss": 0.8033,
      "brisk-pond-1 - train/loss__MIN": 0.8033,
      "brisk-pond-1 - train/loss__MAX": 0.8033
    },
    {
      "Step": 683,
      "brisk-pond-1 - train/loss": 0.7346,
      "brisk-pond-1 - train/loss__MIN": 0.7346,
      "brisk-pond-1 - train/loss__MAX": 0.7346
    },
    {
      "Step": 684,
      "brisk-pond-1 - train/loss": 0.7609,
      "brisk-pond-1 - train/loss__MIN": 0.7609,
      "brisk-pond-1 - train/loss__MAX": 0.7609
    },
    {
      "Step": 685,
      "brisk-pond-1 - train/loss": 0.7781,
      "brisk-pond-1 - train/loss__MIN": 0.7781,
      "brisk-pond-1 - train/loss__MAX": 0.7781
    },
    {
      "Step": 686,
      "brisk-pond-1 - train/loss": 0.7623,
      "brisk-pond-1 - train/loss__MIN": 0.7623,
      "brisk-pond-1 - train/loss__MAX": 0.7623
    },
    {
      "Step": 687,
      "brisk-pond-1 - train/loss": 0.7819,
      "brisk-pond-1 - train/loss__MIN": 0.7819,
      "brisk-pond-1 - train/loss__MAX": 0.7819
    },
    {
      "Step": 688,
      "brisk-pond-1 - train/loss": 0.7045,
      "brisk-pond-1 - train/loss__MIN": 0.7045,
      "brisk-pond-1 - train/loss__MAX": 0.7045
    },
    {
      "Step": 689,
      "brisk-pond-1 - train/loss": 0.743,
      "brisk-pond-1 - train/loss__MIN": 0.743,
      "brisk-pond-1 - train/loss__MAX": 0.743
    },
    {
      "Step": 690,
      "brisk-pond-1 - train/loss": 0.7468,
      "brisk-pond-1 - train/loss__MIN": 0.7468,
      "brisk-pond-1 - train/loss__MAX": 0.7468
    },
    {
      "Step": 691,
      "brisk-pond-1 - train/loss": 0.7376,
      "brisk-pond-1 - train/loss__MIN": 0.7376,
      "brisk-pond-1 - train/loss__MAX": 0.7376
    },
    {
      "Step": 692,
      "brisk-pond-1 - train/loss": 0.7991,
      "brisk-pond-1 - train/loss__MIN": 0.7991,
      "brisk-pond-1 - train/loss__MAX": 0.7991
    },
    {
      "Step": 693,
      "brisk-pond-1 - train/loss": 0.7823,
      "brisk-pond-1 - train/loss__MIN": 0.7823,
      "brisk-pond-1 - train/loss__MAX": 0.7823
    },
    {
      "Step": 694,
      "brisk-pond-1 - train/loss": 0.7631,
      "brisk-pond-1 - train/loss__MIN": 0.7631,
      "brisk-pond-1 - train/loss__MAX": 0.7631
    },
    {
      "Step": 695,
      "brisk-pond-1 - train/loss": 0.6825,
      "brisk-pond-1 - train/loss__MIN": 0.6825,
      "brisk-pond-1 - train/loss__MAX": 0.6825
    },
    {
      "Step": 696,
      "brisk-pond-1 - train/loss": 0.8175,
      "brisk-pond-1 - train/loss__MIN": 0.8175,
      "brisk-pond-1 - train/loss__MAX": 0.8175
    },
    {
      "Step": 697,
      "brisk-pond-1 - train/loss": 0.7671,
      "brisk-pond-1 - train/loss__MIN": 0.7671,
      "brisk-pond-1 - train/loss__MAX": 0.7671
    },
    {
      "Step": 698,
      "brisk-pond-1 - train/loss": 0.8259,
      "brisk-pond-1 - train/loss__MIN": 0.8259,
      "brisk-pond-1 - train/loss__MAX": 0.8259
    },
    {
      "Step": 699,
      "brisk-pond-1 - train/loss": 0.7733,
      "brisk-pond-1 - train/loss__MIN": 0.7733,
      "brisk-pond-1 - train/loss__MAX": 0.7733
    },
    {
      "Step": 700,
      "brisk-pond-1 - train/loss": 0.8233,
      "brisk-pond-1 - train/loss__MIN": 0.8233,
      "brisk-pond-1 - train/loss__MAX": 0.8233
    },
    {
      "Step": 701,
      "brisk-pond-1 - train/loss": 0.7424,
      "brisk-pond-1 - train/loss__MIN": 0.7424,
      "brisk-pond-1 - train/loss__MAX": 0.7424
    },
    {
      "Step": 702,
      "brisk-pond-1 - train/loss": 0.7423,
      "brisk-pond-1 - train/loss__MIN": 0.7423,
      "brisk-pond-1 - train/loss__MAX": 0.7423
    },
    {
      "Step": 703,
      "brisk-pond-1 - train/loss": 0.7712,
      "brisk-pond-1 - train/loss__MIN": 0.7712,
      "brisk-pond-1 - train/loss__MAX": 0.7712
    },
    {
      "Step": 704,
      "brisk-pond-1 - train/loss": 0.7595,
      "brisk-pond-1 - train/loss__MIN": 0.7595,
      "brisk-pond-1 - train/loss__MAX": 0.7595
    },
    {
      "Step": 705,
      "brisk-pond-1 - train/loss": 0.7722,
      "brisk-pond-1 - train/loss__MIN": 0.7722,
      "brisk-pond-1 - train/loss__MAX": 0.7722
    },
    {
      "Step": 706,
      "brisk-pond-1 - train/loss": 0.7796,
      "brisk-pond-1 - train/loss__MIN": 0.7796,
      "brisk-pond-1 - train/loss__MAX": 0.7796
    },
    {
      "Step": 707,
      "brisk-pond-1 - train/loss": 0.799,
      "brisk-pond-1 - train/loss__MIN": 0.799,
      "brisk-pond-1 - train/loss__MAX": 0.799
    },
    {
      "Step": 708,
      "brisk-pond-1 - train/loss": 0.6964,
      "brisk-pond-1 - train/loss__MIN": 0.6964,
      "brisk-pond-1 - train/loss__MAX": 0.6964
    },
    {
      "Step": 709,
      "brisk-pond-1 - train/loss": 0.7381,
      "brisk-pond-1 - train/loss__MIN": 0.7381,
      "brisk-pond-1 - train/loss__MAX": 0.7381
    },
    {
      "Step": 710,
      "brisk-pond-1 - train/loss": 0.7684,
      "brisk-pond-1 - train/loss__MIN": 0.7684,
      "brisk-pond-1 - train/loss__MAX": 0.7684
    },
    {
      "Step": 711,
      "brisk-pond-1 - train/loss": 0.7638,
      "brisk-pond-1 - train/loss__MIN": 0.7638,
      "brisk-pond-1 - train/loss__MAX": 0.7638
    },
    {
      "Step": 712,
      "brisk-pond-1 - train/loss": 0.7586,
      "brisk-pond-1 - train/loss__MIN": 0.7586,
      "brisk-pond-1 - train/loss__MAX": 0.7586
    },
    {
      "Step": 713,
      "brisk-pond-1 - train/loss": 0.8121,
      "brisk-pond-1 - train/loss__MIN": 0.8121,
      "brisk-pond-1 - train/loss__MAX": 0.8121
    },
    {
      "Step": 714,
      "brisk-pond-1 - train/loss": 0.6913,
      "brisk-pond-1 - train/loss__MIN": 0.6913,
      "brisk-pond-1 - train/loss__MAX": 0.6913
    },
    {
      "Step": 715,
      "brisk-pond-1 - train/loss": 0.7521,
      "brisk-pond-1 - train/loss__MIN": 0.7521,
      "brisk-pond-1 - train/loss__MAX": 0.7521
    },
    {
      "Step": 716,
      "brisk-pond-1 - train/loss": 0.7537,
      "brisk-pond-1 - train/loss__MIN": 0.7537,
      "brisk-pond-1 - train/loss__MAX": 0.7537
    },
    {
      "Step": 717,
      "brisk-pond-1 - train/loss": 0.8094,
      "brisk-pond-1 - train/loss__MIN": 0.8094,
      "brisk-pond-1 - train/loss__MAX": 0.8094
    },
    {
      "Step": 718,
      "brisk-pond-1 - train/loss": 0.734,
      "brisk-pond-1 - train/loss__MIN": 0.734,
      "brisk-pond-1 - train/loss__MAX": 0.734
    },
    {
      "Step": 719,
      "brisk-pond-1 - train/loss": 0.815,
      "brisk-pond-1 - train/loss__MIN": 0.815,
      "brisk-pond-1 - train/loss__MAX": 0.815
    },
    {
      "Step": 720,
      "brisk-pond-1 - train/loss": 0.7653,
      "brisk-pond-1 - train/loss__MIN": 0.7653,
      "brisk-pond-1 - train/loss__MAX": 0.7653
    },
    {
      "Step": 721,
      "brisk-pond-1 - train/loss": 0.776,
      "brisk-pond-1 - train/loss__MIN": 0.776,
      "brisk-pond-1 - train/loss__MAX": 0.776
    },
    {
      "Step": 722,
      "brisk-pond-1 - train/loss": 0.7712,
      "brisk-pond-1 - train/loss__MIN": 0.7712,
      "brisk-pond-1 - train/loss__MAX": 0.7712
    },
    {
      "Step": 723,
      "brisk-pond-1 - train/loss": 0.7377,
      "brisk-pond-1 - train/loss__MIN": 0.7377,
      "brisk-pond-1 - train/loss__MAX": 0.7377
    },
    {
      "Step": 724,
      "brisk-pond-1 - train/loss": 0.7187,
      "brisk-pond-1 - train/loss__MIN": 0.7187,
      "brisk-pond-1 - train/loss__MAX": 0.7187
    },
    {
      "Step": 725,
      "brisk-pond-1 - train/loss": 0.8053,
      "brisk-pond-1 - train/loss__MIN": 0.8053,
      "brisk-pond-1 - train/loss__MAX": 0.8053
    },
    {
      "Step": 726,
      "brisk-pond-1 - train/loss": 0.7744,
      "brisk-pond-1 - train/loss__MIN": 0.7744,
      "brisk-pond-1 - train/loss__MAX": 0.7744
    },
    {
      "Step": 727,
      "brisk-pond-1 - train/loss": 0.7494,
      "brisk-pond-1 - train/loss__MIN": 0.7494,
      "brisk-pond-1 - train/loss__MAX": 0.7494
    },
    {
      "Step": 728,
      "brisk-pond-1 - train/loss": 0.7184,
      "brisk-pond-1 - train/loss__MIN": 0.7184,
      "brisk-pond-1 - train/loss__MAX": 0.7184
    },
    {
      "Step": 729,
      "brisk-pond-1 - train/loss": 0.7612,
      "brisk-pond-1 - train/loss__MIN": 0.7612,
      "brisk-pond-1 - train/loss__MAX": 0.7612
    },
    {
      "Step": 730,
      "brisk-pond-1 - train/loss": 0.7943,
      "brisk-pond-1 - train/loss__MIN": 0.7943,
      "brisk-pond-1 - train/loss__MAX": 0.7943
    },
    {
      "Step": 731,
      "brisk-pond-1 - train/loss": 0.7429,
      "brisk-pond-1 - train/loss__MIN": 0.7429,
      "brisk-pond-1 - train/loss__MAX": 0.7429
    },
    {
      "Step": 732,
      "brisk-pond-1 - train/loss": 0.7573,
      "brisk-pond-1 - train/loss__MIN": 0.7573,
      "brisk-pond-1 - train/loss__MAX": 0.7573
    },
    {
      "Step": 733,
      "brisk-pond-1 - train/loss": 0.8328,
      "brisk-pond-1 - train/loss__MIN": 0.8328,
      "brisk-pond-1 - train/loss__MAX": 0.8328
    },
    {
      "Step": 734,
      "brisk-pond-1 - train/loss": 0.8262,
      "brisk-pond-1 - train/loss__MIN": 0.8262,
      "brisk-pond-1 - train/loss__MAX": 0.8262
    },
    {
      "Step": 735,
      "brisk-pond-1 - train/loss": 0.7231,
      "brisk-pond-1 - train/loss__MIN": 0.7231,
      "brisk-pond-1 - train/loss__MAX": 0.7231
    },
    {
      "Step": 736,
      "brisk-pond-1 - train/loss": 0.7191,
      "brisk-pond-1 - train/loss__MIN": 0.7191,
      "brisk-pond-1 - train/loss__MAX": 0.7191
    },
    {
      "Step": 737,
      "brisk-pond-1 - train/loss": 0.7696,
      "brisk-pond-1 - train/loss__MIN": 0.7696,
      "brisk-pond-1 - train/loss__MAX": 0.7696
    },
    {
      "Step": 738,
      "brisk-pond-1 - train/loss": 0.7652,
      "brisk-pond-1 - train/loss__MIN": 0.7652,
      "brisk-pond-1 - train/loss__MAX": 0.7652
    },
    {
      "Step": 739,
      "brisk-pond-1 - train/loss": 0.7482,
      "brisk-pond-1 - train/loss__MIN": 0.7482,
      "brisk-pond-1 - train/loss__MAX": 0.7482
    },
    {
      "Step": 740,
      "brisk-pond-1 - train/loss": 0.77,
      "brisk-pond-1 - train/loss__MIN": 0.77,
      "brisk-pond-1 - train/loss__MAX": 0.77
    },
    {
      "Step": 741,
      "brisk-pond-1 - train/loss": 0.7261,
      "brisk-pond-1 - train/loss__MIN": 0.7261,
      "brisk-pond-1 - train/loss__MAX": 0.7261
    },
    {
      "Step": 742,
      "brisk-pond-1 - train/loss": 0.7668,
      "brisk-pond-1 - train/loss__MIN": 0.7668,
      "brisk-pond-1 - train/loss__MAX": 0.7668
    },
    {
      "Step": 743,
      "brisk-pond-1 - train/loss": 0.7891,
      "brisk-pond-1 - train/loss__MIN": 0.7891,
      "brisk-pond-1 - train/loss__MAX": 0.7891
    },
    {
      "Step": 744,
      "brisk-pond-1 - train/loss": 0.7715,
      "brisk-pond-1 - train/loss__MIN": 0.7715,
      "brisk-pond-1 - train/loss__MAX": 0.7715
    },
    {
      "Step": 745,
      "brisk-pond-1 - train/loss": 0.7458,
      "brisk-pond-1 - train/loss__MIN": 0.7458,
      "brisk-pond-1 - train/loss__MAX": 0.7458
    },
    {
      "Step": 746,
      "brisk-pond-1 - train/loss": 0.8159,
      "brisk-pond-1 - train/loss__MIN": 0.8159,
      "brisk-pond-1 - train/loss__MAX": 0.8159
    },
    {
      "Step": 747,
      "brisk-pond-1 - train/loss": 0.7518,
      "brisk-pond-1 - train/loss__MIN": 0.7518,
      "brisk-pond-1 - train/loss__MAX": 0.7518
    },
    {
      "Step": 748,
      "brisk-pond-1 - train/loss": 0.7452,
      "brisk-pond-1 - train/loss__MIN": 0.7452,
      "brisk-pond-1 - train/loss__MAX": 0.7452
    },
    {
      "Step": 749,
      "brisk-pond-1 - train/loss": 0.7303,
      "brisk-pond-1 - train/loss__MIN": 0.7303,
      "brisk-pond-1 - train/loss__MAX": 0.7303
    },
    {
      "Step": 750,
      "brisk-pond-1 - train/loss": 0.794,
      "brisk-pond-1 - train/loss__MIN": 0.794,
      "brisk-pond-1 - train/loss__MAX": 0.794
    },
    {
      "Step": 751,
      "brisk-pond-1 - train/loss": 0.7964,
      "brisk-pond-1 - train/loss__MIN": 0.7964,
      "brisk-pond-1 - train/loss__MAX": 0.7964
    },
    {
      "Step": 752,
      "brisk-pond-1 - train/loss": 0.7403,
      "brisk-pond-1 - train/loss__MIN": 0.7403,
      "brisk-pond-1 - train/loss__MAX": 0.7403
    },
    {
      "Step": 753,
      "brisk-pond-1 - train/loss": 0.7802,
      "brisk-pond-1 - train/loss__MIN": 0.7802,
      "brisk-pond-1 - train/loss__MAX": 0.7802
    },
    {
      "Step": 754,
      "brisk-pond-1 - train/loss": 0.782,
      "brisk-pond-1 - train/loss__MIN": 0.782,
      "brisk-pond-1 - train/loss__MAX": 0.782
    },
    {
      "Step": 755,
      "brisk-pond-1 - train/loss": 0.7158,
      "brisk-pond-1 - train/loss__MIN": 0.7158,
      "brisk-pond-1 - train/loss__MAX": 0.7158
    },
    {
      "Step": 756,
      "brisk-pond-1 - train/loss": 0.7802,
      "brisk-pond-1 - train/loss__MIN": 0.7802,
      "brisk-pond-1 - train/loss__MAX": 0.7802
    },
    {
      "Step": 757,
      "brisk-pond-1 - train/loss": 0.8505,
      "brisk-pond-1 - train/loss__MIN": 0.8505,
      "brisk-pond-1 - train/loss__MAX": 0.8505
    },
    {
      "Step": 758,
      "brisk-pond-1 - train/loss": 0.7477,
      "brisk-pond-1 - train/loss__MIN": 0.7477,
      "brisk-pond-1 - train/loss__MAX": 0.7477
    },
    {
      "Step": 759,
      "brisk-pond-1 - train/loss": 0.7724,
      "brisk-pond-1 - train/loss__MIN": 0.7724,
      "brisk-pond-1 - train/loss__MAX": 0.7724
    },
    {
      "Step": 760,
      "brisk-pond-1 - train/loss": 0.7481,
      "brisk-pond-1 - train/loss__MIN": 0.7481,
      "brisk-pond-1 - train/loss__MAX": 0.7481
    },
    {
      "Step": 761,
      "brisk-pond-1 - train/loss": 0.797,
      "brisk-pond-1 - train/loss__MIN": 0.797,
      "brisk-pond-1 - train/loss__MAX": 0.797
    },
    {
      "Step": 762,
      "brisk-pond-1 - train/loss": 0.8124,
      "brisk-pond-1 - train/loss__MIN": 0.8124,
      "brisk-pond-1 - train/loss__MAX": 0.8124
    },
    {
      "Step": 763,
      "brisk-pond-1 - train/loss": 0.7912,
      "brisk-pond-1 - train/loss__MIN": 0.7912,
      "brisk-pond-1 - train/loss__MAX": 0.7912
    },
    {
      "Step": 764,
      "brisk-pond-1 - train/loss": 0.8101,
      "brisk-pond-1 - train/loss__MIN": 0.8101,
      "brisk-pond-1 - train/loss__MAX": 0.8101
    },
    {
      "Step": 765,
      "brisk-pond-1 - train/loss": 0.7419,
      "brisk-pond-1 - train/loss__MIN": 0.7419,
      "brisk-pond-1 - train/loss__MAX": 0.7419
    },
    {
      "Step": 766,
      "brisk-pond-1 - train/loss": 0.7448,
      "brisk-pond-1 - train/loss__MIN": 0.7448,
      "brisk-pond-1 - train/loss__MAX": 0.7448
    },
    {
      "Step": 767,
      "brisk-pond-1 - train/loss": 0.7619,
      "brisk-pond-1 - train/loss__MIN": 0.7619,
      "brisk-pond-1 - train/loss__MAX": 0.7619
    },
    {
      "Step": 768,
      "brisk-pond-1 - train/loss": 0.779,
      "brisk-pond-1 - train/loss__MIN": 0.779,
      "brisk-pond-1 - train/loss__MAX": 0.779
    },
    {
      "Step": 769,
      "brisk-pond-1 - train/loss": 0.784,
      "brisk-pond-1 - train/loss__MIN": 0.784,
      "brisk-pond-1 - train/loss__MAX": 0.784
    },
    {
      "Step": 770,
      "brisk-pond-1 - train/loss": 0.7739,
      "brisk-pond-1 - train/loss__MIN": 0.7739,
      "brisk-pond-1 - train/loss__MAX": 0.7739
    },
    {
      "Step": 771,
      "brisk-pond-1 - train/loss": 0.7328,
      "brisk-pond-1 - train/loss__MIN": 0.7328,
      "brisk-pond-1 - train/loss__MAX": 0.7328
    },
    {
      "Step": 772,
      "brisk-pond-1 - train/loss": 0.7338,
      "brisk-pond-1 - train/loss__MIN": 0.7338,
      "brisk-pond-1 - train/loss__MAX": 0.7338
    },
    {
      "Step": 773,
      "brisk-pond-1 - train/loss": 0.7909,
      "brisk-pond-1 - train/loss__MIN": 0.7909,
      "brisk-pond-1 - train/loss__MAX": 0.7909
    },
    {
      "Step": 774,
      "brisk-pond-1 - train/loss": 0.7498,
      "brisk-pond-1 - train/loss__MIN": 0.7498,
      "brisk-pond-1 - train/loss__MAX": 0.7498
    },
    {
      "Step": 775,
      "brisk-pond-1 - train/loss": 0.7519,
      "brisk-pond-1 - train/loss__MIN": 0.7519,
      "brisk-pond-1 - train/loss__MAX": 0.7519
    },
    {
      "Step": 776,
      "brisk-pond-1 - train/loss": 0.7873,
      "brisk-pond-1 - train/loss__MIN": 0.7873,
      "brisk-pond-1 - train/loss__MAX": 0.7873
    },
    {
      "Step": 777,
      "brisk-pond-1 - train/loss": 0.7633,
      "brisk-pond-1 - train/loss__MIN": 0.7633,
      "brisk-pond-1 - train/loss__MAX": 0.7633
    },
    {
      "Step": 778,
      "brisk-pond-1 - train/loss": 0.7866,
      "brisk-pond-1 - train/loss__MIN": 0.7866,
      "brisk-pond-1 - train/loss__MAX": 0.7866
    },
    {
      "Step": 779,
      "brisk-pond-1 - train/loss": 0.7103,
      "brisk-pond-1 - train/loss__MIN": 0.7103,
      "brisk-pond-1 - train/loss__MAX": 0.7103
    },
    {
      "Step": 780,
      "brisk-pond-1 - train/loss": 0.7756,
      "brisk-pond-1 - train/loss__MIN": 0.7756,
      "brisk-pond-1 - train/loss__MAX": 0.7756
    },
    {
      "Step": 781,
      "brisk-pond-1 - train/loss": 0.717,
      "brisk-pond-1 - train/loss__MIN": 0.717,
      "brisk-pond-1 - train/loss__MAX": 0.717
    },
    {
      "Step": 782,
      "brisk-pond-1 - train/loss": 0.7389,
      "brisk-pond-1 - train/loss__MIN": 0.7389,
      "brisk-pond-1 - train/loss__MAX": 0.7389
    },
    {
      "Step": 783,
      "brisk-pond-1 - train/loss": 0.7884,
      "brisk-pond-1 - train/loss__MIN": 0.7884,
      "brisk-pond-1 - train/loss__MAX": 0.7884
    },
    {
      "Step": 784,
      "brisk-pond-1 - train/loss": 0.8204,
      "brisk-pond-1 - train/loss__MIN": 0.8204,
      "brisk-pond-1 - train/loss__MAX": 0.8204
    },
    {
      "Step": 785,
      "brisk-pond-1 - train/loss": 0.7466,
      "brisk-pond-1 - train/loss__MIN": 0.7466,
      "brisk-pond-1 - train/loss__MAX": 0.7466
    },
    {
      "Step": 786,
      "brisk-pond-1 - train/loss": 0.8262,
      "brisk-pond-1 - train/loss__MIN": 0.8262,
      "brisk-pond-1 - train/loss__MAX": 0.8262
    },
    {
      "Step": 787,
      "brisk-pond-1 - train/loss": 0.752,
      "brisk-pond-1 - train/loss__MIN": 0.752,
      "brisk-pond-1 - train/loss__MAX": 0.752
    },
    {
      "Step": 788,
      "brisk-pond-1 - train/loss": 0.7601,
      "brisk-pond-1 - train/loss__MIN": 0.7601,
      "brisk-pond-1 - train/loss__MAX": 0.7601
    },
    {
      "Step": 789,
      "brisk-pond-1 - train/loss": 0.7594,
      "brisk-pond-1 - train/loss__MIN": 0.7594,
      "brisk-pond-1 - train/loss__MAX": 0.7594
    },
    {
      "Step": 790,
      "brisk-pond-1 - train/loss": 0.7947,
      "brisk-pond-1 - train/loss__MIN": 0.7947,
      "brisk-pond-1 - train/loss__MAX": 0.7947
    },
    {
      "Step": 791,
      "brisk-pond-1 - train/loss": 0.7848,
      "brisk-pond-1 - train/loss__MIN": 0.7848,
      "brisk-pond-1 - train/loss__MAX": 0.7848
    },
    {
      "Step": 792,
      "brisk-pond-1 - train/loss": 0.7968,
      "brisk-pond-1 - train/loss__MIN": 0.7968,
      "brisk-pond-1 - train/loss__MAX": 0.7968
    },
    {
      "Step": 793,
      "brisk-pond-1 - train/loss": 0.7899,
      "brisk-pond-1 - train/loss__MIN": 0.7899,
      "brisk-pond-1 - train/loss__MAX": 0.7899
    },
    {
      "Step": 794,
      "brisk-pond-1 - train/loss": 0.7415,
      "brisk-pond-1 - train/loss__MIN": 0.7415,
      "brisk-pond-1 - train/loss__MAX": 0.7415
    },
    {
      "Step": 795,
      "brisk-pond-1 - train/loss": 0.749,
      "brisk-pond-1 - train/loss__MIN": 0.749,
      "brisk-pond-1 - train/loss__MAX": 0.749
    },
    {
      "Step": 796,
      "brisk-pond-1 - train/loss": 0.8303,
      "brisk-pond-1 - train/loss__MIN": 0.8303,
      "brisk-pond-1 - train/loss__MAX": 0.8303
    },
    {
      "Step": 797,
      "brisk-pond-1 - train/loss": 0.7282,
      "brisk-pond-1 - train/loss__MIN": 0.7282,
      "brisk-pond-1 - train/loss__MAX": 0.7282
    },
    {
      "Step": 798,
      "brisk-pond-1 - train/loss": 0.7478,
      "brisk-pond-1 - train/loss__MIN": 0.7478,
      "brisk-pond-1 - train/loss__MAX": 0.7478
    },
    {
      "Step": 799,
      "brisk-pond-1 - train/loss": 0.73,
      "brisk-pond-1 - train/loss__MIN": 0.73,
      "brisk-pond-1 - train/loss__MAX": 0.73
    },
    {
      "Step": 800,
      "brisk-pond-1 - train/loss": 0.7336,
      "brisk-pond-1 - train/loss__MIN": 0.7336,
      "brisk-pond-1 - train/loss__MAX": 0.7336
    },
    {
      "Step": 801,
      "brisk-pond-1 - train/loss": 0.8429,
      "brisk-pond-1 - train/loss__MIN": 0.8429,
      "brisk-pond-1 - train/loss__MAX": 0.8429
    },
    {
      "Step": 802,
      "brisk-pond-1 - train/loss": 0.7963,
      "brisk-pond-1 - train/loss__MIN": 0.7963,
      "brisk-pond-1 - train/loss__MAX": 0.7963
    },
    {
      "Step": 804,
      "brisk-pond-1 - train/loss": 0.7611,
      "brisk-pond-1 - train/loss__MIN": 0.7611,
      "brisk-pond-1 - train/loss__MAX": 0.7611
    },
    {
      "Step": 805,
      "brisk-pond-1 - train/loss": 0.7638,
      "brisk-pond-1 - train/loss__MIN": 0.7638,
      "brisk-pond-1 - train/loss__MAX": 0.7638
    },
    {
      "Step": 806,
      "brisk-pond-1 - train/loss": 0.7486,
      "brisk-pond-1 - train/loss__MIN": 0.7486,
      "brisk-pond-1 - train/loss__MAX": 0.7486
    },
    {
      "Step": 807,
      "brisk-pond-1 - train/loss": 0.798,
      "brisk-pond-1 - train/loss__MIN": 0.798,
      "brisk-pond-1 - train/loss__MAX": 0.798
    },
    {
      "Step": 808,
      "brisk-pond-1 - train/loss": 0.7914,
      "brisk-pond-1 - train/loss__MIN": 0.7914,
      "brisk-pond-1 - train/loss__MAX": 0.7914
    },
    {
      "Step": 809,
      "brisk-pond-1 - train/loss": 0.7171,
      "brisk-pond-1 - train/loss__MIN": 0.7171,
      "brisk-pond-1 - train/loss__MAX": 0.7171
    },
    {
      "Step": 810,
      "brisk-pond-1 - train/loss": 0.7124,
      "brisk-pond-1 - train/loss__MIN": 0.7124,
      "brisk-pond-1 - train/loss__MAX": 0.7124
    },
    {
      "Step": 811,
      "brisk-pond-1 - train/loss": 0.759,
      "brisk-pond-1 - train/loss__MIN": 0.759,
      "brisk-pond-1 - train/loss__MAX": 0.759
    },
    {
      "Step": 812,
      "brisk-pond-1 - train/loss": 0.7735,
      "brisk-pond-1 - train/loss__MIN": 0.7735,
      "brisk-pond-1 - train/loss__MAX": 0.7735
    },
    {
      "Step": 813,
      "brisk-pond-1 - train/loss": 0.7159,
      "brisk-pond-1 - train/loss__MIN": 0.7159,
      "brisk-pond-1 - train/loss__MAX": 0.7159
    },
    {
      "Step": 814,
      "brisk-pond-1 - train/loss": 0.7769,
      "brisk-pond-1 - train/loss__MIN": 0.7769,
      "brisk-pond-1 - train/loss__MAX": 0.7769
    },
    {
      "Step": 815,
      "brisk-pond-1 - train/loss": 0.7696,
      "brisk-pond-1 - train/loss__MIN": 0.7696,
      "brisk-pond-1 - train/loss__MAX": 0.7696
    },
    {
      "Step": 816,
      "brisk-pond-1 - train/loss": 0.767,
      "brisk-pond-1 - train/loss__MIN": 0.767,
      "brisk-pond-1 - train/loss__MAX": 0.767
    },
    {
      "Step": 817,
      "brisk-pond-1 - train/loss": 0.7606,
      "brisk-pond-1 - train/loss__MIN": 0.7606,
      "brisk-pond-1 - train/loss__MAX": 0.7606
    },
    {
      "Step": 818,
      "brisk-pond-1 - train/loss": 0.782,
      "brisk-pond-1 - train/loss__MIN": 0.782,
      "brisk-pond-1 - train/loss__MAX": 0.782
    },
    {
      "Step": 819,
      "brisk-pond-1 - train/loss": 0.7531,
      "brisk-pond-1 - train/loss__MIN": 0.7531,
      "brisk-pond-1 - train/loss__MAX": 0.7531
    },
    {
      "Step": 820,
      "brisk-pond-1 - train/loss": 0.8017,
      "brisk-pond-1 - train/loss__MIN": 0.8017,
      "brisk-pond-1 - train/loss__MAX": 0.8017
    },
    {
      "Step": 821,
      "brisk-pond-1 - train/loss": 0.7023,
      "brisk-pond-1 - train/loss__MIN": 0.7023,
      "brisk-pond-1 - train/loss__MAX": 0.7023
    },
    {
      "Step": 822,
      "brisk-pond-1 - train/loss": 0.7575,
      "brisk-pond-1 - train/loss__MIN": 0.7575,
      "brisk-pond-1 - train/loss__MAX": 0.7575
    },
    {
      "Step": 823,
      "brisk-pond-1 - train/loss": 0.7605,
      "brisk-pond-1 - train/loss__MIN": 0.7605,
      "brisk-pond-1 - train/loss__MAX": 0.7605
    },
    {
      "Step": 824,
      "brisk-pond-1 - train/loss": 0.7676,
      "brisk-pond-1 - train/loss__MIN": 0.7676,
      "brisk-pond-1 - train/loss__MAX": 0.7676
    },
    {
      "Step": 825,
      "brisk-pond-1 - train/loss": 0.7752,
      "brisk-pond-1 - train/loss__MIN": 0.7752,
      "brisk-pond-1 - train/loss__MAX": 0.7752
    },
    {
      "Step": 826,
      "brisk-pond-1 - train/loss": 0.8238,
      "brisk-pond-1 - train/loss__MIN": 0.8238,
      "brisk-pond-1 - train/loss__MAX": 0.8238
    },
    {
      "Step": 827,
      "brisk-pond-1 - train/loss": 0.7231,
      "brisk-pond-1 - train/loss__MIN": 0.7231,
      "brisk-pond-1 - train/loss__MAX": 0.7231
    },
    {
      "Step": 828,
      "brisk-pond-1 - train/loss": 0.7851,
      "brisk-pond-1 - train/loss__MIN": 0.7851,
      "brisk-pond-1 - train/loss__MAX": 0.7851
    },
    {
      "Step": 829,
      "brisk-pond-1 - train/loss": 0.7736,
      "brisk-pond-1 - train/loss__MIN": 0.7736,
      "brisk-pond-1 - train/loss__MAX": 0.7736
    },
    {
      "Step": 830,
      "brisk-pond-1 - train/loss": 0.7118,
      "brisk-pond-1 - train/loss__MIN": 0.7118,
      "brisk-pond-1 - train/loss__MAX": 0.7118
    },
    {
      "Step": 831,
      "brisk-pond-1 - train/loss": 0.7608,
      "brisk-pond-1 - train/loss__MIN": 0.7608,
      "brisk-pond-1 - train/loss__MAX": 0.7608
    },
    {
      "Step": 832,
      "brisk-pond-1 - train/loss": 0.7535,
      "brisk-pond-1 - train/loss__MIN": 0.7535,
      "brisk-pond-1 - train/loss__MAX": 0.7535
    },
    {
      "Step": 833,
      "brisk-pond-1 - train/loss": 0.7959,
      "brisk-pond-1 - train/loss__MIN": 0.7959,
      "brisk-pond-1 - train/loss__MAX": 0.7959
    },
    {
      "Step": 834,
      "brisk-pond-1 - train/loss": 0.748,
      "brisk-pond-1 - train/loss__MIN": 0.748,
      "brisk-pond-1 - train/loss__MAX": 0.748
    },
    {
      "Step": 835,
      "brisk-pond-1 - train/loss": 0.7961,
      "brisk-pond-1 - train/loss__MIN": 0.7961,
      "brisk-pond-1 - train/loss__MAX": 0.7961
    },
    {
      "Step": 836,
      "brisk-pond-1 - train/loss": 0.7568,
      "brisk-pond-1 - train/loss__MIN": 0.7568,
      "brisk-pond-1 - train/loss__MAX": 0.7568
    },
    {
      "Step": 837,
      "brisk-pond-1 - train/loss": 0.7299,
      "brisk-pond-1 - train/loss__MIN": 0.7299,
      "brisk-pond-1 - train/loss__MAX": 0.7299
    },
    {
      "Step": 838,
      "brisk-pond-1 - train/loss": 0.719,
      "brisk-pond-1 - train/loss__MIN": 0.719,
      "brisk-pond-1 - train/loss__MAX": 0.719
    },
    {
      "Step": 839,
      "brisk-pond-1 - train/loss": 0.7604,
      "brisk-pond-1 - train/loss__MIN": 0.7604,
      "brisk-pond-1 - train/loss__MAX": 0.7604
    },
    {
      "Step": 840,
      "brisk-pond-1 - train/loss": 0.8272,
      "brisk-pond-1 - train/loss__MIN": 0.8272,
      "brisk-pond-1 - train/loss__MAX": 0.8272
    },
    {
      "Step": 841,
      "brisk-pond-1 - train/loss": 0.825,
      "brisk-pond-1 - train/loss__MIN": 0.825,
      "brisk-pond-1 - train/loss__MAX": 0.825
    },
    {
      "Step": 842,
      "brisk-pond-1 - train/loss": 0.7808,
      "brisk-pond-1 - train/loss__MIN": 0.7808,
      "brisk-pond-1 - train/loss__MAX": 0.7808
    },
    {
      "Step": 843,
      "brisk-pond-1 - train/loss": 0.7817,
      "brisk-pond-1 - train/loss__MIN": 0.7817,
      "brisk-pond-1 - train/loss__MAX": 0.7817
    },
    {
      "Step": 844,
      "brisk-pond-1 - train/loss": 0.8379,
      "brisk-pond-1 - train/loss__MIN": 0.8379,
      "brisk-pond-1 - train/loss__MAX": 0.8379
    },
    {
      "Step": 845,
      "brisk-pond-1 - train/loss": 0.7978,
      "brisk-pond-1 - train/loss__MIN": 0.7978,
      "brisk-pond-1 - train/loss__MAX": 0.7978
    },
    {
      "Step": 846,
      "brisk-pond-1 - train/loss": 0.716,
      "brisk-pond-1 - train/loss__MIN": 0.716,
      "brisk-pond-1 - train/loss__MAX": 0.716
    },
    {
      "Step": 847,
      "brisk-pond-1 - train/loss": 0.7498,
      "brisk-pond-1 - train/loss__MIN": 0.7498,
      "brisk-pond-1 - train/loss__MAX": 0.7498
    },
    {
      "Step": 848,
      "brisk-pond-1 - train/loss": 0.8018,
      "brisk-pond-1 - train/loss__MIN": 0.8018,
      "brisk-pond-1 - train/loss__MAX": 0.8018
    },
    {
      "Step": 849,
      "brisk-pond-1 - train/loss": 0.7579,
      "brisk-pond-1 - train/loss__MIN": 0.7579,
      "brisk-pond-1 - train/loss__MAX": 0.7579
    },
    {
      "Step": 850,
      "brisk-pond-1 - train/loss": 0.7701,
      "brisk-pond-1 - train/loss__MIN": 0.7701,
      "brisk-pond-1 - train/loss__MAX": 0.7701
    },
    {
      "Step": 851,
      "brisk-pond-1 - train/loss": 0.8212,
      "brisk-pond-1 - train/loss__MIN": 0.8212,
      "brisk-pond-1 - train/loss__MAX": 0.8212
    },
    {
      "Step": 852,
      "brisk-pond-1 - train/loss": 0.8069,
      "brisk-pond-1 - train/loss__MIN": 0.8069,
      "brisk-pond-1 - train/loss__MAX": 0.8069
    },
    {
      "Step": 853,
      "brisk-pond-1 - train/loss": 0.7807,
      "brisk-pond-1 - train/loss__MIN": 0.7807,
      "brisk-pond-1 - train/loss__MAX": 0.7807
    },
    {
      "Step": 854,
      "brisk-pond-1 - train/loss": 0.8182,
      "brisk-pond-1 - train/loss__MIN": 0.8182,
      "brisk-pond-1 - train/loss__MAX": 0.8182
    },
    {
      "Step": 855,
      "brisk-pond-1 - train/loss": 0.7699,
      "brisk-pond-1 - train/loss__MIN": 0.7699,
      "brisk-pond-1 - train/loss__MAX": 0.7699
    },
    {
      "Step": 856,
      "brisk-pond-1 - train/loss": 0.7642,
      "brisk-pond-1 - train/loss__MIN": 0.7642,
      "brisk-pond-1 - train/loss__MAX": 0.7642
    },
    {
      "Step": 857,
      "brisk-pond-1 - train/loss": 0.7641,
      "brisk-pond-1 - train/loss__MIN": 0.7641,
      "brisk-pond-1 - train/loss__MAX": 0.7641
    },
    {
      "Step": 858,
      "brisk-pond-1 - train/loss": 0.7651,
      "brisk-pond-1 - train/loss__MIN": 0.7651,
      "brisk-pond-1 - train/loss__MAX": 0.7651
    },
    {
      "Step": 859,
      "brisk-pond-1 - train/loss": 0.767,
      "brisk-pond-1 - train/loss__MIN": 0.767,
      "brisk-pond-1 - train/loss__MAX": 0.767
    },
    {
      "Step": 860,
      "brisk-pond-1 - train/loss": 0.7224,
      "brisk-pond-1 - train/loss__MIN": 0.7224,
      "brisk-pond-1 - train/loss__MAX": 0.7224
    },
    {
      "Step": 861,
      "brisk-pond-1 - train/loss": 0.8003,
      "brisk-pond-1 - train/loss__MIN": 0.8003,
      "brisk-pond-1 - train/loss__MAX": 0.8003
    },
    {
      "Step": 862,
      "brisk-pond-1 - train/loss": 0.8272,
      "brisk-pond-1 - train/loss__MIN": 0.8272,
      "brisk-pond-1 - train/loss__MAX": 0.8272
    },
    {
      "Step": 863,
      "brisk-pond-1 - train/loss": 0.8289,
      "brisk-pond-1 - train/loss__MIN": 0.8289,
      "brisk-pond-1 - train/loss__MAX": 0.8289
    },
    {
      "Step": 864,
      "brisk-pond-1 - train/loss": 0.7802,
      "brisk-pond-1 - train/loss__MIN": 0.7802,
      "brisk-pond-1 - train/loss__MAX": 0.7802
    },
    {
      "Step": 865,
      "brisk-pond-1 - train/loss": 0.7855,
      "brisk-pond-1 - train/loss__MIN": 0.7855,
      "brisk-pond-1 - train/loss__MAX": 0.7855
    },
    {
      "Step": 866,
      "brisk-pond-1 - train/loss": 0.7662,
      "brisk-pond-1 - train/loss__MIN": 0.7662,
      "brisk-pond-1 - train/loss__MAX": 0.7662
    },
    {
      "Step": 867,
      "brisk-pond-1 - train/loss": 0.7235,
      "brisk-pond-1 - train/loss__MIN": 0.7235,
      "brisk-pond-1 - train/loss__MAX": 0.7235
    },
    {
      "Step": 868,
      "brisk-pond-1 - train/loss": 0.7019,
      "brisk-pond-1 - train/loss__MIN": 0.7019,
      "brisk-pond-1 - train/loss__MAX": 0.7019
    },
    {
      "Step": 869,
      "brisk-pond-1 - train/loss": 0.7786,
      "brisk-pond-1 - train/loss__MIN": 0.7786,
      "brisk-pond-1 - train/loss__MAX": 0.7786
    },
    {
      "Step": 870,
      "brisk-pond-1 - train/loss": 0.7995,
      "brisk-pond-1 - train/loss__MIN": 0.7995,
      "brisk-pond-1 - train/loss__MAX": 0.7995
    },
    {
      "Step": 871,
      "brisk-pond-1 - train/loss": 0.7813,
      "brisk-pond-1 - train/loss__MIN": 0.7813,
      "brisk-pond-1 - train/loss__MAX": 0.7813
    },
    {
      "Step": 872,
      "brisk-pond-1 - train/loss": 0.7156,
      "brisk-pond-1 - train/loss__MIN": 0.7156,
      "brisk-pond-1 - train/loss__MAX": 0.7156
    },
    {
      "Step": 873,
      "brisk-pond-1 - train/loss": 0.7829,
      "brisk-pond-1 - train/loss__MIN": 0.7829,
      "brisk-pond-1 - train/loss__MAX": 0.7829
    },
    {
      "Step": 874,
      "brisk-pond-1 - train/loss": 0.7756,
      "brisk-pond-1 - train/loss__MIN": 0.7756,
      "brisk-pond-1 - train/loss__MAX": 0.7756
    },
    {
      "Step": 875,
      "brisk-pond-1 - train/loss": 0.7947,
      "brisk-pond-1 - train/loss__MIN": 0.7947,
      "brisk-pond-1 - train/loss__MAX": 0.7947
    },
    {
      "Step": 876,
      "brisk-pond-1 - train/loss": 0.7528,
      "brisk-pond-1 - train/loss__MIN": 0.7528,
      "brisk-pond-1 - train/loss__MAX": 0.7528
    },
    {
      "Step": 877,
      "brisk-pond-1 - train/loss": 0.7379,
      "brisk-pond-1 - train/loss__MIN": 0.7379,
      "brisk-pond-1 - train/loss__MAX": 0.7379
    },
    {
      "Step": 878,
      "brisk-pond-1 - train/loss": 0.7303,
      "brisk-pond-1 - train/loss__MIN": 0.7303,
      "brisk-pond-1 - train/loss__MAX": 0.7303
    },
    {
      "Step": 879,
      "brisk-pond-1 - train/loss": 0.7397,
      "brisk-pond-1 - train/loss__MIN": 0.7397,
      "brisk-pond-1 - train/loss__MAX": 0.7397
    },
    {
      "Step": 880,
      "brisk-pond-1 - train/loss": 0.7044,
      "brisk-pond-1 - train/loss__MIN": 0.7044,
      "brisk-pond-1 - train/loss__MAX": 0.7044
    },
    {
      "Step": 881,
      "brisk-pond-1 - train/loss": 0.8185,
      "brisk-pond-1 - train/loss__MIN": 0.8185,
      "brisk-pond-1 - train/loss__MAX": 0.8185
    },
    {
      "Step": 882,
      "brisk-pond-1 - train/loss": 0.7629,
      "brisk-pond-1 - train/loss__MIN": 0.7629,
      "brisk-pond-1 - train/loss__MAX": 0.7629
    },
    {
      "Step": 883,
      "brisk-pond-1 - train/loss": 0.7694,
      "brisk-pond-1 - train/loss__MIN": 0.7694,
      "brisk-pond-1 - train/loss__MAX": 0.7694
    },
    {
      "Step": 884,
      "brisk-pond-1 - train/loss": 0.8056,
      "brisk-pond-1 - train/loss__MIN": 0.8056,
      "brisk-pond-1 - train/loss__MAX": 0.8056
    },
    {
      "Step": 885,
      "brisk-pond-1 - train/loss": 0.7409,
      "brisk-pond-1 - train/loss__MIN": 0.7409,
      "brisk-pond-1 - train/loss__MAX": 0.7409
    },
    {
      "Step": 886,
      "brisk-pond-1 - train/loss": 0.7446,
      "brisk-pond-1 - train/loss__MIN": 0.7446,
      "brisk-pond-1 - train/loss__MAX": 0.7446
    },
    {
      "Step": 887,
      "brisk-pond-1 - train/loss": 0.7146,
      "brisk-pond-1 - train/loss__MIN": 0.7146,
      "brisk-pond-1 - train/loss__MAX": 0.7146
    },
    {
      "Step": 888,
      "brisk-pond-1 - train/loss": 0.7525,
      "brisk-pond-1 - train/loss__MIN": 0.7525,
      "brisk-pond-1 - train/loss__MAX": 0.7525
    },
    {
      "Step": 889,
      "brisk-pond-1 - train/loss": 0.7455,
      "brisk-pond-1 - train/loss__MIN": 0.7455,
      "brisk-pond-1 - train/loss__MAX": 0.7455
    },
    {
      "Step": 890,
      "brisk-pond-1 - train/loss": 0.7995,
      "brisk-pond-1 - train/loss__MIN": 0.7995,
      "brisk-pond-1 - train/loss__MAX": 0.7995
    },
    {
      "Step": 891,
      "brisk-pond-1 - train/loss": 0.7716,
      "brisk-pond-1 - train/loss__MIN": 0.7716,
      "brisk-pond-1 - train/loss__MAX": 0.7716
    },
    {
      "Step": 892,
      "brisk-pond-1 - train/loss": 0.7906,
      "brisk-pond-1 - train/loss__MIN": 0.7906,
      "brisk-pond-1 - train/loss__MAX": 0.7906
    },
    {
      "Step": 893,
      "brisk-pond-1 - train/loss": 0.7544,
      "brisk-pond-1 - train/loss__MIN": 0.7544,
      "brisk-pond-1 - train/loss__MAX": 0.7544
    },
    {
      "Step": 894,
      "brisk-pond-1 - train/loss": 0.7264,
      "brisk-pond-1 - train/loss__MIN": 0.7264,
      "brisk-pond-1 - train/loss__MAX": 0.7264
    },
    {
      "Step": 895,
      "brisk-pond-1 - train/loss": 0.7537,
      "brisk-pond-1 - train/loss__MIN": 0.7537,
      "brisk-pond-1 - train/loss__MAX": 0.7537
    },
    {
      "Step": 896,
      "brisk-pond-1 - train/loss": 0.8241,
      "brisk-pond-1 - train/loss__MIN": 0.8241,
      "brisk-pond-1 - train/loss__MAX": 0.8241
    },
    {
      "Step": 897,
      "brisk-pond-1 - train/loss": 0.7715,
      "brisk-pond-1 - train/loss__MIN": 0.7715,
      "brisk-pond-1 - train/loss__MAX": 0.7715
    },
    {
      "Step": 898,
      "brisk-pond-1 - train/loss": 0.7397,
      "brisk-pond-1 - train/loss__MIN": 0.7397,
      "brisk-pond-1 - train/loss__MAX": 0.7397
    },
    {
      "Step": 899,
      "brisk-pond-1 - train/loss": 0.7392,
      "brisk-pond-1 - train/loss__MIN": 0.7392,
      "brisk-pond-1 - train/loss__MAX": 0.7392
    },
    {
      "Step": 900,
      "brisk-pond-1 - train/loss": 0.7546,
      "brisk-pond-1 - train/loss__MIN": 0.7546,
      "brisk-pond-1 - train/loss__MAX": 0.7546
    },
    {
      "Step": 901,
      "brisk-pond-1 - train/loss": 0.7095,
      "brisk-pond-1 - train/loss__MIN": 0.7095,
      "brisk-pond-1 - train/loss__MAX": 0.7095
    },
    {
      "Step": 902,
      "brisk-pond-1 - train/loss": 0.7729,
      "brisk-pond-1 - train/loss__MIN": 0.7729,
      "brisk-pond-1 - train/loss__MAX": 0.7729
    },
    {
      "Step": 903,
      "brisk-pond-1 - train/loss": 0.764,
      "brisk-pond-1 - train/loss__MIN": 0.764,
      "brisk-pond-1 - train/loss__MAX": 0.764
    },
    {
      "Step": 904,
      "brisk-pond-1 - train/loss": 0.7697,
      "brisk-pond-1 - train/loss__MIN": 0.7697,
      "brisk-pond-1 - train/loss__MAX": 0.7697
    },
    {
      "Step": 905,
      "brisk-pond-1 - train/loss": 0.7628,
      "brisk-pond-1 - train/loss__MIN": 0.7628,
      "brisk-pond-1 - train/loss__MAX": 0.7628
    },
    {
      "Step": 906,
      "brisk-pond-1 - train/loss": 0.7719,
      "brisk-pond-1 - train/loss__MIN": 0.7719,
      "brisk-pond-1 - train/loss__MAX": 0.7719
    },
    {
      "Step": 907,
      "brisk-pond-1 - train/loss": 0.7247,
      "brisk-pond-1 - train/loss__MIN": 0.7247,
      "brisk-pond-1 - train/loss__MAX": 0.7247
    },
    {
      "Step": 908,
      "brisk-pond-1 - train/loss": 0.6816,
      "brisk-pond-1 - train/loss__MIN": 0.6816,
      "brisk-pond-1 - train/loss__MAX": 0.6816
    },
    {
      "Step": 909,
      "brisk-pond-1 - train/loss": 0.6867,
      "brisk-pond-1 - train/loss__MIN": 0.6867,
      "brisk-pond-1 - train/loss__MAX": 0.6867
    },
    {
      "Step": 910,
      "brisk-pond-1 - train/loss": 0.8001,
      "brisk-pond-1 - train/loss__MIN": 0.8001,
      "brisk-pond-1 - train/loss__MAX": 0.8001
    },
    {
      "Step": 911,
      "brisk-pond-1 - train/loss": 0.7689,
      "brisk-pond-1 - train/loss__MIN": 0.7689,
      "brisk-pond-1 - train/loss__MAX": 0.7689
    },
    {
      "Step": 912,
      "brisk-pond-1 - train/loss": 0.7943,
      "brisk-pond-1 - train/loss__MIN": 0.7943,
      "brisk-pond-1 - train/loss__MAX": 0.7943
    },
    {
      "Step": 913,
      "brisk-pond-1 - train/loss": 0.7539,
      "brisk-pond-1 - train/loss__MIN": 0.7539,
      "brisk-pond-1 - train/loss__MAX": 0.7539
    },
    {
      "Step": 914,
      "brisk-pond-1 - train/loss": 0.8017,
      "brisk-pond-1 - train/loss__MIN": 0.8017,
      "brisk-pond-1 - train/loss__MAX": 0.8017
    },
    {
      "Step": 915,
      "brisk-pond-1 - train/loss": 0.7435,
      "brisk-pond-1 - train/loss__MIN": 0.7435,
      "brisk-pond-1 - train/loss__MAX": 0.7435
    },
    {
      "Step": 916,
      "brisk-pond-1 - train/loss": 0.7679,
      "brisk-pond-1 - train/loss__MIN": 0.7679,
      "brisk-pond-1 - train/loss__MAX": 0.7679
    },
    {
      "Step": 917,
      "brisk-pond-1 - train/loss": 0.7944,
      "brisk-pond-1 - train/loss__MIN": 0.7944,
      "brisk-pond-1 - train/loss__MAX": 0.7944
    },
    {
      "Step": 918,
      "brisk-pond-1 - train/loss": 0.7336,
      "brisk-pond-1 - train/loss__MIN": 0.7336,
      "brisk-pond-1 - train/loss__MAX": 0.7336
    },
    {
      "Step": 919,
      "brisk-pond-1 - train/loss": 0.7769,
      "brisk-pond-1 - train/loss__MIN": 0.7769,
      "brisk-pond-1 - train/loss__MAX": 0.7769
    },
    {
      "Step": 920,
      "brisk-pond-1 - train/loss": 0.7438,
      "brisk-pond-1 - train/loss__MIN": 0.7438,
      "brisk-pond-1 - train/loss__MAX": 0.7438
    },
    {
      "Step": 921,
      "brisk-pond-1 - train/loss": 0.7307,
      "brisk-pond-1 - train/loss__MIN": 0.7307,
      "brisk-pond-1 - train/loss__MAX": 0.7307
    },
    {
      "Step": 922,
      "brisk-pond-1 - train/loss": 0.7917,
      "brisk-pond-1 - train/loss__MIN": 0.7917,
      "brisk-pond-1 - train/loss__MAX": 0.7917
    },
    {
      "Step": 923,
      "brisk-pond-1 - train/loss": 0.7527,
      "brisk-pond-1 - train/loss__MIN": 0.7527,
      "brisk-pond-1 - train/loss__MAX": 0.7527
    },
    {
      "Step": 924,
      "brisk-pond-1 - train/loss": 0.7623,
      "brisk-pond-1 - train/loss__MIN": 0.7623,
      "brisk-pond-1 - train/loss__MAX": 0.7623
    },
    {
      "Step": 925,
      "brisk-pond-1 - train/loss": 0.7738,
      "brisk-pond-1 - train/loss__MIN": 0.7738,
      "brisk-pond-1 - train/loss__MAX": 0.7738
    },
    {
      "Step": 926,
      "brisk-pond-1 - train/loss": 0.7358,
      "brisk-pond-1 - train/loss__MIN": 0.7358,
      "brisk-pond-1 - train/loss__MAX": 0.7358
    },
    {
      "Step": 927,
      "brisk-pond-1 - train/loss": 0.7524,
      "brisk-pond-1 - train/loss__MIN": 0.7524,
      "brisk-pond-1 - train/loss__MAX": 0.7524
    },
    {
      "Step": 928,
      "brisk-pond-1 - train/loss": 0.7733,
      "brisk-pond-1 - train/loss__MIN": 0.7733,
      "brisk-pond-1 - train/loss__MAX": 0.7733
    },
    {
      "Step": 929,
      "brisk-pond-1 - train/loss": 0.6974,
      "brisk-pond-1 - train/loss__MIN": 0.6974,
      "brisk-pond-1 - train/loss__MAX": 0.6974
    },
    {
      "Step": 930,
      "brisk-pond-1 - train/loss": 0.7428,
      "brisk-pond-1 - train/loss__MIN": 0.7428,
      "brisk-pond-1 - train/loss__MAX": 0.7428
    },
    {
      "Step": 931,
      "brisk-pond-1 - train/loss": 0.7222,
      "brisk-pond-1 - train/loss__MIN": 0.7222,
      "brisk-pond-1 - train/loss__MAX": 0.7222
    },
    {
      "Step": 932,
      "brisk-pond-1 - train/loss": 0.7757,
      "brisk-pond-1 - train/loss__MIN": 0.7757,
      "brisk-pond-1 - train/loss__MAX": 0.7757
    },
    {
      "Step": 933,
      "brisk-pond-1 - train/loss": 0.732,
      "brisk-pond-1 - train/loss__MIN": 0.732,
      "brisk-pond-1 - train/loss__MAX": 0.732
    },
    {
      "Step": 934,
      "brisk-pond-1 - train/loss": 0.7442,
      "brisk-pond-1 - train/loss__MIN": 0.7442,
      "brisk-pond-1 - train/loss__MAX": 0.7442
    },
    {
      "Step": 935,
      "brisk-pond-1 - train/loss": 0.7848,
      "brisk-pond-1 - train/loss__MIN": 0.7848,
      "brisk-pond-1 - train/loss__MAX": 0.7848
    },
    {
      "Step": 936,
      "brisk-pond-1 - train/loss": 0.7803,
      "brisk-pond-1 - train/loss__MIN": 0.7803,
      "brisk-pond-1 - train/loss__MAX": 0.7803
    },
    {
      "Step": 937,
      "brisk-pond-1 - train/loss": 0.7534,
      "brisk-pond-1 - train/loss__MIN": 0.7534,
      "brisk-pond-1 - train/loss__MAX": 0.7534
    },
    {
      "Step": 938,
      "brisk-pond-1 - train/loss": 0.7638,
      "brisk-pond-1 - train/loss__MIN": 0.7638,
      "brisk-pond-1 - train/loss__MAX": 0.7638
    },
    {
      "Step": 939,
      "brisk-pond-1 - train/loss": 0.8127,
      "brisk-pond-1 - train/loss__MIN": 0.8127,
      "brisk-pond-1 - train/loss__MAX": 0.8127
    },
    {
      "Step": 940,
      "brisk-pond-1 - train/loss": 0.7519,
      "brisk-pond-1 - train/loss__MIN": 0.7519,
      "brisk-pond-1 - train/loss__MAX": 0.7519
    },
    {
      "Step": 941,
      "brisk-pond-1 - train/loss": 0.696,
      "brisk-pond-1 - train/loss__MIN": 0.696,
      "brisk-pond-1 - train/loss__MAX": 0.696
    },
    {
      "Step": 942,
      "brisk-pond-1 - train/loss": 0.7702,
      "brisk-pond-1 - train/loss__MIN": 0.7702,
      "brisk-pond-1 - train/loss__MAX": 0.7702
    },
    {
      "Step": 943,
      "brisk-pond-1 - train/loss": 0.7792,
      "brisk-pond-1 - train/loss__MIN": 0.7792,
      "brisk-pond-1 - train/loss__MAX": 0.7792
    },
    {
      "Step": 944,
      "brisk-pond-1 - train/loss": 0.8124,
      "brisk-pond-1 - train/loss__MIN": 0.8124,
      "brisk-pond-1 - train/loss__MAX": 0.8124
    },
    {
      "Step": 945,
      "brisk-pond-1 - train/loss": 0.8035,
      "brisk-pond-1 - train/loss__MIN": 0.8035,
      "brisk-pond-1 - train/loss__MAX": 0.8035
    },
    {
      "Step": 946,
      "brisk-pond-1 - train/loss": 0.7193,
      "brisk-pond-1 - train/loss__MIN": 0.7193,
      "brisk-pond-1 - train/loss__MAX": 0.7193
    },
    {
      "Step": 947,
      "brisk-pond-1 - train/loss": 0.6987,
      "brisk-pond-1 - train/loss__MIN": 0.6987,
      "brisk-pond-1 - train/loss__MAX": 0.6987
    },
    {
      "Step": 948,
      "brisk-pond-1 - train/loss": 0.7618,
      "brisk-pond-1 - train/loss__MIN": 0.7618,
      "brisk-pond-1 - train/loss__MAX": 0.7618
    },
    {
      "Step": 949,
      "brisk-pond-1 - train/loss": 0.6875,
      "brisk-pond-1 - train/loss__MIN": 0.6875,
      "brisk-pond-1 - train/loss__MAX": 0.6875
    },
    {
      "Step": 950,
      "brisk-pond-1 - train/loss": 0.768,
      "brisk-pond-1 - train/loss__MIN": 0.768,
      "brisk-pond-1 - train/loss__MAX": 0.768
    },
    {
      "Step": 951,
      "brisk-pond-1 - train/loss": 0.7489,
      "brisk-pond-1 - train/loss__MIN": 0.7489,
      "brisk-pond-1 - train/loss__MAX": 0.7489
    },
    {
      "Step": 952,
      "brisk-pond-1 - train/loss": 0.8099,
      "brisk-pond-1 - train/loss__MIN": 0.8099,
      "brisk-pond-1 - train/loss__MAX": 0.8099
    },
    {
      "Step": 953,
      "brisk-pond-1 - train/loss": 0.771,
      "brisk-pond-1 - train/loss__MIN": 0.771,
      "brisk-pond-1 - train/loss__MAX": 0.771
    },
    {
      "Step": 954,
      "brisk-pond-1 - train/loss": 0.7848,
      "brisk-pond-1 - train/loss__MIN": 0.7848,
      "brisk-pond-1 - train/loss__MAX": 0.7848
    },
    {
      "Step": 955,
      "brisk-pond-1 - train/loss": 0.7148,
      "brisk-pond-1 - train/loss__MIN": 0.7148,
      "brisk-pond-1 - train/loss__MAX": 0.7148
    },
    {
      "Step": 956,
      "brisk-pond-1 - train/loss": 0.7707,
      "brisk-pond-1 - train/loss__MIN": 0.7707,
      "brisk-pond-1 - train/loss__MAX": 0.7707
    },
    {
      "Step": 957,
      "brisk-pond-1 - train/loss": 0.7787,
      "brisk-pond-1 - train/loss__MIN": 0.7787,
      "brisk-pond-1 - train/loss__MAX": 0.7787
    },
    {
      "Step": 958,
      "brisk-pond-1 - train/loss": 0.812,
      "brisk-pond-1 - train/loss__MIN": 0.812,
      "brisk-pond-1 - train/loss__MAX": 0.812
    },
    {
      "Step": 959,
      "brisk-pond-1 - train/loss": 0.7431,
      "brisk-pond-1 - train/loss__MIN": 0.7431,
      "brisk-pond-1 - train/loss__MAX": 0.7431
    },
    {
      "Step": 960,
      "brisk-pond-1 - train/loss": 0.8325,
      "brisk-pond-1 - train/loss__MIN": 0.8325,
      "brisk-pond-1 - train/loss__MAX": 0.8325
    },
    {
      "Step": 961,
      "brisk-pond-1 - train/loss": 0.7584,
      "brisk-pond-1 - train/loss__MIN": 0.7584,
      "brisk-pond-1 - train/loss__MAX": 0.7584
    },
    {
      "Step": 962,
      "brisk-pond-1 - train/loss": 0.7451,
      "brisk-pond-1 - train/loss__MIN": 0.7451,
      "brisk-pond-1 - train/loss__MAX": 0.7451
    },
    {
      "Step": 963,
      "brisk-pond-1 - train/loss": 0.8426,
      "brisk-pond-1 - train/loss__MIN": 0.8426,
      "brisk-pond-1 - train/loss__MAX": 0.8426
    },
    {
      "Step": 964,
      "brisk-pond-1 - train/loss": 0.7914,
      "brisk-pond-1 - train/loss__MIN": 0.7914,
      "brisk-pond-1 - train/loss__MAX": 0.7914
    },
    {
      "Step": 965,
      "brisk-pond-1 - train/loss": 0.7484,
      "brisk-pond-1 - train/loss__MIN": 0.7484,
      "brisk-pond-1 - train/loss__MAX": 0.7484
    },
    {
      "Step": 966,
      "brisk-pond-1 - train/loss": 0.835,
      "brisk-pond-1 - train/loss__MIN": 0.835,
      "brisk-pond-1 - train/loss__MAX": 0.835
    },
    {
      "Step": 967,
      "brisk-pond-1 - train/loss": 0.7753,
      "brisk-pond-1 - train/loss__MIN": 0.7753,
      "brisk-pond-1 - train/loss__MAX": 0.7753
    },
    {
      "Step": 968,
      "brisk-pond-1 - train/loss": 0.7487,
      "brisk-pond-1 - train/loss__MIN": 0.7487,
      "brisk-pond-1 - train/loss__MAX": 0.7487
    },
    {
      "Step": 969,
      "brisk-pond-1 - train/loss": 0.7725,
      "brisk-pond-1 - train/loss__MIN": 0.7725,
      "brisk-pond-1 - train/loss__MAX": 0.7725
    },
    {
      "Step": 970,
      "brisk-pond-1 - train/loss": 0.7531,
      "brisk-pond-1 - train/loss__MIN": 0.7531,
      "brisk-pond-1 - train/loss__MAX": 0.7531
    },
    {
      "Step": 971,
      "brisk-pond-1 - train/loss": 0.7859,
      "brisk-pond-1 - train/loss__MIN": 0.7859,
      "brisk-pond-1 - train/loss__MAX": 0.7859
    },
    {
      "Step": 972,
      "brisk-pond-1 - train/loss": 0.7121,
      "brisk-pond-1 - train/loss__MIN": 0.7121,
      "brisk-pond-1 - train/loss__MAX": 0.7121
    },
    {
      "Step": 973,
      "brisk-pond-1 - train/loss": 0.6513,
      "brisk-pond-1 - train/loss__MIN": 0.6513,
      "brisk-pond-1 - train/loss__MAX": 0.6513
    },
    {
      "Step": 974,
      "brisk-pond-1 - train/loss": 0.7373,
      "brisk-pond-1 - train/loss__MIN": 0.7373,
      "brisk-pond-1 - train/loss__MAX": 0.7373
    },
    {
      "Step": 975,
      "brisk-pond-1 - train/loss": 0.791,
      "brisk-pond-1 - train/loss__MIN": 0.791,
      "brisk-pond-1 - train/loss__MAX": 0.791
    },
    {
      "Step": 976,
      "brisk-pond-1 - train/loss": 0.7362,
      "brisk-pond-1 - train/loss__MIN": 0.7362,
      "brisk-pond-1 - train/loss__MAX": 0.7362
    },
    {
      "Step": 977,
      "brisk-pond-1 - train/loss": 0.773,
      "brisk-pond-1 - train/loss__MIN": 0.773,
      "brisk-pond-1 - train/loss__MAX": 0.773
    },
    {
      "Step": 978,
      "brisk-pond-1 - train/loss": 0.7456,
      "brisk-pond-1 - train/loss__MIN": 0.7456,
      "brisk-pond-1 - train/loss__MAX": 0.7456
    },
    {
      "Step": 979,
      "brisk-pond-1 - train/loss": 0.8103,
      "brisk-pond-1 - train/loss__MIN": 0.8103,
      "brisk-pond-1 - train/loss__MAX": 0.8103
    },
    {
      "Step": 980,
      "brisk-pond-1 - train/loss": 0.7275,
      "brisk-pond-1 - train/loss__MIN": 0.7275,
      "brisk-pond-1 - train/loss__MAX": 0.7275
    },
    {
      "Step": 981,
      "brisk-pond-1 - train/loss": 0.7256,
      "brisk-pond-1 - train/loss__MIN": 0.7256,
      "brisk-pond-1 - train/loss__MAX": 0.7256
    },
    {
      "Step": 982,
      "brisk-pond-1 - train/loss": 0.6929,
      "brisk-pond-1 - train/loss__MIN": 0.6929,
      "brisk-pond-1 - train/loss__MAX": 0.6929
    },
    {
      "Step": 983,
      "brisk-pond-1 - train/loss": 0.7316,
      "brisk-pond-1 - train/loss__MIN": 0.7316,
      "brisk-pond-1 - train/loss__MAX": 0.7316
    },
    {
      "Step": 984,
      "brisk-pond-1 - train/loss": 0.8065,
      "brisk-pond-1 - train/loss__MIN": 0.8065,
      "brisk-pond-1 - train/loss__MAX": 0.8065
    },
    {
      "Step": 985,
      "brisk-pond-1 - train/loss": 0.7007,
      "brisk-pond-1 - train/loss__MIN": 0.7007,
      "brisk-pond-1 - train/loss__MAX": 0.7007
    },
    {
      "Step": 986,
      "brisk-pond-1 - train/loss": 0.7483,
      "brisk-pond-1 - train/loss__MIN": 0.7483,
      "brisk-pond-1 - train/loss__MAX": 0.7483
    },
    {
      "Step": 987,
      "brisk-pond-1 - train/loss": 0.7691,
      "brisk-pond-1 - train/loss__MIN": 0.7691,
      "brisk-pond-1 - train/loss__MAX": 0.7691
    },
    {
      "Step": 988,
      "brisk-pond-1 - train/loss": 0.763,
      "brisk-pond-1 - train/loss__MIN": 0.763,
      "brisk-pond-1 - train/loss__MAX": 0.763
    },
    {
      "Step": 989,
      "brisk-pond-1 - train/loss": 0.7523,
      "brisk-pond-1 - train/loss__MIN": 0.7523,
      "brisk-pond-1 - train/loss__MAX": 0.7523
    },
    {
      "Step": 990,
      "brisk-pond-1 - train/loss": 0.7267,
      "brisk-pond-1 - train/loss__MIN": 0.7267,
      "brisk-pond-1 - train/loss__MAX": 0.7267
    },
    {
      "Step": 991,
      "brisk-pond-1 - train/loss": 0.798,
      "brisk-pond-1 - train/loss__MIN": 0.798,
      "brisk-pond-1 - train/loss__MAX": 0.798
    },
    {
      "Step": 992,
      "brisk-pond-1 - train/loss": 0.7675,
      "brisk-pond-1 - train/loss__MIN": 0.7675,
      "brisk-pond-1 - train/loss__MAX": 0.7675
    },
    {
      "Step": 993,
      "brisk-pond-1 - train/loss": 0.7749,
      "brisk-pond-1 - train/loss__MIN": 0.7749,
      "brisk-pond-1 - train/loss__MAX": 0.7749
    },
    {
      "Step": 994,
      "brisk-pond-1 - train/loss": 0.7514,
      "brisk-pond-1 - train/loss__MIN": 0.7514,
      "brisk-pond-1 - train/loss__MAX": 0.7514
    },
    {
      "Step": 995,
      "brisk-pond-1 - train/loss": 0.7065,
      "brisk-pond-1 - train/loss__MIN": 0.7065,
      "brisk-pond-1 - train/loss__MAX": 0.7065
    },
    {
      "Step": 996,
      "brisk-pond-1 - train/loss": 0.7317,
      "brisk-pond-1 - train/loss__MIN": 0.7317,
      "brisk-pond-1 - train/loss__MAX": 0.7317
    },
    {
      "Step": 997,
      "brisk-pond-1 - train/loss": 0.7925,
      "brisk-pond-1 - train/loss__MIN": 0.7925,
      "brisk-pond-1 - train/loss__MAX": 0.7925
    },
    {
      "Step": 998,
      "brisk-pond-1 - train/loss": 0.7462,
      "brisk-pond-1 - train/loss__MIN": 0.7462,
      "brisk-pond-1 - train/loss__MAX": 0.7462
    },
    {
      "Step": 999,
      "brisk-pond-1 - train/loss": 0.7841,
      "brisk-pond-1 - train/loss__MIN": 0.7841,
      "brisk-pond-1 - train/loss__MAX": 0.7841
    },
    {
      "Step": 1000,
      "brisk-pond-1 - train/loss": 0.7959,
      "brisk-pond-1 - train/loss__MIN": 0.7959,
      "brisk-pond-1 - train/loss__MAX": 0.7959
    },
    {
      "Step": 1001,
      "brisk-pond-1 - train/loss": 0.7645,
      "brisk-pond-1 - train/loss__MIN": 0.7645,
      "brisk-pond-1 - train/loss__MAX": 0.7645
    },
    {
      "Step": 1002,
      "brisk-pond-1 - train/loss": 0.7908,
      "brisk-pond-1 - train/loss__MIN": 0.7908,
      "brisk-pond-1 - train/loss__MAX": 0.7908
    },
    {
      "Step": 1003,
      "brisk-pond-1 - train/loss": 0.7397,
      "brisk-pond-1 - train/loss__MIN": 0.7397,
      "brisk-pond-1 - train/loss__MAX": 0.7397
    },
    {
      "Step": 1005,
      "brisk-pond-1 - train/loss": 0.8163,
      "brisk-pond-1 - train/loss__MIN": 0.8163,
      "brisk-pond-1 - train/loss__MAX": 0.8163
    },
    {
      "Step": 1006,
      "brisk-pond-1 - train/loss": 0.722,
      "brisk-pond-1 - train/loss__MIN": 0.722,
      "brisk-pond-1 - train/loss__MAX": 0.722
    },
    {
      "Step": 1007,
      "brisk-pond-1 - train/loss": 0.7095,
      "brisk-pond-1 - train/loss__MIN": 0.7095,
      "brisk-pond-1 - train/loss__MAX": 0.7095
    },
    {
      "Step": 1008,
      "brisk-pond-1 - train/loss": 0.7463,
      "brisk-pond-1 - train/loss__MIN": 0.7463,
      "brisk-pond-1 - train/loss__MAX": 0.7463
    },
    {
      "Step": 1009,
      "brisk-pond-1 - train/loss": 0.7229,
      "brisk-pond-1 - train/loss__MIN": 0.7229,
      "brisk-pond-1 - train/loss__MAX": 0.7229
    },
    {
      "Step": 1010,
      "brisk-pond-1 - train/loss": 0.7614,
      "brisk-pond-1 - train/loss__MIN": 0.7614,
      "brisk-pond-1 - train/loss__MAX": 0.7614
    },
    {
      "Step": 1011,
      "brisk-pond-1 - train/loss": 0.7641,
      "brisk-pond-1 - train/loss__MIN": 0.7641,
      "brisk-pond-1 - train/loss__MAX": 0.7641
    },
    {
      "Step": 1012,
      "brisk-pond-1 - train/loss": 0.7472,
      "brisk-pond-1 - train/loss__MIN": 0.7472,
      "brisk-pond-1 - train/loss__MAX": 0.7472
    },
    {
      "Step": 1013,
      "brisk-pond-1 - train/loss": 0.8114,
      "brisk-pond-1 - train/loss__MIN": 0.8114,
      "brisk-pond-1 - train/loss__MAX": 0.8114
    },
    {
      "Step": 1014,
      "brisk-pond-1 - train/loss": 0.8082,
      "brisk-pond-1 - train/loss__MIN": 0.8082,
      "brisk-pond-1 - train/loss__MAX": 0.8082
    },
    {
      "Step": 1015,
      "brisk-pond-1 - train/loss": 0.768,
      "brisk-pond-1 - train/loss__MIN": 0.768,
      "brisk-pond-1 - train/loss__MAX": 0.768
    },
    {
      "Step": 1016,
      "brisk-pond-1 - train/loss": 0.7176,
      "brisk-pond-1 - train/loss__MIN": 0.7176,
      "brisk-pond-1 - train/loss__MAX": 0.7176
    },
    {
      "Step": 1017,
      "brisk-pond-1 - train/loss": 0.8109,
      "brisk-pond-1 - train/loss__MIN": 0.8109,
      "brisk-pond-1 - train/loss__MAX": 0.8109
    },
    {
      "Step": 1018,
      "brisk-pond-1 - train/loss": 0.8038,
      "brisk-pond-1 - train/loss__MIN": 0.8038,
      "brisk-pond-1 - train/loss__MAX": 0.8038
    },
    {
      "Step": 1019,
      "brisk-pond-1 - train/loss": 0.7863,
      "brisk-pond-1 - train/loss__MIN": 0.7863,
      "brisk-pond-1 - train/loss__MAX": 0.7863
    },
    {
      "Step": 1020,
      "brisk-pond-1 - train/loss": 0.7938,
      "brisk-pond-1 - train/loss__MIN": 0.7938,
      "brisk-pond-1 - train/loss__MAX": 0.7938
    },
    {
      "Step": 1021,
      "brisk-pond-1 - train/loss": 0.7854,
      "brisk-pond-1 - train/loss__MIN": 0.7854,
      "brisk-pond-1 - train/loss__MAX": 0.7854
    },
    {
      "Step": 1022,
      "brisk-pond-1 - train/loss": 0.7679,
      "brisk-pond-1 - train/loss__MIN": 0.7679,
      "brisk-pond-1 - train/loss__MAX": 0.7679
    },
    {
      "Step": 1023,
      "brisk-pond-1 - train/loss": 0.7148,
      "brisk-pond-1 - train/loss__MIN": 0.7148,
      "brisk-pond-1 - train/loss__MAX": 0.7148
    },
    {
      "Step": 1024,
      "brisk-pond-1 - train/loss": 0.8019,
      "brisk-pond-1 - train/loss__MIN": 0.8019,
      "brisk-pond-1 - train/loss__MAX": 0.8019
    },
    {
      "Step": 1025,
      "brisk-pond-1 - train/loss": 0.796,
      "brisk-pond-1 - train/loss__MIN": 0.796,
      "brisk-pond-1 - train/loss__MAX": 0.796
    },
    {
      "Step": 1026,
      "brisk-pond-1 - train/loss": 0.7992,
      "brisk-pond-1 - train/loss__MIN": 0.7992,
      "brisk-pond-1 - train/loss__MAX": 0.7992
    },
    {
      "Step": 1027,
      "brisk-pond-1 - train/loss": 0.8138,
      "brisk-pond-1 - train/loss__MIN": 0.8138,
      "brisk-pond-1 - train/loss__MAX": 0.8138
    },
    {
      "Step": 1028,
      "brisk-pond-1 - train/loss": 0.761,
      "brisk-pond-1 - train/loss__MIN": 0.761,
      "brisk-pond-1 - train/loss__MAX": 0.761
    },
    {
      "Step": 1029,
      "brisk-pond-1 - train/loss": 0.7962,
      "brisk-pond-1 - train/loss__MIN": 0.7962,
      "brisk-pond-1 - train/loss__MAX": 0.7962
    },
    {
      "Step": 1030,
      "brisk-pond-1 - train/loss": 0.7821,
      "brisk-pond-1 - train/loss__MIN": 0.7821,
      "brisk-pond-1 - train/loss__MAX": 0.7821
    },
    {
      "Step": 1031,
      "brisk-pond-1 - train/loss": 0.7881,
      "brisk-pond-1 - train/loss__MIN": 0.7881,
      "brisk-pond-1 - train/loss__MAX": 0.7881
    },
    {
      "Step": 1032,
      "brisk-pond-1 - train/loss": 0.7413,
      "brisk-pond-1 - train/loss__MIN": 0.7413,
      "brisk-pond-1 - train/loss__MAX": 0.7413
    },
    {
      "Step": 1033,
      "brisk-pond-1 - train/loss": 0.7952,
      "brisk-pond-1 - train/loss__MIN": 0.7952,
      "brisk-pond-1 - train/loss__MAX": 0.7952
    },
    {
      "Step": 1034,
      "brisk-pond-1 - train/loss": 0.716,
      "brisk-pond-1 - train/loss__MIN": 0.716,
      "brisk-pond-1 - train/loss__MAX": 0.716
    },
    {
      "Step": 1035,
      "brisk-pond-1 - train/loss": 0.7083,
      "brisk-pond-1 - train/loss__MIN": 0.7083,
      "brisk-pond-1 - train/loss__MAX": 0.7083
    },
    {
      "Step": 1036,
      "brisk-pond-1 - train/loss": 0.7426,
      "brisk-pond-1 - train/loss__MIN": 0.7426,
      "brisk-pond-1 - train/loss__MAX": 0.7426
    },
    {
      "Step": 1037,
      "brisk-pond-1 - train/loss": 0.7834,
      "brisk-pond-1 - train/loss__MIN": 0.7834,
      "brisk-pond-1 - train/loss__MAX": 0.7834
    },
    {
      "Step": 1038,
      "brisk-pond-1 - train/loss": 0.773,
      "brisk-pond-1 - train/loss__MIN": 0.773,
      "brisk-pond-1 - train/loss__MAX": 0.773
    },
    {
      "Step": 1039,
      "brisk-pond-1 - train/loss": 0.7366,
      "brisk-pond-1 - train/loss__MIN": 0.7366,
      "brisk-pond-1 - train/loss__MAX": 0.7366
    },
    {
      "Step": 1040,
      "brisk-pond-1 - train/loss": 0.8001,
      "brisk-pond-1 - train/loss__MIN": 0.8001,
      "brisk-pond-1 - train/loss__MAX": 0.8001
    },
    {
      "Step": 1041,
      "brisk-pond-1 - train/loss": 0.8515,
      "brisk-pond-1 - train/loss__MIN": 0.8515,
      "brisk-pond-1 - train/loss__MAX": 0.8515
    },
    {
      "Step": 1042,
      "brisk-pond-1 - train/loss": 0.7967,
      "brisk-pond-1 - train/loss__MIN": 0.7967,
      "brisk-pond-1 - train/loss__MAX": 0.7967
    },
    {
      "Step": 1043,
      "brisk-pond-1 - train/loss": 0.6945,
      "brisk-pond-1 - train/loss__MIN": 0.6945,
      "brisk-pond-1 - train/loss__MAX": 0.6945
    },
    {
      "Step": 1044,
      "brisk-pond-1 - train/loss": 0.7551,
      "brisk-pond-1 - train/loss__MIN": 0.7551,
      "brisk-pond-1 - train/loss__MAX": 0.7551
    },
    {
      "Step": 1045,
      "brisk-pond-1 - train/loss": 0.7742,
      "brisk-pond-1 - train/loss__MIN": 0.7742,
      "brisk-pond-1 - train/loss__MAX": 0.7742
    },
    {
      "Step": 1046,
      "brisk-pond-1 - train/loss": 0.8084,
      "brisk-pond-1 - train/loss__MIN": 0.8084,
      "brisk-pond-1 - train/loss__MAX": 0.8084
    },
    {
      "Step": 1047,
      "brisk-pond-1 - train/loss": 0.6854,
      "brisk-pond-1 - train/loss__MIN": 0.6854,
      "brisk-pond-1 - train/loss__MAX": 0.6854
    },
    {
      "Step": 1048,
      "brisk-pond-1 - train/loss": 0.7898,
      "brisk-pond-1 - train/loss__MIN": 0.7898,
      "brisk-pond-1 - train/loss__MAX": 0.7898
    },
    {
      "Step": 1049,
      "brisk-pond-1 - train/loss": 0.7248,
      "brisk-pond-1 - train/loss__MIN": 0.7248,
      "brisk-pond-1 - train/loss__MAX": 0.7248
    },
    {
      "Step": 1050,
      "brisk-pond-1 - train/loss": 0.7518,
      "brisk-pond-1 - train/loss__MIN": 0.7518,
      "brisk-pond-1 - train/loss__MAX": 0.7518
    },
    {
      "Step": 1051,
      "brisk-pond-1 - train/loss": 0.8045,
      "brisk-pond-1 - train/loss__MIN": 0.8045,
      "brisk-pond-1 - train/loss__MAX": 0.8045
    },
    {
      "Step": 1052,
      "brisk-pond-1 - train/loss": 0.7484,
      "brisk-pond-1 - train/loss__MIN": 0.7484,
      "brisk-pond-1 - train/loss__MAX": 0.7484
    },
    {
      "Step": 1053,
      "brisk-pond-1 - train/loss": 0.7743,
      "brisk-pond-1 - train/loss__MIN": 0.7743,
      "brisk-pond-1 - train/loss__MAX": 0.7743
    },
    {
      "Step": 1054,
      "brisk-pond-1 - train/loss": 0.7646,
      "brisk-pond-1 - train/loss__MIN": 0.7646,
      "brisk-pond-1 - train/loss__MAX": 0.7646
    },
    {
      "Step": 1055,
      "brisk-pond-1 - train/loss": 0.752,
      "brisk-pond-1 - train/loss__MIN": 0.752,
      "brisk-pond-1 - train/loss__MAX": 0.752
    },
    {
      "Step": 1056,
      "brisk-pond-1 - train/loss": 0.7442,
      "brisk-pond-1 - train/loss__MIN": 0.7442,
      "brisk-pond-1 - train/loss__MAX": 0.7442
    },
    {
      "Step": 1057,
      "brisk-pond-1 - train/loss": 0.7823,
      "brisk-pond-1 - train/loss__MIN": 0.7823,
      "brisk-pond-1 - train/loss__MAX": 0.7823
    },
    {
      "Step": 1058,
      "brisk-pond-1 - train/loss": 0.7379,
      "brisk-pond-1 - train/loss__MIN": 0.7379,
      "brisk-pond-1 - train/loss__MAX": 0.7379
    },
    {
      "Step": 1059,
      "brisk-pond-1 - train/loss": 0.7778,
      "brisk-pond-1 - train/loss__MIN": 0.7778,
      "brisk-pond-1 - train/loss__MAX": 0.7778
    },
    {
      "Step": 1060,
      "brisk-pond-1 - train/loss": 0.808,
      "brisk-pond-1 - train/loss__MIN": 0.808,
      "brisk-pond-1 - train/loss__MAX": 0.808
    },
    {
      "Step": 1061,
      "brisk-pond-1 - train/loss": 0.791,
      "brisk-pond-1 - train/loss__MIN": 0.791,
      "brisk-pond-1 - train/loss__MAX": 0.791
    },
    {
      "Step": 1062,
      "brisk-pond-1 - train/loss": 0.8028,
      "brisk-pond-1 - train/loss__MIN": 0.8028,
      "brisk-pond-1 - train/loss__MAX": 0.8028
    },
    {
      "Step": 1063,
      "brisk-pond-1 - train/loss": 0.7995,
      "brisk-pond-1 - train/loss__MIN": 0.7995,
      "brisk-pond-1 - train/loss__MAX": 0.7995
    },
    {
      "Step": 1064,
      "brisk-pond-1 - train/loss": 0.7689,
      "brisk-pond-1 - train/loss__MIN": 0.7689,
      "brisk-pond-1 - train/loss__MAX": 0.7689
    },
    {
      "Step": 1065,
      "brisk-pond-1 - train/loss": 0.7328,
      "brisk-pond-1 - train/loss__MIN": 0.7328,
      "brisk-pond-1 - train/loss__MAX": 0.7328
    },
    {
      "Step": 1066,
      "brisk-pond-1 - train/loss": 0.82,
      "brisk-pond-1 - train/loss__MIN": 0.82,
      "brisk-pond-1 - train/loss__MAX": 0.82
    },
    {
      "Step": 1067,
      "brisk-pond-1 - train/loss": 0.8454,
      "brisk-pond-1 - train/loss__MIN": 0.8454,
      "brisk-pond-1 - train/loss__MAX": 0.8454
    },
    {
      "Step": 1068,
      "brisk-pond-1 - train/loss": 0.7615,
      "brisk-pond-1 - train/loss__MIN": 0.7615,
      "brisk-pond-1 - train/loss__MAX": 0.7615
    },
    {
      "Step": 1069,
      "brisk-pond-1 - train/loss": 0.8054,
      "brisk-pond-1 - train/loss__MIN": 0.8054,
      "brisk-pond-1 - train/loss__MAX": 0.8054
    },
    {
      "Step": 1070,
      "brisk-pond-1 - train/loss": 0.8098,
      "brisk-pond-1 - train/loss__MIN": 0.8098,
      "brisk-pond-1 - train/loss__MAX": 0.8098
    },
    {
      "Step": 1071,
      "brisk-pond-1 - train/loss": 0.7421,
      "brisk-pond-1 - train/loss__MIN": 0.7421,
      "brisk-pond-1 - train/loss__MAX": 0.7421
    },
    {
      "Step": 1072,
      "brisk-pond-1 - train/loss": 0.7726,
      "brisk-pond-1 - train/loss__MIN": 0.7726,
      "brisk-pond-1 - train/loss__MAX": 0.7726
    },
    {
      "Step": 1073,
      "brisk-pond-1 - train/loss": 0.7636,
      "brisk-pond-1 - train/loss__MIN": 0.7636,
      "brisk-pond-1 - train/loss__MAX": 0.7636
    },
    {
      "Step": 1074,
      "brisk-pond-1 - train/loss": 0.7175,
      "brisk-pond-1 - train/loss__MIN": 0.7175,
      "brisk-pond-1 - train/loss__MAX": 0.7175
    }
  ];


  const lr_data = [
    {
      "Step": 0,
      "brisk-pond-1 - train/learning_rate": 6.211180124223603e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.211180124223603e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.211180124223603e-7
    },
    {
      "Step": 1,
      "brisk-pond-1 - train/learning_rate": 0.0000012422360248447205,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012422360248447205,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012422360248447205
    },
    {
      "Step": 2,
      "brisk-pond-1 - train/learning_rate": 0.0000016149068322981367,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000016149068322981367,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000016149068322981367
    },
    {
      "Step": 3,
      "brisk-pond-1 - train/learning_rate": 0.000002236024844720497,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002236024844720497,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002236024844720497
    },
    {
      "Step": 4,
      "brisk-pond-1 - train/learning_rate": 0.0000027329192546583855,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000027329192546583855,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000027329192546583855
    },
    {
      "Step": 5,
      "brisk-pond-1 - train/learning_rate": 0.0000033540372670807457,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000033540372670807457,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000033540372670807457
    },
    {
      "Step": 6,
      "brisk-pond-1 - train/learning_rate": 0.000003975155279503106,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003975155279503106,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003975155279503106
    },
    {
      "Step": 7,
      "brisk-pond-1 - train/learning_rate": 0.000004596273291925466,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004596273291925466,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004596273291925466
    },
    {
      "Step": 8,
      "brisk-pond-1 - train/learning_rate": 0.0000052173913043478265,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000052173913043478265,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000052173913043478265
    },
    {
      "Step": 9,
      "brisk-pond-1 - train/learning_rate": 0.000005838509316770186,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005838509316770186,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005838509316770186
    },
    {
      "Step": 10,
      "brisk-pond-1 - train/learning_rate": 0.000006459627329192547,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006459627329192547,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006459627329192547
    },
    {
      "Step": 11,
      "brisk-pond-1 - train/learning_rate": 0.000007080745341614908,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007080745341614908,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007080745341614908
    },
    {
      "Step": 12,
      "brisk-pond-1 - train/learning_rate": 0.000007701863354037268,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007701863354037268,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007701863354037268
    },
    {
      "Step": 13,
      "brisk-pond-1 - train/learning_rate": 0.000008322981366459629,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008322981366459629,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008322981366459629
    },
    {
      "Step": 14,
      "brisk-pond-1 - train/learning_rate": 0.000008944099378881988,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008944099378881988,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008944099378881988
    },
    {
      "Step": 15,
      "brisk-pond-1 - train/learning_rate": 0.000009565217391304349,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009565217391304349,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009565217391304349
    },
    {
      "Step": 16,
      "brisk-pond-1 - train/learning_rate": 0.000010186335403726708,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010186335403726708,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010186335403726708
    },
    {
      "Step": 17,
      "brisk-pond-1 - train/learning_rate": 0.00001080745341614907,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001080745341614907,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001080745341614907
    },
    {
      "Step": 18,
      "brisk-pond-1 - train/learning_rate": 0.000011428571428571429,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011428571428571429,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011428571428571429
    },
    {
      "Step": 19,
      "brisk-pond-1 - train/learning_rate": 0.00001204968944099379,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001204968944099379,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001204968944099379
    },
    {
      "Step": 20,
      "brisk-pond-1 - train/learning_rate": 0.00001267080745341615,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001267080745341615,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001267080745341615
    },
    {
      "Step": 21,
      "brisk-pond-1 - train/learning_rate": 0.000013291925465838511,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013291925465838511,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013291925465838511
    },
    {
      "Step": 22,
      "brisk-pond-1 - train/learning_rate": 0.00001391304347826087,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001391304347826087,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001391304347826087
    },
    {
      "Step": 23,
      "brisk-pond-1 - train/learning_rate": 0.000014534161490683232,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014534161490683232,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014534161490683232
    },
    {
      "Step": 24,
      "brisk-pond-1 - train/learning_rate": 0.000015155279503105591,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015155279503105591,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015155279503105591
    },
    {
      "Step": 25,
      "brisk-pond-1 - train/learning_rate": 0.000015776397515527954,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015776397515527954,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015776397515527954
    },
    {
      "Step": 26,
      "brisk-pond-1 - train/learning_rate": 0.00001639751552795031,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001639751552795031,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001639751552795031
    },
    {
      "Step": 27,
      "brisk-pond-1 - train/learning_rate": 0.000017018633540372672,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017018633540372672,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017018633540372672
    },
    {
      "Step": 28,
      "brisk-pond-1 - train/learning_rate": 0.000017639751552795032,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017639751552795032,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017639751552795032
    },
    {
      "Step": 29,
      "brisk-pond-1 - train/learning_rate": 0.000018260869565217393,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018260869565217393,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018260869565217393
    },
    {
      "Step": 30,
      "brisk-pond-1 - train/learning_rate": 0.000018881987577639754,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018881987577639754,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018881987577639754
    },
    {
      "Step": 31,
      "brisk-pond-1 - train/learning_rate": 0.00001950310559006211,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001950310559006211,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001950310559006211
    },
    {
      "Step": 32,
      "brisk-pond-1 - train/learning_rate": 0.000019999998168665496,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019999998168665496,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019999998168665496
    },
    {
      "Step": 33,
      "brisk-pond-1 - train/learning_rate": 0.000019999934072028176,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019999934072028176,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019999934072028176
    },
    {
      "Step": 34,
      "brisk-pond-1 - train/learning_rate": 0.000019999778409336262,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019999778409336262,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019999778409336262
    },
    {
      "Step": 35,
      "brisk-pond-1 - train/learning_rate": 0.0000199995311820151,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000199995311820151,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000199995311820151
    },
    {
      "Step": 36,
      "brisk-pond-1 - train/learning_rate": 0.00001999919239232847,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001999919239232847,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001999919239232847
    },
    {
      "Step": 37,
      "brisk-pond-1 - train/learning_rate": 0.00001999876204337856,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001999876204337856,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001999876204337856
    },
    {
      "Step": 38,
      "brisk-pond-1 - train/learning_rate": 0.000019998240139105928,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019998240139105928,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019998240139105928
    },
    {
      "Step": 39,
      "brisk-pond-1 - train/learning_rate": 0.000019997626684289472,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019997626684289472,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019997626684289472
    },
    {
      "Step": 40,
      "brisk-pond-1 - train/learning_rate": 0.0000199969216845464,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000199969216845464,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000199969216845464
    },
    {
      "Step": 41,
      "brisk-pond-1 - train/learning_rate": 0.000019996125146332153,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019996125146332153,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019996125146332153
    },
    {
      "Step": 42,
      "brisk-pond-1 - train/learning_rate": 0.000019995237076940372,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019995237076940372,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019995237076940372
    },
    {
      "Step": 43,
      "brisk-pond-1 - train/learning_rate": 0.000019994257484502807,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019994257484502807,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019994257484502807
    },
    {
      "Step": 44,
      "brisk-pond-1 - train/learning_rate": 0.00001999318637798926,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001999318637798926,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001999318637798926
    },
    {
      "Step": 45,
      "brisk-pond-1 - train/learning_rate": 0.0000199920237672075,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000199920237672075,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000199920237672075
    },
    {
      "Step": 46,
      "brisk-pond-1 - train/learning_rate": 0.000019990769662803156,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019990769662803156,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019990769662803156
    },
    {
      "Step": 47,
      "brisk-pond-1 - train/learning_rate": 0.000019989424076259648,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019989424076259648,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019989424076259648
    },
    {
      "Step": 48,
      "brisk-pond-1 - train/learning_rate": 0.000019987987019898064,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019987987019898064,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019987987019898064
    },
    {
      "Step": 49,
      "brisk-pond-1 - train/learning_rate": 0.000019986458506877043,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019986458506877043,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019986458506877043
    },
    {
      "Step": 50,
      "brisk-pond-1 - train/learning_rate": 0.000019984838551192673,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019984838551192673,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019984838551192673
    },
    {
      "Step": 51,
      "brisk-pond-1 - train/learning_rate": 0.00001998312716767835,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001998312716767835,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001998312716767835
    },
    {
      "Step": 52,
      "brisk-pond-1 - train/learning_rate": 0.000019981324372004633,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019981324372004633,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019981324372004633
    },
    {
      "Step": 53,
      "brisk-pond-1 - train/learning_rate": 0.000019979430180679123,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019979430180679123,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019979430180679123
    },
    {
      "Step": 54,
      "brisk-pond-1 - train/learning_rate": 0.0000199774446110463,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000199774446110463,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000199774446110463
    },
    {
      "Step": 55,
      "brisk-pond-1 - train/learning_rate": 0.000019975367681287358,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019975367681287358,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019975367681287358
    },
    {
      "Step": 56,
      "brisk-pond-1 - train/learning_rate": 0.000019973199410420044,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019973199410420044,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019973199410420044
    },
    {
      "Step": 57,
      "brisk-pond-1 - train/learning_rate": 0.000019970939818298502,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019970939818298502,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019970939818298502
    },
    {
      "Step": 58,
      "brisk-pond-1 - train/learning_rate": 0.000019968588925613052,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019968588925613052,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019968588925613052
    },
    {
      "Step": 59,
      "brisk-pond-1 - train/learning_rate": 0.000019966146753890037,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019966146753890037,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019966146753890037
    },
    {
      "Step": 60,
      "brisk-pond-1 - train/learning_rate": 0.000019963613325491606,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019963613325491606,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019963613325491606
    },
    {
      "Step": 61,
      "brisk-pond-1 - train/learning_rate": 0.000019960988663615516,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019960988663615516,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019960988663615516
    },
    {
      "Step": 62,
      "brisk-pond-1 - train/learning_rate": 0.000019958272792294922,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019958272792294922,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019958272792294922
    },
    {
      "Step": 63,
      "brisk-pond-1 - train/learning_rate": 0.000019955465736398145,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019955465736398145,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019955465736398145
    },
    {
      "Step": 64,
      "brisk-pond-1 - train/learning_rate": 0.000019952567521628458,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019952567521628458,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019952567521628458
    },
    {
      "Step": 65,
      "brisk-pond-1 - train/learning_rate": 0.000019949578174523854,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019949578174523854,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019949578174523854
    },
    {
      "Step": 66,
      "brisk-pond-1 - train/learning_rate": 0.000019946497722456774,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019946497722456774,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019946497722456774
    },
    {
      "Step": 67,
      "brisk-pond-1 - train/learning_rate": 0.00001994332619363389,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001994332619363389,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001994332619363389
    },
    {
      "Step": 68,
      "brisk-pond-1 - train/learning_rate": 0.000019940063617095843,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019940063617095843,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019940063617095843
    },
    {
      "Step": 69,
      "brisk-pond-1 - train/learning_rate": 0.00001993671002271694,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001993671002271694,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001993671002271694
    },
    {
      "Step": 70,
      "brisk-pond-1 - train/learning_rate": 0.000019933265441204936,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019933265441204936,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019933265441204936
    },
    {
      "Step": 71,
      "brisk-pond-1 - train/learning_rate": 0.00001992972990410071,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001992972990410071,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001992972990410071
    },
    {
      "Step": 72,
      "brisk-pond-1 - train/learning_rate": 0.00001992610344377799,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001992610344377799,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001992610344377799
    },
    {
      "Step": 73,
      "brisk-pond-1 - train/learning_rate": 0.00001992238609344306,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001992238609344306,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001992238609344306
    },
    {
      "Step": 74,
      "brisk-pond-1 - train/learning_rate": 0.00001991857788713446,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001991857788713446,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001991857788713446
    },
    {
      "Step": 75,
      "brisk-pond-1 - train/learning_rate": 0.000019914678859722667,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019914678859722667,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019914678859722667
    },
    {
      "Step": 76,
      "brisk-pond-1 - train/learning_rate": 0.000019910689046909764,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019910689046909764,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019910689046909764
    },
    {
      "Step": 77,
      "brisk-pond-1 - train/learning_rate": 0.00001990660848522913,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001990660848522913,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001990660848522913
    },
    {
      "Step": 78,
      "brisk-pond-1 - train/learning_rate": 0.000019902437212045116,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019902437212045116,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019902437212045116
    },
    {
      "Step": 79,
      "brisk-pond-1 - train/learning_rate": 0.00001989817526555267,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001989817526555267,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001989817526555267
    },
    {
      "Step": 80,
      "brisk-pond-1 - train/learning_rate": 0.000019893822684777013,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019893822684777013,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019893822684777013
    },
    {
      "Step": 81,
      "brisk-pond-1 - train/learning_rate": 0.00001988937950957327,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001988937950957327,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001988937950957327
    },
    {
      "Step": 82,
      "brisk-pond-1 - train/learning_rate": 0.000019884845780626116,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019884845780626116,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019884845780626116
    },
    {
      "Step": 83,
      "brisk-pond-1 - train/learning_rate": 0.00001988022153944939,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001988022153944939,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001988022153944939
    },
    {
      "Step": 84,
      "brisk-pond-1 - train/learning_rate": 0.000019875506828385723,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019875506828385723,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019875506828385723
    },
    {
      "Step": 85,
      "brisk-pond-1 - train/learning_rate": 0.000019870701690606147,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019870701690606147,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019870701690606147
    },
    {
      "Step": 86,
      "brisk-pond-1 - train/learning_rate": 0.00001986580617010971,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001986580617010971,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001986580617010971
    },
    {
      "Step": 87,
      "brisk-pond-1 - train/learning_rate": 0.000019860820311723045,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019860820311723045,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019860820311723045
    },
    {
      "Step": 88,
      "brisk-pond-1 - train/learning_rate": 0.000019855744161100002,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019855744161100002,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019855744161100002
    },
    {
      "Step": 89,
      "brisk-pond-1 - train/learning_rate": 0.000019850577764721192,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019850577764721192,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019850577764721192
    },
    {
      "Step": 90,
      "brisk-pond-1 - train/learning_rate": 0.00001984532116989358,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001984532116989358,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001984532116989358
    },
    {
      "Step": 91,
      "brisk-pond-1 - train/learning_rate": 0.000019839974424750047,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019839974424750047,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019839974424750047
    },
    {
      "Step": 92,
      "brisk-pond-1 - train/learning_rate": 0.000019834537578248955,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019834537578248955,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019834537578248955
    },
    {
      "Step": 93,
      "brisk-pond-1 - train/learning_rate": 0.000019829010680173687,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019829010680173687,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019829010680173687
    },
    {
      "Step": 94,
      "brisk-pond-1 - train/learning_rate": 0.000019823393781132207,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019823393781132207,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019823393781132207
    },
    {
      "Step": 95,
      "brisk-pond-1 - train/learning_rate": 0.000019817686932556573,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019817686932556573,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019817686932556573
    },
    {
      "Step": 96,
      "brisk-pond-1 - train/learning_rate": 0.0000198118901867025,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000198118901867025,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000198118901867025
    },
    {
      "Step": 97,
      "brisk-pond-1 - train/learning_rate": 0.000019806003596648847,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019806003596648847,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019806003596648847
    },
    {
      "Step": 98,
      "brisk-pond-1 - train/learning_rate": 0.000019800027216297155,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019800027216297155,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019800027216297155
    },
    {
      "Step": 99,
      "brisk-pond-1 - train/learning_rate": 0.000019793961100371138,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019793961100371138,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019793961100371138
    },
    {
      "Step": 100,
      "brisk-pond-1 - train/learning_rate": 0.0000197878053044162,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000197878053044162,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000197878053044162
    },
    {
      "Step": 101,
      "brisk-pond-1 - train/learning_rate": 0.0000197815598847989,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000197815598847989,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000197815598847989
    },
    {
      "Step": 102,
      "brisk-pond-1 - train/learning_rate": 0.00001977522489870646,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001977522489870646,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001977522489870646
    },
    {
      "Step": 103,
      "brisk-pond-1 - train/learning_rate": 0.00001976880040414623,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001976880040414623,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001976880040414623
    },
    {
      "Step": 104,
      "brisk-pond-1 - train/learning_rate": 0.000019762286459945162,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019762286459945162,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019762286459945162
    },
    {
      "Step": 105,
      "brisk-pond-1 - train/learning_rate": 0.000019755683125749266,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019755683125749266,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019755683125749266
    },
    {
      "Step": 106,
      "brisk-pond-1 - train/learning_rate": 0.00001974899046202307,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001974899046202307,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001974899046202307
    },
    {
      "Step": 107,
      "brisk-pond-1 - train/learning_rate": 0.000019742208530049048,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019742208530049048,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019742208530049048
    },
    {
      "Step": 108,
      "brisk-pond-1 - train/learning_rate": 0.0000197353373919271,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000197353373919271,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000197353373919271
    },
    {
      "Step": 109,
      "brisk-pond-1 - train/learning_rate": 0.00001972837711057393,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001972837711057393,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001972837711057393
    },
    {
      "Step": 110,
      "brisk-pond-1 - train/learning_rate": 0.00001972132774972251,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001972132774972251,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001972132774972251
    },
    {
      "Step": 111,
      "brisk-pond-1 - train/learning_rate": 0.000019714189373921483,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019714189373921483,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019714189373921483
    },
    {
      "Step": 112,
      "brisk-pond-1 - train/learning_rate": 0.000019706962048534577,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019706962048534577,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019706962048534577
    },
    {
      "Step": 113,
      "brisk-pond-1 - train/learning_rate": 0.000019699645839739987,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019699645839739987,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019699645839739987
    },
    {
      "Step": 114,
      "brisk-pond-1 - train/learning_rate": 0.000019692240814529796,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019692240814529796,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019692240814529796
    },
    {
      "Step": 115,
      "brisk-pond-1 - train/learning_rate": 0.000019684747040709342,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019684747040709342,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019684747040709342
    },
    {
      "Step": 116,
      "brisk-pond-1 - train/learning_rate": 0.000019677164586896614,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019677164586896614,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019677164586896614
    },
    {
      "Step": 117,
      "brisk-pond-1 - train/learning_rate": 0.000019669493522521597,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019669493522521597,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019669493522521597
    },
    {
      "Step": 118,
      "brisk-pond-1 - train/learning_rate": 0.00001966173391782568,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001966173391782568,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001966173391782568
    },
    {
      "Step": 119,
      "brisk-pond-1 - train/learning_rate": 0.000019653885843860952,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019653885843860952,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019653885843860952
    },
    {
      "Step": 120,
      "brisk-pond-1 - train/learning_rate": 0.000019645949372489618,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019645949372489618,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019645949372489618
    },
    {
      "Step": 121,
      "brisk-pond-1 - train/learning_rate": 0.000019637924576383284,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019637924576383284,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019637924576383284
    },
    {
      "Step": 122,
      "brisk-pond-1 - train/learning_rate": 0.000019629811529022335,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019629811529022335,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019629811529022335
    },
    {
      "Step": 123,
      "brisk-pond-1 - train/learning_rate": 0.00001962161030469523,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001962161030469523,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001962161030469523
    },
    {
      "Step": 124,
      "brisk-pond-1 - train/learning_rate": 0.00001961332097849784,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001961332097849784,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001961332097849784
    },
    {
      "Step": 125,
      "brisk-pond-1 - train/learning_rate": 0.000019604943626332753,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019604943626332753,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019604943626332753
    },
    {
      "Step": 126,
      "brisk-pond-1 - train/learning_rate": 0.00001959647832490859,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001959647832490859,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001959647832490859
    },
    {
      "Step": 127,
      "brisk-pond-1 - train/learning_rate": 0.00001958792515173928,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001958792515173928,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001958792515173928
    },
    {
      "Step": 128,
      "brisk-pond-1 - train/learning_rate": 0.00001957928418514337,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001957928418514337,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001957928418514337
    },
    {
      "Step": 129,
      "brisk-pond-1 - train/learning_rate": 0.00001957055550424331,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001957055550424331,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001957055550424331
    },
    {
      "Step": 130,
      "brisk-pond-1 - train/learning_rate": 0.000019561739188964715,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019561739188964715,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019561739188964715
    },
    {
      "Step": 131,
      "brisk-pond-1 - train/learning_rate": 0.000019552835320035633,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019552835320035633,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019552835320035633
    },
    {
      "Step": 132,
      "brisk-pond-1 - train/learning_rate": 0.00001954384397898582,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001954384397898582,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001954384397898582
    },
    {
      "Step": 133,
      "brisk-pond-1 - train/learning_rate": 0.000019534765248145975,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019534765248145975,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019534765248145975
    },
    {
      "Step": 134,
      "brisk-pond-1 - train/learning_rate": 0.00001952559921064701,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001952559921064701,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001952559921064701
    },
    {
      "Step": 135,
      "brisk-pond-1 - train/learning_rate": 0.00001951634595041926,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001951634595041926,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001951634595041926
    },
    {
      "Step": 136,
      "brisk-pond-1 - train/learning_rate": 0.00001950700555219174,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001950700555219174,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001950700555219174
    },
    {
      "Step": 137,
      "brisk-pond-1 - train/learning_rate": 0.000019497578101491363,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019497578101491363,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019497578101491363
    },
    {
      "Step": 138,
      "brisk-pond-1 - train/learning_rate": 0.000019488063684642135,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019488063684642135,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019488063684642135
    },
    {
      "Step": 139,
      "brisk-pond-1 - train/learning_rate": 0.000019478462388764395,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019478462388764395,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019478462388764395
    },
    {
      "Step": 140,
      "brisk-pond-1 - train/learning_rate": 0.000019468774301773995,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019468774301773995,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019468774301773995
    },
    {
      "Step": 141,
      "brisk-pond-1 - train/learning_rate": 0.00001945899951238152,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001945899951238152,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001945899951238152
    },
    {
      "Step": 142,
      "brisk-pond-1 - train/learning_rate": 0.000019449138110091444,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019449138110091444,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019449138110091444
    },
    {
      "Step": 143,
      "brisk-pond-1 - train/learning_rate": 0.000019439190185201333,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019439190185201333,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019439190185201333
    },
    {
      "Step": 144,
      "brisk-pond-1 - train/learning_rate": 0.000019429155828801014,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019429155828801014,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019429155828801014
    },
    {
      "Step": 145,
      "brisk-pond-1 - train/learning_rate": 0.00001941903513277173,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001941903513277173,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001941903513277173
    },
    {
      "Step": 146,
      "brisk-pond-1 - train/learning_rate": 0.000019408828189785317,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019408828189785317,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019408828189785317
    },
    {
      "Step": 147,
      "brisk-pond-1 - train/learning_rate": 0.00001939853509330334,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001939853509330334,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001939853509330334
    },
    {
      "Step": 148,
      "brisk-pond-1 - train/learning_rate": 0.00001938815593757624,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001938815593757624,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001938815593757624
    },
    {
      "Step": 149,
      "brisk-pond-1 - train/learning_rate": 0.000019377690817642485,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019377690817642485,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019377690817642485
    },
    {
      "Step": 150,
      "brisk-pond-1 - train/learning_rate": 0.000019367139829327675,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019367139829327675,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019367139829327675
    },
    {
      "Step": 151,
      "brisk-pond-1 - train/learning_rate": 0.000019356503069243685,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019356503069243685,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019356503069243685
    },
    {
      "Step": 152,
      "brisk-pond-1 - train/learning_rate": 0.000019345780634787777,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019345780634787777,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019345780634787777
    },
    {
      "Step": 153,
      "brisk-pond-1 - train/learning_rate": 0.000019334972624141693,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019334972624141693,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019334972624141693
    },
    {
      "Step": 154,
      "brisk-pond-1 - train/learning_rate": 0.000019324079136270782,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019324079136270782,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019324079136270782
    },
    {
      "Step": 155,
      "brisk-pond-1 - train/learning_rate": 0.000019313100270923068,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019313100270923068,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019313100270923068
    },
    {
      "Step": 156,
      "brisk-pond-1 - train/learning_rate": 0.00001930203612862835,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001930203612862835,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001930203612862835
    },
    {
      "Step": 157,
      "brisk-pond-1 - train/learning_rate": 0.000019290886810697284,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019290886810697284,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019290886810697284
    },
    {
      "Step": 158,
      "brisk-pond-1 - train/learning_rate": 0.00001927965241922045,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001927965241922045,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001927965241922045
    },
    {
      "Step": 159,
      "brisk-pond-1 - train/learning_rate": 0.000019268333057067422,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019268333057067422,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019268333057067422
    },
    {
      "Step": 160,
      "brisk-pond-1 - train/learning_rate": 0.000019256928827885803,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019256928827885803,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019256928827885803
    },
    {
      "Step": 161,
      "brisk-pond-1 - train/learning_rate": 0.000019245439836100317,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019245439836100317,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019245439836100317
    },
    {
      "Step": 162,
      "brisk-pond-1 - train/learning_rate": 0.000019233866186911822,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019233866186911822,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019233866186911822
    },
    {
      "Step": 163,
      "brisk-pond-1 - train/learning_rate": 0.000019222207986296354,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019222207986296354,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019222207986296354
    },
    {
      "Step": 164,
      "brisk-pond-1 - train/learning_rate": 0.000019210465341004165,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019210465341004165,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019210465341004165
    },
    {
      "Step": 165,
      "brisk-pond-1 - train/learning_rate": 0.000019198638358558727,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019198638358558727,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019198638358558727
    },
    {
      "Step": 166,
      "brisk-pond-1 - train/learning_rate": 0.00001918672714725577,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001918672714725577,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001918672714725577
    },
    {
      "Step": 167,
      "brisk-pond-1 - train/learning_rate": 0.00001917473181616228,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001917473181616228,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001917473181616228
    },
    {
      "Step": 168,
      "brisk-pond-1 - train/learning_rate": 0.000019162652475115485,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019162652475115485,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019162652475115485
    },
    {
      "Step": 169,
      "brisk-pond-1 - train/learning_rate": 0.000019150489234721878,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019150489234721878,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019150489234721878
    },
    {
      "Step": 170,
      "brisk-pond-1 - train/learning_rate": 0.00001913824220635619,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001913824220635619,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001913824220635619
    },
    {
      "Step": 171,
      "brisk-pond-1 - train/learning_rate": 0.000019125911502160365,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019125911502160365,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019125911502160365
    },
    {
      "Step": 172,
      "brisk-pond-1 - train/learning_rate": 0.000019113497235042543,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019113497235042543,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019113497235042543
    },
    {
      "Step": 173,
      "brisk-pond-1 - train/learning_rate": 0.000019100999518676017,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019100999518676017,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019100999518676017
    },
    {
      "Step": 174,
      "brisk-pond-1 - train/learning_rate": 0.0000190884184674982,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000190884184674982,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000190884184674982
    },
    {
      "Step": 175,
      "brisk-pond-1 - train/learning_rate": 0.000019075754196709574,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019075754196709574,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019075754196709574
    },
    {
      "Step": 176,
      "brisk-pond-1 - train/learning_rate": 0.000019063006822272633,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019063006822272633,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019063006822272633
    },
    {
      "Step": 177,
      "brisk-pond-1 - train/learning_rate": 0.000019050176460910824,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019050176460910824,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019050176460910824
    },
    {
      "Step": 178,
      "brisk-pond-1 - train/learning_rate": 0.000019037263230107485,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019037263230107485,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019037263230107485
    },
    {
      "Step": 179,
      "brisk-pond-1 - train/learning_rate": 0.000019024267248104746,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000019024267248104746,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000019024267248104746
    },
    {
      "Step": 180,
      "brisk-pond-1 - train/learning_rate": 0.00001901118863390248,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001901118863390248,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001901118863390248
    },
    {
      "Step": 181,
      "brisk-pond-1 - train/learning_rate": 0.000018998027507257174,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018998027507257174,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018998027507257174
    },
    {
      "Step": 182,
      "brisk-pond-1 - train/learning_rate": 0.000018984783988680883,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018984783988680883,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018984783988680883
    },
    {
      "Step": 183,
      "brisk-pond-1 - train/learning_rate": 0.000018971458199440072,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018971458199440072,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018971458199440072
    },
    {
      "Step": 184,
      "brisk-pond-1 - train/learning_rate": 0.000018958050261554542,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018958050261554542,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018958050261554542
    },
    {
      "Step": 185,
      "brisk-pond-1 - train/learning_rate": 0.000018944560297796295,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018944560297796295,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018944560297796295
    },
    {
      "Step": 186,
      "brisk-pond-1 - train/learning_rate": 0.000018930988431688427,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018930988431688427,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018930988431688427
    },
    {
      "Step": 187,
      "brisk-pond-1 - train/learning_rate": 0.00001891733478750398,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001891733478750398,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001891733478750398
    },
    {
      "Step": 188,
      "brisk-pond-1 - train/learning_rate": 0.000018903599490264808,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018903599490264808,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018903599490264808
    },
    {
      "Step": 189,
      "brisk-pond-1 - train/learning_rate": 0.00001888978266574044,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001888978266574044,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001888978266574044
    },
    {
      "Step": 190,
      "brisk-pond-1 - train/learning_rate": 0.00001887588444044692,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001887588444044692,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001887588444044692
    },
    {
      "Step": 191,
      "brisk-pond-1 - train/learning_rate": 0.00001886190494164565,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001886190494164565,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001886190494164565
    },
    {
      "Step": 192,
      "brisk-pond-1 - train/learning_rate": 0.00001884784429734224,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001884784429734224,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001884784429734224
    },
    {
      "Step": 193,
      "brisk-pond-1 - train/learning_rate": 0.0000188337026362853,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000188337026362853,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000188337026362853
    },
    {
      "Step": 194,
      "brisk-pond-1 - train/learning_rate": 0.000018819480087965293,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018819480087965293,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018819480087965293
    },
    {
      "Step": 195,
      "brisk-pond-1 - train/learning_rate": 0.00001880517678261335,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001880517678261335,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001880517678261335
    },
    {
      "Step": 196,
      "brisk-pond-1 - train/learning_rate": 0.000018790792851200056,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018790792851200056,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018790792851200056
    },
    {
      "Step": 197,
      "brisk-pond-1 - train/learning_rate": 0.00001877632842543426,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001877632842543426,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001877632842543426
    },
    {
      "Step": 198,
      "brisk-pond-1 - train/learning_rate": 0.000018761783637761878,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018761783637761878,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018761783637761878
    },
    {
      "Step": 199,
      "brisk-pond-1 - train/learning_rate": 0.00001874715862136467,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001874715862136467,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001874715862136467
    },
    {
      "Step": 201,
      "brisk-pond-1 - train/learning_rate": 0.000018732453510159025,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018732453510159025,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018732453510159025
    },
    {
      "Step": 202,
      "brisk-pond-1 - train/learning_rate": 0.00001871766843879473,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001871766843879473,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001871766843879473
    },
    {
      "Step": 203,
      "brisk-pond-1 - train/learning_rate": 0.000018702803542653746,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018702803542653746,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018702803542653746
    },
    {
      "Step": 204,
      "brisk-pond-1 - train/learning_rate": 0.000018687858957848956,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018687858957848956,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018687858957848956
    },
    {
      "Step": 205,
      "brisk-pond-1 - train/learning_rate": 0.00001867283482122293,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001867283482122293,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001867283482122293
    },
    {
      "Step": 206,
      "brisk-pond-1 - train/learning_rate": 0.000018657731270346663,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018657731270346663,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018657731270346663
    },
    {
      "Step": 207,
      "brisk-pond-1 - train/learning_rate": 0.000018642548443518334,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018642548443518334,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018642548443518334
    },
    {
      "Step": 208,
      "brisk-pond-1 - train/learning_rate": 0.000018627286479762005,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018627286479762005,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018627286479762005
    },
    {
      "Step": 209,
      "brisk-pond-1 - train/learning_rate": 0.000018611945518826376,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018611945518826376,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018611945518826376
    },
    {
      "Step": 210,
      "brisk-pond-1 - train/learning_rate": 0.00001859652570118351,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001859652570118351,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001859652570118351
    },
    {
      "Step": 211,
      "brisk-pond-1 - train/learning_rate": 0.000018581027168027516,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018581027168027516,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018581027168027516
    },
    {
      "Step": 212,
      "brisk-pond-1 - train/learning_rate": 0.00001856545006127329,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001856545006127329,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001856545006127329
    },
    {
      "Step": 213,
      "brisk-pond-1 - train/learning_rate": 0.00001854979452355518,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001854979452355518,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001854979452355518
    },
    {
      "Step": 214,
      "brisk-pond-1 - train/learning_rate": 0.00001853406069822573,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001853406069822573,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001853406069822573
    },
    {
      "Step": 215,
      "brisk-pond-1 - train/learning_rate": 0.00001851824872935431,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001851824872935431,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001851824872935431
    },
    {
      "Step": 216,
      "brisk-pond-1 - train/learning_rate": 0.00001850235876172584,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001850235876172584,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001850235876172584
    },
    {
      "Step": 217,
      "brisk-pond-1 - train/learning_rate": 0.00001848639094083944,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001848639094083944,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001848639094083944
    },
    {
      "Step": 218,
      "brisk-pond-1 - train/learning_rate": 0.000018470345412907106,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018470345412907106,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018470345412907106
    },
    {
      "Step": 219,
      "brisk-pond-1 - train/learning_rate": 0.000018454222324852386,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018454222324852386,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018454222324852386
    },
    {
      "Step": 220,
      "brisk-pond-1 - train/learning_rate": 0.000018438021824309,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018438021824309,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018438021824309
    },
    {
      "Step": 221,
      "brisk-pond-1 - train/learning_rate": 0.000018421744059619522,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018421744059619522,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018421744059619522
    },
    {
      "Step": 222,
      "brisk-pond-1 - train/learning_rate": 0.000018405389179834007,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018405389179834007,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018405389179834007
    },
    {
      "Step": 223,
      "brisk-pond-1 - train/learning_rate": 0.00001838895733470862,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001838895733470862,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001838895733470862
    },
    {
      "Step": 224,
      "brisk-pond-1 - train/learning_rate": 0.000018372448674704272,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018372448674704272,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018372448674704272
    },
    {
      "Step": 225,
      "brisk-pond-1 - train/learning_rate": 0.000018355863350985253,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018355863350985253,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018355863350985253
    },
    {
      "Step": 226,
      "brisk-pond-1 - train/learning_rate": 0.000018339201515417825,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018339201515417825,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018339201515417825
    },
    {
      "Step": 227,
      "brisk-pond-1 - train/learning_rate": 0.00001832246332056885,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001832246332056885,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001832246332056885
    },
    {
      "Step": 228,
      "brisk-pond-1 - train/learning_rate": 0.000018305648919704384,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018305648919704384,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018305648919704384
    },
    {
      "Step": 229,
      "brisk-pond-1 - train/learning_rate": 0.00001828875846678828,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001828875846678828,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001828875846678828
    },
    {
      "Step": 230,
      "brisk-pond-1 - train/learning_rate": 0.000018271792116480767,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018271792116480767,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018271792116480767
    },
    {
      "Step": 231,
      "brisk-pond-1 - train/learning_rate": 0.000018254750024137047,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018254750024137047,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018254750024137047
    },
    {
      "Step": 232,
      "brisk-pond-1 - train/learning_rate": 0.000018237632345805863,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018237632345805863,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018237632345805863
    },
    {
      "Step": 233,
      "brisk-pond-1 - train/learning_rate": 0.00001822043923822808,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001822043923822808,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001822043923822808
    },
    {
      "Step": 234,
      "brisk-pond-1 - train/learning_rate": 0.000018203170858835233,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018203170858835233,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018203170858835233
    },
    {
      "Step": 235,
      "brisk-pond-1 - train/learning_rate": 0.000018185827365748103,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018185827365748103,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018185827365748103
    },
    {
      "Step": 236,
      "brisk-pond-1 - train/learning_rate": 0.00001816840891777526,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001816840891777526,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001816840891777526
    },
    {
      "Step": 237,
      "brisk-pond-1 - train/learning_rate": 0.000018150915674411617,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018150915674411617,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018150915674411617
    },
    {
      "Step": 238,
      "brisk-pond-1 - train/learning_rate": 0.000018133347795836954,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018133347795836954,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018133347795836954
    },
    {
      "Step": 239,
      "brisk-pond-1 - train/learning_rate": 0.00001811570544291446,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001811570544291446,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001811570544291446
    },
    {
      "Step": 240,
      "brisk-pond-1 - train/learning_rate": 0.00001809798877718927,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001809798877718927,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001809798877718927
    },
    {
      "Step": 241,
      "brisk-pond-1 - train/learning_rate": 0.00001808019796088697,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001808019796088697,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001808019796088697
    },
    {
      "Step": 242,
      "brisk-pond-1 - train/learning_rate": 0.00001806233315691212,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001806233315691212,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001806233315691212
    },
    {
      "Step": 243,
      "brisk-pond-1 - train/learning_rate": 0.000018044394528846762,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000018044394528846762,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000018044394528846762
    },
    {
      "Step": 244,
      "brisk-pond-1 - train/learning_rate": 0.00001802638224094891,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001802638224094891,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001802638224094891
    },
    {
      "Step": 245,
      "brisk-pond-1 - train/learning_rate": 0.00001800829645815108,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001800829645815108,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001800829645815108
    },
    {
      "Step": 246,
      "brisk-pond-1 - train/learning_rate": 0.000017990137346058733,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017990137346058733,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017990137346058733
    },
    {
      "Step": 247,
      "brisk-pond-1 - train/learning_rate": 0.000017971905070948784,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017971905070948784,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017971905070948784
    },
    {
      "Step": 248,
      "brisk-pond-1 - train/learning_rate": 0.000017953599799768096,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017953599799768096,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017953599799768096
    },
    {
      "Step": 249,
      "brisk-pond-1 - train/learning_rate": 0.00001793522170013191,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001793522170013191,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001793522170013191
    },
    {
      "Step": 250,
      "brisk-pond-1 - train/learning_rate": 0.00001791677094032235,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001791677094032235,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001791677094032235
    },
    {
      "Step": 251,
      "brisk-pond-1 - train/learning_rate": 0.000017898247689286853,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017898247689286853,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017898247689286853
    },
    {
      "Step": 252,
      "brisk-pond-1 - train/learning_rate": 0.00001787965211663664,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001787965211663664,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001787965211663664
    },
    {
      "Step": 253,
      "brisk-pond-1 - train/learning_rate": 0.000017860984392645155,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017860984392645155,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017860984392645155
    },
    {
      "Step": 254,
      "brisk-pond-1 - train/learning_rate": 0.00001784224468824651,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001784224468824651,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001784224468824651
    },
    {
      "Step": 255,
      "brisk-pond-1 - train/learning_rate": 0.000017823433175033917,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017823433175033917,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017823433175033917
    },
    {
      "Step": 256,
      "brisk-pond-1 - train/learning_rate": 0.00001780455002525811,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001780455002525811,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001780455002525811
    },
    {
      "Step": 257,
      "brisk-pond-1 - train/learning_rate": 0.00001778559541182579,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001778559541182579,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001778559541182579
    },
    {
      "Step": 258,
      "brisk-pond-1 - train/learning_rate": 0.000017766569508298016,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017766569508298016,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017766569508298016
    },
    {
      "Step": 259,
      "brisk-pond-1 - train/learning_rate": 0.000017747472488888622,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017747472488888622,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017747472488888622
    },
    {
      "Step": 260,
      "brisk-pond-1 - train/learning_rate": 0.00001772830452846264,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001772830452846264,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001772830452846264
    },
    {
      "Step": 261,
      "brisk-pond-1 - train/learning_rate": 0.000017709065802534675,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017709065802534675,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017709065802534675
    },
    {
      "Step": 262,
      "brisk-pond-1 - train/learning_rate": 0.000017689756487267315,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017689756487267315,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017689756487267315
    },
    {
      "Step": 263,
      "brisk-pond-1 - train/learning_rate": 0.000017670376759469497,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017670376759469497,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017670376759469497
    },
    {
      "Step": 264,
      "brisk-pond-1 - train/learning_rate": 0.000017650926796594926,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017650926796594926,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017650926796594926
    },
    {
      "Step": 265,
      "brisk-pond-1 - train/learning_rate": 0.000017631406776740402,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017631406776740402,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017631406776740402
    },
    {
      "Step": 266,
      "brisk-pond-1 - train/learning_rate": 0.00001761181687864423,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001761181687864423,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001761181687864423
    },
    {
      "Step": 267,
      "brisk-pond-1 - train/learning_rate": 0.000017592157281684557,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017592157281684557,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017592157281684557
    },
    {
      "Step": 268,
      "brisk-pond-1 - train/learning_rate": 0.000017572428165877746,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017572428165877746,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017572428165877746
    },
    {
      "Step": 269,
      "brisk-pond-1 - train/learning_rate": 0.000017552629711876716,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017552629711876716,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017552629711876716
    },
    {
      "Step": 270,
      "brisk-pond-1 - train/learning_rate": 0.00001753276210096929,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001753276210096929,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001753276210096929
    },
    {
      "Step": 271,
      "brisk-pond-1 - train/learning_rate": 0.00001751282551507655,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001751282551507655,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001751282551507655
    },
    {
      "Step": 272,
      "brisk-pond-1 - train/learning_rate": 0.000017492820136751143,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017492820136751143,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017492820136751143
    },
    {
      "Step": 273,
      "brisk-pond-1 - train/learning_rate": 0.000017472746149175637,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017472746149175637,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017472746149175637
    },
    {
      "Step": 274,
      "brisk-pond-1 - train/learning_rate": 0.000017452603736160828,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017452603736160828,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017452603736160828
    },
    {
      "Step": 275,
      "brisk-pond-1 - train/learning_rate": 0.00001743239308214406,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001743239308214406,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001743239308214406
    },
    {
      "Step": 276,
      "brisk-pond-1 - train/learning_rate": 0.000017412114372187538,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017412114372187538,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017412114372187538
    },
    {
      "Step": 277,
      "brisk-pond-1 - train/learning_rate": 0.000017391767791976634,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017391767791976634,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017391767791976634
    },
    {
      "Step": 278,
      "brisk-pond-1 - train/learning_rate": 0.00001737135352781818,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001737135352781818,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001737135352781818
    },
    {
      "Step": 279,
      "brisk-pond-1 - train/learning_rate": 0.000017350871766638774,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017350871766638774,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017350871766638774
    },
    {
      "Step": 280,
      "brisk-pond-1 - train/learning_rate": 0.000017330322695983062,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017330322695983062,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017330322695983062
    },
    {
      "Step": 281,
      "brisk-pond-1 - train/learning_rate": 0.000017309706504012008,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017309706504012008,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017309706504012008
    },
    {
      "Step": 282,
      "brisk-pond-1 - train/learning_rate": 0.000017289023379501202,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017289023379501202,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017289023379501202
    },
    {
      "Step": 283,
      "brisk-pond-1 - train/learning_rate": 0.000017268273511839098,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017268273511839098,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017268273511839098
    },
    {
      "Step": 284,
      "brisk-pond-1 - train/learning_rate": 0.0000172474570910253,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000172474570910253,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000172474570910253
    },
    {
      "Step": 285,
      "brisk-pond-1 - train/learning_rate": 0.000017226574307668822,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017226574307668822,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017226574307668822
    },
    {
      "Step": 286,
      "brisk-pond-1 - train/learning_rate": 0.00001720562535298633,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001720562535298633,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001720562535298633
    },
    {
      "Step": 287,
      "brisk-pond-1 - train/learning_rate": 0.000017184610418800396,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017184610418800396,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017184610418800396
    },
    {
      "Step": 288,
      "brisk-pond-1 - train/learning_rate": 0.000017163529697537756,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017163529697537756,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017163529697537756
    },
    {
      "Step": 289,
      "brisk-pond-1 - train/learning_rate": 0.000017142383382227528,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017142383382227528,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017142383382227528
    },
    {
      "Step": 290,
      "brisk-pond-1 - train/learning_rate": 0.000017121171666499457,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017121171666499457,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017121171666499457
    },
    {
      "Step": 291,
      "brisk-pond-1 - train/learning_rate": 0.00001709989474458213,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001709989474458213,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001709989474458213
    },
    {
      "Step": 292,
      "brisk-pond-1 - train/learning_rate": 0.00001707855281130122,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001707855281130122,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001707855281130122
    },
    {
      "Step": 293,
      "brisk-pond-1 - train/learning_rate": 0.00001705714606207767,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001705714606207767,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001705714606207767
    },
    {
      "Step": 294,
      "brisk-pond-1 - train/learning_rate": 0.000017035674692925934,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000017035674692925934,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000017035674692925934
    },
    {
      "Step": 295,
      "brisk-pond-1 - train/learning_rate": 0.00001701413890045216,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001701413890045216,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001701413890045216
    },
    {
      "Step": 296,
      "brisk-pond-1 - train/learning_rate": 0.000016992538881852406,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016992538881852406,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016992538881852406
    },
    {
      "Step": 297,
      "brisk-pond-1 - train/learning_rate": 0.00001697087483491082,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001697087483491082,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001697087483491082
    },
    {
      "Step": 298,
      "brisk-pond-1 - train/learning_rate": 0.000016949146957997847,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016949146957997847,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016949146957997847
    },
    {
      "Step": 299,
      "brisk-pond-1 - train/learning_rate": 0.000016927355450068392,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016927355450068392,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016927355450068392
    },
    {
      "Step": 300,
      "brisk-pond-1 - train/learning_rate": 0.000016905500510660012,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016905500510660012,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016905500510660012
    },
    {
      "Step": 301,
      "brisk-pond-1 - train/learning_rate": 0.000016883582339891082,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016883582339891082,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016883582339891082
    },
    {
      "Step": 302,
      "brisk-pond-1 - train/learning_rate": 0.000016861601138458964,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016861601138458964,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016861601138458964
    },
    {
      "Step": 303,
      "brisk-pond-1 - train/learning_rate": 0.000016839557107638182,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016839557107638182,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016839557107638182
    },
    {
      "Step": 304,
      "brisk-pond-1 - train/learning_rate": 0.000016817450449278553,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016817450449278553,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016817450449278553
    },
    {
      "Step": 305,
      "brisk-pond-1 - train/learning_rate": 0.000016795281365803365,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016795281365803365,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016795281365803365
    },
    {
      "Step": 306,
      "brisk-pond-1 - train/learning_rate": 0.000016773050060207502,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016773050060207502,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016773050060207502
    },
    {
      "Step": 307,
      "brisk-pond-1 - train/learning_rate": 0.000016750756736055604,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016750756736055604,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016750756736055604
    },
    {
      "Step": 308,
      "brisk-pond-1 - train/learning_rate": 0.000016728401597480192,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016728401597480192,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016728401597480192
    },
    {
      "Step": 309,
      "brisk-pond-1 - train/learning_rate": 0.000016705984849179798,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016705984849179798,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016705984849179798
    },
    {
      "Step": 310,
      "brisk-pond-1 - train/learning_rate": 0.00001668350669641709,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001668350669641709,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001668350669641709
    },
    {
      "Step": 311,
      "brisk-pond-1 - train/learning_rate": 0.000016660967345017006,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016660967345017006,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016660967345017006
    },
    {
      "Step": 312,
      "brisk-pond-1 - train/learning_rate": 0.00001663836700136485,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001663836700136485,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001663836700136485
    },
    {
      "Step": 313,
      "brisk-pond-1 - train/learning_rate": 0.000016615705872404428,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016615705872404428,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016615705872404428
    },
    {
      "Step": 314,
      "brisk-pond-1 - train/learning_rate": 0.000016592984165636115,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016592984165636115,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016592984165636115
    },
    {
      "Step": 315,
      "brisk-pond-1 - train/learning_rate": 0.00001657020208911499,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001657020208911499,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001657020208911499
    },
    {
      "Step": 316,
      "brisk-pond-1 - train/learning_rate": 0.000016547359851448918,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016547359851448918,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016547359851448918
    },
    {
      "Step": 317,
      "brisk-pond-1 - train/learning_rate": 0.000016524457661796626,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016524457661796626,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016524457661796626
    },
    {
      "Step": 318,
      "brisk-pond-1 - train/learning_rate": 0.000016501495729865818,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016501495729865818,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016501495729865818
    },
    {
      "Step": 319,
      "brisk-pond-1 - train/learning_rate": 0.000016478474265911236,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016478474265911236,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016478474265911236
    },
    {
      "Step": 320,
      "brisk-pond-1 - train/learning_rate": 0.00001645539348073272,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001645539348073272,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001645539348073272
    },
    {
      "Step": 321,
      "brisk-pond-1 - train/learning_rate": 0.00001643225358567332,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001643225358567332,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001643225358567332
    },
    {
      "Step": 322,
      "brisk-pond-1 - train/learning_rate": 0.000016409054792617314,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016409054792617314,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016409054792617314
    },
    {
      "Step": 323,
      "brisk-pond-1 - train/learning_rate": 0.000016385797313988303,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016385797313988303,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016385797313988303
    },
    {
      "Step": 324,
      "brisk-pond-1 - train/learning_rate": 0.000016362481362747243,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016362481362747243,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016362481362747243
    },
    {
      "Step": 325,
      "brisk-pond-1 - train/learning_rate": 0.00001633910715239051,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001633910715239051,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001633910715239051
    },
    {
      "Step": 326,
      "brisk-pond-1 - train/learning_rate": 0.000016315674896947934,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016315674896947934,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016315674896947934
    },
    {
      "Step": 327,
      "brisk-pond-1 - train/learning_rate": 0.000016292184810980853,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016292184810980853,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016292184810980853
    },
    {
      "Step": 328,
      "brisk-pond-1 - train/learning_rate": 0.000016268637109580127,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016268637109580127,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016268637109580127
    },
    {
      "Step": 329,
      "brisk-pond-1 - train/learning_rate": 0.000016245032008364195,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016245032008364195,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016245032008364195
    },
    {
      "Step": 330,
      "brisk-pond-1 - train/learning_rate": 0.00001622136972347708,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001622136972347708,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001622136972347708
    },
    {
      "Step": 331,
      "brisk-pond-1 - train/learning_rate": 0.000016197650471586416,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016197650471586416,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016197650471586416
    },
    {
      "Step": 332,
      "brisk-pond-1 - train/learning_rate": 0.000016173874469881465,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016173874469881465,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016173874469881465
    },
    {
      "Step": 333,
      "brisk-pond-1 - train/learning_rate": 0.00001615004193607113,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001615004193607113,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001615004193607113
    },
    {
      "Step": 334,
      "brisk-pond-1 - train/learning_rate": 0.000016126153088381965,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016126153088381965,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016126153088381965
    },
    {
      "Step": 335,
      "brisk-pond-1 - train/learning_rate": 0.000016102208145556156,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016102208145556156,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016102208145556156
    },
    {
      "Step": 336,
      "brisk-pond-1 - train/learning_rate": 0.000016078207326849547,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016078207326849547,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016078207326849547
    },
    {
      "Step": 337,
      "brisk-pond-1 - train/learning_rate": 0.000016054150852029614,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000016054150852029614,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000016054150852029614
    },
    {
      "Step": 338,
      "brisk-pond-1 - train/learning_rate": 0.00001603003894137346,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001603003894137346,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001603003894137346
    },
    {
      "Step": 339,
      "brisk-pond-1 - train/learning_rate": 0.00001600587181566579,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001600587181566579,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001600587181566579
    },
    {
      "Step": 340,
      "brisk-pond-1 - train/learning_rate": 0.0000159816496961969,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000159816496961969,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000159816496961969
    },
    {
      "Step": 341,
      "brisk-pond-1 - train/learning_rate": 0.000015957372804760644,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015957372804760644,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015957372804760644
    },
    {
      "Step": 342,
      "brisk-pond-1 - train/learning_rate": 0.000015933041363652403,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015933041363652403,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015933041363652403
    },
    {
      "Step": 343,
      "brisk-pond-1 - train/learning_rate": 0.000015908655595667053,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015908655595667053,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015908655595667053
    },
    {
      "Step": 344,
      "brisk-pond-1 - train/learning_rate": 0.00001588421572409692,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001588421572409692,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001588421572409692
    },
    {
      "Step": 345,
      "brisk-pond-1 - train/learning_rate": 0.000015859721972729744,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015859721972729744,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015859721972729744
    },
    {
      "Step": 346,
      "brisk-pond-1 - train/learning_rate": 0.000015835174565846624,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015835174565846624,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015835174565846624
    },
    {
      "Step": 347,
      "brisk-pond-1 - train/learning_rate": 0.000015810573728219954,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015810573728219954,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015810573728219954
    },
    {
      "Step": 348,
      "brisk-pond-1 - train/learning_rate": 0.000015785919685111387,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015785919685111387,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015785919685111387
    },
    {
      "Step": 349,
      "brisk-pond-1 - train/learning_rate": 0.000015761212662269763,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015761212662269763,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015761212662269763
    },
    {
      "Step": 350,
      "brisk-pond-1 - train/learning_rate": 0.00001573645288592902,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001573645288592902,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001573645288592902
    },
    {
      "Step": 351,
      "brisk-pond-1 - train/learning_rate": 0.00001571164058280617,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001571164058280617,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001571164058280617
    },
    {
      "Step": 352,
      "brisk-pond-1 - train/learning_rate": 0.000015686775980099172,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015686775980099172,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015686775980099172
    },
    {
      "Step": 353,
      "brisk-pond-1 - train/learning_rate": 0.000015661859305484887,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015661859305484887,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015661859305484887
    },
    {
      "Step": 354,
      "brisk-pond-1 - train/learning_rate": 0.00001563689078711698,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001563689078711698,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001563689078711698
    },
    {
      "Step": 355,
      "brisk-pond-1 - train/learning_rate": 0.000015611870653623826,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015611870653623826,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015611870653623826
    },
    {
      "Step": 356,
      "brisk-pond-1 - train/learning_rate": 0.00001558679913410643,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001558679913410643,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001558679913410643
    },
    {
      "Step": 357,
      "brisk-pond-1 - train/learning_rate": 0.000015561676458136314,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015561676458136314,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015561676458136314
    },
    {
      "Step": 358,
      "brisk-pond-1 - train/learning_rate": 0.000015536502855753427,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015536502855753427,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015536502855753427
    },
    {
      "Step": 359,
      "brisk-pond-1 - train/learning_rate": 0.00001551127855746404,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001551127855746404,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001551127855746404
    },
    {
      "Step": 360,
      "brisk-pond-1 - train/learning_rate": 0.00001548600379423862,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001548600379423862,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001548600379423862
    },
    {
      "Step": 361,
      "brisk-pond-1 - train/learning_rate": 0.00001546067879750972,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001546067879750972,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001546067879750972
    },
    {
      "Step": 362,
      "brisk-pond-1 - train/learning_rate": 0.00001543530379916988,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001543530379916988,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001543530379916988
    },
    {
      "Step": 363,
      "brisk-pond-1 - train/learning_rate": 0.000015409879031569483,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015409879031569483,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015409879031569483
    },
    {
      "Step": 364,
      "brisk-pond-1 - train/learning_rate": 0.000015384404727514622,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015384404727514622,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015384404727514622
    },
    {
      "Step": 365,
      "brisk-pond-1 - train/learning_rate": 0.00001535888112026499,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001535888112026499,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001535888112026499
    },
    {
      "Step": 366,
      "brisk-pond-1 - train/learning_rate": 0.000015333308443531733,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015333308443531733,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015333308443531733
    },
    {
      "Step": 367,
      "brisk-pond-1 - train/learning_rate": 0.000015307686931475296,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015307686931475296,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015307686931475296
    },
    {
      "Step": 368,
      "brisk-pond-1 - train/learning_rate": 0.000015282016818703315,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015282016818703315,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015282016818703315
    },
    {
      "Step": 369,
      "brisk-pond-1 - train/learning_rate": 0.000015256298340268423,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015256298340268423,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015256298340268423
    },
    {
      "Step": 370,
      "brisk-pond-1 - train/learning_rate": 0.00001523053173166614,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001523053173166614,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001523053173166614
    },
    {
      "Step": 371,
      "brisk-pond-1 - train/learning_rate": 0.00001520471722883269,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001520471722883269,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001520471722883269
    },
    {
      "Step": 372,
      "brisk-pond-1 - train/learning_rate": 0.000015178855068142848,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015178855068142848,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015178855068142848
    },
    {
      "Step": 373,
      "brisk-pond-1 - train/learning_rate": 0.000015152945486407777,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015152945486407777,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015152945486407777
    },
    {
      "Step": 374,
      "brisk-pond-1 - train/learning_rate": 0.000015126988720872856,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015126988720872856,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015126988720872856
    },
    {
      "Step": 375,
      "brisk-pond-1 - train/learning_rate": 0.000015100985009215519,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015100985009215519,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015100985009215519
    },
    {
      "Step": 376,
      "brisk-pond-1 - train/learning_rate": 0.000015074934589543058,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015074934589543058,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015074934589543058
    },
    {
      "Step": 377,
      "brisk-pond-1 - train/learning_rate": 0.000015048837700390462,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015048837700390462,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015048837700390462
    },
    {
      "Step": 378,
      "brisk-pond-1 - train/learning_rate": 0.000015022694580718224,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000015022694580718224,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000015022694580718224
    },
    {
      "Step": 379,
      "brisk-pond-1 - train/learning_rate": 0.000014996505469910159,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014996505469910159,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014996505469910159
    },
    {
      "Step": 380,
      "brisk-pond-1 - train/learning_rate": 0.000014970270607771196,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014970270607771196,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014970270607771196
    },
    {
      "Step": 381,
      "brisk-pond-1 - train/learning_rate": 0.000014943990234525207,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014943990234525207,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014943990234525207
    },
    {
      "Step": 382,
      "brisk-pond-1 - train/learning_rate": 0.000014917664590812783,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014917664590812783,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014917664590812783
    },
    {
      "Step": 383,
      "brisk-pond-1 - train/learning_rate": 0.000014891293917689051,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014891293917689051,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014891293917689051
    },
    {
      "Step": 384,
      "brisk-pond-1 - train/learning_rate": 0.000014864878456621447,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014864878456621447,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014864878456621447
    },
    {
      "Step": 385,
      "brisk-pond-1 - train/learning_rate": 0.000014838418449487525,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014838418449487525,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014838418449487525
    },
    {
      "Step": 386,
      "brisk-pond-1 - train/learning_rate": 0.000014811914138572723,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014811914138572723,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014811914138572723
    },
    {
      "Step": 387,
      "brisk-pond-1 - train/learning_rate": 0.000014785365766568163,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014785365766568163,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014785365766568163
    },
    {
      "Step": 388,
      "brisk-pond-1 - train/learning_rate": 0.000014758773576568417,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014758773576568417,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014758773576568417
    },
    {
      "Step": 389,
      "brisk-pond-1 - train/learning_rate": 0.000014732137812069277,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014732137812069277,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014732137812069277
    },
    {
      "Step": 390,
      "brisk-pond-1 - train/learning_rate": 0.000014705458716965546,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014705458716965546,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014705458716965546
    },
    {
      "Step": 391,
      "brisk-pond-1 - train/learning_rate": 0.000014678736535548774,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014678736535548774,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014678736535548774
    },
    {
      "Step": 392,
      "brisk-pond-1 - train/learning_rate": 0.000014651971512505052,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014651971512505052,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014651971512505052
    },
    {
      "Step": 393,
      "brisk-pond-1 - train/learning_rate": 0.000014625163892912748,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014625163892912748,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014625163892912748
    },
    {
      "Step": 394,
      "brisk-pond-1 - train/learning_rate": 0.000014598313922240279,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014598313922240279,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014598313922240279
    },
    {
      "Step": 395,
      "brisk-pond-1 - train/learning_rate": 0.000014571421846343854,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014571421846343854,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014571421846343854
    },
    {
      "Step": 396,
      "brisk-pond-1 - train/learning_rate": 0.00001454448791146522,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001454448791146522,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001454448791146522
    },
    {
      "Step": 397,
      "brisk-pond-1 - train/learning_rate": 0.000014517512364229426,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014517512364229426,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014517512364229426
    },
    {
      "Step": 398,
      "brisk-pond-1 - train/learning_rate": 0.000014490495451642539,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014490495451642539,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014490495451642539
    },
    {
      "Step": 399,
      "brisk-pond-1 - train/learning_rate": 0.000014463437421089403,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014463437421089403,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014463437421089403
    },
    {
      "Step": 400,
      "brisk-pond-1 - train/learning_rate": 0.000014436338520331355,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014436338520331355,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014436338520331355
    },
    {
      "Step": 402,
      "brisk-pond-1 - train/learning_rate": 0.000014409198997503982,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014409198997503982,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014409198997503982
    },
    {
      "Step": 403,
      "brisk-pond-1 - train/learning_rate": 0.000014382019101114815,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014382019101114815,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014382019101114815
    },
    {
      "Step": 404,
      "brisk-pond-1 - train/learning_rate": 0.000014354799080041092,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014354799080041092,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014354799080041092
    },
    {
      "Step": 405,
      "brisk-pond-1 - train/learning_rate": 0.000014327539183527447,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014327539183527447,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014327539183527447
    },
    {
      "Step": 406,
      "brisk-pond-1 - train/learning_rate": 0.00001430023966118364,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001430023966118364,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001430023966118364
    },
    {
      "Step": 407,
      "brisk-pond-1 - train/learning_rate": 0.000014272900762982276,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014272900762982276,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014272900762982276
    },
    {
      "Step": 408,
      "brisk-pond-1 - train/learning_rate": 0.000014245522739256512,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014245522739256512,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014245522739256512
    },
    {
      "Step": 409,
      "brisk-pond-1 - train/learning_rate": 0.00001421810584069776,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001421810584069776,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001421810584069776
    },
    {
      "Step": 410,
      "brisk-pond-1 - train/learning_rate": 0.000014190650318353396,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014190650318353396,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014190650318353396
    },
    {
      "Step": 411,
      "brisk-pond-1 - train/learning_rate": 0.000014163156423624468,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014163156423624468,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014163156423624468
    },
    {
      "Step": 412,
      "brisk-pond-1 - train/learning_rate": 0.00001413562440826338,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001413562440826338,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001413562440826338
    },
    {
      "Step": 413,
      "brisk-pond-1 - train/learning_rate": 0.000014108054524371598,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014108054524371598,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014108054524371598
    },
    {
      "Step": 414,
      "brisk-pond-1 - train/learning_rate": 0.000014080447024397332,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014080447024397332,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014080447024397332
    },
    {
      "Step": 415,
      "brisk-pond-1 - train/learning_rate": 0.000014052802161133237,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014052802161133237,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014052802161133237
    },
    {
      "Step": 416,
      "brisk-pond-1 - train/learning_rate": 0.000014025120187714087,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000014025120187714087,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000014025120187714087
    },
    {
      "Step": 417,
      "brisk-pond-1 - train/learning_rate": 0.000013997401357614461,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013997401357614461,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013997401357614461
    },
    {
      "Step": 418,
      "brisk-pond-1 - train/learning_rate": 0.000013969645924646424,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013969645924646424,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013969645924646424
    },
    {
      "Step": 419,
      "brisk-pond-1 - train/learning_rate": 0.0000139418541429572,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000139418541429572,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000139418541429572
    },
    {
      "Step": 420,
      "brisk-pond-1 - train/learning_rate": 0.000013914026267026847,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013914026267026847,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013914026267026847
    },
    {
      "Step": 421,
      "brisk-pond-1 - train/learning_rate": 0.000013886162551665925,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013886162551665925,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013886162551665925
    },
    {
      "Step": 422,
      "brisk-pond-1 - train/learning_rate": 0.000013858263252013169,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013858263252013169,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013858263252013169
    },
    {
      "Step": 423,
      "brisk-pond-1 - train/learning_rate": 0.000013830328623533133,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013830328623533133,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013830328623533133
    },
    {
      "Step": 424,
      "brisk-pond-1 - train/learning_rate": 0.000013802358922013888,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013802358922013888,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013802358922013888
    },
    {
      "Step": 425,
      "brisk-pond-1 - train/learning_rate": 0.000013774354403564632,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013774354403564632,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013774354403564632
    },
    {
      "Step": 426,
      "brisk-pond-1 - train/learning_rate": 0.000013746315324613388,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013746315324613388,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013746315324613388
    },
    {
      "Step": 427,
      "brisk-pond-1 - train/learning_rate": 0.000013718241941904631,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013718241941904631,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013718241941904631
    },
    {
      "Step": 428,
      "brisk-pond-1 - train/learning_rate": 0.000013690134512496943,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013690134512496943,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013690134512496943
    },
    {
      "Step": 429,
      "brisk-pond-1 - train/learning_rate": 0.000013661993293760669,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013661993293760669,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013661993293760669
    },
    {
      "Step": 430,
      "brisk-pond-1 - train/learning_rate": 0.00001363381854337554,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001363381854337554,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001363381854337554
    },
    {
      "Step": 431,
      "brisk-pond-1 - train/learning_rate": 0.000013605610519328329,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013605610519328329,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013605610519328329
    },
    {
      "Step": 432,
      "brisk-pond-1 - train/learning_rate": 0.000013577369479910487,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013577369479910487,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013577369479910487
    },
    {
      "Step": 433,
      "brisk-pond-1 - train/learning_rate": 0.000013549095683715776,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013549095683715776,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013549095683715776
    },
    {
      "Step": 434,
      "brisk-pond-1 - train/learning_rate": 0.000013520789389637898,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013520789389637898,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013520789389637898
    },
    {
      "Step": 435,
      "brisk-pond-1 - train/learning_rate": 0.000013492450856868131,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013492450856868131,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013492450856868131
    },
    {
      "Step": 436,
      "brisk-pond-1 - train/learning_rate": 0.000013464080344892947,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013464080344892947,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013464080344892947
    },
    {
      "Step": 437,
      "brisk-pond-1 - train/learning_rate": 0.000013435678113491641,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013435678113491641,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013435678113491641
    },
    {
      "Step": 438,
      "brisk-pond-1 - train/learning_rate": 0.000013407244422733962,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013407244422733962,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013407244422733962
    },
    {
      "Step": 439,
      "brisk-pond-1 - train/learning_rate": 0.000013384474994342054,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013384474994342054,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013384474994342054
    },
    {
      "Step": 440,
      "brisk-pond-1 - train/learning_rate": 0.00001335598533303662,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001335598533303662,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001335598533303662
    },
    {
      "Step": 441,
      "brisk-pond-1 - train/learning_rate": 0.000013327464942094968,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013327464942094968,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013327464942094968
    },
    {
      "Step": 442,
      "brisk-pond-1 - train/learning_rate": 0.000013298914082668785,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013298914082668785,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013298914082668785
    },
    {
      "Step": 443,
      "brisk-pond-1 - train/learning_rate": 0.000013270333016188757,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013270333016188757,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013270333016188757
    },
    {
      "Step": 444,
      "brisk-pond-1 - train/learning_rate": 0.000013241722004362153,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013241722004362153,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013241722004362153
    },
    {
      "Step": 445,
      "brisk-pond-1 - train/learning_rate": 0.000013213081309170446,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013213081309170446,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013213081309170446
    },
    {
      "Step": 446,
      "brisk-pond-1 - train/learning_rate": 0.000013184411192866916,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013184411192866916,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013184411192866916
    },
    {
      "Step": 447,
      "brisk-pond-1 - train/learning_rate": 0.000013155711917974234,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013155711917974234,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013155711917974234
    },
    {
      "Step": 448,
      "brisk-pond-1 - train/learning_rate": 0.00001312698374728207,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001312698374728207,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001312698374728207
    },
    {
      "Step": 449,
      "brisk-pond-1 - train/learning_rate": 0.000013098226943844684,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013098226943844684,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013098226943844684
    },
    {
      "Step": 450,
      "brisk-pond-1 - train/learning_rate": 0.000013069441770978512,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013069441770978512,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013069441770978512
    },
    {
      "Step": 451,
      "brisk-pond-1 - train/learning_rate": 0.00001304062849225977,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001304062849225977,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001304062849225977
    },
    {
      "Step": 452,
      "brisk-pond-1 - train/learning_rate": 0.000013011787371522016,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000013011787371522016,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000013011787371522016
    },
    {
      "Step": 453,
      "brisk-pond-1 - train/learning_rate": 0.000012982918672853757,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012982918672853757,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012982918672853757
    },
    {
      "Step": 454,
      "brisk-pond-1 - train/learning_rate": 0.000012954022660596022,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012954022660596022,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012954022660596022
    },
    {
      "Step": 455,
      "brisk-pond-1 - train/learning_rate": 0.000012925099599339932,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012925099599339932,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012925099599339932
    },
    {
      "Step": 456,
      "brisk-pond-1 - train/learning_rate": 0.000012896149753924301,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012896149753924301,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012896149753924301
    },
    {
      "Step": 457,
      "brisk-pond-1 - train/learning_rate": 0.000012867173389433183,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012867173389433183,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012867173389433183
    },
    {
      "Step": 458,
      "brisk-pond-1 - train/learning_rate": 0.000012838170771193468,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012838170771193468,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012838170771193468
    },
    {
      "Step": 459,
      "brisk-pond-1 - train/learning_rate": 0.000012809142164772439,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012809142164772439,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012809142164772439
    },
    {
      "Step": 460,
      "brisk-pond-1 - train/learning_rate": 0.000012780087835975348,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012780087835975348,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012780087835975348
    },
    {
      "Step": 461,
      "brisk-pond-1 - train/learning_rate": 0.000012751008050842969,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012751008050842969,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012751008050842969
    },
    {
      "Step": 462,
      "brisk-pond-1 - train/learning_rate": 0.00001272190307564918,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001272190307564918,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001272190307564918
    },
    {
      "Step": 463,
      "brisk-pond-1 - train/learning_rate": 0.00001269277317689851,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001269277317689851,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001269277317689851
    },
    {
      "Step": 464,
      "brisk-pond-1 - train/learning_rate": 0.000012663618621323713,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012663618621323713,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012663618621323713
    },
    {
      "Step": 465,
      "brisk-pond-1 - train/learning_rate": 0.000012634439675883303,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012634439675883303,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012634439675883303
    },
    {
      "Step": 466,
      "brisk-pond-1 - train/learning_rate": 0.00001260523660775914,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001260523660775914,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001260523660775914
    },
    {
      "Step": 467,
      "brisk-pond-1 - train/learning_rate": 0.000012576009684353955,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012576009684353955,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012576009684353955
    },
    {
      "Step": 468,
      "brisk-pond-1 - train/learning_rate": 0.000012546759173288925,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012546759173288925,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012546759173288925
    },
    {
      "Step": 469,
      "brisk-pond-1 - train/learning_rate": 0.000012517485342401201,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012517485342401201,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012517485342401201
    },
    {
      "Step": 470,
      "brisk-pond-1 - train/learning_rate": 0.000012488188459741468,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012488188459741468,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012488188459741468
    },
    {
      "Step": 471,
      "brisk-pond-1 - train/learning_rate": 0.000012458868793571497,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012458868793571497,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012458868793571497
    },
    {
      "Step": 472,
      "brisk-pond-1 - train/learning_rate": 0.000012429526612361664,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012429526612361664,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012429526612361664
    },
    {
      "Step": 473,
      "brisk-pond-1 - train/learning_rate": 0.000012400162184788526,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012400162184788526,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012400162184788526
    },
    {
      "Step": 474,
      "brisk-pond-1 - train/learning_rate": 0.000012370775779732327,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012370775779732327,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012370775779732327
    },
    {
      "Step": 475,
      "brisk-pond-1 - train/learning_rate": 0.00001234136766627456,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001234136766627456,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001234136766627456
    },
    {
      "Step": 476,
      "brisk-pond-1 - train/learning_rate": 0.000012311938113695495,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012311938113695495,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012311938113695495
    },
    {
      "Step": 477,
      "brisk-pond-1 - train/learning_rate": 0.000012282487391471707,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012282487391471707,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012282487391471707
    },
    {
      "Step": 478,
      "brisk-pond-1 - train/learning_rate": 0.000012253015769273619,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012253015769273619,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012253015769273619
    },
    {
      "Step": 479,
      "brisk-pond-1 - train/learning_rate": 0.000012223523516963027,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012223523516963027,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012223523516963027
    },
    {
      "Step": 480,
      "brisk-pond-1 - train/learning_rate": 0.000012194010904590635,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012194010904590635,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012194010904590635
    },
    {
      "Step": 481,
      "brisk-pond-1 - train/learning_rate": 0.00001216447820239356,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001216447820239356,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001216447820239356
    },
    {
      "Step": 482,
      "brisk-pond-1 - train/learning_rate": 0.000012134925680792897,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012134925680792897,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012134925680792897
    },
    {
      "Step": 483,
      "brisk-pond-1 - train/learning_rate": 0.00001210535361039121,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001210535361039121,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001210535361039121
    },
    {
      "Step": 484,
      "brisk-pond-1 - train/learning_rate": 0.000012075762261970062,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012075762261970062,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012075762261970062
    },
    {
      "Step": 485,
      "brisk-pond-1 - train/learning_rate": 0.000012046151906487543,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012046151906487543,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012046151906487543
    },
    {
      "Step": 486,
      "brisk-pond-1 - train/learning_rate": 0.000012016522815075781,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000012016522815075781,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000012016522815075781
    },
    {
      "Step": 487,
      "brisk-pond-1 - train/learning_rate": 0.000011986875259038473,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011986875259038473,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011986875259038473
    },
    {
      "Step": 488,
      "brisk-pond-1 - train/learning_rate": 0.000011957209509848373,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011957209509848373,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011957209509848373
    },
    {
      "Step": 489,
      "brisk-pond-1 - train/learning_rate": 0.000011927525839144838,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011927525839144838,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011927525839144838
    },
    {
      "Step": 490,
      "brisk-pond-1 - train/learning_rate": 0.000011897824518731314,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011897824518731314,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011897824518731314
    },
    {
      "Step": 491,
      "brisk-pond-1 - train/learning_rate": 0.000011868105820572877,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011868105820572877,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011868105820572877
    },
    {
      "Step": 492,
      "brisk-pond-1 - train/learning_rate": 0.00001183837001679371,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001183837001679371,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001183837001679371
    },
    {
      "Step": 493,
      "brisk-pond-1 - train/learning_rate": 0.000011808617379674633,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011808617379674633,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011808617379674633
    },
    {
      "Step": 494,
      "brisk-pond-1 - train/learning_rate": 0.000011778848181650597,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011778848181650597,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011778848181650597
    },
    {
      "Step": 495,
      "brisk-pond-1 - train/learning_rate": 0.000011749062695308206,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011749062695308206,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011749062695308206
    },
    {
      "Step": 496,
      "brisk-pond-1 - train/learning_rate": 0.0000117192611933832,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000117192611933832,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000117192611933832
    },
    {
      "Step": 497,
      "brisk-pond-1 - train/learning_rate": 0.000011689443948757977,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011689443948757977,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011689443948757977
    },
    {
      "Step": 498,
      "brisk-pond-1 - train/learning_rate": 0.00001165961123445908,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001165961123445908,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001165961123445908
    },
    {
      "Step": 499,
      "brisk-pond-1 - train/learning_rate": 0.000011629763323654703,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011629763323654703,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011629763323654703
    },
    {
      "Step": 500,
      "brisk-pond-1 - train/learning_rate": 0.000011599900489652199,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011599900489652199,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011599900489652199
    },
    {
      "Step": 501,
      "brisk-pond-1 - train/learning_rate": 0.000011570023005895548,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011570023005895548,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011570023005895548
    },
    {
      "Step": 502,
      "brisk-pond-1 - train/learning_rate": 0.000011540131145962892,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011540131145962892,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011540131145962892
    },
    {
      "Step": 503,
      "brisk-pond-1 - train/learning_rate": 0.000011510225183564002,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011510225183564002,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011510225183564002
    },
    {
      "Step": 504,
      "brisk-pond-1 - train/learning_rate": 0.000011480305392537781,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011480305392537781,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011480305392537781
    },
    {
      "Step": 505,
      "brisk-pond-1 - train/learning_rate": 0.000011450372046849756,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011450372046849756,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011450372046849756
    },
    {
      "Step": 506,
      "brisk-pond-1 - train/learning_rate": 0.000011420425420589577,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011420425420589577,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011420425420589577
    },
    {
      "Step": 507,
      "brisk-pond-1 - train/learning_rate": 0.000011390465787968484,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011390465787968484,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011390465787968484
    },
    {
      "Step": 508,
      "brisk-pond-1 - train/learning_rate": 0.000011360493423316823,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011360493423316823,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011360493423316823
    },
    {
      "Step": 509,
      "brisk-pond-1 - train/learning_rate": 0.00001133050860108153,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001133050860108153,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001133050860108153
    },
    {
      "Step": 510,
      "brisk-pond-1 - train/learning_rate": 0.000011300511595823592,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011300511595823592,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011300511595823592
    },
    {
      "Step": 511,
      "brisk-pond-1 - train/learning_rate": 0.000011270502682215567,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011270502682215567,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011270502682215567
    },
    {
      "Step": 512,
      "brisk-pond-1 - train/learning_rate": 0.000011240482135039049,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011240482135039049,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011240482135039049
    },
    {
      "Step": 513,
      "brisk-pond-1 - train/learning_rate": 0.000011210450229182156,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011210450229182156,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011210450229182156
    },
    {
      "Step": 514,
      "brisk-pond-1 - train/learning_rate": 0.00001118040723963701,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001118040723963701,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001118040723963701
    },
    {
      "Step": 515,
      "brisk-pond-1 - train/learning_rate": 0.00001115035344149723,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001115035344149723,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001115035344149723
    },
    {
      "Step": 516,
      "brisk-pond-1 - train/learning_rate": 0.000011120289109955403,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011120289109955403,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011120289109955403
    },
    {
      "Step": 517,
      "brisk-pond-1 - train/learning_rate": 0.000011090214520300567,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011090214520300567,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011090214520300567
    },
    {
      "Step": 518,
      "brisk-pond-1 - train/learning_rate": 0.00001106012994791569,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001106012994791569,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001106012994791569
    },
    {
      "Step": 519,
      "brisk-pond-1 - train/learning_rate": 0.000011030035668275141,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000011030035668275141,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000011030035668275141
    },
    {
      "Step": 520,
      "brisk-pond-1 - train/learning_rate": 0.000010999931956942192,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010999931956942192,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010999931956942192
    },
    {
      "Step": 521,
      "brisk-pond-1 - train/learning_rate": 0.000010969819089566458,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010969819089566458,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010969819089566458
    },
    {
      "Step": 522,
      "brisk-pond-1 - train/learning_rate": 0.00001093969734188141,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001093969734188141,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001093969734188141
    },
    {
      "Step": 523,
      "brisk-pond-1 - train/learning_rate": 0.00001090956698970182,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001090956698970182,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001090956698970182
    },
    {
      "Step": 524,
      "brisk-pond-1 - train/learning_rate": 0.000010879428308921262,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010879428308921262,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010879428308921262
    },
    {
      "Step": 525,
      "brisk-pond-1 - train/learning_rate": 0.000010849281575509556,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010849281575509556,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010849281575509556
    },
    {
      "Step": 526,
      "brisk-pond-1 - train/learning_rate": 0.000010819127065510274,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010819127065510274,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010819127065510274
    },
    {
      "Step": 527,
      "brisk-pond-1 - train/learning_rate": 0.000010788965055038179,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010788965055038179,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010788965055038179
    },
    {
      "Step": 528,
      "brisk-pond-1 - train/learning_rate": 0.000010758795820276726,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010758795820276726,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010758795820276726
    },
    {
      "Step": 529,
      "brisk-pond-1 - train/learning_rate": 0.000010728619637475515,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010728619637475515,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010728619637475515
    },
    {
      "Step": 530,
      "brisk-pond-1 - train/learning_rate": 0.00001069843678294777,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001069843678294777,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001069843678294777
    },
    {
      "Step": 531,
      "brisk-pond-1 - train/learning_rate": 0.0000106682475330678,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000106682475330678,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000106682475330678
    },
    {
      "Step": 532,
      "brisk-pond-1 - train/learning_rate": 0.000010638052164268477,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010638052164268477,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010638052164268477
    },
    {
      "Step": 533,
      "brisk-pond-1 - train/learning_rate": 0.00001060785095303871,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001060785095303871,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001060785095303871
    },
    {
      "Step": 534,
      "brisk-pond-1 - train/learning_rate": 0.000010577644175920892,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010577644175920892,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010577644175920892
    },
    {
      "Step": 535,
      "brisk-pond-1 - train/learning_rate": 0.000010547432109508386,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010547432109508386,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010547432109508386
    },
    {
      "Step": 536,
      "brisk-pond-1 - train/learning_rate": 0.000010517215030442988,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010517215030442988,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010517215030442988
    },
    {
      "Step": 537,
      "brisk-pond-1 - train/learning_rate": 0.0000104869932154124,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000104869932154124,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000104869932154124
    },
    {
      "Step": 538,
      "brisk-pond-1 - train/learning_rate": 0.000010456766941147676,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010456766941147676,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010456766941147676
    },
    {
      "Step": 539,
      "brisk-pond-1 - train/learning_rate": 0.00001042653648442071,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001042653648442071,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001042653648442071
    },
    {
      "Step": 540,
      "brisk-pond-1 - train/learning_rate": 0.000010396302122041692,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010396302122041692,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010396302122041692
    },
    {
      "Step": 541,
      "brisk-pond-1 - train/learning_rate": 0.000010366064130856577,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010366064130856577,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010366064130856577
    },
    {
      "Step": 542,
      "brisk-pond-1 - train/learning_rate": 0.000010335822787744544,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010335822787744544,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010335822787744544
    },
    {
      "Step": 543,
      "brisk-pond-1 - train/learning_rate": 0.000010305578369615468,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010305578369615468,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010305578369615468
    },
    {
      "Step": 544,
      "brisk-pond-1 - train/learning_rate": 0.000010275331153407375,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010275331153407375,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010275331153407375
    },
    {
      "Step": 545,
      "brisk-pond-1 - train/learning_rate": 0.00001024508141608392,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00001024508141608392,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00001024508141608392
    },
    {
      "Step": 546,
      "brisk-pond-1 - train/learning_rate": 0.000010214829434631836,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010214829434631836,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010214829434631836
    },
    {
      "Step": 547,
      "brisk-pond-1 - train/learning_rate": 0.000010184575486058407,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010184575486058407,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010184575486058407
    },
    {
      "Step": 548,
      "brisk-pond-1 - train/learning_rate": 0.000010154319847388936,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010154319847388936,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010154319847388936
    },
    {
      "Step": 549,
      "brisk-pond-1 - train/learning_rate": 0.000010124062795664192,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010124062795664192,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010124062795664192
    },
    {
      "Step": 550,
      "brisk-pond-1 - train/learning_rate": 0.000010093804607937883,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010093804607937883,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010093804607937883
    },
    {
      "Step": 551,
      "brisk-pond-1 - train/learning_rate": 0.000010063545561274129,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010063545561274129,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010063545561274129
    },
    {
      "Step": 552,
      "brisk-pond-1 - train/learning_rate": 0.000010033285932744902,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010033285932744902,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010033285932744902
    },
    {
      "Step": 553,
      "brisk-pond-1 - train/learning_rate": 0.000010003025999427518,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000010003025999427518,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000010003025999427518
    },
    {
      "Step": 554,
      "brisk-pond-1 - train/learning_rate": 0.00000997276603840206,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000997276603840206,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000997276603840206
    },
    {
      "Step": 555,
      "brisk-pond-1 - train/learning_rate": 0.000009942506326748894,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009942506326748894,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009942506326748894
    },
    {
      "Step": 556,
      "brisk-pond-1 - train/learning_rate": 0.00000991224714154608,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000991224714154608,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000991224714154608
    },
    {
      "Step": 557,
      "brisk-pond-1 - train/learning_rate": 0.000009881988759866867,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009881988759866867,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009881988759866867
    },
    {
      "Step": 558,
      "brisk-pond-1 - train/learning_rate": 0.000009851731458777141,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009851731458777141,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009851731458777141
    },
    {
      "Step": 559,
      "brisk-pond-1 - train/learning_rate": 0.000009821475515332903,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009821475515332903,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009821475515332903
    },
    {
      "Step": 560,
      "brisk-pond-1 - train/learning_rate": 0.000009791221206577712,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009791221206577712,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009791221206577712
    },
    {
      "Step": 561,
      "brisk-pond-1 - train/learning_rate": 0.000009760968809540165,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009760968809540165,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009760968809540165
    },
    {
      "Step": 562,
      "brisk-pond-1 - train/learning_rate": 0.00000973071860123135,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000973071860123135,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000973071860123135
    },
    {
      "Step": 563,
      "brisk-pond-1 - train/learning_rate": 0.000009700470858642317,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009700470858642317,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009700470858642317
    },
    {
      "Step": 564,
      "brisk-pond-1 - train/learning_rate": 0.000009670225858741539,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009670225858741539,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009670225858741539
    },
    {
      "Step": 565,
      "brisk-pond-1 - train/learning_rate": 0.000009639983878472368,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009639983878472368,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009639983878472368
    },
    {
      "Step": 566,
      "brisk-pond-1 - train/learning_rate": 0.000009609745194750519,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009609745194750519,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009609745194750519
    },
    {
      "Step": 567,
      "brisk-pond-1 - train/learning_rate": 0.000009579510084461505,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009579510084461505,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009579510084461505
    },
    {
      "Step": 568,
      "brisk-pond-1 - train/learning_rate": 0.00000954927882445813,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000954927882445813,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000954927882445813
    },
    {
      "Step": 569,
      "brisk-pond-1 - train/learning_rate": 0.000009519051691557945,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009519051691557945,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009519051691557945
    },
    {
      "Step": 570,
      "brisk-pond-1 - train/learning_rate": 0.000009488828962540699,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009488828962540699,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009488828962540699
    },
    {
      "Step": 571,
      "brisk-pond-1 - train/learning_rate": 0.000009458610914145826,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009458610914145826,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009458610914145826
    },
    {
      "Step": 572,
      "brisk-pond-1 - train/learning_rate": 0.000009428397823069892,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009428397823069892,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009428397823069892
    },
    {
      "Step": 573,
      "brisk-pond-1 - train/learning_rate": 0.000009398189965964082,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009398189965964082,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009398189965964082
    },
    {
      "Step": 574,
      "brisk-pond-1 - train/learning_rate": 0.000009367987619431642,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009367987619431642,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009367987619431642
    },
    {
      "Step": 575,
      "brisk-pond-1 - train/learning_rate": 0.000009337791060025374,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009337791060025374,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009337791060025374
    },
    {
      "Step": 576,
      "brisk-pond-1 - train/learning_rate": 0.000009307600564245074,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009307600564245074,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009307600564245074
    },
    {
      "Step": 577,
      "brisk-pond-1 - train/learning_rate": 0.000009277416408535028,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009277416408535028,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009277416408535028
    },
    {
      "Step": 578,
      "brisk-pond-1 - train/learning_rate": 0.000009247238869281461,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009247238869281461,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009247238869281461
    },
    {
      "Step": 579,
      "brisk-pond-1 - train/learning_rate": 0.000009217068222810017,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009217068222810017,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009217068222810017
    },
    {
      "Step": 580,
      "brisk-pond-1 - train/learning_rate": 0.000009186904745383221,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009186904745383221,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009186904745383221
    },
    {
      "Step": 581,
      "brisk-pond-1 - train/learning_rate": 0.00000915674871319796,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000915674871319796,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000915674871319796
    },
    {
      "Step": 582,
      "brisk-pond-1 - train/learning_rate": 0.000009126600402382939,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009126600402382939,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009126600402382939
    },
    {
      "Step": 583,
      "brisk-pond-1 - train/learning_rate": 0.000009096460088996168,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009096460088996168,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009096460088996168
    },
    {
      "Step": 584,
      "brisk-pond-1 - train/learning_rate": 0.000009066328049022423,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009066328049022423,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009066328049022423
    },
    {
      "Step": 585,
      "brisk-pond-1 - train/learning_rate": 0.000009036204558370725,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009036204558370725,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009036204558370725
    },
    {
      "Step": 586,
      "brisk-pond-1 - train/learning_rate": 0.000009006089892871816,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000009006089892871816,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000009006089892871816
    },
    {
      "Step": 587,
      "brisk-pond-1 - train/learning_rate": 0.000008975984328275618,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008975984328275618,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008975984328275618
    },
    {
      "Step": 588,
      "brisk-pond-1 - train/learning_rate": 0.000008945888140248731,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008945888140248731,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008945888140248731
    },
    {
      "Step": 589,
      "brisk-pond-1 - train/learning_rate": 0.000008915801604371887,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008915801604371887,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008915801604371887
    },
    {
      "Step": 590,
      "brisk-pond-1 - train/learning_rate": 0.000008885724996137444,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008885724996137444,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008885724996137444
    },
    {
      "Step": 591,
      "brisk-pond-1 - train/learning_rate": 0.00000885565859094685,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000885565859094685,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000885565859094685
    },
    {
      "Step": 592,
      "brisk-pond-1 - train/learning_rate": 0.000008825602664108133,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008825602664108133,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008825602664108133
    },
    {
      "Step": 593,
      "brisk-pond-1 - train/learning_rate": 0.000008795557490833367,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008795557490833367,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008795557490833367
    },
    {
      "Step": 594,
      "brisk-pond-1 - train/learning_rate": 0.00000876552334623617,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000876552334623617,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000876552334623617
    },
    {
      "Step": 595,
      "brisk-pond-1 - train/learning_rate": 0.000008735500505329163,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008735500505329163,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008735500505329163
    },
    {
      "Step": 596,
      "brisk-pond-1 - train/learning_rate": 0.000008705489243021465,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008705489243021465,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008705489243021465
    },
    {
      "Step": 597,
      "brisk-pond-1 - train/learning_rate": 0.000008675489834116183,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008675489834116183,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008675489834116183
    },
    {
      "Step": 598,
      "brisk-pond-1 - train/learning_rate": 0.000008645502553307874,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008645502553307874,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008645502553307874
    },
    {
      "Step": 599,
      "brisk-pond-1 - train/learning_rate": 0.000008615527675180048,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008615527675180048,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008615527675180048
    },
    {
      "Step": 600,
      "brisk-pond-1 - train/learning_rate": 0.000008585565474202648,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008585565474202648,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008585565474202648
    },
    {
      "Step": 601,
      "brisk-pond-1 - train/learning_rate": 0.000008555616224729532,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008555616224729532,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008555616224729532
    },
    {
      "Step": 603,
      "brisk-pond-1 - train/learning_rate": 0.00000852568020099598,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000852568020099598,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000852568020099598
    },
    {
      "Step": 604,
      "brisk-pond-1 - train/learning_rate": 0.000008495757677116146,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008495757677116146,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008495757677116146
    },
    {
      "Step": 605,
      "brisk-pond-1 - train/learning_rate": 0.00000846584892708059,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000846584892708059,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000846584892708059
    },
    {
      "Step": 606,
      "brisk-pond-1 - train/learning_rate": 0.000008435954224753738,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008435954224753738,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008435954224753738
    },
    {
      "Step": 607,
      "brisk-pond-1 - train/learning_rate": 0.000008406073843871388,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008406073843871388,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008406073843871388
    },
    {
      "Step": 608,
      "brisk-pond-1 - train/learning_rate": 0.000008376208058038203,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008376208058038203,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008376208058038203
    },
    {
      "Step": 609,
      "brisk-pond-1 - train/learning_rate": 0.000008346357140725206,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008346357140725206,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008346357140725206
    },
    {
      "Step": 610,
      "brisk-pond-1 - train/learning_rate": 0.00000831652136526727,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000831652136526727,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000831652136526727
    },
    {
      "Step": 611,
      "brisk-pond-1 - train/learning_rate": 0.00000828670100486062,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000828670100486062,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000828670100486062
    },
    {
      "Step": 612,
      "brisk-pond-1 - train/learning_rate": 0.000008256896332560329,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008256896332560329,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008256896332560329
    },
    {
      "Step": 613,
      "brisk-pond-1 - train/learning_rate": 0.000008227107621277828,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008227107621277828,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008227107621277828
    },
    {
      "Step": 614,
      "brisk-pond-1 - train/learning_rate": 0.000008197335143778384,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008197335143778384,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008197335143778384
    },
    {
      "Step": 615,
      "brisk-pond-1 - train/learning_rate": 0.00000816757917267863,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000816757917267863,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000816757917267863
    },
    {
      "Step": 616,
      "brisk-pond-1 - train/learning_rate": 0.000008137839980444047,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008137839980444047,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008137839980444047
    },
    {
      "Step": 617,
      "brisk-pond-1 - train/learning_rate": 0.000008108117839386482,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008108117839386482,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008108117839386482
    },
    {
      "Step": 618,
      "brisk-pond-1 - train/learning_rate": 0.000008078413021661644,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008078413021661644,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008078413021661644
    },
    {
      "Step": 619,
      "brisk-pond-1 - train/learning_rate": 0.000008048725799266625,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008048725799266625,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008048725799266625
    },
    {
      "Step": 620,
      "brisk-pond-1 - train/learning_rate": 0.000008019056444037402,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000008019056444037402,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000008019056444037402
    },
    {
      "Step": 621,
      "brisk-pond-1 - train/learning_rate": 0.000007995334006782793,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007995334006782793,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007995334006782793
    },
    {
      "Step": 622,
      "brisk-pond-1 - train/learning_rate": 0.000007965697496954846,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007965697496954846,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007965697496954846
    },
    {
      "Step": 623,
      "brisk-pond-1 - train/learning_rate": 0.000007936079614555113,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007936079614555113,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007936079614555113
    },
    {
      "Step": 624,
      "brisk-pond-1 - train/learning_rate": 0.000007906480630784643,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007906480630784643,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007906480630784643
    },
    {
      "Step": 625,
      "brisk-pond-1 - train/learning_rate": 0.000007876900816671443,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007876900816671443,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007876900816671443
    },
    {
      "Step": 626,
      "brisk-pond-1 - train/learning_rate": 0.00000784734044306798,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000784734044306798,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000784734044306798
    },
    {
      "Step": 627,
      "brisk-pond-1 - train/learning_rate": 0.000007817799780648726,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007817799780648726,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007817799780648726
    },
    {
      "Step": 628,
      "brisk-pond-1 - train/learning_rate": 0.000007788279099907647,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007788279099907647,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007788279099907647
    },
    {
      "Step": 629,
      "brisk-pond-1 - train/learning_rate": 0.000007758778671155755,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007758778671155755,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007758778671155755
    },
    {
      "Step": 630,
      "brisk-pond-1 - train/learning_rate": 0.000007729298764518616,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007729298764518616,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007729298764518616
    },
    {
      "Step": 631,
      "brisk-pond-1 - train/learning_rate": 0.000007699839649933887,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007699839649933887,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007699839649933887
    },
    {
      "Step": 632,
      "brisk-pond-1 - train/learning_rate": 0.00000767040159714883,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000767040159714883,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000767040159714883
    },
    {
      "Step": 633,
      "brisk-pond-1 - train/learning_rate": 0.000007640984875717862,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007640984875717862,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007640984875717862
    },
    {
      "Step": 634,
      "brisk-pond-1 - train/learning_rate": 0.000007611589755000073,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007611589755000073,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007611589755000073
    },
    {
      "Step": 635,
      "brisk-pond-1 - train/learning_rate": 0.000007582216504156753,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007582216504156753,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007582216504156753
    },
    {
      "Step": 636,
      "brisk-pond-1 - train/learning_rate": 0.0000075528653921489516,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000075528653921489516,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000075528653921489516
    },
    {
      "Step": 637,
      "brisk-pond-1 - train/learning_rate": 0.000007523536687734988,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007523536687734988,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007523536687734988
    },
    {
      "Step": 638,
      "brisk-pond-1 - train/learning_rate": 0.000007494230659468012,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007494230659468012,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007494230659468012
    },
    {
      "Step": 639,
      "brisk-pond-1 - train/learning_rate": 0.000007464947575693524,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007464947575693524,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007464947575693524
    },
    {
      "Step": 640,
      "brisk-pond-1 - train/learning_rate": 0.000007435687704546945,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007435687704546945,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007435687704546945
    },
    {
      "Step": 641,
      "brisk-pond-1 - train/learning_rate": 0.000007406451313951133,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007406451313951133,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007406451313951133
    },
    {
      "Step": 642,
      "brisk-pond-1 - train/learning_rate": 0.000007377238671613947,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007377238671613947,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007377238671613947
    },
    {
      "Step": 643,
      "brisk-pond-1 - train/learning_rate": 0.0000073480500450257896,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000073480500450257896,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000073480500450257896
    },
    {
      "Step": 644,
      "brisk-pond-1 - train/learning_rate": 0.000007318885701457163,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007318885701457163,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007318885701457163
    },
    {
      "Step": 645,
      "brisk-pond-1 - train/learning_rate": 0.000007289745907956216,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007289745907956216,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007289745907956216
    },
    {
      "Step": 646,
      "brisk-pond-1 - train/learning_rate": 0.000007260630931346295,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007260630931346295,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007260630931346295
    },
    {
      "Step": 647,
      "brisk-pond-1 - train/learning_rate": 0.000007231541038223516,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007231541038223516,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007231541038223516
    },
    {
      "Step": 648,
      "brisk-pond-1 - train/learning_rate": 0.000007202476494954304,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007202476494954304,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007202476494954304
    },
    {
      "Step": 649,
      "brisk-pond-1 - train/learning_rate": 0.000007173437567672976,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007173437567672976,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007173437567672976
    },
    {
      "Step": 650,
      "brisk-pond-1 - train/learning_rate": 0.000007144424522279283,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007144424522279283,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007144424522279283
    },
    {
      "Step": 651,
      "brisk-pond-1 - train/learning_rate": 0.000007115437624435984,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007115437624435984,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007115437624435984
    },
    {
      "Step": 652,
      "brisk-pond-1 - train/learning_rate": 0.0000070864771395664186,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000070864771395664186,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000070864771395664186
    },
    {
      "Step": 653,
      "brisk-pond-1 - train/learning_rate": 0.000007057543332852067,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000007057543332852067,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000007057543332852067
    },
    {
      "Step": 654,
      "brisk-pond-1 - train/learning_rate": 0.00000702863646923013,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000702863646923013,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000702863646923013
    },
    {
      "Step": 655,
      "brisk-pond-1 - train/learning_rate": 0.0000069997568133910965,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000069997568133910965,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000069997568133910965
    },
    {
      "Step": 656,
      "brisk-pond-1 - train/learning_rate": 0.000006970904629776325,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006970904629776325,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006970904629776325
    },
    {
      "Step": 657,
      "brisk-pond-1 - train/learning_rate": 0.000006942080182575618,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006942080182575618,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006942080182575618
    },
    {
      "Step": 658,
      "brisk-pond-1 - train/learning_rate": 0.000006913283735724808,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006913283735724808,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006913283735724808
    },
    {
      "Step": 659,
      "brisk-pond-1 - train/learning_rate": 0.000006884515552903335,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006884515552903335,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006884515552903335
    },
    {
      "Step": 660,
      "brisk-pond-1 - train/learning_rate": 0.000006855775897531836,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006855775897531836,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006855775897531836
    },
    {
      "Step": 661,
      "brisk-pond-1 - train/learning_rate": 0.000006827065032769729,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006827065032769729,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006827065032769729
    },
    {
      "Step": 662,
      "brisk-pond-1 - train/learning_rate": 0.000006798383221512812,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006798383221512812,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006798383221512812
    },
    {
      "Step": 663,
      "brisk-pond-1 - train/learning_rate": 0.000006775458867527212,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006775458867527212,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006775458867527212
    },
    {
      "Step": 664,
      "brisk-pond-1 - train/learning_rate": 0.000006746830014226319,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006746830014226319,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006746830014226319
    },
    {
      "Step": 665,
      "brisk-pond-1 - train/learning_rate": 0.000006718230949115869,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006718230949115869,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006718230949115869
    },
    {
      "Step": 666,
      "brisk-pond-1 - train/learning_rate": 0.000006689661934067944,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006689661934067944,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006689661934067944
    },
    {
      "Step": 667,
      "brisk-pond-1 - train/learning_rate": 0.000006661123230679461,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006661123230679461,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006661123230679461
    },
    {
      "Step": 668,
      "brisk-pond-1 - train/learning_rate": 0.0000066326151002697994,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000066326151002697994,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000066326151002697994
    },
    {
      "Step": 669,
      "brisk-pond-1 - train/learning_rate": 0.000006604137803878374,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006604137803878374,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006604137803878374
    },
    {
      "Step": 670,
      "brisk-pond-1 - train/learning_rate": 0.000006575691602262277,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006575691602262277,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006575691602262277
    },
    {
      "Step": 671,
      "brisk-pond-1 - train/learning_rate": 0.000006547276755893868,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006547276755893868,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006547276755893868
    },
    {
      "Step": 672,
      "brisk-pond-1 - train/learning_rate": 0.000006518893524958405,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006518893524958405,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006518893524958405
    },
    {
      "Step": 673,
      "brisk-pond-1 - train/learning_rate": 0.0000064905421693516406,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000064905421693516406,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000064905421693516406
    },
    {
      "Step": 674,
      "brisk-pond-1 - train/learning_rate": 0.00000646222294867747,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000646222294867747,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000646222294867747
    },
    {
      "Step": 675,
      "brisk-pond-1 - train/learning_rate": 0.00000643393612224553,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000643393612224553,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000643393612224553
    },
    {
      "Step": 676,
      "brisk-pond-1 - train/learning_rate": 0.00000640568194906884,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000640568194906884,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000640568194906884
    },
    {
      "Step": 677,
      "brisk-pond-1 - train/learning_rate": 0.000006377460687861421,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006377460687861421,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006377460687861421
    },
    {
      "Step": 678,
      "brisk-pond-1 - train/learning_rate": 0.0000063492725970359285,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000063492725970359285,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000063492725970359285
    },
    {
      "Step": 679,
      "brisk-pond-1 - train/learning_rate": 0.000006321117934701296,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006321117934701296,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006321117934701296
    },
    {
      "Step": 680,
      "brisk-pond-1 - train/learning_rate": 0.0000062929969586603536,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000062929969586603536,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000062929969586603536
    },
    {
      "Step": 681,
      "brisk-pond-1 - train/learning_rate": 0.000006264909926407485,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006264909926407485,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006264909926407485
    },
    {
      "Step": 682,
      "brisk-pond-1 - train/learning_rate": 0.0000062368570951262565,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000062368570951262565,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000062368570951262565
    },
    {
      "Step": 683,
      "brisk-pond-1 - train/learning_rate": 0.000006208838721687071,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006208838721687071,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006208838721687071
    },
    {
      "Step": 684,
      "brisk-pond-1 - train/learning_rate": 0.0000061808550626448075,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000061808550626448075,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000061808550626448075
    },
    {
      "Step": 685,
      "brisk-pond-1 - train/learning_rate": 0.0000061529063742364844,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000061529063742364844,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000061529063742364844
    },
    {
      "Step": 686,
      "brisk-pond-1 - train/learning_rate": 0.0000061249929123789,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000061249929123789,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000061249929123789
    },
    {
      "Step": 687,
      "brisk-pond-1 - train/learning_rate": 0.000006097114932666299,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006097114932666299,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006097114932666299
    },
    {
      "Step": 688,
      "brisk-pond-1 - train/learning_rate": 0.000006069272690368021,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006069272690368021,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006069272690368021
    },
    {
      "Step": 689,
      "brisk-pond-1 - train/learning_rate": 0.00000604146644042618,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000604146644042618,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000604146644042618
    },
    {
      "Step": 690,
      "brisk-pond-1 - train/learning_rate": 0.000006013696437453309,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000006013696437453309,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000006013696437453309
    },
    {
      "Step": 691,
      "brisk-pond-1 - train/learning_rate": 0.000005985962935730052,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005985962935730052,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005985962935730052
    },
    {
      "Step": 692,
      "brisk-pond-1 - train/learning_rate": 0.000005958266189202808,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005958266189202808,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005958266189202808
    },
    {
      "Step": 693,
      "brisk-pond-1 - train/learning_rate": 0.000005930606451481438,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005930606451481438,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005930606451481438
    },
    {
      "Step": 694,
      "brisk-pond-1 - train/learning_rate": 0.0000059029839758369135,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000059029839758369135,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000059029839758369135
    },
    {
      "Step": 695,
      "brisk-pond-1 - train/learning_rate": 0.000005875399015199006,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005875399015199006,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005875399015199006
    },
    {
      "Step": 696,
      "brisk-pond-1 - train/learning_rate": 0.000005847851822153996,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005847851822153996,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005847851822153996
    },
    {
      "Step": 697,
      "brisk-pond-1 - train/learning_rate": 0.000005820342648942316,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005820342648942316,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005820342648942316
    },
    {
      "Step": 698,
      "brisk-pond-1 - train/learning_rate": 0.000005792871747456276,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005792871747456276,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005792871747456276
    },
    {
      "Step": 699,
      "brisk-pond-1 - train/learning_rate": 0.000005765439369237738,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005765439369237738,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005765439369237738
    },
    {
      "Step": 700,
      "brisk-pond-1 - train/learning_rate": 0.000005738045765475825,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005738045765475825,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005738045765475825
    },
    {
      "Step": 701,
      "brisk-pond-1 - train/learning_rate": 0.000005710691187004606,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005710691187004606,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005710691187004606
    },
    {
      "Step": 702,
      "brisk-pond-1 - train/learning_rate": 0.000005683375884300823,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005683375884300823,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005683375884300823
    },
    {
      "Step": 703,
      "brisk-pond-1 - train/learning_rate": 0.000005656100107481572,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005656100107481572,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005656100107481572
    },
    {
      "Step": 704,
      "brisk-pond-1 - train/learning_rate": 0.000005628864106302025,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005628864106302025,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005628864106302025
    },
    {
      "Step": 705,
      "brisk-pond-1 - train/learning_rate": 0.000005601668130153141,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005601668130153141,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005601668130153141
    },
    {
      "Step": 706,
      "brisk-pond-1 - train/learning_rate": 0.0000055745124280593935,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000055745124280593935,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000055745124280593935
    },
    {
      "Step": 707,
      "brisk-pond-1 - train/learning_rate": 0.000005547397248676466,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005547397248676466,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005547397248676466
    },
    {
      "Step": 708,
      "brisk-pond-1 - train/learning_rate": 0.000005520322840288996,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005520322840288996,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005520322840288996
    },
    {
      "Step": 709,
      "brisk-pond-1 - train/learning_rate": 0.00000549328945080829,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000549328945080829,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000549328945080829
    },
    {
      "Step": 710,
      "brisk-pond-1 - train/learning_rate": 0.00000546629732777007,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000546629732777007,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000546629732777007
    },
    {
      "Step": 711,
      "brisk-pond-1 - train/learning_rate": 0.000005439346718332177,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005439346718332177,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005439346718332177
    },
    {
      "Step": 712,
      "brisk-pond-1 - train/learning_rate": 0.000005412437869272345,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005412437869272345,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005412437869272345
    },
    {
      "Step": 713,
      "brisk-pond-1 - train/learning_rate": 0.000005385571026985908,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005385571026985908,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005385571026985908
    },
    {
      "Step": 714,
      "brisk-pond-1 - train/learning_rate": 0.00000535874643748356,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000535874643748356,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000535874643748356
    },
    {
      "Step": 715,
      "brisk-pond-1 - train/learning_rate": 0.000005331964346389107,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005331964346389107,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005331964346389107
    },
    {
      "Step": 716,
      "brisk-pond-1 - train/learning_rate": 0.000005305224998937209,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005305224998937209,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005305224998937209
    },
    {
      "Step": 717,
      "brisk-pond-1 - train/learning_rate": 0.00000527852863997113,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000527852863997113,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000527852863997113
    },
    {
      "Step": 718,
      "brisk-pond-1 - train/learning_rate": 0.000005251875513940507,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005251875513940507,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005251875513940507
    },
    {
      "Step": 719,
      "brisk-pond-1 - train/learning_rate": 0.000005225265864899115,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005225265864899115,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005225265864899115
    },
    {
      "Step": 720,
      "brisk-pond-1 - train/learning_rate": 0.0000051986999365026154,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000051986999365026154,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000051986999365026154
    },
    {
      "Step": 721,
      "brisk-pond-1 - train/learning_rate": 0.0000051721779720063345,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000051721779720063345,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000051721779720063345
    },
    {
      "Step": 722,
      "brisk-pond-1 - train/learning_rate": 0.0000051457002142630375,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000051457002142630375,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000051457002142630375
    },
    {
      "Step": 723,
      "brisk-pond-1 - train/learning_rate": 0.000005119266905720709,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005119266905720709,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005119266905720709
    },
    {
      "Step": 724,
      "brisk-pond-1 - train/learning_rate": 0.00000509287828842032,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000509287828842032,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000509287828842032
    },
    {
      "Step": 725,
      "brisk-pond-1 - train/learning_rate": 0.00000506653460399362,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000506653460399362,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000506653460399362
    },
    {
      "Step": 726,
      "brisk-pond-1 - train/learning_rate": 0.000005040236093660923,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005040236093660923,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005040236093660923
    },
    {
      "Step": 727,
      "brisk-pond-1 - train/learning_rate": 0.000005013982998228894,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000005013982998228894,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000005013982998228894
    },
    {
      "Step": 728,
      "brisk-pond-1 - train/learning_rate": 0.000004987775558088369,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004987775558088369,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004987775558088369
    },
    {
      "Step": 729,
      "brisk-pond-1 - train/learning_rate": 0.000004961614013212111,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004961614013212111,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004961614013212111
    },
    {
      "Step": 730,
      "brisk-pond-1 - train/learning_rate": 0.000004935498603152648,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004935498603152648,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004935498603152648
    },
    {
      "Step": 731,
      "brisk-pond-1 - train/learning_rate": 0.000004909429567040058,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004909429567040058,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004909429567040058
    },
    {
      "Step": 732,
      "brisk-pond-1 - train/learning_rate": 0.000004883407143579792,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004883407143579792,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004883407143579792
    },
    {
      "Step": 733,
      "brisk-pond-1 - train/learning_rate": 0.000004857431571050493,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004857431571050493,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004857431571050493
    },
    {
      "Step": 734,
      "brisk-pond-1 - train/learning_rate": 0.0000048315030873017946,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000048315030873017946,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000048315030873017946
    },
    {
      "Step": 735,
      "brisk-pond-1 - train/learning_rate": 0.000004805621929752156,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004805621929752156,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004805621929752156
    },
    {
      "Step": 736,
      "brisk-pond-1 - train/learning_rate": 0.000004779788335386687,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004779788335386687,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004779788335386687
    },
    {
      "Step": 737,
      "brisk-pond-1 - train/learning_rate": 0.000004754002540754985,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004754002540754985,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004754002540754985
    },
    {
      "Step": 738,
      "brisk-pond-1 - train/learning_rate": 0.00000472826478196895,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000472826478196895,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000472826478196895
    },
    {
      "Step": 739,
      "brisk-pond-1 - train/learning_rate": 0.000004702575294700639,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004702575294700639,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004702575294700639
    },
    {
      "Step": 740,
      "brisk-pond-1 - train/learning_rate": 0.0000046769343141800985,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000046769343141800985,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000046769343141800985
    },
    {
      "Step": 741,
      "brisk-pond-1 - train/learning_rate": 0.000004651342075193224,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004651342075193224,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004651342075193224
    },
    {
      "Step": 742,
      "brisk-pond-1 - train/learning_rate": 0.0000046257988120795976,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000046257988120795976,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000046257988120795976
    },
    {
      "Step": 743,
      "brisk-pond-1 - train/learning_rate": 0.0000046003047587303376,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000046003047587303376,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000046003047587303376
    },
    {
      "Step": 744,
      "brisk-pond-1 - train/learning_rate": 0.00000457486014858597,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000457486014858597,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000457486014858597
    },
    {
      "Step": 745,
      "brisk-pond-1 - train/learning_rate": 0.000004549465214634291,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004549465214634291,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004549465214634291
    },
    {
      "Step": 746,
      "brisk-pond-1 - train/learning_rate": 0.000004524120189408227,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004524120189408227,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004524120189408227
    },
    {
      "Step": 747,
      "brisk-pond-1 - train/learning_rate": 0.000004498825304983703,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004498825304983703,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004498825304983703
    },
    {
      "Step": 748,
      "brisk-pond-1 - train/learning_rate": 0.000004473580792977521,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004473580792977521,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004473580792977521
    },
    {
      "Step": 749,
      "brisk-pond-1 - train/learning_rate": 0.0000044483868845452376,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000044483868845452376,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000044483868845452376
    },
    {
      "Step": 750,
      "brisk-pond-1 - train/learning_rate": 0.0000044232438103790605,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000044232438103790605,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000044232438103790605
    },
    {
      "Step": 751,
      "brisk-pond-1 - train/learning_rate": 0.000004398151800705716,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004398151800705716,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004398151800705716
    },
    {
      "Step": 752,
      "brisk-pond-1 - train/learning_rate": 0.000004373111085284348,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004373111085284348,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004373111085284348
    },
    {
      "Step": 753,
      "brisk-pond-1 - train/learning_rate": 0.00000434812189340442,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000434812189340442,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000434812189340442
    },
    {
      "Step": 754,
      "brisk-pond-1 - train/learning_rate": 0.000004323184453883617,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004323184453883617,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004323184453883617
    },
    {
      "Step": 755,
      "brisk-pond-1 - train/learning_rate": 0.000004298298995065735,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004298298995065735,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004298298995065735
    },
    {
      "Step": 756,
      "brisk-pond-1 - train/learning_rate": 0.000004273465744818605,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004273465744818605,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004273465744818605
    },
    {
      "Step": 757,
      "brisk-pond-1 - train/learning_rate": 0.000004248684930532001,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004248684930532001,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004248684930532001
    },
    {
      "Step": 758,
      "brisk-pond-1 - train/learning_rate": 0.0000042239567791155545,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000042239567791155545,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000042239567791155545
    },
    {
      "Step": 759,
      "brisk-pond-1 - train/learning_rate": 0.000004199281516996692,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004199281516996692,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004199281516996692
    },
    {
      "Step": 760,
      "brisk-pond-1 - train/learning_rate": 0.0000041746593701185345,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000041746593701185345,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000041746593701185345
    },
    {
      "Step": 761,
      "brisk-pond-1 - train/learning_rate": 0.000004150090563937863,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004150090563937863,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004150090563937863
    },
    {
      "Step": 762,
      "brisk-pond-1 - train/learning_rate": 0.000004125575323423019,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004125575323423019,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004125575323423019
    },
    {
      "Step": 763,
      "brisk-pond-1 - train/learning_rate": 0.000004101113873051865,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004101113873051865,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004101113873051865
    },
    {
      "Step": 764,
      "brisk-pond-1 - train/learning_rate": 0.000004076706436809735,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004076706436809735,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004076706436809735
    },
    {
      "Step": 765,
      "brisk-pond-1 - train/learning_rate": 0.000004052353238187363,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004052353238187363,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004052353238187363
    },
    {
      "Step": 766,
      "brisk-pond-1 - train/learning_rate": 0.00000402805450017885,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000402805450017885,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000402805450017885
    },
    {
      "Step": 767,
      "brisk-pond-1 - train/learning_rate": 0.000004003810445279619,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000004003810445279619,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000004003810445279619
    },
    {
      "Step": 768,
      "brisk-pond-1 - train/learning_rate": 0.0000039796212954843816,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000039796212954843816,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000039796212954843816
    },
    {
      "Step": 769,
      "brisk-pond-1 - train/learning_rate": 0.000003955487272285099,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003955487272285099,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003955487272285099
    },
    {
      "Step": 770,
      "brisk-pond-1 - train/learning_rate": 0.000003931408596668955,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003931408596668955,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003931408596668955
    },
    {
      "Step": 771,
      "brisk-pond-1 - train/learning_rate": 0.0000039073854891163335,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000039073854891163335,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000039073854891163335
    },
    {
      "Step": 772,
      "brisk-pond-1 - train/learning_rate": 0.000003883418169598808,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003883418169598808,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003883418169598808
    },
    {
      "Step": 773,
      "brisk-pond-1 - train/learning_rate": 0.000003859506857577113,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003859506857577113,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003859506857577113
    },
    {
      "Step": 774,
      "brisk-pond-1 - train/learning_rate": 0.000003835651771999139,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003835651771999139,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003835651771999139
    },
    {
      "Step": 775,
      "brisk-pond-1 - train/learning_rate": 0.000003811853131297932,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003811853131297932,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003811853131297932
    },
    {
      "Step": 776,
      "brisk-pond-1 - train/learning_rate": 0.0000037881111533897,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000037881111533897,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000037881111533897
    },
    {
      "Step": 777,
      "brisk-pond-1 - train/learning_rate": 0.000003764426055671789,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003764426055671789,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003764426055671789
    },
    {
      "Step": 778,
      "brisk-pond-1 - train/learning_rate": 0.000003740798055020736,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003740798055020736,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003740798055020736
    },
    {
      "Step": 779,
      "brisk-pond-1 - train/learning_rate": 0.0000037172273677902403,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000037172273677902403,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000037172273677902403
    },
    {
      "Step": 780,
      "brisk-pond-1 - train/learning_rate": 0.000003693714209809207,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003693714209809207,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003693714209809207
    },
    {
      "Step": 781,
      "brisk-pond-1 - train/learning_rate": 0.000003670258796379772,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003670258796379772,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003670258796379772
    },
    {
      "Step": 782,
      "brisk-pond-1 - train/learning_rate": 0.000003646861342275314,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003646861342275314,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003646861342275314
    },
    {
      "Step": 783,
      "brisk-pond-1 - train/learning_rate": 0.0000036235220617385026,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000036235220617385026,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000036235220617385026
    },
    {
      "Step": 784,
      "brisk-pond-1 - train/learning_rate": 0.000003600241168479327,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003600241168479327,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003600241168479327
    },
    {
      "Step": 785,
      "brisk-pond-1 - train/learning_rate": 0.000003577018875673153,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003577018875673153,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003577018875673153
    },
    {
      "Step": 786,
      "brisk-pond-1 - train/learning_rate": 0.000003553855395958752,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003553855395958752,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003553855395958752
    },
    {
      "Step": 787,
      "brisk-pond-1 - train/learning_rate": 0.000003530750941436367,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003530750941436367,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003530750941436367
    },
    {
      "Step": 788,
      "brisk-pond-1 - train/learning_rate": 0.0000035077057236657687,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000035077057236657687,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000035077057236657687
    },
    {
      "Step": 789,
      "brisk-pond-1 - train/learning_rate": 0.0000034847199536643107,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000034847199536643107,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000034847199536643107
    },
    {
      "Step": 790,
      "brisk-pond-1 - train/learning_rate": 0.0000034617938419050132,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000034617938419050132,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000034617938419050132
    },
    {
      "Step": 791,
      "brisk-pond-1 - train/learning_rate": 0.0000034389275983146196,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000034389275983146196,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000034389275983146196
    },
    {
      "Step": 792,
      "brisk-pond-1 - train/learning_rate": 0.0000034161214322716795,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000034161214322716795,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000034161214322716795
    },
    {
      "Step": 793,
      "brisk-pond-1 - train/learning_rate": 0.000003393375552604632,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003393375552604632,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003393375552604632
    },
    {
      "Step": 794,
      "brisk-pond-1 - train/learning_rate": 0.0000033706901675898985,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000033706901675898985,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000033706901675898985
    },
    {
      "Step": 795,
      "brisk-pond-1 - train/learning_rate": 0.0000033480654849499715,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000033480654849499715,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000033480654849499715
    },
    {
      "Step": 796,
      "brisk-pond-1 - train/learning_rate": 0.0000033255017118515075,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000033255017118515075,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000033255017118515075
    },
    {
      "Step": 797,
      "brisk-pond-1 - train/learning_rate": 0.0000033029990549034353,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000033029990549034353,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000033029990549034353
    },
    {
      "Step": 798,
      "brisk-pond-1 - train/learning_rate": 0.0000032805577201550633,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000032805577201550633,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000032805577201550633
    },
    {
      "Step": 799,
      "brisk-pond-1 - train/learning_rate": 0.000003258177913094199,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003258177913094199,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003258177913094199
    },
    {
      "Step": 800,
      "brisk-pond-1 - train/learning_rate": 0.0000032358598386452545,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000032358598386452545,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000032358598386452545
    },
    {
      "Step": 801,
      "brisk-pond-1 - train/learning_rate": 0.0000032136037011673803,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000032136037011673803,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000032136037011673803
    },
    {
      "Step": 802,
      "brisk-pond-1 - train/learning_rate": 0.000003191409704452586,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003191409704452586,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003191409704452586
    },
    {
      "Step": 804,
      "brisk-pond-1 - train/learning_rate": 0.0000031692780517238887,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000031692780517238887,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000031692780517238887
    },
    {
      "Step": 805,
      "brisk-pond-1 - train/learning_rate": 0.0000031472089456334344,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000031472089456334344,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000031472089456334344
    },
    {
      "Step": 806,
      "brisk-pond-1 - train/learning_rate": 0.0000031252025882606518,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000031252025882606518,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000031252025882606518
    },
    {
      "Step": 807,
      "brisk-pond-1 - train/learning_rate": 0.0000031032591811104,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000031032591811104,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000031032591811104
    },
    {
      "Step": 808,
      "brisk-pond-1 - train/learning_rate": 0.0000030813789251111294,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000030813789251111294,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000030813789251111294
    },
    {
      "Step": 809,
      "brisk-pond-1 - train/learning_rate": 0.0000030595620206130305,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000030595620206130305,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000030595620206130305
    },
    {
      "Step": 810,
      "brisk-pond-1 - train/learning_rate": 0.0000030378086673862074,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000030378086673862074,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000030378086673862074
    },
    {
      "Step": 811,
      "brisk-pond-1 - train/learning_rate": 0.000003016119064618842,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000003016119064618842,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000003016119064618842
    },
    {
      "Step": 812,
      "brisk-pond-1 - train/learning_rate": 0.0000029944934109153833,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000029944934109153833,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000029944934109153833
    },
    {
      "Step": 813,
      "brisk-pond-1 - train/learning_rate": 0.000002972931904294718,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002972931904294718,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002972931904294718
    },
    {
      "Step": 814,
      "brisk-pond-1 - train/learning_rate": 0.0000029514347421883537,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000029514347421883537,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000029514347421883537
    },
    {
      "Step": 815,
      "brisk-pond-1 - train/learning_rate": 0.0000029300021214386198,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000029300021214386198,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000029300021214386198
    },
    {
      "Step": 816,
      "brisk-pond-1 - train/learning_rate": 0.0000029086342382968612,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000029086342382968612,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000029086342382968612
    },
    {
      "Step": 817,
      "brisk-pond-1 - train/learning_rate": 0.0000028873312884216465,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000028873312884216465,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000028873312884216465
    },
    {
      "Step": 818,
      "brisk-pond-1 - train/learning_rate": 0.000002866093466876968,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002866093466876968,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002866093466876968
    },
    {
      "Step": 819,
      "brisk-pond-1 - train/learning_rate": 0.000002844920968130459,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002844920968130459,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002844920968130459
    },
    {
      "Step": 820,
      "brisk-pond-1 - train/learning_rate": 0.0000028238139860516166,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000028238139860516166,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000028238139860516166
    },
    {
      "Step": 821,
      "brisk-pond-1 - train/learning_rate": 0.000002802772713910018,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002802772713910018,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002802772713910018
    },
    {
      "Step": 822,
      "brisk-pond-1 - train/learning_rate": 0.000002781797344373568,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002781797344373568,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002781797344373568
    },
    {
      "Step": 823,
      "brisk-pond-1 - train/learning_rate": 0.0000027608880695067132,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000027608880695067132,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000027608880695067132
    },
    {
      "Step": 824,
      "brisk-pond-1 - train/learning_rate": 0.000002740045080768694,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002740045080768694,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002740045080768694
    },
    {
      "Step": 825,
      "brisk-pond-1 - train/learning_rate": 0.0000027192685690117926,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000027192685690117926,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000027192685690117926
    },
    {
      "Step": 826,
      "brisk-pond-1 - train/learning_rate": 0.0000026985587244795897,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000026985587244795897,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000026985587244795897
    },
    {
      "Step": 827,
      "brisk-pond-1 - train/learning_rate": 0.0000026779157368052045,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000026779157368052045,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000026779157368052045
    },
    {
      "Step": 828,
      "brisk-pond-1 - train/learning_rate": 0.0000026573397950095825,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000026573397950095825,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000026573397950095825
    },
    {
      "Step": 829,
      "brisk-pond-1 - train/learning_rate": 0.000002636831087499745,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002636831087499745,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002636831087499745
    },
    {
      "Step": 830,
      "brisk-pond-1 - train/learning_rate": 0.0000026163898020670686,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000026163898020670686,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000026163898020670686
    },
    {
      "Step": 831,
      "brisk-pond-1 - train/learning_rate": 0.0000025960161258855807,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000025960161258855807,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000025960161258855807
    },
    {
      "Step": 832,
      "brisk-pond-1 - train/learning_rate": 0.0000025757102455102213,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000025757102455102213,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000025757102455102213
    },
    {
      "Step": 833,
      "brisk-pond-1 - train/learning_rate": 0.000002555472346875153,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002555472346875153,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002555472346875153
    },
    {
      "Step": 834,
      "brisk-pond-1 - train/learning_rate": 0.0000025353026152920468,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000025353026152920468,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000025353026152920468
    },
    {
      "Step": 835,
      "brisk-pond-1 - train/learning_rate": 0.0000025152012354484,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000025152012354484,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000025152012354484
    },
    {
      "Step": 836,
      "brisk-pond-1 - train/learning_rate": 0.000002495168391405829,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002495168391405829,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002495168391405829
    },
    {
      "Step": 837,
      "brisk-pond-1 - train/learning_rate": 0.00000247520426659839,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000247520426659839,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000247520426659839
    },
    {
      "Step": 838,
      "brisk-pond-1 - train/learning_rate": 0.0000024553090438309024,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000024553090438309024,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000024553090438309024
    },
    {
      "Step": 839,
      "brisk-pond-1 - train/learning_rate": 0.0000024354829052772766,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000024354829052772766,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000024354829052772766
    },
    {
      "Step": 840,
      "brisk-pond-1 - train/learning_rate": 0.0000024157260324788345,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000024157260324788345,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000024157260324788345
    },
    {
      "Step": 841,
      "brisk-pond-1 - train/learning_rate": 0.00000239603860634266,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000239603860634266,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000239603860634266
    },
    {
      "Step": 842,
      "brisk-pond-1 - train/learning_rate": 0.0000023764208071399307,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000023764208071399307,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000023764208071399307
    },
    {
      "Step": 843,
      "brisk-pond-1 - train/learning_rate": 0.000002356872814504283,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002356872814504283,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002356872814504283
    },
    {
      "Step": 844,
      "brisk-pond-1 - train/learning_rate": 0.000002337394807430153,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002337394807430153,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002337394807430153
    },
    {
      "Step": 845,
      "brisk-pond-1 - train/learning_rate": 0.0000023179869642711427,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000023179869642711427,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000023179869642711427
    },
    {
      "Step": 846,
      "brisk-pond-1 - train/learning_rate": 0.000002298649462738385,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002298649462738385,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002298649462738385
    },
    {
      "Step": 847,
      "brisk-pond-1 - train/learning_rate": 0.000002279382479898916,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002279382479898916,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002279382479898916
    },
    {
      "Step": 848,
      "brisk-pond-1 - train/learning_rate": 0.000002260186192174065,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002260186192174065,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002260186192174065
    },
    {
      "Step": 849,
      "brisk-pond-1 - train/learning_rate": 0.0000022410607753378223,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000022410607753378223,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000022410607753378223
    },
    {
      "Step": 850,
      "brisk-pond-1 - train/learning_rate": 0.0000022220064045152366,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000022220064045152366,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000022220064045152366
    },
    {
      "Step": 851,
      "brisk-pond-1 - train/learning_rate": 0.000002203023254180816,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002203023254180816,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002203023254180816
    },
    {
      "Step": 852,
      "brisk-pond-1 - train/learning_rate": 0.00000218411149815692,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000218411149815692,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000218411149815692
    },
    {
      "Step": 853,
      "brisk-pond-1 - train/learning_rate": 0.0000021652713096121857,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000021652713096121857,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000021652713096121857
    },
    {
      "Step": 854,
      "brisk-pond-1 - train/learning_rate": 0.00000214650286105992,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000214650286105992,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000214650286105992
    },
    {
      "Step": 855,
      "brisk-pond-1 - train/learning_rate": 0.000002127806324356535,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002127806324356535,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002127806324356535
    },
    {
      "Step": 856,
      "brisk-pond-1 - train/learning_rate": 0.0000021091818706999657,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000021091818706999657,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000021091818706999657
    },
    {
      "Step": 857,
      "brisk-pond-1 - train/learning_rate": 0.000002090629670628117,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000002090629670628117,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000002090629670628117
    },
    {
      "Step": 858,
      "brisk-pond-1 - train/learning_rate": 0.0000020721498940172824,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000020721498940172824,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000020721498940172824
    },
    {
      "Step": 859,
      "brisk-pond-1 - train/learning_rate": 0.0000020537427100806007,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000020537427100806007,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000020537427100806007
    },
    {
      "Step": 860,
      "brisk-pond-1 - train/learning_rate": 0.0000020354082873665015,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000020354082873665015,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000020354082873665015
    },
    {
      "Step": 861,
      "brisk-pond-1 - train/learning_rate": 0.00000201714679375717,
      "brisk-pond-1 - train/learning_rate__MIN": 0.00000201714679375717,
      "brisk-pond-1 - train/learning_rate__MAX": 0.00000201714679375717
    },
    {
      "Step": 862,
      "brisk-pond-1 - train/learning_rate": 0.0000019989583964670024,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000019989583964670024,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000019989583964670024
    },
    {
      "Step": 863,
      "brisk-pond-1 - train/learning_rate": 0.000001980843262041071,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001980843262041071,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001980843262041071
    },
    {
      "Step": 864,
      "brisk-pond-1 - train/learning_rate": 0.0000019628015563536106,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000019628015563536106,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000019628015563536106
    },
    {
      "Step": 865,
      "brisk-pond-1 - train/learning_rate": 0.0000019448334446064876,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000019448334446064876,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000019448334446064876
    },
    {
      "Step": 866,
      "brisk-pond-1 - train/learning_rate": 0.0000019269390913277007,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000019269390913277007,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000019269390913277007
    },
    {
      "Step": 867,
      "brisk-pond-1 - train/learning_rate": 0.000001909118660369862,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001909118660369862,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001909118660369862
    },
    {
      "Step": 868,
      "brisk-pond-1 - train/learning_rate": 0.0000018913723149087026,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000018913723149087026,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000018913723149087026
    },
    {
      "Step": 869,
      "brisk-pond-1 - train/learning_rate": 0.0000018737002174415742,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000018737002174415742,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000018737002174415742
    },
    {
      "Step": 870,
      "brisk-pond-1 - train/learning_rate": 0.0000018561025297859736,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000018561025297859736,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000018561025297859736
    },
    {
      "Step": 871,
      "brisk-pond-1 - train/learning_rate": 0.0000018385794130780433,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000018385794130780433,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000018385794130780433
    },
    {
      "Step": 872,
      "brisk-pond-1 - train/learning_rate": 0.000001821131027771107,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001821131027771107,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001821131027771107
    },
    {
      "Step": 873,
      "brisk-pond-1 - train/learning_rate": 0.0000018037575336341962,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000018037575336341962,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000018037575336341962
    },
    {
      "Step": 874,
      "brisk-pond-1 - train/learning_rate": 0.0000017864590897505952,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000017864590897505952,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000017864590897505952
    },
    {
      "Step": 875,
      "brisk-pond-1 - train/learning_rate": 0.0000017692358545163712,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000017692358545163712,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000017692358545163712
    },
    {
      "Step": 876,
      "brisk-pond-1 - train/learning_rate": 0.0000017520879856389327,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000017520879856389327,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000017520879856389327
    },
    {
      "Step": 877,
      "brisk-pond-1 - train/learning_rate": 0.000001735015640135589,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001735015640135589,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001735015640135589
    },
    {
      "Step": 878,
      "brisk-pond-1 - train/learning_rate": 0.0000017180189743320974,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000017180189743320974,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000017180189743320974
    },
    {
      "Step": 879,
      "brisk-pond-1 - train/learning_rate": 0.0000017010981438612517,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000017010981438612517,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000017010981438612517
    },
    {
      "Step": 880,
      "brisk-pond-1 - train/learning_rate": 0.0000016842533036614406,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000016842533036614406,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000016842533036614406
    },
    {
      "Step": 881,
      "brisk-pond-1 - train/learning_rate": 0.0000016674846079752361,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000016674846079752361,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000016674846079752361
    },
    {
      "Step": 882,
      "brisk-pond-1 - train/learning_rate": 0.000001650792210347978,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001650792210347978,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001650792210347978
    },
    {
      "Step": 883,
      "brisk-pond-1 - train/learning_rate": 0.000001634176263626379,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001634176263626379,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001634176263626379
    },
    {
      "Step": 884,
      "brisk-pond-1 - train/learning_rate": 0.0000016176369199571074,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000016176369199571074,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000016176369199571074
    },
    {
      "Step": 885,
      "brisk-pond-1 - train/learning_rate": 0.0000016011743307854067,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000016011743307854067,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000016011743307854067
    },
    {
      "Step": 886,
      "brisk-pond-1 - train/learning_rate": 0.0000015847886468537043,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000015847886468537043,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000015847886468537043
    },
    {
      "Step": 887,
      "brisk-pond-1 - train/learning_rate": 0.0000015684800182002314,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000015684800182002314,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000015684800182002314
    },
    {
      "Step": 888,
      "brisk-pond-1 - train/learning_rate": 0.0000015522485941576526,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000015522485941576526,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000015522485941576526
    },
    {
      "Step": 889,
      "brisk-pond-1 - train/learning_rate": 0.0000015360945233516933,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000015360945233516933,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000015360945233516933
    },
    {
      "Step": 890,
      "brisk-pond-1 - train/learning_rate": 0.0000015200179536997816,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000015200179536997816,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000015200179536997816
    },
    {
      "Step": 891,
      "brisk-pond-1 - train/learning_rate": 0.0000015040190324096915,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000015040190324096915,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000015040190324096915
    },
    {
      "Step": 892,
      "brisk-pond-1 - train/learning_rate": 0.0000014880979059782018,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000014880979059782018,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000014880979059782018
    },
    {
      "Step": 893,
      "brisk-pond-1 - train/learning_rate": 0.0000014722547201897442,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000014722547201897442,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000014722547201897442
    },
    {
      "Step": 894,
      "brisk-pond-1 - train/learning_rate": 0.0000014564896201150792,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000014564896201150792,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000014564896201150792
    },
    {
      "Step": 895,
      "brisk-pond-1 - train/learning_rate": 0.0000014408027501099598,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000014408027501099598,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000014408027501099598
    },
    {
      "Step": 896,
      "brisk-pond-1 - train/learning_rate": 0.0000014251942538138087,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000014251942538138087,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000014251942538138087
    },
    {
      "Step": 897,
      "brisk-pond-1 - train/learning_rate": 0.0000014096642741484146,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000014096642741484146,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000014096642741484146
    },
    {
      "Step": 898,
      "brisk-pond-1 - train/learning_rate": 0.0000013942129533166116,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013942129533166116,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013942129533166116
    },
    {
      "Step": 899,
      "brisk-pond-1 - train/learning_rate": 0.0000013788404328009797,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013788404328009797,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013788404328009797
    },
    {
      "Step": 900,
      "brisk-pond-1 - train/learning_rate": 0.0000013635468533625496,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013635468533625496,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013635468533625496
    },
    {
      "Step": 901,
      "brisk-pond-1 - train/learning_rate": 0.0000013483323550395222,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013483323550395222,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013483323550395222
    },
    {
      "Step": 902,
      "brisk-pond-1 - train/learning_rate": 0.0000013331970771459735,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013331970771459735,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013331970771459735
    },
    {
      "Step": 903,
      "brisk-pond-1 - train/learning_rate": 0.0000013181411582705838,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013181411582705838,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013181411582705838
    },
    {
      "Step": 904,
      "brisk-pond-1 - train/learning_rate": 0.0000013031647362753686,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000013031647362753686,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000013031647362753686
    },
    {
      "Step": 905,
      "brisk-pond-1 - train/learning_rate": 0.0000012882679482944248,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012882679482944248,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012882679482944248
    },
    {
      "Step": 906,
      "brisk-pond-1 - train/learning_rate": 0.0000012734509307326603,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012734509307326603,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012734509307326603
    },
    {
      "Step": 907,
      "brisk-pond-1 - train/learning_rate": 0.000001258713819264552,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001258713819264552,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001258713819264552
    },
    {
      "Step": 908,
      "brisk-pond-1 - train/learning_rate": 0.0000012440567488329024,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012440567488329024,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012440567488329024
    },
    {
      "Step": 909,
      "brisk-pond-1 - train/learning_rate": 0.0000012294798536476117,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012294798536476117,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012294798536476117
    },
    {
      "Step": 910,
      "brisk-pond-1 - train/learning_rate": 0.0000012149832671844387,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012149832671844387,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012149832671844387
    },
    {
      "Step": 911,
      "brisk-pond-1 - train/learning_rate": 0.0000012005671221837777,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000012005671221837777,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000012005671221837777
    },
    {
      "Step": 912,
      "brisk-pond-1 - train/learning_rate": 0.0000011862315506494547,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011862315506494547,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011862315506494547
    },
    {
      "Step": 913,
      "brisk-pond-1 - train/learning_rate": 0.0000011719766838475022,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011719766838475022,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011719766838475022
    },
    {
      "Step": 914,
      "brisk-pond-1 - train/learning_rate": 0.0000011578026523049779,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011578026523049779,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011578026523049779
    },
    {
      "Step": 915,
      "brisk-pond-1 - train/learning_rate": 0.0000011437095858087489,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011437095858087489,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011437095858087489
    },
    {
      "Step": 916,
      "brisk-pond-1 - train/learning_rate": 0.0000011296976134043158,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011296976134043158,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011296976134043158
    },
    {
      "Step": 917,
      "brisk-pond-1 - train/learning_rate": 0.0000011157668633946284,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011157668633946284,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011157668633946284
    },
    {
      "Step": 918,
      "brisk-pond-1 - train/learning_rate": 0.0000011019174633389073,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000011019174633389073,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000011019174633389073
    },
    {
      "Step": 919,
      "brisk-pond-1 - train/learning_rate": 0.000001088149540051483,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001088149540051483,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001088149540051483
    },
    {
      "Step": 920,
      "brisk-pond-1 - train/learning_rate": 0.0000010744632196006278,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000010744632196006278,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000010744632196006278
    },
    {
      "Step": 921,
      "brisk-pond-1 - train/learning_rate": 0.000001060858627307404,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001060858627307404,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001060858627307404
    },
    {
      "Step": 922,
      "brisk-pond-1 - train/learning_rate": 0.000001047335887744515,
      "brisk-pond-1 - train/learning_rate__MIN": 0.000001047335887744515,
      "brisk-pond-1 - train/learning_rate__MAX": 0.000001047335887744515
    },
    {
      "Step": 923,
      "brisk-pond-1 - train/learning_rate": 0.0000010338951247351726,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000010338951247351726,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000010338951247351726
    },
    {
      "Step": 924,
      "brisk-pond-1 - train/learning_rate": 0.0000010205364613519486,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000010205364613519486,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000010205364613519486
    },
    {
      "Step": 925,
      "brisk-pond-1 - train/learning_rate": 0.0000010072600199156612,
      "brisk-pond-1 - train/learning_rate__MIN": 0.0000010072600199156612,
      "brisk-pond-1 - train/learning_rate__MAX": 0.0000010072600199156612
    },
    {
      "Step": 926,
      "brisk-pond-1 - train/learning_rate": 9.94065921994244e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.94065921994244e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.94065921994244e-7
    },
    {
      "Step": 927,
      "brisk-pond-1 - train/learning_rate": 9.809542884016476e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.809542884016476e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.809542884016476e-7
    },
    {
      "Step": 928,
      "brisk-pond-1 - train/learning_rate": 9.679252391967175e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.679252391967175e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.679252391967175e-7
    },
    {
      "Step": 929,
      "brisk-pond-1 - train/learning_rate": 9.549788936821048e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.549788936821048e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.549788936821048e-7
    },
    {
      "Step": 930,
      "brisk-pond-1 - train/learning_rate": 9.421153704031672e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.421153704031672e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.421153704031672e-7
    },
    {
      "Step": 931,
      "brisk-pond-1 - train/learning_rate": 9.293347871468872e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.293347871468872e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.293347871468872e-7
    },
    {
      "Step": 932,
      "brisk-pond-1 - train/learning_rate": 9.166372609407981e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.166372609407981e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.166372609407981e-7
    },
    {
      "Step": 933,
      "brisk-pond-1 - train/learning_rate": 9.040229080519037e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 9.040229080519037e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 9.040229080519037e-7
    },
    {
      "Step": 934,
      "brisk-pond-1 - train/learning_rate": 8.914918439856157e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.914918439856157e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.914918439856157e-7
    },
    {
      "Step": 935,
      "brisk-pond-1 - train/learning_rate": 8.790441834847008e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.790441834847008e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.790441834847008e-7
    },
    {
      "Step": 936,
      "brisk-pond-1 - train/learning_rate": 8.666800405282295e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.666800405282295e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.666800405282295e-7
    },
    {
      "Step": 937,
      "brisk-pond-1 - train/learning_rate": 8.54399528330524e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.54399528330524e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.54399528330524e-7
    },
    {
      "Step": 938,
      "brisk-pond-1 - train/learning_rate": 8.422027593401328e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.422027593401328e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.422027593401328e-7
    },
    {
      "Step": 939,
      "brisk-pond-1 - train/learning_rate": 8.300898452387895e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.300898452387895e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.300898452387895e-7
    },
    {
      "Step": 940,
      "brisk-pond-1 - train/learning_rate": 8.180608969404069e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.180608969404069e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.180608969404069e-7
    },
    {
      "Step": 941,
      "brisk-pond-1 - train/learning_rate": 8.061160245900412e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 8.061160245900412e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 8.061160245900412e-7
    },
    {
      "Step": 942,
      "brisk-pond-1 - train/learning_rate": 7.942553375628959e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.942553375628959e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.942553375628959e-7
    },
    {
      "Step": 943,
      "brisk-pond-1 - train/learning_rate": 7.824789444633208e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.824789444633208e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.824789444633208e-7
    },
    {
      "Step": 944,
      "brisk-pond-1 - train/learning_rate": 7.70786953123811e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.70786953123811e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.70786953123811e-7
    },
    {
      "Step": 945,
      "brisk-pond-1 - train/learning_rate": 7.591794706040257e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.591794706040257e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.591794706040257e-7
    },
    {
      "Step": 946,
      "brisk-pond-1 - train/learning_rate": 7.476566031898025e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.476566031898025e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.476566031898025e-7
    },
    {
      "Step": 947,
      "brisk-pond-1 - train/learning_rate": 7.36218456392187e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.36218456392187e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.36218456392187e-7
    },
    {
      "Step": 948,
      "brisk-pond-1 - train/learning_rate": 7.248651349464675e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.248651349464675e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.248651349464675e-7
    },
    {
      "Step": 949,
      "brisk-pond-1 - train/learning_rate": 7.135967428112134e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.135967428112134e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.135967428112134e-7
    },
    {
      "Step": 950,
      "brisk-pond-1 - train/learning_rate": 7.024133831673286e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 7.024133831673286e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 7.024133831673286e-7
    },
    {
      "Step": 951,
      "brisk-pond-1 - train/learning_rate": 6.913151584170985e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.913151584170985e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.913151584170985e-7
    },
    {
      "Step": 952,
      "brisk-pond-1 - train/learning_rate": 6.803021701832591e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.803021701832591e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.803021701832591e-7
    },
    {
      "Step": 953,
      "brisk-pond-1 - train/learning_rate": 6.693745193080614e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.693745193080614e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.693745193080614e-7
    },
    {
      "Step": 954,
      "brisk-pond-1 - train/learning_rate": 6.585323058523552e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.585323058523552e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.585323058523552e-7
    },
    {
      "Step": 955,
      "brisk-pond-1 - train/learning_rate": 6.477756290946657e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.477756290946657e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.477756290946657e-7
    },
    {
      "Step": 956,
      "brisk-pond-1 - train/learning_rate": 6.371045875302862e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.371045875302862e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.371045875302862e-7
    },
    {
      "Step": 957,
      "brisk-pond-1 - train/learning_rate": 6.265192788703766e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.265192788703766e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.265192788703766e-7
    },
    {
      "Step": 958,
      "brisk-pond-1 - train/learning_rate": 6.160198000410744e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.160198000410744e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.160198000410744e-7
    },
    {
      "Step": 959,
      "brisk-pond-1 - train/learning_rate": 6.056062471825986e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 6.056062471825986e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 6.056062471825986e-7
    },
    {
      "Step": 960,
      "brisk-pond-1 - train/learning_rate": 5.952787156483708e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.952787156483708e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.952787156483708e-7
    },
    {
      "Step": 961,
      "brisk-pond-1 - train/learning_rate": 5.850373000041487e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.850373000041487e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.850373000041487e-7
    },
    {
      "Step": 962,
      "brisk-pond-1 - train/learning_rate": 5.748820940271482e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.748820940271482e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.748820940271482e-7
    },
    {
      "Step": 963,
      "brisk-pond-1 - train/learning_rate": 5.648131907052013e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.648131907052013e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.648131907052013e-7
    },
    {
      "Step": 964,
      "brisk-pond-1 - train/learning_rate": 5.548306822358906e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.548306822358906e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.548306822358906e-7
    },
    {
      "Step": 965,
      "brisk-pond-1 - train/learning_rate": 5.449346600257077e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.449346600257077e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.449346600257077e-7
    },
    {
      "Step": 966,
      "brisk-pond-1 - train/learning_rate": 5.351252146892227e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.351252146892227e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.351252146892227e-7
    },
    {
      "Step": 967,
      "brisk-pond-1 - train/learning_rate": 5.25402436048249e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.25402436048249e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.25402436048249e-7
    },
    {
      "Step": 968,
      "brisk-pond-1 - train/learning_rate": 5.157664131310203e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.157664131310203e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.157664131310203e-7
    },
    {
      "Step": 969,
      "brisk-pond-1 - train/learning_rate": 5.062172341713789e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 5.062172341713789e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 5.062172341713789e-7
    },
    {
      "Step": 970,
      "brisk-pond-1 - train/learning_rate": 4.967549866079646e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.967549866079646e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.967549866079646e-7
    },
    {
      "Step": 971,
      "brisk-pond-1 - train/learning_rate": 4.873797570834183e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.873797570834183e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.873797570834183e-7
    },
    {
      "Step": 972,
      "brisk-pond-1 - train/learning_rate": 4.780916314435824e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.780916314435824e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.780916314435824e-7
    },
    {
      "Step": 973,
      "brisk-pond-1 - train/learning_rate": 4.6889069473672e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.6889069473672e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.6889069473672e-7
    },
    {
      "Step": 974,
      "brisk-pond-1 - train/learning_rate": 4.5977703121273363e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.5977703121273363e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.5977703121273363e-7
    },
    {
      "Step": 975,
      "brisk-pond-1 - train/learning_rate": 4.5075072432239187e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.5075072432239187e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.5075072432239187e-7
    },
    {
      "Step": 976,
      "brisk-pond-1 - train/learning_rate": 4.4181185671657634e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.4181185671657634e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.4181185671657634e-7
    },
    {
      "Step": 977,
      "brisk-pond-1 - train/learning_rate": 4.32960510245507e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.32960510245507e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.32960510245507e-7
    },
    {
      "Step": 978,
      "brisk-pond-1 - train/learning_rate": 4.241967659580071e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.241967659580071e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.241967659580071e-7
    },
    {
      "Step": 979,
      "brisk-pond-1 - train/learning_rate": 4.155207041007525e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.155207041007525e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.155207041007525e-7
    },
    {
      "Step": 980,
      "brisk-pond-1 - train/learning_rate": 4.0693240411754265e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 4.0693240411754265e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 4.0693240411754265e-7
    },
    {
      "Step": 981,
      "brisk-pond-1 - train/learning_rate": 3.9843194464857293e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.9843194464857293e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.9843194464857293e-7
    },
    {
      "Step": 982,
      "brisk-pond-1 - train/learning_rate": 3.900194035297078e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.900194035297078e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.900194035297078e-7
    },
    {
      "Step": 983,
      "brisk-pond-1 - train/learning_rate": 3.816948577917756e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.816948577917756e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.816948577917756e-7
    },
    {
      "Step": 984,
      "brisk-pond-1 - train/learning_rate": 3.7345838365985933e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.7345838365985933e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.7345838365985933e-7
    },
    {
      "Step": 985,
      "brisk-pond-1 - train/learning_rate": 3.653100565526013e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.653100565526013e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.653100565526013e-7
    },
    {
      "Step": 986,
      "brisk-pond-1 - train/learning_rate": 3.5724995108151086e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.5724995108151086e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.5724995108151086e-7
    },
    {
      "Step": 987,
      "brisk-pond-1 - train/learning_rate": 3.492781410502777e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.492781410502777e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.492781410502777e-7
    },
    {
      "Step": 988,
      "brisk-pond-1 - train/learning_rate": 3.4139469945410174e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.4139469945410174e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.4139469945410174e-7
    },
    {
      "Step": 989,
      "brisk-pond-1 - train/learning_rate": 3.3359969847902687e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.3359969847902687e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.3359969847902687e-7
    },
    {
      "Step": 990,
      "brisk-pond-1 - train/learning_rate": 3.2589320950127014e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.2589320950127014e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.2589320950127014e-7
    },
    {
      "Step": 991,
      "brisk-pond-1 - train/learning_rate": 3.1827530308657484e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.1827530308657484e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.1827530308657484e-7
    },
    {
      "Step": 992,
      "brisk-pond-1 - train/learning_rate": 3.107460489895675e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.107460489895675e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.107460489895675e-7
    },
    {
      "Step": 993,
      "brisk-pond-1 - train/learning_rate": 3.033055161531073e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 3.033055161531073e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 3.033055161531073e-7
    },
    {
      "Step": 994,
      "brisk-pond-1 - train/learning_rate": 2.959537727076711e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.959537727076711e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.959537727076711e-7
    },
    {
      "Step": 995,
      "brisk-pond-1 - train/learning_rate": 2.886908859707149e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.886908859707149e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.886908859707149e-7
    },
    {
      "Step": 996,
      "brisk-pond-1 - train/learning_rate": 2.8151692244606677e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.8151692244606677e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.8151692244606677e-7
    },
    {
      "Step": 997,
      "brisk-pond-1 - train/learning_rate": 2.744319478233104e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.744319478233104e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.744319478233104e-7
    },
    {
      "Step": 998,
      "brisk-pond-1 - train/learning_rate": 2.6743602697719364e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.6743602697719364e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.6743602697719364e-7
    },
    {
      "Step": 999,
      "brisk-pond-1 - train/learning_rate": 2.605292239670254e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.605292239670254e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.605292239670254e-7
    },
    {
      "Step": 1000,
      "brisk-pond-1 - train/learning_rate": 2.5371160203609303e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.5371160203609303e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.5371160203609303e-7
    },
    {
      "Step": 1001,
      "brisk-pond-1 - train/learning_rate": 2.4698322361108027e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.4698322361108027e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.4698322361108027e-7
    },
    {
      "Step": 1002,
      "brisk-pond-1 - train/learning_rate": 2.403441503015025e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.403441503015025e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.403441503015025e-7
    },
    {
      "Step": 1003,
      "brisk-pond-1 - train/learning_rate": 2.3379444289913344e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.3379444289913344e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.3379444289913344e-7
    },
    {
      "Step": 1005,
      "brisk-pond-1 - train/learning_rate": 2.27334161377456e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.27334161377456e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.27334161377456e-7
    },
    {
      "Step": 1006,
      "brisk-pond-1 - train/learning_rate": 2.2096336489111025e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.2096336489111025e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.2096336489111025e-7
    },
    {
      "Step": 1007,
      "brisk-pond-1 - train/learning_rate": 2.1468211177534725e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.1468211177534725e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.1468211177534725e-7
    },
    {
      "Step": 1008,
      "brisk-pond-1 - train/learning_rate": 2.0849045954550617e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.0849045954550617e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.0849045954550617e-7
    },
    {
      "Step": 1009,
      "brisk-pond-1 - train/learning_rate": 2.0238846489647578e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 2.0238846489647578e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 2.0238846489647578e-7
    },
    {
      "Step": 1010,
      "brisk-pond-1 - train/learning_rate": 1.975714602103118e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.975714602103118e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.975714602103118e-7
    },
    {
      "Step": 1011,
      "brisk-pond-1 - train/learning_rate": 1.9163098945702008e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.9163098945702008e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.9163098945702008e-7
    },
    {
      "Step": 1012,
      "brisk-pond-1 - train/learning_rate": 1.8578033066107392e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.8578033066107392e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.8578033066107392e-7
    },
    {
      "Step": 1013,
      "brisk-pond-1 - train/learning_rate": 1.8001953739499977e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.8001953739499977e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.8001953739499977e-7
    },
    {
      "Step": 1014,
      "brisk-pond-1 - train/learning_rate": 1.743486624084556e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.743486624084556e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.743486624084556e-7
    },
    {
      "Step": 1015,
      "brisk-pond-1 - train/learning_rate": 1.687677576277502e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.687677576277502e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.687677576277502e-7
    },
    {
      "Step": 1016,
      "brisk-pond-1 - train/learning_rate": 1.6327687415536364e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.6327687415536364e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.6327687415536364e-7
    },
    {
      "Step": 1017,
      "brisk-pond-1 - train/learning_rate": 1.5787606226948082e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.5787606226948082e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.5787606226948082e-7
    },
    {
      "Step": 1018,
      "brisk-pond-1 - train/learning_rate": 1.5256537142352977e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.5256537142352977e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.5256537142352977e-7
    },
    {
      "Step": 1019,
      "brisk-pond-1 - train/learning_rate": 1.473448502457342e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.473448502457342e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.473448502457342e-7
    },
    {
      "Step": 1020,
      "brisk-pond-1 - train/learning_rate": 1.422145465386604e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.422145465386604e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.422145465386604e-7
    },
    {
      "Step": 1021,
      "brisk-pond-1 - train/learning_rate": 1.3717450727878667e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.3717450727878667e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.3717450727878667e-7
    },
    {
      "Step": 1022,
      "brisk-pond-1 - train/learning_rate": 1.3222477861606575e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.3222477861606575e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.3222477861606575e-7
    },
    {
      "Step": 1023,
      "brisk-pond-1 - train/learning_rate": 1.2736540587351076e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.2736540587351076e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.2736540587351076e-7
    },
    {
      "Step": 1024,
      "brisk-pond-1 - train/learning_rate": 1.225964335467733e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.225964335467733e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.225964335467733e-7
    },
    {
      "Step": 1025,
      "brisk-pond-1 - train/learning_rate": 1.1791790530374048e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.1791790530374048e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.1791790530374048e-7
    },
    {
      "Step": 1026,
      "brisk-pond-1 - train/learning_rate": 1.1332986398413181e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.1332986398413181e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.1332986398413181e-7
    },
    {
      "Step": 1027,
      "brisk-pond-1 - train/learning_rate": 1.0883235159910632e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.0883235159910632e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.0883235159910632e-7
    },
    {
      "Step": 1028,
      "brisk-pond-1 - train/learning_rate": 1.0442540933088385e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.0442540933088385e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.0442540933088385e-7
    },
    {
      "Step": 1029,
      "brisk-pond-1 - train/learning_rate": 1.001090775323621e-7,
      "brisk-pond-1 - train/learning_rate__MIN": 1.001090775323621e-7,
      "brisk-pond-1 - train/learning_rate__MAX": 1.001090775323621e-7
    },
    {
      "Step": 1030,
      "brisk-pond-1 - train/learning_rate": 9.58833957267491e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 9.58833957267491e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 9.58833957267491e-8
    },
    {
      "Step": 1031,
      "brisk-pond-1 - train/learning_rate": 9.174840260719909e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 9.174840260719909e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 9.174840260719909e-8
    },
    {
      "Step": 1032,
      "brisk-pond-1 - train/learning_rate": 8.770413603646389e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 8.770413603646389e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 8.770413603646389e-8
    },
    {
      "Step": 1033,
      "brisk-pond-1 - train/learning_rate": 8.375063304654208e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 8.375063304654208e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 8.375063304654208e-8
    },
    {
      "Step": 1034,
      "brisk-pond-1 - train/learning_rate": 7.988792983833704e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 7.988792983833704e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 7.988792983833704e-8
    },
    {
      "Step": 1035,
      "brisk-pond-1 - train/learning_rate": 7.61160617813328e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 7.61160617813328e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 7.61160617813328e-8
    },
    {
      "Step": 1036,
      "brisk-pond-1 - train/learning_rate": 7.243506341326312e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 7.243506341326312e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 7.243506341326312e-8
    },
    {
      "Step": 1037,
      "brisk-pond-1 - train/learning_rate": 6.884496843980182e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 6.884496843980182e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 6.884496843980182e-8
    },
    {
      "Step": 1038,
      "brisk-pond-1 - train/learning_rate": 6.534580973424853e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 6.534580973424853e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 6.534580973424853e-8
    },
    {
      "Step": 1039,
      "brisk-pond-1 - train/learning_rate": 6.193761933722787e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 6.193761933722787e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 6.193761933722787e-8
    },
    {
      "Step": 1040,
      "brisk-pond-1 - train/learning_rate": 5.862042845640403e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 5.862042845640403e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 5.862042845640403e-8
    },
    {
      "Step": 1041,
      "brisk-pond-1 - train/learning_rate": 5.539426746618337e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 5.539426746618337e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 5.539426746618337e-8
    },
    {
      "Step": 1042,
      "brisk-pond-1 - train/learning_rate": 5.22591659074434e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 5.22591659074434e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 5.22591659074434e-8
    },
    {
      "Step": 1043,
      "brisk-pond-1 - train/learning_rate": 4.921515248726305e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 4.921515248726305e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 4.921515248726305e-8
    },
    {
      "Step": 1044,
      "brisk-pond-1 - train/learning_rate": 4.6262255078655115e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 4.6262255078655115e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 4.6262255078655115e-8
    },
    {
      "Step": 1045,
      "brisk-pond-1 - train/learning_rate": 4.340050072031421e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 4.340050072031421e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 4.340050072031421e-8
    },
    {
      "Step": 1046,
      "brisk-pond-1 - train/learning_rate": 4.0629915616369196e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 4.0629915616369196e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 4.0629915616369196e-8
    },
    {
      "Step": 1047,
      "brisk-pond-1 - train/learning_rate": 3.795052513614117e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 3.795052513614117e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 3.795052513614117e-8
    },
    {
      "Step": 1048,
      "brisk-pond-1 - train/learning_rate": 3.536235381391473e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 3.536235381391473e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 3.536235381391473e-8
    },
    {
      "Step": 1049,
      "brisk-pond-1 - train/learning_rate": 3.286542534870818e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 3.286542534870818e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 3.286542534870818e-8
    },
    {
      "Step": 1050,
      "brisk-pond-1 - train/learning_rate": 3.045976260406258e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 3.045976260406258e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 3.045976260406258e-8
    },
    {
      "Step": 1051,
      "brisk-pond-1 - train/learning_rate": 2.814538760782748e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 2.814538760782748e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 2.814538760782748e-8
    },
    {
      "Step": 1052,
      "brisk-pond-1 - train/learning_rate": 2.592232155195995e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 2.592232155195995e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 2.592232155195995e-8
    },
    {
      "Step": 1053,
      "brisk-pond-1 - train/learning_rate": 2.379058479233476e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 2.379058479233476e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 2.379058479233476e-8
    },
    {
      "Step": 1054,
      "brisk-pond-1 - train/learning_rate": 2.1750196848551174e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 2.1750196848551174e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 2.1750196848551174e-8
    },
    {
      "Step": 1055,
      "brisk-pond-1 - train/learning_rate": 1.9801176403762e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.9801176403762e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.9801176403762e-8
    },
    {
      "Step": 1056,
      "brisk-pond-1 - train/learning_rate": 1.7943541304494826e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.7943541304494826e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.7943541304494826e-8
    },
    {
      "Step": 1057,
      "brisk-pond-1 - train/learning_rate": 1.6177308560493264e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.6177308560493264e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.6177308560493264e-8
    },
    {
      "Step": 1058,
      "brisk-pond-1 - train/learning_rate": 1.4502494344560413e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.4502494344560413e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.4502494344560413e-8
    },
    {
      "Step": 1059,
      "brisk-pond-1 - train/learning_rate": 1.2919113992411192e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.2919113992411192e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.2919113992411192e-8
    },
    {
      "Step": 1060,
      "brisk-pond-1 - train/learning_rate": 1.1427182002529125e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.1427182002529125e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.1427182002529125e-8
    },
    {
      "Step": 1061,
      "brisk-pond-1 - train/learning_rate": 1.0026712036038666e-8,
      "brisk-pond-1 - train/learning_rate__MIN": 1.0026712036038666e-8,
      "brisk-pond-1 - train/learning_rate__MAX": 1.0026712036038666e-8
    },
    {
      "Step": 1062,
      "brisk-pond-1 - train/learning_rate": 8.717716916573083e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 8.717716916573083e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 8.717716916573083e-9
    },
    {
      "Step": 1063,
      "brisk-pond-1 - train/learning_rate": 7.50020863016565e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 7.50020863016565e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 7.50020863016565e-9
    },
    {
      "Step": 1064,
      "brisk-pond-1 - train/learning_rate": 6.3741983251308646e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 6.3741983251308646e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 6.3741983251308646e-9
    },
    {
      "Step": 1065,
      "brisk-pond-1 - train/learning_rate": 5.339696311968956e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 5.339696311968956e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 5.339696311968956e-9
    },
    {
      "Step": 1066,
      "brisk-pond-1 - train/learning_rate": 4.3967120632715244e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 4.3967120632715244e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 4.3967120632715244e-9
    },
    {
      "Step": 1067,
      "brisk-pond-1 - train/learning_rate": 3.5452542136271695e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 3.5452542136271695e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 3.5452542136271695e-9
    },
    {
      "Step": 1068,
      "brisk-pond-1 - train/learning_rate": 2.785330559552657e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 2.785330559552657e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 2.785330559552657e-9
    },
    {
      "Step": 1069,
      "brisk-pond-1 - train/learning_rate": 2.1169480594140925e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 2.1169480594140925e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 2.1169480594140925e-9
    },
    {
      "Step": 1070,
      "brisk-pond-1 - train/learning_rate": 1.540112833366969e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 1.540112833366969e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 1.540112833366969e-9
    },
    {
      "Step": 1071,
      "brisk-pond-1 - train/learning_rate": 1.054830163298437e-9,
      "brisk-pond-1 - train/learning_rate__MIN": 1.054830163298437e-9,
      "brisk-pond-1 - train/learning_rate__MAX": 1.054830163298437e-9
    },
    {
      "Step": 1072,
      "brisk-pond-1 - train/learning_rate": 6.611044927806732e-10,
      "brisk-pond-1 - train/learning_rate__MIN": 6.611044927806732e-10,
      "brisk-pond-1 - train/learning_rate__MAX": 6.611044927806732e-10
    },
    {
      "Step": 1073,
      "brisk-pond-1 - train/learning_rate": 3.5893942702758256e-10,
      "brisk-pond-1 - train/learning_rate__MIN": 3.5893942702758256e-10,
      "brisk-pond-1 - train/learning_rate__MAX": 3.5893942702758256e-10
    },
    {
      "Step": 1074,
      "brisk-pond-1 - train/learning_rate": 1.4833773286371256e-10,
      "brisk-pond-1 - train/learning_rate__MIN": 1.4833773286371256e-10,
      "brisk-pond-1 - train/learning_rate__MAX": 1.4833773286371256e-10
    }
  ]

  const step_data = [
    {
      "Step": 0,
      "brisk-pond-1 - train/global_step": 5,
      "brisk-pond-1 - train/global_step__MIN": 5,
      "brisk-pond-1 - train/global_step__MAX": 5
    },
    {
      "Step": 1,
      "brisk-pond-1 - train/global_step": 10,
      "brisk-pond-1 - train/global_step__MIN": 10,
      "brisk-pond-1 - train/global_step__MAX": 10
    },
    {
      "Step": 2,
      "brisk-pond-1 - train/global_step": 15,
      "brisk-pond-1 - train/global_step__MIN": 15,
      "brisk-pond-1 - train/global_step__MAX": 15
    },
    {
      "Step": 3,
      "brisk-pond-1 - train/global_step": 20,
      "brisk-pond-1 - train/global_step__MIN": 20,
      "brisk-pond-1 - train/global_step__MAX": 20
    },
    {
      "Step": 4,
      "brisk-pond-1 - train/global_step": 25,
      "brisk-pond-1 - train/global_step__MIN": 25,
      "brisk-pond-1 - train/global_step__MAX": 25
    },
    {
      "Step": 5,
      "brisk-pond-1 - train/global_step": 30,
      "brisk-pond-1 - train/global_step__MIN": 30,
      "brisk-pond-1 - train/global_step__MAX": 30
    },
    {
      "Step": 6,
      "brisk-pond-1 - train/global_step": 35,
      "brisk-pond-1 - train/global_step__MIN": 35,
      "brisk-pond-1 - train/global_step__MAX": 35
    },
    {
      "Step": 7,
      "brisk-pond-1 - train/global_step": 40,
      "brisk-pond-1 - train/global_step__MIN": 40,
      "brisk-pond-1 - train/global_step__MAX": 40
    },
    {
      "Step": 8,
      "brisk-pond-1 - train/global_step": 45,
      "brisk-pond-1 - train/global_step__MIN": 45,
      "brisk-pond-1 - train/global_step__MAX": 45
    },
    {
      "Step": 9,
      "brisk-pond-1 - train/global_step": 50,
      "brisk-pond-1 - train/global_step__MIN": 50,
      "brisk-pond-1 - train/global_step__MAX": 50
    },
    {
      "Step": 10,
      "brisk-pond-1 - train/global_step": 55,
      "brisk-pond-1 - train/global_step__MIN": 55,
      "brisk-pond-1 - train/global_step__MAX": 55
    },
    {
      "Step": 11,
      "brisk-pond-1 - train/global_step": 60,
      "brisk-pond-1 - train/global_step__MIN": 60,
      "brisk-pond-1 - train/global_step__MAX": 60
    },
    {
      "Step": 12,
      "brisk-pond-1 - train/global_step": 65,
      "brisk-pond-1 - train/global_step__MIN": 65,
      "brisk-pond-1 - train/global_step__MAX": 65
    },
    {
      "Step": 13,
      "brisk-pond-1 - train/global_step": 70,
      "brisk-pond-1 - train/global_step__MIN": 70,
      "brisk-pond-1 - train/global_step__MAX": 70
    },
    {
      "Step": 14,
      "brisk-pond-1 - train/global_step": 75,
      "brisk-pond-1 - train/global_step__MIN": 75,
      "brisk-pond-1 - train/global_step__MAX": 75
    },
    {
      "Step": 15,
      "brisk-pond-1 - train/global_step": 80,
      "brisk-pond-1 - train/global_step__MIN": 80,
      "brisk-pond-1 - train/global_step__MAX": 80
    },
    {
      "Step": 16,
      "brisk-pond-1 - train/global_step": 85,
      "brisk-pond-1 - train/global_step__MIN": 85,
      "brisk-pond-1 - train/global_step__MAX": 85
    },
    {
      "Step": 17,
      "brisk-pond-1 - train/global_step": 90,
      "brisk-pond-1 - train/global_step__MIN": 90,
      "brisk-pond-1 - train/global_step__MAX": 90
    },
    {
      "Step": 18,
      "brisk-pond-1 - train/global_step": 95,
      "brisk-pond-1 - train/global_step__MIN": 95,
      "brisk-pond-1 - train/global_step__MAX": 95
    },
    {
      "Step": 19,
      "brisk-pond-1 - train/global_step": 100,
      "brisk-pond-1 - train/global_step__MIN": 100,
      "brisk-pond-1 - train/global_step__MAX": 100
    },
    {
      "Step": 20,
      "brisk-pond-1 - train/global_step": 105,
      "brisk-pond-1 - train/global_step__MIN": 105,
      "brisk-pond-1 - train/global_step__MAX": 105
    },
    {
      "Step": 21,
      "brisk-pond-1 - train/global_step": 110,
      "brisk-pond-1 - train/global_step__MIN": 110,
      "brisk-pond-1 - train/global_step__MAX": 110
    },
    {
      "Step": 22,
      "brisk-pond-1 - train/global_step": 115,
      "brisk-pond-1 - train/global_step__MIN": 115,
      "brisk-pond-1 - train/global_step__MAX": 115
    },
    {
      "Step": 23,
      "brisk-pond-1 - train/global_step": 120,
      "brisk-pond-1 - train/global_step__MIN": 120,
      "brisk-pond-1 - train/global_step__MAX": 120
    },
    {
      "Step": 24,
      "brisk-pond-1 - train/global_step": 125,
      "brisk-pond-1 - train/global_step__MIN": 125,
      "brisk-pond-1 - train/global_step__MAX": 125
    },
    {
      "Step": 25,
      "brisk-pond-1 - train/global_step": 130,
      "brisk-pond-1 - train/global_step__MIN": 130,
      "brisk-pond-1 - train/global_step__MAX": 130
    },
    {
      "Step": 26,
      "brisk-pond-1 - train/global_step": 135,
      "brisk-pond-1 - train/global_step__MIN": 135,
      "brisk-pond-1 - train/global_step__MAX": 135
    },
    {
      "Step": 27,
      "brisk-pond-1 - train/global_step": 140,
      "brisk-pond-1 - train/global_step__MIN": 140,
      "brisk-pond-1 - train/global_step__MAX": 140
    },
    {
      "Step": 28,
      "brisk-pond-1 - train/global_step": 145,
      "brisk-pond-1 - train/global_step__MIN": 145,
      "brisk-pond-1 - train/global_step__MAX": 145
    },
    {
      "Step": 29,
      "brisk-pond-1 - train/global_step": 150,
      "brisk-pond-1 - train/global_step__MIN": 150,
      "brisk-pond-1 - train/global_step__MAX": 150
    },
    {
      "Step": 30,
      "brisk-pond-1 - train/global_step": 155,
      "brisk-pond-1 - train/global_step__MIN": 155,
      "brisk-pond-1 - train/global_step__MAX": 155
    },
    {
      "Step": 31,
      "brisk-pond-1 - train/global_step": 160,
      "brisk-pond-1 - train/global_step__MIN": 160,
      "brisk-pond-1 - train/global_step__MAX": 160
    },
    {
      "Step": 32,
      "brisk-pond-1 - train/global_step": 165,
      "brisk-pond-1 - train/global_step__MIN": 165,
      "brisk-pond-1 - train/global_step__MAX": 165
    },
    {
      "Step": 33,
      "brisk-pond-1 - train/global_step": 170,
      "brisk-pond-1 - train/global_step__MIN": 170,
      "brisk-pond-1 - train/global_step__MAX": 170
    },
    {
      "Step": 34,
      "brisk-pond-1 - train/global_step": 175,
      "brisk-pond-1 - train/global_step__MIN": 175,
      "brisk-pond-1 - train/global_step__MAX": 175
    },
    {
      "Step": 35,
      "brisk-pond-1 - train/global_step": 180,
      "brisk-pond-1 - train/global_step__MIN": 180,
      "brisk-pond-1 - train/global_step__MAX": 180
    },
    {
      "Step": 36,
      "brisk-pond-1 - train/global_step": 185,
      "brisk-pond-1 - train/global_step__MIN": 185,
      "brisk-pond-1 - train/global_step__MAX": 185
    },
    {
      "Step": 37,
      "brisk-pond-1 - train/global_step": 190,
      "brisk-pond-1 - train/global_step__MIN": 190,
      "brisk-pond-1 - train/global_step__MAX": 190
    },
    {
      "Step": 38,
      "brisk-pond-1 - train/global_step": 195,
      "brisk-pond-1 - train/global_step__MIN": 195,
      "brisk-pond-1 - train/global_step__MAX": 195
    },
    {
      "Step": 39,
      "brisk-pond-1 - train/global_step": 200,
      "brisk-pond-1 - train/global_step__MIN": 200,
      "brisk-pond-1 - train/global_step__MAX": 200
    },
    {
      "Step": 40,
      "brisk-pond-1 - train/global_step": 205,
      "brisk-pond-1 - train/global_step__MIN": 205,
      "brisk-pond-1 - train/global_step__MAX": 205
    },
    {
      "Step": 41,
      "brisk-pond-1 - train/global_step": 210,
      "brisk-pond-1 - train/global_step__MIN": 210,
      "brisk-pond-1 - train/global_step__MAX": 210
    },
    {
      "Step": 42,
      "brisk-pond-1 - train/global_step": 215,
      "brisk-pond-1 - train/global_step__MIN": 215,
      "brisk-pond-1 - train/global_step__MAX": 215
    },
    {
      "Step": 43,
      "brisk-pond-1 - train/global_step": 220,
      "brisk-pond-1 - train/global_step__MIN": 220,
      "brisk-pond-1 - train/global_step__MAX": 220
    },
    {
      "Step": 44,
      "brisk-pond-1 - train/global_step": 225,
      "brisk-pond-1 - train/global_step__MIN": 225,
      "brisk-pond-1 - train/global_step__MAX": 225
    },
    {
      "Step": 45,
      "brisk-pond-1 - train/global_step": 230,
      "brisk-pond-1 - train/global_step__MIN": 230,
      "brisk-pond-1 - train/global_step__MAX": 230
    },
    {
      "Step": 46,
      "brisk-pond-1 - train/global_step": 235,
      "brisk-pond-1 - train/global_step__MIN": 235,
      "brisk-pond-1 - train/global_step__MAX": 235
    },
    {
      "Step": 47,
      "brisk-pond-1 - train/global_step": 240,
      "brisk-pond-1 - train/global_step__MIN": 240,
      "brisk-pond-1 - train/global_step__MAX": 240
    },
    {
      "Step": 48,
      "brisk-pond-1 - train/global_step": 245,
      "brisk-pond-1 - train/global_step__MIN": 245,
      "brisk-pond-1 - train/global_step__MAX": 245
    },
    {
      "Step": 49,
      "brisk-pond-1 - train/global_step": 250,
      "brisk-pond-1 - train/global_step__MIN": 250,
      "brisk-pond-1 - train/global_step__MAX": 250
    },
    {
      "Step": 50,
      "brisk-pond-1 - train/global_step": 255,
      "brisk-pond-1 - train/global_step__MIN": 255,
      "brisk-pond-1 - train/global_step__MAX": 255
    },
    {
      "Step": 51,
      "brisk-pond-1 - train/global_step": 260,
      "brisk-pond-1 - train/global_step__MIN": 260,
      "brisk-pond-1 - train/global_step__MAX": 260
    },
    {
      "Step": 52,
      "brisk-pond-1 - train/global_step": 265,
      "brisk-pond-1 - train/global_step__MIN": 265,
      "brisk-pond-1 - train/global_step__MAX": 265
    },
    {
      "Step": 53,
      "brisk-pond-1 - train/global_step": 270,
      "brisk-pond-1 - train/global_step__MIN": 270,
      "brisk-pond-1 - train/global_step__MAX": 270
    },
    {
      "Step": 54,
      "brisk-pond-1 - train/global_step": 275,
      "brisk-pond-1 - train/global_step__MIN": 275,
      "brisk-pond-1 - train/global_step__MAX": 275
    },
    {
      "Step": 55,
      "brisk-pond-1 - train/global_step": 280,
      "brisk-pond-1 - train/global_step__MIN": 280,
      "brisk-pond-1 - train/global_step__MAX": 280
    },
    {
      "Step": 56,
      "brisk-pond-1 - train/global_step": 285,
      "brisk-pond-1 - train/global_step__MIN": 285,
      "brisk-pond-1 - train/global_step__MAX": 285
    },
    {
      "Step": 57,
      "brisk-pond-1 - train/global_step": 290,
      "brisk-pond-1 - train/global_step__MIN": 290,
      "brisk-pond-1 - train/global_step__MAX": 290
    },
    {
      "Step": 58,
      "brisk-pond-1 - train/global_step": 295,
      "brisk-pond-1 - train/global_step__MIN": 295,
      "brisk-pond-1 - train/global_step__MAX": 295
    },
    {
      "Step": 59,
      "brisk-pond-1 - train/global_step": 300,
      "brisk-pond-1 - train/global_step__MIN": 300,
      "brisk-pond-1 - train/global_step__MAX": 300
    },
    {
      "Step": 60,
      "brisk-pond-1 - train/global_step": 305,
      "brisk-pond-1 - train/global_step__MIN": 305,
      "brisk-pond-1 - train/global_step__MAX": 305
    },
    {
      "Step": 61,
      "brisk-pond-1 - train/global_step": 310,
      "brisk-pond-1 - train/global_step__MIN": 310,
      "brisk-pond-1 - train/global_step__MAX": 310
    },
    {
      "Step": 62,
      "brisk-pond-1 - train/global_step": 315,
      "brisk-pond-1 - train/global_step__MIN": 315,
      "brisk-pond-1 - train/global_step__MAX": 315
    },
    {
      "Step": 63,
      "brisk-pond-1 - train/global_step": 320,
      "brisk-pond-1 - train/global_step__MIN": 320,
      "brisk-pond-1 - train/global_step__MAX": 320
    },
    {
      "Step": 64,
      "brisk-pond-1 - train/global_step": 325,
      "brisk-pond-1 - train/global_step__MIN": 325,
      "brisk-pond-1 - train/global_step__MAX": 325
    },
    {
      "Step": 65,
      "brisk-pond-1 - train/global_step": 330,
      "brisk-pond-1 - train/global_step__MIN": 330,
      "brisk-pond-1 - train/global_step__MAX": 330
    },
    {
      "Step": 66,
      "brisk-pond-1 - train/global_step": 335,
      "brisk-pond-1 - train/global_step__MIN": 335,
      "brisk-pond-1 - train/global_step__MAX": 335
    },
    {
      "Step": 67,
      "brisk-pond-1 - train/global_step": 340,
      "brisk-pond-1 - train/global_step__MIN": 340,
      "brisk-pond-1 - train/global_step__MAX": 340
    },
    {
      "Step": 68,
      "brisk-pond-1 - train/global_step": 345,
      "brisk-pond-1 - train/global_step__MIN": 345,
      "brisk-pond-1 - train/global_step__MAX": 345
    },
    {
      "Step": 69,
      "brisk-pond-1 - train/global_step": 350,
      "brisk-pond-1 - train/global_step__MIN": 350,
      "brisk-pond-1 - train/global_step__MAX": 350
    },
    {
      "Step": 70,
      "brisk-pond-1 - train/global_step": 355,
      "brisk-pond-1 - train/global_step__MIN": 355,
      "brisk-pond-1 - train/global_step__MAX": 355
    },
    {
      "Step": 71,
      "brisk-pond-1 - train/global_step": 360,
      "brisk-pond-1 - train/global_step__MIN": 360,
      "brisk-pond-1 - train/global_step__MAX": 360
    },
    {
      "Step": 72,
      "brisk-pond-1 - train/global_step": 365,
      "brisk-pond-1 - train/global_step__MIN": 365,
      "brisk-pond-1 - train/global_step__MAX": 365
    },
    {
      "Step": 73,
      "brisk-pond-1 - train/global_step": 370,
      "brisk-pond-1 - train/global_step__MIN": 370,
      "brisk-pond-1 - train/global_step__MAX": 370
    },
    {
      "Step": 74,
      "brisk-pond-1 - train/global_step": 375,
      "brisk-pond-1 - train/global_step__MIN": 375,
      "brisk-pond-1 - train/global_step__MAX": 375
    },
    {
      "Step": 75,
      "brisk-pond-1 - train/global_step": 380,
      "brisk-pond-1 - train/global_step__MIN": 380,
      "brisk-pond-1 - train/global_step__MAX": 380
    },
    {
      "Step": 76,
      "brisk-pond-1 - train/global_step": 385,
      "brisk-pond-1 - train/global_step__MIN": 385,
      "brisk-pond-1 - train/global_step__MAX": 385
    },
    {
      "Step": 77,
      "brisk-pond-1 - train/global_step": 390,
      "brisk-pond-1 - train/global_step__MIN": 390,
      "brisk-pond-1 - train/global_step__MAX": 390
    },
    {
      "Step": 78,
      "brisk-pond-1 - train/global_step": 395,
      "brisk-pond-1 - train/global_step__MIN": 395,
      "brisk-pond-1 - train/global_step__MAX": 395
    },
    {
      "Step": 79,
      "brisk-pond-1 - train/global_step": 400,
      "brisk-pond-1 - train/global_step__MIN": 400,
      "brisk-pond-1 - train/global_step__MAX": 400
    },
    {
      "Step": 80,
      "brisk-pond-1 - train/global_step": 405,
      "brisk-pond-1 - train/global_step__MIN": 405,
      "brisk-pond-1 - train/global_step__MAX": 405
    },
    {
      "Step": 81,
      "brisk-pond-1 - train/global_step": 410,
      "brisk-pond-1 - train/global_step__MIN": 410,
      "brisk-pond-1 - train/global_step__MAX": 410
    },
    {
      "Step": 82,
      "brisk-pond-1 - train/global_step": 415,
      "brisk-pond-1 - train/global_step__MIN": 415,
      "brisk-pond-1 - train/global_step__MAX": 415
    },
    {
      "Step": 83,
      "brisk-pond-1 - train/global_step": 420,
      "brisk-pond-1 - train/global_step__MIN": 420,
      "brisk-pond-1 - train/global_step__MAX": 420
    },
    {
      "Step": 84,
      "brisk-pond-1 - train/global_step": 425,
      "brisk-pond-1 - train/global_step__MIN": 425,
      "brisk-pond-1 - train/global_step__MAX": 425
    },
    {
      "Step": 85,
      "brisk-pond-1 - train/global_step": 430,
      "brisk-pond-1 - train/global_step__MIN": 430,
      "brisk-pond-1 - train/global_step__MAX": 430
    },
    {
      "Step": 86,
      "brisk-pond-1 - train/global_step": 435,
      "brisk-pond-1 - train/global_step__MIN": 435,
      "brisk-pond-1 - train/global_step__MAX": 435
    },
    {
      "Step": 87,
      "brisk-pond-1 - train/global_step": 440,
      "brisk-pond-1 - train/global_step__MIN": 440,
      "brisk-pond-1 - train/global_step__MAX": 440
    },
    {
      "Step": 88,
      "brisk-pond-1 - train/global_step": 445,
      "brisk-pond-1 - train/global_step__MIN": 445,
      "brisk-pond-1 - train/global_step__MAX": 445
    },
    {
      "Step": 89,
      "brisk-pond-1 - train/global_step": 450,
      "brisk-pond-1 - train/global_step__MIN": 450,
      "brisk-pond-1 - train/global_step__MAX": 450
    },
    {
      "Step": 90,
      "brisk-pond-1 - train/global_step": 455,
      "brisk-pond-1 - train/global_step__MIN": 455,
      "brisk-pond-1 - train/global_step__MAX": 455
    },
    {
      "Step": 91,
      "brisk-pond-1 - train/global_step": 460,
      "brisk-pond-1 - train/global_step__MIN": 460,
      "brisk-pond-1 - train/global_step__MAX": 460
    },
    {
      "Step": 92,
      "brisk-pond-1 - train/global_step": 465,
      "brisk-pond-1 - train/global_step__MIN": 465,
      "brisk-pond-1 - train/global_step__MAX": 465
    },
    {
      "Step": 93,
      "brisk-pond-1 - train/global_step": 470,
      "brisk-pond-1 - train/global_step__MIN": 470,
      "brisk-pond-1 - train/global_step__MAX": 470
    },
    {
      "Step": 94,
      "brisk-pond-1 - train/global_step": 475,
      "brisk-pond-1 - train/global_step__MIN": 475,
      "brisk-pond-1 - train/global_step__MAX": 475
    },
    {
      "Step": 95,
      "brisk-pond-1 - train/global_step": 480,
      "brisk-pond-1 - train/global_step__MIN": 480,
      "brisk-pond-1 - train/global_step__MAX": 480
    },
    {
      "Step": 96,
      "brisk-pond-1 - train/global_step": 485,
      "brisk-pond-1 - train/global_step__MIN": 485,
      "brisk-pond-1 - train/global_step__MAX": 485
    },
    {
      "Step": 97,
      "brisk-pond-1 - train/global_step": 490,
      "brisk-pond-1 - train/global_step__MIN": 490,
      "brisk-pond-1 - train/global_step__MAX": 490
    },
    {
      "Step": 98,
      "brisk-pond-1 - train/global_step": 495,
      "brisk-pond-1 - train/global_step__MIN": 495,
      "brisk-pond-1 - train/global_step__MAX": 495
    },
    {
      "Step": 99,
      "brisk-pond-1 - train/global_step": 500,
      "brisk-pond-1 - train/global_step__MIN": 500,
      "brisk-pond-1 - train/global_step__MAX": 500
    },
    {
      "Step": 100,
      "brisk-pond-1 - train/global_step": 505,
      "brisk-pond-1 - train/global_step__MIN": 505,
      "brisk-pond-1 - train/global_step__MAX": 505
    },
    {
      "Step": 101,
      "brisk-pond-1 - train/global_step": 510,
      "brisk-pond-1 - train/global_step__MIN": 510,
      "brisk-pond-1 - train/global_step__MAX": 510
    },
    {
      "Step": 102,
      "brisk-pond-1 - train/global_step": 515,
      "brisk-pond-1 - train/global_step__MIN": 515,
      "brisk-pond-1 - train/global_step__MAX": 515
    },
    {
      "Step": 103,
      "brisk-pond-1 - train/global_step": 520,
      "brisk-pond-1 - train/global_step__MIN": 520,
      "brisk-pond-1 - train/global_step__MAX": 520
    },
    {
      "Step": 104,
      "brisk-pond-1 - train/global_step": 525,
      "brisk-pond-1 - train/global_step__MIN": 525,
      "brisk-pond-1 - train/global_step__MAX": 525
    },
    {
      "Step": 105,
      "brisk-pond-1 - train/global_step": 530,
      "brisk-pond-1 - train/global_step__MIN": 530,
      "brisk-pond-1 - train/global_step__MAX": 530
    },
    {
      "Step": 106,
      "brisk-pond-1 - train/global_step": 535,
      "brisk-pond-1 - train/global_step__MIN": 535,
      "brisk-pond-1 - train/global_step__MAX": 535
    },
    {
      "Step": 107,
      "brisk-pond-1 - train/global_step": 540,
      "brisk-pond-1 - train/global_step__MIN": 540,
      "brisk-pond-1 - train/global_step__MAX": 540
    },
    {
      "Step": 108,
      "brisk-pond-1 - train/global_step": 545,
      "brisk-pond-1 - train/global_step__MIN": 545,
      "brisk-pond-1 - train/global_step__MAX": 545
    },
    {
      "Step": 109,
      "brisk-pond-1 - train/global_step": 550,
      "brisk-pond-1 - train/global_step__MIN": 550,
      "brisk-pond-1 - train/global_step__MAX": 550
    },
    {
      "Step": 110,
      "brisk-pond-1 - train/global_step": 555,
      "brisk-pond-1 - train/global_step__MIN": 555,
      "brisk-pond-1 - train/global_step__MAX": 555
    },
    {
      "Step": 111,
      "brisk-pond-1 - train/global_step": 560,
      "brisk-pond-1 - train/global_step__MIN": 560,
      "brisk-pond-1 - train/global_step__MAX": 560
    },
    {
      "Step": 112,
      "brisk-pond-1 - train/global_step": 565,
      "brisk-pond-1 - train/global_step__MIN": 565,
      "brisk-pond-1 - train/global_step__MAX": 565
    },
    {
      "Step": 113,
      "brisk-pond-1 - train/global_step": 570,
      "brisk-pond-1 - train/global_step__MIN": 570,
      "brisk-pond-1 - train/global_step__MAX": 570
    },
    {
      "Step": 114,
      "brisk-pond-1 - train/global_step": 575,
      "brisk-pond-1 - train/global_step__MIN": 575,
      "brisk-pond-1 - train/global_step__MAX": 575
    },
    {
      "Step": 115,
      "brisk-pond-1 - train/global_step": 580,
      "brisk-pond-1 - train/global_step__MIN": 580,
      "brisk-pond-1 - train/global_step__MAX": 580
    },
    {
      "Step": 116,
      "brisk-pond-1 - train/global_step": 585,
      "brisk-pond-1 - train/global_step__MIN": 585,
      "brisk-pond-1 - train/global_step__MAX": 585
    },
    {
      "Step": 117,
      "brisk-pond-1 - train/global_step": 590,
      "brisk-pond-1 - train/global_step__MIN": 590,
      "brisk-pond-1 - train/global_step__MAX": 590
    },
    {
      "Step": 118,
      "brisk-pond-1 - train/global_step": 595,
      "brisk-pond-1 - train/global_step__MIN": 595,
      "brisk-pond-1 - train/global_step__MAX": 595
    },
    {
      "Step": 119,
      "brisk-pond-1 - train/global_step": 600,
      "brisk-pond-1 - train/global_step__MIN": 600,
      "brisk-pond-1 - train/global_step__MAX": 600
    },
    {
      "Step": 120,
      "brisk-pond-1 - train/global_step": 605,
      "brisk-pond-1 - train/global_step__MIN": 605,
      "brisk-pond-1 - train/global_step__MAX": 605
    },
    {
      "Step": 121,
      "brisk-pond-1 - train/global_step": 610,
      "brisk-pond-1 - train/global_step__MIN": 610,
      "brisk-pond-1 - train/global_step__MAX": 610
    },
    {
      "Step": 122,
      "brisk-pond-1 - train/global_step": 615,
      "brisk-pond-1 - train/global_step__MIN": 615,
      "brisk-pond-1 - train/global_step__MAX": 615
    },
    {
      "Step": 123,
      "brisk-pond-1 - train/global_step": 620,
      "brisk-pond-1 - train/global_step__MIN": 620,
      "brisk-pond-1 - train/global_step__MAX": 620
    },
    {
      "Step": 124,
      "brisk-pond-1 - train/global_step": 625,
      "brisk-pond-1 - train/global_step__MIN": 625,
      "brisk-pond-1 - train/global_step__MAX": 625
    },
    {
      "Step": 125,
      "brisk-pond-1 - train/global_step": 630,
      "brisk-pond-1 - train/global_step__MIN": 630,
      "brisk-pond-1 - train/global_step__MAX": 630
    },
    {
      "Step": 126,
      "brisk-pond-1 - train/global_step": 635,
      "brisk-pond-1 - train/global_step__MIN": 635,
      "brisk-pond-1 - train/global_step__MAX": 635
    },
    {
      "Step": 127,
      "brisk-pond-1 - train/global_step": 640,
      "brisk-pond-1 - train/global_step__MIN": 640,
      "brisk-pond-1 - train/global_step__MAX": 640
    },
    {
      "Step": 128,
      "brisk-pond-1 - train/global_step": 645,
      "brisk-pond-1 - train/global_step__MIN": 645,
      "brisk-pond-1 - train/global_step__MAX": 645
    },
    {
      "Step": 129,
      "brisk-pond-1 - train/global_step": 650,
      "brisk-pond-1 - train/global_step__MIN": 650,
      "brisk-pond-1 - train/global_step__MAX": 650
    },
    {
      "Step": 130,
      "brisk-pond-1 - train/global_step": 655,
      "brisk-pond-1 - train/global_step__MIN": 655,
      "brisk-pond-1 - train/global_step__MAX": 655
    },
    {
      "Step": 131,
      "brisk-pond-1 - train/global_step": 660,
      "brisk-pond-1 - train/global_step__MIN": 660,
      "brisk-pond-1 - train/global_step__MAX": 660
    },
    {
      "Step": 132,
      "brisk-pond-1 - train/global_step": 665,
      "brisk-pond-1 - train/global_step__MIN": 665,
      "brisk-pond-1 - train/global_step__MAX": 665
    },
    {
      "Step": 133,
      "brisk-pond-1 - train/global_step": 670,
      "brisk-pond-1 - train/global_step__MIN": 670,
      "brisk-pond-1 - train/global_step__MAX": 670
    },
    {
      "Step": 134,
      "brisk-pond-1 - train/global_step": 675,
      "brisk-pond-1 - train/global_step__MIN": 675,
      "brisk-pond-1 - train/global_step__MAX": 675
    },
    {
      "Step": 135,
      "brisk-pond-1 - train/global_step": 680,
      "brisk-pond-1 - train/global_step__MIN": 680,
      "brisk-pond-1 - train/global_step__MAX": 680
    },
    {
      "Step": 136,
      "brisk-pond-1 - train/global_step": 685,
      "brisk-pond-1 - train/global_step__MIN": 685,
      "brisk-pond-1 - train/global_step__MAX": 685
    },
    {
      "Step": 137,
      "brisk-pond-1 - train/global_step": 690,
      "brisk-pond-1 - train/global_step__MIN": 690,
      "brisk-pond-1 - train/global_step__MAX": 690
    },
    {
      "Step": 138,
      "brisk-pond-1 - train/global_step": 695,
      "brisk-pond-1 - train/global_step__MIN": 695,
      "brisk-pond-1 - train/global_step__MAX": 695
    },
    {
      "Step": 139,
      "brisk-pond-1 - train/global_step": 700,
      "brisk-pond-1 - train/global_step__MIN": 700,
      "brisk-pond-1 - train/global_step__MAX": 700
    },
    {
      "Step": 140,
      "brisk-pond-1 - train/global_step": 705,
      "brisk-pond-1 - train/global_step__MIN": 705,
      "brisk-pond-1 - train/global_step__MAX": 705
    },
    {
      "Step": 141,
      "brisk-pond-1 - train/global_step": 710,
      "brisk-pond-1 - train/global_step__MIN": 710,
      "brisk-pond-1 - train/global_step__MAX": 710
    },
    {
      "Step": 142,
      "brisk-pond-1 - train/global_step": 715,
      "brisk-pond-1 - train/global_step__MIN": 715,
      "brisk-pond-1 - train/global_step__MAX": 715
    },
    {
      "Step": 143,
      "brisk-pond-1 - train/global_step": 720,
      "brisk-pond-1 - train/global_step__MIN": 720,
      "brisk-pond-1 - train/global_step__MAX": 720
    },
    {
      "Step": 144,
      "brisk-pond-1 - train/global_step": 725,
      "brisk-pond-1 - train/global_step__MIN": 725,
      "brisk-pond-1 - train/global_step__MAX": 725
    },
    {
      "Step": 145,
      "brisk-pond-1 - train/global_step": 730,
      "brisk-pond-1 - train/global_step__MIN": 730,
      "brisk-pond-1 - train/global_step__MAX": 730
    },
    {
      "Step": 146,
      "brisk-pond-1 - train/global_step": 735,
      "brisk-pond-1 - train/global_step__MIN": 735,
      "brisk-pond-1 - train/global_step__MAX": 735
    },
    {
      "Step": 147,
      "brisk-pond-1 - train/global_step": 740,
      "brisk-pond-1 - train/global_step__MIN": 740,
      "brisk-pond-1 - train/global_step__MAX": 740
    },
    {
      "Step": 148,
      "brisk-pond-1 - train/global_step": 745,
      "brisk-pond-1 - train/global_step__MIN": 745,
      "brisk-pond-1 - train/global_step__MAX": 745
    },
    {
      "Step": 149,
      "brisk-pond-1 - train/global_step": 750,
      "brisk-pond-1 - train/global_step__MIN": 750,
      "brisk-pond-1 - train/global_step__MAX": 750
    },
    {
      "Step": 150,
      "brisk-pond-1 - train/global_step": 755,
      "brisk-pond-1 - train/global_step__MIN": 755,
      "brisk-pond-1 - train/global_step__MAX": 755
    },
    {
      "Step": 151,
      "brisk-pond-1 - train/global_step": 760,
      "brisk-pond-1 - train/global_step__MIN": 760,
      "brisk-pond-1 - train/global_step__MAX": 760
    },
    {
      "Step": 152,
      "brisk-pond-1 - train/global_step": 765,
      "brisk-pond-1 - train/global_step__MIN": 765,
      "brisk-pond-1 - train/global_step__MAX": 765
    },
    {
      "Step": 153,
      "brisk-pond-1 - train/global_step": 770,
      "brisk-pond-1 - train/global_step__MIN": 770,
      "brisk-pond-1 - train/global_step__MAX": 770
    },
    {
      "Step": 154,
      "brisk-pond-1 - train/global_step": 775,
      "brisk-pond-1 - train/global_step__MIN": 775,
      "brisk-pond-1 - train/global_step__MAX": 775
    },
    {
      "Step": 155,
      "brisk-pond-1 - train/global_step": 780,
      "brisk-pond-1 - train/global_step__MIN": 780,
      "brisk-pond-1 - train/global_step__MAX": 780
    },
    {
      "Step": 156,
      "brisk-pond-1 - train/global_step": 785,
      "brisk-pond-1 - train/global_step__MIN": 785,
      "brisk-pond-1 - train/global_step__MAX": 785
    },
    {
      "Step": 157,
      "brisk-pond-1 - train/global_step": 790,
      "brisk-pond-1 - train/global_step__MIN": 790,
      "brisk-pond-1 - train/global_step__MAX": 790
    },
    {
      "Step": 158,
      "brisk-pond-1 - train/global_step": 795,
      "brisk-pond-1 - train/global_step__MIN": 795,
      "brisk-pond-1 - train/global_step__MAX": 795
    },
    {
      "Step": 159,
      "brisk-pond-1 - train/global_step": 800,
      "brisk-pond-1 - train/global_step__MIN": 800,
      "brisk-pond-1 - train/global_step__MAX": 800
    },
    {
      "Step": 160,
      "brisk-pond-1 - train/global_step": 805,
      "brisk-pond-1 - train/global_step__MIN": 805,
      "brisk-pond-1 - train/global_step__MAX": 805
    },
    {
      "Step": 161,
      "brisk-pond-1 - train/global_step": 810,
      "brisk-pond-1 - train/global_step__MIN": 810,
      "brisk-pond-1 - train/global_step__MAX": 810
    },
    {
      "Step": 162,
      "brisk-pond-1 - train/global_step": 815,
      "brisk-pond-1 - train/global_step__MIN": 815,
      "brisk-pond-1 - train/global_step__MAX": 815
    },
    {
      "Step": 163,
      "brisk-pond-1 - train/global_step": 820,
      "brisk-pond-1 - train/global_step__MIN": 820,
      "brisk-pond-1 - train/global_step__MAX": 820
    },
    {
      "Step": 164,
      "brisk-pond-1 - train/global_step": 825,
      "brisk-pond-1 - train/global_step__MIN": 825,
      "brisk-pond-1 - train/global_step__MAX": 825
    },
    {
      "Step": 165,
      "brisk-pond-1 - train/global_step": 830,
      "brisk-pond-1 - train/global_step__MIN": 830,
      "brisk-pond-1 - train/global_step__MAX": 830
    },
    {
      "Step": 166,
      "brisk-pond-1 - train/global_step": 835,
      "brisk-pond-1 - train/global_step__MIN": 835,
      "brisk-pond-1 - train/global_step__MAX": 835
    },
    {
      "Step": 167,
      "brisk-pond-1 - train/global_step": 840,
      "brisk-pond-1 - train/global_step__MIN": 840,
      "brisk-pond-1 - train/global_step__MAX": 840
    },
    {
      "Step": 168,
      "brisk-pond-1 - train/global_step": 845,
      "brisk-pond-1 - train/global_step__MIN": 845,
      "brisk-pond-1 - train/global_step__MAX": 845
    },
    {
      "Step": 169,
      "brisk-pond-1 - train/global_step": 850,
      "brisk-pond-1 - train/global_step__MIN": 850,
      "brisk-pond-1 - train/global_step__MAX": 850
    },
    {
      "Step": 170,
      "brisk-pond-1 - train/global_step": 855,
      "brisk-pond-1 - train/global_step__MIN": 855,
      "brisk-pond-1 - train/global_step__MAX": 855
    },
    {
      "Step": 171,
      "brisk-pond-1 - train/global_step": 860,
      "brisk-pond-1 - train/global_step__MIN": 860,
      "brisk-pond-1 - train/global_step__MAX": 860
    },
    {
      "Step": 172,
      "brisk-pond-1 - train/global_step": 865,
      "brisk-pond-1 - train/global_step__MIN": 865,
      "brisk-pond-1 - train/global_step__MAX": 865
    },
    {
      "Step": 173,
      "brisk-pond-1 - train/global_step": 870,
      "brisk-pond-1 - train/global_step__MIN": 870,
      "brisk-pond-1 - train/global_step__MAX": 870
    },
    {
      "Step": 174,
      "brisk-pond-1 - train/global_step": 875,
      "brisk-pond-1 - train/global_step__MIN": 875,
      "brisk-pond-1 - train/global_step__MAX": 875
    },
    {
      "Step": 175,
      "brisk-pond-1 - train/global_step": 880,
      "brisk-pond-1 - train/global_step__MIN": 880,
      "brisk-pond-1 - train/global_step__MAX": 880
    },
    {
      "Step": 176,
      "brisk-pond-1 - train/global_step": 885,
      "brisk-pond-1 - train/global_step__MIN": 885,
      "brisk-pond-1 - train/global_step__MAX": 885
    },
    {
      "Step": 177,
      "brisk-pond-1 - train/global_step": 890,
      "brisk-pond-1 - train/global_step__MIN": 890,
      "brisk-pond-1 - train/global_step__MAX": 890
    },
    {
      "Step": 178,
      "brisk-pond-1 - train/global_step": 895,
      "brisk-pond-1 - train/global_step__MIN": 895,
      "brisk-pond-1 - train/global_step__MAX": 895
    },
    {
      "Step": 179,
      "brisk-pond-1 - train/global_step": 900,
      "brisk-pond-1 - train/global_step__MIN": 900,
      "brisk-pond-1 - train/global_step__MAX": 900
    },
    {
      "Step": 180,
      "brisk-pond-1 - train/global_step": 905,
      "brisk-pond-1 - train/global_step__MIN": 905,
      "brisk-pond-1 - train/global_step__MAX": 905
    },
    {
      "Step": 181,
      "brisk-pond-1 - train/global_step": 910,
      "brisk-pond-1 - train/global_step__MIN": 910,
      "brisk-pond-1 - train/global_step__MAX": 910
    },
    {
      "Step": 182,
      "brisk-pond-1 - train/global_step": 915,
      "brisk-pond-1 - train/global_step__MIN": 915,
      "brisk-pond-1 - train/global_step__MAX": 915
    },
    {
      "Step": 183,
      "brisk-pond-1 - train/global_step": 920,
      "brisk-pond-1 - train/global_step__MIN": 920,
      "brisk-pond-1 - train/global_step__MAX": 920
    },
    {
      "Step": 184,
      "brisk-pond-1 - train/global_step": 925,
      "brisk-pond-1 - train/global_step__MIN": 925,
      "brisk-pond-1 - train/global_step__MAX": 925
    },
    {
      "Step": 185,
      "brisk-pond-1 - train/global_step": 930,
      "brisk-pond-1 - train/global_step__MIN": 930,
      "brisk-pond-1 - train/global_step__MAX": 930
    },
    {
      "Step": 186,
      "brisk-pond-1 - train/global_step": 935,
      "brisk-pond-1 - train/global_step__MIN": 935,
      "brisk-pond-1 - train/global_step__MAX": 935
    },
    {
      "Step": 187,
      "brisk-pond-1 - train/global_step": 940,
      "brisk-pond-1 - train/global_step__MIN": 940,
      "brisk-pond-1 - train/global_step__MAX": 940
    },
    {
      "Step": 188,
      "brisk-pond-1 - train/global_step": 945,
      "brisk-pond-1 - train/global_step__MIN": 945,
      "brisk-pond-1 - train/global_step__MAX": 945
    },
    {
      "Step": 189,
      "brisk-pond-1 - train/global_step": 950,
      "brisk-pond-1 - train/global_step__MIN": 950,
      "brisk-pond-1 - train/global_step__MAX": 950
    },
    {
      "Step": 190,
      "brisk-pond-1 - train/global_step": 955,
      "brisk-pond-1 - train/global_step__MIN": 955,
      "brisk-pond-1 - train/global_step__MAX": 955
    },
    {
      "Step": 191,
      "brisk-pond-1 - train/global_step": 960,
      "brisk-pond-1 - train/global_step__MIN": 960,
      "brisk-pond-1 - train/global_step__MAX": 960
    },
    {
      "Step": 192,
      "brisk-pond-1 - train/global_step": 965,
      "brisk-pond-1 - train/global_step__MIN": 965,
      "brisk-pond-1 - train/global_step__MAX": 965
    },
    {
      "Step": 193,
      "brisk-pond-1 - train/global_step": 970,
      "brisk-pond-1 - train/global_step__MIN": 970,
      "brisk-pond-1 - train/global_step__MAX": 970
    },
    {
      "Step": 194,
      "brisk-pond-1 - train/global_step": 975,
      "brisk-pond-1 - train/global_step__MIN": 975,
      "brisk-pond-1 - train/global_step__MAX": 975
    },
    {
      "Step": 195,
      "brisk-pond-1 - train/global_step": 980,
      "brisk-pond-1 - train/global_step__MIN": 980,
      "brisk-pond-1 - train/global_step__MAX": 980
    },
    {
      "Step": 196,
      "brisk-pond-1 - train/global_step": 985,
      "brisk-pond-1 - train/global_step__MIN": 985,
      "brisk-pond-1 - train/global_step__MAX": 985
    },
    {
      "Step": 197,
      "brisk-pond-1 - train/global_step": 990,
      "brisk-pond-1 - train/global_step__MIN": 990,
      "brisk-pond-1 - train/global_step__MAX": 990
    },
    {
      "Step": 198,
      "brisk-pond-1 - train/global_step": 995,
      "brisk-pond-1 - train/global_step__MIN": 995,
      "brisk-pond-1 - train/global_step__MAX": 995
    },
    {
      "Step": 199,
      "brisk-pond-1 - train/global_step": 1000,
      "brisk-pond-1 - train/global_step__MIN": 1000,
      "brisk-pond-1 - train/global_step__MAX": 1000
    },
    {
      "Step": 200,
      "brisk-pond-1 - train/global_step": 1000,
      "brisk-pond-1 - train/global_step__MIN": 1000,
      "brisk-pond-1 - train/global_step__MAX": 1000
    },
    {
      "Step": 201,
      "brisk-pond-1 - train/global_step": 1005,
      "brisk-pond-1 - train/global_step__MIN": 1005,
      "brisk-pond-1 - train/global_step__MAX": 1005
    },
    {
      "Step": 202,
      "brisk-pond-1 - train/global_step": 1010,
      "brisk-pond-1 - train/global_step__MIN": 1010,
      "brisk-pond-1 - train/global_step__MAX": 1010
    },
    {
      "Step": 203,
      "brisk-pond-1 - train/global_step": 1015,
      "brisk-pond-1 - train/global_step__MIN": 1015,
      "brisk-pond-1 - train/global_step__MAX": 1015
    },
    {
      "Step": 204,
      "brisk-pond-1 - train/global_step": 1020,
      "brisk-pond-1 - train/global_step__MIN": 1020,
      "brisk-pond-1 - train/global_step__MAX": 1020
    },
    {
      "Step": 205,
      "brisk-pond-1 - train/global_step": 1025,
      "brisk-pond-1 - train/global_step__MIN": 1025,
      "brisk-pond-1 - train/global_step__MAX": 1025
    },
    {
      "Step": 206,
      "brisk-pond-1 - train/global_step": 1030,
      "brisk-pond-1 - train/global_step__MIN": 1030,
      "brisk-pond-1 - train/global_step__MAX": 1030
    },
    {
      "Step": 207,
      "brisk-pond-1 - train/global_step": 1035,
      "brisk-pond-1 - train/global_step__MIN": 1035,
      "brisk-pond-1 - train/global_step__MAX": 1035
    },
    {
      "Step": 208,
      "brisk-pond-1 - train/global_step": 1040,
      "brisk-pond-1 - train/global_step__MIN": 1040,
      "brisk-pond-1 - train/global_step__MAX": 1040
    },
    {
      "Step": 209,
      "brisk-pond-1 - train/global_step": 1045,
      "brisk-pond-1 - train/global_step__MIN": 1045,
      "brisk-pond-1 - train/global_step__MAX": 1045
    },
    {
      "Step": 210,
      "brisk-pond-1 - train/global_step": 1050,
      "brisk-pond-1 - train/global_step__MIN": 1050,
      "brisk-pond-1 - train/global_step__MAX": 1050
    },
    {
      "Step": 211,
      "brisk-pond-1 - train/global_step": 1055,
      "brisk-pond-1 - train/global_step__MIN": 1055,
      "brisk-pond-1 - train/global_step__MAX": 1055
    },
    {
      "Step": 212,
      "brisk-pond-1 - train/global_step": 1060,
      "brisk-pond-1 - train/global_step__MIN": 1060,
      "brisk-pond-1 - train/global_step__MAX": 1060
    },
    {
      "Step": 213,
      "brisk-pond-1 - train/global_step": 1065,
      "brisk-pond-1 - train/global_step__MIN": 1065,
      "brisk-pond-1 - train/global_step__MAX": 1065
    },
    {
      "Step": 214,
      "brisk-pond-1 - train/global_step": 1070,
      "brisk-pond-1 - train/global_step__MIN": 1070,
      "brisk-pond-1 - train/global_step__MAX": 1070
    },
    {
      "Step": 215,
      "brisk-pond-1 - train/global_step": 1075,
      "brisk-pond-1 - train/global_step__MIN": 1075,
      "brisk-pond-1 - train/global_step__MAX": 1075
    },
    {
      "Step": 216,
      "brisk-pond-1 - train/global_step": 1080,
      "brisk-pond-1 - train/global_step__MIN": 1080,
      "brisk-pond-1 - train/global_step__MAX": 1080
    },
    {
      "Step": 217,
      "brisk-pond-1 - train/global_step": 1085,
      "brisk-pond-1 - train/global_step__MIN": 1085,
      "brisk-pond-1 - train/global_step__MAX": 1085
    },
    {
      "Step": 218,
      "brisk-pond-1 - train/global_step": 1090,
      "brisk-pond-1 - train/global_step__MIN": 1090,
      "brisk-pond-1 - train/global_step__MAX": 1090
    },
    {
      "Step": 219,
      "brisk-pond-1 - train/global_step": 1095,
      "brisk-pond-1 - train/global_step__MIN": 1095,
      "brisk-pond-1 - train/global_step__MAX": 1095
    },
    {
      "Step": 220,
      "brisk-pond-1 - train/global_step": 1100,
      "brisk-pond-1 - train/global_step__MIN": 1100,
      "brisk-pond-1 - train/global_step__MAX": 1100
    },
    {
      "Step": 221,
      "brisk-pond-1 - train/global_step": 1105,
      "brisk-pond-1 - train/global_step__MIN": 1105,
      "brisk-pond-1 - train/global_step__MAX": 1105
    },
    {
      "Step": 222,
      "brisk-pond-1 - train/global_step": 1110,
      "brisk-pond-1 - train/global_step__MIN": 1110,
      "brisk-pond-1 - train/global_step__MAX": 1110
    },
    {
      "Step": 223,
      "brisk-pond-1 - train/global_step": 1115,
      "brisk-pond-1 - train/global_step__MIN": 1115,
      "brisk-pond-1 - train/global_step__MAX": 1115
    },
    {
      "Step": 224,
      "brisk-pond-1 - train/global_step": 1120,
      "brisk-pond-1 - train/global_step__MIN": 1120,
      "brisk-pond-1 - train/global_step__MAX": 1120
    },
    {
      "Step": 225,
      "brisk-pond-1 - train/global_step": 1125,
      "brisk-pond-1 - train/global_step__MIN": 1125,
      "brisk-pond-1 - train/global_step__MAX": 1125
    },
    {
      "Step": 226,
      "brisk-pond-1 - train/global_step": 1130,
      "brisk-pond-1 - train/global_step__MIN": 1130,
      "brisk-pond-1 - train/global_step__MAX": 1130
    },
    {
      "Step": 227,
      "brisk-pond-1 - train/global_step": 1135,
      "brisk-pond-1 - train/global_step__MIN": 1135,
      "brisk-pond-1 - train/global_step__MAX": 1135
    },
    {
      "Step": 228,
      "brisk-pond-1 - train/global_step": 1140,
      "brisk-pond-1 - train/global_step__MIN": 1140,
      "brisk-pond-1 - train/global_step__MAX": 1140
    },
    {
      "Step": 229,
      "brisk-pond-1 - train/global_step": 1145,
      "brisk-pond-1 - train/global_step__MIN": 1145,
      "brisk-pond-1 - train/global_step__MAX": 1145
    },
    {
      "Step": 230,
      "brisk-pond-1 - train/global_step": 1150,
      "brisk-pond-1 - train/global_step__MIN": 1150,
      "brisk-pond-1 - train/global_step__MAX": 1150
    },
    {
      "Step": 231,
      "brisk-pond-1 - train/global_step": 1155,
      "brisk-pond-1 - train/global_step__MIN": 1155,
      "brisk-pond-1 - train/global_step__MAX": 1155
    },
    {
      "Step": 232,
      "brisk-pond-1 - train/global_step": 1160,
      "brisk-pond-1 - train/global_step__MIN": 1160,
      "brisk-pond-1 - train/global_step__MAX": 1160
    },
    {
      "Step": 233,
      "brisk-pond-1 - train/global_step": 1165,
      "brisk-pond-1 - train/global_step__MIN": 1165,
      "brisk-pond-1 - train/global_step__MAX": 1165
    },
    {
      "Step": 234,
      "brisk-pond-1 - train/global_step": 1170,
      "brisk-pond-1 - train/global_step__MIN": 1170,
      "brisk-pond-1 - train/global_step__MAX": 1170
    },
    {
      "Step": 235,
      "brisk-pond-1 - train/global_step": 1175,
      "brisk-pond-1 - train/global_step__MIN": 1175,
      "brisk-pond-1 - train/global_step__MAX": 1175
    },
    {
      "Step": 236,
      "brisk-pond-1 - train/global_step": 1180,
      "brisk-pond-1 - train/global_step__MIN": 1180,
      "brisk-pond-1 - train/global_step__MAX": 1180
    },
    {
      "Step": 237,
      "brisk-pond-1 - train/global_step": 1185,
      "brisk-pond-1 - train/global_step__MIN": 1185,
      "brisk-pond-1 - train/global_step__MAX": 1185
    },
    {
      "Step": 238,
      "brisk-pond-1 - train/global_step": 1190,
      "brisk-pond-1 - train/global_step__MIN": 1190,
      "brisk-pond-1 - train/global_step__MAX": 1190
    },
    {
      "Step": 239,
      "brisk-pond-1 - train/global_step": 1195,
      "brisk-pond-1 - train/global_step__MIN": 1195,
      "brisk-pond-1 - train/global_step__MAX": 1195
    },
    {
      "Step": 240,
      "brisk-pond-1 - train/global_step": 1200,
      "brisk-pond-1 - train/global_step__MIN": 1200,
      "brisk-pond-1 - train/global_step__MAX": 1200
    },
    {
      "Step": 241,
      "brisk-pond-1 - train/global_step": 1205,
      "brisk-pond-1 - train/global_step__MIN": 1205,
      "brisk-pond-1 - train/global_step__MAX": 1205
    },
    {
      "Step": 242,
      "brisk-pond-1 - train/global_step": 1210,
      "brisk-pond-1 - train/global_step__MIN": 1210,
      "brisk-pond-1 - train/global_step__MAX": 1210
    },
    {
      "Step": 243,
      "brisk-pond-1 - train/global_step": 1215,
      "brisk-pond-1 - train/global_step__MIN": 1215,
      "brisk-pond-1 - train/global_step__MAX": 1215
    },
    {
      "Step": 244,
      "brisk-pond-1 - train/global_step": 1220,
      "brisk-pond-1 - train/global_step__MIN": 1220,
      "brisk-pond-1 - train/global_step__MAX": 1220
    },
    {
      "Step": 245,
      "brisk-pond-1 - train/global_step": 1225,
      "brisk-pond-1 - train/global_step__MIN": 1225,
      "brisk-pond-1 - train/global_step__MAX": 1225
    },
    {
      "Step": 246,
      "brisk-pond-1 - train/global_step": 1230,
      "brisk-pond-1 - train/global_step__MIN": 1230,
      "brisk-pond-1 - train/global_step__MAX": 1230
    },
    {
      "Step": 247,
      "brisk-pond-1 - train/global_step": 1235,
      "brisk-pond-1 - train/global_step__MIN": 1235,
      "brisk-pond-1 - train/global_step__MAX": 1235
    },
    {
      "Step": 248,
      "brisk-pond-1 - train/global_step": 1240,
      "brisk-pond-1 - train/global_step__MIN": 1240,
      "brisk-pond-1 - train/global_step__MAX": 1240
    },
    {
      "Step": 249,
      "brisk-pond-1 - train/global_step": 1245,
      "brisk-pond-1 - train/global_step__MIN": 1245,
      "brisk-pond-1 - train/global_step__MAX": 1245
    },
    {
      "Step": 250,
      "brisk-pond-1 - train/global_step": 1250,
      "brisk-pond-1 - train/global_step__MIN": 1250,
      "brisk-pond-1 - train/global_step__MAX": 1250
    },
    {
      "Step": 251,
      "brisk-pond-1 - train/global_step": 1255,
      "brisk-pond-1 - train/global_step__MIN": 1255,
      "brisk-pond-1 - train/global_step__MAX": 1255
    },
    {
      "Step": 252,
      "brisk-pond-1 - train/global_step": 1260,
      "brisk-pond-1 - train/global_step__MIN": 1260,
      "brisk-pond-1 - train/global_step__MAX": 1260
    },
    {
      "Step": 253,
      "brisk-pond-1 - train/global_step": 1265,
      "brisk-pond-1 - train/global_step__MIN": 1265,
      "brisk-pond-1 - train/global_step__MAX": 1265
    },
    {
      "Step": 254,
      "brisk-pond-1 - train/global_step": 1270,
      "brisk-pond-1 - train/global_step__MIN": 1270,
      "brisk-pond-1 - train/global_step__MAX": 1270
    },
    {
      "Step": 255,
      "brisk-pond-1 - train/global_step": 1275,
      "brisk-pond-1 - train/global_step__MIN": 1275,
      "brisk-pond-1 - train/global_step__MAX": 1275
    },
    {
      "Step": 256,
      "brisk-pond-1 - train/global_step": 1280,
      "brisk-pond-1 - train/global_step__MIN": 1280,
      "brisk-pond-1 - train/global_step__MAX": 1280
    },
    {
      "Step": 257,
      "brisk-pond-1 - train/global_step": 1285,
      "brisk-pond-1 - train/global_step__MIN": 1285,
      "brisk-pond-1 - train/global_step__MAX": 1285
    },
    {
      "Step": 258,
      "brisk-pond-1 - train/global_step": 1290,
      "brisk-pond-1 - train/global_step__MIN": 1290,
      "brisk-pond-1 - train/global_step__MAX": 1290
    },
    {
      "Step": 259,
      "brisk-pond-1 - train/global_step": 1295,
      "brisk-pond-1 - train/global_step__MIN": 1295,
      "brisk-pond-1 - train/global_step__MAX": 1295
    },
    {
      "Step": 260,
      "brisk-pond-1 - train/global_step": 1300,
      "brisk-pond-1 - train/global_step__MIN": 1300,
      "brisk-pond-1 - train/global_step__MAX": 1300
    },
    {
      "Step": 261,
      "brisk-pond-1 - train/global_step": 1305,
      "brisk-pond-1 - train/global_step__MIN": 1305,
      "brisk-pond-1 - train/global_step__MAX": 1305
    },
    {
      "Step": 262,
      "brisk-pond-1 - train/global_step": 1310,
      "brisk-pond-1 - train/global_step__MIN": 1310,
      "brisk-pond-1 - train/global_step__MAX": 1310
    },
    {
      "Step": 263,
      "brisk-pond-1 - train/global_step": 1315,
      "brisk-pond-1 - train/global_step__MIN": 1315,
      "brisk-pond-1 - train/global_step__MAX": 1315
    },
    {
      "Step": 264,
      "brisk-pond-1 - train/global_step": 1320,
      "brisk-pond-1 - train/global_step__MIN": 1320,
      "brisk-pond-1 - train/global_step__MAX": 1320
    },
    {
      "Step": 265,
      "brisk-pond-1 - train/global_step": 1325,
      "brisk-pond-1 - train/global_step__MIN": 1325,
      "brisk-pond-1 - train/global_step__MAX": 1325
    },
    {
      "Step": 266,
      "brisk-pond-1 - train/global_step": 1330,
      "brisk-pond-1 - train/global_step__MIN": 1330,
      "brisk-pond-1 - train/global_step__MAX": 1330
    },
    {
      "Step": 267,
      "brisk-pond-1 - train/global_step": 1335,
      "brisk-pond-1 - train/global_step__MIN": 1335,
      "brisk-pond-1 - train/global_step__MAX": 1335
    },
    {
      "Step": 268,
      "brisk-pond-1 - train/global_step": 1340,
      "brisk-pond-1 - train/global_step__MIN": 1340,
      "brisk-pond-1 - train/global_step__MAX": 1340
    },
    {
      "Step": 269,
      "brisk-pond-1 - train/global_step": 1345,
      "brisk-pond-1 - train/global_step__MIN": 1345,
      "brisk-pond-1 - train/global_step__MAX": 1345
    },
    {
      "Step": 270,
      "brisk-pond-1 - train/global_step": 1350,
      "brisk-pond-1 - train/global_step__MIN": 1350,
      "brisk-pond-1 - train/global_step__MAX": 1350
    },
    {
      "Step": 271,
      "brisk-pond-1 - train/global_step": 1355,
      "brisk-pond-1 - train/global_step__MIN": 1355,
      "brisk-pond-1 - train/global_step__MAX": 1355
    },
    {
      "Step": 272,
      "brisk-pond-1 - train/global_step": 1360,
      "brisk-pond-1 - train/global_step__MIN": 1360,
      "brisk-pond-1 - train/global_step__MAX": 1360
    },
    {
      "Step": 273,
      "brisk-pond-1 - train/global_step": 1365,
      "brisk-pond-1 - train/global_step__MIN": 1365,
      "brisk-pond-1 - train/global_step__MAX": 1365
    },
    {
      "Step": 274,
      "brisk-pond-1 - train/global_step": 1370,
      "brisk-pond-1 - train/global_step__MIN": 1370,
      "brisk-pond-1 - train/global_step__MAX": 1370
    },
    {
      "Step": 275,
      "brisk-pond-1 - train/global_step": 1375,
      "brisk-pond-1 - train/global_step__MIN": 1375,
      "brisk-pond-1 - train/global_step__MAX": 1375
    },
    {
      "Step": 276,
      "brisk-pond-1 - train/global_step": 1380,
      "brisk-pond-1 - train/global_step__MIN": 1380,
      "brisk-pond-1 - train/global_step__MAX": 1380
    },
    {
      "Step": 277,
      "brisk-pond-1 - train/global_step": 1385,
      "brisk-pond-1 - train/global_step__MIN": 1385,
      "brisk-pond-1 - train/global_step__MAX": 1385
    },
    {
      "Step": 278,
      "brisk-pond-1 - train/global_step": 1390,
      "brisk-pond-1 - train/global_step__MIN": 1390,
      "brisk-pond-1 - train/global_step__MAX": 1390
    },
    {
      "Step": 279,
      "brisk-pond-1 - train/global_step": 1395,
      "brisk-pond-1 - train/global_step__MIN": 1395,
      "brisk-pond-1 - train/global_step__MAX": 1395
    },
    {
      "Step": 280,
      "brisk-pond-1 - train/global_step": 1400,
      "brisk-pond-1 - train/global_step__MIN": 1400,
      "brisk-pond-1 - train/global_step__MAX": 1400
    },
    {
      "Step": 281,
      "brisk-pond-1 - train/global_step": 1405,
      "brisk-pond-1 - train/global_step__MIN": 1405,
      "brisk-pond-1 - train/global_step__MAX": 1405
    },
    {
      "Step": 282,
      "brisk-pond-1 - train/global_step": 1410,
      "brisk-pond-1 - train/global_step__MIN": 1410,
      "brisk-pond-1 - train/global_step__MAX": 1410
    },
    {
      "Step": 283,
      "brisk-pond-1 - train/global_step": 1415,
      "brisk-pond-1 - train/global_step__MIN": 1415,
      "brisk-pond-1 - train/global_step__MAX": 1415
    },
    {
      "Step": 284,
      "brisk-pond-1 - train/global_step": 1420,
      "brisk-pond-1 - train/global_step__MIN": 1420,
      "brisk-pond-1 - train/global_step__MAX": 1420
    },
    {
      "Step": 285,
      "brisk-pond-1 - train/global_step": 1425,
      "brisk-pond-1 - train/global_step__MIN": 1425,
      "brisk-pond-1 - train/global_step__MAX": 1425
    },
    {
      "Step": 286,
      "brisk-pond-1 - train/global_step": 1430,
      "brisk-pond-1 - train/global_step__MIN": 1430,
      "brisk-pond-1 - train/global_step__MAX": 1430
    },
    {
      "Step": 287,
      "brisk-pond-1 - train/global_step": 1435,
      "brisk-pond-1 - train/global_step__MIN": 1435,
      "brisk-pond-1 - train/global_step__MAX": 1435
    },
    {
      "Step": 288,
      "brisk-pond-1 - train/global_step": 1440,
      "brisk-pond-1 - train/global_step__MIN": 1440,
      "brisk-pond-1 - train/global_step__MAX": 1440
    },
    {
      "Step": 289,
      "brisk-pond-1 - train/global_step": 1445,
      "brisk-pond-1 - train/global_step__MIN": 1445,
      "brisk-pond-1 - train/global_step__MAX": 1445
    },
    {
      "Step": 290,
      "brisk-pond-1 - train/global_step": 1450,
      "brisk-pond-1 - train/global_step__MIN": 1450,
      "brisk-pond-1 - train/global_step__MAX": 1450
    },
    {
      "Step": 291,
      "brisk-pond-1 - train/global_step": 1455,
      "brisk-pond-1 - train/global_step__MIN": 1455,
      "brisk-pond-1 - train/global_step__MAX": 1455
    },
    {
      "Step": 292,
      "brisk-pond-1 - train/global_step": 1460,
      "brisk-pond-1 - train/global_step__MIN": 1460,
      "brisk-pond-1 - train/global_step__MAX": 1460
    },
    {
      "Step": 293,
      "brisk-pond-1 - train/global_step": 1465,
      "brisk-pond-1 - train/global_step__MIN": 1465,
      "brisk-pond-1 - train/global_step__MAX": 1465
    },
    {
      "Step": 294,
      "brisk-pond-1 - train/global_step": 1470,
      "brisk-pond-1 - train/global_step__MIN": 1470,
      "brisk-pond-1 - train/global_step__MAX": 1470
    },
    {
      "Step": 295,
      "brisk-pond-1 - train/global_step": 1475,
      "brisk-pond-1 - train/global_step__MIN": 1475,
      "brisk-pond-1 - train/global_step__MAX": 1475
    },
    {
      "Step": 296,
      "brisk-pond-1 - train/global_step": 1480,
      "brisk-pond-1 - train/global_step__MIN": 1480,
      "brisk-pond-1 - train/global_step__MAX": 1480
    },
    {
      "Step": 297,
      "brisk-pond-1 - train/global_step": 1485,
      "brisk-pond-1 - train/global_step__MIN": 1485,
      "brisk-pond-1 - train/global_step__MAX": 1485
    },
    {
      "Step": 298,
      "brisk-pond-1 - train/global_step": 1490,
      "brisk-pond-1 - train/global_step__MIN": 1490,
      "brisk-pond-1 - train/global_step__MAX": 1490
    },
    {
      "Step": 299,
      "brisk-pond-1 - train/global_step": 1495,
      "brisk-pond-1 - train/global_step__MIN": 1495,
      "brisk-pond-1 - train/global_step__MAX": 1495
    },
    {
      "Step": 300,
      "brisk-pond-1 - train/global_step": 1500,
      "brisk-pond-1 - train/global_step__MIN": 1500,
      "brisk-pond-1 - train/global_step__MAX": 1500
    },
    {
      "Step": 301,
      "brisk-pond-1 - train/global_step": 1505,
      "brisk-pond-1 - train/global_step__MIN": 1505,
      "brisk-pond-1 - train/global_step__MAX": 1505
    },
    {
      "Step": 302,
      "brisk-pond-1 - train/global_step": 1510,
      "brisk-pond-1 - train/global_step__MIN": 1510,
      "brisk-pond-1 - train/global_step__MAX": 1510
    },
    {
      "Step": 303,
      "brisk-pond-1 - train/global_step": 1515,
      "brisk-pond-1 - train/global_step__MIN": 1515,
      "brisk-pond-1 - train/global_step__MAX": 1515
    },
    {
      "Step": 304,
      "brisk-pond-1 - train/global_step": 1520,
      "brisk-pond-1 - train/global_step__MIN": 1520,
      "brisk-pond-1 - train/global_step__MAX": 1520
    },
    {
      "Step": 305,
      "brisk-pond-1 - train/global_step": 1525,
      "brisk-pond-1 - train/global_step__MIN": 1525,
      "brisk-pond-1 - train/global_step__MAX": 1525
    },
    {
      "Step": 306,
      "brisk-pond-1 - train/global_step": 1530,
      "brisk-pond-1 - train/global_step__MIN": 1530,
      "brisk-pond-1 - train/global_step__MAX": 1530
    },
    {
      "Step": 307,
      "brisk-pond-1 - train/global_step": 1535,
      "brisk-pond-1 - train/global_step__MIN": 1535,
      "brisk-pond-1 - train/global_step__MAX": 1535
    },
    {
      "Step": 308,
      "brisk-pond-1 - train/global_step": 1540,
      "brisk-pond-1 - train/global_step__MIN": 1540,
      "brisk-pond-1 - train/global_step__MAX": 1540
    },
    {
      "Step": 309,
      "brisk-pond-1 - train/global_step": 1545,
      "brisk-pond-1 - train/global_step__MIN": 1545,
      "brisk-pond-1 - train/global_step__MAX": 1545
    },
    {
      "Step": 310,
      "brisk-pond-1 - train/global_step": 1550,
      "brisk-pond-1 - train/global_step__MIN": 1550,
      "brisk-pond-1 - train/global_step__MAX": 1550
    },
    {
      "Step": 311,
      "brisk-pond-1 - train/global_step": 1555,
      "brisk-pond-1 - train/global_step__MIN": 1555,
      "brisk-pond-1 - train/global_step__MAX": 1555
    },
    {
      "Step": 312,
      "brisk-pond-1 - train/global_step": 1560,
      "brisk-pond-1 - train/global_step__MIN": 1560,
      "brisk-pond-1 - train/global_step__MAX": 1560
    },
    {
      "Step": 313,
      "brisk-pond-1 - train/global_step": 1565,
      "brisk-pond-1 - train/global_step__MIN": 1565,
      "brisk-pond-1 - train/global_step__MAX": 1565
    },
    {
      "Step": 314,
      "brisk-pond-1 - train/global_step": 1570,
      "brisk-pond-1 - train/global_step__MIN": 1570,
      "brisk-pond-1 - train/global_step__MAX": 1570
    },
    {
      "Step": 315,
      "brisk-pond-1 - train/global_step": 1575,
      "brisk-pond-1 - train/global_step__MIN": 1575,
      "brisk-pond-1 - train/global_step__MAX": 1575
    },
    {
      "Step": 316,
      "brisk-pond-1 - train/global_step": 1580,
      "brisk-pond-1 - train/global_step__MIN": 1580,
      "brisk-pond-1 - train/global_step__MAX": 1580
    },
    {
      "Step": 317,
      "brisk-pond-1 - train/global_step": 1585,
      "brisk-pond-1 - train/global_step__MIN": 1585,
      "brisk-pond-1 - train/global_step__MAX": 1585
    },
    {
      "Step": 318,
      "brisk-pond-1 - train/global_step": 1590,
      "brisk-pond-1 - train/global_step__MIN": 1590,
      "brisk-pond-1 - train/global_step__MAX": 1590
    },
    {
      "Step": 319,
      "brisk-pond-1 - train/global_step": 1595,
      "brisk-pond-1 - train/global_step__MIN": 1595,
      "brisk-pond-1 - train/global_step__MAX": 1595
    },
    {
      "Step": 320,
      "brisk-pond-1 - train/global_step": 1600,
      "brisk-pond-1 - train/global_step__MIN": 1600,
      "brisk-pond-1 - train/global_step__MAX": 1600
    },
    {
      "Step": 321,
      "brisk-pond-1 - train/global_step": 1605,
      "brisk-pond-1 - train/global_step__MIN": 1605,
      "brisk-pond-1 - train/global_step__MAX": 1605
    },
    {
      "Step": 322,
      "brisk-pond-1 - train/global_step": 1610,
      "brisk-pond-1 - train/global_step__MIN": 1610,
      "brisk-pond-1 - train/global_step__MAX": 1610
    },
    {
      "Step": 323,
      "brisk-pond-1 - train/global_step": 1615,
      "brisk-pond-1 - train/global_step__MIN": 1615,
      "brisk-pond-1 - train/global_step__MAX": 1615
    },
    {
      "Step": 324,
      "brisk-pond-1 - train/global_step": 1620,
      "brisk-pond-1 - train/global_step__MIN": 1620,
      "brisk-pond-1 - train/global_step__MAX": 1620
    },
    {
      "Step": 325,
      "brisk-pond-1 - train/global_step": 1625,
      "brisk-pond-1 - train/global_step__MIN": 1625,
      "brisk-pond-1 - train/global_step__MAX": 1625
    },
    {
      "Step": 326,
      "brisk-pond-1 - train/global_step": 1630,
      "brisk-pond-1 - train/global_step__MIN": 1630,
      "brisk-pond-1 - train/global_step__MAX": 1630
    },
    {
      "Step": 327,
      "brisk-pond-1 - train/global_step": 1635,
      "brisk-pond-1 - train/global_step__MIN": 1635,
      "brisk-pond-1 - train/global_step__MAX": 1635
    },
    {
      "Step": 328,
      "brisk-pond-1 - train/global_step": 1640,
      "brisk-pond-1 - train/global_step__MIN": 1640,
      "brisk-pond-1 - train/global_step__MAX": 1640
    },
    {
      "Step": 329,
      "brisk-pond-1 - train/global_step": 1645,
      "brisk-pond-1 - train/global_step__MIN": 1645,
      "brisk-pond-1 - train/global_step__MAX": 1645
    },
    {
      "Step": 330,
      "brisk-pond-1 - train/global_step": 1650,
      "brisk-pond-1 - train/global_step__MIN": 1650,
      "brisk-pond-1 - train/global_step__MAX": 1650
    },
    {
      "Step": 331,
      "brisk-pond-1 - train/global_step": 1655,
      "brisk-pond-1 - train/global_step__MIN": 1655,
      "brisk-pond-1 - train/global_step__MAX": 1655
    },
    {
      "Step": 332,
      "brisk-pond-1 - train/global_step": 1660,
      "brisk-pond-1 - train/global_step__MIN": 1660,
      "brisk-pond-1 - train/global_step__MAX": 1660
    },
    {
      "Step": 333,
      "brisk-pond-1 - train/global_step": 1665,
      "brisk-pond-1 - train/global_step__MIN": 1665,
      "brisk-pond-1 - train/global_step__MAX": 1665
    },
    {
      "Step": 334,
      "brisk-pond-1 - train/global_step": 1670,
      "brisk-pond-1 - train/global_step__MIN": 1670,
      "brisk-pond-1 - train/global_step__MAX": 1670
    },
    {
      "Step": 335,
      "brisk-pond-1 - train/global_step": 1675,
      "brisk-pond-1 - train/global_step__MIN": 1675,
      "brisk-pond-1 - train/global_step__MAX": 1675
    },
    {
      "Step": 336,
      "brisk-pond-1 - train/global_step": 1680,
      "brisk-pond-1 - train/global_step__MIN": 1680,
      "brisk-pond-1 - train/global_step__MAX": 1680
    },
    {
      "Step": 337,
      "brisk-pond-1 - train/global_step": 1685,
      "brisk-pond-1 - train/global_step__MIN": 1685,
      "brisk-pond-1 - train/global_step__MAX": 1685
    },
    {
      "Step": 338,
      "brisk-pond-1 - train/global_step": 1690,
      "brisk-pond-1 - train/global_step__MIN": 1690,
      "brisk-pond-1 - train/global_step__MAX": 1690
    },
    {
      "Step": 339,
      "brisk-pond-1 - train/global_step": 1695,
      "brisk-pond-1 - train/global_step__MIN": 1695,
      "brisk-pond-1 - train/global_step__MAX": 1695
    },
    {
      "Step": 340,
      "brisk-pond-1 - train/global_step": 1700,
      "brisk-pond-1 - train/global_step__MIN": 1700,
      "brisk-pond-1 - train/global_step__MAX": 1700
    },
    {
      "Step": 341,
      "brisk-pond-1 - train/global_step": 1705,
      "brisk-pond-1 - train/global_step__MIN": 1705,
      "brisk-pond-1 - train/global_step__MAX": 1705
    },
    {
      "Step": 342,
      "brisk-pond-1 - train/global_step": 1710,
      "brisk-pond-1 - train/global_step__MIN": 1710,
      "brisk-pond-1 - train/global_step__MAX": 1710
    },
    {
      "Step": 343,
      "brisk-pond-1 - train/global_step": 1715,
      "brisk-pond-1 - train/global_step__MIN": 1715,
      "brisk-pond-1 - train/global_step__MAX": 1715
    },
    {
      "Step": 344,
      "brisk-pond-1 - train/global_step": 1720,
      "brisk-pond-1 - train/global_step__MIN": 1720,
      "brisk-pond-1 - train/global_step__MAX": 1720
    },
    {
      "Step": 345,
      "brisk-pond-1 - train/global_step": 1725,
      "brisk-pond-1 - train/global_step__MIN": 1725,
      "brisk-pond-1 - train/global_step__MAX": 1725
    },
    {
      "Step": 346,
      "brisk-pond-1 - train/global_step": 1730,
      "brisk-pond-1 - train/global_step__MIN": 1730,
      "brisk-pond-1 - train/global_step__MAX": 1730
    },
    {
      "Step": 347,
      "brisk-pond-1 - train/global_step": 1735,
      "brisk-pond-1 - train/global_step__MIN": 1735,
      "brisk-pond-1 - train/global_step__MAX": 1735
    },
    {
      "Step": 348,
      "brisk-pond-1 - train/global_step": 1740,
      "brisk-pond-1 - train/global_step__MIN": 1740,
      "brisk-pond-1 - train/global_step__MAX": 1740
    },
    {
      "Step": 349,
      "brisk-pond-1 - train/global_step": 1745,
      "brisk-pond-1 - train/global_step__MIN": 1745,
      "brisk-pond-1 - train/global_step__MAX": 1745
    },
    {
      "Step": 350,
      "brisk-pond-1 - train/global_step": 1750,
      "brisk-pond-1 - train/global_step__MIN": 1750,
      "brisk-pond-1 - train/global_step__MAX": 1750
    },
    {
      "Step": 351,
      "brisk-pond-1 - train/global_step": 1755,
      "brisk-pond-1 - train/global_step__MIN": 1755,
      "brisk-pond-1 - train/global_step__MAX": 1755
    },
    {
      "Step": 352,
      "brisk-pond-1 - train/global_step": 1760,
      "brisk-pond-1 - train/global_step__MIN": 1760,
      "brisk-pond-1 - train/global_step__MAX": 1760
    },
    {
      "Step": 353,
      "brisk-pond-1 - train/global_step": 1765,
      "brisk-pond-1 - train/global_step__MIN": 1765,
      "brisk-pond-1 - train/global_step__MAX": 1765
    },
    {
      "Step": 354,
      "brisk-pond-1 - train/global_step": 1770,
      "brisk-pond-1 - train/global_step__MIN": 1770,
      "brisk-pond-1 - train/global_step__MAX": 1770
    },
    {
      "Step": 355,
      "brisk-pond-1 - train/global_step": 1775,
      "brisk-pond-1 - train/global_step__MIN": 1775,
      "brisk-pond-1 - train/global_step__MAX": 1775
    },
    {
      "Step": 356,
      "brisk-pond-1 - train/global_step": 1780,
      "brisk-pond-1 - train/global_step__MIN": 1780,
      "brisk-pond-1 - train/global_step__MAX": 1780
    },
    {
      "Step": 357,
      "brisk-pond-1 - train/global_step": 1785,
      "brisk-pond-1 - train/global_step__MIN": 1785,
      "brisk-pond-1 - train/global_step__MAX": 1785
    },
    {
      "Step": 358,
      "brisk-pond-1 - train/global_step": 1790,
      "brisk-pond-1 - train/global_step__MIN": 1790,
      "brisk-pond-1 - train/global_step__MAX": 1790
    },
    {
      "Step": 359,
      "brisk-pond-1 - train/global_step": 1795,
      "brisk-pond-1 - train/global_step__MIN": 1795,
      "brisk-pond-1 - train/global_step__MAX": 1795
    },
    {
      "Step": 360,
      "brisk-pond-1 - train/global_step": 1800,
      "brisk-pond-1 - train/global_step__MIN": 1800,
      "brisk-pond-1 - train/global_step__MAX": 1800
    },
    {
      "Step": 361,
      "brisk-pond-1 - train/global_step": 1805,
      "brisk-pond-1 - train/global_step__MIN": 1805,
      "brisk-pond-1 - train/global_step__MAX": 1805
    },
    {
      "Step": 362,
      "brisk-pond-1 - train/global_step": 1810,
      "brisk-pond-1 - train/global_step__MIN": 1810,
      "brisk-pond-1 - train/global_step__MAX": 1810
    },
    {
      "Step": 363,
      "brisk-pond-1 - train/global_step": 1815,
      "brisk-pond-1 - train/global_step__MIN": 1815,
      "brisk-pond-1 - train/global_step__MAX": 1815
    },
    {
      "Step": 364,
      "brisk-pond-1 - train/global_step": 1820,
      "brisk-pond-1 - train/global_step__MIN": 1820,
      "brisk-pond-1 - train/global_step__MAX": 1820
    },
    {
      "Step": 365,
      "brisk-pond-1 - train/global_step": 1825,
      "brisk-pond-1 - train/global_step__MIN": 1825,
      "brisk-pond-1 - train/global_step__MAX": 1825
    },
    {
      "Step": 366,
      "brisk-pond-1 - train/global_step": 1830,
      "brisk-pond-1 - train/global_step__MIN": 1830,
      "brisk-pond-1 - train/global_step__MAX": 1830
    },
    {
      "Step": 367,
      "brisk-pond-1 - train/global_step": 1835,
      "brisk-pond-1 - train/global_step__MIN": 1835,
      "brisk-pond-1 - train/global_step__MAX": 1835
    },
    {
      "Step": 368,
      "brisk-pond-1 - train/global_step": 1840,
      "brisk-pond-1 - train/global_step__MIN": 1840,
      "brisk-pond-1 - train/global_step__MAX": 1840
    },
    {
      "Step": 369,
      "brisk-pond-1 - train/global_step": 1845,
      "brisk-pond-1 - train/global_step__MIN": 1845,
      "brisk-pond-1 - train/global_step__MAX": 1845
    },
    {
      "Step": 370,
      "brisk-pond-1 - train/global_step": 1850,
      "brisk-pond-1 - train/global_step__MIN": 1850,
      "brisk-pond-1 - train/global_step__MAX": 1850
    },
    {
      "Step": 371,
      "brisk-pond-1 - train/global_step": 1855,
      "brisk-pond-1 - train/global_step__MIN": 1855,
      "brisk-pond-1 - train/global_step__MAX": 1855
    },
    {
      "Step": 372,
      "brisk-pond-1 - train/global_step": 1860,
      "brisk-pond-1 - train/global_step__MIN": 1860,
      "brisk-pond-1 - train/global_step__MAX": 1860
    },
    {
      "Step": 373,
      "brisk-pond-1 - train/global_step": 1865,
      "brisk-pond-1 - train/global_step__MIN": 1865,
      "brisk-pond-1 - train/global_step__MAX": 1865
    },
    {
      "Step": 374,
      "brisk-pond-1 - train/global_step": 1870,
      "brisk-pond-1 - train/global_step__MIN": 1870,
      "brisk-pond-1 - train/global_step__MAX": 1870
    },
    {
      "Step": 375,
      "brisk-pond-1 - train/global_step": 1875,
      "brisk-pond-1 - train/global_step__MIN": 1875,
      "brisk-pond-1 - train/global_step__MAX": 1875
    },
    {
      "Step": 376,
      "brisk-pond-1 - train/global_step": 1880,
      "brisk-pond-1 - train/global_step__MIN": 1880,
      "brisk-pond-1 - train/global_step__MAX": 1880
    },
    {
      "Step": 377,
      "brisk-pond-1 - train/global_step": 1885,
      "brisk-pond-1 - train/global_step__MIN": 1885,
      "brisk-pond-1 - train/global_step__MAX": 1885
    },
    {
      "Step": 378,
      "brisk-pond-1 - train/global_step": 1890,
      "brisk-pond-1 - train/global_step__MIN": 1890,
      "brisk-pond-1 - train/global_step__MAX": 1890
    },
    {
      "Step": 379,
      "brisk-pond-1 - train/global_step": 1895,
      "brisk-pond-1 - train/global_step__MIN": 1895,
      "brisk-pond-1 - train/global_step__MAX": 1895
    },
    {
      "Step": 380,
      "brisk-pond-1 - train/global_step": 1900,
      "brisk-pond-1 - train/global_step__MIN": 1900,
      "brisk-pond-1 - train/global_step__MAX": 1900
    },
    {
      "Step": 381,
      "brisk-pond-1 - train/global_step": 1905,
      "brisk-pond-1 - train/global_step__MIN": 1905,
      "brisk-pond-1 - train/global_step__MAX": 1905
    },
    {
      "Step": 382,
      "brisk-pond-1 - train/global_step": 1910,
      "brisk-pond-1 - train/global_step__MIN": 1910,
      "brisk-pond-1 - train/global_step__MAX": 1910
    },
    {
      "Step": 383,
      "brisk-pond-1 - train/global_step": 1915,
      "brisk-pond-1 - train/global_step__MIN": 1915,
      "brisk-pond-1 - train/global_step__MAX": 1915
    },
    {
      "Step": 384,
      "brisk-pond-1 - train/global_step": 1920,
      "brisk-pond-1 - train/global_step__MIN": 1920,
      "brisk-pond-1 - train/global_step__MAX": 1920
    },
    {
      "Step": 385,
      "brisk-pond-1 - train/global_step": 1925,
      "brisk-pond-1 - train/global_step__MIN": 1925,
      "brisk-pond-1 - train/global_step__MAX": 1925
    },
    {
      "Step": 386,
      "brisk-pond-1 - train/global_step": 1930,
      "brisk-pond-1 - train/global_step__MIN": 1930,
      "brisk-pond-1 - train/global_step__MAX": 1930
    },
    {
      "Step": 387,
      "brisk-pond-1 - train/global_step": 1935,
      "brisk-pond-1 - train/global_step__MIN": 1935,
      "brisk-pond-1 - train/global_step__MAX": 1935
    },
    {
      "Step": 388,
      "brisk-pond-1 - train/global_step": 1940,
      "brisk-pond-1 - train/global_step__MIN": 1940,
      "brisk-pond-1 - train/global_step__MAX": 1940
    },
    {
      "Step": 389,
      "brisk-pond-1 - train/global_step": 1945,
      "brisk-pond-1 - train/global_step__MIN": 1945,
      "brisk-pond-1 - train/global_step__MAX": 1945
    },
    {
      "Step": 390,
      "brisk-pond-1 - train/global_step": 1950,
      "brisk-pond-1 - train/global_step__MIN": 1950,
      "brisk-pond-1 - train/global_step__MAX": 1950
    },
    {
      "Step": 391,
      "brisk-pond-1 - train/global_step": 1955,
      "brisk-pond-1 - train/global_step__MIN": 1955,
      "brisk-pond-1 - train/global_step__MAX": 1955
    },
    {
      "Step": 392,
      "brisk-pond-1 - train/global_step": 1960,
      "brisk-pond-1 - train/global_step__MIN": 1960,
      "brisk-pond-1 - train/global_step__MAX": 1960
    },
    {
      "Step": 393,
      "brisk-pond-1 - train/global_step": 1965,
      "brisk-pond-1 - train/global_step__MIN": 1965,
      "brisk-pond-1 - train/global_step__MAX": 1965
    },
    {
      "Step": 394,
      "brisk-pond-1 - train/global_step": 1970,
      "brisk-pond-1 - train/global_step__MIN": 1970,
      "brisk-pond-1 - train/global_step__MAX": 1970
    },
    {
      "Step": 395,
      "brisk-pond-1 - train/global_step": 1975,
      "brisk-pond-1 - train/global_step__MIN": 1975,
      "brisk-pond-1 - train/global_step__MAX": 1975
    },
    {
      "Step": 396,
      "brisk-pond-1 - train/global_step": 1980,
      "brisk-pond-1 - train/global_step__MIN": 1980,
      "brisk-pond-1 - train/global_step__MAX": 1980
    },
    {
      "Step": 397,
      "brisk-pond-1 - train/global_step": 1985,
      "brisk-pond-1 - train/global_step__MIN": 1985,
      "brisk-pond-1 - train/global_step__MAX": 1985
    },
    {
      "Step": 398,
      "brisk-pond-1 - train/global_step": 1990,
      "brisk-pond-1 - train/global_step__MIN": 1990,
      "brisk-pond-1 - train/global_step__MAX": 1990
    },
    {
      "Step": 399,
      "brisk-pond-1 - train/global_step": 1995,
      "brisk-pond-1 - train/global_step__MIN": 1995,
      "brisk-pond-1 - train/global_step__MAX": 1995
    },
    {
      "Step": 400,
      "brisk-pond-1 - train/global_step": 2000,
      "brisk-pond-1 - train/global_step__MIN": 2000,
      "brisk-pond-1 - train/global_step__MAX": 2000
    },
    {
      "Step": 401,
      "brisk-pond-1 - train/global_step": 2000,
      "brisk-pond-1 - train/global_step__MIN": 2000,
      "brisk-pond-1 - train/global_step__MAX": 2000
    },
    {
      "Step": 402,
      "brisk-pond-1 - train/global_step": 2005,
      "brisk-pond-1 - train/global_step__MIN": 2005,
      "brisk-pond-1 - train/global_step__MAX": 2005
    },
    {
      "Step": 403,
      "brisk-pond-1 - train/global_step": 2010,
      "brisk-pond-1 - train/global_step__MIN": 2010,
      "brisk-pond-1 - train/global_step__MAX": 2010
    },
    {
      "Step": 404,
      "brisk-pond-1 - train/global_step": 2015,
      "brisk-pond-1 - train/global_step__MIN": 2015,
      "brisk-pond-1 - train/global_step__MAX": 2015
    },
    {
      "Step": 405,
      "brisk-pond-1 - train/global_step": 2020,
      "brisk-pond-1 - train/global_step__MIN": 2020,
      "brisk-pond-1 - train/global_step__MAX": 2020
    },
    {
      "Step": 406,
      "brisk-pond-1 - train/global_step": 2025,
      "brisk-pond-1 - train/global_step__MIN": 2025,
      "brisk-pond-1 - train/global_step__MAX": 2025
    },
    {
      "Step": 407,
      "brisk-pond-1 - train/global_step": 2030,
      "brisk-pond-1 - train/global_step__MIN": 2030,
      "brisk-pond-1 - train/global_step__MAX": 2030
    },
    {
      "Step": 408,
      "brisk-pond-1 - train/global_step": 2035,
      "brisk-pond-1 - train/global_step__MIN": 2035,
      "brisk-pond-1 - train/global_step__MAX": 2035
    },
    {
      "Step": 409,
      "brisk-pond-1 - train/global_step": 2040,
      "brisk-pond-1 - train/global_step__MIN": 2040,
      "brisk-pond-1 - train/global_step__MAX": 2040
    },
    {
      "Step": 410,
      "brisk-pond-1 - train/global_step": 2045,
      "brisk-pond-1 - train/global_step__MIN": 2045,
      "brisk-pond-1 - train/global_step__MAX": 2045
    },
    {
      "Step": 411,
      "brisk-pond-1 - train/global_step": 2050,
      "brisk-pond-1 - train/global_step__MIN": 2050,
      "brisk-pond-1 - train/global_step__MAX": 2050
    },
    {
      "Step": 412,
      "brisk-pond-1 - train/global_step": 2055,
      "brisk-pond-1 - train/global_step__MIN": 2055,
      "brisk-pond-1 - train/global_step__MAX": 2055
    },
    {
      "Step": 413,
      "brisk-pond-1 - train/global_step": 2060,
      "brisk-pond-1 - train/global_step__MIN": 2060,
      "brisk-pond-1 - train/global_step__MAX": 2060
    },
    {
      "Step": 414,
      "brisk-pond-1 - train/global_step": 2065,
      "brisk-pond-1 - train/global_step__MIN": 2065,
      "brisk-pond-1 - train/global_step__MAX": 2065
    },
    {
      "Step": 415,
      "brisk-pond-1 - train/global_step": 2070,
      "brisk-pond-1 - train/global_step__MIN": 2070,
      "brisk-pond-1 - train/global_step__MAX": 2070
    },
    {
      "Step": 416,
      "brisk-pond-1 - train/global_step": 2075,
      "brisk-pond-1 - train/global_step__MIN": 2075,
      "brisk-pond-1 - train/global_step__MAX": 2075
    },
    {
      "Step": 417,
      "brisk-pond-1 - train/global_step": 2080,
      "brisk-pond-1 - train/global_step__MIN": 2080,
      "brisk-pond-1 - train/global_step__MAX": 2080
    },
    {
      "Step": 418,
      "brisk-pond-1 - train/global_step": 2085,
      "brisk-pond-1 - train/global_step__MIN": 2085,
      "brisk-pond-1 - train/global_step__MAX": 2085
    },
    {
      "Step": 419,
      "brisk-pond-1 - train/global_step": 2090,
      "brisk-pond-1 - train/global_step__MIN": 2090,
      "brisk-pond-1 - train/global_step__MAX": 2090
    },
    {
      "Step": 420,
      "brisk-pond-1 - train/global_step": 2095,
      "brisk-pond-1 - train/global_step__MIN": 2095,
      "brisk-pond-1 - train/global_step__MAX": 2095
    },
    {
      "Step": 421,
      "brisk-pond-1 - train/global_step": 2100,
      "brisk-pond-1 - train/global_step__MIN": 2100,
      "brisk-pond-1 - train/global_step__MAX": 2100
    },
    {
      "Step": 422,
      "brisk-pond-1 - train/global_step": 2105,
      "brisk-pond-1 - train/global_step__MIN": 2105,
      "brisk-pond-1 - train/global_step__MAX": 2105
    },
    {
      "Step": 423,
      "brisk-pond-1 - train/global_step": 2110,
      "brisk-pond-1 - train/global_step__MIN": 2110,
      "brisk-pond-1 - train/global_step__MAX": 2110
    },
    {
      "Step": 424,
      "brisk-pond-1 - train/global_step": 2115,
      "brisk-pond-1 - train/global_step__MIN": 2115,
      "brisk-pond-1 - train/global_step__MAX": 2115
    },
    {
      "Step": 425,
      "brisk-pond-1 - train/global_step": 2120,
      "brisk-pond-1 - train/global_step__MIN": 2120,
      "brisk-pond-1 - train/global_step__MAX": 2120
    },
    {
      "Step": 426,
      "brisk-pond-1 - train/global_step": 2125,
      "brisk-pond-1 - train/global_step__MIN": 2125,
      "brisk-pond-1 - train/global_step__MAX": 2125
    },
    {
      "Step": 427,
      "brisk-pond-1 - train/global_step": 2130,
      "brisk-pond-1 - train/global_step__MIN": 2130,
      "brisk-pond-1 - train/global_step__MAX": 2130
    },
    {
      "Step": 428,
      "brisk-pond-1 - train/global_step": 2135,
      "brisk-pond-1 - train/global_step__MIN": 2135,
      "brisk-pond-1 - train/global_step__MAX": 2135
    },
    {
      "Step": 429,
      "brisk-pond-1 - train/global_step": 2140,
      "brisk-pond-1 - train/global_step__MIN": 2140,
      "brisk-pond-1 - train/global_step__MAX": 2140
    },
    {
      "Step": 430,
      "brisk-pond-1 - train/global_step": 2145,
      "brisk-pond-1 - train/global_step__MIN": 2145,
      "brisk-pond-1 - train/global_step__MAX": 2145
    },
    {
      "Step": 431,
      "brisk-pond-1 - train/global_step": 2150,
      "brisk-pond-1 - train/global_step__MIN": 2150,
      "brisk-pond-1 - train/global_step__MAX": 2150
    },
    {
      "Step": 432,
      "brisk-pond-1 - train/global_step": 2155,
      "brisk-pond-1 - train/global_step__MIN": 2155,
      "brisk-pond-1 - train/global_step__MAX": 2155
    },
    {
      "Step": 433,
      "brisk-pond-1 - train/global_step": 2160,
      "brisk-pond-1 - train/global_step__MIN": 2160,
      "brisk-pond-1 - train/global_step__MAX": 2160
    },
    {
      "Step": 434,
      "brisk-pond-1 - train/global_step": 2165,
      "brisk-pond-1 - train/global_step__MIN": 2165,
      "brisk-pond-1 - train/global_step__MAX": 2165
    },
    {
      "Step": 435,
      "brisk-pond-1 - train/global_step": 2170,
      "brisk-pond-1 - train/global_step__MIN": 2170,
      "brisk-pond-1 - train/global_step__MAX": 2170
    },
    {
      "Step": 436,
      "brisk-pond-1 - train/global_step": 2175,
      "brisk-pond-1 - train/global_step__MIN": 2175,
      "brisk-pond-1 - train/global_step__MAX": 2175
    },
    {
      "Step": 437,
      "brisk-pond-1 - train/global_step": 2180,
      "brisk-pond-1 - train/global_step__MIN": 2180,
      "brisk-pond-1 - train/global_step__MAX": 2180
    },
    {
      "Step": 438,
      "brisk-pond-1 - train/global_step": 2185,
      "brisk-pond-1 - train/global_step__MIN": 2185,
      "brisk-pond-1 - train/global_step__MAX": 2185
    },
    {
      "Step": 439,
      "brisk-pond-1 - train/global_step": 2190,
      "brisk-pond-1 - train/global_step__MIN": 2190,
      "brisk-pond-1 - train/global_step__MAX": 2190
    },
    {
      "Step": 440,
      "brisk-pond-1 - train/global_step": 2195,
      "brisk-pond-1 - train/global_step__MIN": 2195,
      "brisk-pond-1 - train/global_step__MAX": 2195
    },
    {
      "Step": 441,
      "brisk-pond-1 - train/global_step": 2200,
      "brisk-pond-1 - train/global_step__MIN": 2200,
      "brisk-pond-1 - train/global_step__MAX": 2200
    },
    {
      "Step": 442,
      "brisk-pond-1 - train/global_step": 2205,
      "brisk-pond-1 - train/global_step__MIN": 2205,
      "brisk-pond-1 - train/global_step__MAX": 2205
    },
    {
      "Step": 443,
      "brisk-pond-1 - train/global_step": 2210,
      "brisk-pond-1 - train/global_step__MIN": 2210,
      "brisk-pond-1 - train/global_step__MAX": 2210
    },
    {
      "Step": 444,
      "brisk-pond-1 - train/global_step": 2215,
      "brisk-pond-1 - train/global_step__MIN": 2215,
      "brisk-pond-1 - train/global_step__MAX": 2215
    },
    {
      "Step": 445,
      "brisk-pond-1 - train/global_step": 2220,
      "brisk-pond-1 - train/global_step__MIN": 2220,
      "brisk-pond-1 - train/global_step__MAX": 2220
    },
    {
      "Step": 446,
      "brisk-pond-1 - train/global_step": 2225,
      "brisk-pond-1 - train/global_step__MIN": 2225,
      "brisk-pond-1 - train/global_step__MAX": 2225
    },
    {
      "Step": 447,
      "brisk-pond-1 - train/global_step": 2230,
      "brisk-pond-1 - train/global_step__MIN": 2230,
      "brisk-pond-1 - train/global_step__MAX": 2230
    },
    {
      "Step": 448,
      "brisk-pond-1 - train/global_step": 2235,
      "brisk-pond-1 - train/global_step__MIN": 2235,
      "brisk-pond-1 - train/global_step__MAX": 2235
    },
    {
      "Step": 449,
      "brisk-pond-1 - train/global_step": 2240,
      "brisk-pond-1 - train/global_step__MIN": 2240,
      "brisk-pond-1 - train/global_step__MAX": 2240
    },
    {
      "Step": 450,
      "brisk-pond-1 - train/global_step": 2245,
      "brisk-pond-1 - train/global_step__MIN": 2245,
      "brisk-pond-1 - train/global_step__MAX": 2245
    },
    {
      "Step": 451,
      "brisk-pond-1 - train/global_step": 2250,
      "brisk-pond-1 - train/global_step__MIN": 2250,
      "brisk-pond-1 - train/global_step__MAX": 2250
    },
    {
      "Step": 452,
      "brisk-pond-1 - train/global_step": 2255,
      "brisk-pond-1 - train/global_step__MIN": 2255,
      "brisk-pond-1 - train/global_step__MAX": 2255
    },
    {
      "Step": 453,
      "brisk-pond-1 - train/global_step": 2260,
      "brisk-pond-1 - train/global_step__MIN": 2260,
      "brisk-pond-1 - train/global_step__MAX": 2260
    },
    {
      "Step": 454,
      "brisk-pond-1 - train/global_step": 2265,
      "brisk-pond-1 - train/global_step__MIN": 2265,
      "brisk-pond-1 - train/global_step__MAX": 2265
    },
    {
      "Step": 455,
      "brisk-pond-1 - train/global_step": 2270,
      "brisk-pond-1 - train/global_step__MIN": 2270,
      "brisk-pond-1 - train/global_step__MAX": 2270
    },
    {
      "Step": 456,
      "brisk-pond-1 - train/global_step": 2275,
      "brisk-pond-1 - train/global_step__MIN": 2275,
      "brisk-pond-1 - train/global_step__MAX": 2275
    },
    {
      "Step": 457,
      "brisk-pond-1 - train/global_step": 2280,
      "brisk-pond-1 - train/global_step__MIN": 2280,
      "brisk-pond-1 - train/global_step__MAX": 2280
    },
    {
      "Step": 458,
      "brisk-pond-1 - train/global_step": 2285,
      "brisk-pond-1 - train/global_step__MIN": 2285,
      "brisk-pond-1 - train/global_step__MAX": 2285
    },
    {
      "Step": 459,
      "brisk-pond-1 - train/global_step": 2290,
      "brisk-pond-1 - train/global_step__MIN": 2290,
      "brisk-pond-1 - train/global_step__MAX": 2290
    },
    {
      "Step": 460,
      "brisk-pond-1 - train/global_step": 2295,
      "brisk-pond-1 - train/global_step__MIN": 2295,
      "brisk-pond-1 - train/global_step__MAX": 2295
    },
    {
      "Step": 461,
      "brisk-pond-1 - train/global_step": 2300,
      "brisk-pond-1 - train/global_step__MIN": 2300,
      "brisk-pond-1 - train/global_step__MAX": 2300
    },
    {
      "Step": 462,
      "brisk-pond-1 - train/global_step": 2305,
      "brisk-pond-1 - train/global_step__MIN": 2305,
      "brisk-pond-1 - train/global_step__MAX": 2305
    },
    {
      "Step": 463,
      "brisk-pond-1 - train/global_step": 2310,
      "brisk-pond-1 - train/global_step__MIN": 2310,
      "brisk-pond-1 - train/global_step__MAX": 2310
    },
    {
      "Step": 464,
      "brisk-pond-1 - train/global_step": 2315,
      "brisk-pond-1 - train/global_step__MIN": 2315,
      "brisk-pond-1 - train/global_step__MAX": 2315
    },
    {
      "Step": 465,
      "brisk-pond-1 - train/global_step": 2320,
      "brisk-pond-1 - train/global_step__MIN": 2320,
      "brisk-pond-1 - train/global_step__MAX": 2320
    },
    {
      "Step": 466,
      "brisk-pond-1 - train/global_step": 2325,
      "brisk-pond-1 - train/global_step__MIN": 2325,
      "brisk-pond-1 - train/global_step__MAX": 2325
    },
    {
      "Step": 467,
      "brisk-pond-1 - train/global_step": 2330,
      "brisk-pond-1 - train/global_step__MIN": 2330,
      "brisk-pond-1 - train/global_step__MAX": 2330
    },
    {
      "Step": 468,
      "brisk-pond-1 - train/global_step": 2335,
      "brisk-pond-1 - train/global_step__MIN": 2335,
      "brisk-pond-1 - train/global_step__MAX": 2335
    },
    {
      "Step": 469,
      "brisk-pond-1 - train/global_step": 2340,
      "brisk-pond-1 - train/global_step__MIN": 2340,
      "brisk-pond-1 - train/global_step__MAX": 2340
    },
    {
      "Step": 470,
      "brisk-pond-1 - train/global_step": 2345,
      "brisk-pond-1 - train/global_step__MIN": 2345,
      "brisk-pond-1 - train/global_step__MAX": 2345
    },
    {
      "Step": 471,
      "brisk-pond-1 - train/global_step": 2350,
      "brisk-pond-1 - train/global_step__MIN": 2350,
      "brisk-pond-1 - train/global_step__MAX": 2350
    },
    {
      "Step": 472,
      "brisk-pond-1 - train/global_step": 2355,
      "brisk-pond-1 - train/global_step__MIN": 2355,
      "brisk-pond-1 - train/global_step__MAX": 2355
    },
    {
      "Step": 473,
      "brisk-pond-1 - train/global_step": 2360,
      "brisk-pond-1 - train/global_step__MIN": 2360,
      "brisk-pond-1 - train/global_step__MAX": 2360
    },
    {
      "Step": 474,
      "brisk-pond-1 - train/global_step": 2365,
      "brisk-pond-1 - train/global_step__MIN": 2365,
      "brisk-pond-1 - train/global_step__MAX": 2365
    },
    {
      "Step": 475,
      "brisk-pond-1 - train/global_step": 2370,
      "brisk-pond-1 - train/global_step__MIN": 2370,
      "brisk-pond-1 - train/global_step__MAX": 2370
    },
    {
      "Step": 476,
      "brisk-pond-1 - train/global_step": 2375,
      "brisk-pond-1 - train/global_step__MIN": 2375,
      "brisk-pond-1 - train/global_step__MAX": 2375
    },
    {
      "Step": 477,
      "brisk-pond-1 - train/global_step": 2380,
      "brisk-pond-1 - train/global_step__MIN": 2380,
      "brisk-pond-1 - train/global_step__MAX": 2380
    },
    {
      "Step": 478,
      "brisk-pond-1 - train/global_step": 2385,
      "brisk-pond-1 - train/global_step__MIN": 2385,
      "brisk-pond-1 - train/global_step__MAX": 2385
    },
    {
      "Step": 479,
      "brisk-pond-1 - train/global_step": 2390,
      "brisk-pond-1 - train/global_step__MIN": 2390,
      "brisk-pond-1 - train/global_step__MAX": 2390
    },
    {
      "Step": 480,
      "brisk-pond-1 - train/global_step": 2395,
      "brisk-pond-1 - train/global_step__MIN": 2395,
      "brisk-pond-1 - train/global_step__MAX": 2395
    },
    {
      "Step": 481,
      "brisk-pond-1 - train/global_step": 2400,
      "brisk-pond-1 - train/global_step__MIN": 2400,
      "brisk-pond-1 - train/global_step__MAX": 2400
    },
    {
      "Step": 482,
      "brisk-pond-1 - train/global_step": 2405,
      "brisk-pond-1 - train/global_step__MIN": 2405,
      "brisk-pond-1 - train/global_step__MAX": 2405
    },
    {
      "Step": 483,
      "brisk-pond-1 - train/global_step": 2410,
      "brisk-pond-1 - train/global_step__MIN": 2410,
      "brisk-pond-1 - train/global_step__MAX": 2410
    },
    {
      "Step": 484,
      "brisk-pond-1 - train/global_step": 2415,
      "brisk-pond-1 - train/global_step__MIN": 2415,
      "brisk-pond-1 - train/global_step__MAX": 2415
    },
    {
      "Step": 485,
      "brisk-pond-1 - train/global_step": 2420,
      "brisk-pond-1 - train/global_step__MIN": 2420,
      "brisk-pond-1 - train/global_step__MAX": 2420
    },
    {
      "Step": 486,
      "brisk-pond-1 - train/global_step": 2425,
      "brisk-pond-1 - train/global_step__MIN": 2425,
      "brisk-pond-1 - train/global_step__MAX": 2425
    },
    {
      "Step": 487,
      "brisk-pond-1 - train/global_step": 2430,
      "brisk-pond-1 - train/global_step__MIN": 2430,
      "brisk-pond-1 - train/global_step__MAX": 2430
    },
    {
      "Step": 488,
      "brisk-pond-1 - train/global_step": 2435,
      "brisk-pond-1 - train/global_step__MIN": 2435,
      "brisk-pond-1 - train/global_step__MAX": 2435
    },
    {
      "Step": 489,
      "brisk-pond-1 - train/global_step": 2440,
      "brisk-pond-1 - train/global_step__MIN": 2440,
      "brisk-pond-1 - train/global_step__MAX": 2440
    },
    {
      "Step": 490,
      "brisk-pond-1 - train/global_step": 2445,
      "brisk-pond-1 - train/global_step__MIN": 2445,
      "brisk-pond-1 - train/global_step__MAX": 2445
    },
    {
      "Step": 491,
      "brisk-pond-1 - train/global_step": 2450,
      "brisk-pond-1 - train/global_step__MIN": 2450,
      "brisk-pond-1 - train/global_step__MAX": 2450
    },
    {
      "Step": 492,
      "brisk-pond-1 - train/global_step": 2455,
      "brisk-pond-1 - train/global_step__MIN": 2455,
      "brisk-pond-1 - train/global_step__MAX": 2455
    },
    {
      "Step": 493,
      "brisk-pond-1 - train/global_step": 2460,
      "brisk-pond-1 - train/global_step__MIN": 2460,
      "brisk-pond-1 - train/global_step__MAX": 2460
    },
    {
      "Step": 494,
      "brisk-pond-1 - train/global_step": 2465,
      "brisk-pond-1 - train/global_step__MIN": 2465,
      "brisk-pond-1 - train/global_step__MAX": 2465
    },
    {
      "Step": 495,
      "brisk-pond-1 - train/global_step": 2470,
      "brisk-pond-1 - train/global_step__MIN": 2470,
      "brisk-pond-1 - train/global_step__MAX": 2470
    },
    {
      "Step": 496,
      "brisk-pond-1 - train/global_step": 2475,
      "brisk-pond-1 - train/global_step__MIN": 2475,
      "brisk-pond-1 - train/global_step__MAX": 2475
    },
    {
      "Step": 497,
      "brisk-pond-1 - train/global_step": 2480,
      "brisk-pond-1 - train/global_step__MIN": 2480,
      "brisk-pond-1 - train/global_step__MAX": 2480
    },
    {
      "Step": 498,
      "brisk-pond-1 - train/global_step": 2485,
      "brisk-pond-1 - train/global_step__MIN": 2485,
      "brisk-pond-1 - train/global_step__MAX": 2485
    },
    {
      "Step": 499,
      "brisk-pond-1 - train/global_step": 2490,
      "brisk-pond-1 - train/global_step__MIN": 2490,
      "brisk-pond-1 - train/global_step__MAX": 2490
    },
    {
      "Step": 500,
      "brisk-pond-1 - train/global_step": 2495,
      "brisk-pond-1 - train/global_step__MIN": 2495,
      "brisk-pond-1 - train/global_step__MAX": 2495
    },
    {
      "Step": 501,
      "brisk-pond-1 - train/global_step": 2500,
      "brisk-pond-1 - train/global_step__MIN": 2500,
      "brisk-pond-1 - train/global_step__MAX": 2500
    },
    {
      "Step": 502,
      "brisk-pond-1 - train/global_step": 2505,
      "brisk-pond-1 - train/global_step__MIN": 2505,
      "brisk-pond-1 - train/global_step__MAX": 2505
    },
    {
      "Step": 503,
      "brisk-pond-1 - train/global_step": 2510,
      "brisk-pond-1 - train/global_step__MIN": 2510,
      "brisk-pond-1 - train/global_step__MAX": 2510
    },
    {
      "Step": 504,
      "brisk-pond-1 - train/global_step": 2515,
      "brisk-pond-1 - train/global_step__MIN": 2515,
      "brisk-pond-1 - train/global_step__MAX": 2515
    },
    {
      "Step": 505,
      "brisk-pond-1 - train/global_step": 2520,
      "brisk-pond-1 - train/global_step__MIN": 2520,
      "brisk-pond-1 - train/global_step__MAX": 2520
    },
    {
      "Step": 506,
      "brisk-pond-1 - train/global_step": 2525,
      "brisk-pond-1 - train/global_step__MIN": 2525,
      "brisk-pond-1 - train/global_step__MAX": 2525
    },
    {
      "Step": 507,
      "brisk-pond-1 - train/global_step": 2530,
      "brisk-pond-1 - train/global_step__MIN": 2530,
      "brisk-pond-1 - train/global_step__MAX": 2530
    },
    {
      "Step": 508,
      "brisk-pond-1 - train/global_step": 2535,
      "brisk-pond-1 - train/global_step__MIN": 2535,
      "brisk-pond-1 - train/global_step__MAX": 2535
    },
    {
      "Step": 509,
      "brisk-pond-1 - train/global_step": 2540,
      "brisk-pond-1 - train/global_step__MIN": 2540,
      "brisk-pond-1 - train/global_step__MAX": 2540
    },
    {
      "Step": 510,
      "brisk-pond-1 - train/global_step": 2545,
      "brisk-pond-1 - train/global_step__MIN": 2545,
      "brisk-pond-1 - train/global_step__MAX": 2545
    },
    {
      "Step": 511,
      "brisk-pond-1 - train/global_step": 2550,
      "brisk-pond-1 - train/global_step__MIN": 2550,
      "brisk-pond-1 - train/global_step__MAX": 2550
    },
    {
      "Step": 512,
      "brisk-pond-1 - train/global_step": 2555,
      "brisk-pond-1 - train/global_step__MIN": 2555,
      "brisk-pond-1 - train/global_step__MAX": 2555
    },
    {
      "Step": 513,
      "brisk-pond-1 - train/global_step": 2560,
      "brisk-pond-1 - train/global_step__MIN": 2560,
      "brisk-pond-1 - train/global_step__MAX": 2560
    },
    {
      "Step": 514,
      "brisk-pond-1 - train/global_step": 2565,
      "brisk-pond-1 - train/global_step__MIN": 2565,
      "brisk-pond-1 - train/global_step__MAX": 2565
    },
    {
      "Step": 515,
      "brisk-pond-1 - train/global_step": 2570,
      "brisk-pond-1 - train/global_step__MIN": 2570,
      "brisk-pond-1 - train/global_step__MAX": 2570
    },
    {
      "Step": 516,
      "brisk-pond-1 - train/global_step": 2575,
      "brisk-pond-1 - train/global_step__MIN": 2575,
      "brisk-pond-1 - train/global_step__MAX": 2575
    },
    {
      "Step": 517,
      "brisk-pond-1 - train/global_step": 2580,
      "brisk-pond-1 - train/global_step__MIN": 2580,
      "brisk-pond-1 - train/global_step__MAX": 2580
    },
    {
      "Step": 518,
      "brisk-pond-1 - train/global_step": 2585,
      "brisk-pond-1 - train/global_step__MIN": 2585,
      "brisk-pond-1 - train/global_step__MAX": 2585
    },
    {
      "Step": 519,
      "brisk-pond-1 - train/global_step": 2590,
      "brisk-pond-1 - train/global_step__MIN": 2590,
      "brisk-pond-1 - train/global_step__MAX": 2590
    },
    {
      "Step": 520,
      "brisk-pond-1 - train/global_step": 2595,
      "brisk-pond-1 - train/global_step__MIN": 2595,
      "brisk-pond-1 - train/global_step__MAX": 2595
    },
    {
      "Step": 521,
      "brisk-pond-1 - train/global_step": 2600,
      "brisk-pond-1 - train/global_step__MIN": 2600,
      "brisk-pond-1 - train/global_step__MAX": 2600
    },
    {
      "Step": 522,
      "brisk-pond-1 - train/global_step": 2605,
      "brisk-pond-1 - train/global_step__MIN": 2605,
      "brisk-pond-1 - train/global_step__MAX": 2605
    },
    {
      "Step": 523,
      "brisk-pond-1 - train/global_step": 2610,
      "brisk-pond-1 - train/global_step__MIN": 2610,
      "brisk-pond-1 - train/global_step__MAX": 2610
    },
    {
      "Step": 524,
      "brisk-pond-1 - train/global_step": 2615,
      "brisk-pond-1 - train/global_step__MIN": 2615,
      "brisk-pond-1 - train/global_step__MAX": 2615
    },
    {
      "Step": 525,
      "brisk-pond-1 - train/global_step": 2620,
      "brisk-pond-1 - train/global_step__MIN": 2620,
      "brisk-pond-1 - train/global_step__MAX": 2620
    },
    {
      "Step": 526,
      "brisk-pond-1 - train/global_step": 2625,
      "brisk-pond-1 - train/global_step__MIN": 2625,
      "brisk-pond-1 - train/global_step__MAX": 2625
    },
    {
      "Step": 527,
      "brisk-pond-1 - train/global_step": 2630,
      "brisk-pond-1 - train/global_step__MIN": 2630,
      "brisk-pond-1 - train/global_step__MAX": 2630
    },
    {
      "Step": 528,
      "brisk-pond-1 - train/global_step": 2635,
      "brisk-pond-1 - train/global_step__MIN": 2635,
      "brisk-pond-1 - train/global_step__MAX": 2635
    },
    {
      "Step": 529,
      "brisk-pond-1 - train/global_step": 2640,
      "brisk-pond-1 - train/global_step__MIN": 2640,
      "brisk-pond-1 - train/global_step__MAX": 2640
    },
    {
      "Step": 530,
      "brisk-pond-1 - train/global_step": 2645,
      "brisk-pond-1 - train/global_step__MIN": 2645,
      "brisk-pond-1 - train/global_step__MAX": 2645
    },
    {
      "Step": 531,
      "brisk-pond-1 - train/global_step": 2650,
      "brisk-pond-1 - train/global_step__MIN": 2650,
      "brisk-pond-1 - train/global_step__MAX": 2650
    },
    {
      "Step": 532,
      "brisk-pond-1 - train/global_step": 2655,
      "brisk-pond-1 - train/global_step__MIN": 2655,
      "brisk-pond-1 - train/global_step__MAX": 2655
    },
    {
      "Step": 533,
      "brisk-pond-1 - train/global_step": 2660,
      "brisk-pond-1 - train/global_step__MIN": 2660,
      "brisk-pond-1 - train/global_step__MAX": 2660
    },
    {
      "Step": 534,
      "brisk-pond-1 - train/global_step": 2665,
      "brisk-pond-1 - train/global_step__MIN": 2665,
      "brisk-pond-1 - train/global_step__MAX": 2665
    },
    {
      "Step": 535,
      "brisk-pond-1 - train/global_step": 2670,
      "brisk-pond-1 - train/global_step__MIN": 2670,
      "brisk-pond-1 - train/global_step__MAX": 2670
    },
    {
      "Step": 536,
      "brisk-pond-1 - train/global_step": 2675,
      "brisk-pond-1 - train/global_step__MIN": 2675,
      "brisk-pond-1 - train/global_step__MAX": 2675
    },
    {
      "Step": 537,
      "brisk-pond-1 - train/global_step": 2680,
      "brisk-pond-1 - train/global_step__MIN": 2680,
      "brisk-pond-1 - train/global_step__MAX": 2680
    },
    {
      "Step": 538,
      "brisk-pond-1 - train/global_step": 2685,
      "brisk-pond-1 - train/global_step__MIN": 2685,
      "brisk-pond-1 - train/global_step__MAX": 2685
    },
    {
      "Step": 539,
      "brisk-pond-1 - train/global_step": 2690,
      "brisk-pond-1 - train/global_step__MIN": 2690,
      "brisk-pond-1 - train/global_step__MAX": 2690
    },
    {
      "Step": 540,
      "brisk-pond-1 - train/global_step": 2695,
      "brisk-pond-1 - train/global_step__MIN": 2695,
      "brisk-pond-1 - train/global_step__MAX": 2695
    },
    {
      "Step": 541,
      "brisk-pond-1 - train/global_step": 2700,
      "brisk-pond-1 - train/global_step__MIN": 2700,
      "brisk-pond-1 - train/global_step__MAX": 2700
    },
    {
      "Step": 542,
      "brisk-pond-1 - train/global_step": 2705,
      "brisk-pond-1 - train/global_step__MIN": 2705,
      "brisk-pond-1 - train/global_step__MAX": 2705
    },
    {
      "Step": 543,
      "brisk-pond-1 - train/global_step": 2710,
      "brisk-pond-1 - train/global_step__MIN": 2710,
      "brisk-pond-1 - train/global_step__MAX": 2710
    },
    {
      "Step": 544,
      "brisk-pond-1 - train/global_step": 2715,
      "brisk-pond-1 - train/global_step__MIN": 2715,
      "brisk-pond-1 - train/global_step__MAX": 2715
    },
    {
      "Step": 545,
      "brisk-pond-1 - train/global_step": 2720,
      "brisk-pond-1 - train/global_step__MIN": 2720,
      "brisk-pond-1 - train/global_step__MAX": 2720
    },
    {
      "Step": 546,
      "brisk-pond-1 - train/global_step": 2725,
      "brisk-pond-1 - train/global_step__MIN": 2725,
      "brisk-pond-1 - train/global_step__MAX": 2725
    },
    {
      "Step": 547,
      "brisk-pond-1 - train/global_step": 2730,
      "brisk-pond-1 - train/global_step__MIN": 2730,
      "brisk-pond-1 - train/global_step__MAX": 2730
    },
    {
      "Step": 548,
      "brisk-pond-1 - train/global_step": 2735,
      "brisk-pond-1 - train/global_step__MIN": 2735,
      "brisk-pond-1 - train/global_step__MAX": 2735
    },
    {
      "Step": 549,
      "brisk-pond-1 - train/global_step": 2740,
      "brisk-pond-1 - train/global_step__MIN": 2740,
      "brisk-pond-1 - train/global_step__MAX": 2740
    },
    {
      "Step": 550,
      "brisk-pond-1 - train/global_step": 2745,
      "brisk-pond-1 - train/global_step__MIN": 2745,
      "brisk-pond-1 - train/global_step__MAX": 2745
    },
    {
      "Step": 551,
      "brisk-pond-1 - train/global_step": 2750,
      "brisk-pond-1 - train/global_step__MIN": 2750,
      "brisk-pond-1 - train/global_step__MAX": 2750
    },
    {
      "Step": 552,
      "brisk-pond-1 - train/global_step": 2755,
      "brisk-pond-1 - train/global_step__MIN": 2755,
      "brisk-pond-1 - train/global_step__MAX": 2755
    },
    {
      "Step": 553,
      "brisk-pond-1 - train/global_step": 2760,
      "brisk-pond-1 - train/global_step__MIN": 2760,
      "brisk-pond-1 - train/global_step__MAX": 2760
    },
    {
      "Step": 554,
      "brisk-pond-1 - train/global_step": 2765,
      "brisk-pond-1 - train/global_step__MIN": 2765,
      "brisk-pond-1 - train/global_step__MAX": 2765
    },
    {
      "Step": 555,
      "brisk-pond-1 - train/global_step": 2770,
      "brisk-pond-1 - train/global_step__MIN": 2770,
      "brisk-pond-1 - train/global_step__MAX": 2770
    },
    {
      "Step": 556,
      "brisk-pond-1 - train/global_step": 2775,
      "brisk-pond-1 - train/global_step__MIN": 2775,
      "brisk-pond-1 - train/global_step__MAX": 2775
    },
    {
      "Step": 557,
      "brisk-pond-1 - train/global_step": 2780,
      "brisk-pond-1 - train/global_step__MIN": 2780,
      "brisk-pond-1 - train/global_step__MAX": 2780
    },
    {
      "Step": 558,
      "brisk-pond-1 - train/global_step": 2785,
      "brisk-pond-1 - train/global_step__MIN": 2785,
      "brisk-pond-1 - train/global_step__MAX": 2785
    },
    {
      "Step": 559,
      "brisk-pond-1 - train/global_step": 2790,
      "brisk-pond-1 - train/global_step__MIN": 2790,
      "brisk-pond-1 - train/global_step__MAX": 2790
    },
    {
      "Step": 560,
      "brisk-pond-1 - train/global_step": 2795,
      "brisk-pond-1 - train/global_step__MIN": 2795,
      "brisk-pond-1 - train/global_step__MAX": 2795
    },
    {
      "Step": 561,
      "brisk-pond-1 - train/global_step": 2800,
      "brisk-pond-1 - train/global_step__MIN": 2800,
      "brisk-pond-1 - train/global_step__MAX": 2800
    },
    {
      "Step": 562,
      "brisk-pond-1 - train/global_step": 2805,
      "brisk-pond-1 - train/global_step__MIN": 2805,
      "brisk-pond-1 - train/global_step__MAX": 2805
    },
    {
      "Step": 563,
      "brisk-pond-1 - train/global_step": 2810,
      "brisk-pond-1 - train/global_step__MIN": 2810,
      "brisk-pond-1 - train/global_step__MAX": 2810
    },
    {
      "Step": 564,
      "brisk-pond-1 - train/global_step": 2815,
      "brisk-pond-1 - train/global_step__MIN": 2815,
      "brisk-pond-1 - train/global_step__MAX": 2815
    },
    {
      "Step": 565,
      "brisk-pond-1 - train/global_step": 2820,
      "brisk-pond-1 - train/global_step__MIN": 2820,
      "brisk-pond-1 - train/global_step__MAX": 2820
    },
    {
      "Step": 566,
      "brisk-pond-1 - train/global_step": 2825,
      "brisk-pond-1 - train/global_step__MIN": 2825,
      "brisk-pond-1 - train/global_step__MAX": 2825
    },
    {
      "Step": 567,
      "brisk-pond-1 - train/global_step": 2830,
      "brisk-pond-1 - train/global_step__MIN": 2830,
      "brisk-pond-1 - train/global_step__MAX": 2830
    },
    {
      "Step": 568,
      "brisk-pond-1 - train/global_step": 2835,
      "brisk-pond-1 - train/global_step__MIN": 2835,
      "brisk-pond-1 - train/global_step__MAX": 2835
    },
    {
      "Step": 569,
      "brisk-pond-1 - train/global_step": 2840,
      "brisk-pond-1 - train/global_step__MIN": 2840,
      "brisk-pond-1 - train/global_step__MAX": 2840
    },
    {
      "Step": 570,
      "brisk-pond-1 - train/global_step": 2845,
      "brisk-pond-1 - train/global_step__MIN": 2845,
      "brisk-pond-1 - train/global_step__MAX": 2845
    },
    {
      "Step": 571,
      "brisk-pond-1 - train/global_step": 2850,
      "brisk-pond-1 - train/global_step__MIN": 2850,
      "brisk-pond-1 - train/global_step__MAX": 2850
    },
    {
      "Step": 572,
      "brisk-pond-1 - train/global_step": 2855,
      "brisk-pond-1 - train/global_step__MIN": 2855,
      "brisk-pond-1 - train/global_step__MAX": 2855
    },
    {
      "Step": 573,
      "brisk-pond-1 - train/global_step": 2860,
      "brisk-pond-1 - train/global_step__MIN": 2860,
      "brisk-pond-1 - train/global_step__MAX": 2860
    },
    {
      "Step": 574,
      "brisk-pond-1 - train/global_step": 2865,
      "brisk-pond-1 - train/global_step__MIN": 2865,
      "brisk-pond-1 - train/global_step__MAX": 2865
    },
    {
      "Step": 575,
      "brisk-pond-1 - train/global_step": 2870,
      "brisk-pond-1 - train/global_step__MIN": 2870,
      "brisk-pond-1 - train/global_step__MAX": 2870
    },
    {
      "Step": 576,
      "brisk-pond-1 - train/global_step": 2875,
      "brisk-pond-1 - train/global_step__MIN": 2875,
      "brisk-pond-1 - train/global_step__MAX": 2875
    },
    {
      "Step": 577,
      "brisk-pond-1 - train/global_step": 2880,
      "brisk-pond-1 - train/global_step__MIN": 2880,
      "brisk-pond-1 - train/global_step__MAX": 2880
    },
    {
      "Step": 578,
      "brisk-pond-1 - train/global_step": 2885,
      "brisk-pond-1 - train/global_step__MIN": 2885,
      "brisk-pond-1 - train/global_step__MAX": 2885
    },
    {
      "Step": 579,
      "brisk-pond-1 - train/global_step": 2890,
      "brisk-pond-1 - train/global_step__MIN": 2890,
      "brisk-pond-1 - train/global_step__MAX": 2890
    },
    {
      "Step": 580,
      "brisk-pond-1 - train/global_step": 2895,
      "brisk-pond-1 - train/global_step__MIN": 2895,
      "brisk-pond-1 - train/global_step__MAX": 2895
    },
    {
      "Step": 581,
      "brisk-pond-1 - train/global_step": 2900,
      "brisk-pond-1 - train/global_step__MIN": 2900,
      "brisk-pond-1 - train/global_step__MAX": 2900
    },
    {
      "Step": 582,
      "brisk-pond-1 - train/global_step": 2905,
      "brisk-pond-1 - train/global_step__MIN": 2905,
      "brisk-pond-1 - train/global_step__MAX": 2905
    },
    {
      "Step": 583,
      "brisk-pond-1 - train/global_step": 2910,
      "brisk-pond-1 - train/global_step__MIN": 2910,
      "brisk-pond-1 - train/global_step__MAX": 2910
    },
    {
      "Step": 584,
      "brisk-pond-1 - train/global_step": 2915,
      "brisk-pond-1 - train/global_step__MIN": 2915,
      "brisk-pond-1 - train/global_step__MAX": 2915
    },
    {
      "Step": 585,
      "brisk-pond-1 - train/global_step": 2920,
      "brisk-pond-1 - train/global_step__MIN": 2920,
      "brisk-pond-1 - train/global_step__MAX": 2920
    },
    {
      "Step": 586,
      "brisk-pond-1 - train/global_step": 2925,
      "brisk-pond-1 - train/global_step__MIN": 2925,
      "brisk-pond-1 - train/global_step__MAX": 2925
    },
    {
      "Step": 587,
      "brisk-pond-1 - train/global_step": 2930,
      "brisk-pond-1 - train/global_step__MIN": 2930,
      "brisk-pond-1 - train/global_step__MAX": 2930
    },
    {
      "Step": 588,
      "brisk-pond-1 - train/global_step": 2935,
      "brisk-pond-1 - train/global_step__MIN": 2935,
      "brisk-pond-1 - train/global_step__MAX": 2935
    },
    {
      "Step": 589,
      "brisk-pond-1 - train/global_step": 2940,
      "brisk-pond-1 - train/global_step__MIN": 2940,
      "brisk-pond-1 - train/global_step__MAX": 2940
    },
    {
      "Step": 590,
      "brisk-pond-1 - train/global_step": 2945,
      "brisk-pond-1 - train/global_step__MIN": 2945,
      "brisk-pond-1 - train/global_step__MAX": 2945
    },
    {
      "Step": 591,
      "brisk-pond-1 - train/global_step": 2950,
      "brisk-pond-1 - train/global_step__MIN": 2950,
      "brisk-pond-1 - train/global_step__MAX": 2950
    },
    {
      "Step": 592,
      "brisk-pond-1 - train/global_step": 2955,
      "brisk-pond-1 - train/global_step__MIN": 2955,
      "brisk-pond-1 - train/global_step__MAX": 2955
    },
    {
      "Step": 593,
      "brisk-pond-1 - train/global_step": 2960,
      "brisk-pond-1 - train/global_step__MIN": 2960,
      "brisk-pond-1 - train/global_step__MAX": 2960
    },
    {
      "Step": 594,
      "brisk-pond-1 - train/global_step": 2965,
      "brisk-pond-1 - train/global_step__MIN": 2965,
      "brisk-pond-1 - train/global_step__MAX": 2965
    },
    {
      "Step": 595,
      "brisk-pond-1 - train/global_step": 2970,
      "brisk-pond-1 - train/global_step__MIN": 2970,
      "brisk-pond-1 - train/global_step__MAX": 2970
    },
    {
      "Step": 596,
      "brisk-pond-1 - train/global_step": 2975,
      "brisk-pond-1 - train/global_step__MIN": 2975,
      "brisk-pond-1 - train/global_step__MAX": 2975
    },
    {
      "Step": 597,
      "brisk-pond-1 - train/global_step": 2980,
      "brisk-pond-1 - train/global_step__MIN": 2980,
      "brisk-pond-1 - train/global_step__MAX": 2980
    },
    {
      "Step": 598,
      "brisk-pond-1 - train/global_step": 2985,
      "brisk-pond-1 - train/global_step__MIN": 2985,
      "brisk-pond-1 - train/global_step__MAX": 2985
    },
    {
      "Step": 599,
      "brisk-pond-1 - train/global_step": 2990,
      "brisk-pond-1 - train/global_step__MIN": 2990,
      "brisk-pond-1 - train/global_step__MAX": 2990
    },
    {
      "Step": 600,
      "brisk-pond-1 - train/global_step": 2995,
      "brisk-pond-1 - train/global_step__MIN": 2995,
      "brisk-pond-1 - train/global_step__MAX": 2995
    },
    {
      "Step": 601,
      "brisk-pond-1 - train/global_step": 3000,
      "brisk-pond-1 - train/global_step__MIN": 3000,
      "brisk-pond-1 - train/global_step__MAX": 3000
    },
    {
      "Step": 602,
      "brisk-pond-1 - train/global_step": 3000,
      "brisk-pond-1 - train/global_step__MIN": 3000,
      "brisk-pond-1 - train/global_step__MAX": 3000
    },
    {
      "Step": 603,
      "brisk-pond-1 - train/global_step": 3005,
      "brisk-pond-1 - train/global_step__MIN": 3005,
      "brisk-pond-1 - train/global_step__MAX": 3005
    },
    {
      "Step": 604,
      "brisk-pond-1 - train/global_step": 3010,
      "brisk-pond-1 - train/global_step__MIN": 3010,
      "brisk-pond-1 - train/global_step__MAX": 3010
    },
    {
      "Step": 605,
      "brisk-pond-1 - train/global_step": 3015,
      "brisk-pond-1 - train/global_step__MIN": 3015,
      "brisk-pond-1 - train/global_step__MAX": 3015
    },
    {
      "Step": 606,
      "brisk-pond-1 - train/global_step": 3020,
      "brisk-pond-1 - train/global_step__MIN": 3020,
      "brisk-pond-1 - train/global_step__MAX": 3020
    },
    {
      "Step": 607,
      "brisk-pond-1 - train/global_step": 3025,
      "brisk-pond-1 - train/global_step__MIN": 3025,
      "brisk-pond-1 - train/global_step__MAX": 3025
    },
    {
      "Step": 608,
      "brisk-pond-1 - train/global_step": 3030,
      "brisk-pond-1 - train/global_step__MIN": 3030,
      "brisk-pond-1 - train/global_step__MAX": 3030
    },
    {
      "Step": 609,
      "brisk-pond-1 - train/global_step": 3035,
      "brisk-pond-1 - train/global_step__MIN": 3035,
      "brisk-pond-1 - train/global_step__MAX": 3035
    },
    {
      "Step": 610,
      "brisk-pond-1 - train/global_step": 3040,
      "brisk-pond-1 - train/global_step__MIN": 3040,
      "brisk-pond-1 - train/global_step__MAX": 3040
    },
    {
      "Step": 611,
      "brisk-pond-1 - train/global_step": 3045,
      "brisk-pond-1 - train/global_step__MIN": 3045,
      "brisk-pond-1 - train/global_step__MAX": 3045
    },
    {
      "Step": 612,
      "brisk-pond-1 - train/global_step": 3050,
      "brisk-pond-1 - train/global_step__MIN": 3050,
      "brisk-pond-1 - train/global_step__MAX": 3050
    },
    {
      "Step": 613,
      "brisk-pond-1 - train/global_step": 3055,
      "brisk-pond-1 - train/global_step__MIN": 3055,
      "brisk-pond-1 - train/global_step__MAX": 3055
    },
    {
      "Step": 614,
      "brisk-pond-1 - train/global_step": 3060,
      "brisk-pond-1 - train/global_step__MIN": 3060,
      "brisk-pond-1 - train/global_step__MAX": 3060
    },
    {
      "Step": 615,
      "brisk-pond-1 - train/global_step": 3065,
      "brisk-pond-1 - train/global_step__MIN": 3065,
      "brisk-pond-1 - train/global_step__MAX": 3065
    },
    {
      "Step": 616,
      "brisk-pond-1 - train/global_step": 3070,
      "brisk-pond-1 - train/global_step__MIN": 3070,
      "brisk-pond-1 - train/global_step__MAX": 3070
    },
    {
      "Step": 617,
      "brisk-pond-1 - train/global_step": 3075,
      "brisk-pond-1 - train/global_step__MIN": 3075,
      "brisk-pond-1 - train/global_step__MAX": 3075
    },
    {
      "Step": 618,
      "brisk-pond-1 - train/global_step": 3080,
      "brisk-pond-1 - train/global_step__MIN": 3080,
      "brisk-pond-1 - train/global_step__MAX": 3080
    },
    {
      "Step": 619,
      "brisk-pond-1 - train/global_step": 3085,
      "brisk-pond-1 - train/global_step__MIN": 3085,
      "brisk-pond-1 - train/global_step__MAX": 3085
    },
    {
      "Step": 620,
      "brisk-pond-1 - train/global_step": 3090,
      "brisk-pond-1 - train/global_step__MIN": 3090,
      "brisk-pond-1 - train/global_step__MAX": 3090
    },
    {
      "Step": 621,
      "brisk-pond-1 - train/global_step": 3095,
      "brisk-pond-1 - train/global_step__MIN": 3095,
      "brisk-pond-1 - train/global_step__MAX": 3095
    },
    {
      "Step": 622,
      "brisk-pond-1 - train/global_step": 3100,
      "brisk-pond-1 - train/global_step__MIN": 3100,
      "brisk-pond-1 - train/global_step__MAX": 3100
    },
    {
      "Step": 623,
      "brisk-pond-1 - train/global_step": 3105,
      "brisk-pond-1 - train/global_step__MIN": 3105,
      "brisk-pond-1 - train/global_step__MAX": 3105
    },
    {
      "Step": 624,
      "brisk-pond-1 - train/global_step": 3110,
      "brisk-pond-1 - train/global_step__MIN": 3110,
      "brisk-pond-1 - train/global_step__MAX": 3110
    },
    {
      "Step": 625,
      "brisk-pond-1 - train/global_step": 3115,
      "brisk-pond-1 - train/global_step__MIN": 3115,
      "brisk-pond-1 - train/global_step__MAX": 3115
    },
    {
      "Step": 626,
      "brisk-pond-1 - train/global_step": 3120,
      "brisk-pond-1 - train/global_step__MIN": 3120,
      "brisk-pond-1 - train/global_step__MAX": 3120
    },
    {
      "Step": 627,
      "brisk-pond-1 - train/global_step": 3125,
      "brisk-pond-1 - train/global_step__MIN": 3125,
      "brisk-pond-1 - train/global_step__MAX": 3125
    },
    {
      "Step": 628,
      "brisk-pond-1 - train/global_step": 3130,
      "brisk-pond-1 - train/global_step__MIN": 3130,
      "brisk-pond-1 - train/global_step__MAX": 3130
    },
    {
      "Step": 629,
      "brisk-pond-1 - train/global_step": 3135,
      "brisk-pond-1 - train/global_step__MIN": 3135,
      "brisk-pond-1 - train/global_step__MAX": 3135
    },
    {
      "Step": 630,
      "brisk-pond-1 - train/global_step": 3140,
      "brisk-pond-1 - train/global_step__MIN": 3140,
      "brisk-pond-1 - train/global_step__MAX": 3140
    },
    {
      "Step": 631,
      "brisk-pond-1 - train/global_step": 3145,
      "brisk-pond-1 - train/global_step__MIN": 3145,
      "brisk-pond-1 - train/global_step__MAX": 3145
    },
    {
      "Step": 632,
      "brisk-pond-1 - train/global_step": 3150,
      "brisk-pond-1 - train/global_step__MIN": 3150,
      "brisk-pond-1 - train/global_step__MAX": 3150
    },
    {
      "Step": 633,
      "brisk-pond-1 - train/global_step": 3155,
      "brisk-pond-1 - train/global_step__MIN": 3155,
      "brisk-pond-1 - train/global_step__MAX": 3155
    },
    {
      "Step": 634,
      "brisk-pond-1 - train/global_step": 3160,
      "brisk-pond-1 - train/global_step__MIN": 3160,
      "brisk-pond-1 - train/global_step__MAX": 3160
    },
    {
      "Step": 635,
      "brisk-pond-1 - train/global_step": 3165,
      "brisk-pond-1 - train/global_step__MIN": 3165,
      "brisk-pond-1 - train/global_step__MAX": 3165
    },
    {
      "Step": 636,
      "brisk-pond-1 - train/global_step": 3170,
      "brisk-pond-1 - train/global_step__MIN": 3170,
      "brisk-pond-1 - train/global_step__MAX": 3170
    },
    {
      "Step": 637,
      "brisk-pond-1 - train/global_step": 3175,
      "brisk-pond-1 - train/global_step__MIN": 3175,
      "brisk-pond-1 - train/global_step__MAX": 3175
    },
    {
      "Step": 638,
      "brisk-pond-1 - train/global_step": 3180,
      "brisk-pond-1 - train/global_step__MIN": 3180,
      "brisk-pond-1 - train/global_step__MAX": 3180
    },
    {
      "Step": 639,
      "brisk-pond-1 - train/global_step": 3185,
      "brisk-pond-1 - train/global_step__MIN": 3185,
      "brisk-pond-1 - train/global_step__MAX": 3185
    },
    {
      "Step": 640,
      "brisk-pond-1 - train/global_step": 3190,
      "brisk-pond-1 - train/global_step__MIN": 3190,
      "brisk-pond-1 - train/global_step__MAX": 3190
    },
    {
      "Step": 641,
      "brisk-pond-1 - train/global_step": 3195,
      "brisk-pond-1 - train/global_step__MIN": 3195,
      "brisk-pond-1 - train/global_step__MAX": 3195
    },
    {
      "Step": 642,
      "brisk-pond-1 - train/global_step": 3200,
      "brisk-pond-1 - train/global_step__MIN": 3200,
      "brisk-pond-1 - train/global_step__MAX": 3200
    },
    {
      "Step": 643,
      "brisk-pond-1 - train/global_step": 3205,
      "brisk-pond-1 - train/global_step__MIN": 3205,
      "brisk-pond-1 - train/global_step__MAX": 3205
    },
    {
      "Step": 644,
      "brisk-pond-1 - train/global_step": 3210,
      "brisk-pond-1 - train/global_step__MIN": 3210,
      "brisk-pond-1 - train/global_step__MAX": 3210
    },
    {
      "Step": 645,
      "brisk-pond-1 - train/global_step": 3215,
      "brisk-pond-1 - train/global_step__MIN": 3215,
      "brisk-pond-1 - train/global_step__MAX": 3215
    },
    {
      "Step": 646,
      "brisk-pond-1 - train/global_step": 3220,
      "brisk-pond-1 - train/global_step__MIN": 3220,
      "brisk-pond-1 - train/global_step__MAX": 3220
    },
    {
      "Step": 647,
      "brisk-pond-1 - train/global_step": 3225,
      "brisk-pond-1 - train/global_step__MIN": 3225,
      "brisk-pond-1 - train/global_step__MAX": 3225
    },
    {
      "Step": 648,
      "brisk-pond-1 - train/global_step": 3230,
      "brisk-pond-1 - train/global_step__MIN": 3230,
      "brisk-pond-1 - train/global_step__MAX": 3230
    },
    {
      "Step": 649,
      "brisk-pond-1 - train/global_step": 3235,
      "brisk-pond-1 - train/global_step__MIN": 3235,
      "brisk-pond-1 - train/global_step__MAX": 3235
    },
    {
      "Step": 650,
      "brisk-pond-1 - train/global_step": 3240,
      "brisk-pond-1 - train/global_step__MIN": 3240,
      "brisk-pond-1 - train/global_step__MAX": 3240
    },
    {
      "Step": 651,
      "brisk-pond-1 - train/global_step": 3245,
      "brisk-pond-1 - train/global_step__MIN": 3245,
      "brisk-pond-1 - train/global_step__MAX": 3245
    },
    {
      "Step": 652,
      "brisk-pond-1 - train/global_step": 3250,
      "brisk-pond-1 - train/global_step__MIN": 3250,
      "brisk-pond-1 - train/global_step__MAX": 3250
    },
    {
      "Step": 653,
      "brisk-pond-1 - train/global_step": 3255,
      "brisk-pond-1 - train/global_step__MIN": 3255,
      "brisk-pond-1 - train/global_step__MAX": 3255
    },
    {
      "Step": 654,
      "brisk-pond-1 - train/global_step": 3260,
      "brisk-pond-1 - train/global_step__MIN": 3260,
      "brisk-pond-1 - train/global_step__MAX": 3260
    },
    {
      "Step": 655,
      "brisk-pond-1 - train/global_step": 3265,
      "brisk-pond-1 - train/global_step__MIN": 3265,
      "brisk-pond-1 - train/global_step__MAX": 3265
    },
    {
      "Step": 656,
      "brisk-pond-1 - train/global_step": 3270,
      "brisk-pond-1 - train/global_step__MIN": 3270,
      "brisk-pond-1 - train/global_step__MAX": 3270
    },
    {
      "Step": 657,
      "brisk-pond-1 - train/global_step": 3275,
      "brisk-pond-1 - train/global_step__MIN": 3275,
      "brisk-pond-1 - train/global_step__MAX": 3275
    },
    {
      "Step": 658,
      "brisk-pond-1 - train/global_step": 3280,
      "brisk-pond-1 - train/global_step__MIN": 3280,
      "brisk-pond-1 - train/global_step__MAX": 3280
    },
    {
      "Step": 659,
      "brisk-pond-1 - train/global_step": 3285,
      "brisk-pond-1 - train/global_step__MIN": 3285,
      "brisk-pond-1 - train/global_step__MAX": 3285
    },
    {
      "Step": 660,
      "brisk-pond-1 - train/global_step": 3290,
      "brisk-pond-1 - train/global_step__MIN": 3290,
      "brisk-pond-1 - train/global_step__MAX": 3290
    },
    {
      "Step": 661,
      "brisk-pond-1 - train/global_step": 3295,
      "brisk-pond-1 - train/global_step__MIN": 3295,
      "brisk-pond-1 - train/global_step__MAX": 3295
    },
    {
      "Step": 662,
      "brisk-pond-1 - train/global_step": 3300,
      "brisk-pond-1 - train/global_step__MIN": 3300,
      "brisk-pond-1 - train/global_step__MAX": 3300
    },
    {
      "Step": 663,
      "brisk-pond-1 - train/global_step": 3305,
      "brisk-pond-1 - train/global_step__MIN": 3305,
      "brisk-pond-1 - train/global_step__MAX": 3305
    },
    {
      "Step": 664,
      "brisk-pond-1 - train/global_step": 3310,
      "brisk-pond-1 - train/global_step__MIN": 3310,
      "brisk-pond-1 - train/global_step__MAX": 3310
    },
    {
      "Step": 665,
      "brisk-pond-1 - train/global_step": 3315,
      "brisk-pond-1 - train/global_step__MIN": 3315,
      "brisk-pond-1 - train/global_step__MAX": 3315
    },
    {
      "Step": 666,
      "brisk-pond-1 - train/global_step": 3320,
      "brisk-pond-1 - train/global_step__MIN": 3320,
      "brisk-pond-1 - train/global_step__MAX": 3320
    },
    {
      "Step": 667,
      "brisk-pond-1 - train/global_step": 3325,
      "brisk-pond-1 - train/global_step__MIN": 3325,
      "brisk-pond-1 - train/global_step__MAX": 3325
    },
    {
      "Step": 668,
      "brisk-pond-1 - train/global_step": 3330,
      "brisk-pond-1 - train/global_step__MIN": 3330,
      "brisk-pond-1 - train/global_step__MAX": 3330
    },
    {
      "Step": 669,
      "brisk-pond-1 - train/global_step": 3335,
      "brisk-pond-1 - train/global_step__MIN": 3335,
      "brisk-pond-1 - train/global_step__MAX": 3335
    },
    {
      "Step": 670,
      "brisk-pond-1 - train/global_step": 3340,
      "brisk-pond-1 - train/global_step__MIN": 3340,
      "brisk-pond-1 - train/global_step__MAX": 3340
    },
    {
      "Step": 671,
      "brisk-pond-1 - train/global_step": 3345,
      "brisk-pond-1 - train/global_step__MIN": 3345,
      "brisk-pond-1 - train/global_step__MAX": 3345
    },
    {
      "Step": 672,
      "brisk-pond-1 - train/global_step": 3350,
      "brisk-pond-1 - train/global_step__MIN": 3350,
      "brisk-pond-1 - train/global_step__MAX": 3350
    },
    {
      "Step": 673,
      "brisk-pond-1 - train/global_step": 3355,
      "brisk-pond-1 - train/global_step__MIN": 3355,
      "brisk-pond-1 - train/global_step__MAX": 3355
    },
    {
      "Step": 674,
      "brisk-pond-1 - train/global_step": 3360,
      "brisk-pond-1 - train/global_step__MIN": 3360,
      "brisk-pond-1 - train/global_step__MAX": 3360
    },
    {
      "Step": 675,
      "brisk-pond-1 - train/global_step": 3365,
      "brisk-pond-1 - train/global_step__MIN": 3365,
      "brisk-pond-1 - train/global_step__MAX": 3365
    },
    {
      "Step": 676,
      "brisk-pond-1 - train/global_step": 3370,
      "brisk-pond-1 - train/global_step__MIN": 3370,
      "brisk-pond-1 - train/global_step__MAX": 3370
    },
    {
      "Step": 677,
      "brisk-pond-1 - train/global_step": 3375,
      "brisk-pond-1 - train/global_step__MIN": 3375,
      "brisk-pond-1 - train/global_step__MAX": 3375
    },
    {
      "Step": 678,
      "brisk-pond-1 - train/global_step": 3380,
      "brisk-pond-1 - train/global_step__MIN": 3380,
      "brisk-pond-1 - train/global_step__MAX": 3380
    },
    {
      "Step": 679,
      "brisk-pond-1 - train/global_step": 3385,
      "brisk-pond-1 - train/global_step__MIN": 3385,
      "brisk-pond-1 - train/global_step__MAX": 3385
    },
    {
      "Step": 680,
      "brisk-pond-1 - train/global_step": 3390,
      "brisk-pond-1 - train/global_step__MIN": 3390,
      "brisk-pond-1 - train/global_step__MAX": 3390
    },
    {
      "Step": 681,
      "brisk-pond-1 - train/global_step": 3395,
      "brisk-pond-1 - train/global_step__MIN": 3395,
      "brisk-pond-1 - train/global_step__MAX": 3395
    },
    {
      "Step": 682,
      "brisk-pond-1 - train/global_step": 3400,
      "brisk-pond-1 - train/global_step__MIN": 3400,
      "brisk-pond-1 - train/global_step__MAX": 3400
    },
    {
      "Step": 683,
      "brisk-pond-1 - train/global_step": 3405,
      "brisk-pond-1 - train/global_step__MIN": 3405,
      "brisk-pond-1 - train/global_step__MAX": 3405
    },
    {
      "Step": 684,
      "brisk-pond-1 - train/global_step": 3410,
      "brisk-pond-1 - train/global_step__MIN": 3410,
      "brisk-pond-1 - train/global_step__MAX": 3410
    },
    {
      "Step": 685,
      "brisk-pond-1 - train/global_step": 3415,
      "brisk-pond-1 - train/global_step__MIN": 3415,
      "brisk-pond-1 - train/global_step__MAX": 3415
    },
    {
      "Step": 686,
      "brisk-pond-1 - train/global_step": 3420,
      "brisk-pond-1 - train/global_step__MIN": 3420,
      "brisk-pond-1 - train/global_step__MAX": 3420
    },
    {
      "Step": 687,
      "brisk-pond-1 - train/global_step": 3425,
      "brisk-pond-1 - train/global_step__MIN": 3425,
      "brisk-pond-1 - train/global_step__MAX": 3425
    },
    {
      "Step": 688,
      "brisk-pond-1 - train/global_step": 3430,
      "brisk-pond-1 - train/global_step__MIN": 3430,
      "brisk-pond-1 - train/global_step__MAX": 3430
    },
    {
      "Step": 689,
      "brisk-pond-1 - train/global_step": 3435,
      "brisk-pond-1 - train/global_step__MIN": 3435,
      "brisk-pond-1 - train/global_step__MAX": 3435
    },
    {
      "Step": 690,
      "brisk-pond-1 - train/global_step": 3440,
      "brisk-pond-1 - train/global_step__MIN": 3440,
      "brisk-pond-1 - train/global_step__MAX": 3440
    },
    {
      "Step": 691,
      "brisk-pond-1 - train/global_step": 3445,
      "brisk-pond-1 - train/global_step__MIN": 3445,
      "brisk-pond-1 - train/global_step__MAX": 3445
    },
    {
      "Step": 692,
      "brisk-pond-1 - train/global_step": 3450,
      "brisk-pond-1 - train/global_step__MIN": 3450,
      "brisk-pond-1 - train/global_step__MAX": 3450
    },
    {
      "Step": 693,
      "brisk-pond-1 - train/global_step": 3455,
      "brisk-pond-1 - train/global_step__MIN": 3455,
      "brisk-pond-1 - train/global_step__MAX": 3455
    },
    {
      "Step": 694,
      "brisk-pond-1 - train/global_step": 3460,
      "brisk-pond-1 - train/global_step__MIN": 3460,
      "brisk-pond-1 - train/global_step__MAX": 3460
    },
    {
      "Step": 695,
      "brisk-pond-1 - train/global_step": 3465,
      "brisk-pond-1 - train/global_step__MIN": 3465,
      "brisk-pond-1 - train/global_step__MAX": 3465
    },
    {
      "Step": 696,
      "brisk-pond-1 - train/global_step": 3470,
      "brisk-pond-1 - train/global_step__MIN": 3470,
      "brisk-pond-1 - train/global_step__MAX": 3470
    },
    {
      "Step": 697,
      "brisk-pond-1 - train/global_step": 3475,
      "brisk-pond-1 - train/global_step__MIN": 3475,
      "brisk-pond-1 - train/global_step__MAX": 3475
    },
    {
      "Step": 698,
      "brisk-pond-1 - train/global_step": 3480,
      "brisk-pond-1 - train/global_step__MIN": 3480,
      "brisk-pond-1 - train/global_step__MAX": 3480
    },
    {
      "Step": 699,
      "brisk-pond-1 - train/global_step": 3485,
      "brisk-pond-1 - train/global_step__MIN": 3485,
      "brisk-pond-1 - train/global_step__MAX": 3485
    },
    {
      "Step": 700,
      "brisk-pond-1 - train/global_step": 3490,
      "brisk-pond-1 - train/global_step__MIN": 3490,
      "brisk-pond-1 - train/global_step__MAX": 3490
    },
    {
      "Step": 701,
      "brisk-pond-1 - train/global_step": 3495,
      "brisk-pond-1 - train/global_step__MIN": 3495,
      "brisk-pond-1 - train/global_step__MAX": 3495
    },
    {
      "Step": 702,
      "brisk-pond-1 - train/global_step": 3500,
      "brisk-pond-1 - train/global_step__MIN": 3500,
      "brisk-pond-1 - train/global_step__MAX": 3500
    },
    {
      "Step": 703,
      "brisk-pond-1 - train/global_step": 3505,
      "brisk-pond-1 - train/global_step__MIN": 3505,
      "brisk-pond-1 - train/global_step__MAX": 3505
    },
    {
      "Step": 704,
      "brisk-pond-1 - train/global_step": 3510,
      "brisk-pond-1 - train/global_step__MIN": 3510,
      "brisk-pond-1 - train/global_step__MAX": 3510
    },
    {
      "Step": 705,
      "brisk-pond-1 - train/global_step": 3515,
      "brisk-pond-1 - train/global_step__MIN": 3515,
      "brisk-pond-1 - train/global_step__MAX": 3515
    },
    {
      "Step": 706,
      "brisk-pond-1 - train/global_step": 3520,
      "brisk-pond-1 - train/global_step__MIN": 3520,
      "brisk-pond-1 - train/global_step__MAX": 3520
    },
    {
      "Step": 707,
      "brisk-pond-1 - train/global_step": 3525,
      "brisk-pond-1 - train/global_step__MIN": 3525,
      "brisk-pond-1 - train/global_step__MAX": 3525
    },
    {
      "Step": 708,
      "brisk-pond-1 - train/global_step": 3530,
      "brisk-pond-1 - train/global_step__MIN": 3530,
      "brisk-pond-1 - train/global_step__MAX": 3530
    },
    {
      "Step": 709,
      "brisk-pond-1 - train/global_step": 3535,
      "brisk-pond-1 - train/global_step__MIN": 3535,
      "brisk-pond-1 - train/global_step__MAX": 3535
    },
    {
      "Step": 710,
      "brisk-pond-1 - train/global_step": 3540,
      "brisk-pond-1 - train/global_step__MIN": 3540,
      "brisk-pond-1 - train/global_step__MAX": 3540
    },
    {
      "Step": 711,
      "brisk-pond-1 - train/global_step": 3545,
      "brisk-pond-1 - train/global_step__MIN": 3545,
      "brisk-pond-1 - train/global_step__MAX": 3545
    },
    {
      "Step": 712,
      "brisk-pond-1 - train/global_step": 3550,
      "brisk-pond-1 - train/global_step__MIN": 3550,
      "brisk-pond-1 - train/global_step__MAX": 3550
    },
    {
      "Step": 713,
      "brisk-pond-1 - train/global_step": 3555,
      "brisk-pond-1 - train/global_step__MIN": 3555,
      "brisk-pond-1 - train/global_step__MAX": 3555
    },
    {
      "Step": 714,
      "brisk-pond-1 - train/global_step": 3560,
      "brisk-pond-1 - train/global_step__MIN": 3560,
      "brisk-pond-1 - train/global_step__MAX": 3560
    },
    {
      "Step": 715,
      "brisk-pond-1 - train/global_step": 3565,
      "brisk-pond-1 - train/global_step__MIN": 3565,
      "brisk-pond-1 - train/global_step__MAX": 3565
    },
    {
      "Step": 716,
      "brisk-pond-1 - train/global_step": 3570,
      "brisk-pond-1 - train/global_step__MIN": 3570,
      "brisk-pond-1 - train/global_step__MAX": 3570
    },
    {
      "Step": 717,
      "brisk-pond-1 - train/global_step": 3575,
      "brisk-pond-1 - train/global_step__MIN": 3575,
      "brisk-pond-1 - train/global_step__MAX": 3575
    },
    {
      "Step": 718,
      "brisk-pond-1 - train/global_step": 3580,
      "brisk-pond-1 - train/global_step__MIN": 3580,
      "brisk-pond-1 - train/global_step__MAX": 3580
    },
    {
      "Step": 719,
      "brisk-pond-1 - train/global_step": 3585,
      "brisk-pond-1 - train/global_step__MIN": 3585,
      "brisk-pond-1 - train/global_step__MAX": 3585
    },
    {
      "Step": 720,
      "brisk-pond-1 - train/global_step": 3590,
      "brisk-pond-1 - train/global_step__MIN": 3590,
      "brisk-pond-1 - train/global_step__MAX": 3590
    },
    {
      "Step": 721,
      "brisk-pond-1 - train/global_step": 3595,
      "brisk-pond-1 - train/global_step__MIN": 3595,
      "brisk-pond-1 - train/global_step__MAX": 3595
    },
    {
      "Step": 722,
      "brisk-pond-1 - train/global_step": 3600,
      "brisk-pond-1 - train/global_step__MIN": 3600,
      "brisk-pond-1 - train/global_step__MAX": 3600
    },
    {
      "Step": 723,
      "brisk-pond-1 - train/global_step": 3605,
      "brisk-pond-1 - train/global_step__MIN": 3605,
      "brisk-pond-1 - train/global_step__MAX": 3605
    },
    {
      "Step": 724,
      "brisk-pond-1 - train/global_step": 3610,
      "brisk-pond-1 - train/global_step__MIN": 3610,
      "brisk-pond-1 - train/global_step__MAX": 3610
    },
    {
      "Step": 725,
      "brisk-pond-1 - train/global_step": 3615,
      "brisk-pond-1 - train/global_step__MIN": 3615,
      "brisk-pond-1 - train/global_step__MAX": 3615
    },
    {
      "Step": 726,
      "brisk-pond-1 - train/global_step": 3620,
      "brisk-pond-1 - train/global_step__MIN": 3620,
      "brisk-pond-1 - train/global_step__MAX": 3620
    },
    {
      "Step": 727,
      "brisk-pond-1 - train/global_step": 3625,
      "brisk-pond-1 - train/global_step__MIN": 3625,
      "brisk-pond-1 - train/global_step__MAX": 3625
    },
    {
      "Step": 728,
      "brisk-pond-1 - train/global_step": 3630,
      "brisk-pond-1 - train/global_step__MIN": 3630,
      "brisk-pond-1 - train/global_step__MAX": 3630
    },
    {
      "Step": 729,
      "brisk-pond-1 - train/global_step": 3635,
      "brisk-pond-1 - train/global_step__MIN": 3635,
      "brisk-pond-1 - train/global_step__MAX": 3635
    },
    {
      "Step": 730,
      "brisk-pond-1 - train/global_step": 3640,
      "brisk-pond-1 - train/global_step__MIN": 3640,
      "brisk-pond-1 - train/global_step__MAX": 3640
    },
    {
      "Step": 731,
      "brisk-pond-1 - train/global_step": 3645,
      "brisk-pond-1 - train/global_step__MIN": 3645,
      "brisk-pond-1 - train/global_step__MAX": 3645
    },
    {
      "Step": 732,
      "brisk-pond-1 - train/global_step": 3650,
      "brisk-pond-1 - train/global_step__MIN": 3650,
      "brisk-pond-1 - train/global_step__MAX": 3650
    },
    {
      "Step": 733,
      "brisk-pond-1 - train/global_step": 3655,
      "brisk-pond-1 - train/global_step__MIN": 3655,
      "brisk-pond-1 - train/global_step__MAX": 3655
    },
    {
      "Step": 734,
      "brisk-pond-1 - train/global_step": 3660,
      "brisk-pond-1 - train/global_step__MIN": 3660,
      "brisk-pond-1 - train/global_step__MAX": 3660
    },
    {
      "Step": 735,
      "brisk-pond-1 - train/global_step": 3665,
      "brisk-pond-1 - train/global_step__MIN": 3665,
      "brisk-pond-1 - train/global_step__MAX": 3665
    },
    {
      "Step": 736,
      "brisk-pond-1 - train/global_step": 3670,
      "brisk-pond-1 - train/global_step__MIN": 3670,
      "brisk-pond-1 - train/global_step__MAX": 3670
    },
    {
      "Step": 737,
      "brisk-pond-1 - train/global_step": 3675,
      "brisk-pond-1 - train/global_step__MIN": 3675,
      "brisk-pond-1 - train/global_step__MAX": 3675
    },
    {
      "Step": 738,
      "brisk-pond-1 - train/global_step": 3680,
      "brisk-pond-1 - train/global_step__MIN": 3680,
      "brisk-pond-1 - train/global_step__MAX": 3680
    },
    {
      "Step": 739,
      "brisk-pond-1 - train/global_step": 3685,
      "brisk-pond-1 - train/global_step__MIN": 3685,
      "brisk-pond-1 - train/global_step__MAX": 3685
    },
    {
      "Step": 740,
      "brisk-pond-1 - train/global_step": 3690,
      "brisk-pond-1 - train/global_step__MIN": 3690,
      "brisk-pond-1 - train/global_step__MAX": 3690
    },
    {
      "Step": 741,
      "brisk-pond-1 - train/global_step": 3695,
      "brisk-pond-1 - train/global_step__MIN": 3695,
      "brisk-pond-1 - train/global_step__MAX": 3695
    },
    {
      "Step": 742,
      "brisk-pond-1 - train/global_step": 3700,
      "brisk-pond-1 - train/global_step__MIN": 3700,
      "brisk-pond-1 - train/global_step__MAX": 3700
    },
    {
      "Step": 743,
      "brisk-pond-1 - train/global_step": 3705,
      "brisk-pond-1 - train/global_step__MIN": 3705,
      "brisk-pond-1 - train/global_step__MAX": 3705
    },
    {
      "Step": 744,
      "brisk-pond-1 - train/global_step": 3710,
      "brisk-pond-1 - train/global_step__MIN": 3710,
      "brisk-pond-1 - train/global_step__MAX": 3710
    },
    {
      "Step": 745,
      "brisk-pond-1 - train/global_step": 3715,
      "brisk-pond-1 - train/global_step__MIN": 3715,
      "brisk-pond-1 - train/global_step__MAX": 3715
    },
    {
      "Step": 746,
      "brisk-pond-1 - train/global_step": 3720,
      "brisk-pond-1 - train/global_step__MIN": 3720,
      "brisk-pond-1 - train/global_step__MAX": 3720
    },
    {
      "Step": 747,
      "brisk-pond-1 - train/global_step": 3725,
      "brisk-pond-1 - train/global_step__MIN": 3725,
      "brisk-pond-1 - train/global_step__MAX": 3725
    },
    {
      "Step": 748,
      "brisk-pond-1 - train/global_step": 3730,
      "brisk-pond-1 - train/global_step__MIN": 3730,
      "brisk-pond-1 - train/global_step__MAX": 3730
    },
    {
      "Step": 749,
      "brisk-pond-1 - train/global_step": 3735,
      "brisk-pond-1 - train/global_step__MIN": 3735,
      "brisk-pond-1 - train/global_step__MAX": 3735
    },
    {
      "Step": 750,
      "brisk-pond-1 - train/global_step": 3740,
      "brisk-pond-1 - train/global_step__MIN": 3740,
      "brisk-pond-1 - train/global_step__MAX": 3740
    },
    {
      "Step": 751,
      "brisk-pond-1 - train/global_step": 3745,
      "brisk-pond-1 - train/global_step__MIN": 3745,
      "brisk-pond-1 - train/global_step__MAX": 3745
    },
    {
      "Step": 752,
      "brisk-pond-1 - train/global_step": 3750,
      "brisk-pond-1 - train/global_step__MIN": 3750,
      "brisk-pond-1 - train/global_step__MAX": 3750
    },
    {
      "Step": 753,
      "brisk-pond-1 - train/global_step": 3755,
      "brisk-pond-1 - train/global_step__MIN": 3755,
      "brisk-pond-1 - train/global_step__MAX": 3755
    },
    {
      "Step": 754,
      "brisk-pond-1 - train/global_step": 3760,
      "brisk-pond-1 - train/global_step__MIN": 3760,
      "brisk-pond-1 - train/global_step__MAX": 3760
    },
    {
      "Step": 755,
      "brisk-pond-1 - train/global_step": 3765,
      "brisk-pond-1 - train/global_step__MIN": 3765,
      "brisk-pond-1 - train/global_step__MAX": 3765
    },
    {
      "Step": 756,
      "brisk-pond-1 - train/global_step": 3770,
      "brisk-pond-1 - train/global_step__MIN": 3770,
      "brisk-pond-1 - train/global_step__MAX": 3770
    },
    {
      "Step": 757,
      "brisk-pond-1 - train/global_step": 3775,
      "brisk-pond-1 - train/global_step__MIN": 3775,
      "brisk-pond-1 - train/global_step__MAX": 3775
    },
    {
      "Step": 758,
      "brisk-pond-1 - train/global_step": 3780,
      "brisk-pond-1 - train/global_step__MIN": 3780,
      "brisk-pond-1 - train/global_step__MAX": 3780
    },
    {
      "Step": 759,
      "brisk-pond-1 - train/global_step": 3785,
      "brisk-pond-1 - train/global_step__MIN": 3785,
      "brisk-pond-1 - train/global_step__MAX": 3785
    },
    {
      "Step": 760,
      "brisk-pond-1 - train/global_step": 3790,
      "brisk-pond-1 - train/global_step__MIN": 3790,
      "brisk-pond-1 - train/global_step__MAX": 3790
    },
    {
      "Step": 761,
      "brisk-pond-1 - train/global_step": 3795,
      "brisk-pond-1 - train/global_step__MIN": 3795,
      "brisk-pond-1 - train/global_step__MAX": 3795
    },
    {
      "Step": 762,
      "brisk-pond-1 - train/global_step": 3800,
      "brisk-pond-1 - train/global_step__MIN": 3800,
      "brisk-pond-1 - train/global_step__MAX": 3800
    },
    {
      "Step": 763,
      "brisk-pond-1 - train/global_step": 3805,
      "brisk-pond-1 - train/global_step__MIN": 3805,
      "brisk-pond-1 - train/global_step__MAX": 3805
    },
    {
      "Step": 764,
      "brisk-pond-1 - train/global_step": 3810,
      "brisk-pond-1 - train/global_step__MIN": 3810,
      "brisk-pond-1 - train/global_step__MAX": 3810
    },
    {
      "Step": 765,
      "brisk-pond-1 - train/global_step": 3815,
      "brisk-pond-1 - train/global_step__MIN": 3815,
      "brisk-pond-1 - train/global_step__MAX": 3815
    },
    {
      "Step": 766,
      "brisk-pond-1 - train/global_step": 3820,
      "brisk-pond-1 - train/global_step__MIN": 3820,
      "brisk-pond-1 - train/global_step__MAX": 3820
    },
    {
      "Step": 767,
      "brisk-pond-1 - train/global_step": 3825,
      "brisk-pond-1 - train/global_step__MIN": 3825,
      "brisk-pond-1 - train/global_step__MAX": 3825
    },
    {
      "Step": 768,
      "brisk-pond-1 - train/global_step": 3830,
      "brisk-pond-1 - train/global_step__MIN": 3830,
      "brisk-pond-1 - train/global_step__MAX": 3830
    },
    {
      "Step": 769,
      "brisk-pond-1 - train/global_step": 3835,
      "brisk-pond-1 - train/global_step__MIN": 3835,
      "brisk-pond-1 - train/global_step__MAX": 3835
    },
    {
      "Step": 770,
      "brisk-pond-1 - train/global_step": 3840,
      "brisk-pond-1 - train/global_step__MIN": 3840,
      "brisk-pond-1 - train/global_step__MAX": 3840
    },
    {
      "Step": 771,
      "brisk-pond-1 - train/global_step": 3845,
      "brisk-pond-1 - train/global_step__MIN": 3845,
      "brisk-pond-1 - train/global_step__MAX": 3845
    },
    {
      "Step": 772,
      "brisk-pond-1 - train/global_step": 3850,
      "brisk-pond-1 - train/global_step__MIN": 3850,
      "brisk-pond-1 - train/global_step__MAX": 3850
    },
    {
      "Step": 773,
      "brisk-pond-1 - train/global_step": 3855,
      "brisk-pond-1 - train/global_step__MIN": 3855,
      "brisk-pond-1 - train/global_step__MAX": 3855
    },
    {
      "Step": 774,
      "brisk-pond-1 - train/global_step": 3860,
      "brisk-pond-1 - train/global_step__MIN": 3860,
      "brisk-pond-1 - train/global_step__MAX": 3860
    },
    {
      "Step": 775,
      "brisk-pond-1 - train/global_step": 3865,
      "brisk-pond-1 - train/global_step__MIN": 3865,
      "brisk-pond-1 - train/global_step__MAX": 3865
    },
    {
      "Step": 776,
      "brisk-pond-1 - train/global_step": 3870,
      "brisk-pond-1 - train/global_step__MIN": 3870,
      "brisk-pond-1 - train/global_step__MAX": 3870
    },
    {
      "Step": 777,
      "brisk-pond-1 - train/global_step": 3875,
      "brisk-pond-1 - train/global_step__MIN": 3875,
      "brisk-pond-1 - train/global_step__MAX": 3875
    },
    {
      "Step": 778,
      "brisk-pond-1 - train/global_step": 3880,
      "brisk-pond-1 - train/global_step__MIN": 3880,
      "brisk-pond-1 - train/global_step__MAX": 3880
    },
    {
      "Step": 779,
      "brisk-pond-1 - train/global_step": 3885,
      "brisk-pond-1 - train/global_step__MIN": 3885,
      "brisk-pond-1 - train/global_step__MAX": 3885
    },
    {
      "Step": 780,
      "brisk-pond-1 - train/global_step": 3890,
      "brisk-pond-1 - train/global_step__MIN": 3890,
      "brisk-pond-1 - train/global_step__MAX": 3890
    },
    {
      "Step": 781,
      "brisk-pond-1 - train/global_step": 3895,
      "brisk-pond-1 - train/global_step__MIN": 3895,
      "brisk-pond-1 - train/global_step__MAX": 3895
    },
    {
      "Step": 782,
      "brisk-pond-1 - train/global_step": 3900,
      "brisk-pond-1 - train/global_step__MIN": 3900,
      "brisk-pond-1 - train/global_step__MAX": 3900
    },
    {
      "Step": 783,
      "brisk-pond-1 - train/global_step": 3905,
      "brisk-pond-1 - train/global_step__MIN": 3905,
      "brisk-pond-1 - train/global_step__MAX": 3905
    },
    {
      "Step": 784,
      "brisk-pond-1 - train/global_step": 3910,
      "brisk-pond-1 - train/global_step__MIN": 3910,
      "brisk-pond-1 - train/global_step__MAX": 3910
    },
    {
      "Step": 785,
      "brisk-pond-1 - train/global_step": 3915,
      "brisk-pond-1 - train/global_step__MIN": 3915,
      "brisk-pond-1 - train/global_step__MAX": 3915
    },
    {
      "Step": 786,
      "brisk-pond-1 - train/global_step": 3920,
      "brisk-pond-1 - train/global_step__MIN": 3920,
      "brisk-pond-1 - train/global_step__MAX": 3920
    },
    {
      "Step": 787,
      "brisk-pond-1 - train/global_step": 3925,
      "brisk-pond-1 - train/global_step__MIN": 3925,
      "brisk-pond-1 - train/global_step__MAX": 3925
    },
    {
      "Step": 788,
      "brisk-pond-1 - train/global_step": 3930,
      "brisk-pond-1 - train/global_step__MIN": 3930,
      "brisk-pond-1 - train/global_step__MAX": 3930
    },
    {
      "Step": 789,
      "brisk-pond-1 - train/global_step": 3935,
      "brisk-pond-1 - train/global_step__MIN": 3935,
      "brisk-pond-1 - train/global_step__MAX": 3935
    },
    {
      "Step": 790,
      "brisk-pond-1 - train/global_step": 3940,
      "brisk-pond-1 - train/global_step__MIN": 3940,
      "brisk-pond-1 - train/global_step__MAX": 3940
    },
    {
      "Step": 791,
      "brisk-pond-1 - train/global_step": 3945,
      "brisk-pond-1 - train/global_step__MIN": 3945,
      "brisk-pond-1 - train/global_step__MAX": 3945
    },
    {
      "Step": 792,
      "brisk-pond-1 - train/global_step": 3950,
      "brisk-pond-1 - train/global_step__MIN": 3950,
      "brisk-pond-1 - train/global_step__MAX": 3950
    },
    {
      "Step": 793,
      "brisk-pond-1 - train/global_step": 3955,
      "brisk-pond-1 - train/global_step__MIN": 3955,
      "brisk-pond-1 - train/global_step__MAX": 3955
    },
    {
      "Step": 794,
      "brisk-pond-1 - train/global_step": 3960,
      "brisk-pond-1 - train/global_step__MIN": 3960,
      "brisk-pond-1 - train/global_step__MAX": 3960
    },
    {
      "Step": 795,
      "brisk-pond-1 - train/global_step": 3965,
      "brisk-pond-1 - train/global_step__MIN": 3965,
      "brisk-pond-1 - train/global_step__MAX": 3965
    },
    {
      "Step": 796,
      "brisk-pond-1 - train/global_step": 3970,
      "brisk-pond-1 - train/global_step__MIN": 3970,
      "brisk-pond-1 - train/global_step__MAX": 3970
    },
    {
      "Step": 797,
      "brisk-pond-1 - train/global_step": 3975,
      "brisk-pond-1 - train/global_step__MIN": 3975,
      "brisk-pond-1 - train/global_step__MAX": 3975
    },
    {
      "Step": 798,
      "brisk-pond-1 - train/global_step": 3980,
      "brisk-pond-1 - train/global_step__MIN": 3980,
      "brisk-pond-1 - train/global_step__MAX": 3980
    },
    {
      "Step": 799,
      "brisk-pond-1 - train/global_step": 3985,
      "brisk-pond-1 - train/global_step__MIN": 3985,
      "brisk-pond-1 - train/global_step__MAX": 3985
    },
    {
      "Step": 800,
      "brisk-pond-1 - train/global_step": 3990,
      "brisk-pond-1 - train/global_step__MIN": 3990,
      "brisk-pond-1 - train/global_step__MAX": 3990
    },
    {
      "Step": 801,
      "brisk-pond-1 - train/global_step": 3995,
      "brisk-pond-1 - train/global_step__MIN": 3995,
      "brisk-pond-1 - train/global_step__MAX": 3995
    },
    {
      "Step": 802,
      "brisk-pond-1 - train/global_step": 4000,
      "brisk-pond-1 - train/global_step__MIN": 4000,
      "brisk-pond-1 - train/global_step__MAX": 4000
    },
    {
      "Step": 803,
      "brisk-pond-1 - train/global_step": 4000,
      "brisk-pond-1 - train/global_step__MIN": 4000,
      "brisk-pond-1 - train/global_step__MAX": 4000
    },
    {
      "Step": 804,
      "brisk-pond-1 - train/global_step": 4005,
      "brisk-pond-1 - train/global_step__MIN": 4005,
      "brisk-pond-1 - train/global_step__MAX": 4005
    },
    {
      "Step": 805,
      "brisk-pond-1 - train/global_step": 4010,
      "brisk-pond-1 - train/global_step__MIN": 4010,
      "brisk-pond-1 - train/global_step__MAX": 4010
    },
    {
      "Step": 806,
      "brisk-pond-1 - train/global_step": 4015,
      "brisk-pond-1 - train/global_step__MIN": 4015,
      "brisk-pond-1 - train/global_step__MAX": 4015
    },
    {
      "Step": 807,
      "brisk-pond-1 - train/global_step": 4020,
      "brisk-pond-1 - train/global_step__MIN": 4020,
      "brisk-pond-1 - train/global_step__MAX": 4020
    },
    {
      "Step": 808,
      "brisk-pond-1 - train/global_step": 4025,
      "brisk-pond-1 - train/global_step__MIN": 4025,
      "brisk-pond-1 - train/global_step__MAX": 4025
    },
    {
      "Step": 809,
      "brisk-pond-1 - train/global_step": 4030,
      "brisk-pond-1 - train/global_step__MIN": 4030,
      "brisk-pond-1 - train/global_step__MAX": 4030
    },
    {
      "Step": 810,
      "brisk-pond-1 - train/global_step": 4035,
      "brisk-pond-1 - train/global_step__MIN": 4035,
      "brisk-pond-1 - train/global_step__MAX": 4035
    },
    {
      "Step": 811,
      "brisk-pond-1 - train/global_step": 4040,
      "brisk-pond-1 - train/global_step__MIN": 4040,
      "brisk-pond-1 - train/global_step__MAX": 4040
    },
    {
      "Step": 812,
      "brisk-pond-1 - train/global_step": 4045,
      "brisk-pond-1 - train/global_step__MIN": 4045,
      "brisk-pond-1 - train/global_step__MAX": 4045
    },
    {
      "Step": 813,
      "brisk-pond-1 - train/global_step": 4050,
      "brisk-pond-1 - train/global_step__MIN": 4050,
      "brisk-pond-1 - train/global_step__MAX": 4050
    },
    {
      "Step": 814,
      "brisk-pond-1 - train/global_step": 4055,
      "brisk-pond-1 - train/global_step__MIN": 4055,
      "brisk-pond-1 - train/global_step__MAX": 4055
    },
    {
      "Step": 815,
      "brisk-pond-1 - train/global_step": 4060,
      "brisk-pond-1 - train/global_step__MIN": 4060,
      "brisk-pond-1 - train/global_step__MAX": 4060
    },
    {
      "Step": 816,
      "brisk-pond-1 - train/global_step": 4065,
      "brisk-pond-1 - train/global_step__MIN": 4065,
      "brisk-pond-1 - train/global_step__MAX": 4065
    },
    {
      "Step": 817,
      "brisk-pond-1 - train/global_step": 4070,
      "brisk-pond-1 - train/global_step__MIN": 4070,
      "brisk-pond-1 - train/global_step__MAX": 4070
    },
    {
      "Step": 818,
      "brisk-pond-1 - train/global_step": 4075,
      "brisk-pond-1 - train/global_step__MIN": 4075,
      "brisk-pond-1 - train/global_step__MAX": 4075
    },
    {
      "Step": 819,
      "brisk-pond-1 - train/global_step": 4080,
      "brisk-pond-1 - train/global_step__MIN": 4080,
      "brisk-pond-1 - train/global_step__MAX": 4080
    },
    {
      "Step": 820,
      "brisk-pond-1 - train/global_step": 4085,
      "brisk-pond-1 - train/global_step__MIN": 4085,
      "brisk-pond-1 - train/global_step__MAX": 4085
    },
    {
      "Step": 821,
      "brisk-pond-1 - train/global_step": 4090,
      "brisk-pond-1 - train/global_step__MIN": 4090,
      "brisk-pond-1 - train/global_step__MAX": 4090
    },
    {
      "Step": 822,
      "brisk-pond-1 - train/global_step": 4095,
      "brisk-pond-1 - train/global_step__MIN": 4095,
      "brisk-pond-1 - train/global_step__MAX": 4095
    },
    {
      "Step": 823,
      "brisk-pond-1 - train/global_step": 4100,
      "brisk-pond-1 - train/global_step__MIN": 4100,
      "brisk-pond-1 - train/global_step__MAX": 4100
    },
    {
      "Step": 824,
      "brisk-pond-1 - train/global_step": 4105,
      "brisk-pond-1 - train/global_step__MIN": 4105,
      "brisk-pond-1 - train/global_step__MAX": 4105
    },
    {
      "Step": 825,
      "brisk-pond-1 - train/global_step": 4110,
      "brisk-pond-1 - train/global_step__MIN": 4110,
      "brisk-pond-1 - train/global_step__MAX": 4110
    },
    {
      "Step": 826,
      "brisk-pond-1 - train/global_step": 4115,
      "brisk-pond-1 - train/global_step__MIN": 4115,
      "brisk-pond-1 - train/global_step__MAX": 4115
    },
    {
      "Step": 827,
      "brisk-pond-1 - train/global_step": 4120,
      "brisk-pond-1 - train/global_step__MIN": 4120,
      "brisk-pond-1 - train/global_step__MAX": 4120
    },
    {
      "Step": 828,
      "brisk-pond-1 - train/global_step": 4125,
      "brisk-pond-1 - train/global_step__MIN": 4125,
      "brisk-pond-1 - train/global_step__MAX": 4125
    },
    {
      "Step": 829,
      "brisk-pond-1 - train/global_step": 4130,
      "brisk-pond-1 - train/global_step__MIN": 4130,
      "brisk-pond-1 - train/global_step__MAX": 4130
    },
    {
      "Step": 830,
      "brisk-pond-1 - train/global_step": 4135,
      "brisk-pond-1 - train/global_step__MIN": 4135,
      "brisk-pond-1 - train/global_step__MAX": 4135
    },
    {
      "Step": 831,
      "brisk-pond-1 - train/global_step": 4140,
      "brisk-pond-1 - train/global_step__MIN": 4140,
      "brisk-pond-1 - train/global_step__MAX": 4140
    },
    {
      "Step": 832,
      "brisk-pond-1 - train/global_step": 4145,
      "brisk-pond-1 - train/global_step__MIN": 4145,
      "brisk-pond-1 - train/global_step__MAX": 4145
    },
    {
      "Step": 833,
      "brisk-pond-1 - train/global_step": 4150,
      "brisk-pond-1 - train/global_step__MIN": 4150,
      "brisk-pond-1 - train/global_step__MAX": 4150
    },
    {
      "Step": 834,
      "brisk-pond-1 - train/global_step": 4155,
      "brisk-pond-1 - train/global_step__MIN": 4155,
      "brisk-pond-1 - train/global_step__MAX": 4155
    },
    {
      "Step": 835,
      "brisk-pond-1 - train/global_step": 4160,
      "brisk-pond-1 - train/global_step__MIN": 4160,
      "brisk-pond-1 - train/global_step__MAX": 4160
    },
    {
      "Step": 836,
      "brisk-pond-1 - train/global_step": 4165,
      "brisk-pond-1 - train/global_step__MIN": 4165,
      "brisk-pond-1 - train/global_step__MAX": 4165
    },
    {
      "Step": 837,
      "brisk-pond-1 - train/global_step": 4170,
      "brisk-pond-1 - train/global_step__MIN": 4170,
      "brisk-pond-1 - train/global_step__MAX": 4170
    },
    {
      "Step": 838,
      "brisk-pond-1 - train/global_step": 4175,
      "brisk-pond-1 - train/global_step__MIN": 4175,
      "brisk-pond-1 - train/global_step__MAX": 4175
    },
    {
      "Step": 839,
      "brisk-pond-1 - train/global_step": 4180,
      "brisk-pond-1 - train/global_step__MIN": 4180,
      "brisk-pond-1 - train/global_step__MAX": 4180
    },
    {
      "Step": 840,
      "brisk-pond-1 - train/global_step": 4185,
      "brisk-pond-1 - train/global_step__MIN": 4185,
      "brisk-pond-1 - train/global_step__MAX": 4185
    },
    {
      "Step": 841,
      "brisk-pond-1 - train/global_step": 4190,
      "brisk-pond-1 - train/global_step__MIN": 4190,
      "brisk-pond-1 - train/global_step__MAX": 4190
    },
    {
      "Step": 842,
      "brisk-pond-1 - train/global_step": 4195,
      "brisk-pond-1 - train/global_step__MIN": 4195,
      "brisk-pond-1 - train/global_step__MAX": 4195
    },
    {
      "Step": 843,
      "brisk-pond-1 - train/global_step": 4200,
      "brisk-pond-1 - train/global_step__MIN": 4200,
      "brisk-pond-1 - train/global_step__MAX": 4200
    },
    {
      "Step": 844,
      "brisk-pond-1 - train/global_step": 4205,
      "brisk-pond-1 - train/global_step__MIN": 4205,
      "brisk-pond-1 - train/global_step__MAX": 4205
    },
    {
      "Step": 845,
      "brisk-pond-1 - train/global_step": 4210,
      "brisk-pond-1 - train/global_step__MIN": 4210,
      "brisk-pond-1 - train/global_step__MAX": 4210
    },
    {
      "Step": 846,
      "brisk-pond-1 - train/global_step": 4215,
      "brisk-pond-1 - train/global_step__MIN": 4215,
      "brisk-pond-1 - train/global_step__MAX": 4215
    },
    {
      "Step": 847,
      "brisk-pond-1 - train/global_step": 4220,
      "brisk-pond-1 - train/global_step__MIN": 4220,
      "brisk-pond-1 - train/global_step__MAX": 4220
    },
    {
      "Step": 848,
      "brisk-pond-1 - train/global_step": 4225,
      "brisk-pond-1 - train/global_step__MIN": 4225,
      "brisk-pond-1 - train/global_step__MAX": 4225
    },
    {
      "Step": 849,
      "brisk-pond-1 - train/global_step": 4230,
      "brisk-pond-1 - train/global_step__MIN": 4230,
      "brisk-pond-1 - train/global_step__MAX": 4230
    },
    {
      "Step": 850,
      "brisk-pond-1 - train/global_step": 4235,
      "brisk-pond-1 - train/global_step__MIN": 4235,
      "brisk-pond-1 - train/global_step__MAX": 4235
    },
    {
      "Step": 851,
      "brisk-pond-1 - train/global_step": 4240,
      "brisk-pond-1 - train/global_step__MIN": 4240,
      "brisk-pond-1 - train/global_step__MAX": 4240
    },
    {
      "Step": 852,
      "brisk-pond-1 - train/global_step": 4245,
      "brisk-pond-1 - train/global_step__MIN": 4245,
      "brisk-pond-1 - train/global_step__MAX": 4245
    },
    {
      "Step": 853,
      "brisk-pond-1 - train/global_step": 4250,
      "brisk-pond-1 - train/global_step__MIN": 4250,
      "brisk-pond-1 - train/global_step__MAX": 4250
    },
    {
      "Step": 854,
      "brisk-pond-1 - train/global_step": 4255,
      "brisk-pond-1 - train/global_step__MIN": 4255,
      "brisk-pond-1 - train/global_step__MAX": 4255
    },
    {
      "Step": 855,
      "brisk-pond-1 - train/global_step": 4260,
      "brisk-pond-1 - train/global_step__MIN": 4260,
      "brisk-pond-1 - train/global_step__MAX": 4260
    },
    {
      "Step": 856,
      "brisk-pond-1 - train/global_step": 4265,
      "brisk-pond-1 - train/global_step__MIN": 4265,
      "brisk-pond-1 - train/global_step__MAX": 4265
    },
    {
      "Step": 857,
      "brisk-pond-1 - train/global_step": 4270,
      "brisk-pond-1 - train/global_step__MIN": 4270,
      "brisk-pond-1 - train/global_step__MAX": 4270
    },
    {
      "Step": 858,
      "brisk-pond-1 - train/global_step": 4275,
      "brisk-pond-1 - train/global_step__MIN": 4275,
      "brisk-pond-1 - train/global_step__MAX": 4275
    },
    {
      "Step": 859,
      "brisk-pond-1 - train/global_step": 4280,
      "brisk-pond-1 - train/global_step__MIN": 4280,
      "brisk-pond-1 - train/global_step__MAX": 4280
    },
    {
      "Step": 860,
      "brisk-pond-1 - train/global_step": 4285,
      "brisk-pond-1 - train/global_step__MIN": 4285,
      "brisk-pond-1 - train/global_step__MAX": 4285
    },
    {
      "Step": 861,
      "brisk-pond-1 - train/global_step": 4290,
      "brisk-pond-1 - train/global_step__MIN": 4290,
      "brisk-pond-1 - train/global_step__MAX": 4290
    },
    {
      "Step": 862,
      "brisk-pond-1 - train/global_step": 4295,
      "brisk-pond-1 - train/global_step__MIN": 4295,
      "brisk-pond-1 - train/global_step__MAX": 4295
    },
    {
      "Step": 863,
      "brisk-pond-1 - train/global_step": 4300,
      "brisk-pond-1 - train/global_step__MIN": 4300,
      "brisk-pond-1 - train/global_step__MAX": 4300
    },
    {
      "Step": 864,
      "brisk-pond-1 - train/global_step": 4305,
      "brisk-pond-1 - train/global_step__MIN": 4305,
      "brisk-pond-1 - train/global_step__MAX": 4305
    },
    {
      "Step": 865,
      "brisk-pond-1 - train/global_step": 4310,
      "brisk-pond-1 - train/global_step__MIN": 4310,
      "brisk-pond-1 - train/global_step__MAX": 4310
    },
    {
      "Step": 866,
      "brisk-pond-1 - train/global_step": 4315,
      "brisk-pond-1 - train/global_step__MIN": 4315,
      "brisk-pond-1 - train/global_step__MAX": 4315
    },
    {
      "Step": 867,
      "brisk-pond-1 - train/global_step": 4320,
      "brisk-pond-1 - train/global_step__MIN": 4320,
      "brisk-pond-1 - train/global_step__MAX": 4320
    },
    {
      "Step": 868,
      "brisk-pond-1 - train/global_step": 4325,
      "brisk-pond-1 - train/global_step__MIN": 4325,
      "brisk-pond-1 - train/global_step__MAX": 4325
    },
    {
      "Step": 869,
      "brisk-pond-1 - train/global_step": 4330,
      "brisk-pond-1 - train/global_step__MIN": 4330,
      "brisk-pond-1 - train/global_step__MAX": 4330
    },
    {
      "Step": 870,
      "brisk-pond-1 - train/global_step": 4335,
      "brisk-pond-1 - train/global_step__MIN": 4335,
      "brisk-pond-1 - train/global_step__MAX": 4335
    },
    {
      "Step": 871,
      "brisk-pond-1 - train/global_step": 4340,
      "brisk-pond-1 - train/global_step__MIN": 4340,
      "brisk-pond-1 - train/global_step__MAX": 4340
    },
    {
      "Step": 872,
      "brisk-pond-1 - train/global_step": 4345,
      "brisk-pond-1 - train/global_step__MIN": 4345,
      "brisk-pond-1 - train/global_step__MAX": 4345
    },
    {
      "Step": 873,
      "brisk-pond-1 - train/global_step": 4350,
      "brisk-pond-1 - train/global_step__MIN": 4350,
      "brisk-pond-1 - train/global_step__MAX": 4350
    },
    {
      "Step": 874,
      "brisk-pond-1 - train/global_step": 4355,
      "brisk-pond-1 - train/global_step__MIN": 4355,
      "brisk-pond-1 - train/global_step__MAX": 4355
    },
    {
      "Step": 875,
      "brisk-pond-1 - train/global_step": 4360,
      "brisk-pond-1 - train/global_step__MIN": 4360,
      "brisk-pond-1 - train/global_step__MAX": 4360
    },
    {
      "Step": 876,
      "brisk-pond-1 - train/global_step": 4365,
      "brisk-pond-1 - train/global_step__MIN": 4365,
      "brisk-pond-1 - train/global_step__MAX": 4365
    },
    {
      "Step": 877,
      "brisk-pond-1 - train/global_step": 4370,
      "brisk-pond-1 - train/global_step__MIN": 4370,
      "brisk-pond-1 - train/global_step__MAX": 4370
    },
    {
      "Step": 878,
      "brisk-pond-1 - train/global_step": 4375,
      "brisk-pond-1 - train/global_step__MIN": 4375,
      "brisk-pond-1 - train/global_step__MAX": 4375
    },
    {
      "Step": 879,
      "brisk-pond-1 - train/global_step": 4380,
      "brisk-pond-1 - train/global_step__MIN": 4380,
      "brisk-pond-1 - train/global_step__MAX": 4380
    },
    {
      "Step": 880,
      "brisk-pond-1 - train/global_step": 4385,
      "brisk-pond-1 - train/global_step__MIN": 4385,
      "brisk-pond-1 - train/global_step__MAX": 4385
    },
    {
      "Step": 881,
      "brisk-pond-1 - train/global_step": 4390,
      "brisk-pond-1 - train/global_step__MIN": 4390,
      "brisk-pond-1 - train/global_step__MAX": 4390
    },
    {
      "Step": 882,
      "brisk-pond-1 - train/global_step": 4395,
      "brisk-pond-1 - train/global_step__MIN": 4395,
      "brisk-pond-1 - train/global_step__MAX": 4395
    },
    {
      "Step": 883,
      "brisk-pond-1 - train/global_step": 4400,
      "brisk-pond-1 - train/global_step__MIN": 4400,
      "brisk-pond-1 - train/global_step__MAX": 4400
    },
    {
      "Step": 884,
      "brisk-pond-1 - train/global_step": 4405,
      "brisk-pond-1 - train/global_step__MIN": 4405,
      "brisk-pond-1 - train/global_step__MAX": 4405
    },
    {
      "Step": 885,
      "brisk-pond-1 - train/global_step": 4410,
      "brisk-pond-1 - train/global_step__MIN": 4410,
      "brisk-pond-1 - train/global_step__MAX": 4410
    },
    {
      "Step": 886,
      "brisk-pond-1 - train/global_step": 4415,
      "brisk-pond-1 - train/global_step__MIN": 4415,
      "brisk-pond-1 - train/global_step__MAX": 4415
    },
    {
      "Step": 887,
      "brisk-pond-1 - train/global_step": 4420,
      "brisk-pond-1 - train/global_step__MIN": 4420,
      "brisk-pond-1 - train/global_step__MAX": 4420
    },
    {
      "Step": 888,
      "brisk-pond-1 - train/global_step": 4425,
      "brisk-pond-1 - train/global_step__MIN": 4425,
      "brisk-pond-1 - train/global_step__MAX": 4425
    },
    {
      "Step": 889,
      "brisk-pond-1 - train/global_step": 4430,
      "brisk-pond-1 - train/global_step__MIN": 4430,
      "brisk-pond-1 - train/global_step__MAX": 4430
    },
    {
      "Step": 890,
      "brisk-pond-1 - train/global_step": 4435,
      "brisk-pond-1 - train/global_step__MIN": 4435,
      "brisk-pond-1 - train/global_step__MAX": 4435
    },
    {
      "Step": 891,
      "brisk-pond-1 - train/global_step": 4440,
      "brisk-pond-1 - train/global_step__MIN": 4440,
      "brisk-pond-1 - train/global_step__MAX": 4440
    },
    {
      "Step": 892,
      "brisk-pond-1 - train/global_step": 4445,
      "brisk-pond-1 - train/global_step__MIN": 4445,
      "brisk-pond-1 - train/global_step__MAX": 4445
    },
    {
      "Step": 893,
      "brisk-pond-1 - train/global_step": 4450,
      "brisk-pond-1 - train/global_step__MIN": 4450,
      "brisk-pond-1 - train/global_step__MAX": 4450
    },
    {
      "Step": 894,
      "brisk-pond-1 - train/global_step": 4455,
      "brisk-pond-1 - train/global_step__MIN": 4455,
      "brisk-pond-1 - train/global_step__MAX": 4455
    },
    {
      "Step": 895,
      "brisk-pond-1 - train/global_step": 4460,
      "brisk-pond-1 - train/global_step__MIN": 4460,
      "brisk-pond-1 - train/global_step__MAX": 4460
    },
    {
      "Step": 896,
      "brisk-pond-1 - train/global_step": 4465,
      "brisk-pond-1 - train/global_step__MIN": 4465,
      "brisk-pond-1 - train/global_step__MAX": 4465
    },
    {
      "Step": 897,
      "brisk-pond-1 - train/global_step": 4470,
      "brisk-pond-1 - train/global_step__MIN": 4470,
      "brisk-pond-1 - train/global_step__MAX": 4470
    },
    {
      "Step": 898,
      "brisk-pond-1 - train/global_step": 4475,
      "brisk-pond-1 - train/global_step__MIN": 4475,
      "brisk-pond-1 - train/global_step__MAX": 4475
    },
    {
      "Step": 899,
      "brisk-pond-1 - train/global_step": 4480,
      "brisk-pond-1 - train/global_step__MIN": 4480,
      "brisk-pond-1 - train/global_step__MAX": 4480
    },
    {
      "Step": 900,
      "brisk-pond-1 - train/global_step": 4485,
      "brisk-pond-1 - train/global_step__MIN": 4485,
      "brisk-pond-1 - train/global_step__MAX": 4485
    },
    {
      "Step": 901,
      "brisk-pond-1 - train/global_step": 4490,
      "brisk-pond-1 - train/global_step__MIN": 4490,
      "brisk-pond-1 - train/global_step__MAX": 4490
    },
    {
      "Step": 902,
      "brisk-pond-1 - train/global_step": 4495,
      "brisk-pond-1 - train/global_step__MIN": 4495,
      "brisk-pond-1 - train/global_step__MAX": 4495
    },
    {
      "Step": 903,
      "brisk-pond-1 - train/global_step": 4500,
      "brisk-pond-1 - train/global_step__MIN": 4500,
      "brisk-pond-1 - train/global_step__MAX": 4500
    },
    {
      "Step": 904,
      "brisk-pond-1 - train/global_step": 4505,
      "brisk-pond-1 - train/global_step__MIN": 4505,
      "brisk-pond-1 - train/global_step__MAX": 4505
    },
    {
      "Step": 905,
      "brisk-pond-1 - train/global_step": 4510,
      "brisk-pond-1 - train/global_step__MIN": 4510,
      "brisk-pond-1 - train/global_step__MAX": 4510
    },
    {
      "Step": 906,
      "brisk-pond-1 - train/global_step": 4515,
      "brisk-pond-1 - train/global_step__MIN": 4515,
      "brisk-pond-1 - train/global_step__MAX": 4515
    },
    {
      "Step": 907,
      "brisk-pond-1 - train/global_step": 4520,
      "brisk-pond-1 - train/global_step__MIN": 4520,
      "brisk-pond-1 - train/global_step__MAX": 4520
    },
    {
      "Step": 908,
      "brisk-pond-1 - train/global_step": 4525,
      "brisk-pond-1 - train/global_step__MIN": 4525,
      "brisk-pond-1 - train/global_step__MAX": 4525
    },
    {
      "Step": 909,
      "brisk-pond-1 - train/global_step": 4530,
      "brisk-pond-1 - train/global_step__MIN": 4530,
      "brisk-pond-1 - train/global_step__MAX": 4530
    },
    {
      "Step": 910,
      "brisk-pond-1 - train/global_step": 4535,
      "brisk-pond-1 - train/global_step__MIN": 4535,
      "brisk-pond-1 - train/global_step__MAX": 4535
    },
    {
      "Step": 911,
      "brisk-pond-1 - train/global_step": 4540,
      "brisk-pond-1 - train/global_step__MIN": 4540,
      "brisk-pond-1 - train/global_step__MAX": 4540
    },
    {
      "Step": 912,
      "brisk-pond-1 - train/global_step": 4545,
      "brisk-pond-1 - train/global_step__MIN": 4545,
      "brisk-pond-1 - train/global_step__MAX": 4545
    },
    {
      "Step": 913,
      "brisk-pond-1 - train/global_step": 4550,
      "brisk-pond-1 - train/global_step__MIN": 4550,
      "brisk-pond-1 - train/global_step__MAX": 4550
    },
    {
      "Step": 914,
      "brisk-pond-1 - train/global_step": 4555,
      "brisk-pond-1 - train/global_step__MIN": 4555,
      "brisk-pond-1 - train/global_step__MAX": 4555
    },
    {
      "Step": 915,
      "brisk-pond-1 - train/global_step": 4560,
      "brisk-pond-1 - train/global_step__MIN": 4560,
      "brisk-pond-1 - train/global_step__MAX": 4560
    },
    {
      "Step": 916,
      "brisk-pond-1 - train/global_step": 4565,
      "brisk-pond-1 - train/global_step__MIN": 4565,
      "brisk-pond-1 - train/global_step__MAX": 4565
    },
    {
      "Step": 917,
      "brisk-pond-1 - train/global_step": 4570,
      "brisk-pond-1 - train/global_step__MIN": 4570,
      "brisk-pond-1 - train/global_step__MAX": 4570
    },
    {
      "Step": 918,
      "brisk-pond-1 - train/global_step": 4575,
      "brisk-pond-1 - train/global_step__MIN": 4575,
      "brisk-pond-1 - train/global_step__MAX": 4575
    },
    {
      "Step": 919,
      "brisk-pond-1 - train/global_step": 4580,
      "brisk-pond-1 - train/global_step__MIN": 4580,
      "brisk-pond-1 - train/global_step__MAX": 4580
    },
    {
      "Step": 920,
      "brisk-pond-1 - train/global_step": 4585,
      "brisk-pond-1 - train/global_step__MIN": 4585,
      "brisk-pond-1 - train/global_step__MAX": 4585
    },
    {
      "Step": 921,
      "brisk-pond-1 - train/global_step": 4590,
      "brisk-pond-1 - train/global_step__MIN": 4590,
      "brisk-pond-1 - train/global_step__MAX": 4590
    },
    {
      "Step": 922,
      "brisk-pond-1 - train/global_step": 4595,
      "brisk-pond-1 - train/global_step__MIN": 4595,
      "brisk-pond-1 - train/global_step__MAX": 4595
    },
    {
      "Step": 923,
      "brisk-pond-1 - train/global_step": 4600,
      "brisk-pond-1 - train/global_step__MIN": 4600,
      "brisk-pond-1 - train/global_step__MAX": 4600
    },
    {
      "Step": 924,
      "brisk-pond-1 - train/global_step": 4605,
      "brisk-pond-1 - train/global_step__MIN": 4605,
      "brisk-pond-1 - train/global_step__MAX": 4605
    },
    {
      "Step": 925,
      "brisk-pond-1 - train/global_step": 4610,
      "brisk-pond-1 - train/global_step__MIN": 4610,
      "brisk-pond-1 - train/global_step__MAX": 4610
    },
    {
      "Step": 926,
      "brisk-pond-1 - train/global_step": 4615,
      "brisk-pond-1 - train/global_step__MIN": 4615,
      "brisk-pond-1 - train/global_step__MAX": 4615
    },
    {
      "Step": 927,
      "brisk-pond-1 - train/global_step": 4620,
      "brisk-pond-1 - train/global_step__MIN": 4620,
      "brisk-pond-1 - train/global_step__MAX": 4620
    },
    {
      "Step": 928,
      "brisk-pond-1 - train/global_step": 4625,
      "brisk-pond-1 - train/global_step__MIN": 4625,
      "brisk-pond-1 - train/global_step__MAX": 4625
    },
    {
      "Step": 929,
      "brisk-pond-1 - train/global_step": 4630,
      "brisk-pond-1 - train/global_step__MIN": 4630,
      "brisk-pond-1 - train/global_step__MAX": 4630
    },
    {
      "Step": 930,
      "brisk-pond-1 - train/global_step": 4635,
      "brisk-pond-1 - train/global_step__MIN": 4635,
      "brisk-pond-1 - train/global_step__MAX": 4635
    },
    {
      "Step": 931,
      "brisk-pond-1 - train/global_step": 4640,
      "brisk-pond-1 - train/global_step__MIN": 4640,
      "brisk-pond-1 - train/global_step__MAX": 4640
    },
    {
      "Step": 932,
      "brisk-pond-1 - train/global_step": 4645,
      "brisk-pond-1 - train/global_step__MIN": 4645,
      "brisk-pond-1 - train/global_step__MAX": 4645
    },
    {
      "Step": 933,
      "brisk-pond-1 - train/global_step": 4650,
      "brisk-pond-1 - train/global_step__MIN": 4650,
      "brisk-pond-1 - train/global_step__MAX": 4650
    },
    {
      "Step": 934,
      "brisk-pond-1 - train/global_step": 4655,
      "brisk-pond-1 - train/global_step__MIN": 4655,
      "brisk-pond-1 - train/global_step__MAX": 4655
    },
    {
      "Step": 935,
      "brisk-pond-1 - train/global_step": 4660,
      "brisk-pond-1 - train/global_step__MIN": 4660,
      "brisk-pond-1 - train/global_step__MAX": 4660
    },
    {
      "Step": 936,
      "brisk-pond-1 - train/global_step": 4665,
      "brisk-pond-1 - train/global_step__MIN": 4665,
      "brisk-pond-1 - train/global_step__MAX": 4665
    },
    {
      "Step": 937,
      "brisk-pond-1 - train/global_step": 4670,
      "brisk-pond-1 - train/global_step__MIN": 4670,
      "brisk-pond-1 - train/global_step__MAX": 4670
    },
    {
      "Step": 938,
      "brisk-pond-1 - train/global_step": 4675,
      "brisk-pond-1 - train/global_step__MIN": 4675,
      "brisk-pond-1 - train/global_step__MAX": 4675
    },
    {
      "Step": 939,
      "brisk-pond-1 - train/global_step": 4680,
      "brisk-pond-1 - train/global_step__MIN": 4680,
      "brisk-pond-1 - train/global_step__MAX": 4680
    },
    {
      "Step": 940,
      "brisk-pond-1 - train/global_step": 4685,
      "brisk-pond-1 - train/global_step__MIN": 4685,
      "brisk-pond-1 - train/global_step__MAX": 4685
    },
    {
      "Step": 941,
      "brisk-pond-1 - train/global_step": 4690,
      "brisk-pond-1 - train/global_step__MIN": 4690,
      "brisk-pond-1 - train/global_step__MAX": 4690
    },
    {
      "Step": 942,
      "brisk-pond-1 - train/global_step": 4695,
      "brisk-pond-1 - train/global_step__MIN": 4695,
      "brisk-pond-1 - train/global_step__MAX": 4695
    },
    {
      "Step": 943,
      "brisk-pond-1 - train/global_step": 4700,
      "brisk-pond-1 - train/global_step__MIN": 4700,
      "brisk-pond-1 - train/global_step__MAX": 4700
    },
    {
      "Step": 944,
      "brisk-pond-1 - train/global_step": 4705,
      "brisk-pond-1 - train/global_step__MIN": 4705,
      "brisk-pond-1 - train/global_step__MAX": 4705
    },
    {
      "Step": 945,
      "brisk-pond-1 - train/global_step": 4710,
      "brisk-pond-1 - train/global_step__MIN": 4710,
      "brisk-pond-1 - train/global_step__MAX": 4710
    },
    {
      "Step": 946,
      "brisk-pond-1 - train/global_step": 4715,
      "brisk-pond-1 - train/global_step__MIN": 4715,
      "brisk-pond-1 - train/global_step__MAX": 4715
    },
    {
      "Step": 947,
      "brisk-pond-1 - train/global_step": 4720,
      "brisk-pond-1 - train/global_step__MIN": 4720,
      "brisk-pond-1 - train/global_step__MAX": 4720
    },
    {
      "Step": 948,
      "brisk-pond-1 - train/global_step": 4725,
      "brisk-pond-1 - train/global_step__MIN": 4725,
      "brisk-pond-1 - train/global_step__MAX": 4725
    },
    {
      "Step": 949,
      "brisk-pond-1 - train/global_step": 4730,
      "brisk-pond-1 - train/global_step__MIN": 4730,
      "brisk-pond-1 - train/global_step__MAX": 4730
    },
    {
      "Step": 950,
      "brisk-pond-1 - train/global_step": 4735,
      "brisk-pond-1 - train/global_step__MIN": 4735,
      "brisk-pond-1 - train/global_step__MAX": 4735
    },
    {
      "Step": 951,
      "brisk-pond-1 - train/global_step": 4740,
      "brisk-pond-1 - train/global_step__MIN": 4740,
      "brisk-pond-1 - train/global_step__MAX": 4740
    },
    {
      "Step": 952,
      "brisk-pond-1 - train/global_step": 4745,
      "brisk-pond-1 - train/global_step__MIN": 4745,
      "brisk-pond-1 - train/global_step__MAX": 4745
    },
    {
      "Step": 953,
      "brisk-pond-1 - train/global_step": 4750,
      "brisk-pond-1 - train/global_step__MIN": 4750,
      "brisk-pond-1 - train/global_step__MAX": 4750
    },
    {
      "Step": 954,
      "brisk-pond-1 - train/global_step": 4755,
      "brisk-pond-1 - train/global_step__MIN": 4755,
      "brisk-pond-1 - train/global_step__MAX": 4755
    },
    {
      "Step": 955,
      "brisk-pond-1 - train/global_step": 4760,
      "brisk-pond-1 - train/global_step__MIN": 4760,
      "brisk-pond-1 - train/global_step__MAX": 4760
    },
    {
      "Step": 956,
      "brisk-pond-1 - train/global_step": 4765,
      "brisk-pond-1 - train/global_step__MIN": 4765,
      "brisk-pond-1 - train/global_step__MAX": 4765
    },
    {
      "Step": 957,
      "brisk-pond-1 - train/global_step": 4770,
      "brisk-pond-1 - train/global_step__MIN": 4770,
      "brisk-pond-1 - train/global_step__MAX": 4770
    },
    {
      "Step": 958,
      "brisk-pond-1 - train/global_step": 4775,
      "brisk-pond-1 - train/global_step__MIN": 4775,
      "brisk-pond-1 - train/global_step__MAX": 4775
    },
    {
      "Step": 959,
      "brisk-pond-1 - train/global_step": 4780,
      "brisk-pond-1 - train/global_step__MIN": 4780,
      "brisk-pond-1 - train/global_step__MAX": 4780
    },
    {
      "Step": 960,
      "brisk-pond-1 - train/global_step": 4785,
      "brisk-pond-1 - train/global_step__MIN": 4785,
      "brisk-pond-1 - train/global_step__MAX": 4785
    },
    {
      "Step": 961,
      "brisk-pond-1 - train/global_step": 4790,
      "brisk-pond-1 - train/global_step__MIN": 4790,
      "brisk-pond-1 - train/global_step__MAX": 4790
    },
    {
      "Step": 962,
      "brisk-pond-1 - train/global_step": 4795,
      "brisk-pond-1 - train/global_step__MIN": 4795,
      "brisk-pond-1 - train/global_step__MAX": 4795
    },
    {
      "Step": 963,
      "brisk-pond-1 - train/global_step": 4800,
      "brisk-pond-1 - train/global_step__MIN": 4800,
      "brisk-pond-1 - train/global_step__MAX": 4800
    },
    {
      "Step": 964,
      "brisk-pond-1 - train/global_step": 4805,
      "brisk-pond-1 - train/global_step__MIN": 4805,
      "brisk-pond-1 - train/global_step__MAX": 4805
    },
    {
      "Step": 965,
      "brisk-pond-1 - train/global_step": 4810,
      "brisk-pond-1 - train/global_step__MIN": 4810,
      "brisk-pond-1 - train/global_step__MAX": 4810
    },
    {
      "Step": 966,
      "brisk-pond-1 - train/global_step": 4815,
      "brisk-pond-1 - train/global_step__MIN": 4815,
      "brisk-pond-1 - train/global_step__MAX": 4815
    },
    {
      "Step": 967,
      "brisk-pond-1 - train/global_step": 4820,
      "brisk-pond-1 - train/global_step__MIN": 4820,
      "brisk-pond-1 - train/global_step__MAX": 4820
    },
    {
      "Step": 968,
      "brisk-pond-1 - train/global_step": 4825,
      "brisk-pond-1 - train/global_step__MIN": 4825,
      "brisk-pond-1 - train/global_step__MAX": 4825
    },
    {
      "Step": 969,
      "brisk-pond-1 - train/global_step": 4830,
      "brisk-pond-1 - train/global_step__MIN": 4830,
      "brisk-pond-1 - train/global_step__MAX": 4830
    },
    {
      "Step": 970,
      "brisk-pond-1 - train/global_step": 4835,
      "brisk-pond-1 - train/global_step__MIN": 4835,
      "brisk-pond-1 - train/global_step__MAX": 4835
    },
    {
      "Step": 971,
      "brisk-pond-1 - train/global_step": 4840,
      "brisk-pond-1 - train/global_step__MIN": 4840,
      "brisk-pond-1 - train/global_step__MAX": 4840
    },
    {
      "Step": 972,
      "brisk-pond-1 - train/global_step": 4845,
      "brisk-pond-1 - train/global_step__MIN": 4845,
      "brisk-pond-1 - train/global_step__MAX": 4845
    },
    {
      "Step": 973,
      "brisk-pond-1 - train/global_step": 4850,
      "brisk-pond-1 - train/global_step__MIN": 4850,
      "brisk-pond-1 - train/global_step__MAX": 4850
    },
    {
      "Step": 974,
      "brisk-pond-1 - train/global_step": 4855,
      "brisk-pond-1 - train/global_step__MIN": 4855,
      "brisk-pond-1 - train/global_step__MAX": 4855
    },
    {
      "Step": 975,
      "brisk-pond-1 - train/global_step": 4860,
      "brisk-pond-1 - train/global_step__MIN": 4860,
      "brisk-pond-1 - train/global_step__MAX": 4860
    },
    {
      "Step": 976,
      "brisk-pond-1 - train/global_step": 4865,
      "brisk-pond-1 - train/global_step__MIN": 4865,
      "brisk-pond-1 - train/global_step__MAX": 4865
    },
    {
      "Step": 977,
      "brisk-pond-1 - train/global_step": 4870,
      "brisk-pond-1 - train/global_step__MIN": 4870,
      "brisk-pond-1 - train/global_step__MAX": 4870
    },
    {
      "Step": 978,
      "brisk-pond-1 - train/global_step": 4875,
      "brisk-pond-1 - train/global_step__MIN": 4875,
      "brisk-pond-1 - train/global_step__MAX": 4875
    },
    {
      "Step": 979,
      "brisk-pond-1 - train/global_step": 4880,
      "brisk-pond-1 - train/global_step__MIN": 4880,
      "brisk-pond-1 - train/global_step__MAX": 4880
    },
    {
      "Step": 980,
      "brisk-pond-1 - train/global_step": 4885,
      "brisk-pond-1 - train/global_step__MIN": 4885,
      "brisk-pond-1 - train/global_step__MAX": 4885
    },
    {
      "Step": 981,
      "brisk-pond-1 - train/global_step": 4890,
      "brisk-pond-1 - train/global_step__MIN": 4890,
      "brisk-pond-1 - train/global_step__MAX": 4890
    },
    {
      "Step": 982,
      "brisk-pond-1 - train/global_step": 4895,
      "brisk-pond-1 - train/global_step__MIN": 4895,
      "brisk-pond-1 - train/global_step__MAX": 4895
    },
    {
      "Step": 983,
      "brisk-pond-1 - train/global_step": 4900,
      "brisk-pond-1 - train/global_step__MIN": 4900,
      "brisk-pond-1 - train/global_step__MAX": 4900
    },
    {
      "Step": 984,
      "brisk-pond-1 - train/global_step": 4905,
      "brisk-pond-1 - train/global_step__MIN": 4905,
      "brisk-pond-1 - train/global_step__MAX": 4905
    },
    {
      "Step": 985,
      "brisk-pond-1 - train/global_step": 4910,
      "brisk-pond-1 - train/global_step__MIN": 4910,
      "brisk-pond-1 - train/global_step__MAX": 4910
    },
    {
      "Step": 986,
      "brisk-pond-1 - train/global_step": 4915,
      "brisk-pond-1 - train/global_step__MIN": 4915,
      "brisk-pond-1 - train/global_step__MAX": 4915
    },
    {
      "Step": 987,
      "brisk-pond-1 - train/global_step": 4920,
      "brisk-pond-1 - train/global_step__MIN": 4920,
      "brisk-pond-1 - train/global_step__MAX": 4920
    },
    {
      "Step": 988,
      "brisk-pond-1 - train/global_step": 4925,
      "brisk-pond-1 - train/global_step__MIN": 4925,
      "brisk-pond-1 - train/global_step__MAX": 4925
    },
    {
      "Step": 989,
      "brisk-pond-1 - train/global_step": 4930,
      "brisk-pond-1 - train/global_step__MIN": 4930,
      "brisk-pond-1 - train/global_step__MAX": 4930
    },
    {
      "Step": 990,
      "brisk-pond-1 - train/global_step": 4935,
      "brisk-pond-1 - train/global_step__MIN": 4935,
      "brisk-pond-1 - train/global_step__MAX": 4935
    },
    {
      "Step": 991,
      "brisk-pond-1 - train/global_step": 4940,
      "brisk-pond-1 - train/global_step__MIN": 4940,
      "brisk-pond-1 - train/global_step__MAX": 4940
    },
    {
      "Step": 992,
      "brisk-pond-1 - train/global_step": 4945,
      "brisk-pond-1 - train/global_step__MIN": 4945,
      "brisk-pond-1 - train/global_step__MAX": 4945
    },
    {
      "Step": 993,
      "brisk-pond-1 - train/global_step": 4950,
      "brisk-pond-1 - train/global_step__MIN": 4950,
      "brisk-pond-1 - train/global_step__MAX": 4950
    },
    {
      "Step": 994,
      "brisk-pond-1 - train/global_step": 4955,
      "brisk-pond-1 - train/global_step__MIN": 4955,
      "brisk-pond-1 - train/global_step__MAX": 4955
    },
    {
      "Step": 995,
      "brisk-pond-1 - train/global_step": 4960,
      "brisk-pond-1 - train/global_step__MIN": 4960,
      "brisk-pond-1 - train/global_step__MAX": 4960
    },
    {
      "Step": 996,
      "brisk-pond-1 - train/global_step": 4965,
      "brisk-pond-1 - train/global_step__MIN": 4965,
      "brisk-pond-1 - train/global_step__MAX": 4965
    },
    {
      "Step": 997,
      "brisk-pond-1 - train/global_step": 4970,
      "brisk-pond-1 - train/global_step__MIN": 4970,
      "brisk-pond-1 - train/global_step__MAX": 4970
    },
    {
      "Step": 998,
      "brisk-pond-1 - train/global_step": 4975,
      "brisk-pond-1 - train/global_step__MIN": 4975,
      "brisk-pond-1 - train/global_step__MAX": 4975
    },
    {
      "Step": 999,
      "brisk-pond-1 - train/global_step": 4980,
      "brisk-pond-1 - train/global_step__MIN": 4980,
      "brisk-pond-1 - train/global_step__MAX": 4980
    },
    {
      "Step": 1000,
      "brisk-pond-1 - train/global_step": 4985,
      "brisk-pond-1 - train/global_step__MIN": 4985,
      "brisk-pond-1 - train/global_step__MAX": 4985
    },
    {
      "Step": 1001,
      "brisk-pond-1 - train/global_step": 4990,
      "brisk-pond-1 - train/global_step__MIN": 4990,
      "brisk-pond-1 - train/global_step__MAX": 4990
    },
    {
      "Step": 1002,
      "brisk-pond-1 - train/global_step": 4995,
      "brisk-pond-1 - train/global_step__MIN": 4995,
      "brisk-pond-1 - train/global_step__MAX": 4995
    },
    {
      "Step": 1003,
      "brisk-pond-1 - train/global_step": 5000,
      "brisk-pond-1 - train/global_step__MIN": 5000,
      "brisk-pond-1 - train/global_step__MAX": 5000
    },
    {
      "Step": 1004,
      "brisk-pond-1 - train/global_step": 5000,
      "brisk-pond-1 - train/global_step__MIN": 5000,
      "brisk-pond-1 - train/global_step__MAX": 5000
    },
    {
      "Step": 1005,
      "brisk-pond-1 - train/global_step": 5005,
      "brisk-pond-1 - train/global_step__MIN": 5005,
      "brisk-pond-1 - train/global_step__MAX": 5005
    },
    {
      "Step": 1006,
      "brisk-pond-1 - train/global_step": 5010,
      "brisk-pond-1 - train/global_step__MIN": 5010,
      "brisk-pond-1 - train/global_step__MAX": 5010
    },
    {
      "Step": 1007,
      "brisk-pond-1 - train/global_step": 5015,
      "brisk-pond-1 - train/global_step__MIN": 5015,
      "brisk-pond-1 - train/global_step__MAX": 5015
    },
    {
      "Step": 1008,
      "brisk-pond-1 - train/global_step": 5020,
      "brisk-pond-1 - train/global_step__MIN": 5020,
      "brisk-pond-1 - train/global_step__MAX": 5020
    },
    {
      "Step": 1009,
      "brisk-pond-1 - train/global_step": 5025,
      "brisk-pond-1 - train/global_step__MIN": 5025,
      "brisk-pond-1 - train/global_step__MAX": 5025
    },
    {
      "Step": 1010,
      "brisk-pond-1 - train/global_step": 5030,
      "brisk-pond-1 - train/global_step__MIN": 5030,
      "brisk-pond-1 - train/global_step__MAX": 5030
    },
    {
      "Step": 1011,
      "brisk-pond-1 - train/global_step": 5035,
      "brisk-pond-1 - train/global_step__MIN": 5035,
      "brisk-pond-1 - train/global_step__MAX": 5035
    },
    {
      "Step": 1012,
      "brisk-pond-1 - train/global_step": 5040,
      "brisk-pond-1 - train/global_step__MIN": 5040,
      "brisk-pond-1 - train/global_step__MAX": 5040
    },
    {
      "Step": 1013,
      "brisk-pond-1 - train/global_step": 5045,
      "brisk-pond-1 - train/global_step__MIN": 5045,
      "brisk-pond-1 - train/global_step__MAX": 5045
    },
    {
      "Step": 1014,
      "brisk-pond-1 - train/global_step": 5050,
      "brisk-pond-1 - train/global_step__MIN": 5050,
      "brisk-pond-1 - train/global_step__MAX": 5050
    },
    {
      "Step": 1015,
      "brisk-pond-1 - train/global_step": 5055,
      "brisk-pond-1 - train/global_step__MIN": 5055,
      "brisk-pond-1 - train/global_step__MAX": 5055
    },
    {
      "Step": 1016,
      "brisk-pond-1 - train/global_step": 5060,
      "brisk-pond-1 - train/global_step__MIN": 5060,
      "brisk-pond-1 - train/global_step__MAX": 5060
    },
    {
      "Step": 1017,
      "brisk-pond-1 - train/global_step": 5065,
      "brisk-pond-1 - train/global_step__MIN": 5065,
      "brisk-pond-1 - train/global_step__MAX": 5065
    },
    {
      "Step": 1018,
      "brisk-pond-1 - train/global_step": 5070,
      "brisk-pond-1 - train/global_step__MIN": 5070,
      "brisk-pond-1 - train/global_step__MAX": 5070
    },
    {
      "Step": 1019,
      "brisk-pond-1 - train/global_step": 5075,
      "brisk-pond-1 - train/global_step__MIN": 5075,
      "brisk-pond-1 - train/global_step__MAX": 5075
    },
    {
      "Step": 1020,
      "brisk-pond-1 - train/global_step": 5080,
      "brisk-pond-1 - train/global_step__MIN": 5080,
      "brisk-pond-1 - train/global_step__MAX": 5080
    },
    {
      "Step": 1021,
      "brisk-pond-1 - train/global_step": 5085,
      "brisk-pond-1 - train/global_step__MIN": 5085,
      "brisk-pond-1 - train/global_step__MAX": 5085
    },
    {
      "Step": 1022,
      "brisk-pond-1 - train/global_step": 5090,
      "brisk-pond-1 - train/global_step__MIN": 5090,
      "brisk-pond-1 - train/global_step__MAX": 5090
    },
    {
      "Step": 1023,
      "brisk-pond-1 - train/global_step": 5095,
      "brisk-pond-1 - train/global_step__MIN": 5095,
      "brisk-pond-1 - train/global_step__MAX": 5095
    },
    {
      "Step": 1024,
      "brisk-pond-1 - train/global_step": 5100,
      "brisk-pond-1 - train/global_step__MIN": 5100,
      "brisk-pond-1 - train/global_step__MAX": 5100
    },
    {
      "Step": 1025,
      "brisk-pond-1 - train/global_step": 5105,
      "brisk-pond-1 - train/global_step__MIN": 5105,
      "brisk-pond-1 - train/global_step__MAX": 5105
    },
    {
      "Step": 1026,
      "brisk-pond-1 - train/global_step": 5110,
      "brisk-pond-1 - train/global_step__MIN": 5110,
      "brisk-pond-1 - train/global_step__MAX": 5110
    },
    {
      "Step": 1027,
      "brisk-pond-1 - train/global_step": 5115,
      "brisk-pond-1 - train/global_step__MIN": 5115,
      "brisk-pond-1 - train/global_step__MAX": 5115
    },
    {
      "Step": 1028,
      "brisk-pond-1 - train/global_step": 5120,
      "brisk-pond-1 - train/global_step__MIN": 5120,
      "brisk-pond-1 - train/global_step__MAX": 5120
    },
    {
      "Step": 1029,
      "brisk-pond-1 - train/global_step": 5125,
      "brisk-pond-1 - train/global_step__MIN": 5125,
      "brisk-pond-1 - train/global_step__MAX": 5125
    },
    {
      "Step": 1030,
      "brisk-pond-1 - train/global_step": 5130,
      "brisk-pond-1 - train/global_step__MIN": 5130,
      "brisk-pond-1 - train/global_step__MAX": 5130
    },
    {
      "Step": 1031,
      "brisk-pond-1 - train/global_step": 5135,
      "brisk-pond-1 - train/global_step__MIN": 5135,
      "brisk-pond-1 - train/global_step__MAX": 5135
    },
    {
      "Step": 1032,
      "brisk-pond-1 - train/global_step": 5140,
      "brisk-pond-1 - train/global_step__MIN": 5140,
      "brisk-pond-1 - train/global_step__MAX": 5140
    },
    {
      "Step": 1033,
      "brisk-pond-1 - train/global_step": 5145,
      "brisk-pond-1 - train/global_step__MIN": 5145,
      "brisk-pond-1 - train/global_step__MAX": 5145
    },
    {
      "Step": 1034,
      "brisk-pond-1 - train/global_step": 5150,
      "brisk-pond-1 - train/global_step__MIN": 5150,
      "brisk-pond-1 - train/global_step__MAX": 5150
    },
    {
      "Step": 1035,
      "brisk-pond-1 - train/global_step": 5155,
      "brisk-pond-1 - train/global_step__MIN": 5155,
      "brisk-pond-1 - train/global_step__MAX": 5155
    },
    {
      "Step": 1036,
      "brisk-pond-1 - train/global_step": 5160,
      "brisk-pond-1 - train/global_step__MIN": 5160,
      "brisk-pond-1 - train/global_step__MAX": 5160
    },
    {
      "Step": 1037,
      "brisk-pond-1 - train/global_step": 5165,
      "brisk-pond-1 - train/global_step__MIN": 5165,
      "brisk-pond-1 - train/global_step__MAX": 5165
    },
    {
      "Step": 1038,
      "brisk-pond-1 - train/global_step": 5170,
      "brisk-pond-1 - train/global_step__MIN": 5170,
      "brisk-pond-1 - train/global_step__MAX": 5170
    },
    {
      "Step": 1039,
      "brisk-pond-1 - train/global_step": 5175,
      "brisk-pond-1 - train/global_step__MIN": 5175,
      "brisk-pond-1 - train/global_step__MAX": 5175
    },
    {
      "Step": 1040,
      "brisk-pond-1 - train/global_step": 5180,
      "brisk-pond-1 - train/global_step__MIN": 5180,
      "brisk-pond-1 - train/global_step__MAX": 5180
    },
    {
      "Step": 1041,
      "brisk-pond-1 - train/global_step": 5185,
      "brisk-pond-1 - train/global_step__MIN": 5185,
      "brisk-pond-1 - train/global_step__MAX": 5185
    },
    {
      "Step": 1042,
      "brisk-pond-1 - train/global_step": 5190,
      "brisk-pond-1 - train/global_step__MIN": 5190,
      "brisk-pond-1 - train/global_step__MAX": 5190
    },
    {
      "Step": 1043,
      "brisk-pond-1 - train/global_step": 5195,
      "brisk-pond-1 - train/global_step__MIN": 5195,
      "brisk-pond-1 - train/global_step__MAX": 5195
    },
    {
      "Step": 1044,
      "brisk-pond-1 - train/global_step": 5200,
      "brisk-pond-1 - train/global_step__MIN": 5200,
      "brisk-pond-1 - train/global_step__MAX": 5200
    },
    {
      "Step": 1045,
      "brisk-pond-1 - train/global_step": 5205,
      "brisk-pond-1 - train/global_step__MIN": 5205,
      "brisk-pond-1 - train/global_step__MAX": 5205
    },
    {
      "Step": 1046,
      "brisk-pond-1 - train/global_step": 5210,
      "brisk-pond-1 - train/global_step__MIN": 5210,
      "brisk-pond-1 - train/global_step__MAX": 5210
    },
    {
      "Step": 1047,
      "brisk-pond-1 - train/global_step": 5215,
      "brisk-pond-1 - train/global_step__MIN": 5215,
      "brisk-pond-1 - train/global_step__MAX": 5215
    },
    {
      "Step": 1048,
      "brisk-pond-1 - train/global_step": 5220,
      "brisk-pond-1 - train/global_step__MIN": 5220,
      "brisk-pond-1 - train/global_step__MAX": 5220
    },
    {
      "Step": 1049,
      "brisk-pond-1 - train/global_step": 5225,
      "brisk-pond-1 - train/global_step__MIN": 5225,
      "brisk-pond-1 - train/global_step__MAX": 5225
    },
    {
      "Step": 1050,
      "brisk-pond-1 - train/global_step": 5230,
      "brisk-pond-1 - train/global_step__MIN": 5230,
      "brisk-pond-1 - train/global_step__MAX": 5230
    },
    {
      "Step": 1051,
      "brisk-pond-1 - train/global_step": 5235,
      "brisk-pond-1 - train/global_step__MIN": 5235,
      "brisk-pond-1 - train/global_step__MAX": 5235
    },
    {
      "Step": 1052,
      "brisk-pond-1 - train/global_step": 5240,
      "brisk-pond-1 - train/global_step__MIN": 5240,
      "brisk-pond-1 - train/global_step__MAX": 5240
    },
    {
      "Step": 1053,
      "brisk-pond-1 - train/global_step": 5245,
      "brisk-pond-1 - train/global_step__MIN": 5245,
      "brisk-pond-1 - train/global_step__MAX": 5245
    },
    {
      "Step": 1054,
      "brisk-pond-1 - train/global_step": 5250,
      "brisk-pond-1 - train/global_step__MIN": 5250,
      "brisk-pond-1 - train/global_step__MAX": 5250
    },
    {
      "Step": 1055,
      "brisk-pond-1 - train/global_step": 5255,
      "brisk-pond-1 - train/global_step__MIN": 5255,
      "brisk-pond-1 - train/global_step__MAX": 5255
    },
    {
      "Step": 1056,
      "brisk-pond-1 - train/global_step": 5260,
      "brisk-pond-1 - train/global_step__MIN": 5260,
      "brisk-pond-1 - train/global_step__MAX": 5260
    },
    {
      "Step": 1057,
      "brisk-pond-1 - train/global_step": 5265,
      "brisk-pond-1 - train/global_step__MIN": 5265,
      "brisk-pond-1 - train/global_step__MAX": 5265
    },
    {
      "Step": 1058,
      "brisk-pond-1 - train/global_step": 5270,
      "brisk-pond-1 - train/global_step__MIN": 5270,
      "brisk-pond-1 - train/global_step__MAX": 5270
    },
    {
      "Step": 1059,
      "brisk-pond-1 - train/global_step": 5275,
      "brisk-pond-1 - train/global_step__MIN": 5275,
      "brisk-pond-1 - train/global_step__MAX": 5275
    },
    {
      "Step": 1060,
      "brisk-pond-1 - train/global_step": 5280,
      "brisk-pond-1 - train/global_step__MIN": 5280,
      "brisk-pond-1 - train/global_step__MAX": 5280
    },
    {
      "Step": 1061,
      "brisk-pond-1 - train/global_step": 5285,
      "brisk-pond-1 - train/global_step__MIN": 5285,
      "brisk-pond-1 - train/global_step__MAX": 5285
    },
    {
      "Step": 1062,
      "brisk-pond-1 - train/global_step": 5290,
      "brisk-pond-1 - train/global_step__MIN": 5290,
      "brisk-pond-1 - train/global_step__MAX": 5290
    },
    {
      "Step": 1063,
      "brisk-pond-1 - train/global_step": 5295,
      "brisk-pond-1 - train/global_step__MIN": 5295,
      "brisk-pond-1 - train/global_step__MAX": 5295
    },
    {
      "Step": 1064,
      "brisk-pond-1 - train/global_step": 5300,
      "brisk-pond-1 - train/global_step__MIN": 5300,
      "brisk-pond-1 - train/global_step__MAX": 5300
    },
    {
      "Step": 1065,
      "brisk-pond-1 - train/global_step": 5305,
      "brisk-pond-1 - train/global_step__MIN": 5305,
      "brisk-pond-1 - train/global_step__MAX": 5305
    },
    {
      "Step": 1066,
      "brisk-pond-1 - train/global_step": 5310,
      "brisk-pond-1 - train/global_step__MIN": 5310,
      "brisk-pond-1 - train/global_step__MAX": 5310
    },
    {
      "Step": 1067,
      "brisk-pond-1 - train/global_step": 5315,
      "brisk-pond-1 - train/global_step__MIN": 5315,
      "brisk-pond-1 - train/global_step__MAX": 5315
    },
    {
      "Step": 1068,
      "brisk-pond-1 - train/global_step": 5320,
      "brisk-pond-1 - train/global_step__MIN": 5320,
      "brisk-pond-1 - train/global_step__MAX": 5320
    },
    {
      "Step": 1069,
      "brisk-pond-1 - train/global_step": 5325,
      "brisk-pond-1 - train/global_step__MIN": 5325,
      "brisk-pond-1 - train/global_step__MAX": 5325
    },
    {
      "Step": 1070,
      "brisk-pond-1 - train/global_step": 5330,
      "brisk-pond-1 - train/global_step__MIN": 5330,
      "brisk-pond-1 - train/global_step__MAX": 5330
    },
    {
      "Step": 1071,
      "brisk-pond-1 - train/global_step": 5335,
      "brisk-pond-1 - train/global_step__MIN": 5335,
      "brisk-pond-1 - train/global_step__MAX": 5335
    },
    {
      "Step": 1072,
      "brisk-pond-1 - train/global_step": 5340,
      "brisk-pond-1 - train/global_step__MIN": 5340,
      "brisk-pond-1 - train/global_step__MAX": 5340
    },
    {
      "Step": 1073,
      "brisk-pond-1 - train/global_step": 5345,
      "brisk-pond-1 - train/global_step__MIN": 5345,
      "brisk-pond-1 - train/global_step__MAX": 5345
    },
    {
      "Step": 1074,
      "brisk-pond-1 - train/global_step": 5350,
      "brisk-pond-1 - train/global_step__MIN": 5350,
      "brisk-pond-1 - train/global_step__MAX": 5350
    },
    {
      "Step": 1075,
      "brisk-pond-1 - train/global_step": 5352,
      "brisk-pond-1 - train/global_step__MIN": 5352,
      "brisk-pond-1 - train/global_step__MAX": 5352
    },
    {
      "Step": 1076,
      "brisk-pond-1 - train/global_step": 5352,
      "brisk-pond-1 - train/global_step__MIN": 5352,
      "brisk-pond-1 - train/global_step__MAX": 5352
    }
  ]

  const epoch_data = [
    {
      "Step": 0,
      "brisk-pond-1 - train/epoch": 0,
      "brisk-pond-1 - train/epoch__MIN": 0,
      "brisk-pond-1 - train/epoch__MAX": 0
    },
    {
      "Step": 1,
      "brisk-pond-1 - train/epoch": 0.01,
      "brisk-pond-1 - train/epoch__MIN": 0.01,
      "brisk-pond-1 - train/epoch__MAX": 0.01
    },
    {
      "Step": 2,
      "brisk-pond-1 - train/epoch": 0.01,
      "brisk-pond-1 - train/epoch__MIN": 0.01,
      "brisk-pond-1 - train/epoch__MAX": 0.01
    },
    {
      "Step": 3,
      "brisk-pond-1 - train/epoch": 0.01,
      "brisk-pond-1 - train/epoch__MIN": 0.01,
      "brisk-pond-1 - train/epoch__MAX": 0.01
    },
    {
      "Step": 4,
      "brisk-pond-1 - train/epoch": 0.01,
      "brisk-pond-1 - train/epoch__MIN": 0.01,
      "brisk-pond-1 - train/epoch__MAX": 0.01
    },
    {
      "Step": 5,
      "brisk-pond-1 - train/epoch": 0.02,
      "brisk-pond-1 - train/epoch__MIN": 0.02,
      "brisk-pond-1 - train/epoch__MAX": 0.02
    },
    {
      "Step": 6,
      "brisk-pond-1 - train/epoch": 0.02,
      "brisk-pond-1 - train/epoch__MIN": 0.02,
      "brisk-pond-1 - train/epoch__MAX": 0.02
    },
    {
      "Step": 7,
      "brisk-pond-1 - train/epoch": 0.02,
      "brisk-pond-1 - train/epoch__MIN": 0.02,
      "brisk-pond-1 - train/epoch__MAX": 0.02
    },
    {
      "Step": 8,
      "brisk-pond-1 - train/epoch": 0.03,
      "brisk-pond-1 - train/epoch__MIN": 0.03,
      "brisk-pond-1 - train/epoch__MAX": 0.03
    },
    {
      "Step": 9,
      "brisk-pond-1 - train/epoch": 0.03,
      "brisk-pond-1 - train/epoch__MIN": 0.03,
      "brisk-pond-1 - train/epoch__MAX": 0.03
    },
    {
      "Step": 10,
      "brisk-pond-1 - train/epoch": 0.03,
      "brisk-pond-1 - train/epoch__MIN": 0.03,
      "brisk-pond-1 - train/epoch__MAX": 0.03
    },
    {
      "Step": 11,
      "brisk-pond-1 - train/epoch": 0.03,
      "brisk-pond-1 - train/epoch__MIN": 0.03,
      "brisk-pond-1 - train/epoch__MAX": 0.03
    },
    {
      "Step": 12,
      "brisk-pond-1 - train/epoch": 0.04,
      "brisk-pond-1 - train/epoch__MIN": 0.04,
      "brisk-pond-1 - train/epoch__MAX": 0.04
    },
    {
      "Step": 13,
      "brisk-pond-1 - train/epoch": 0.04,
      "brisk-pond-1 - train/epoch__MIN": 0.04,
      "brisk-pond-1 - train/epoch__MAX": 0.04
    },
    {
      "Step": 14,
      "brisk-pond-1 - train/epoch": 0.04,
      "brisk-pond-1 - train/epoch__MIN": 0.04,
      "brisk-pond-1 - train/epoch__MAX": 0.04
    },
    {
      "Step": 15,
      "brisk-pond-1 - train/epoch": 0.04,
      "brisk-pond-1 - train/epoch__MIN": 0.04,
      "brisk-pond-1 - train/epoch__MAX": 0.04
    },
    {
      "Step": 16,
      "brisk-pond-1 - train/epoch": 0.05,
      "brisk-pond-1 - train/epoch__MIN": 0.05,
      "brisk-pond-1 - train/epoch__MAX": 0.05
    },
    {
      "Step": 17,
      "brisk-pond-1 - train/epoch": 0.05,
      "brisk-pond-1 - train/epoch__MIN": 0.05,
      "brisk-pond-1 - train/epoch__MAX": 0.05
    },
    {
      "Step": 18,
      "brisk-pond-1 - train/epoch": 0.05,
      "brisk-pond-1 - train/epoch__MIN": 0.05,
      "brisk-pond-1 - train/epoch__MAX": 0.05
    },
    {
      "Step": 19,
      "brisk-pond-1 - train/epoch": 0.06,
      "brisk-pond-1 - train/epoch__MIN": 0.06,
      "brisk-pond-1 - train/epoch__MAX": 0.06
    },
    {
      "Step": 20,
      "brisk-pond-1 - train/epoch": 0.06,
      "brisk-pond-1 - train/epoch__MIN": 0.06,
      "brisk-pond-1 - train/epoch__MAX": 0.06
    },
    {
      "Step": 21,
      "brisk-pond-1 - train/epoch": 0.06,
      "brisk-pond-1 - train/epoch__MIN": 0.06,
      "brisk-pond-1 - train/epoch__MAX": 0.06
    },
    {
      "Step": 22,
      "brisk-pond-1 - train/epoch": 0.06,
      "brisk-pond-1 - train/epoch__MIN": 0.06,
      "brisk-pond-1 - train/epoch__MAX": 0.06
    },
    {
      "Step": 23,
      "brisk-pond-1 - train/epoch": 0.07,
      "brisk-pond-1 - train/epoch__MIN": 0.07,
      "brisk-pond-1 - train/epoch__MAX": 0.07
    },
    {
      "Step": 24,
      "brisk-pond-1 - train/epoch": 0.07,
      "brisk-pond-1 - train/epoch__MIN": 0.07,
      "brisk-pond-1 - train/epoch__MAX": 0.07
    },
    {
      "Step": 25,
      "brisk-pond-1 - train/epoch": 0.07,
      "brisk-pond-1 - train/epoch__MIN": 0.07,
      "brisk-pond-1 - train/epoch__MAX": 0.07
    },
    {
      "Step": 26,
      "brisk-pond-1 - train/epoch": 0.08,
      "brisk-pond-1 - train/epoch__MIN": 0.08,
      "brisk-pond-1 - train/epoch__MAX": 0.08
    },
    {
      "Step": 27,
      "brisk-pond-1 - train/epoch": 0.08,
      "brisk-pond-1 - train/epoch__MIN": 0.08,
      "brisk-pond-1 - train/epoch__MAX": 0.08
    },
    {
      "Step": 28,
      "brisk-pond-1 - train/epoch": 0.08,
      "brisk-pond-1 - train/epoch__MIN": 0.08,
      "brisk-pond-1 - train/epoch__MAX": 0.08
    },
    {
      "Step": 29,
      "brisk-pond-1 - train/epoch": 0.08,
      "brisk-pond-1 - train/epoch__MIN": 0.08,
      "brisk-pond-1 - train/epoch__MAX": 0.08
    },
    {
      "Step": 30,
      "brisk-pond-1 - train/epoch": 0.09,
      "brisk-pond-1 - train/epoch__MIN": 0.09,
      "brisk-pond-1 - train/epoch__MAX": 0.09
    },
    {
      "Step": 31,
      "brisk-pond-1 - train/epoch": 0.09,
      "brisk-pond-1 - train/epoch__MIN": 0.09,
      "brisk-pond-1 - train/epoch__MAX": 0.09
    },
    {
      "Step": 32,
      "brisk-pond-1 - train/epoch": 0.09,
      "brisk-pond-1 - train/epoch__MIN": 0.09,
      "brisk-pond-1 - train/epoch__MAX": 0.09
    },
    {
      "Step": 33,
      "brisk-pond-1 - train/epoch": 0.1,
      "brisk-pond-1 - train/epoch__MIN": 0.1,
      "brisk-pond-1 - train/epoch__MAX": 0.1
    },
    {
      "Step": 34,
      "brisk-pond-1 - train/epoch": 0.1,
      "brisk-pond-1 - train/epoch__MIN": 0.1,
      "brisk-pond-1 - train/epoch__MAX": 0.1
    },
    {
      "Step": 35,
      "brisk-pond-1 - train/epoch": 0.1,
      "brisk-pond-1 - train/epoch__MIN": 0.1,
      "brisk-pond-1 - train/epoch__MAX": 0.1
    },
    {
      "Step": 36,
      "brisk-pond-1 - train/epoch": 0.1,
      "brisk-pond-1 - train/epoch__MIN": 0.1,
      "brisk-pond-1 - train/epoch__MAX": 0.1
    },
    {
      "Step": 37,
      "brisk-pond-1 - train/epoch": 0.11,
      "brisk-pond-1 - train/epoch__MIN": 0.11,
      "brisk-pond-1 - train/epoch__MAX": 0.11
    },
    {
      "Step": 38,
      "brisk-pond-1 - train/epoch": 0.11,
      "brisk-pond-1 - train/epoch__MIN": 0.11,
      "brisk-pond-1 - train/epoch__MAX": 0.11
    },
    {
      "Step": 39,
      "brisk-pond-1 - train/epoch": 0.11,
      "brisk-pond-1 - train/epoch__MIN": 0.11,
      "brisk-pond-1 - train/epoch__MAX": 0.11
    },
    {
      "Step": 40,
      "brisk-pond-1 - train/epoch": 0.11,
      "brisk-pond-1 - train/epoch__MIN": 0.11,
      "brisk-pond-1 - train/epoch__MAX": 0.11
    },
    {
      "Step": 41,
      "brisk-pond-1 - train/epoch": 0.12,
      "brisk-pond-1 - train/epoch__MIN": 0.12,
      "brisk-pond-1 - train/epoch__MAX": 0.12
    },
    {
      "Step": 42,
      "brisk-pond-1 - train/epoch": 0.12,
      "brisk-pond-1 - train/epoch__MIN": 0.12,
      "brisk-pond-1 - train/epoch__MAX": 0.12
    },
    {
      "Step": 43,
      "brisk-pond-1 - train/epoch": 0.12,
      "brisk-pond-1 - train/epoch__MIN": 0.12,
      "brisk-pond-1 - train/epoch__MAX": 0.12
    },
    {
      "Step": 44,
      "brisk-pond-1 - train/epoch": 0.13,
      "brisk-pond-1 - train/epoch__MIN": 0.13,
      "brisk-pond-1 - train/epoch__MAX": 0.13
    },
    {
      "Step": 45,
      "brisk-pond-1 - train/epoch": 0.13,
      "brisk-pond-1 - train/epoch__MIN": 0.13,
      "brisk-pond-1 - train/epoch__MAX": 0.13
    },
    {
      "Step": 46,
      "brisk-pond-1 - train/epoch": 0.13,
      "brisk-pond-1 - train/epoch__MIN": 0.13,
      "brisk-pond-1 - train/epoch__MAX": 0.13
    },
    {
      "Step": 47,
      "brisk-pond-1 - train/epoch": 0.13,
      "brisk-pond-1 - train/epoch__MIN": 0.13,
      "brisk-pond-1 - train/epoch__MAX": 0.13
    },
    {
      "Step": 48,
      "brisk-pond-1 - train/epoch": 0.14,
      "brisk-pond-1 - train/epoch__MIN": 0.14,
      "brisk-pond-1 - train/epoch__MAX": 0.14
    },
    {
      "Step": 49,
      "brisk-pond-1 - train/epoch": 0.14,
      "brisk-pond-1 - train/epoch__MIN": 0.14,
      "brisk-pond-1 - train/epoch__MAX": 0.14
    },
    {
      "Step": 50,
      "brisk-pond-1 - train/epoch": 0.14,
      "brisk-pond-1 - train/epoch__MIN": 0.14,
      "brisk-pond-1 - train/epoch__MAX": 0.14
    },
    {
      "Step": 51,
      "brisk-pond-1 - train/epoch": 0.15,
      "brisk-pond-1 - train/epoch__MIN": 0.15,
      "brisk-pond-1 - train/epoch__MAX": 0.15
    },
    {
      "Step": 52,
      "brisk-pond-1 - train/epoch": 0.15,
      "brisk-pond-1 - train/epoch__MIN": 0.15,
      "brisk-pond-1 - train/epoch__MAX": 0.15
    },
    {
      "Step": 53,
      "brisk-pond-1 - train/epoch": 0.15,
      "brisk-pond-1 - train/epoch__MIN": 0.15,
      "brisk-pond-1 - train/epoch__MAX": 0.15
    },
    {
      "Step": 54,
      "brisk-pond-1 - train/epoch": 0.15,
      "brisk-pond-1 - train/epoch__MIN": 0.15,
      "brisk-pond-1 - train/epoch__MAX": 0.15
    },
    {
      "Step": 55,
      "brisk-pond-1 - train/epoch": 0.16,
      "brisk-pond-1 - train/epoch__MIN": 0.16,
      "brisk-pond-1 - train/epoch__MAX": 0.16
    },
    {
      "Step": 56,
      "brisk-pond-1 - train/epoch": 0.16,
      "brisk-pond-1 - train/epoch__MIN": 0.16,
      "brisk-pond-1 - train/epoch__MAX": 0.16
    },
    {
      "Step": 57,
      "brisk-pond-1 - train/epoch": 0.16,
      "brisk-pond-1 - train/epoch__MIN": 0.16,
      "brisk-pond-1 - train/epoch__MAX": 0.16
    },
    {
      "Step": 58,
      "brisk-pond-1 - train/epoch": 0.17,
      "brisk-pond-1 - train/epoch__MIN": 0.17,
      "brisk-pond-1 - train/epoch__MAX": 0.17
    },
    {
      "Step": 59,
      "brisk-pond-1 - train/epoch": 0.17,
      "brisk-pond-1 - train/epoch__MIN": 0.17,
      "brisk-pond-1 - train/epoch__MAX": 0.17
    },
    {
      "Step": 60,
      "brisk-pond-1 - train/epoch": 0.17,
      "brisk-pond-1 - train/epoch__MIN": 0.17,
      "brisk-pond-1 - train/epoch__MAX": 0.17
    },
    {
      "Step": 61,
      "brisk-pond-1 - train/epoch": 0.17,
      "brisk-pond-1 - train/epoch__MIN": 0.17,
      "brisk-pond-1 - train/epoch__MAX": 0.17
    },
    {
      "Step": 62,
      "brisk-pond-1 - train/epoch": 0.18,
      "brisk-pond-1 - train/epoch__MIN": 0.18,
      "brisk-pond-1 - train/epoch__MAX": 0.18
    },
    {
      "Step": 63,
      "brisk-pond-1 - train/epoch": 0.18,
      "brisk-pond-1 - train/epoch__MIN": 0.18,
      "brisk-pond-1 - train/epoch__MAX": 0.18
    },
    {
      "Step": 64,
      "brisk-pond-1 - train/epoch": 0.18,
      "brisk-pond-1 - train/epoch__MIN": 0.18,
      "brisk-pond-1 - train/epoch__MAX": 0.18
    },
    {
      "Step": 65,
      "brisk-pond-1 - train/epoch": 0.18,
      "brisk-pond-1 - train/epoch__MIN": 0.18,
      "brisk-pond-1 - train/epoch__MAX": 0.18
    },
    {
      "Step": 66,
      "brisk-pond-1 - train/epoch": 0.19,
      "brisk-pond-1 - train/epoch__MIN": 0.19,
      "brisk-pond-1 - train/epoch__MAX": 0.19
    },
    {
      "Step": 67,
      "brisk-pond-1 - train/epoch": 0.19,
      "brisk-pond-1 - train/epoch__MIN": 0.19,
      "brisk-pond-1 - train/epoch__MAX": 0.19
    },
    {
      "Step": 68,
      "brisk-pond-1 - train/epoch": 0.19,
      "brisk-pond-1 - train/epoch__MIN": 0.19,
      "brisk-pond-1 - train/epoch__MAX": 0.19
    },
    {
      "Step": 69,
      "brisk-pond-1 - train/epoch": 0.2,
      "brisk-pond-1 - train/epoch__MIN": 0.2,
      "brisk-pond-1 - train/epoch__MAX": 0.2
    },
    {
      "Step": 70,
      "brisk-pond-1 - train/epoch": 0.2,
      "brisk-pond-1 - train/epoch__MIN": 0.2,
      "brisk-pond-1 - train/epoch__MAX": 0.2
    },
    {
      "Step": 71,
      "brisk-pond-1 - train/epoch": 0.2,
      "brisk-pond-1 - train/epoch__MIN": 0.2,
      "brisk-pond-1 - train/epoch__MAX": 0.2
    },
    {
      "Step": 72,
      "brisk-pond-1 - train/epoch": 0.2,
      "brisk-pond-1 - train/epoch__MIN": 0.2,
      "brisk-pond-1 - train/epoch__MAX": 0.2
    },
    {
      "Step": 73,
      "brisk-pond-1 - train/epoch": 0.21,
      "brisk-pond-1 - train/epoch__MIN": 0.21,
      "brisk-pond-1 - train/epoch__MAX": 0.21
    },
    {
      "Step": 74,
      "brisk-pond-1 - train/epoch": 0.21,
      "brisk-pond-1 - train/epoch__MIN": 0.21,
      "brisk-pond-1 - train/epoch__MAX": 0.21
    },
    {
      "Step": 75,
      "brisk-pond-1 - train/epoch": 0.21,
      "brisk-pond-1 - train/epoch__MIN": 0.21,
      "brisk-pond-1 - train/epoch__MAX": 0.21
    },
    {
      "Step": 76,
      "brisk-pond-1 - train/epoch": 0.22,
      "brisk-pond-1 - train/epoch__MIN": 0.22,
      "brisk-pond-1 - train/epoch__MAX": 0.22
    },
    {
      "Step": 77,
      "brisk-pond-1 - train/epoch": 0.22,
      "brisk-pond-1 - train/epoch__MIN": 0.22,
      "brisk-pond-1 - train/epoch__MAX": 0.22
    },
    {
      "Step": 78,
      "brisk-pond-1 - train/epoch": 0.22,
      "brisk-pond-1 - train/epoch__MIN": 0.22,
      "brisk-pond-1 - train/epoch__MAX": 0.22
    },
    {
      "Step": 79,
      "brisk-pond-1 - train/epoch": 0.22,
      "brisk-pond-1 - train/epoch__MIN": 0.22,
      "brisk-pond-1 - train/epoch__MAX": 0.22
    },
    {
      "Step": 80,
      "brisk-pond-1 - train/epoch": 0.23,
      "brisk-pond-1 - train/epoch__MIN": 0.23,
      "brisk-pond-1 - train/epoch__MAX": 0.23
    },
    {
      "Step": 81,
      "brisk-pond-1 - train/epoch": 0.23,
      "brisk-pond-1 - train/epoch__MIN": 0.23,
      "brisk-pond-1 - train/epoch__MAX": 0.23
    },
    {
      "Step": 82,
      "brisk-pond-1 - train/epoch": 0.23,
      "brisk-pond-1 - train/epoch__MIN": 0.23,
      "brisk-pond-1 - train/epoch__MAX": 0.23
    },
    {
      "Step": 83,
      "brisk-pond-1 - train/epoch": 0.24,
      "brisk-pond-1 - train/epoch__MIN": 0.24,
      "brisk-pond-1 - train/epoch__MAX": 0.24
    },
    {
      "Step": 84,
      "brisk-pond-1 - train/epoch": 0.24,
      "brisk-pond-1 - train/epoch__MIN": 0.24,
      "brisk-pond-1 - train/epoch__MAX": 0.24
    },
    {
      "Step": 85,
      "brisk-pond-1 - train/epoch": 0.24,
      "brisk-pond-1 - train/epoch__MIN": 0.24,
      "brisk-pond-1 - train/epoch__MAX": 0.24
    },
    {
      "Step": 86,
      "brisk-pond-1 - train/epoch": 0.24,
      "brisk-pond-1 - train/epoch__MIN": 0.24,
      "brisk-pond-1 - train/epoch__MAX": 0.24
    },
    {
      "Step": 87,
      "brisk-pond-1 - train/epoch": 0.25,
      "brisk-pond-1 - train/epoch__MIN": 0.25,
      "brisk-pond-1 - train/epoch__MAX": 0.25
    },
    {
      "Step": 88,
      "brisk-pond-1 - train/epoch": 0.25,
      "brisk-pond-1 - train/epoch__MIN": 0.25,
      "brisk-pond-1 - train/epoch__MAX": 0.25
    },
    {
      "Step": 89,
      "brisk-pond-1 - train/epoch": 0.25,
      "brisk-pond-1 - train/epoch__MIN": 0.25,
      "brisk-pond-1 - train/epoch__MAX": 0.25
    },
    {
      "Step": 90,
      "brisk-pond-1 - train/epoch": 0.26,
      "brisk-pond-1 - train/epoch__MIN": 0.26,
      "brisk-pond-1 - train/epoch__MAX": 0.26
    },
    {
      "Step": 91,
      "brisk-pond-1 - train/epoch": 0.26,
      "brisk-pond-1 - train/epoch__MIN": 0.26,
      "brisk-pond-1 - train/epoch__MAX": 0.26
    },
    {
      "Step": 92,
      "brisk-pond-1 - train/epoch": 0.26,
      "brisk-pond-1 - train/epoch__MIN": 0.26,
      "brisk-pond-1 - train/epoch__MAX": 0.26
    },
    {
      "Step": 93,
      "brisk-pond-1 - train/epoch": 0.26,
      "brisk-pond-1 - train/epoch__MIN": 0.26,
      "brisk-pond-1 - train/epoch__MAX": 0.26
    },
    {
      "Step": 94,
      "brisk-pond-1 - train/epoch": 0.27,
      "brisk-pond-1 - train/epoch__MIN": 0.27,
      "brisk-pond-1 - train/epoch__MAX": 0.27
    },
    {
      "Step": 95,
      "brisk-pond-1 - train/epoch": 0.27,
      "brisk-pond-1 - train/epoch__MIN": 0.27,
      "brisk-pond-1 - train/epoch__MAX": 0.27
    },
    {
      "Step": 96,
      "brisk-pond-1 - train/epoch": 0.27,
      "brisk-pond-1 - train/epoch__MIN": 0.27,
      "brisk-pond-1 - train/epoch__MAX": 0.27
    },
    {
      "Step": 97,
      "brisk-pond-1 - train/epoch": 0.27,
      "brisk-pond-1 - train/epoch__MIN": 0.27,
      "brisk-pond-1 - train/epoch__MAX": 0.27
    },
    {
      "Step": 98,
      "brisk-pond-1 - train/epoch": 0.28,
      "brisk-pond-1 - train/epoch__MIN": 0.28,
      "brisk-pond-1 - train/epoch__MAX": 0.28
    },
    {
      "Step": 99,
      "brisk-pond-1 - train/epoch": 0.28,
      "brisk-pond-1 - train/epoch__MIN": 0.28,
      "brisk-pond-1 - train/epoch__MAX": 0.28
    },
    {
      "Step": 100,
      "brisk-pond-1 - train/epoch": 0.28,
      "brisk-pond-1 - train/epoch__MIN": 0.28,
      "brisk-pond-1 - train/epoch__MAX": 0.28
    },
    {
      "Step": 101,
      "brisk-pond-1 - train/epoch": 0.29,
      "brisk-pond-1 - train/epoch__MIN": 0.29,
      "brisk-pond-1 - train/epoch__MAX": 0.29
    },
    {
      "Step": 102,
      "brisk-pond-1 - train/epoch": 0.29,
      "brisk-pond-1 - train/epoch__MIN": 0.29,
      "brisk-pond-1 - train/epoch__MAX": 0.29
    },
    {
      "Step": 103,
      "brisk-pond-1 - train/epoch": 0.29,
      "brisk-pond-1 - train/epoch__MIN": 0.29,
      "brisk-pond-1 - train/epoch__MAX": 0.29
    },
    {
      "Step": 104,
      "brisk-pond-1 - train/epoch": 0.29,
      "brisk-pond-1 - train/epoch__MIN": 0.29,
      "brisk-pond-1 - train/epoch__MAX": 0.29
    },
    {
      "Step": 105,
      "brisk-pond-1 - train/epoch": 0.3,
      "brisk-pond-1 - train/epoch__MIN": 0.3,
      "brisk-pond-1 - train/epoch__MAX": 0.3
    },
    {
      "Step": 106,
      "brisk-pond-1 - train/epoch": 0.3,
      "brisk-pond-1 - train/epoch__MIN": 0.3,
      "brisk-pond-1 - train/epoch__MAX": 0.3
    },
    {
      "Step": 107,
      "brisk-pond-1 - train/epoch": 0.3,
      "brisk-pond-1 - train/epoch__MIN": 0.3,
      "brisk-pond-1 - train/epoch__MAX": 0.3
    },
    {
      "Step": 108,
      "brisk-pond-1 - train/epoch": 0.31,
      "brisk-pond-1 - train/epoch__MIN": 0.31,
      "brisk-pond-1 - train/epoch__MAX": 0.31
    },
    {
      "Step": 109,
      "brisk-pond-1 - train/epoch": 0.31,
      "brisk-pond-1 - train/epoch__MIN": 0.31,
      "brisk-pond-1 - train/epoch__MAX": 0.31
    },
    {
      "Step": 110,
      "brisk-pond-1 - train/epoch": 0.31,
      "brisk-pond-1 - train/epoch__MIN": 0.31,
      "brisk-pond-1 - train/epoch__MAX": 0.31
    },
    {
      "Step": 111,
      "brisk-pond-1 - train/epoch": 0.31,
      "brisk-pond-1 - train/epoch__MIN": 0.31,
      "brisk-pond-1 - train/epoch__MAX": 0.31
    },
    {
      "Step": 112,
      "brisk-pond-1 - train/epoch": 0.32,
      "brisk-pond-1 - train/epoch__MIN": 0.32,
      "brisk-pond-1 - train/epoch__MAX": 0.32
    },
    {
      "Step": 113,
      "brisk-pond-1 - train/epoch": 0.32,
      "brisk-pond-1 - train/epoch__MIN": 0.32,
      "brisk-pond-1 - train/epoch__MAX": 0.32
    },
    {
      "Step": 114,
      "brisk-pond-1 - train/epoch": 0.32,
      "brisk-pond-1 - train/epoch__MIN": 0.32,
      "brisk-pond-1 - train/epoch__MAX": 0.32
    },
    {
      "Step": 115,
      "brisk-pond-1 - train/epoch": 0.33,
      "brisk-pond-1 - train/epoch__MIN": 0.33,
      "brisk-pond-1 - train/epoch__MAX": 0.33
    },
    {
      "Step": 116,
      "brisk-pond-1 - train/epoch": 0.33,
      "brisk-pond-1 - train/epoch__MIN": 0.33,
      "brisk-pond-1 - train/epoch__MAX": 0.33
    },
    {
      "Step": 117,
      "brisk-pond-1 - train/epoch": 0.33,
      "brisk-pond-1 - train/epoch__MIN": 0.33,
      "brisk-pond-1 - train/epoch__MAX": 0.33
    },
    {
      "Step": 118,
      "brisk-pond-1 - train/epoch": 0.33,
      "brisk-pond-1 - train/epoch__MIN": 0.33,
      "brisk-pond-1 - train/epoch__MAX": 0.33
    },
    {
      "Step": 119,
      "brisk-pond-1 - train/epoch": 0.34,
      "brisk-pond-1 - train/epoch__MIN": 0.34,
      "brisk-pond-1 - train/epoch__MAX": 0.34
    },
    {
      "Step": 120,
      "brisk-pond-1 - train/epoch": 0.34,
      "brisk-pond-1 - train/epoch__MIN": 0.34,
      "brisk-pond-1 - train/epoch__MAX": 0.34
    },
    {
      "Step": 121,
      "brisk-pond-1 - train/epoch": 0.34,
      "brisk-pond-1 - train/epoch__MIN": 0.34,
      "brisk-pond-1 - train/epoch__MAX": 0.34
    },
    {
      "Step": 122,
      "brisk-pond-1 - train/epoch": 0.34,
      "brisk-pond-1 - train/epoch__MIN": 0.34,
      "brisk-pond-1 - train/epoch__MAX": 0.34
    },
    {
      "Step": 123,
      "brisk-pond-1 - train/epoch": 0.35,
      "brisk-pond-1 - train/epoch__MIN": 0.35,
      "brisk-pond-1 - train/epoch__MAX": 0.35
    },
    {
      "Step": 124,
      "brisk-pond-1 - train/epoch": 0.35,
      "brisk-pond-1 - train/epoch__MIN": 0.35,
      "brisk-pond-1 - train/epoch__MAX": 0.35
    },
    {
      "Step": 125,
      "brisk-pond-1 - train/epoch": 0.35,
      "brisk-pond-1 - train/epoch__MIN": 0.35,
      "brisk-pond-1 - train/epoch__MAX": 0.35
    },
    {
      "Step": 126,
      "brisk-pond-1 - train/epoch": 0.36,
      "brisk-pond-1 - train/epoch__MIN": 0.36,
      "brisk-pond-1 - train/epoch__MAX": 0.36
    },
    {
      "Step": 127,
      "brisk-pond-1 - train/epoch": 0.36,
      "brisk-pond-1 - train/epoch__MIN": 0.36,
      "brisk-pond-1 - train/epoch__MAX": 0.36
    },
    {
      "Step": 128,
      "brisk-pond-1 - train/epoch": 0.36,
      "brisk-pond-1 - train/epoch__MIN": 0.36,
      "brisk-pond-1 - train/epoch__MAX": 0.36
    },
    {
      "Step": 129,
      "brisk-pond-1 - train/epoch": 0.36,
      "brisk-pond-1 - train/epoch__MIN": 0.36,
      "brisk-pond-1 - train/epoch__MAX": 0.36
    },
    {
      "Step": 130,
      "brisk-pond-1 - train/epoch": 0.37,
      "brisk-pond-1 - train/epoch__MIN": 0.37,
      "brisk-pond-1 - train/epoch__MAX": 0.37
    },
    {
      "Step": 131,
      "brisk-pond-1 - train/epoch": 0.37,
      "brisk-pond-1 - train/epoch__MIN": 0.37,
      "brisk-pond-1 - train/epoch__MAX": 0.37
    },
    {
      "Step": 132,
      "brisk-pond-1 - train/epoch": 0.37,
      "brisk-pond-1 - train/epoch__MIN": 0.37,
      "brisk-pond-1 - train/epoch__MAX": 0.37
    },
    {
      "Step": 133,
      "brisk-pond-1 - train/epoch": 0.38,
      "brisk-pond-1 - train/epoch__MIN": 0.38,
      "brisk-pond-1 - train/epoch__MAX": 0.38
    },
    {
      "Step": 134,
      "brisk-pond-1 - train/epoch": 0.38,
      "brisk-pond-1 - train/epoch__MIN": 0.38,
      "brisk-pond-1 - train/epoch__MAX": 0.38
    },
    {
      "Step": 135,
      "brisk-pond-1 - train/epoch": 0.38,
      "brisk-pond-1 - train/epoch__MIN": 0.38,
      "brisk-pond-1 - train/epoch__MAX": 0.38
    },
    {
      "Step": 136,
      "brisk-pond-1 - train/epoch": 0.38,
      "brisk-pond-1 - train/epoch__MIN": 0.38,
      "brisk-pond-1 - train/epoch__MAX": 0.38
    },
    {
      "Step": 137,
      "brisk-pond-1 - train/epoch": 0.39,
      "brisk-pond-1 - train/epoch__MIN": 0.39,
      "brisk-pond-1 - train/epoch__MAX": 0.39
    },
    {
      "Step": 138,
      "brisk-pond-1 - train/epoch": 0.39,
      "brisk-pond-1 - train/epoch__MIN": 0.39,
      "brisk-pond-1 - train/epoch__MAX": 0.39
    },
    {
      "Step": 139,
      "brisk-pond-1 - train/epoch": 0.39,
      "brisk-pond-1 - train/epoch__MIN": 0.39,
      "brisk-pond-1 - train/epoch__MAX": 0.39
    },
    {
      "Step": 140,
      "brisk-pond-1 - train/epoch": 0.4,
      "brisk-pond-1 - train/epoch__MIN": 0.4,
      "brisk-pond-1 - train/epoch__MAX": 0.4
    },
    {
      "Step": 141,
      "brisk-pond-1 - train/epoch": 0.4,
      "brisk-pond-1 - train/epoch__MIN": 0.4,
      "brisk-pond-1 - train/epoch__MAX": 0.4
    },
    {
      "Step": 142,
      "brisk-pond-1 - train/epoch": 0.4,
      "brisk-pond-1 - train/epoch__MIN": 0.4,
      "brisk-pond-1 - train/epoch__MAX": 0.4
    },
    {
      "Step": 143,
      "brisk-pond-1 - train/epoch": 0.4,
      "brisk-pond-1 - train/epoch__MIN": 0.4,
      "brisk-pond-1 - train/epoch__MAX": 0.4
    },
    {
      "Step": 144,
      "brisk-pond-1 - train/epoch": 0.41,
      "brisk-pond-1 - train/epoch__MIN": 0.41,
      "brisk-pond-1 - train/epoch__MAX": 0.41
    },
    {
      "Step": 145,
      "brisk-pond-1 - train/epoch": 0.41,
      "brisk-pond-1 - train/epoch__MIN": 0.41,
      "brisk-pond-1 - train/epoch__MAX": 0.41
    },
    {
      "Step": 146,
      "brisk-pond-1 - train/epoch": 0.41,
      "brisk-pond-1 - train/epoch__MIN": 0.41,
      "brisk-pond-1 - train/epoch__MAX": 0.41
    },
    {
      "Step": 147,
      "brisk-pond-1 - train/epoch": 0.41,
      "brisk-pond-1 - train/epoch__MIN": 0.41,
      "brisk-pond-1 - train/epoch__MAX": 0.41
    },
    {
      "Step": 148,
      "brisk-pond-1 - train/epoch": 0.42,
      "brisk-pond-1 - train/epoch__MIN": 0.42,
      "brisk-pond-1 - train/epoch__MAX": 0.42
    },
    {
      "Step": 149,
      "brisk-pond-1 - train/epoch": 0.42,
      "brisk-pond-1 - train/epoch__MIN": 0.42,
      "brisk-pond-1 - train/epoch__MAX": 0.42
    },
    {
      "Step": 150,
      "brisk-pond-1 - train/epoch": 0.42,
      "brisk-pond-1 - train/epoch__MIN": 0.42,
      "brisk-pond-1 - train/epoch__MAX": 0.42
    },
    {
      "Step": 151,
      "brisk-pond-1 - train/epoch": 0.43,
      "brisk-pond-1 - train/epoch__MIN": 0.43,
      "brisk-pond-1 - train/epoch__MAX": 0.43
    },
    {
      "Step": 152,
      "brisk-pond-1 - train/epoch": 0.43,
      "brisk-pond-1 - train/epoch__MIN": 0.43,
      "brisk-pond-1 - train/epoch__MAX": 0.43
    },
    {
      "Step": 153,
      "brisk-pond-1 - train/epoch": 0.43,
      "brisk-pond-1 - train/epoch__MIN": 0.43,
      "brisk-pond-1 - train/epoch__MAX": 0.43
    },
    {
      "Step": 154,
      "brisk-pond-1 - train/epoch": 0.43,
      "brisk-pond-1 - train/epoch__MIN": 0.43,
      "brisk-pond-1 - train/epoch__MAX": 0.43
    },
    {
      "Step": 155,
      "brisk-pond-1 - train/epoch": 0.44,
      "brisk-pond-1 - train/epoch__MIN": 0.44,
      "brisk-pond-1 - train/epoch__MAX": 0.44
    },
    {
      "Step": 156,
      "brisk-pond-1 - train/epoch": 0.44,
      "brisk-pond-1 - train/epoch__MIN": 0.44,
      "brisk-pond-1 - train/epoch__MAX": 0.44
    },
    {
      "Step": 157,
      "brisk-pond-1 - train/epoch": 0.44,
      "brisk-pond-1 - train/epoch__MIN": 0.44,
      "brisk-pond-1 - train/epoch__MAX": 0.44
    },
    {
      "Step": 158,
      "brisk-pond-1 - train/epoch": 0.45,
      "brisk-pond-1 - train/epoch__MIN": 0.45,
      "brisk-pond-1 - train/epoch__MAX": 0.45
    },
    {
      "Step": 159,
      "brisk-pond-1 - train/epoch": 0.45,
      "brisk-pond-1 - train/epoch__MIN": 0.45,
      "brisk-pond-1 - train/epoch__MAX": 0.45
    },
    {
      "Step": 160,
      "brisk-pond-1 - train/epoch": 0.45,
      "brisk-pond-1 - train/epoch__MIN": 0.45,
      "brisk-pond-1 - train/epoch__MAX": 0.45
    },
    {
      "Step": 161,
      "brisk-pond-1 - train/epoch": 0.45,
      "brisk-pond-1 - train/epoch__MIN": 0.45,
      "brisk-pond-1 - train/epoch__MAX": 0.45
    },
    {
      "Step": 162,
      "brisk-pond-1 - train/epoch": 0.46,
      "brisk-pond-1 - train/epoch__MIN": 0.46,
      "brisk-pond-1 - train/epoch__MAX": 0.46
    },
    {
      "Step": 163,
      "brisk-pond-1 - train/epoch": 0.46,
      "brisk-pond-1 - train/epoch__MIN": 0.46,
      "brisk-pond-1 - train/epoch__MAX": 0.46
    },
    {
      "Step": 164,
      "brisk-pond-1 - train/epoch": 0.46,
      "brisk-pond-1 - train/epoch__MIN": 0.46,
      "brisk-pond-1 - train/epoch__MAX": 0.46
    },
    {
      "Step": 165,
      "brisk-pond-1 - train/epoch": 0.47,
      "brisk-pond-1 - train/epoch__MIN": 0.47,
      "brisk-pond-1 - train/epoch__MAX": 0.47
    },
    {
      "Step": 166,
      "brisk-pond-1 - train/epoch": 0.47,
      "brisk-pond-1 - train/epoch__MIN": 0.47,
      "brisk-pond-1 - train/epoch__MAX": 0.47
    },
    {
      "Step": 167,
      "brisk-pond-1 - train/epoch": 0.47,
      "brisk-pond-1 - train/epoch__MIN": 0.47,
      "brisk-pond-1 - train/epoch__MAX": 0.47
    },
    {
      "Step": 168,
      "brisk-pond-1 - train/epoch": 0.47,
      "brisk-pond-1 - train/epoch__MIN": 0.47,
      "brisk-pond-1 - train/epoch__MAX": 0.47
    },
    {
      "Step": 169,
      "brisk-pond-1 - train/epoch": 0.48,
      "brisk-pond-1 - train/epoch__MIN": 0.48,
      "brisk-pond-1 - train/epoch__MAX": 0.48
    },
    {
      "Step": 170,
      "brisk-pond-1 - train/epoch": 0.48,
      "brisk-pond-1 - train/epoch__MIN": 0.48,
      "brisk-pond-1 - train/epoch__MAX": 0.48
    },
    {
      "Step": 171,
      "brisk-pond-1 - train/epoch": 0.48,
      "brisk-pond-1 - train/epoch__MIN": 0.48,
      "brisk-pond-1 - train/epoch__MAX": 0.48
    },
    {
      "Step": 172,
      "brisk-pond-1 - train/epoch": 0.48,
      "brisk-pond-1 - train/epoch__MIN": 0.48,
      "brisk-pond-1 - train/epoch__MAX": 0.48
    },
    {
      "Step": 173,
      "brisk-pond-1 - train/epoch": 0.49,
      "brisk-pond-1 - train/epoch__MIN": 0.49,
      "brisk-pond-1 - train/epoch__MAX": 0.49
    },
    {
      "Step": 174,
      "brisk-pond-1 - train/epoch": 0.49,
      "brisk-pond-1 - train/epoch__MIN": 0.49,
      "brisk-pond-1 - train/epoch__MAX": 0.49
    },
    {
      "Step": 175,
      "brisk-pond-1 - train/epoch": 0.49,
      "brisk-pond-1 - train/epoch__MIN": 0.49,
      "brisk-pond-1 - train/epoch__MAX": 0.49
    },
    {
      "Step": 176,
      "brisk-pond-1 - train/epoch": 0.5,
      "brisk-pond-1 - train/epoch__MIN": 0.5,
      "brisk-pond-1 - train/epoch__MAX": 0.5
    },
    {
      "Step": 177,
      "brisk-pond-1 - train/epoch": 0.5,
      "brisk-pond-1 - train/epoch__MIN": 0.5,
      "brisk-pond-1 - train/epoch__MAX": 0.5
    },
    {
      "Step": 178,
      "brisk-pond-1 - train/epoch": 0.5,
      "brisk-pond-1 - train/epoch__MIN": 0.5,
      "brisk-pond-1 - train/epoch__MAX": 0.5
    },
    {
      "Step": 179,
      "brisk-pond-1 - train/epoch": 0.5,
      "brisk-pond-1 - train/epoch__MIN": 0.5,
      "brisk-pond-1 - train/epoch__MAX": 0.5
    },
    {
      "Step": 180,
      "brisk-pond-1 - train/epoch": 0.51,
      "brisk-pond-1 - train/epoch__MIN": 0.51,
      "brisk-pond-1 - train/epoch__MAX": 0.51
    },
    {
      "Step": 181,
      "brisk-pond-1 - train/epoch": 0.51,
      "brisk-pond-1 - train/epoch__MIN": 0.51,
      "brisk-pond-1 - train/epoch__MAX": 0.51
    },
    {
      "Step": 182,
      "brisk-pond-1 - train/epoch": 0.51,
      "brisk-pond-1 - train/epoch__MIN": 0.51,
      "brisk-pond-1 - train/epoch__MAX": 0.51
    },
    {
      "Step": 183,
      "brisk-pond-1 - train/epoch": 0.52,
      "brisk-pond-1 - train/epoch__MIN": 0.52,
      "brisk-pond-1 - train/epoch__MAX": 0.52
    },
    {
      "Step": 184,
      "brisk-pond-1 - train/epoch": 0.52,
      "brisk-pond-1 - train/epoch__MIN": 0.52,
      "brisk-pond-1 - train/epoch__MAX": 0.52
    },
    {
      "Step": 185,
      "brisk-pond-1 - train/epoch": 0.52,
      "brisk-pond-1 - train/epoch__MIN": 0.52,
      "brisk-pond-1 - train/epoch__MAX": 0.52
    },
    {
      "Step": 186,
      "brisk-pond-1 - train/epoch": 0.52,
      "brisk-pond-1 - train/epoch__MIN": 0.52,
      "brisk-pond-1 - train/epoch__MAX": 0.52
    },
    {
      "Step": 187,
      "brisk-pond-1 - train/epoch": 0.53,
      "brisk-pond-1 - train/epoch__MIN": 0.53,
      "brisk-pond-1 - train/epoch__MAX": 0.53
    },
    {
      "Step": 188,
      "brisk-pond-1 - train/epoch": 0.53,
      "brisk-pond-1 - train/epoch__MIN": 0.53,
      "brisk-pond-1 - train/epoch__MAX": 0.53
    },
    {
      "Step": 189,
      "brisk-pond-1 - train/epoch": 0.53,
      "brisk-pond-1 - train/epoch__MIN": 0.53,
      "brisk-pond-1 - train/epoch__MAX": 0.53
    },
    {
      "Step": 190,
      "brisk-pond-1 - train/epoch": 0.54,
      "brisk-pond-1 - train/epoch__MIN": 0.54,
      "brisk-pond-1 - train/epoch__MAX": 0.54
    },
    {
      "Step": 191,
      "brisk-pond-1 - train/epoch": 0.54,
      "brisk-pond-1 - train/epoch__MIN": 0.54,
      "brisk-pond-1 - train/epoch__MAX": 0.54
    },
    {
      "Step": 192,
      "brisk-pond-1 - train/epoch": 0.54,
      "brisk-pond-1 - train/epoch__MIN": 0.54,
      "brisk-pond-1 - train/epoch__MAX": 0.54
    },
    {
      "Step": 193,
      "brisk-pond-1 - train/epoch": 0.54,
      "brisk-pond-1 - train/epoch__MIN": 0.54,
      "brisk-pond-1 - train/epoch__MAX": 0.54
    },
    {
      "Step": 194,
      "brisk-pond-1 - train/epoch": 0.55,
      "brisk-pond-1 - train/epoch__MIN": 0.55,
      "brisk-pond-1 - train/epoch__MAX": 0.55
    },
    {
      "Step": 195,
      "brisk-pond-1 - train/epoch": 0.55,
      "brisk-pond-1 - train/epoch__MIN": 0.55,
      "brisk-pond-1 - train/epoch__MAX": 0.55
    },
    {
      "Step": 196,
      "brisk-pond-1 - train/epoch": 0.55,
      "brisk-pond-1 - train/epoch__MIN": 0.55,
      "brisk-pond-1 - train/epoch__MAX": 0.55
    },
    {
      "Step": 197,
      "brisk-pond-1 - train/epoch": 0.55,
      "brisk-pond-1 - train/epoch__MIN": 0.55,
      "brisk-pond-1 - train/epoch__MAX": 0.55
    },
    {
      "Step": 198,
      "brisk-pond-1 - train/epoch": 0.56,
      "brisk-pond-1 - train/epoch__MIN": 0.56,
      "brisk-pond-1 - train/epoch__MAX": 0.56
    },
    {
      "Step": 199,
      "brisk-pond-1 - train/epoch": 0.56,
      "brisk-pond-1 - train/epoch__MIN": 0.56,
      "brisk-pond-1 - train/epoch__MAX": 0.56
    },
    {
      "Step": 200,
      "brisk-pond-1 - train/epoch": 0.56,
      "brisk-pond-1 - train/epoch__MIN": 0.56,
      "brisk-pond-1 - train/epoch__MAX": 0.56
    },
    {
      "Step": 201,
      "brisk-pond-1 - train/epoch": 0.56,
      "brisk-pond-1 - train/epoch__MIN": 0.56,
      "brisk-pond-1 - train/epoch__MAX": 0.56
    },
    {
      "Step": 202,
      "brisk-pond-1 - train/epoch": 0.57,
      "brisk-pond-1 - train/epoch__MIN": 0.57,
      "brisk-pond-1 - train/epoch__MAX": 0.57
    },
    {
      "Step": 203,
      "brisk-pond-1 - train/epoch": 0.57,
      "brisk-pond-1 - train/epoch__MIN": 0.57,
      "brisk-pond-1 - train/epoch__MAX": 0.57
    },
    {
      "Step": 204,
      "brisk-pond-1 - train/epoch": 0.57,
      "brisk-pond-1 - train/epoch__MIN": 0.57,
      "brisk-pond-1 - train/epoch__MAX": 0.57
    },
    {
      "Step": 205,
      "brisk-pond-1 - train/epoch": 0.57,
      "brisk-pond-1 - train/epoch__MIN": 0.57,
      "brisk-pond-1 - train/epoch__MAX": 0.57
    },
    {
      "Step": 206,
      "brisk-pond-1 - train/epoch": 0.58,
      "brisk-pond-1 - train/epoch__MIN": 0.58,
      "brisk-pond-1 - train/epoch__MAX": 0.58
    },
    {
      "Step": 207,
      "brisk-pond-1 - train/epoch": 0.58,
      "brisk-pond-1 - train/epoch__MIN": 0.58,
      "brisk-pond-1 - train/epoch__MAX": 0.58
    },
    {
      "Step": 208,
      "brisk-pond-1 - train/epoch": 0.58,
      "brisk-pond-1 - train/epoch__MIN": 0.58,
      "brisk-pond-1 - train/epoch__MAX": 0.58
    },
    {
      "Step": 209,
      "brisk-pond-1 - train/epoch": 0.59,
      "brisk-pond-1 - train/epoch__MIN": 0.59,
      "brisk-pond-1 - train/epoch__MAX": 0.59
    },
    {
      "Step": 210,
      "brisk-pond-1 - train/epoch": 0.59,
      "brisk-pond-1 - train/epoch__MIN": 0.59,
      "brisk-pond-1 - train/epoch__MAX": 0.59
    },
    {
      "Step": 211,
      "brisk-pond-1 - train/epoch": 0.59,
      "brisk-pond-1 - train/epoch__MIN": 0.59,
      "brisk-pond-1 - train/epoch__MAX": 0.59
    },
    {
      "Step": 212,
      "brisk-pond-1 - train/epoch": 0.59,
      "brisk-pond-1 - train/epoch__MIN": 0.59,
      "brisk-pond-1 - train/epoch__MAX": 0.59
    },
    {
      "Step": 213,
      "brisk-pond-1 - train/epoch": 0.6,
      "brisk-pond-1 - train/epoch__MIN": 0.6,
      "brisk-pond-1 - train/epoch__MAX": 0.6
    },
    {
      "Step": 214,
      "brisk-pond-1 - train/epoch": 0.6,
      "brisk-pond-1 - train/epoch__MIN": 0.6,
      "brisk-pond-1 - train/epoch__MAX": 0.6
    },
    {
      "Step": 215,
      "brisk-pond-1 - train/epoch": 0.6,
      "brisk-pond-1 - train/epoch__MIN": 0.6,
      "brisk-pond-1 - train/epoch__MAX": 0.6
    },
    {
      "Step": 216,
      "brisk-pond-1 - train/epoch": 0.61,
      "brisk-pond-1 - train/epoch__MIN": 0.61,
      "brisk-pond-1 - train/epoch__MAX": 0.61
    },
    {
      "Step": 217,
      "brisk-pond-1 - train/epoch": 0.61,
      "brisk-pond-1 - train/epoch__MIN": 0.61,
      "brisk-pond-1 - train/epoch__MAX": 0.61
    },
    {
      "Step": 218,
      "brisk-pond-1 - train/epoch": 0.61,
      "brisk-pond-1 - train/epoch__MIN": 0.61,
      "brisk-pond-1 - train/epoch__MAX": 0.61
    },
    {
      "Step": 219,
      "brisk-pond-1 - train/epoch": 0.61,
      "brisk-pond-1 - train/epoch__MIN": 0.61,
      "brisk-pond-1 - train/epoch__MAX": 0.61
    },
    {
      "Step": 220,
      "brisk-pond-1 - train/epoch": 0.62,
      "brisk-pond-1 - train/epoch__MIN": 0.62,
      "brisk-pond-1 - train/epoch__MAX": 0.62
    },
    {
      "Step": 221,
      "brisk-pond-1 - train/epoch": 0.62,
      "brisk-pond-1 - train/epoch__MIN": 0.62,
      "brisk-pond-1 - train/epoch__MAX": 0.62
    },
    {
      "Step": 222,
      "brisk-pond-1 - train/epoch": 0.62,
      "brisk-pond-1 - train/epoch__MIN": 0.62,
      "brisk-pond-1 - train/epoch__MAX": 0.62
    },
    {
      "Step": 223,
      "brisk-pond-1 - train/epoch": 0.62,
      "brisk-pond-1 - train/epoch__MIN": 0.62,
      "brisk-pond-1 - train/epoch__MAX": 0.62
    },
    {
      "Step": 224,
      "brisk-pond-1 - train/epoch": 0.63,
      "brisk-pond-1 - train/epoch__MIN": 0.63,
      "brisk-pond-1 - train/epoch__MAX": 0.63
    },
    {
      "Step": 225,
      "brisk-pond-1 - train/epoch": 0.63,
      "brisk-pond-1 - train/epoch__MIN": 0.63,
      "brisk-pond-1 - train/epoch__MAX": 0.63
    },
    {
      "Step": 226,
      "brisk-pond-1 - train/epoch": 0.63,
      "brisk-pond-1 - train/epoch__MIN": 0.63,
      "brisk-pond-1 - train/epoch__MAX": 0.63
    },
    {
      "Step": 227,
      "brisk-pond-1 - train/epoch": 0.64,
      "brisk-pond-1 - train/epoch__MIN": 0.64,
      "brisk-pond-1 - train/epoch__MAX": 0.64
    },
    {
      "Step": 228,
      "brisk-pond-1 - train/epoch": 0.64,
      "brisk-pond-1 - train/epoch__MIN": 0.64,
      "brisk-pond-1 - train/epoch__MAX": 0.64
    },
    {
      "Step": 229,
      "brisk-pond-1 - train/epoch": 0.64,
      "brisk-pond-1 - train/epoch__MIN": 0.64,
      "brisk-pond-1 - train/epoch__MAX": 0.64
    },
    {
      "Step": 230,
      "brisk-pond-1 - train/epoch": 0.64,
      "brisk-pond-1 - train/epoch__MIN": 0.64,
      "brisk-pond-1 - train/epoch__MAX": 0.64
    },
    {
      "Step": 231,
      "brisk-pond-1 - train/epoch": 0.65,
      "brisk-pond-1 - train/epoch__MIN": 0.65,
      "brisk-pond-1 - train/epoch__MAX": 0.65
    },
    {
      "Step": 232,
      "brisk-pond-1 - train/epoch": 0.65,
      "brisk-pond-1 - train/epoch__MIN": 0.65,
      "brisk-pond-1 - train/epoch__MAX": 0.65
    },
    {
      "Step": 233,
      "brisk-pond-1 - train/epoch": 0.65,
      "brisk-pond-1 - train/epoch__MIN": 0.65,
      "brisk-pond-1 - train/epoch__MAX": 0.65
    },
    {
      "Step": 234,
      "brisk-pond-1 - train/epoch": 0.66,
      "brisk-pond-1 - train/epoch__MIN": 0.66,
      "brisk-pond-1 - train/epoch__MAX": 0.66
    },
    {
      "Step": 235,
      "brisk-pond-1 - train/epoch": 0.66,
      "brisk-pond-1 - train/epoch__MIN": 0.66,
      "brisk-pond-1 - train/epoch__MAX": 0.66
    },
    {
      "Step": 236,
      "brisk-pond-1 - train/epoch": 0.66,
      "brisk-pond-1 - train/epoch__MIN": 0.66,
      "brisk-pond-1 - train/epoch__MAX": 0.66
    },
    {
      "Step": 237,
      "brisk-pond-1 - train/epoch": 0.66,
      "brisk-pond-1 - train/epoch__MIN": 0.66,
      "brisk-pond-1 - train/epoch__MAX": 0.66
    },
    {
      "Step": 238,
      "brisk-pond-1 - train/epoch": 0.67,
      "brisk-pond-1 - train/epoch__MIN": 0.67,
      "brisk-pond-1 - train/epoch__MAX": 0.67
    },
    {
      "Step": 239,
      "brisk-pond-1 - train/epoch": 0.67,
      "brisk-pond-1 - train/epoch__MIN": 0.67,
      "brisk-pond-1 - train/epoch__MAX": 0.67
    },
    {
      "Step": 240,
      "brisk-pond-1 - train/epoch": 0.67,
      "brisk-pond-1 - train/epoch__MIN": 0.67,
      "brisk-pond-1 - train/epoch__MAX": 0.67
    },
    {
      "Step": 241,
      "brisk-pond-1 - train/epoch": 0.68,
      "brisk-pond-1 - train/epoch__MIN": 0.68,
      "brisk-pond-1 - train/epoch__MAX": 0.68
    },
    {
      "Step": 242,
      "brisk-pond-1 - train/epoch": 0.68,
      "brisk-pond-1 - train/epoch__MIN": 0.68,
      "brisk-pond-1 - train/epoch__MAX": 0.68
    },
    {
      "Step": 243,
      "brisk-pond-1 - train/epoch": 0.68,
      "brisk-pond-1 - train/epoch__MIN": 0.68,
      "brisk-pond-1 - train/epoch__MAX": 0.68
    },
    {
      "Step": 244,
      "brisk-pond-1 - train/epoch": 0.68,
      "brisk-pond-1 - train/epoch__MIN": 0.68,
      "brisk-pond-1 - train/epoch__MAX": 0.68
    },
    {
      "Step": 245,
      "brisk-pond-1 - train/epoch": 0.69,
      "brisk-pond-1 - train/epoch__MIN": 0.69,
      "brisk-pond-1 - train/epoch__MAX": 0.69
    },
    {
      "Step": 246,
      "brisk-pond-1 - train/epoch": 0.69,
      "brisk-pond-1 - train/epoch__MIN": 0.69,
      "brisk-pond-1 - train/epoch__MAX": 0.69
    },
    {
      "Step": 247,
      "brisk-pond-1 - train/epoch": 0.69,
      "brisk-pond-1 - train/epoch__MIN": 0.69,
      "brisk-pond-1 - train/epoch__MAX": 0.69
    },
    {
      "Step": 248,
      "brisk-pond-1 - train/epoch": 0.7,
      "brisk-pond-1 - train/epoch__MIN": 0.7,
      "brisk-pond-1 - train/epoch__MAX": 0.7
    },
    {
      "Step": 249,
      "brisk-pond-1 - train/epoch": 0.7,
      "brisk-pond-1 - train/epoch__MIN": 0.7,
      "brisk-pond-1 - train/epoch__MAX": 0.7
    },
    {
      "Step": 250,
      "brisk-pond-1 - train/epoch": 0.7,
      "brisk-pond-1 - train/epoch__MIN": 0.7,
      "brisk-pond-1 - train/epoch__MAX": 0.7
    },
    {
      "Step": 251,
      "brisk-pond-1 - train/epoch": 0.7,
      "brisk-pond-1 - train/epoch__MIN": 0.7,
      "brisk-pond-1 - train/epoch__MAX": 0.7
    },
    {
      "Step": 252,
      "brisk-pond-1 - train/epoch": 0.71,
      "brisk-pond-1 - train/epoch__MIN": 0.71,
      "brisk-pond-1 - train/epoch__MAX": 0.71
    },
    {
      "Step": 253,
      "brisk-pond-1 - train/epoch": 0.71,
      "brisk-pond-1 - train/epoch__MIN": 0.71,
      "brisk-pond-1 - train/epoch__MAX": 0.71
    },
    {
      "Step": 254,
      "brisk-pond-1 - train/epoch": 0.71,
      "brisk-pond-1 - train/epoch__MIN": 0.71,
      "brisk-pond-1 - train/epoch__MAX": 0.71
    },
    {
      "Step": 255,
      "brisk-pond-1 - train/epoch": 0.71,
      "brisk-pond-1 - train/epoch__MIN": 0.71,
      "brisk-pond-1 - train/epoch__MAX": 0.71
    },
    {
      "Step": 256,
      "brisk-pond-1 - train/epoch": 0.72,
      "brisk-pond-1 - train/epoch__MIN": 0.72,
      "brisk-pond-1 - train/epoch__MAX": 0.72
    },
    {
      "Step": 257,
      "brisk-pond-1 - train/epoch": 0.72,
      "brisk-pond-1 - train/epoch__MIN": 0.72,
      "brisk-pond-1 - train/epoch__MAX": 0.72
    },
    {
      "Step": 258,
      "brisk-pond-1 - train/epoch": 0.72,
      "brisk-pond-1 - train/epoch__MIN": 0.72,
      "brisk-pond-1 - train/epoch__MAX": 0.72
    },
    {
      "Step": 259,
      "brisk-pond-1 - train/epoch": 0.73,
      "brisk-pond-1 - train/epoch__MIN": 0.73,
      "brisk-pond-1 - train/epoch__MAX": 0.73
    },
    {
      "Step": 260,
      "brisk-pond-1 - train/epoch": 0.73,
      "brisk-pond-1 - train/epoch__MIN": 0.73,
      "brisk-pond-1 - train/epoch__MAX": 0.73
    },
    {
      "Step": 261,
      "brisk-pond-1 - train/epoch": 0.73,
      "brisk-pond-1 - train/epoch__MIN": 0.73,
      "brisk-pond-1 - train/epoch__MAX": 0.73
    },
    {
      "Step": 262,
      "brisk-pond-1 - train/epoch": 0.73,
      "brisk-pond-1 - train/epoch__MIN": 0.73,
      "brisk-pond-1 - train/epoch__MAX": 0.73
    },
    {
      "Step": 263,
      "brisk-pond-1 - train/epoch": 0.74,
      "brisk-pond-1 - train/epoch__MIN": 0.74,
      "brisk-pond-1 - train/epoch__MAX": 0.74
    },
    {
      "Step": 264,
      "brisk-pond-1 - train/epoch": 0.74,
      "brisk-pond-1 - train/epoch__MIN": 0.74,
      "brisk-pond-1 - train/epoch__MAX": 0.74
    },
    {
      "Step": 265,
      "brisk-pond-1 - train/epoch": 0.74,
      "brisk-pond-1 - train/epoch__MIN": 0.74,
      "brisk-pond-1 - train/epoch__MAX": 0.74
    },
    {
      "Step": 266,
      "brisk-pond-1 - train/epoch": 0.75,
      "brisk-pond-1 - train/epoch__MIN": 0.75,
      "brisk-pond-1 - train/epoch__MAX": 0.75
    },
    {
      "Step": 267,
      "brisk-pond-1 - train/epoch": 0.75,
      "brisk-pond-1 - train/epoch__MIN": 0.75,
      "brisk-pond-1 - train/epoch__MAX": 0.75
    },
    {
      "Step": 268,
      "brisk-pond-1 - train/epoch": 0.75,
      "brisk-pond-1 - train/epoch__MIN": 0.75,
      "brisk-pond-1 - train/epoch__MAX": 0.75
    },
    {
      "Step": 269,
      "brisk-pond-1 - train/epoch": 0.75,
      "brisk-pond-1 - train/epoch__MIN": 0.75,
      "brisk-pond-1 - train/epoch__MAX": 0.75
    },
    {
      "Step": 270,
      "brisk-pond-1 - train/epoch": 0.76,
      "brisk-pond-1 - train/epoch__MIN": 0.76,
      "brisk-pond-1 - train/epoch__MAX": 0.76
    },
    {
      "Step": 271,
      "brisk-pond-1 - train/epoch": 0.76,
      "brisk-pond-1 - train/epoch__MIN": 0.76,
      "brisk-pond-1 - train/epoch__MAX": 0.76
    },
    {
      "Step": 272,
      "brisk-pond-1 - train/epoch": 0.76,
      "brisk-pond-1 - train/epoch__MIN": 0.76,
      "brisk-pond-1 - train/epoch__MAX": 0.76
    },
    {
      "Step": 273,
      "brisk-pond-1 - train/epoch": 0.77,
      "brisk-pond-1 - train/epoch__MIN": 0.77,
      "brisk-pond-1 - train/epoch__MAX": 0.77
    },
    {
      "Step": 274,
      "brisk-pond-1 - train/epoch": 0.77,
      "brisk-pond-1 - train/epoch__MIN": 0.77,
      "brisk-pond-1 - train/epoch__MAX": 0.77
    },
    {
      "Step": 275,
      "brisk-pond-1 - train/epoch": 0.77,
      "brisk-pond-1 - train/epoch__MIN": 0.77,
      "brisk-pond-1 - train/epoch__MAX": 0.77
    },
    {
      "Step": 276,
      "brisk-pond-1 - train/epoch": 0.77,
      "brisk-pond-1 - train/epoch__MIN": 0.77,
      "brisk-pond-1 - train/epoch__MAX": 0.77
    },
    {
      "Step": 277,
      "brisk-pond-1 - train/epoch": 0.78,
      "brisk-pond-1 - train/epoch__MIN": 0.78,
      "brisk-pond-1 - train/epoch__MAX": 0.78
    },
    {
      "Step": 278,
      "brisk-pond-1 - train/epoch": 0.78,
      "brisk-pond-1 - train/epoch__MIN": 0.78,
      "brisk-pond-1 - train/epoch__MAX": 0.78
    },
    {
      "Step": 279,
      "brisk-pond-1 - train/epoch": 0.78,
      "brisk-pond-1 - train/epoch__MIN": 0.78,
      "brisk-pond-1 - train/epoch__MAX": 0.78
    },
    {
      "Step": 280,
      "brisk-pond-1 - train/epoch": 0.78,
      "brisk-pond-1 - train/epoch__MIN": 0.78,
      "brisk-pond-1 - train/epoch__MAX": 0.78
    },
    {
      "Step": 281,
      "brisk-pond-1 - train/epoch": 0.79,
      "brisk-pond-1 - train/epoch__MIN": 0.79,
      "brisk-pond-1 - train/epoch__MAX": 0.79
    },
    {
      "Step": 282,
      "brisk-pond-1 - train/epoch": 0.79,
      "brisk-pond-1 - train/epoch__MIN": 0.79,
      "brisk-pond-1 - train/epoch__MAX": 0.79
    },
    {
      "Step": 283,
      "brisk-pond-1 - train/epoch": 0.79,
      "brisk-pond-1 - train/epoch__MIN": 0.79,
      "brisk-pond-1 - train/epoch__MAX": 0.79
    },
    {
      "Step": 284,
      "brisk-pond-1 - train/epoch": 0.8,
      "brisk-pond-1 - train/epoch__MIN": 0.8,
      "brisk-pond-1 - train/epoch__MAX": 0.8
    },
    {
      "Step": 285,
      "brisk-pond-1 - train/epoch": 0.8,
      "brisk-pond-1 - train/epoch__MIN": 0.8,
      "brisk-pond-1 - train/epoch__MAX": 0.8
    },
    {
      "Step": 286,
      "brisk-pond-1 - train/epoch": 0.8,
      "brisk-pond-1 - train/epoch__MIN": 0.8,
      "brisk-pond-1 - train/epoch__MAX": 0.8
    },
    {
      "Step": 287,
      "brisk-pond-1 - train/epoch": 0.8,
      "brisk-pond-1 - train/epoch__MIN": 0.8,
      "brisk-pond-1 - train/epoch__MAX": 0.8
    },
    {
      "Step": 288,
      "brisk-pond-1 - train/epoch": 0.81,
      "brisk-pond-1 - train/epoch__MIN": 0.81,
      "brisk-pond-1 - train/epoch__MAX": 0.81
    },
    {
      "Step": 289,
      "brisk-pond-1 - train/epoch": 0.81,
      "brisk-pond-1 - train/epoch__MIN": 0.81,
      "brisk-pond-1 - train/epoch__MAX": 0.81
    },
    {
      "Step": 290,
      "brisk-pond-1 - train/epoch": 0.81,
      "brisk-pond-1 - train/epoch__MIN": 0.81,
      "brisk-pond-1 - train/epoch__MAX": 0.81
    },
    {
      "Step": 291,
      "brisk-pond-1 - train/epoch": 0.82,
      "brisk-pond-1 - train/epoch__MIN": 0.82,
      "brisk-pond-1 - train/epoch__MAX": 0.82
    },
    {
      "Step": 292,
      "brisk-pond-1 - train/epoch": 0.82,
      "brisk-pond-1 - train/epoch__MIN": 0.82,
      "brisk-pond-1 - train/epoch__MAX": 0.82
    },
    {
      "Step": 293,
      "brisk-pond-1 - train/epoch": 0.82,
      "brisk-pond-1 - train/epoch__MIN": 0.82,
      "brisk-pond-1 - train/epoch__MAX": 0.82
    },
    {
      "Step": 294,
      "brisk-pond-1 - train/epoch": 0.82,
      "brisk-pond-1 - train/epoch__MIN": 0.82,
      "brisk-pond-1 - train/epoch__MAX": 0.82
    },
    {
      "Step": 295,
      "brisk-pond-1 - train/epoch": 0.83,
      "brisk-pond-1 - train/epoch__MIN": 0.83,
      "brisk-pond-1 - train/epoch__MAX": 0.83
    },
    {
      "Step": 296,
      "brisk-pond-1 - train/epoch": 0.83,
      "brisk-pond-1 - train/epoch__MIN": 0.83,
      "brisk-pond-1 - train/epoch__MAX": 0.83
    },
    {
      "Step": 297,
      "brisk-pond-1 - train/epoch": 0.83,
      "brisk-pond-1 - train/epoch__MIN": 0.83,
      "brisk-pond-1 - train/epoch__MAX": 0.83
    },
    {
      "Step": 298,
      "brisk-pond-1 - train/epoch": 0.84,
      "brisk-pond-1 - train/epoch__MIN": 0.84,
      "brisk-pond-1 - train/epoch__MAX": 0.84
    },
    {
      "Step": 299,
      "brisk-pond-1 - train/epoch": 0.84,
      "brisk-pond-1 - train/epoch__MIN": 0.84,
      "brisk-pond-1 - train/epoch__MAX": 0.84
    },
    {
      "Step": 300,
      "brisk-pond-1 - train/epoch": 0.84,
      "brisk-pond-1 - train/epoch__MIN": 0.84,
      "brisk-pond-1 - train/epoch__MAX": 0.84
    },
    {
      "Step": 301,
      "brisk-pond-1 - train/epoch": 0.84,
      "brisk-pond-1 - train/epoch__MIN": 0.84,
      "brisk-pond-1 - train/epoch__MAX": 0.84
    },
    {
      "Step": 302,
      "brisk-pond-1 - train/epoch": 0.85,
      "brisk-pond-1 - train/epoch__MIN": 0.85,
      "brisk-pond-1 - train/epoch__MAX": 0.85
    },
    {
      "Step": 303,
      "brisk-pond-1 - train/epoch": 0.85,
      "brisk-pond-1 - train/epoch__MIN": 0.85,
      "brisk-pond-1 - train/epoch__MAX": 0.85
    },
    {
      "Step": 304,
      "brisk-pond-1 - train/epoch": 0.85,
      "brisk-pond-1 - train/epoch__MIN": 0.85,
      "brisk-pond-1 - train/epoch__MAX": 0.85
    },
    {
      "Step": 305,
      "brisk-pond-1 - train/epoch": 0.85,
      "brisk-pond-1 - train/epoch__MIN": 0.85,
      "brisk-pond-1 - train/epoch__MAX": 0.85
    },
    {
      "Step": 306,
      "brisk-pond-1 - train/epoch": 0.86,
      "brisk-pond-1 - train/epoch__MIN": 0.86,
      "brisk-pond-1 - train/epoch__MAX": 0.86
    },
    {
      "Step": 307,
      "brisk-pond-1 - train/epoch": 0.86,
      "brisk-pond-1 - train/epoch__MIN": 0.86,
      "brisk-pond-1 - train/epoch__MAX": 0.86
    },
    {
      "Step": 308,
      "brisk-pond-1 - train/epoch": 0.86,
      "brisk-pond-1 - train/epoch__MIN": 0.86,
      "brisk-pond-1 - train/epoch__MAX": 0.86
    },
    {
      "Step": 309,
      "brisk-pond-1 - train/epoch": 0.87,
      "brisk-pond-1 - train/epoch__MIN": 0.87,
      "brisk-pond-1 - train/epoch__MAX": 0.87
    },
    {
      "Step": 310,
      "brisk-pond-1 - train/epoch": 0.87,
      "brisk-pond-1 - train/epoch__MIN": 0.87,
      "brisk-pond-1 - train/epoch__MAX": 0.87
    },
    {
      "Step": 311,
      "brisk-pond-1 - train/epoch": 0.87,
      "brisk-pond-1 - train/epoch__MIN": 0.87,
      "brisk-pond-1 - train/epoch__MAX": 0.87
    },
    {
      "Step": 312,
      "brisk-pond-1 - train/epoch": 0.87,
      "brisk-pond-1 - train/epoch__MIN": 0.87,
      "brisk-pond-1 - train/epoch__MAX": 0.87
    },
    {
      "Step": 313,
      "brisk-pond-1 - train/epoch": 0.88,
      "brisk-pond-1 - train/epoch__MIN": 0.88,
      "brisk-pond-1 - train/epoch__MAX": 0.88
    },
    {
      "Step": 314,
      "brisk-pond-1 - train/epoch": 0.88,
      "brisk-pond-1 - train/epoch__MIN": 0.88,
      "brisk-pond-1 - train/epoch__MAX": 0.88
    },
    {
      "Step": 315,
      "brisk-pond-1 - train/epoch": 0.88,
      "brisk-pond-1 - train/epoch__MIN": 0.88,
      "brisk-pond-1 - train/epoch__MAX": 0.88
    },
    {
      "Step": 316,
      "brisk-pond-1 - train/epoch": 0.89,
      "brisk-pond-1 - train/epoch__MIN": 0.89,
      "brisk-pond-1 - train/epoch__MAX": 0.89
    },
    {
      "Step": 317,
      "brisk-pond-1 - train/epoch": 0.89,
      "brisk-pond-1 - train/epoch__MIN": 0.89,
      "brisk-pond-1 - train/epoch__MAX": 0.89
    },
    {
      "Step": 318,
      "brisk-pond-1 - train/epoch": 0.89,
      "brisk-pond-1 - train/epoch__MIN": 0.89,
      "brisk-pond-1 - train/epoch__MAX": 0.89
    },
    {
      "Step": 319,
      "brisk-pond-1 - train/epoch": 0.89,
      "brisk-pond-1 - train/epoch__MIN": 0.89,
      "brisk-pond-1 - train/epoch__MAX": 0.89
    },
    {
      "Step": 320,
      "brisk-pond-1 - train/epoch": 0.9,
      "brisk-pond-1 - train/epoch__MIN": 0.9,
      "brisk-pond-1 - train/epoch__MAX": 0.9
    },
    {
      "Step": 321,
      "brisk-pond-1 - train/epoch": 0.9,
      "brisk-pond-1 - train/epoch__MIN": 0.9,
      "brisk-pond-1 - train/epoch__MAX": 0.9
    },
    {
      "Step": 322,
      "brisk-pond-1 - train/epoch": 0.9,
      "brisk-pond-1 - train/epoch__MIN": 0.9,
      "brisk-pond-1 - train/epoch__MAX": 0.9
    },
    {
      "Step": 323,
      "brisk-pond-1 - train/epoch": 0.91,
      "brisk-pond-1 - train/epoch__MIN": 0.91,
      "brisk-pond-1 - train/epoch__MAX": 0.91
    },
    {
      "Step": 324,
      "brisk-pond-1 - train/epoch": 0.91,
      "brisk-pond-1 - train/epoch__MIN": 0.91,
      "brisk-pond-1 - train/epoch__MAX": 0.91
    },
    {
      "Step": 325,
      "brisk-pond-1 - train/epoch": 0.91,
      "brisk-pond-1 - train/epoch__MIN": 0.91,
      "brisk-pond-1 - train/epoch__MAX": 0.91
    },
    {
      "Step": 326,
      "brisk-pond-1 - train/epoch": 0.91,
      "brisk-pond-1 - train/epoch__MIN": 0.91,
      "brisk-pond-1 - train/epoch__MAX": 0.91
    },
    {
      "Step": 327,
      "brisk-pond-1 - train/epoch": 0.92,
      "brisk-pond-1 - train/epoch__MIN": 0.92,
      "brisk-pond-1 - train/epoch__MAX": 0.92
    },
    {
      "Step": 328,
      "brisk-pond-1 - train/epoch": 0.92,
      "brisk-pond-1 - train/epoch__MIN": 0.92,
      "brisk-pond-1 - train/epoch__MAX": 0.92
    },
    {
      "Step": 329,
      "brisk-pond-1 - train/epoch": 0.92,
      "brisk-pond-1 - train/epoch__MIN": 0.92,
      "brisk-pond-1 - train/epoch__MAX": 0.92
    },
    {
      "Step": 330,
      "brisk-pond-1 - train/epoch": 0.92,
      "brisk-pond-1 - train/epoch__MIN": 0.92,
      "brisk-pond-1 - train/epoch__MAX": 0.92
    },
    {
      "Step": 331,
      "brisk-pond-1 - train/epoch": 0.93,
      "brisk-pond-1 - train/epoch__MIN": 0.93,
      "brisk-pond-1 - train/epoch__MAX": 0.93
    },
    {
      "Step": 332,
      "brisk-pond-1 - train/epoch": 0.93,
      "brisk-pond-1 - train/epoch__MIN": 0.93,
      "brisk-pond-1 - train/epoch__MAX": 0.93
    },
    {
      "Step": 333,
      "brisk-pond-1 - train/epoch": 0.93,
      "brisk-pond-1 - train/epoch__MIN": 0.93,
      "brisk-pond-1 - train/epoch__MAX": 0.93
    },
    {
      "Step": 334,
      "brisk-pond-1 - train/epoch": 0.94,
      "brisk-pond-1 - train/epoch__MIN": 0.94,
      "brisk-pond-1 - train/epoch__MAX": 0.94
    },
    {
      "Step": 335,
      "brisk-pond-1 - train/epoch": 0.94,
      "brisk-pond-1 - train/epoch__MIN": 0.94,
      "brisk-pond-1 - train/epoch__MAX": 0.94
    },
    {
      "Step": 336,
      "brisk-pond-1 - train/epoch": 0.94,
      "brisk-pond-1 - train/epoch__MIN": 0.94,
      "brisk-pond-1 - train/epoch__MAX": 0.94
    },
    {
      "Step": 337,
      "brisk-pond-1 - train/epoch": 0.94,
      "brisk-pond-1 - train/epoch__MIN": 0.94,
      "brisk-pond-1 - train/epoch__MAX": 0.94
    },
    {
      "Step": 338,
      "brisk-pond-1 - train/epoch": 0.95,
      "brisk-pond-1 - train/epoch__MIN": 0.95,
      "brisk-pond-1 - train/epoch__MAX": 0.95
    },
    {
      "Step": 339,
      "brisk-pond-1 - train/epoch": 0.95,
      "brisk-pond-1 - train/epoch__MIN": 0.95,
      "brisk-pond-1 - train/epoch__MAX": 0.95
    },
    {
      "Step": 340,
      "brisk-pond-1 - train/epoch": 0.95,
      "brisk-pond-1 - train/epoch__MIN": 0.95,
      "brisk-pond-1 - train/epoch__MAX": 0.95
    },
    {
      "Step": 341,
      "brisk-pond-1 - train/epoch": 0.96,
      "brisk-pond-1 - train/epoch__MIN": 0.96,
      "brisk-pond-1 - train/epoch__MAX": 0.96
    },
    {
      "Step": 342,
      "brisk-pond-1 - train/epoch": 0.96,
      "brisk-pond-1 - train/epoch__MIN": 0.96,
      "brisk-pond-1 - train/epoch__MAX": 0.96
    },
    {
      "Step": 343,
      "brisk-pond-1 - train/epoch": 0.96,
      "brisk-pond-1 - train/epoch__MIN": 0.96,
      "brisk-pond-1 - train/epoch__MAX": 0.96
    },
    {
      "Step": 344,
      "brisk-pond-1 - train/epoch": 0.96,
      "brisk-pond-1 - train/epoch__MIN": 0.96,
      "brisk-pond-1 - train/epoch__MAX": 0.96
    },
    {
      "Step": 345,
      "brisk-pond-1 - train/epoch": 0.97,
      "brisk-pond-1 - train/epoch__MIN": 0.97,
      "brisk-pond-1 - train/epoch__MAX": 0.97
    },
    {
      "Step": 346,
      "brisk-pond-1 - train/epoch": 0.97,
      "brisk-pond-1 - train/epoch__MIN": 0.97,
      "brisk-pond-1 - train/epoch__MAX": 0.97
    },
    {
      "Step": 347,
      "brisk-pond-1 - train/epoch": 0.97,
      "brisk-pond-1 - train/epoch__MIN": 0.97,
      "brisk-pond-1 - train/epoch__MAX": 0.97
    },
    {
      "Step": 348,
      "brisk-pond-1 - train/epoch": 0.98,
      "brisk-pond-1 - train/epoch__MIN": 0.98,
      "brisk-pond-1 - train/epoch__MAX": 0.98
    },
    {
      "Step": 349,
      "brisk-pond-1 - train/epoch": 0.98,
      "brisk-pond-1 - train/epoch__MIN": 0.98,
      "brisk-pond-1 - train/epoch__MAX": 0.98
    },
    {
      "Step": 350,
      "brisk-pond-1 - train/epoch": 0.98,
      "brisk-pond-1 - train/epoch__MIN": 0.98,
      "brisk-pond-1 - train/epoch__MAX": 0.98
    },
    {
      "Step": 351,
      "brisk-pond-1 - train/epoch": 0.98,
      "brisk-pond-1 - train/epoch__MIN": 0.98,
      "brisk-pond-1 - train/epoch__MAX": 0.98
    },
    {
      "Step": 352,
      "brisk-pond-1 - train/epoch": 0.99,
      "brisk-pond-1 - train/epoch__MIN": 0.99,
      "brisk-pond-1 - train/epoch__MAX": 0.99
    },
    {
      "Step": 353,
      "brisk-pond-1 - train/epoch": 0.99,
      "brisk-pond-1 - train/epoch__MIN": 0.99,
      "brisk-pond-1 - train/epoch__MAX": 0.99
    },
    {
      "Step": 354,
      "brisk-pond-1 - train/epoch": 0.99,
      "brisk-pond-1 - train/epoch__MIN": 0.99,
      "brisk-pond-1 - train/epoch__MAX": 0.99
    },
    {
      "Step": 355,
      "brisk-pond-1 - train/epoch": 0.99,
      "brisk-pond-1 - train/epoch__MIN": 0.99,
      "brisk-pond-1 - train/epoch__MAX": 0.99
    },
    {
      "Step": 356,
      "brisk-pond-1 - train/epoch": 1,
      "brisk-pond-1 - train/epoch__MIN": 1,
      "brisk-pond-1 - train/epoch__MAX": 1
    },
    {
      "Step": 357,
      "brisk-pond-1 - train/epoch": 1,
      "brisk-pond-1 - train/epoch__MIN": 1,
      "brisk-pond-1 - train/epoch__MAX": 1
    },
    {
      "Step": 358,
      "brisk-pond-1 - train/epoch": 1,
      "brisk-pond-1 - train/epoch__MIN": 1,
      "brisk-pond-1 - train/epoch__MAX": 1
    },
    {
      "Step": 359,
      "brisk-pond-1 - train/epoch": 1.01,
      "brisk-pond-1 - train/epoch__MIN": 1.01,
      "brisk-pond-1 - train/epoch__MAX": 1.01
    },
    {
      "Step": 360,
      "brisk-pond-1 - train/epoch": 1.01,
      "brisk-pond-1 - train/epoch__MIN": 1.01,
      "brisk-pond-1 - train/epoch__MAX": 1.01
    },
    {
      "Step": 361,
      "brisk-pond-1 - train/epoch": 1.01,
      "brisk-pond-1 - train/epoch__MIN": 1.01,
      "brisk-pond-1 - train/epoch__MAX": 1.01
    },
    {
      "Step": 362,
      "brisk-pond-1 - train/epoch": 1.01,
      "brisk-pond-1 - train/epoch__MIN": 1.01,
      "brisk-pond-1 - train/epoch__MAX": 1.01
    },
    {
      "Step": 363,
      "brisk-pond-1 - train/epoch": 1.02,
      "brisk-pond-1 - train/epoch__MIN": 1.02,
      "brisk-pond-1 - train/epoch__MAX": 1.02
    },
    {
      "Step": 364,
      "brisk-pond-1 - train/epoch": 1.02,
      "brisk-pond-1 - train/epoch__MIN": 1.02,
      "brisk-pond-1 - train/epoch__MAX": 1.02
    },
    {
      "Step": 365,
      "brisk-pond-1 - train/epoch": 1.02,
      "brisk-pond-1 - train/epoch__MIN": 1.02,
      "brisk-pond-1 - train/epoch__MAX": 1.02
    },
    {
      "Step": 366,
      "brisk-pond-1 - train/epoch": 1.03,
      "brisk-pond-1 - train/epoch__MIN": 1.03,
      "brisk-pond-1 - train/epoch__MAX": 1.03
    },
    {
      "Step": 367,
      "brisk-pond-1 - train/epoch": 1.03,
      "brisk-pond-1 - train/epoch__MIN": 1.03,
      "brisk-pond-1 - train/epoch__MAX": 1.03
    },
    {
      "Step": 368,
      "brisk-pond-1 - train/epoch": 1.03,
      "brisk-pond-1 - train/epoch__MIN": 1.03,
      "brisk-pond-1 - train/epoch__MAX": 1.03
    },
    {
      "Step": 369,
      "brisk-pond-1 - train/epoch": 1.03,
      "brisk-pond-1 - train/epoch__MIN": 1.03,
      "brisk-pond-1 - train/epoch__MAX": 1.03
    },
    {
      "Step": 370,
      "brisk-pond-1 - train/epoch": 1.04,
      "brisk-pond-1 - train/epoch__MIN": 1.04,
      "brisk-pond-1 - train/epoch__MAX": 1.04
    },
    {
      "Step": 371,
      "brisk-pond-1 - train/epoch": 1.04,
      "brisk-pond-1 - train/epoch__MIN": 1.04,
      "brisk-pond-1 - train/epoch__MAX": 1.04
    },
    {
      "Step": 372,
      "brisk-pond-1 - train/epoch": 1.04,
      "brisk-pond-1 - train/epoch__MIN": 1.04,
      "brisk-pond-1 - train/epoch__MAX": 1.04
    },
    {
      "Step": 373,
      "brisk-pond-1 - train/epoch": 1.05,
      "brisk-pond-1 - train/epoch__MIN": 1.05,
      "brisk-pond-1 - train/epoch__MAX": 1.05
    },
    {
      "Step": 374,
      "brisk-pond-1 - train/epoch": 1.05,
      "brisk-pond-1 - train/epoch__MIN": 1.05,
      "brisk-pond-1 - train/epoch__MAX": 1.05
    },
    {
      "Step": 375,
      "brisk-pond-1 - train/epoch": 1.05,
      "brisk-pond-1 - train/epoch__MIN": 1.05,
      "brisk-pond-1 - train/epoch__MAX": 1.05
    },
    {
      "Step": 376,
      "brisk-pond-1 - train/epoch": 1.05,
      "brisk-pond-1 - train/epoch__MIN": 1.05,
      "brisk-pond-1 - train/epoch__MAX": 1.05
    },
    {
      "Step": 377,
      "brisk-pond-1 - train/epoch": 1.06,
      "brisk-pond-1 - train/epoch__MIN": 1.06,
      "brisk-pond-1 - train/epoch__MAX": 1.06
    },
    {
      "Step": 378,
      "brisk-pond-1 - train/epoch": 1.06,
      "brisk-pond-1 - train/epoch__MIN": 1.06,
      "brisk-pond-1 - train/epoch__MAX": 1.06
    },
    {
      "Step": 379,
      "brisk-pond-1 - train/epoch": 1.06,
      "brisk-pond-1 - train/epoch__MIN": 1.06,
      "brisk-pond-1 - train/epoch__MAX": 1.06
    },
    {
      "Step": 380,
      "brisk-pond-1 - train/epoch": 1.07,
      "brisk-pond-1 - train/epoch__MIN": 1.07,
      "brisk-pond-1 - train/epoch__MAX": 1.07
    },
    {
      "Step": 381,
      "brisk-pond-1 - train/epoch": 1.07,
      "brisk-pond-1 - train/epoch__MIN": 1.07,
      "brisk-pond-1 - train/epoch__MAX": 1.07
    },
    {
      "Step": 382,
      "brisk-pond-1 - train/epoch": 1.07,
      "brisk-pond-1 - train/epoch__MIN": 1.07,
      "brisk-pond-1 - train/epoch__MAX": 1.07
    },
    {
      "Step": 383,
      "brisk-pond-1 - train/epoch": 1.07,
      "brisk-pond-1 - train/epoch__MIN": 1.07,
      "brisk-pond-1 - train/epoch__MAX": 1.07
    },
    {
      "Step": 384,
      "brisk-pond-1 - train/epoch": 1.08,
      "brisk-pond-1 - train/epoch__MIN": 1.08,
      "brisk-pond-1 - train/epoch__MAX": 1.08
    },
    {
      "Step": 385,
      "brisk-pond-1 - train/epoch": 1.08,
      "brisk-pond-1 - train/epoch__MIN": 1.08,
      "brisk-pond-1 - train/epoch__MAX": 1.08
    },
    {
      "Step": 386,
      "brisk-pond-1 - train/epoch": 1.08,
      "brisk-pond-1 - train/epoch__MIN": 1.08,
      "brisk-pond-1 - train/epoch__MAX": 1.08
    },
    {
      "Step": 387,
      "brisk-pond-1 - train/epoch": 1.08,
      "brisk-pond-1 - train/epoch__MIN": 1.08,
      "brisk-pond-1 - train/epoch__MAX": 1.08
    },
    {
      "Step": 388,
      "brisk-pond-1 - train/epoch": 1.09,
      "brisk-pond-1 - train/epoch__MIN": 1.09,
      "brisk-pond-1 - train/epoch__MAX": 1.09
    },
    {
      "Step": 389,
      "brisk-pond-1 - train/epoch": 1.09,
      "brisk-pond-1 - train/epoch__MIN": 1.09,
      "brisk-pond-1 - train/epoch__MAX": 1.09
    },
    {
      "Step": 390,
      "brisk-pond-1 - train/epoch": 1.09,
      "brisk-pond-1 - train/epoch__MIN": 1.09,
      "brisk-pond-1 - train/epoch__MAX": 1.09
    },
    {
      "Step": 391,
      "brisk-pond-1 - train/epoch": 1.1,
      "brisk-pond-1 - train/epoch__MIN": 1.1,
      "brisk-pond-1 - train/epoch__MAX": 1.1
    },
    {
      "Step": 392,
      "brisk-pond-1 - train/epoch": 1.1,
      "brisk-pond-1 - train/epoch__MIN": 1.1,
      "brisk-pond-1 - train/epoch__MAX": 1.1
    },
    {
      "Step": 393,
      "brisk-pond-1 - train/epoch": 1.1,
      "brisk-pond-1 - train/epoch__MIN": 1.1,
      "brisk-pond-1 - train/epoch__MAX": 1.1
    },
    {
      "Step": 394,
      "brisk-pond-1 - train/epoch": 1.1,
      "brisk-pond-1 - train/epoch__MIN": 1.1,
      "brisk-pond-1 - train/epoch__MAX": 1.1
    },
    {
      "Step": 395,
      "brisk-pond-1 - train/epoch": 1.11,
      "brisk-pond-1 - train/epoch__MIN": 1.11,
      "brisk-pond-1 - train/epoch__MAX": 1.11
    },
    {
      "Step": 396,
      "brisk-pond-1 - train/epoch": 1.11,
      "brisk-pond-1 - train/epoch__MIN": 1.11,
      "brisk-pond-1 - train/epoch__MAX": 1.11
    },
    {
      "Step": 397,
      "brisk-pond-1 - train/epoch": 1.11,
      "brisk-pond-1 - train/epoch__MIN": 1.11,
      "brisk-pond-1 - train/epoch__MAX": 1.11
    },
    {
      "Step": 398,
      "brisk-pond-1 - train/epoch": 1.12,
      "brisk-pond-1 - train/epoch__MIN": 1.12,
      "brisk-pond-1 - train/epoch__MAX": 1.12
    },
    {
      "Step": 399,
      "brisk-pond-1 - train/epoch": 1.12,
      "brisk-pond-1 - train/epoch__MIN": 1.12,
      "brisk-pond-1 - train/epoch__MAX": 1.12
    },
    {
      "Step": 400,
      "brisk-pond-1 - train/epoch": 1.12,
      "brisk-pond-1 - train/epoch__MIN": 1.12,
      "brisk-pond-1 - train/epoch__MAX": 1.12
    },
    {
      "Step": 401,
      "brisk-pond-1 - train/epoch": 1.12,
      "brisk-pond-1 - train/epoch__MIN": 1.12,
      "brisk-pond-1 - train/epoch__MAX": 1.12
    },
    {
      "Step": 402,
      "brisk-pond-1 - train/epoch": 1.12,
      "brisk-pond-1 - train/epoch__MIN": 1.12,
      "brisk-pond-1 - train/epoch__MAX": 1.12
    },
    {
      "Step": 403,
      "brisk-pond-1 - train/epoch": 1.13,
      "brisk-pond-1 - train/epoch__MIN": 1.13,
      "brisk-pond-1 - train/epoch__MAX": 1.13
    },
    {
      "Step": 404,
      "brisk-pond-1 - train/epoch": 1.13,
      "brisk-pond-1 - train/epoch__MIN": 1.13,
      "brisk-pond-1 - train/epoch__MAX": 1.13
    },
    {
      "Step": 405,
      "brisk-pond-1 - train/epoch": 1.13,
      "brisk-pond-1 - train/epoch__MIN": 1.13,
      "brisk-pond-1 - train/epoch__MAX": 1.13
    },
    {
      "Step": 406,
      "brisk-pond-1 - train/epoch": 1.14,
      "brisk-pond-1 - train/epoch__MIN": 1.14,
      "brisk-pond-1 - train/epoch__MAX": 1.14
    },
    {
      "Step": 407,
      "brisk-pond-1 - train/epoch": 1.14,
      "brisk-pond-1 - train/epoch__MIN": 1.14,
      "brisk-pond-1 - train/epoch__MAX": 1.14
    },
    {
      "Step": 408,
      "brisk-pond-1 - train/epoch": 1.14,
      "brisk-pond-1 - train/epoch__MIN": 1.14,
      "brisk-pond-1 - train/epoch__MAX": 1.14
    },
    {
      "Step": 409,
      "brisk-pond-1 - train/epoch": 1.14,
      "brisk-pond-1 - train/epoch__MIN": 1.14,
      "brisk-pond-1 - train/epoch__MAX": 1.14
    },
    {
      "Step": 410,
      "brisk-pond-1 - train/epoch": 1.15,
      "brisk-pond-1 - train/epoch__MIN": 1.15,
      "brisk-pond-1 - train/epoch__MAX": 1.15
    },
    {
      "Step": 411,
      "brisk-pond-1 - train/epoch": 1.15,
      "brisk-pond-1 - train/epoch__MIN": 1.15,
      "brisk-pond-1 - train/epoch__MAX": 1.15
    },
    {
      "Step": 412,
      "brisk-pond-1 - train/epoch": 1.15,
      "brisk-pond-1 - train/epoch__MIN": 1.15,
      "brisk-pond-1 - train/epoch__MAX": 1.15
    },
    {
      "Step": 413,
      "brisk-pond-1 - train/epoch": 1.15,
      "brisk-pond-1 - train/epoch__MIN": 1.15,
      "brisk-pond-1 - train/epoch__MAX": 1.15
    },
    {
      "Step": 414,
      "brisk-pond-1 - train/epoch": 1.16,
      "brisk-pond-1 - train/epoch__MIN": 1.16,
      "brisk-pond-1 - train/epoch__MAX": 1.16
    },
    {
      "Step": 415,
      "brisk-pond-1 - train/epoch": 1.16,
      "brisk-pond-1 - train/epoch__MIN": 1.16,
      "brisk-pond-1 - train/epoch__MAX": 1.16
    },
    {
      "Step": 416,
      "brisk-pond-1 - train/epoch": 1.16,
      "brisk-pond-1 - train/epoch__MIN": 1.16,
      "brisk-pond-1 - train/epoch__MAX": 1.16
    },
    {
      "Step": 417,
      "brisk-pond-1 - train/epoch": 1.17,
      "brisk-pond-1 - train/epoch__MIN": 1.17,
      "brisk-pond-1 - train/epoch__MAX": 1.17
    },
    {
      "Step": 418,
      "brisk-pond-1 - train/epoch": 1.17,
      "brisk-pond-1 - train/epoch__MIN": 1.17,
      "brisk-pond-1 - train/epoch__MAX": 1.17
    },
    {
      "Step": 419,
      "brisk-pond-1 - train/epoch": 1.17,
      "brisk-pond-1 - train/epoch__MIN": 1.17,
      "brisk-pond-1 - train/epoch__MAX": 1.17
    },
    {
      "Step": 420,
      "brisk-pond-1 - train/epoch": 1.17,
      "brisk-pond-1 - train/epoch__MIN": 1.17,
      "brisk-pond-1 - train/epoch__MAX": 1.17
    },
    {
      "Step": 421,
      "brisk-pond-1 - train/epoch": 1.18,
      "brisk-pond-1 - train/epoch__MIN": 1.18,
      "brisk-pond-1 - train/epoch__MAX": 1.18
    },
    {
      "Step": 422,
      "brisk-pond-1 - train/epoch": 1.18,
      "brisk-pond-1 - train/epoch__MIN": 1.18,
      "brisk-pond-1 - train/epoch__MAX": 1.18
    },
    {
      "Step": 423,
      "brisk-pond-1 - train/epoch": 1.18,
      "brisk-pond-1 - train/epoch__MIN": 1.18,
      "brisk-pond-1 - train/epoch__MAX": 1.18
    },
    {
      "Step": 424,
      "brisk-pond-1 - train/epoch": 1.19,
      "brisk-pond-1 - train/epoch__MIN": 1.19,
      "brisk-pond-1 - train/epoch__MAX": 1.19
    },
    {
      "Step": 425,
      "brisk-pond-1 - train/epoch": 1.19,
      "brisk-pond-1 - train/epoch__MIN": 1.19,
      "brisk-pond-1 - train/epoch__MAX": 1.19
    },
    {
      "Step": 426,
      "brisk-pond-1 - train/epoch": 1.19,
      "brisk-pond-1 - train/epoch__MIN": 1.19,
      "brisk-pond-1 - train/epoch__MAX": 1.19
    },
    {
      "Step": 427,
      "brisk-pond-1 - train/epoch": 1.19,
      "brisk-pond-1 - train/epoch__MIN": 1.19,
      "brisk-pond-1 - train/epoch__MAX": 1.19
    },
    {
      "Step": 428,
      "brisk-pond-1 - train/epoch": 1.2,
      "brisk-pond-1 - train/epoch__MIN": 1.2,
      "brisk-pond-1 - train/epoch__MAX": 1.2
    },
    {
      "Step": 429,
      "brisk-pond-1 - train/epoch": 1.2,
      "brisk-pond-1 - train/epoch__MIN": 1.2,
      "brisk-pond-1 - train/epoch__MAX": 1.2
    },
    {
      "Step": 430,
      "brisk-pond-1 - train/epoch": 1.2,
      "brisk-pond-1 - train/epoch__MIN": 1.2,
      "brisk-pond-1 - train/epoch__MAX": 1.2
    },
    {
      "Step": 431,
      "brisk-pond-1 - train/epoch": 1.21,
      "brisk-pond-1 - train/epoch__MIN": 1.21,
      "brisk-pond-1 - train/epoch__MAX": 1.21
    },
    {
      "Step": 432,
      "brisk-pond-1 - train/epoch": 1.21,
      "brisk-pond-1 - train/epoch__MIN": 1.21,
      "brisk-pond-1 - train/epoch__MAX": 1.21
    },
    {
      "Step": 433,
      "brisk-pond-1 - train/epoch": 1.21,
      "brisk-pond-1 - train/epoch__MIN": 1.21,
      "brisk-pond-1 - train/epoch__MAX": 1.21
    },
    {
      "Step": 434,
      "brisk-pond-1 - train/epoch": 1.21,
      "brisk-pond-1 - train/epoch__MIN": 1.21,
      "brisk-pond-1 - train/epoch__MAX": 1.21
    },
    {
      "Step": 435,
      "brisk-pond-1 - train/epoch": 1.22,
      "brisk-pond-1 - train/epoch__MIN": 1.22,
      "brisk-pond-1 - train/epoch__MAX": 1.22
    },
    {
      "Step": 436,
      "brisk-pond-1 - train/epoch": 1.22,
      "brisk-pond-1 - train/epoch__MIN": 1.22,
      "brisk-pond-1 - train/epoch__MAX": 1.22
    },
    {
      "Step": 437,
      "brisk-pond-1 - train/epoch": 1.22,
      "brisk-pond-1 - train/epoch__MIN": 1.22,
      "brisk-pond-1 - train/epoch__MAX": 1.22
    },
    {
      "Step": 438,
      "brisk-pond-1 - train/epoch": 1.22,
      "brisk-pond-1 - train/epoch__MIN": 1.22,
      "brisk-pond-1 - train/epoch__MAX": 1.22
    },
    {
      "Step": 439,
      "brisk-pond-1 - train/epoch": 1.23,
      "brisk-pond-1 - train/epoch__MIN": 1.23,
      "brisk-pond-1 - train/epoch__MAX": 1.23
    },
    {
      "Step": 440,
      "brisk-pond-1 - train/epoch": 1.23,
      "brisk-pond-1 - train/epoch__MIN": 1.23,
      "brisk-pond-1 - train/epoch__MAX": 1.23
    },
    {
      "Step": 441,
      "brisk-pond-1 - train/epoch": 1.23,
      "brisk-pond-1 - train/epoch__MIN": 1.23,
      "brisk-pond-1 - train/epoch__MAX": 1.23
    },
    {
      "Step": 442,
      "brisk-pond-1 - train/epoch": 1.24,
      "brisk-pond-1 - train/epoch__MIN": 1.24,
      "brisk-pond-1 - train/epoch__MAX": 1.24
    },
    {
      "Step": 443,
      "brisk-pond-1 - train/epoch": 1.24,
      "brisk-pond-1 - train/epoch__MIN": 1.24,
      "brisk-pond-1 - train/epoch__MAX": 1.24
    },
    {
      "Step": 444,
      "brisk-pond-1 - train/epoch": 1.24,
      "brisk-pond-1 - train/epoch__MIN": 1.24,
      "brisk-pond-1 - train/epoch__MAX": 1.24
    },
    {
      "Step": 445,
      "brisk-pond-1 - train/epoch": 1.24,
      "brisk-pond-1 - train/epoch__MIN": 1.24,
      "brisk-pond-1 - train/epoch__MAX": 1.24
    },
    {
      "Step": 446,
      "brisk-pond-1 - train/epoch": 1.25,
      "brisk-pond-1 - train/epoch__MIN": 1.25,
      "brisk-pond-1 - train/epoch__MAX": 1.25
    },
    {
      "Step": 447,
      "brisk-pond-1 - train/epoch": 1.25,
      "brisk-pond-1 - train/epoch__MIN": 1.25,
      "brisk-pond-1 - train/epoch__MAX": 1.25
    },
    {
      "Step": 448,
      "brisk-pond-1 - train/epoch": 1.25,
      "brisk-pond-1 - train/epoch__MIN": 1.25,
      "brisk-pond-1 - train/epoch__MAX": 1.25
    },
    {
      "Step": 449,
      "brisk-pond-1 - train/epoch": 1.26,
      "brisk-pond-1 - train/epoch__MIN": 1.26,
      "brisk-pond-1 - train/epoch__MAX": 1.26
    },
    {
      "Step": 450,
      "brisk-pond-1 - train/epoch": 1.26,
      "brisk-pond-1 - train/epoch__MIN": 1.26,
      "brisk-pond-1 - train/epoch__MAX": 1.26
    },
    {
      "Step": 451,
      "brisk-pond-1 - train/epoch": 1.26,
      "brisk-pond-1 - train/epoch__MIN": 1.26,
      "brisk-pond-1 - train/epoch__MAX": 1.26
    },
    {
      "Step": 452,
      "brisk-pond-1 - train/epoch": 1.26,
      "brisk-pond-1 - train/epoch__MIN": 1.26,
      "brisk-pond-1 - train/epoch__MAX": 1.26
    },
    {
      "Step": 453,
      "brisk-pond-1 - train/epoch": 1.27,
      "brisk-pond-1 - train/epoch__MIN": 1.27,
      "brisk-pond-1 - train/epoch__MAX": 1.27
    },
    {
      "Step": 454,
      "brisk-pond-1 - train/epoch": 1.27,
      "brisk-pond-1 - train/epoch__MIN": 1.27,
      "brisk-pond-1 - train/epoch__MAX": 1.27
    },
    {
      "Step": 455,
      "brisk-pond-1 - train/epoch": 1.27,
      "brisk-pond-1 - train/epoch__MIN": 1.27,
      "brisk-pond-1 - train/epoch__MAX": 1.27
    },
    {
      "Step": 456,
      "brisk-pond-1 - train/epoch": 1.28,
      "brisk-pond-1 - train/epoch__MIN": 1.28,
      "brisk-pond-1 - train/epoch__MAX": 1.28
    },
    {
      "Step": 457,
      "brisk-pond-1 - train/epoch": 1.28,
      "brisk-pond-1 - train/epoch__MIN": 1.28,
      "brisk-pond-1 - train/epoch__MAX": 1.28
    },
    {
      "Step": 458,
      "brisk-pond-1 - train/epoch": 1.28,
      "brisk-pond-1 - train/epoch__MIN": 1.28,
      "brisk-pond-1 - train/epoch__MAX": 1.28
    },
    {
      "Step": 459,
      "brisk-pond-1 - train/epoch": 1.28,
      "brisk-pond-1 - train/epoch__MIN": 1.28,
      "brisk-pond-1 - train/epoch__MAX": 1.28
    },
    {
      "Step": 460,
      "brisk-pond-1 - train/epoch": 1.29,
      "brisk-pond-1 - train/epoch__MIN": 1.29,
      "brisk-pond-1 - train/epoch__MAX": 1.29
    },
    {
      "Step": 461,
      "brisk-pond-1 - train/epoch": 1.29,
      "brisk-pond-1 - train/epoch__MIN": 1.29,
      "brisk-pond-1 - train/epoch__MAX": 1.29
    },
    {
      "Step": 462,
      "brisk-pond-1 - train/epoch": 1.29,
      "brisk-pond-1 - train/epoch__MIN": 1.29,
      "brisk-pond-1 - train/epoch__MAX": 1.29
    },
    {
      "Step": 463,
      "brisk-pond-1 - train/epoch": 1.29,
      "brisk-pond-1 - train/epoch__MIN": 1.29,
      "brisk-pond-1 - train/epoch__MAX": 1.29
    },
    {
      "Step": 464,
      "brisk-pond-1 - train/epoch": 1.3,
      "brisk-pond-1 - train/epoch__MIN": 1.3,
      "brisk-pond-1 - train/epoch__MAX": 1.3
    },
    {
      "Step": 465,
      "brisk-pond-1 - train/epoch": 1.3,
      "brisk-pond-1 - train/epoch__MIN": 1.3,
      "brisk-pond-1 - train/epoch__MAX": 1.3
    },
    {
      "Step": 466,
      "brisk-pond-1 - train/epoch": 1.3,
      "brisk-pond-1 - train/epoch__MIN": 1.3,
      "brisk-pond-1 - train/epoch__MAX": 1.3
    },
    {
      "Step": 467,
      "brisk-pond-1 - train/epoch": 1.31,
      "brisk-pond-1 - train/epoch__MIN": 1.31,
      "brisk-pond-1 - train/epoch__MAX": 1.31
    },
    {
      "Step": 468,
      "brisk-pond-1 - train/epoch": 1.31,
      "brisk-pond-1 - train/epoch__MIN": 1.31,
      "brisk-pond-1 - train/epoch__MAX": 1.31
    },
    {
      "Step": 469,
      "brisk-pond-1 - train/epoch": 1.31,
      "brisk-pond-1 - train/epoch__MIN": 1.31,
      "brisk-pond-1 - train/epoch__MAX": 1.31
    },
    {
      "Step": 470,
      "brisk-pond-1 - train/epoch": 1.31,
      "brisk-pond-1 - train/epoch__MIN": 1.31,
      "brisk-pond-1 - train/epoch__MAX": 1.31
    },
    {
      "Step": 471,
      "brisk-pond-1 - train/epoch": 1.32,
      "brisk-pond-1 - train/epoch__MIN": 1.32,
      "brisk-pond-1 - train/epoch__MAX": 1.32
    },
    {
      "Step": 472,
      "brisk-pond-1 - train/epoch": 1.32,
      "brisk-pond-1 - train/epoch__MIN": 1.32,
      "brisk-pond-1 - train/epoch__MAX": 1.32
    },
    {
      "Step": 473,
      "brisk-pond-1 - train/epoch": 1.32,
      "brisk-pond-1 - train/epoch__MIN": 1.32,
      "brisk-pond-1 - train/epoch__MAX": 1.32
    },
    {
      "Step": 474,
      "brisk-pond-1 - train/epoch": 1.33,
      "brisk-pond-1 - train/epoch__MIN": 1.33,
      "brisk-pond-1 - train/epoch__MAX": 1.33
    },
    {
      "Step": 475,
      "brisk-pond-1 - train/epoch": 1.33,
      "brisk-pond-1 - train/epoch__MIN": 1.33,
      "brisk-pond-1 - train/epoch__MAX": 1.33
    },
    {
      "Step": 476,
      "brisk-pond-1 - train/epoch": 1.33,
      "brisk-pond-1 - train/epoch__MIN": 1.33,
      "brisk-pond-1 - train/epoch__MAX": 1.33
    },
    {
      "Step": 477,
      "brisk-pond-1 - train/epoch": 1.33,
      "brisk-pond-1 - train/epoch__MIN": 1.33,
      "brisk-pond-1 - train/epoch__MAX": 1.33
    },
    {
      "Step": 478,
      "brisk-pond-1 - train/epoch": 1.34,
      "brisk-pond-1 - train/epoch__MIN": 1.34,
      "brisk-pond-1 - train/epoch__MAX": 1.34
    },
    {
      "Step": 479,
      "brisk-pond-1 - train/epoch": 1.34,
      "brisk-pond-1 - train/epoch__MIN": 1.34,
      "brisk-pond-1 - train/epoch__MAX": 1.34
    },
    {
      "Step": 480,
      "brisk-pond-1 - train/epoch": 1.34,
      "brisk-pond-1 - train/epoch__MIN": 1.34,
      "brisk-pond-1 - train/epoch__MAX": 1.34
    },
    {
      "Step": 481,
      "brisk-pond-1 - train/epoch": 1.35,
      "brisk-pond-1 - train/epoch__MIN": 1.35,
      "brisk-pond-1 - train/epoch__MAX": 1.35
    },
    {
      "Step": 482,
      "brisk-pond-1 - train/epoch": 1.35,
      "brisk-pond-1 - train/epoch__MIN": 1.35,
      "brisk-pond-1 - train/epoch__MAX": 1.35
    },
    {
      "Step": 483,
      "brisk-pond-1 - train/epoch": 1.35,
      "brisk-pond-1 - train/epoch__MIN": 1.35,
      "brisk-pond-1 - train/epoch__MAX": 1.35
    },
    {
      "Step": 484,
      "brisk-pond-1 - train/epoch": 1.35,
      "brisk-pond-1 - train/epoch__MIN": 1.35,
      "brisk-pond-1 - train/epoch__MAX": 1.35
    },
    {
      "Step": 485,
      "brisk-pond-1 - train/epoch": 1.36,
      "brisk-pond-1 - train/epoch__MIN": 1.36,
      "brisk-pond-1 - train/epoch__MAX": 1.36
    },
    {
      "Step": 486,
      "brisk-pond-1 - train/epoch": 1.36,
      "brisk-pond-1 - train/epoch__MIN": 1.36,
      "brisk-pond-1 - train/epoch__MAX": 1.36
    },
    {
      "Step": 487,
      "brisk-pond-1 - train/epoch": 1.36,
      "brisk-pond-1 - train/epoch__MIN": 1.36,
      "brisk-pond-1 - train/epoch__MAX": 1.36
    },
    {
      "Step": 488,
      "brisk-pond-1 - train/epoch": 1.36,
      "brisk-pond-1 - train/epoch__MIN": 1.36,
      "brisk-pond-1 - train/epoch__MAX": 1.36
    },
    {
      "Step": 489,
      "brisk-pond-1 - train/epoch": 1.37,
      "brisk-pond-1 - train/epoch__MIN": 1.37,
      "brisk-pond-1 - train/epoch__MAX": 1.37
    },
    {
      "Step": 490,
      "brisk-pond-1 - train/epoch": 1.37,
      "brisk-pond-1 - train/epoch__MIN": 1.37,
      "brisk-pond-1 - train/epoch__MAX": 1.37
    },
    {
      "Step": 491,
      "brisk-pond-1 - train/epoch": 1.37,
      "brisk-pond-1 - train/epoch__MIN": 1.37,
      "brisk-pond-1 - train/epoch__MAX": 1.37
    },
    {
      "Step": 492,
      "brisk-pond-1 - train/epoch": 1.38,
      "brisk-pond-1 - train/epoch__MIN": 1.38,
      "brisk-pond-1 - train/epoch__MAX": 1.38
    },
    {
      "Step": 493,
      "brisk-pond-1 - train/epoch": 1.38,
      "brisk-pond-1 - train/epoch__MIN": 1.38,
      "brisk-pond-1 - train/epoch__MAX": 1.38
    },
    {
      "Step": 494,
      "brisk-pond-1 - train/epoch": 1.38,
      "brisk-pond-1 - train/epoch__MIN": 1.38,
      "brisk-pond-1 - train/epoch__MAX": 1.38
    },
    {
      "Step": 495,
      "brisk-pond-1 - train/epoch": 1.38,
      "brisk-pond-1 - train/epoch__MIN": 1.38,
      "brisk-pond-1 - train/epoch__MAX": 1.38
    },
    {
      "Step": 496,
      "brisk-pond-1 - train/epoch": 1.39,
      "brisk-pond-1 - train/epoch__MIN": 1.39,
      "brisk-pond-1 - train/epoch__MAX": 1.39
    },
    {
      "Step": 497,
      "brisk-pond-1 - train/epoch": 1.39,
      "brisk-pond-1 - train/epoch__MIN": 1.39,
      "brisk-pond-1 - train/epoch__MAX": 1.39
    },
    {
      "Step": 498,
      "brisk-pond-1 - train/epoch": 1.39,
      "brisk-pond-1 - train/epoch__MIN": 1.39,
      "brisk-pond-1 - train/epoch__MAX": 1.39
    },
    {
      "Step": 499,
      "brisk-pond-1 - train/epoch": 1.4,
      "brisk-pond-1 - train/epoch__MIN": 1.4,
      "brisk-pond-1 - train/epoch__MAX": 1.4
    },
    {
      "Step": 500,
      "brisk-pond-1 - train/epoch": 1.4,
      "brisk-pond-1 - train/epoch__MIN": 1.4,
      "brisk-pond-1 - train/epoch__MAX": 1.4
    },
    {
      "Step": 501,
      "brisk-pond-1 - train/epoch": 1.4,
      "brisk-pond-1 - train/epoch__MIN": 1.4,
      "brisk-pond-1 - train/epoch__MAX": 1.4
    },
    {
      "Step": 502,
      "brisk-pond-1 - train/epoch": 1.4,
      "brisk-pond-1 - train/epoch__MIN": 1.4,
      "brisk-pond-1 - train/epoch__MAX": 1.4
    },
    {
      "Step": 503,
      "brisk-pond-1 - train/epoch": 1.41,
      "brisk-pond-1 - train/epoch__MIN": 1.41,
      "brisk-pond-1 - train/epoch__MAX": 1.41
    },
    {
      "Step": 504,
      "brisk-pond-1 - train/epoch": 1.41,
      "brisk-pond-1 - train/epoch__MIN": 1.41,
      "brisk-pond-1 - train/epoch__MAX": 1.41
    },
    {
      "Step": 505,
      "brisk-pond-1 - train/epoch": 1.41,
      "brisk-pond-1 - train/epoch__MIN": 1.41,
      "brisk-pond-1 - train/epoch__MAX": 1.41
    },
    {
      "Step": 506,
      "brisk-pond-1 - train/epoch": 1.42,
      "brisk-pond-1 - train/epoch__MIN": 1.42,
      "brisk-pond-1 - train/epoch__MAX": 1.42
    },
    {
      "Step": 507,
      "brisk-pond-1 - train/epoch": 1.42,
      "brisk-pond-1 - train/epoch__MIN": 1.42,
      "brisk-pond-1 - train/epoch__MAX": 1.42
    },
    {
      "Step": 508,
      "brisk-pond-1 - train/epoch": 1.42,
      "brisk-pond-1 - train/epoch__MIN": 1.42,
      "brisk-pond-1 - train/epoch__MAX": 1.42
    },
    {
      "Step": 509,
      "brisk-pond-1 - train/epoch": 1.42,
      "brisk-pond-1 - train/epoch__MIN": 1.42,
      "brisk-pond-1 - train/epoch__MAX": 1.42
    },
    {
      "Step": 510,
      "brisk-pond-1 - train/epoch": 1.43,
      "brisk-pond-1 - train/epoch__MIN": 1.43,
      "brisk-pond-1 - train/epoch__MAX": 1.43
    },
    {
      "Step": 511,
      "brisk-pond-1 - train/epoch": 1.43,
      "brisk-pond-1 - train/epoch__MIN": 1.43,
      "brisk-pond-1 - train/epoch__MAX": 1.43
    },
    {
      "Step": 512,
      "brisk-pond-1 - train/epoch": 1.43,
      "brisk-pond-1 - train/epoch__MIN": 1.43,
      "brisk-pond-1 - train/epoch__MAX": 1.43
    },
    {
      "Step": 513,
      "brisk-pond-1 - train/epoch": 1.43,
      "brisk-pond-1 - train/epoch__MIN": 1.43,
      "brisk-pond-1 - train/epoch__MAX": 1.43
    },
    {
      "Step": 514,
      "brisk-pond-1 - train/epoch": 1.44,
      "brisk-pond-1 - train/epoch__MIN": 1.44,
      "brisk-pond-1 - train/epoch__MAX": 1.44
    },
    {
      "Step": 515,
      "brisk-pond-1 - train/epoch": 1.44,
      "brisk-pond-1 - train/epoch__MIN": 1.44,
      "brisk-pond-1 - train/epoch__MAX": 1.44
    },
    {
      "Step": 516,
      "brisk-pond-1 - train/epoch": 1.44,
      "brisk-pond-1 - train/epoch__MIN": 1.44,
      "brisk-pond-1 - train/epoch__MAX": 1.44
    },
    {
      "Step": 517,
      "brisk-pond-1 - train/epoch": 1.45,
      "brisk-pond-1 - train/epoch__MIN": 1.45,
      "brisk-pond-1 - train/epoch__MAX": 1.45
    },
    {
      "Step": 518,
      "brisk-pond-1 - train/epoch": 1.45,
      "brisk-pond-1 - train/epoch__MIN": 1.45,
      "brisk-pond-1 - train/epoch__MAX": 1.45
    },
    {
      "Step": 519,
      "brisk-pond-1 - train/epoch": 1.45,
      "brisk-pond-1 - train/epoch__MIN": 1.45,
      "brisk-pond-1 - train/epoch__MAX": 1.45
    },
    {
      "Step": 520,
      "brisk-pond-1 - train/epoch": 1.45,
      "brisk-pond-1 - train/epoch__MIN": 1.45,
      "brisk-pond-1 - train/epoch__MAX": 1.45
    },
    {
      "Step": 521,
      "brisk-pond-1 - train/epoch": 1.46,
      "brisk-pond-1 - train/epoch__MIN": 1.46,
      "brisk-pond-1 - train/epoch__MAX": 1.46
    },
    {
      "Step": 522,
      "brisk-pond-1 - train/epoch": 1.46,
      "brisk-pond-1 - train/epoch__MIN": 1.46,
      "brisk-pond-1 - train/epoch__MAX": 1.46
    },
    {
      "Step": 523,
      "brisk-pond-1 - train/epoch": 1.46,
      "brisk-pond-1 - train/epoch__MIN": 1.46,
      "brisk-pond-1 - train/epoch__MAX": 1.46
    },
    {
      "Step": 524,
      "brisk-pond-1 - train/epoch": 1.47,
      "brisk-pond-1 - train/epoch__MIN": 1.47,
      "brisk-pond-1 - train/epoch__MAX": 1.47
    },
    {
      "Step": 525,
      "brisk-pond-1 - train/epoch": 1.47,
      "brisk-pond-1 - train/epoch__MIN": 1.47,
      "brisk-pond-1 - train/epoch__MAX": 1.47
    },
    {
      "Step": 526,
      "brisk-pond-1 - train/epoch": 1.47,
      "brisk-pond-1 - train/epoch__MIN": 1.47,
      "brisk-pond-1 - train/epoch__MAX": 1.47
    },
    {
      "Step": 527,
      "brisk-pond-1 - train/epoch": 1.47,
      "brisk-pond-1 - train/epoch__MIN": 1.47,
      "brisk-pond-1 - train/epoch__MAX": 1.47
    },
    {
      "Step": 528,
      "brisk-pond-1 - train/epoch": 1.48,
      "brisk-pond-1 - train/epoch__MIN": 1.48,
      "brisk-pond-1 - train/epoch__MAX": 1.48
    },
    {
      "Step": 529,
      "brisk-pond-1 - train/epoch": 1.48,
      "brisk-pond-1 - train/epoch__MIN": 1.48,
      "brisk-pond-1 - train/epoch__MAX": 1.48
    },
    {
      "Step": 530,
      "brisk-pond-1 - train/epoch": 1.48,
      "brisk-pond-1 - train/epoch__MIN": 1.48,
      "brisk-pond-1 - train/epoch__MAX": 1.48
    },
    {
      "Step": 531,
      "brisk-pond-1 - train/epoch": 1.49,
      "brisk-pond-1 - train/epoch__MIN": 1.49,
      "brisk-pond-1 - train/epoch__MAX": 1.49
    },
    {
      "Step": 532,
      "brisk-pond-1 - train/epoch": 1.49,
      "brisk-pond-1 - train/epoch__MIN": 1.49,
      "brisk-pond-1 - train/epoch__MAX": 1.49
    },
    {
      "Step": 533,
      "brisk-pond-1 - train/epoch": 1.49,
      "brisk-pond-1 - train/epoch__MIN": 1.49,
      "brisk-pond-1 - train/epoch__MAX": 1.49
    },
    {
      "Step": 534,
      "brisk-pond-1 - train/epoch": 1.49,
      "brisk-pond-1 - train/epoch__MIN": 1.49,
      "brisk-pond-1 - train/epoch__MAX": 1.49
    },
    {
      "Step": 535,
      "brisk-pond-1 - train/epoch": 1.5,
      "brisk-pond-1 - train/epoch__MIN": 1.5,
      "brisk-pond-1 - train/epoch__MAX": 1.5
    },
    {
      "Step": 536,
      "brisk-pond-1 - train/epoch": 1.5,
      "brisk-pond-1 - train/epoch__MIN": 1.5,
      "brisk-pond-1 - train/epoch__MAX": 1.5
    },
    {
      "Step": 537,
      "brisk-pond-1 - train/epoch": 1.5,
      "brisk-pond-1 - train/epoch__MIN": 1.5,
      "brisk-pond-1 - train/epoch__MAX": 1.5
    },
    {
      "Step": 538,
      "brisk-pond-1 - train/epoch": 1.51,
      "brisk-pond-1 - train/epoch__MIN": 1.51,
      "brisk-pond-1 - train/epoch__MAX": 1.51
    },
    {
      "Step": 539,
      "brisk-pond-1 - train/epoch": 1.51,
      "brisk-pond-1 - train/epoch__MIN": 1.51,
      "brisk-pond-1 - train/epoch__MAX": 1.51
    },
    {
      "Step": 540,
      "brisk-pond-1 - train/epoch": 1.51,
      "brisk-pond-1 - train/epoch__MIN": 1.51,
      "brisk-pond-1 - train/epoch__MAX": 1.51
    },
    {
      "Step": 541,
      "brisk-pond-1 - train/epoch": 1.51,
      "brisk-pond-1 - train/epoch__MIN": 1.51,
      "brisk-pond-1 - train/epoch__MAX": 1.51
    },
    {
      "Step": 542,
      "brisk-pond-1 - train/epoch": 1.52,
      "brisk-pond-1 - train/epoch__MIN": 1.52,
      "brisk-pond-1 - train/epoch__MAX": 1.52
    },
    {
      "Step": 543,
      "brisk-pond-1 - train/epoch": 1.52,
      "brisk-pond-1 - train/epoch__MIN": 1.52,
      "brisk-pond-1 - train/epoch__MAX": 1.52
    },
    {
      "Step": 544,
      "brisk-pond-1 - train/epoch": 1.52,
      "brisk-pond-1 - train/epoch__MIN": 1.52,
      "brisk-pond-1 - train/epoch__MAX": 1.52
    },
    {
      "Step": 545,
      "brisk-pond-1 - train/epoch": 1.52,
      "brisk-pond-1 - train/epoch__MIN": 1.52,
      "brisk-pond-1 - train/epoch__MAX": 1.52
    },
    {
      "Step": 546,
      "brisk-pond-1 - train/epoch": 1.53,
      "brisk-pond-1 - train/epoch__MIN": 1.53,
      "brisk-pond-1 - train/epoch__MAX": 1.53
    },
    {
      "Step": 547,
      "brisk-pond-1 - train/epoch": 1.53,
      "brisk-pond-1 - train/epoch__MIN": 1.53,
      "brisk-pond-1 - train/epoch__MAX": 1.53
    },
    {
      "Step": 548,
      "brisk-pond-1 - train/epoch": 1.53,
      "brisk-pond-1 - train/epoch__MIN": 1.53,
      "brisk-pond-1 - train/epoch__MAX": 1.53
    },
    {
      "Step": 549,
      "brisk-pond-1 - train/epoch": 1.54,
      "brisk-pond-1 - train/epoch__MIN": 1.54,
      "brisk-pond-1 - train/epoch__MAX": 1.54
    },
    {
      "Step": 550,
      "brisk-pond-1 - train/epoch": 1.54,
      "brisk-pond-1 - train/epoch__MIN": 1.54,
      "brisk-pond-1 - train/epoch__MAX": 1.54
    },
    {
      "Step": 551,
      "brisk-pond-1 - train/epoch": 1.54,
      "brisk-pond-1 - train/epoch__MIN": 1.54,
      "brisk-pond-1 - train/epoch__MAX": 1.54
    },
    {
      "Step": 552,
      "brisk-pond-1 - train/epoch": 1.54,
      "brisk-pond-1 - train/epoch__MIN": 1.54,
      "brisk-pond-1 - train/epoch__MAX": 1.54
    },
    {
      "Step": 553,
      "brisk-pond-1 - train/epoch": 1.55,
      "brisk-pond-1 - train/epoch__MIN": 1.55,
      "brisk-pond-1 - train/epoch__MAX": 1.55
    },
    {
      "Step": 554,
      "brisk-pond-1 - train/epoch": 1.55,
      "brisk-pond-1 - train/epoch__MIN": 1.55,
      "brisk-pond-1 - train/epoch__MAX": 1.55
    },
    {
      "Step": 555,
      "brisk-pond-1 - train/epoch": 1.55,
      "brisk-pond-1 - train/epoch__MIN": 1.55,
      "brisk-pond-1 - train/epoch__MAX": 1.55
    },
    {
      "Step": 556,
      "brisk-pond-1 - train/epoch": 1.56,
      "brisk-pond-1 - train/epoch__MIN": 1.56,
      "brisk-pond-1 - train/epoch__MAX": 1.56
    },
    {
      "Step": 557,
      "brisk-pond-1 - train/epoch": 1.56,
      "brisk-pond-1 - train/epoch__MIN": 1.56,
      "brisk-pond-1 - train/epoch__MAX": 1.56
    },
    {
      "Step": 558,
      "brisk-pond-1 - train/epoch": 1.56,
      "brisk-pond-1 - train/epoch__MIN": 1.56,
      "brisk-pond-1 - train/epoch__MAX": 1.56
    },
    {
      "Step": 559,
      "brisk-pond-1 - train/epoch": 1.56,
      "brisk-pond-1 - train/epoch__MIN": 1.56,
      "brisk-pond-1 - train/epoch__MAX": 1.56
    },
    {
      "Step": 560,
      "brisk-pond-1 - train/epoch": 1.57,
      "brisk-pond-1 - train/epoch__MIN": 1.57,
      "brisk-pond-1 - train/epoch__MAX": 1.57
    },
    {
      "Step": 561,
      "brisk-pond-1 - train/epoch": 1.57,
      "brisk-pond-1 - train/epoch__MIN": 1.57,
      "brisk-pond-1 - train/epoch__MAX": 1.57
    },
    {
      "Step": 562,
      "brisk-pond-1 - train/epoch": 1.57,
      "brisk-pond-1 - train/epoch__MIN": 1.57,
      "brisk-pond-1 - train/epoch__MAX": 1.57
    },
    {
      "Step": 563,
      "brisk-pond-1 - train/epoch": 1.58,
      "brisk-pond-1 - train/epoch__MIN": 1.58,
      "brisk-pond-1 - train/epoch__MAX": 1.58
    },
    {
      "Step": 564,
      "brisk-pond-1 - train/epoch": 1.58,
      "brisk-pond-1 - train/epoch__MIN": 1.58,
      "brisk-pond-1 - train/epoch__MAX": 1.58
    },
    {
      "Step": 565,
      "brisk-pond-1 - train/epoch": 1.58,
      "brisk-pond-1 - train/epoch__MIN": 1.58,
      "brisk-pond-1 - train/epoch__MAX": 1.58
    },
    {
      "Step": 566,
      "brisk-pond-1 - train/epoch": 1.58,
      "brisk-pond-1 - train/epoch__MIN": 1.58,
      "brisk-pond-1 - train/epoch__MAX": 1.58
    },
    {
      "Step": 567,
      "brisk-pond-1 - train/epoch": 1.59,
      "brisk-pond-1 - train/epoch__MIN": 1.59,
      "brisk-pond-1 - train/epoch__MAX": 1.59
    },
    {
      "Step": 568,
      "brisk-pond-1 - train/epoch": 1.59,
      "brisk-pond-1 - train/epoch__MIN": 1.59,
      "brisk-pond-1 - train/epoch__MAX": 1.59
    },
    {
      "Step": 569,
      "brisk-pond-1 - train/epoch": 1.59,
      "brisk-pond-1 - train/epoch__MIN": 1.59,
      "brisk-pond-1 - train/epoch__MAX": 1.59
    },
    {
      "Step": 570,
      "brisk-pond-1 - train/epoch": 1.59,
      "brisk-pond-1 - train/epoch__MIN": 1.59,
      "brisk-pond-1 - train/epoch__MAX": 1.59
    },
    {
      "Step": 571,
      "brisk-pond-1 - train/epoch": 1.6,
      "brisk-pond-1 - train/epoch__MIN": 1.6,
      "brisk-pond-1 - train/epoch__MAX": 1.6
    },
    {
      "Step": 572,
      "brisk-pond-1 - train/epoch": 1.6,
      "brisk-pond-1 - train/epoch__MIN": 1.6,
      "brisk-pond-1 - train/epoch__MAX": 1.6
    },
    {
      "Step": 573,
      "brisk-pond-1 - train/epoch": 1.6,
      "brisk-pond-1 - train/epoch__MIN": 1.6,
      "brisk-pond-1 - train/epoch__MAX": 1.6
    },
    {
      "Step": 574,
      "brisk-pond-1 - train/epoch": 1.61,
      "brisk-pond-1 - train/epoch__MIN": 1.61,
      "brisk-pond-1 - train/epoch__MAX": 1.61
    },
    {
      "Step": 575,
      "brisk-pond-1 - train/epoch": 1.61,
      "brisk-pond-1 - train/epoch__MIN": 1.61,
      "brisk-pond-1 - train/epoch__MAX": 1.61
    },
    {
      "Step": 576,
      "brisk-pond-1 - train/epoch": 1.61,
      "brisk-pond-1 - train/epoch__MIN": 1.61,
      "brisk-pond-1 - train/epoch__MAX": 1.61
    },
    {
      "Step": 577,
      "brisk-pond-1 - train/epoch": 1.61,
      "brisk-pond-1 - train/epoch__MIN": 1.61,
      "brisk-pond-1 - train/epoch__MAX": 1.61
    },
    {
      "Step": 578,
      "brisk-pond-1 - train/epoch": 1.62,
      "brisk-pond-1 - train/epoch__MIN": 1.62,
      "brisk-pond-1 - train/epoch__MAX": 1.62
    },
    {
      "Step": 579,
      "brisk-pond-1 - train/epoch": 1.62,
      "brisk-pond-1 - train/epoch__MIN": 1.62,
      "brisk-pond-1 - train/epoch__MAX": 1.62
    },
    {
      "Step": 580,
      "brisk-pond-1 - train/epoch": 1.62,
      "brisk-pond-1 - train/epoch__MIN": 1.62,
      "brisk-pond-1 - train/epoch__MAX": 1.62
    },
    {
      "Step": 581,
      "brisk-pond-1 - train/epoch": 1.63,
      "brisk-pond-1 - train/epoch__MIN": 1.63,
      "brisk-pond-1 - train/epoch__MAX": 1.63
    },
    {
      "Step": 582,
      "brisk-pond-1 - train/epoch": 1.63,
      "brisk-pond-1 - train/epoch__MIN": 1.63,
      "brisk-pond-1 - train/epoch__MAX": 1.63
    },
    {
      "Step": 583,
      "brisk-pond-1 - train/epoch": 1.63,
      "brisk-pond-1 - train/epoch__MIN": 1.63,
      "brisk-pond-1 - train/epoch__MAX": 1.63
    },
    {
      "Step": 584,
      "brisk-pond-1 - train/epoch": 1.63,
      "brisk-pond-1 - train/epoch__MIN": 1.63,
      "brisk-pond-1 - train/epoch__MAX": 1.63
    },
    {
      "Step": 585,
      "brisk-pond-1 - train/epoch": 1.64,
      "brisk-pond-1 - train/epoch__MIN": 1.64,
      "brisk-pond-1 - train/epoch__MAX": 1.64
    },
    {
      "Step": 586,
      "brisk-pond-1 - train/epoch": 1.64,
      "brisk-pond-1 - train/epoch__MIN": 1.64,
      "brisk-pond-1 - train/epoch__MAX": 1.64
    },
    {
      "Step": 587,
      "brisk-pond-1 - train/epoch": 1.64,
      "brisk-pond-1 - train/epoch__MIN": 1.64,
      "brisk-pond-1 - train/epoch__MAX": 1.64
    },
    {
      "Step": 588,
      "brisk-pond-1 - train/epoch": 1.65,
      "brisk-pond-1 - train/epoch__MIN": 1.65,
      "brisk-pond-1 - train/epoch__MAX": 1.65
    },
    {
      "Step": 589,
      "brisk-pond-1 - train/epoch": 1.65,
      "brisk-pond-1 - train/epoch__MIN": 1.65,
      "brisk-pond-1 - train/epoch__MAX": 1.65
    },
    {
      "Step": 590,
      "brisk-pond-1 - train/epoch": 1.65,
      "brisk-pond-1 - train/epoch__MIN": 1.65,
      "brisk-pond-1 - train/epoch__MAX": 1.65
    },
    {
      "Step": 591,
      "brisk-pond-1 - train/epoch": 1.65,
      "brisk-pond-1 - train/epoch__MIN": 1.65,
      "brisk-pond-1 - train/epoch__MAX": 1.65
    },
    {
      "Step": 592,
      "brisk-pond-1 - train/epoch": 1.66,
      "brisk-pond-1 - train/epoch__MIN": 1.66,
      "brisk-pond-1 - train/epoch__MAX": 1.66
    },
    {
      "Step": 593,
      "brisk-pond-1 - train/epoch": 1.66,
      "brisk-pond-1 - train/epoch__MIN": 1.66,
      "brisk-pond-1 - train/epoch__MAX": 1.66
    },
    {
      "Step": 594,
      "brisk-pond-1 - train/epoch": 1.66,
      "brisk-pond-1 - train/epoch__MIN": 1.66,
      "brisk-pond-1 - train/epoch__MAX": 1.66
    },
    {
      "Step": 595,
      "brisk-pond-1 - train/epoch": 1.66,
      "brisk-pond-1 - train/epoch__MIN": 1.66,
      "brisk-pond-1 - train/epoch__MAX": 1.66
    },
    {
      "Step": 596,
      "brisk-pond-1 - train/epoch": 1.67,
      "brisk-pond-1 - train/epoch__MIN": 1.67,
      "brisk-pond-1 - train/epoch__MAX": 1.67
    },
    {
      "Step": 597,
      "brisk-pond-1 - train/epoch": 1.67,
      "brisk-pond-1 - train/epoch__MIN": 1.67,
      "brisk-pond-1 - train/epoch__MAX": 1.67
    },
    {
      "Step": 598,
      "brisk-pond-1 - train/epoch": 1.67,
      "brisk-pond-1 - train/epoch__MIN": 1.67,
      "brisk-pond-1 - train/epoch__MAX": 1.67
    },
    {
      "Step": 599,
      "brisk-pond-1 - train/epoch": 1.68,
      "brisk-pond-1 - train/epoch__MIN": 1.68,
      "brisk-pond-1 - train/epoch__MAX": 1.68
    },
    {
      "Step": 600,
      "brisk-pond-1 - train/epoch": 1.68,
      "brisk-pond-1 - train/epoch__MIN": 1.68,
      "brisk-pond-1 - train/epoch__MAX": 1.68
    },
    {
      "Step": 601,
      "brisk-pond-1 - train/epoch": 1.68,
      "brisk-pond-1 - train/epoch__MIN": 1.68,
      "brisk-pond-1 - train/epoch__MAX": 1.68
    },
    {
      "Step": 602,
      "brisk-pond-1 - train/epoch": 1.68,
      "brisk-pond-1 - train/epoch__MIN": 1.68,
      "brisk-pond-1 - train/epoch__MAX": 1.68
    },
    {
      "Step": 603,
      "brisk-pond-1 - train/epoch": 1.68,
      "brisk-pond-1 - train/epoch__MIN": 1.68,
      "brisk-pond-1 - train/epoch__MAX": 1.68
    },
    {
      "Step": 604,
      "brisk-pond-1 - train/epoch": 1.69,
      "brisk-pond-1 - train/epoch__MIN": 1.69,
      "brisk-pond-1 - train/epoch__MAX": 1.69
    },
    {
      "Step": 605,
      "brisk-pond-1 - train/epoch": 1.69,
      "brisk-pond-1 - train/epoch__MIN": 1.69,
      "brisk-pond-1 - train/epoch__MAX": 1.69
    },
    {
      "Step": 606,
      "brisk-pond-1 - train/epoch": 1.69,
      "brisk-pond-1 - train/epoch__MIN": 1.69,
      "brisk-pond-1 - train/epoch__MAX": 1.69
    },
    {
      "Step": 607,
      "brisk-pond-1 - train/epoch": 1.7,
      "brisk-pond-1 - train/epoch__MIN": 1.7,
      "brisk-pond-1 - train/epoch__MAX": 1.7
    },
    {
      "Step": 608,
      "brisk-pond-1 - train/epoch": 1.7,
      "brisk-pond-1 - train/epoch__MIN": 1.7,
      "brisk-pond-1 - train/epoch__MAX": 1.7
    },
    {
      "Step": 609,
      "brisk-pond-1 - train/epoch": 1.7,
      "brisk-pond-1 - train/epoch__MIN": 1.7,
      "brisk-pond-1 - train/epoch__MAX": 1.7
    },
    {
      "Step": 610,
      "brisk-pond-1 - train/epoch": 1.7,
      "brisk-pond-1 - train/epoch__MIN": 1.7,
      "brisk-pond-1 - train/epoch__MAX": 1.7
    },
    {
      "Step": 611,
      "brisk-pond-1 - train/epoch": 1.71,
      "brisk-pond-1 - train/epoch__MIN": 1.71,
      "brisk-pond-1 - train/epoch__MAX": 1.71
    },
    {
      "Step": 612,
      "brisk-pond-1 - train/epoch": 1.71,
      "brisk-pond-1 - train/epoch__MIN": 1.71,
      "brisk-pond-1 - train/epoch__MAX": 1.71
    },
    {
      "Step": 613,
      "brisk-pond-1 - train/epoch": 1.71,
      "brisk-pond-1 - train/epoch__MIN": 1.71,
      "brisk-pond-1 - train/epoch__MAX": 1.71
    },
    {
      "Step": 614,
      "brisk-pond-1 - train/epoch": 1.72,
      "brisk-pond-1 - train/epoch__MIN": 1.72,
      "brisk-pond-1 - train/epoch__MAX": 1.72
    },
    {
      "Step": 615,
      "brisk-pond-1 - train/epoch": 1.72,
      "brisk-pond-1 - train/epoch__MIN": 1.72,
      "brisk-pond-1 - train/epoch__MAX": 1.72
    },
    {
      "Step": 616,
      "brisk-pond-1 - train/epoch": 1.72,
      "brisk-pond-1 - train/epoch__MIN": 1.72,
      "brisk-pond-1 - train/epoch__MAX": 1.72
    },
    {
      "Step": 617,
      "brisk-pond-1 - train/epoch": 1.72,
      "brisk-pond-1 - train/epoch__MIN": 1.72,
      "brisk-pond-1 - train/epoch__MAX": 1.72
    },
    {
      "Step": 618,
      "brisk-pond-1 - train/epoch": 1.73,
      "brisk-pond-1 - train/epoch__MIN": 1.73,
      "brisk-pond-1 - train/epoch__MAX": 1.73
    },
    {
      "Step": 619,
      "brisk-pond-1 - train/epoch": 1.73,
      "brisk-pond-1 - train/epoch__MIN": 1.73,
      "brisk-pond-1 - train/epoch__MAX": 1.73
    },
    {
      "Step": 620,
      "brisk-pond-1 - train/epoch": 1.73,
      "brisk-pond-1 - train/epoch__MIN": 1.73,
      "brisk-pond-1 - train/epoch__MAX": 1.73
    },
    {
      "Step": 621,
      "brisk-pond-1 - train/epoch": 1.73,
      "brisk-pond-1 - train/epoch__MIN": 1.73,
      "brisk-pond-1 - train/epoch__MAX": 1.73
    },
    {
      "Step": 622,
      "brisk-pond-1 - train/epoch": 1.74,
      "brisk-pond-1 - train/epoch__MIN": 1.74,
      "brisk-pond-1 - train/epoch__MAX": 1.74
    },
    {
      "Step": 623,
      "brisk-pond-1 - train/epoch": 1.74,
      "brisk-pond-1 - train/epoch__MIN": 1.74,
      "brisk-pond-1 - train/epoch__MAX": 1.74
    },
    {
      "Step": 624,
      "brisk-pond-1 - train/epoch": 1.74,
      "brisk-pond-1 - train/epoch__MIN": 1.74,
      "brisk-pond-1 - train/epoch__MAX": 1.74
    },
    {
      "Step": 625,
      "brisk-pond-1 - train/epoch": 1.75,
      "brisk-pond-1 - train/epoch__MIN": 1.75,
      "brisk-pond-1 - train/epoch__MAX": 1.75
    },
    {
      "Step": 626,
      "brisk-pond-1 - train/epoch": 1.75,
      "brisk-pond-1 - train/epoch__MIN": 1.75,
      "brisk-pond-1 - train/epoch__MAX": 1.75
    },
    {
      "Step": 627,
      "brisk-pond-1 - train/epoch": 1.75,
      "brisk-pond-1 - train/epoch__MIN": 1.75,
      "brisk-pond-1 - train/epoch__MAX": 1.75
    },
    {
      "Step": 628,
      "brisk-pond-1 - train/epoch": 1.75,
      "brisk-pond-1 - train/epoch__MIN": 1.75,
      "brisk-pond-1 - train/epoch__MAX": 1.75
    },
    {
      "Step": 629,
      "brisk-pond-1 - train/epoch": 1.76,
      "brisk-pond-1 - train/epoch__MIN": 1.76,
      "brisk-pond-1 - train/epoch__MAX": 1.76
    },
    {
      "Step": 630,
      "brisk-pond-1 - train/epoch": 1.76,
      "brisk-pond-1 - train/epoch__MIN": 1.76,
      "brisk-pond-1 - train/epoch__MAX": 1.76
    },
    {
      "Step": 631,
      "brisk-pond-1 - train/epoch": 1.76,
      "brisk-pond-1 - train/epoch__MIN": 1.76,
      "brisk-pond-1 - train/epoch__MAX": 1.76
    },
    {
      "Step": 632,
      "brisk-pond-1 - train/epoch": 1.77,
      "brisk-pond-1 - train/epoch__MIN": 1.77,
      "brisk-pond-1 - train/epoch__MAX": 1.77
    },
    {
      "Step": 633,
      "brisk-pond-1 - train/epoch": 1.77,
      "brisk-pond-1 - train/epoch__MIN": 1.77,
      "brisk-pond-1 - train/epoch__MAX": 1.77
    },
    {
      "Step": 634,
      "brisk-pond-1 - train/epoch": 1.77,
      "brisk-pond-1 - train/epoch__MIN": 1.77,
      "brisk-pond-1 - train/epoch__MAX": 1.77
    },
    {
      "Step": 635,
      "brisk-pond-1 - train/epoch": 1.77,
      "brisk-pond-1 - train/epoch__MIN": 1.77,
      "brisk-pond-1 - train/epoch__MAX": 1.77
    },
    {
      "Step": 636,
      "brisk-pond-1 - train/epoch": 1.78,
      "brisk-pond-1 - train/epoch__MIN": 1.78,
      "brisk-pond-1 - train/epoch__MAX": 1.78
    },
    {
      "Step": 637,
      "brisk-pond-1 - train/epoch": 1.78,
      "brisk-pond-1 - train/epoch__MIN": 1.78,
      "brisk-pond-1 - train/epoch__MAX": 1.78
    },
    {
      "Step": 638,
      "brisk-pond-1 - train/epoch": 1.78,
      "brisk-pond-1 - train/epoch__MIN": 1.78,
      "brisk-pond-1 - train/epoch__MAX": 1.78
    },
    {
      "Step": 639,
      "brisk-pond-1 - train/epoch": 1.79,
      "brisk-pond-1 - train/epoch__MIN": 1.79,
      "brisk-pond-1 - train/epoch__MAX": 1.79
    },
    {
      "Step": 640,
      "brisk-pond-1 - train/epoch": 1.79,
      "brisk-pond-1 - train/epoch__MIN": 1.79,
      "brisk-pond-1 - train/epoch__MAX": 1.79
    },
    {
      "Step": 641,
      "brisk-pond-1 - train/epoch": 1.79,
      "brisk-pond-1 - train/epoch__MIN": 1.79,
      "brisk-pond-1 - train/epoch__MAX": 1.79
    },
    {
      "Step": 642,
      "brisk-pond-1 - train/epoch": 1.79,
      "brisk-pond-1 - train/epoch__MIN": 1.79,
      "brisk-pond-1 - train/epoch__MAX": 1.79
    },
    {
      "Step": 643,
      "brisk-pond-1 - train/epoch": 1.8,
      "brisk-pond-1 - train/epoch__MIN": 1.8,
      "brisk-pond-1 - train/epoch__MAX": 1.8
    },
    {
      "Step": 644,
      "brisk-pond-1 - train/epoch": 1.8,
      "brisk-pond-1 - train/epoch__MIN": 1.8,
      "brisk-pond-1 - train/epoch__MAX": 1.8
    },
    {
      "Step": 645,
      "brisk-pond-1 - train/epoch": 1.8,
      "brisk-pond-1 - train/epoch__MIN": 1.8,
      "brisk-pond-1 - train/epoch__MAX": 1.8
    },
    {
      "Step": 646,
      "brisk-pond-1 - train/epoch": 1.8,
      "brisk-pond-1 - train/epoch__MIN": 1.8,
      "brisk-pond-1 - train/epoch__MAX": 1.8
    },
    {
      "Step": 647,
      "brisk-pond-1 - train/epoch": 1.81,
      "brisk-pond-1 - train/epoch__MIN": 1.81,
      "brisk-pond-1 - train/epoch__MAX": 1.81
    },
    {
      "Step": 648,
      "brisk-pond-1 - train/epoch": 1.81,
      "brisk-pond-1 - train/epoch__MIN": 1.81,
      "brisk-pond-1 - train/epoch__MAX": 1.81
    },
    {
      "Step": 649,
      "brisk-pond-1 - train/epoch": 1.81,
      "brisk-pond-1 - train/epoch__MIN": 1.81,
      "brisk-pond-1 - train/epoch__MAX": 1.81
    },
    {
      "Step": 650,
      "brisk-pond-1 - train/epoch": 1.82,
      "brisk-pond-1 - train/epoch__MIN": 1.82,
      "brisk-pond-1 - train/epoch__MAX": 1.82
    },
    {
      "Step": 651,
      "brisk-pond-1 - train/epoch": 1.82,
      "brisk-pond-1 - train/epoch__MIN": 1.82,
      "brisk-pond-1 - train/epoch__MAX": 1.82
    },
    {
      "Step": 652,
      "brisk-pond-1 - train/epoch": 1.82,
      "brisk-pond-1 - train/epoch__MIN": 1.82,
      "brisk-pond-1 - train/epoch__MAX": 1.82
    },
    {
      "Step": 653,
      "brisk-pond-1 - train/epoch": 1.82,
      "brisk-pond-1 - train/epoch__MIN": 1.82,
      "brisk-pond-1 - train/epoch__MAX": 1.82
    },
    {
      "Step": 654,
      "brisk-pond-1 - train/epoch": 1.83,
      "brisk-pond-1 - train/epoch__MIN": 1.83,
      "brisk-pond-1 - train/epoch__MAX": 1.83
    },
    {
      "Step": 655,
      "brisk-pond-1 - train/epoch": 1.83,
      "brisk-pond-1 - train/epoch__MIN": 1.83,
      "brisk-pond-1 - train/epoch__MAX": 1.83
    },
    {
      "Step": 656,
      "brisk-pond-1 - train/epoch": 1.83,
      "brisk-pond-1 - train/epoch__MIN": 1.83,
      "brisk-pond-1 - train/epoch__MAX": 1.83
    },
    {
      "Step": 657,
      "brisk-pond-1 - train/epoch": 1.84,
      "brisk-pond-1 - train/epoch__MIN": 1.84,
      "brisk-pond-1 - train/epoch__MAX": 1.84
    },
    {
      "Step": 658,
      "brisk-pond-1 - train/epoch": 1.84,
      "brisk-pond-1 - train/epoch__MIN": 1.84,
      "brisk-pond-1 - train/epoch__MAX": 1.84
    },
    {
      "Step": 659,
      "brisk-pond-1 - train/epoch": 1.84,
      "brisk-pond-1 - train/epoch__MIN": 1.84,
      "brisk-pond-1 - train/epoch__MAX": 1.84
    },
    {
      "Step": 660,
      "brisk-pond-1 - train/epoch": 1.84,
      "brisk-pond-1 - train/epoch__MIN": 1.84,
      "brisk-pond-1 - train/epoch__MAX": 1.84
    },
    {
      "Step": 661,
      "brisk-pond-1 - train/epoch": 1.85,
      "brisk-pond-1 - train/epoch__MIN": 1.85,
      "brisk-pond-1 - train/epoch__MAX": 1.85
    },
    {
      "Step": 662,
      "brisk-pond-1 - train/epoch": 1.85,
      "brisk-pond-1 - train/epoch__MIN": 1.85,
      "brisk-pond-1 - train/epoch__MAX": 1.85
    },
    {
      "Step": 663,
      "brisk-pond-1 - train/epoch": 1.85,
      "brisk-pond-1 - train/epoch__MIN": 1.85,
      "brisk-pond-1 - train/epoch__MAX": 1.85
    },
    {
      "Step": 664,
      "brisk-pond-1 - train/epoch": 1.86,
      "brisk-pond-1 - train/epoch__MIN": 1.86,
      "brisk-pond-1 - train/epoch__MAX": 1.86
    },
    {
      "Step": 665,
      "brisk-pond-1 - train/epoch": 1.86,
      "brisk-pond-1 - train/epoch__MIN": 1.86,
      "brisk-pond-1 - train/epoch__MAX": 1.86
    },
    {
      "Step": 666,
      "brisk-pond-1 - train/epoch": 1.86,
      "brisk-pond-1 - train/epoch__MIN": 1.86,
      "brisk-pond-1 - train/epoch__MAX": 1.86
    },
    {
      "Step": 667,
      "brisk-pond-1 - train/epoch": 1.86,
      "brisk-pond-1 - train/epoch__MIN": 1.86,
      "brisk-pond-1 - train/epoch__MAX": 1.86
    },
    {
      "Step": 668,
      "brisk-pond-1 - train/epoch": 1.87,
      "brisk-pond-1 - train/epoch__MIN": 1.87,
      "brisk-pond-1 - train/epoch__MAX": 1.87
    },
    {
      "Step": 669,
      "brisk-pond-1 - train/epoch": 1.87,
      "brisk-pond-1 - train/epoch__MIN": 1.87,
      "brisk-pond-1 - train/epoch__MAX": 1.87
    },
    {
      "Step": 670,
      "brisk-pond-1 - train/epoch": 1.87,
      "brisk-pond-1 - train/epoch__MIN": 1.87,
      "brisk-pond-1 - train/epoch__MAX": 1.87
    },
    {
      "Step": 671,
      "brisk-pond-1 - train/epoch": 1.88,
      "brisk-pond-1 - train/epoch__MIN": 1.88,
      "brisk-pond-1 - train/epoch__MAX": 1.88
    },
    {
      "Step": 672,
      "brisk-pond-1 - train/epoch": 1.88,
      "brisk-pond-1 - train/epoch__MIN": 1.88,
      "brisk-pond-1 - train/epoch__MAX": 1.88
    },
    {
      "Step": 673,
      "brisk-pond-1 - train/epoch": 1.88,
      "brisk-pond-1 - train/epoch__MIN": 1.88,
      "brisk-pond-1 - train/epoch__MAX": 1.88
    },
    {
      "Step": 674,
      "brisk-pond-1 - train/epoch": 1.88,
      "brisk-pond-1 - train/epoch__MIN": 1.88,
      "brisk-pond-1 - train/epoch__MAX": 1.88
    },
    {
      "Step": 675,
      "brisk-pond-1 - train/epoch": 1.89,
      "brisk-pond-1 - train/epoch__MIN": 1.89,
      "brisk-pond-1 - train/epoch__MAX": 1.89
    },
    {
      "Step": 676,
      "brisk-pond-1 - train/epoch": 1.89,
      "brisk-pond-1 - train/epoch__MIN": 1.89,
      "brisk-pond-1 - train/epoch__MAX": 1.89
    },
    {
      "Step": 677,
      "brisk-pond-1 - train/epoch": 1.89,
      "brisk-pond-1 - train/epoch__MIN": 1.89,
      "brisk-pond-1 - train/epoch__MAX": 1.89
    },
    {
      "Step": 678,
      "brisk-pond-1 - train/epoch": 1.89,
      "brisk-pond-1 - train/epoch__MIN": 1.89,
      "brisk-pond-1 - train/epoch__MAX": 1.89
    },
    {
      "Step": 679,
      "brisk-pond-1 - train/epoch": 1.9,
      "brisk-pond-1 - train/epoch__MIN": 1.9,
      "brisk-pond-1 - train/epoch__MAX": 1.9
    },
    {
      "Step": 680,
      "brisk-pond-1 - train/epoch": 1.9,
      "brisk-pond-1 - train/epoch__MIN": 1.9,
      "brisk-pond-1 - train/epoch__MAX": 1.9
    },
    {
      "Step": 681,
      "brisk-pond-1 - train/epoch": 1.9,
      "brisk-pond-1 - train/epoch__MIN": 1.9,
      "brisk-pond-1 - train/epoch__MAX": 1.9
    },
    {
      "Step": 682,
      "brisk-pond-1 - train/epoch": 1.91,
      "brisk-pond-1 - train/epoch__MIN": 1.91,
      "brisk-pond-1 - train/epoch__MAX": 1.91
    },
    {
      "Step": 683,
      "brisk-pond-1 - train/epoch": 1.91,
      "brisk-pond-1 - train/epoch__MIN": 1.91,
      "brisk-pond-1 - train/epoch__MAX": 1.91
    },
    {
      "Step": 684,
      "brisk-pond-1 - train/epoch": 1.91,
      "brisk-pond-1 - train/epoch__MIN": 1.91,
      "brisk-pond-1 - train/epoch__MAX": 1.91
    },
    {
      "Step": 685,
      "brisk-pond-1 - train/epoch": 1.91,
      "brisk-pond-1 - train/epoch__MIN": 1.91,
      "brisk-pond-1 - train/epoch__MAX": 1.91
    },
    {
      "Step": 686,
      "brisk-pond-1 - train/epoch": 1.92,
      "brisk-pond-1 - train/epoch__MIN": 1.92,
      "brisk-pond-1 - train/epoch__MAX": 1.92
    },
    {
      "Step": 687,
      "brisk-pond-1 - train/epoch": 1.92,
      "brisk-pond-1 - train/epoch__MIN": 1.92,
      "brisk-pond-1 - train/epoch__MAX": 1.92
    },
    {
      "Step": 688,
      "brisk-pond-1 - train/epoch": 1.92,
      "brisk-pond-1 - train/epoch__MIN": 1.92,
      "brisk-pond-1 - train/epoch__MAX": 1.92
    },
    {
      "Step": 689,
      "brisk-pond-1 - train/epoch": 1.93,
      "brisk-pond-1 - train/epoch__MIN": 1.93,
      "brisk-pond-1 - train/epoch__MAX": 1.93
    },
    {
      "Step": 690,
      "brisk-pond-1 - train/epoch": 1.93,
      "brisk-pond-1 - train/epoch__MIN": 1.93,
      "brisk-pond-1 - train/epoch__MAX": 1.93
    },
    {
      "Step": 691,
      "brisk-pond-1 - train/epoch": 1.93,
      "brisk-pond-1 - train/epoch__MIN": 1.93,
      "brisk-pond-1 - train/epoch__MAX": 1.93
    },
    {
      "Step": 692,
      "brisk-pond-1 - train/epoch": 1.93,
      "brisk-pond-1 - train/epoch__MIN": 1.93,
      "brisk-pond-1 - train/epoch__MAX": 1.93
    },
    {
      "Step": 693,
      "brisk-pond-1 - train/epoch": 1.94,
      "brisk-pond-1 - train/epoch__MIN": 1.94,
      "brisk-pond-1 - train/epoch__MAX": 1.94
    },
    {
      "Step": 694,
      "brisk-pond-1 - train/epoch": 1.94,
      "brisk-pond-1 - train/epoch__MIN": 1.94,
      "brisk-pond-1 - train/epoch__MAX": 1.94
    },
    {
      "Step": 695,
      "brisk-pond-1 - train/epoch": 1.94,
      "brisk-pond-1 - train/epoch__MIN": 1.94,
      "brisk-pond-1 - train/epoch__MAX": 1.94
    },
    {
      "Step": 696,
      "brisk-pond-1 - train/epoch": 1.95,
      "brisk-pond-1 - train/epoch__MIN": 1.95,
      "brisk-pond-1 - train/epoch__MAX": 1.95
    },
    {
      "Step": 697,
      "brisk-pond-1 - train/epoch": 1.95,
      "brisk-pond-1 - train/epoch__MIN": 1.95,
      "brisk-pond-1 - train/epoch__MAX": 1.95
    },
    {
      "Step": 698,
      "brisk-pond-1 - train/epoch": 1.95,
      "brisk-pond-1 - train/epoch__MIN": 1.95,
      "brisk-pond-1 - train/epoch__MAX": 1.95
    },
    {
      "Step": 699,
      "brisk-pond-1 - train/epoch": 1.95,
      "brisk-pond-1 - train/epoch__MIN": 1.95,
      "brisk-pond-1 - train/epoch__MAX": 1.95
    },
    {
      "Step": 700,
      "brisk-pond-1 - train/epoch": 1.96,
      "brisk-pond-1 - train/epoch__MIN": 1.96,
      "brisk-pond-1 - train/epoch__MAX": 1.96
    },
    {
      "Step": 701,
      "brisk-pond-1 - train/epoch": 1.96,
      "brisk-pond-1 - train/epoch__MIN": 1.96,
      "brisk-pond-1 - train/epoch__MAX": 1.96
    },
    {
      "Step": 702,
      "brisk-pond-1 - train/epoch": 1.96,
      "brisk-pond-1 - train/epoch__MIN": 1.96,
      "brisk-pond-1 - train/epoch__MAX": 1.96
    },
    {
      "Step": 703,
      "brisk-pond-1 - train/epoch": 1.96,
      "brisk-pond-1 - train/epoch__MIN": 1.96,
      "brisk-pond-1 - train/epoch__MAX": 1.96
    },
    {
      "Step": 704,
      "brisk-pond-1 - train/epoch": 1.97,
      "brisk-pond-1 - train/epoch__MIN": 1.97,
      "brisk-pond-1 - train/epoch__MAX": 1.97
    },
    {
      "Step": 705,
      "brisk-pond-1 - train/epoch": 1.97,
      "brisk-pond-1 - train/epoch__MIN": 1.97,
      "brisk-pond-1 - train/epoch__MAX": 1.97
    },
    {
      "Step": 706,
      "brisk-pond-1 - train/epoch": 1.97,
      "brisk-pond-1 - train/epoch__MIN": 1.97,
      "brisk-pond-1 - train/epoch__MAX": 1.97
    },
    {
      "Step": 707,
      "brisk-pond-1 - train/epoch": 1.98,
      "brisk-pond-1 - train/epoch__MIN": 1.98,
      "brisk-pond-1 - train/epoch__MAX": 1.98
    },
    {
      "Step": 708,
      "brisk-pond-1 - train/epoch": 1.98,
      "brisk-pond-1 - train/epoch__MIN": 1.98,
      "brisk-pond-1 - train/epoch__MAX": 1.98
    },
    {
      "Step": 709,
      "brisk-pond-1 - train/epoch": 1.98,
      "brisk-pond-1 - train/epoch__MIN": 1.98,
      "brisk-pond-1 - train/epoch__MAX": 1.98
    },
    {
      "Step": 710,
      "brisk-pond-1 - train/epoch": 1.98,
      "brisk-pond-1 - train/epoch__MIN": 1.98,
      "brisk-pond-1 - train/epoch__MAX": 1.98
    },
    {
      "Step": 711,
      "brisk-pond-1 - train/epoch": 1.99,
      "brisk-pond-1 - train/epoch__MIN": 1.99,
      "brisk-pond-1 - train/epoch__MAX": 1.99
    },
    {
      "Step": 712,
      "brisk-pond-1 - train/epoch": 1.99,
      "brisk-pond-1 - train/epoch__MIN": 1.99,
      "brisk-pond-1 - train/epoch__MAX": 1.99
    },
    {
      "Step": 713,
      "brisk-pond-1 - train/epoch": 1.99,
      "brisk-pond-1 - train/epoch__MIN": 1.99,
      "brisk-pond-1 - train/epoch__MAX": 1.99
    },
    {
      "Step": 714,
      "brisk-pond-1 - train/epoch": 2,
      "brisk-pond-1 - train/epoch__MIN": 2,
      "brisk-pond-1 - train/epoch__MAX": 2
    },
    {
      "Step": 715,
      "brisk-pond-1 - train/epoch": 2,
      "brisk-pond-1 - train/epoch__MIN": 2,
      "brisk-pond-1 - train/epoch__MAX": 2
    },
    {
      "Step": 716,
      "brisk-pond-1 - train/epoch": 2,
      "brisk-pond-1 - train/epoch__MIN": 2,
      "brisk-pond-1 - train/epoch__MAX": 2
    },
    {
      "Step": 717,
      "brisk-pond-1 - train/epoch": 2,
      "brisk-pond-1 - train/epoch__MIN": 2,
      "brisk-pond-1 - train/epoch__MAX": 2
    },
    {
      "Step": 718,
      "brisk-pond-1 - train/epoch": 2.01,
      "brisk-pond-1 - train/epoch__MIN": 2.01,
      "brisk-pond-1 - train/epoch__MAX": 2.01
    },
    {
      "Step": 719,
      "brisk-pond-1 - train/epoch": 2.01,
      "brisk-pond-1 - train/epoch__MIN": 2.01,
      "brisk-pond-1 - train/epoch__MAX": 2.01
    },
    {
      "Step": 720,
      "brisk-pond-1 - train/epoch": 2.01,
      "brisk-pond-1 - train/epoch__MIN": 2.01,
      "brisk-pond-1 - train/epoch__MAX": 2.01
    },
    {
      "Step": 721,
      "brisk-pond-1 - train/epoch": 2.02,
      "brisk-pond-1 - train/epoch__MIN": 2.02,
      "brisk-pond-1 - train/epoch__MAX": 2.02
    },
    {
      "Step": 722,
      "brisk-pond-1 - train/epoch": 2.02,
      "brisk-pond-1 - train/epoch__MIN": 2.02,
      "brisk-pond-1 - train/epoch__MAX": 2.02
    },
    {
      "Step": 723,
      "brisk-pond-1 - train/epoch": 2.02,
      "brisk-pond-1 - train/epoch__MIN": 2.02,
      "brisk-pond-1 - train/epoch__MAX": 2.02
    },
    {
      "Step": 724,
      "brisk-pond-1 - train/epoch": 2.02,
      "brisk-pond-1 - train/epoch__MIN": 2.02,
      "brisk-pond-1 - train/epoch__MAX": 2.02
    },
    {
      "Step": 725,
      "brisk-pond-1 - train/epoch": 2.03,
      "brisk-pond-1 - train/epoch__MIN": 2.03,
      "brisk-pond-1 - train/epoch__MAX": 2.03
    },
    {
      "Step": 726,
      "brisk-pond-1 - train/epoch": 2.03,
      "brisk-pond-1 - train/epoch__MIN": 2.03,
      "brisk-pond-1 - train/epoch__MAX": 2.03
    },
    {
      "Step": 727,
      "brisk-pond-1 - train/epoch": 2.03,
      "brisk-pond-1 - train/epoch__MIN": 2.03,
      "brisk-pond-1 - train/epoch__MAX": 2.03
    },
    {
      "Step": 728,
      "brisk-pond-1 - train/epoch": 2.03,
      "brisk-pond-1 - train/epoch__MIN": 2.03,
      "brisk-pond-1 - train/epoch__MAX": 2.03
    },
    {
      "Step": 729,
      "brisk-pond-1 - train/epoch": 2.04,
      "brisk-pond-1 - train/epoch__MIN": 2.04,
      "brisk-pond-1 - train/epoch__MAX": 2.04
    },
    {
      "Step": 730,
      "brisk-pond-1 - train/epoch": 2.04,
      "brisk-pond-1 - train/epoch__MIN": 2.04,
      "brisk-pond-1 - train/epoch__MAX": 2.04
    },
    {
      "Step": 731,
      "brisk-pond-1 - train/epoch": 2.04,
      "brisk-pond-1 - train/epoch__MIN": 2.04,
      "brisk-pond-1 - train/epoch__MAX": 2.04
    },
    {
      "Step": 732,
      "brisk-pond-1 - train/epoch": 2.05,
      "brisk-pond-1 - train/epoch__MIN": 2.05,
      "brisk-pond-1 - train/epoch__MAX": 2.05
    },
    {
      "Step": 733,
      "brisk-pond-1 - train/epoch": 2.05,
      "brisk-pond-1 - train/epoch__MIN": 2.05,
      "brisk-pond-1 - train/epoch__MAX": 2.05
    },
    {
      "Step": 734,
      "brisk-pond-1 - train/epoch": 2.05,
      "brisk-pond-1 - train/epoch__MIN": 2.05,
      "brisk-pond-1 - train/epoch__MAX": 2.05
    },
    {
      "Step": 735,
      "brisk-pond-1 - train/epoch": 2.05,
      "brisk-pond-1 - train/epoch__MIN": 2.05,
      "brisk-pond-1 - train/epoch__MAX": 2.05
    },
    {
      "Step": 736,
      "brisk-pond-1 - train/epoch": 2.06,
      "brisk-pond-1 - train/epoch__MIN": 2.06,
      "brisk-pond-1 - train/epoch__MAX": 2.06
    },
    {
      "Step": 737,
      "brisk-pond-1 - train/epoch": 2.06,
      "brisk-pond-1 - train/epoch__MIN": 2.06,
      "brisk-pond-1 - train/epoch__MAX": 2.06
    },
    {
      "Step": 738,
      "brisk-pond-1 - train/epoch": 2.06,
      "brisk-pond-1 - train/epoch__MIN": 2.06,
      "brisk-pond-1 - train/epoch__MAX": 2.06
    },
    {
      "Step": 739,
      "brisk-pond-1 - train/epoch": 2.07,
      "brisk-pond-1 - train/epoch__MIN": 2.07,
      "brisk-pond-1 - train/epoch__MAX": 2.07
    },
    {
      "Step": 740,
      "brisk-pond-1 - train/epoch": 2.07,
      "brisk-pond-1 - train/epoch__MIN": 2.07,
      "brisk-pond-1 - train/epoch__MAX": 2.07
    },
    {
      "Step": 741,
      "brisk-pond-1 - train/epoch": 2.07,
      "brisk-pond-1 - train/epoch__MIN": 2.07,
      "brisk-pond-1 - train/epoch__MAX": 2.07
    },
    {
      "Step": 742,
      "brisk-pond-1 - train/epoch": 2.07,
      "brisk-pond-1 - train/epoch__MIN": 2.07,
      "brisk-pond-1 - train/epoch__MAX": 2.07
    },
    {
      "Step": 743,
      "brisk-pond-1 - train/epoch": 2.08,
      "brisk-pond-1 - train/epoch__MIN": 2.08,
      "brisk-pond-1 - train/epoch__MAX": 2.08
    },
    {
      "Step": 744,
      "brisk-pond-1 - train/epoch": 2.08,
      "brisk-pond-1 - train/epoch__MIN": 2.08,
      "brisk-pond-1 - train/epoch__MAX": 2.08
    },
    {
      "Step": 745,
      "brisk-pond-1 - train/epoch": 2.08,
      "brisk-pond-1 - train/epoch__MIN": 2.08,
      "brisk-pond-1 - train/epoch__MAX": 2.08
    },
    {
      "Step": 746,
      "brisk-pond-1 - train/epoch": 2.09,
      "brisk-pond-1 - train/epoch__MIN": 2.09,
      "brisk-pond-1 - train/epoch__MAX": 2.09
    },
    {
      "Step": 747,
      "brisk-pond-1 - train/epoch": 2.09,
      "brisk-pond-1 - train/epoch__MIN": 2.09,
      "brisk-pond-1 - train/epoch__MAX": 2.09
    },
    {
      "Step": 748,
      "brisk-pond-1 - train/epoch": 2.09,
      "brisk-pond-1 - train/epoch__MIN": 2.09,
      "brisk-pond-1 - train/epoch__MAX": 2.09
    },
    {
      "Step": 749,
      "brisk-pond-1 - train/epoch": 2.09,
      "brisk-pond-1 - train/epoch__MIN": 2.09,
      "brisk-pond-1 - train/epoch__MAX": 2.09
    },
    {
      "Step": 750,
      "brisk-pond-1 - train/epoch": 2.1,
      "brisk-pond-1 - train/epoch__MIN": 2.1,
      "brisk-pond-1 - train/epoch__MAX": 2.1
    },
    {
      "Step": 751,
      "brisk-pond-1 - train/epoch": 2.1,
      "brisk-pond-1 - train/epoch__MIN": 2.1,
      "brisk-pond-1 - train/epoch__MAX": 2.1
    },
    {
      "Step": 752,
      "brisk-pond-1 - train/epoch": 2.1,
      "brisk-pond-1 - train/epoch__MIN": 2.1,
      "brisk-pond-1 - train/epoch__MAX": 2.1
    },
    {
      "Step": 753,
      "brisk-pond-1 - train/epoch": 2.1,
      "brisk-pond-1 - train/epoch__MIN": 2.1,
      "brisk-pond-1 - train/epoch__MAX": 2.1
    },
    {
      "Step": 754,
      "brisk-pond-1 - train/epoch": 2.11,
      "brisk-pond-1 - train/epoch__MIN": 2.11,
      "brisk-pond-1 - train/epoch__MAX": 2.11
    },
    {
      "Step": 755,
      "brisk-pond-1 - train/epoch": 2.11,
      "brisk-pond-1 - train/epoch__MIN": 2.11,
      "brisk-pond-1 - train/epoch__MAX": 2.11
    },
    {
      "Step": 756,
      "brisk-pond-1 - train/epoch": 2.11,
      "brisk-pond-1 - train/epoch__MIN": 2.11,
      "brisk-pond-1 - train/epoch__MAX": 2.11
    },
    {
      "Step": 757,
      "brisk-pond-1 - train/epoch": 2.12,
      "brisk-pond-1 - train/epoch__MIN": 2.12,
      "brisk-pond-1 - train/epoch__MAX": 2.12
    },
    {
      "Step": 758,
      "brisk-pond-1 - train/epoch": 2.12,
      "brisk-pond-1 - train/epoch__MIN": 2.12,
      "brisk-pond-1 - train/epoch__MAX": 2.12
    },
    {
      "Step": 759,
      "brisk-pond-1 - train/epoch": 2.12,
      "brisk-pond-1 - train/epoch__MIN": 2.12,
      "brisk-pond-1 - train/epoch__MAX": 2.12
    },
    {
      "Step": 760,
      "brisk-pond-1 - train/epoch": 2.12,
      "brisk-pond-1 - train/epoch__MIN": 2.12,
      "brisk-pond-1 - train/epoch__MAX": 2.12
    },
    {
      "Step": 761,
      "brisk-pond-1 - train/epoch": 2.13,
      "brisk-pond-1 - train/epoch__MIN": 2.13,
      "brisk-pond-1 - train/epoch__MAX": 2.13
    },
    {
      "Step": 762,
      "brisk-pond-1 - train/epoch": 2.13,
      "brisk-pond-1 - train/epoch__MIN": 2.13,
      "brisk-pond-1 - train/epoch__MAX": 2.13
    },
    {
      "Step": 763,
      "brisk-pond-1 - train/epoch": 2.13,
      "brisk-pond-1 - train/epoch__MIN": 2.13,
      "brisk-pond-1 - train/epoch__MAX": 2.13
    },
    {
      "Step": 764,
      "brisk-pond-1 - train/epoch": 2.14,
      "brisk-pond-1 - train/epoch__MIN": 2.14,
      "brisk-pond-1 - train/epoch__MAX": 2.14
    },
    {
      "Step": 765,
      "brisk-pond-1 - train/epoch": 2.14,
      "brisk-pond-1 - train/epoch__MIN": 2.14,
      "brisk-pond-1 - train/epoch__MAX": 2.14
    },
    {
      "Step": 766,
      "brisk-pond-1 - train/epoch": 2.14,
      "brisk-pond-1 - train/epoch__MIN": 2.14,
      "brisk-pond-1 - train/epoch__MAX": 2.14
    },
    {
      "Step": 767,
      "brisk-pond-1 - train/epoch": 2.14,
      "brisk-pond-1 - train/epoch__MIN": 2.14,
      "brisk-pond-1 - train/epoch__MAX": 2.14
    },
    {
      "Step": 768,
      "brisk-pond-1 - train/epoch": 2.15,
      "brisk-pond-1 - train/epoch__MIN": 2.15,
      "brisk-pond-1 - train/epoch__MAX": 2.15
    },
    {
      "Step": 769,
      "brisk-pond-1 - train/epoch": 2.15,
      "brisk-pond-1 - train/epoch__MIN": 2.15,
      "brisk-pond-1 - train/epoch__MAX": 2.15
    },
    {
      "Step": 770,
      "brisk-pond-1 - train/epoch": 2.15,
      "brisk-pond-1 - train/epoch__MIN": 2.15,
      "brisk-pond-1 - train/epoch__MAX": 2.15
    },
    {
      "Step": 771,
      "brisk-pond-1 - train/epoch": 2.16,
      "brisk-pond-1 - train/epoch__MIN": 2.16,
      "brisk-pond-1 - train/epoch__MAX": 2.16
    },
    {
      "Step": 772,
      "brisk-pond-1 - train/epoch": 2.16,
      "brisk-pond-1 - train/epoch__MIN": 2.16,
      "brisk-pond-1 - train/epoch__MAX": 2.16
    },
    {
      "Step": 773,
      "brisk-pond-1 - train/epoch": 2.16,
      "brisk-pond-1 - train/epoch__MIN": 2.16,
      "brisk-pond-1 - train/epoch__MAX": 2.16
    },
    {
      "Step": 774,
      "brisk-pond-1 - train/epoch": 2.16,
      "brisk-pond-1 - train/epoch__MIN": 2.16,
      "brisk-pond-1 - train/epoch__MAX": 2.16
    },
    {
      "Step": 775,
      "brisk-pond-1 - train/epoch": 2.17,
      "brisk-pond-1 - train/epoch__MIN": 2.17,
      "brisk-pond-1 - train/epoch__MAX": 2.17
    },
    {
      "Step": 776,
      "brisk-pond-1 - train/epoch": 2.17,
      "brisk-pond-1 - train/epoch__MIN": 2.17,
      "brisk-pond-1 - train/epoch__MAX": 2.17
    },
    {
      "Step": 777,
      "brisk-pond-1 - train/epoch": 2.17,
      "brisk-pond-1 - train/epoch__MIN": 2.17,
      "brisk-pond-1 - train/epoch__MAX": 2.17
    },
    {
      "Step": 778,
      "brisk-pond-1 - train/epoch": 2.17,
      "brisk-pond-1 - train/epoch__MIN": 2.17,
      "brisk-pond-1 - train/epoch__MAX": 2.17
    },
    {
      "Step": 779,
      "brisk-pond-1 - train/epoch": 2.18,
      "brisk-pond-1 - train/epoch__MIN": 2.18,
      "brisk-pond-1 - train/epoch__MAX": 2.18
    },
    {
      "Step": 780,
      "brisk-pond-1 - train/epoch": 2.18,
      "brisk-pond-1 - train/epoch__MIN": 2.18,
      "brisk-pond-1 - train/epoch__MAX": 2.18
    },
    {
      "Step": 781,
      "brisk-pond-1 - train/epoch": 2.18,
      "brisk-pond-1 - train/epoch__MIN": 2.18,
      "brisk-pond-1 - train/epoch__MAX": 2.18
    },
    {
      "Step": 782,
      "brisk-pond-1 - train/epoch": 2.19,
      "brisk-pond-1 - train/epoch__MIN": 2.19,
      "brisk-pond-1 - train/epoch__MAX": 2.19
    },
    {
      "Step": 783,
      "brisk-pond-1 - train/epoch": 2.19,
      "brisk-pond-1 - train/epoch__MIN": 2.19,
      "brisk-pond-1 - train/epoch__MAX": 2.19
    },
    {
      "Step": 784,
      "brisk-pond-1 - train/epoch": 2.19,
      "brisk-pond-1 - train/epoch__MIN": 2.19,
      "brisk-pond-1 - train/epoch__MAX": 2.19
    },
    {
      "Step": 785,
      "brisk-pond-1 - train/epoch": 2.19,
      "brisk-pond-1 - train/epoch__MIN": 2.19,
      "brisk-pond-1 - train/epoch__MAX": 2.19
    },
    {
      "Step": 786,
      "brisk-pond-1 - train/epoch": 2.2,
      "brisk-pond-1 - train/epoch__MIN": 2.2,
      "brisk-pond-1 - train/epoch__MAX": 2.2
    },
    {
      "Step": 787,
      "brisk-pond-1 - train/epoch": 2.2,
      "brisk-pond-1 - train/epoch__MIN": 2.2,
      "brisk-pond-1 - train/epoch__MAX": 2.2
    },
    {
      "Step": 788,
      "brisk-pond-1 - train/epoch": 2.2,
      "brisk-pond-1 - train/epoch__MIN": 2.2,
      "brisk-pond-1 - train/epoch__MAX": 2.2
    },
    {
      "Step": 789,
      "brisk-pond-1 - train/epoch": 2.21,
      "brisk-pond-1 - train/epoch__MIN": 2.21,
      "brisk-pond-1 - train/epoch__MAX": 2.21
    },
    {
      "Step": 790,
      "brisk-pond-1 - train/epoch": 2.21,
      "brisk-pond-1 - train/epoch__MIN": 2.21,
      "brisk-pond-1 - train/epoch__MAX": 2.21
    },
    {
      "Step": 791,
      "brisk-pond-1 - train/epoch": 2.21,
      "brisk-pond-1 - train/epoch__MIN": 2.21,
      "brisk-pond-1 - train/epoch__MAX": 2.21
    },
    {
      "Step": 792,
      "brisk-pond-1 - train/epoch": 2.21,
      "brisk-pond-1 - train/epoch__MIN": 2.21,
      "brisk-pond-1 - train/epoch__MAX": 2.21
    },
    {
      "Step": 793,
      "brisk-pond-1 - train/epoch": 2.22,
      "brisk-pond-1 - train/epoch__MIN": 2.22,
      "brisk-pond-1 - train/epoch__MAX": 2.22
    },
    {
      "Step": 794,
      "brisk-pond-1 - train/epoch": 2.22,
      "brisk-pond-1 - train/epoch__MIN": 2.22,
      "brisk-pond-1 - train/epoch__MAX": 2.22
    },
    {
      "Step": 795,
      "brisk-pond-1 - train/epoch": 2.22,
      "brisk-pond-1 - train/epoch__MIN": 2.22,
      "brisk-pond-1 - train/epoch__MAX": 2.22
    },
    {
      "Step": 796,
      "brisk-pond-1 - train/epoch": 2.23,
      "brisk-pond-1 - train/epoch__MIN": 2.23,
      "brisk-pond-1 - train/epoch__MAX": 2.23
    },
    {
      "Step": 797,
      "brisk-pond-1 - train/epoch": 2.23,
      "brisk-pond-1 - train/epoch__MIN": 2.23,
      "brisk-pond-1 - train/epoch__MAX": 2.23
    },
    {
      "Step": 798,
      "brisk-pond-1 - train/epoch": 2.23,
      "brisk-pond-1 - train/epoch__MIN": 2.23,
      "brisk-pond-1 - train/epoch__MAX": 2.23
    },
    {
      "Step": 799,
      "brisk-pond-1 - train/epoch": 2.23,
      "brisk-pond-1 - train/epoch__MIN": 2.23,
      "brisk-pond-1 - train/epoch__MAX": 2.23
    },
    {
      "Step": 800,
      "brisk-pond-1 - train/epoch": 2.24,
      "brisk-pond-1 - train/epoch__MIN": 2.24,
      "brisk-pond-1 - train/epoch__MAX": 2.24
    },
    {
      "Step": 801,
      "brisk-pond-1 - train/epoch": 2.24,
      "brisk-pond-1 - train/epoch__MIN": 2.24,
      "brisk-pond-1 - train/epoch__MAX": 2.24
    },
    {
      "Step": 802,
      "brisk-pond-1 - train/epoch": 2.24,
      "brisk-pond-1 - train/epoch__MIN": 2.24,
      "brisk-pond-1 - train/epoch__MAX": 2.24
    },
    {
      "Step": 803,
      "brisk-pond-1 - train/epoch": 2.24,
      "brisk-pond-1 - train/epoch__MIN": 2.24,
      "brisk-pond-1 - train/epoch__MAX": 2.24
    },
    {
      "Step": 804,
      "brisk-pond-1 - train/epoch": 2.24,
      "brisk-pond-1 - train/epoch__MIN": 2.24,
      "brisk-pond-1 - train/epoch__MAX": 2.24
    },
    {
      "Step": 805,
      "brisk-pond-1 - train/epoch": 2.25,
      "brisk-pond-1 - train/epoch__MIN": 2.25,
      "brisk-pond-1 - train/epoch__MAX": 2.25
    },
    {
      "Step": 806,
      "brisk-pond-1 - train/epoch": 2.25,
      "brisk-pond-1 - train/epoch__MIN": 2.25,
      "brisk-pond-1 - train/epoch__MAX": 2.25
    },
    {
      "Step": 807,
      "brisk-pond-1 - train/epoch": 2.25,
      "brisk-pond-1 - train/epoch__MIN": 2.25,
      "brisk-pond-1 - train/epoch__MAX": 2.25
    },
    {
      "Step": 808,
      "brisk-pond-1 - train/epoch": 2.26,
      "brisk-pond-1 - train/epoch__MIN": 2.26,
      "brisk-pond-1 - train/epoch__MAX": 2.26
    },
    {
      "Step": 809,
      "brisk-pond-1 - train/epoch": 2.26,
      "brisk-pond-1 - train/epoch__MIN": 2.26,
      "brisk-pond-1 - train/epoch__MAX": 2.26
    },
    {
      "Step": 810,
      "brisk-pond-1 - train/epoch": 2.26,
      "brisk-pond-1 - train/epoch__MIN": 2.26,
      "brisk-pond-1 - train/epoch__MAX": 2.26
    },
    {
      "Step": 811,
      "brisk-pond-1 - train/epoch": 2.26,
      "brisk-pond-1 - train/epoch__MIN": 2.26,
      "brisk-pond-1 - train/epoch__MAX": 2.26
    },
    {
      "Step": 812,
      "brisk-pond-1 - train/epoch": 2.27,
      "brisk-pond-1 - train/epoch__MIN": 2.27,
      "brisk-pond-1 - train/epoch__MAX": 2.27
    },
    {
      "Step": 813,
      "brisk-pond-1 - train/epoch": 2.27,
      "brisk-pond-1 - train/epoch__MIN": 2.27,
      "brisk-pond-1 - train/epoch__MAX": 2.27
    },
    {
      "Step": 814,
      "brisk-pond-1 - train/epoch": 2.27,
      "brisk-pond-1 - train/epoch__MIN": 2.27,
      "brisk-pond-1 - train/epoch__MAX": 2.27
    },
    {
      "Step": 815,
      "brisk-pond-1 - train/epoch": 2.28,
      "brisk-pond-1 - train/epoch__MIN": 2.28,
      "brisk-pond-1 - train/epoch__MAX": 2.28
    },
    {
      "Step": 816,
      "brisk-pond-1 - train/epoch": 2.28,
      "brisk-pond-1 - train/epoch__MIN": 2.28,
      "brisk-pond-1 - train/epoch__MAX": 2.28
    },
    {
      "Step": 817,
      "brisk-pond-1 - train/epoch": 2.28,
      "brisk-pond-1 - train/epoch__MIN": 2.28,
      "brisk-pond-1 - train/epoch__MAX": 2.28
    },
    {
      "Step": 818,
      "brisk-pond-1 - train/epoch": 2.28,
      "brisk-pond-1 - train/epoch__MIN": 2.28,
      "brisk-pond-1 - train/epoch__MAX": 2.28
    },
    {
      "Step": 819,
      "brisk-pond-1 - train/epoch": 2.29,
      "brisk-pond-1 - train/epoch__MIN": 2.29,
      "brisk-pond-1 - train/epoch__MAX": 2.29
    },
    {
      "Step": 820,
      "brisk-pond-1 - train/epoch": 2.29,
      "brisk-pond-1 - train/epoch__MIN": 2.29,
      "brisk-pond-1 - train/epoch__MAX": 2.29
    },
    {
      "Step": 821,
      "brisk-pond-1 - train/epoch": 2.29,
      "brisk-pond-1 - train/epoch__MIN": 2.29,
      "brisk-pond-1 - train/epoch__MAX": 2.29
    },
    {
      "Step": 822,
      "brisk-pond-1 - train/epoch": 2.3,
      "brisk-pond-1 - train/epoch__MIN": 2.3,
      "brisk-pond-1 - train/epoch__MAX": 2.3
    },
    {
      "Step": 823,
      "brisk-pond-1 - train/epoch": 2.3,
      "brisk-pond-1 - train/epoch__MIN": 2.3,
      "brisk-pond-1 - train/epoch__MAX": 2.3
    },
    {
      "Step": 824,
      "brisk-pond-1 - train/epoch": 2.3,
      "brisk-pond-1 - train/epoch__MIN": 2.3,
      "brisk-pond-1 - train/epoch__MAX": 2.3
    },
    {
      "Step": 825,
      "brisk-pond-1 - train/epoch": 2.3,
      "brisk-pond-1 - train/epoch__MIN": 2.3,
      "brisk-pond-1 - train/epoch__MAX": 2.3
    },
    {
      "Step": 826,
      "brisk-pond-1 - train/epoch": 2.31,
      "brisk-pond-1 - train/epoch__MIN": 2.31,
      "brisk-pond-1 - train/epoch__MAX": 2.31
    },
    {
      "Step": 827,
      "brisk-pond-1 - train/epoch": 2.31,
      "brisk-pond-1 - train/epoch__MIN": 2.31,
      "brisk-pond-1 - train/epoch__MAX": 2.31
    },
    {
      "Step": 828,
      "brisk-pond-1 - train/epoch": 2.31,
      "brisk-pond-1 - train/epoch__MIN": 2.31,
      "brisk-pond-1 - train/epoch__MAX": 2.31
    },
    {
      "Step": 829,
      "brisk-pond-1 - train/epoch": 2.32,
      "brisk-pond-1 - train/epoch__MIN": 2.32,
      "brisk-pond-1 - train/epoch__MAX": 2.32
    },
    {
      "Step": 830,
      "brisk-pond-1 - train/epoch": 2.32,
      "brisk-pond-1 - train/epoch__MIN": 2.32,
      "brisk-pond-1 - train/epoch__MAX": 2.32
    },
    {
      "Step": 831,
      "brisk-pond-1 - train/epoch": 2.32,
      "brisk-pond-1 - train/epoch__MIN": 2.32,
      "brisk-pond-1 - train/epoch__MAX": 2.32
    },
    {
      "Step": 832,
      "brisk-pond-1 - train/epoch": 2.32,
      "brisk-pond-1 - train/epoch__MIN": 2.32,
      "brisk-pond-1 - train/epoch__MAX": 2.32
    },
    {
      "Step": 833,
      "brisk-pond-1 - train/epoch": 2.33,
      "brisk-pond-1 - train/epoch__MIN": 2.33,
      "brisk-pond-1 - train/epoch__MAX": 2.33
    },
    {
      "Step": 834,
      "brisk-pond-1 - train/epoch": 2.33,
      "brisk-pond-1 - train/epoch__MIN": 2.33,
      "brisk-pond-1 - train/epoch__MAX": 2.33
    },
    {
      "Step": 835,
      "brisk-pond-1 - train/epoch": 2.33,
      "brisk-pond-1 - train/epoch__MIN": 2.33,
      "brisk-pond-1 - train/epoch__MAX": 2.33
    },
    {
      "Step": 836,
      "brisk-pond-1 - train/epoch": 2.33,
      "brisk-pond-1 - train/epoch__MIN": 2.33,
      "brisk-pond-1 - train/epoch__MAX": 2.33
    },
    {
      "Step": 837,
      "brisk-pond-1 - train/epoch": 2.34,
      "brisk-pond-1 - train/epoch__MIN": 2.34,
      "brisk-pond-1 - train/epoch__MAX": 2.34
    },
    {
      "Step": 838,
      "brisk-pond-1 - train/epoch": 2.34,
      "brisk-pond-1 - train/epoch__MIN": 2.34,
      "brisk-pond-1 - train/epoch__MAX": 2.34
    },
    {
      "Step": 839,
      "brisk-pond-1 - train/epoch": 2.34,
      "brisk-pond-1 - train/epoch__MIN": 2.34,
      "brisk-pond-1 - train/epoch__MAX": 2.34
    },
    {
      "Step": 840,
      "brisk-pond-1 - train/epoch": 2.35,
      "brisk-pond-1 - train/epoch__MIN": 2.35,
      "brisk-pond-1 - train/epoch__MAX": 2.35
    },
    {
      "Step": 841,
      "brisk-pond-1 - train/epoch": 2.35,
      "brisk-pond-1 - train/epoch__MIN": 2.35,
      "brisk-pond-1 - train/epoch__MAX": 2.35
    },
    {
      "Step": 842,
      "brisk-pond-1 - train/epoch": 2.35,
      "brisk-pond-1 - train/epoch__MIN": 2.35,
      "brisk-pond-1 - train/epoch__MAX": 2.35
    },
    {
      "Step": 843,
      "brisk-pond-1 - train/epoch": 2.35,
      "brisk-pond-1 - train/epoch__MIN": 2.35,
      "brisk-pond-1 - train/epoch__MAX": 2.35
    },
    {
      "Step": 844,
      "brisk-pond-1 - train/epoch": 2.36,
      "brisk-pond-1 - train/epoch__MIN": 2.36,
      "brisk-pond-1 - train/epoch__MAX": 2.36
    },
    {
      "Step": 845,
      "brisk-pond-1 - train/epoch": 2.36,
      "brisk-pond-1 - train/epoch__MIN": 2.36,
      "brisk-pond-1 - train/epoch__MAX": 2.36
    },
    {
      "Step": 846,
      "brisk-pond-1 - train/epoch": 2.36,
      "brisk-pond-1 - train/epoch__MIN": 2.36,
      "brisk-pond-1 - train/epoch__MAX": 2.36
    },
    {
      "Step": 847,
      "brisk-pond-1 - train/epoch": 2.37,
      "brisk-pond-1 - train/epoch__MIN": 2.37,
      "brisk-pond-1 - train/epoch__MAX": 2.37
    },
    {
      "Step": 848,
      "brisk-pond-1 - train/epoch": 2.37,
      "brisk-pond-1 - train/epoch__MIN": 2.37,
      "brisk-pond-1 - train/epoch__MAX": 2.37
    },
    {
      "Step": 849,
      "brisk-pond-1 - train/epoch": 2.37,
      "brisk-pond-1 - train/epoch__MIN": 2.37,
      "brisk-pond-1 - train/epoch__MAX": 2.37
    },
    {
      "Step": 850,
      "brisk-pond-1 - train/epoch": 2.37,
      "brisk-pond-1 - train/epoch__MIN": 2.37,
      "brisk-pond-1 - train/epoch__MAX": 2.37
    },
    {
      "Step": 851,
      "brisk-pond-1 - train/epoch": 2.38,
      "brisk-pond-1 - train/epoch__MIN": 2.38,
      "brisk-pond-1 - train/epoch__MAX": 2.38
    },
    {
      "Step": 852,
      "brisk-pond-1 - train/epoch": 2.38,
      "brisk-pond-1 - train/epoch__MIN": 2.38,
      "brisk-pond-1 - train/epoch__MAX": 2.38
    },
    {
      "Step": 853,
      "brisk-pond-1 - train/epoch": 2.38,
      "brisk-pond-1 - train/epoch__MIN": 2.38,
      "brisk-pond-1 - train/epoch__MAX": 2.38
    },
    {
      "Step": 854,
      "brisk-pond-1 - train/epoch": 2.39,
      "brisk-pond-1 - train/epoch__MIN": 2.39,
      "brisk-pond-1 - train/epoch__MAX": 2.39
    },
    {
      "Step": 855,
      "brisk-pond-1 - train/epoch": 2.39,
      "brisk-pond-1 - train/epoch__MIN": 2.39,
      "brisk-pond-1 - train/epoch__MAX": 2.39
    },
    {
      "Step": 856,
      "brisk-pond-1 - train/epoch": 2.39,
      "brisk-pond-1 - train/epoch__MIN": 2.39,
      "brisk-pond-1 - train/epoch__MAX": 2.39
    },
    {
      "Step": 857,
      "brisk-pond-1 - train/epoch": 2.39,
      "brisk-pond-1 - train/epoch__MIN": 2.39,
      "brisk-pond-1 - train/epoch__MAX": 2.39
    },
    {
      "Step": 858,
      "brisk-pond-1 - train/epoch": 2.4,
      "brisk-pond-1 - train/epoch__MIN": 2.4,
      "brisk-pond-1 - train/epoch__MAX": 2.4
    },
    {
      "Step": 859,
      "brisk-pond-1 - train/epoch": 2.4,
      "brisk-pond-1 - train/epoch__MIN": 2.4,
      "brisk-pond-1 - train/epoch__MAX": 2.4
    },
    {
      "Step": 860,
      "brisk-pond-1 - train/epoch": 2.4,
      "brisk-pond-1 - train/epoch__MIN": 2.4,
      "brisk-pond-1 - train/epoch__MAX": 2.4
    },
    {
      "Step": 861,
      "brisk-pond-1 - train/epoch": 2.4,
      "brisk-pond-1 - train/epoch__MIN": 2.4,
      "brisk-pond-1 - train/epoch__MAX": 2.4
    },
    {
      "Step": 862,
      "brisk-pond-1 - train/epoch": 2.41,
      "brisk-pond-1 - train/epoch__MIN": 2.41,
      "brisk-pond-1 - train/epoch__MAX": 2.41
    },
    {
      "Step": 863,
      "brisk-pond-1 - train/epoch": 2.41,
      "brisk-pond-1 - train/epoch__MIN": 2.41,
      "brisk-pond-1 - train/epoch__MAX": 2.41
    },
    {
      "Step": 864,
      "brisk-pond-1 - train/epoch": 2.41,
      "brisk-pond-1 - train/epoch__MIN": 2.41,
      "brisk-pond-1 - train/epoch__MAX": 2.41
    },
    {
      "Step": 865,
      "brisk-pond-1 - train/epoch": 2.42,
      "brisk-pond-1 - train/epoch__MIN": 2.42,
      "brisk-pond-1 - train/epoch__MAX": 2.42
    },
    {
      "Step": 866,
      "brisk-pond-1 - train/epoch": 2.42,
      "brisk-pond-1 - train/epoch__MIN": 2.42,
      "brisk-pond-1 - train/epoch__MAX": 2.42
    },
    {
      "Step": 867,
      "brisk-pond-1 - train/epoch": 2.42,
      "brisk-pond-1 - train/epoch__MIN": 2.42,
      "brisk-pond-1 - train/epoch__MAX": 2.42
    },
    {
      "Step": 868,
      "brisk-pond-1 - train/epoch": 2.42,
      "brisk-pond-1 - train/epoch__MIN": 2.42,
      "brisk-pond-1 - train/epoch__MAX": 2.42
    },
    {
      "Step": 869,
      "brisk-pond-1 - train/epoch": 2.43,
      "brisk-pond-1 - train/epoch__MIN": 2.43,
      "brisk-pond-1 - train/epoch__MAX": 2.43
    },
    {
      "Step": 870,
      "brisk-pond-1 - train/epoch": 2.43,
      "brisk-pond-1 - train/epoch__MIN": 2.43,
      "brisk-pond-1 - train/epoch__MAX": 2.43
    },
    {
      "Step": 871,
      "brisk-pond-1 - train/epoch": 2.43,
      "brisk-pond-1 - train/epoch__MIN": 2.43,
      "brisk-pond-1 - train/epoch__MAX": 2.43
    },
    {
      "Step": 872,
      "brisk-pond-1 - train/epoch": 2.44,
      "brisk-pond-1 - train/epoch__MIN": 2.44,
      "brisk-pond-1 - train/epoch__MAX": 2.44
    },
    {
      "Step": 873,
      "brisk-pond-1 - train/epoch": 2.44,
      "brisk-pond-1 - train/epoch__MIN": 2.44,
      "brisk-pond-1 - train/epoch__MAX": 2.44
    },
    {
      "Step": 874,
      "brisk-pond-1 - train/epoch": 2.44,
      "brisk-pond-1 - train/epoch__MIN": 2.44,
      "brisk-pond-1 - train/epoch__MAX": 2.44
    },
    {
      "Step": 875,
      "brisk-pond-1 - train/epoch": 2.44,
      "brisk-pond-1 - train/epoch__MIN": 2.44,
      "brisk-pond-1 - train/epoch__MAX": 2.44
    },
    {
      "Step": 876,
      "brisk-pond-1 - train/epoch": 2.45,
      "brisk-pond-1 - train/epoch__MIN": 2.45,
      "brisk-pond-1 - train/epoch__MAX": 2.45
    },
    {
      "Step": 877,
      "brisk-pond-1 - train/epoch": 2.45,
      "brisk-pond-1 - train/epoch__MIN": 2.45,
      "brisk-pond-1 - train/epoch__MAX": 2.45
    },
    {
      "Step": 878,
      "brisk-pond-1 - train/epoch": 2.45,
      "brisk-pond-1 - train/epoch__MIN": 2.45,
      "brisk-pond-1 - train/epoch__MAX": 2.45
    },
    {
      "Step": 879,
      "brisk-pond-1 - train/epoch": 2.46,
      "brisk-pond-1 - train/epoch__MIN": 2.46,
      "brisk-pond-1 - train/epoch__MAX": 2.46
    },
    {
      "Step": 880,
      "brisk-pond-1 - train/epoch": 2.46,
      "brisk-pond-1 - train/epoch__MIN": 2.46,
      "brisk-pond-1 - train/epoch__MAX": 2.46
    },
    {
      "Step": 881,
      "brisk-pond-1 - train/epoch": 2.46,
      "brisk-pond-1 - train/epoch__MIN": 2.46,
      "brisk-pond-1 - train/epoch__MAX": 2.46
    },
    {
      "Step": 882,
      "brisk-pond-1 - train/epoch": 2.46,
      "brisk-pond-1 - train/epoch__MIN": 2.46,
      "brisk-pond-1 - train/epoch__MAX": 2.46
    },
    {
      "Step": 883,
      "brisk-pond-1 - train/epoch": 2.47,
      "brisk-pond-1 - train/epoch__MIN": 2.47,
      "brisk-pond-1 - train/epoch__MAX": 2.47
    },
    {
      "Step": 884,
      "brisk-pond-1 - train/epoch": 2.47,
      "brisk-pond-1 - train/epoch__MIN": 2.47,
      "brisk-pond-1 - train/epoch__MAX": 2.47
    },
    {
      "Step": 885,
      "brisk-pond-1 - train/epoch": 2.47,
      "brisk-pond-1 - train/epoch__MIN": 2.47,
      "brisk-pond-1 - train/epoch__MAX": 2.47
    },
    {
      "Step": 886,
      "brisk-pond-1 - train/epoch": 2.47,
      "brisk-pond-1 - train/epoch__MIN": 2.47,
      "brisk-pond-1 - train/epoch__MAX": 2.47
    },
    {
      "Step": 887,
      "brisk-pond-1 - train/epoch": 2.48,
      "brisk-pond-1 - train/epoch__MIN": 2.48,
      "brisk-pond-1 - train/epoch__MAX": 2.48
    },
    {
      "Step": 888,
      "brisk-pond-1 - train/epoch": 2.48,
      "brisk-pond-1 - train/epoch__MIN": 2.48,
      "brisk-pond-1 - train/epoch__MAX": 2.48
    },
    {
      "Step": 889,
      "brisk-pond-1 - train/epoch": 2.48,
      "brisk-pond-1 - train/epoch__MIN": 2.48,
      "brisk-pond-1 - train/epoch__MAX": 2.48
    },
    {
      "Step": 890,
      "brisk-pond-1 - train/epoch": 2.49,
      "brisk-pond-1 - train/epoch__MIN": 2.49,
      "brisk-pond-1 - train/epoch__MAX": 2.49
    },
    {
      "Step": 891,
      "brisk-pond-1 - train/epoch": 2.49,
      "brisk-pond-1 - train/epoch__MIN": 2.49,
      "brisk-pond-1 - train/epoch__MAX": 2.49
    },
    {
      "Step": 892,
      "brisk-pond-1 - train/epoch": 2.49,
      "brisk-pond-1 - train/epoch__MIN": 2.49,
      "brisk-pond-1 - train/epoch__MAX": 2.49
    },
    {
      "Step": 893,
      "brisk-pond-1 - train/epoch": 2.49,
      "brisk-pond-1 - train/epoch__MIN": 2.49,
      "brisk-pond-1 - train/epoch__MAX": 2.49
    },
    {
      "Step": 894,
      "brisk-pond-1 - train/epoch": 2.5,
      "brisk-pond-1 - train/epoch__MIN": 2.5,
      "brisk-pond-1 - train/epoch__MAX": 2.5
    },
    {
      "Step": 895,
      "brisk-pond-1 - train/epoch": 2.5,
      "brisk-pond-1 - train/epoch__MIN": 2.5,
      "brisk-pond-1 - train/epoch__MAX": 2.5
    },
    {
      "Step": 896,
      "brisk-pond-1 - train/epoch": 2.5,
      "brisk-pond-1 - train/epoch__MIN": 2.5,
      "brisk-pond-1 - train/epoch__MAX": 2.5
    },
    {
      "Step": 897,
      "brisk-pond-1 - train/epoch": 2.51,
      "brisk-pond-1 - train/epoch__MIN": 2.51,
      "brisk-pond-1 - train/epoch__MAX": 2.51
    },
    {
      "Step": 898,
      "brisk-pond-1 - train/epoch": 2.51,
      "brisk-pond-1 - train/epoch__MIN": 2.51,
      "brisk-pond-1 - train/epoch__MAX": 2.51
    },
    {
      "Step": 899,
      "brisk-pond-1 - train/epoch": 2.51,
      "brisk-pond-1 - train/epoch__MIN": 2.51,
      "brisk-pond-1 - train/epoch__MAX": 2.51
    },
    {
      "Step": 900,
      "brisk-pond-1 - train/epoch": 2.51,
      "brisk-pond-1 - train/epoch__MIN": 2.51,
      "brisk-pond-1 - train/epoch__MAX": 2.51
    },
    {
      "Step": 901,
      "brisk-pond-1 - train/epoch": 2.52,
      "brisk-pond-1 - train/epoch__MIN": 2.52,
      "brisk-pond-1 - train/epoch__MAX": 2.52
    },
    {
      "Step": 902,
      "brisk-pond-1 - train/epoch": 2.52,
      "brisk-pond-1 - train/epoch__MIN": 2.52,
      "brisk-pond-1 - train/epoch__MAX": 2.52
    },
    {
      "Step": 903,
      "brisk-pond-1 - train/epoch": 2.52,
      "brisk-pond-1 - train/epoch__MIN": 2.52,
      "brisk-pond-1 - train/epoch__MAX": 2.52
    },
    {
      "Step": 904,
      "brisk-pond-1 - train/epoch": 2.53,
      "brisk-pond-1 - train/epoch__MIN": 2.53,
      "brisk-pond-1 - train/epoch__MAX": 2.53
    },
    {
      "Step": 905,
      "brisk-pond-1 - train/epoch": 2.53,
      "brisk-pond-1 - train/epoch__MIN": 2.53,
      "brisk-pond-1 - train/epoch__MAX": 2.53
    },
    {
      "Step": 906,
      "brisk-pond-1 - train/epoch": 2.53,
      "brisk-pond-1 - train/epoch__MIN": 2.53,
      "brisk-pond-1 - train/epoch__MAX": 2.53
    },
    {
      "Step": 907,
      "brisk-pond-1 - train/epoch": 2.53,
      "brisk-pond-1 - train/epoch__MIN": 2.53,
      "brisk-pond-1 - train/epoch__MAX": 2.53
    },
    {
      "Step": 908,
      "brisk-pond-1 - train/epoch": 2.54,
      "brisk-pond-1 - train/epoch__MIN": 2.54,
      "brisk-pond-1 - train/epoch__MAX": 2.54
    },
    {
      "Step": 909,
      "brisk-pond-1 - train/epoch": 2.54,
      "brisk-pond-1 - train/epoch__MIN": 2.54,
      "brisk-pond-1 - train/epoch__MAX": 2.54
    },
    {
      "Step": 910,
      "brisk-pond-1 - train/epoch": 2.54,
      "brisk-pond-1 - train/epoch__MIN": 2.54,
      "brisk-pond-1 - train/epoch__MAX": 2.54
    },
    {
      "Step": 911,
      "brisk-pond-1 - train/epoch": 2.54,
      "brisk-pond-1 - train/epoch__MIN": 2.54,
      "brisk-pond-1 - train/epoch__MAX": 2.54
    },
    {
      "Step": 912,
      "brisk-pond-1 - train/epoch": 2.55,
      "brisk-pond-1 - train/epoch__MIN": 2.55,
      "brisk-pond-1 - train/epoch__MAX": 2.55
    },
    {
      "Step": 913,
      "brisk-pond-1 - train/epoch": 2.55,
      "brisk-pond-1 - train/epoch__MIN": 2.55,
      "brisk-pond-1 - train/epoch__MAX": 2.55
    },
    {
      "Step": 914,
      "brisk-pond-1 - train/epoch": 2.55,
      "brisk-pond-1 - train/epoch__MIN": 2.55,
      "brisk-pond-1 - train/epoch__MAX": 2.55
    },
    {
      "Step": 915,
      "brisk-pond-1 - train/epoch": 2.56,
      "brisk-pond-1 - train/epoch__MIN": 2.56,
      "brisk-pond-1 - train/epoch__MAX": 2.56
    },
    {
      "Step": 916,
      "brisk-pond-1 - train/epoch": 2.56,
      "brisk-pond-1 - train/epoch__MIN": 2.56,
      "brisk-pond-1 - train/epoch__MAX": 2.56
    },
    {
      "Step": 917,
      "brisk-pond-1 - train/epoch": 2.56,
      "brisk-pond-1 - train/epoch__MIN": 2.56,
      "brisk-pond-1 - train/epoch__MAX": 2.56
    },
    {
      "Step": 918,
      "brisk-pond-1 - train/epoch": 2.56,
      "brisk-pond-1 - train/epoch__MIN": 2.56,
      "brisk-pond-1 - train/epoch__MAX": 2.56
    },
    {
      "Step": 919,
      "brisk-pond-1 - train/epoch": 2.57,
      "brisk-pond-1 - train/epoch__MIN": 2.57,
      "brisk-pond-1 - train/epoch__MAX": 2.57
    },
    {
      "Step": 920,
      "brisk-pond-1 - train/epoch": 2.57,
      "brisk-pond-1 - train/epoch__MIN": 2.57,
      "brisk-pond-1 - train/epoch__MAX": 2.57
    },
    {
      "Step": 921,
      "brisk-pond-1 - train/epoch": 2.57,
      "brisk-pond-1 - train/epoch__MIN": 2.57,
      "brisk-pond-1 - train/epoch__MAX": 2.57
    },
    {
      "Step": 922,
      "brisk-pond-1 - train/epoch": 2.58,
      "brisk-pond-1 - train/epoch__MIN": 2.58,
      "brisk-pond-1 - train/epoch__MAX": 2.58
    },
    {
      "Step": 923,
      "brisk-pond-1 - train/epoch": 2.58,
      "brisk-pond-1 - train/epoch__MIN": 2.58,
      "brisk-pond-1 - train/epoch__MAX": 2.58
    },
    {
      "Step": 924,
      "brisk-pond-1 - train/epoch": 2.58,
      "brisk-pond-1 - train/epoch__MIN": 2.58,
      "brisk-pond-1 - train/epoch__MAX": 2.58
    },
    {
      "Step": 925,
      "brisk-pond-1 - train/epoch": 2.58,
      "brisk-pond-1 - train/epoch__MIN": 2.58,
      "brisk-pond-1 - train/epoch__MAX": 2.58
    },
    {
      "Step": 926,
      "brisk-pond-1 - train/epoch": 2.59,
      "brisk-pond-1 - train/epoch__MIN": 2.59,
      "brisk-pond-1 - train/epoch__MAX": 2.59
    },
    {
      "Step": 927,
      "brisk-pond-1 - train/epoch": 2.59,
      "brisk-pond-1 - train/epoch__MIN": 2.59,
      "brisk-pond-1 - train/epoch__MAX": 2.59
    },
    {
      "Step": 928,
      "brisk-pond-1 - train/epoch": 2.59,
      "brisk-pond-1 - train/epoch__MIN": 2.59,
      "brisk-pond-1 - train/epoch__MAX": 2.59
    },
    {
      "Step": 929,
      "brisk-pond-1 - train/epoch": 2.6,
      "brisk-pond-1 - train/epoch__MIN": 2.6,
      "brisk-pond-1 - train/epoch__MAX": 2.6
    },
    {
      "Step": 930,
      "brisk-pond-1 - train/epoch": 2.6,
      "brisk-pond-1 - train/epoch__MIN": 2.6,
      "brisk-pond-1 - train/epoch__MAX": 2.6
    },
    {
      "Step": 931,
      "brisk-pond-1 - train/epoch": 2.6,
      "brisk-pond-1 - train/epoch__MIN": 2.6,
      "brisk-pond-1 - train/epoch__MAX": 2.6
    },
    {
      "Step": 932,
      "brisk-pond-1 - train/epoch": 2.6,
      "brisk-pond-1 - train/epoch__MIN": 2.6,
      "brisk-pond-1 - train/epoch__MAX": 2.6
    },
    {
      "Step": 933,
      "brisk-pond-1 - train/epoch": 2.61,
      "brisk-pond-1 - train/epoch__MIN": 2.61,
      "brisk-pond-1 - train/epoch__MAX": 2.61
    },
    {
      "Step": 934,
      "brisk-pond-1 - train/epoch": 2.61,
      "brisk-pond-1 - train/epoch__MIN": 2.61,
      "brisk-pond-1 - train/epoch__MAX": 2.61
    },
    {
      "Step": 935,
      "brisk-pond-1 - train/epoch": 2.61,
      "brisk-pond-1 - train/epoch__MIN": 2.61,
      "brisk-pond-1 - train/epoch__MAX": 2.61
    },
    {
      "Step": 936,
      "brisk-pond-1 - train/epoch": 2.61,
      "brisk-pond-1 - train/epoch__MIN": 2.61,
      "brisk-pond-1 - train/epoch__MAX": 2.61
    },
    {
      "Step": 937,
      "brisk-pond-1 - train/epoch": 2.62,
      "brisk-pond-1 - train/epoch__MIN": 2.62,
      "brisk-pond-1 - train/epoch__MAX": 2.62
    },
    {
      "Step": 938,
      "brisk-pond-1 - train/epoch": 2.62,
      "brisk-pond-1 - train/epoch__MIN": 2.62,
      "brisk-pond-1 - train/epoch__MAX": 2.62
    },
    {
      "Step": 939,
      "brisk-pond-1 - train/epoch": 2.62,
      "brisk-pond-1 - train/epoch__MIN": 2.62,
      "brisk-pond-1 - train/epoch__MAX": 2.62
    },
    {
      "Step": 940,
      "brisk-pond-1 - train/epoch": 2.63,
      "brisk-pond-1 - train/epoch__MIN": 2.63,
      "brisk-pond-1 - train/epoch__MAX": 2.63
    },
    {
      "Step": 941,
      "brisk-pond-1 - train/epoch": 2.63,
      "brisk-pond-1 - train/epoch__MIN": 2.63,
      "brisk-pond-1 - train/epoch__MAX": 2.63
    },
    {
      "Step": 942,
      "brisk-pond-1 - train/epoch": 2.63,
      "brisk-pond-1 - train/epoch__MIN": 2.63,
      "brisk-pond-1 - train/epoch__MAX": 2.63
    },
    {
      "Step": 943,
      "brisk-pond-1 - train/epoch": 2.63,
      "brisk-pond-1 - train/epoch__MIN": 2.63,
      "brisk-pond-1 - train/epoch__MAX": 2.63
    },
    {
      "Step": 944,
      "brisk-pond-1 - train/epoch": 2.64,
      "brisk-pond-1 - train/epoch__MIN": 2.64,
      "brisk-pond-1 - train/epoch__MAX": 2.64
    },
    {
      "Step": 945,
      "brisk-pond-1 - train/epoch": 2.64,
      "brisk-pond-1 - train/epoch__MIN": 2.64,
      "brisk-pond-1 - train/epoch__MAX": 2.64
    },
    {
      "Step": 946,
      "brisk-pond-1 - train/epoch": 2.64,
      "brisk-pond-1 - train/epoch__MIN": 2.64,
      "brisk-pond-1 - train/epoch__MAX": 2.64
    },
    {
      "Step": 947,
      "brisk-pond-1 - train/epoch": 2.65,
      "brisk-pond-1 - train/epoch__MIN": 2.65,
      "brisk-pond-1 - train/epoch__MAX": 2.65
    },
    {
      "Step": 948,
      "brisk-pond-1 - train/epoch": 2.65,
      "brisk-pond-1 - train/epoch__MIN": 2.65,
      "brisk-pond-1 - train/epoch__MAX": 2.65
    },
    {
      "Step": 949,
      "brisk-pond-1 - train/epoch": 2.65,
      "brisk-pond-1 - train/epoch__MIN": 2.65,
      "brisk-pond-1 - train/epoch__MAX": 2.65
    },
    {
      "Step": 950,
      "brisk-pond-1 - train/epoch": 2.65,
      "brisk-pond-1 - train/epoch__MIN": 2.65,
      "brisk-pond-1 - train/epoch__MAX": 2.65
    },
    {
      "Step": 951,
      "brisk-pond-1 - train/epoch": 2.66,
      "brisk-pond-1 - train/epoch__MIN": 2.66,
      "brisk-pond-1 - train/epoch__MAX": 2.66
    },
    {
      "Step": 952,
      "brisk-pond-1 - train/epoch": 2.66,
      "brisk-pond-1 - train/epoch__MIN": 2.66,
      "brisk-pond-1 - train/epoch__MAX": 2.66
    },
    {
      "Step": 953,
      "brisk-pond-1 - train/epoch": 2.66,
      "brisk-pond-1 - train/epoch__MIN": 2.66,
      "brisk-pond-1 - train/epoch__MAX": 2.66
    },
    {
      "Step": 954,
      "brisk-pond-1 - train/epoch": 2.67,
      "brisk-pond-1 - train/epoch__MIN": 2.67,
      "brisk-pond-1 - train/epoch__MAX": 2.67
    },
    {
      "Step": 955,
      "brisk-pond-1 - train/epoch": 2.67,
      "brisk-pond-1 - train/epoch__MIN": 2.67,
      "brisk-pond-1 - train/epoch__MAX": 2.67
    },
    {
      "Step": 956,
      "brisk-pond-1 - train/epoch": 2.67,
      "brisk-pond-1 - train/epoch__MIN": 2.67,
      "brisk-pond-1 - train/epoch__MAX": 2.67
    },
    {
      "Step": 957,
      "brisk-pond-1 - train/epoch": 2.67,
      "brisk-pond-1 - train/epoch__MIN": 2.67,
      "brisk-pond-1 - train/epoch__MAX": 2.67
    },
    {
      "Step": 958,
      "brisk-pond-1 - train/epoch": 2.68,
      "brisk-pond-1 - train/epoch__MIN": 2.68,
      "brisk-pond-1 - train/epoch__MAX": 2.68
    },
    {
      "Step": 959,
      "brisk-pond-1 - train/epoch": 2.68,
      "brisk-pond-1 - train/epoch__MIN": 2.68,
      "brisk-pond-1 - train/epoch__MAX": 2.68
    },
    {
      "Step": 960,
      "brisk-pond-1 - train/epoch": 2.68,
      "brisk-pond-1 - train/epoch__MIN": 2.68,
      "brisk-pond-1 - train/epoch__MAX": 2.68
    },
    {
      "Step": 961,
      "brisk-pond-1 - train/epoch": 2.68,
      "brisk-pond-1 - train/epoch__MIN": 2.68,
      "brisk-pond-1 - train/epoch__MAX": 2.68
    },
    {
      "Step": 962,
      "brisk-pond-1 - train/epoch": 2.69,
      "brisk-pond-1 - train/epoch__MIN": 2.69,
      "brisk-pond-1 - train/epoch__MAX": 2.69
    },
    {
      "Step": 963,
      "brisk-pond-1 - train/epoch": 2.69,
      "brisk-pond-1 - train/epoch__MIN": 2.69,
      "brisk-pond-1 - train/epoch__MAX": 2.69
    },
    {
      "Step": 964,
      "brisk-pond-1 - train/epoch": 2.69,
      "brisk-pond-1 - train/epoch__MIN": 2.69,
      "brisk-pond-1 - train/epoch__MAX": 2.69
    },
    {
      "Step": 965,
      "brisk-pond-1 - train/epoch": 2.7,
      "brisk-pond-1 - train/epoch__MIN": 2.7,
      "brisk-pond-1 - train/epoch__MAX": 2.7
    },
    {
      "Step": 966,
      "brisk-pond-1 - train/epoch": 2.7,
      "brisk-pond-1 - train/epoch__MIN": 2.7,
      "brisk-pond-1 - train/epoch__MAX": 2.7
    },
    {
      "Step": 967,
      "brisk-pond-1 - train/epoch": 2.7,
      "brisk-pond-1 - train/epoch__MIN": 2.7,
      "brisk-pond-1 - train/epoch__MAX": 2.7
    },
    {
      "Step": 968,
      "brisk-pond-1 - train/epoch": 2.7,
      "brisk-pond-1 - train/epoch__MIN": 2.7,
      "brisk-pond-1 - train/epoch__MAX": 2.7
    },
    {
      "Step": 969,
      "brisk-pond-1 - train/epoch": 2.71,
      "brisk-pond-1 - train/epoch__MIN": 2.71,
      "brisk-pond-1 - train/epoch__MAX": 2.71
    },
    {
      "Step": 970,
      "brisk-pond-1 - train/epoch": 2.71,
      "brisk-pond-1 - train/epoch__MIN": 2.71,
      "brisk-pond-1 - train/epoch__MAX": 2.71
    },
    {
      "Step": 971,
      "brisk-pond-1 - train/epoch": 2.71,
      "brisk-pond-1 - train/epoch__MIN": 2.71,
      "brisk-pond-1 - train/epoch__MAX": 2.71
    },
    {
      "Step": 972,
      "brisk-pond-1 - train/epoch": 2.72,
      "brisk-pond-1 - train/epoch__MIN": 2.72,
      "brisk-pond-1 - train/epoch__MAX": 2.72
    },
    {
      "Step": 973,
      "brisk-pond-1 - train/epoch": 2.72,
      "brisk-pond-1 - train/epoch__MIN": 2.72,
      "brisk-pond-1 - train/epoch__MAX": 2.72
    },
    {
      "Step": 974,
      "brisk-pond-1 - train/epoch": 2.72,
      "brisk-pond-1 - train/epoch__MIN": 2.72,
      "brisk-pond-1 - train/epoch__MAX": 2.72
    },
    {
      "Step": 975,
      "brisk-pond-1 - train/epoch": 2.72,
      "brisk-pond-1 - train/epoch__MIN": 2.72,
      "brisk-pond-1 - train/epoch__MAX": 2.72
    },
    {
      "Step": 976,
      "brisk-pond-1 - train/epoch": 2.73,
      "brisk-pond-1 - train/epoch__MIN": 2.73,
      "brisk-pond-1 - train/epoch__MAX": 2.73
    },
    {
      "Step": 977,
      "brisk-pond-1 - train/epoch": 2.73,
      "brisk-pond-1 - train/epoch__MIN": 2.73,
      "brisk-pond-1 - train/epoch__MAX": 2.73
    },
    {
      "Step": 978,
      "brisk-pond-1 - train/epoch": 2.73,
      "brisk-pond-1 - train/epoch__MIN": 2.73,
      "brisk-pond-1 - train/epoch__MAX": 2.73
    },
    {
      "Step": 979,
      "brisk-pond-1 - train/epoch": 2.74,
      "brisk-pond-1 - train/epoch__MIN": 2.74,
      "brisk-pond-1 - train/epoch__MAX": 2.74
    },
    {
      "Step": 980,
      "brisk-pond-1 - train/epoch": 2.74,
      "brisk-pond-1 - train/epoch__MIN": 2.74,
      "brisk-pond-1 - train/epoch__MAX": 2.74
    },
    {
      "Step": 981,
      "brisk-pond-1 - train/epoch": 2.74,
      "brisk-pond-1 - train/epoch__MIN": 2.74,
      "brisk-pond-1 - train/epoch__MAX": 2.74
    },
    {
      "Step": 982,
      "brisk-pond-1 - train/epoch": 2.74,
      "brisk-pond-1 - train/epoch__MIN": 2.74,
      "brisk-pond-1 - train/epoch__MAX": 2.74
    },
    {
      "Step": 983,
      "brisk-pond-1 - train/epoch": 2.75,
      "brisk-pond-1 - train/epoch__MIN": 2.75,
      "brisk-pond-1 - train/epoch__MAX": 2.75
    },
    {
      "Step": 984,
      "brisk-pond-1 - train/epoch": 2.75,
      "brisk-pond-1 - train/epoch__MIN": 2.75,
      "brisk-pond-1 - train/epoch__MAX": 2.75
    },
    {
      "Step": 985,
      "brisk-pond-1 - train/epoch": 2.75,
      "brisk-pond-1 - train/epoch__MIN": 2.75,
      "brisk-pond-1 - train/epoch__MAX": 2.75
    },
    {
      "Step": 986,
      "brisk-pond-1 - train/epoch": 2.76,
      "brisk-pond-1 - train/epoch__MIN": 2.76,
      "brisk-pond-1 - train/epoch__MAX": 2.76
    },
    {
      "Step": 987,
      "brisk-pond-1 - train/epoch": 2.76,
      "brisk-pond-1 - train/epoch__MIN": 2.76,
      "brisk-pond-1 - train/epoch__MAX": 2.76
    },
    {
      "Step": 988,
      "brisk-pond-1 - train/epoch": 2.76,
      "brisk-pond-1 - train/epoch__MIN": 2.76,
      "brisk-pond-1 - train/epoch__MAX": 2.76
    },
    {
      "Step": 989,
      "brisk-pond-1 - train/epoch": 2.76,
      "brisk-pond-1 - train/epoch__MIN": 2.76,
      "brisk-pond-1 - train/epoch__MAX": 2.76
    },
    {
      "Step": 990,
      "brisk-pond-1 - train/epoch": 2.77,
      "brisk-pond-1 - train/epoch__MIN": 2.77,
      "brisk-pond-1 - train/epoch__MAX": 2.77
    },
    {
      "Step": 991,
      "brisk-pond-1 - train/epoch": 2.77,
      "brisk-pond-1 - train/epoch__MIN": 2.77,
      "brisk-pond-1 - train/epoch__MAX": 2.77
    },
    {
      "Step": 992,
      "brisk-pond-1 - train/epoch": 2.77,
      "brisk-pond-1 - train/epoch__MIN": 2.77,
      "brisk-pond-1 - train/epoch__MAX": 2.77
    },
    {
      "Step": 993,
      "brisk-pond-1 - train/epoch": 2.77,
      "brisk-pond-1 - train/epoch__MIN": 2.77,
      "brisk-pond-1 - train/epoch__MAX": 2.77
    },
    {
      "Step": 994,
      "brisk-pond-1 - train/epoch": 2.78,
      "brisk-pond-1 - train/epoch__MIN": 2.78,
      "brisk-pond-1 - train/epoch__MAX": 2.78
    },
    {
      "Step": 995,
      "brisk-pond-1 - train/epoch": 2.78,
      "brisk-pond-1 - train/epoch__MIN": 2.78,
      "brisk-pond-1 - train/epoch__MAX": 2.78
    },
    {
      "Step": 996,
      "brisk-pond-1 - train/epoch": 2.78,
      "brisk-pond-1 - train/epoch__MIN": 2.78,
      "brisk-pond-1 - train/epoch__MAX": 2.78
    },
    {
      "Step": 997,
      "brisk-pond-1 - train/epoch": 2.79,
      "brisk-pond-1 - train/epoch__MIN": 2.79,
      "brisk-pond-1 - train/epoch__MAX": 2.79
    },
    {
      "Step": 998,
      "brisk-pond-1 - train/epoch": 2.79,
      "brisk-pond-1 - train/epoch__MIN": 2.79,
      "brisk-pond-1 - train/epoch__MAX": 2.79
    },
    {
      "Step": 999,
      "brisk-pond-1 - train/epoch": 2.79,
      "brisk-pond-1 - train/epoch__MIN": 2.79,
      "brisk-pond-1 - train/epoch__MAX": 2.79
    },
    {
      "Step": 1000,
      "brisk-pond-1 - train/epoch": 2.79,
      "brisk-pond-1 - train/epoch__MIN": 2.79,
      "brisk-pond-1 - train/epoch__MAX": 2.79
    },
    {
      "Step": 1001,
      "brisk-pond-1 - train/epoch": 2.8,
      "brisk-pond-1 - train/epoch__MIN": 2.8,
      "brisk-pond-1 - train/epoch__MAX": 2.8
    },
    {
      "Step": 1002,
      "brisk-pond-1 - train/epoch": 2.8,
      "brisk-pond-1 - train/epoch__MIN": 2.8,
      "brisk-pond-1 - train/epoch__MAX": 2.8
    },
    {
      "Step": 1003,
      "brisk-pond-1 - train/epoch": 2.8,
      "brisk-pond-1 - train/epoch__MIN": 2.8,
      "brisk-pond-1 - train/epoch__MAX": 2.8
    },
    {
      "Step": 1004,
      "brisk-pond-1 - train/epoch": 2.8,
      "brisk-pond-1 - train/epoch__MIN": 2.8,
      "brisk-pond-1 - train/epoch__MAX": 2.8
    },
    {
      "Step": 1005,
      "brisk-pond-1 - train/epoch": 2.81,
      "brisk-pond-1 - train/epoch__MIN": 2.81,
      "brisk-pond-1 - train/epoch__MAX": 2.81
    },
    {
      "Step": 1006,
      "brisk-pond-1 - train/epoch": 2.81,
      "brisk-pond-1 - train/epoch__MIN": 2.81,
      "brisk-pond-1 - train/epoch__MAX": 2.81
    },
    {
      "Step": 1007,
      "brisk-pond-1 - train/epoch": 2.81,
      "brisk-pond-1 - train/epoch__MIN": 2.81,
      "brisk-pond-1 - train/epoch__MAX": 2.81
    },
    {
      "Step": 1008,
      "brisk-pond-1 - train/epoch": 2.81,
      "brisk-pond-1 - train/epoch__MIN": 2.81,
      "brisk-pond-1 - train/epoch__MAX": 2.81
    },
    {
      "Step": 1009,
      "brisk-pond-1 - train/epoch": 2.82,
      "brisk-pond-1 - train/epoch__MIN": 2.82,
      "brisk-pond-1 - train/epoch__MAX": 2.82
    },
    {
      "Step": 1010,
      "brisk-pond-1 - train/epoch": 2.82,
      "brisk-pond-1 - train/epoch__MIN": 2.82,
      "brisk-pond-1 - train/epoch__MAX": 2.82
    },
    {
      "Step": 1011,
      "brisk-pond-1 - train/epoch": 2.82,
      "brisk-pond-1 - train/epoch__MIN": 2.82,
      "brisk-pond-1 - train/epoch__MAX": 2.82
    },
    {
      "Step": 1012,
      "brisk-pond-1 - train/epoch": 2.83,
      "brisk-pond-1 - train/epoch__MIN": 2.83,
      "brisk-pond-1 - train/epoch__MAX": 2.83
    },
    {
      "Step": 1013,
      "brisk-pond-1 - train/epoch": 2.83,
      "brisk-pond-1 - train/epoch__MIN": 2.83,
      "brisk-pond-1 - train/epoch__MAX": 2.83
    },
    {
      "Step": 1014,
      "brisk-pond-1 - train/epoch": 2.83,
      "brisk-pond-1 - train/epoch__MIN": 2.83,
      "brisk-pond-1 - train/epoch__MAX": 2.83
    },
    {
      "Step": 1015,
      "brisk-pond-1 - train/epoch": 2.83,
      "brisk-pond-1 - train/epoch__MIN": 2.83,
      "brisk-pond-1 - train/epoch__MAX": 2.83
    },
    {
      "Step": 1016,
      "brisk-pond-1 - train/epoch": 2.84,
      "brisk-pond-1 - train/epoch__MIN": 2.84,
      "brisk-pond-1 - train/epoch__MAX": 2.84
    },
    {
      "Step": 1017,
      "brisk-pond-1 - train/epoch": 2.84,
      "brisk-pond-1 - train/epoch__MIN": 2.84,
      "brisk-pond-1 - train/epoch__MAX": 2.84
    },
    {
      "Step": 1018,
      "brisk-pond-1 - train/epoch": 2.84,
      "brisk-pond-1 - train/epoch__MIN": 2.84,
      "brisk-pond-1 - train/epoch__MAX": 2.84
    },
    {
      "Step": 1019,
      "brisk-pond-1 - train/epoch": 2.84,
      "brisk-pond-1 - train/epoch__MIN": 2.84,
      "brisk-pond-1 - train/epoch__MAX": 2.84
    },
    {
      "Step": 1020,
      "brisk-pond-1 - train/epoch": 2.85,
      "brisk-pond-1 - train/epoch__MIN": 2.85,
      "brisk-pond-1 - train/epoch__MAX": 2.85
    },
    {
      "Step": 1021,
      "brisk-pond-1 - train/epoch": 2.85,
      "brisk-pond-1 - train/epoch__MIN": 2.85,
      "brisk-pond-1 - train/epoch__MAX": 2.85
    },
    {
      "Step": 1022,
      "brisk-pond-1 - train/epoch": 2.85,
      "brisk-pond-1 - train/epoch__MIN": 2.85,
      "brisk-pond-1 - train/epoch__MAX": 2.85
    },
    {
      "Step": 1023,
      "brisk-pond-1 - train/epoch": 2.86,
      "brisk-pond-1 - train/epoch__MIN": 2.86,
      "brisk-pond-1 - train/epoch__MAX": 2.86
    },
    {
      "Step": 1024,
      "brisk-pond-1 - train/epoch": 2.86,
      "brisk-pond-1 - train/epoch__MIN": 2.86,
      "brisk-pond-1 - train/epoch__MAX": 2.86
    },
    {
      "Step": 1025,
      "brisk-pond-1 - train/epoch": 2.86,
      "brisk-pond-1 - train/epoch__MIN": 2.86,
      "brisk-pond-1 - train/epoch__MAX": 2.86
    },
    {
      "Step": 1026,
      "brisk-pond-1 - train/epoch": 2.86,
      "brisk-pond-1 - train/epoch__MIN": 2.86,
      "brisk-pond-1 - train/epoch__MAX": 2.86
    },
    {
      "Step": 1027,
      "brisk-pond-1 - train/epoch": 2.87,
      "brisk-pond-1 - train/epoch__MIN": 2.87,
      "brisk-pond-1 - train/epoch__MAX": 2.87
    },
    {
      "Step": 1028,
      "brisk-pond-1 - train/epoch": 2.87,
      "brisk-pond-1 - train/epoch__MIN": 2.87,
      "brisk-pond-1 - train/epoch__MAX": 2.87
    },
    {
      "Step": 1029,
      "brisk-pond-1 - train/epoch": 2.87,
      "brisk-pond-1 - train/epoch__MIN": 2.87,
      "brisk-pond-1 - train/epoch__MAX": 2.87
    },
    {
      "Step": 1030,
      "brisk-pond-1 - train/epoch": 2.88,
      "brisk-pond-1 - train/epoch__MIN": 2.88,
      "brisk-pond-1 - train/epoch__MAX": 2.88
    },
    {
      "Step": 1031,
      "brisk-pond-1 - train/epoch": 2.88,
      "brisk-pond-1 - train/epoch__MIN": 2.88,
      "brisk-pond-1 - train/epoch__MAX": 2.88
    },
    {
      "Step": 1032,
      "brisk-pond-1 - train/epoch": 2.88,
      "brisk-pond-1 - train/epoch__MIN": 2.88,
      "brisk-pond-1 - train/epoch__MAX": 2.88
    },
    {
      "Step": 1033,
      "brisk-pond-1 - train/epoch": 2.88,
      "brisk-pond-1 - train/epoch__MIN": 2.88,
      "brisk-pond-1 - train/epoch__MAX": 2.88
    },
    {
      "Step": 1034,
      "brisk-pond-1 - train/epoch": 2.89,
      "brisk-pond-1 - train/epoch__MIN": 2.89,
      "brisk-pond-1 - train/epoch__MAX": 2.89
    },
    {
      "Step": 1035,
      "brisk-pond-1 - train/epoch": 2.89,
      "brisk-pond-1 - train/epoch__MIN": 2.89,
      "brisk-pond-1 - train/epoch__MAX": 2.89
    },
    {
      "Step": 1036,
      "brisk-pond-1 - train/epoch": 2.89,
      "brisk-pond-1 - train/epoch__MIN": 2.89,
      "brisk-pond-1 - train/epoch__MAX": 2.89
    },
    {
      "Step": 1037,
      "brisk-pond-1 - train/epoch": 2.9,
      "brisk-pond-1 - train/epoch__MIN": 2.9,
      "brisk-pond-1 - train/epoch__MAX": 2.9
    },
    {
      "Step": 1038,
      "brisk-pond-1 - train/epoch": 2.9,
      "brisk-pond-1 - train/epoch__MIN": 2.9,
      "brisk-pond-1 - train/epoch__MAX": 2.9
    },
    {
      "Step": 1039,
      "brisk-pond-1 - train/epoch": 2.9,
      "brisk-pond-1 - train/epoch__MIN": 2.9,
      "brisk-pond-1 - train/epoch__MAX": 2.9
    },
    {
      "Step": 1040,
      "brisk-pond-1 - train/epoch": 2.9,
      "brisk-pond-1 - train/epoch__MIN": 2.9,
      "brisk-pond-1 - train/epoch__MAX": 2.9
    },
    {
      "Step": 1041,
      "brisk-pond-1 - train/epoch": 2.91,
      "brisk-pond-1 - train/epoch__MIN": 2.91,
      "brisk-pond-1 - train/epoch__MAX": 2.91
    },
    {
      "Step": 1042,
      "brisk-pond-1 - train/epoch": 2.91,
      "brisk-pond-1 - train/epoch__MIN": 2.91,
      "brisk-pond-1 - train/epoch__MAX": 2.91
    },
    {
      "Step": 1043,
      "brisk-pond-1 - train/epoch": 2.91,
      "brisk-pond-1 - train/epoch__MIN": 2.91,
      "brisk-pond-1 - train/epoch__MAX": 2.91
    },
    {
      "Step": 1044,
      "brisk-pond-1 - train/epoch": 2.91,
      "brisk-pond-1 - train/epoch__MIN": 2.91,
      "brisk-pond-1 - train/epoch__MAX": 2.91
    },
    {
      "Step": 1045,
      "brisk-pond-1 - train/epoch": 2.92,
      "brisk-pond-1 - train/epoch__MIN": 2.92,
      "brisk-pond-1 - train/epoch__MAX": 2.92
    },
    {
      "Step": 1046,
      "brisk-pond-1 - train/epoch": 2.92,
      "brisk-pond-1 - train/epoch__MIN": 2.92,
      "brisk-pond-1 - train/epoch__MAX": 2.92
    },
    {
      "Step": 1047,
      "brisk-pond-1 - train/epoch": 2.92,
      "brisk-pond-1 - train/epoch__MIN": 2.92,
      "brisk-pond-1 - train/epoch__MAX": 2.92
    },
    {
      "Step": 1048,
      "brisk-pond-1 - train/epoch": 2.93,
      "brisk-pond-1 - train/epoch__MIN": 2.93,
      "brisk-pond-1 - train/epoch__MAX": 2.93
    },
    {
      "Step": 1049,
      "brisk-pond-1 - train/epoch": 2.93,
      "brisk-pond-1 - train/epoch__MIN": 2.93,
      "brisk-pond-1 - train/epoch__MAX": 2.93
    },
    {
      "Step": 1050,
      "brisk-pond-1 - train/epoch": 2.93,
      "brisk-pond-1 - train/epoch__MIN": 2.93,
      "brisk-pond-1 - train/epoch__MAX": 2.93
    },
    {
      "Step": 1051,
      "brisk-pond-1 - train/epoch": 2.93,
      "brisk-pond-1 - train/epoch__MIN": 2.93,
      "brisk-pond-1 - train/epoch__MAX": 2.93
    },
    {
      "Step": 1052,
      "brisk-pond-1 - train/epoch": 2.94,
      "brisk-pond-1 - train/epoch__MIN": 2.94,
      "brisk-pond-1 - train/epoch__MAX": 2.94
    },
    {
      "Step": 1053,
      "brisk-pond-1 - train/epoch": 2.94,
      "brisk-pond-1 - train/epoch__MIN": 2.94,
      "brisk-pond-1 - train/epoch__MAX": 2.94
    },
    {
      "Step": 1054,
      "brisk-pond-1 - train/epoch": 2.94,
      "brisk-pond-1 - train/epoch__MIN": 2.94,
      "brisk-pond-1 - train/epoch__MAX": 2.94
    },
    {
      "Step": 1055,
      "brisk-pond-1 - train/epoch": 2.95,
      "brisk-pond-1 - train/epoch__MIN": 2.95,
      "brisk-pond-1 - train/epoch__MAX": 2.95
    },
    {
      "Step": 1056,
      "brisk-pond-1 - train/epoch": 2.95,
      "brisk-pond-1 - train/epoch__MIN": 2.95,
      "brisk-pond-1 - train/epoch__MAX": 2.95
    },
    {
      "Step": 1057,
      "brisk-pond-1 - train/epoch": 2.95,
      "brisk-pond-1 - train/epoch__MIN": 2.95,
      "brisk-pond-1 - train/epoch__MAX": 2.95
    },
    {
      "Step": 1058,
      "brisk-pond-1 - train/epoch": 2.95,
      "brisk-pond-1 - train/epoch__MIN": 2.95,
      "brisk-pond-1 - train/epoch__MAX": 2.95
    },
    {
      "Step": 1059,
      "brisk-pond-1 - train/epoch": 2.96,
      "brisk-pond-1 - train/epoch__MIN": 2.96,
      "brisk-pond-1 - train/epoch__MAX": 2.96
    },
    {
      "Step": 1060,
      "brisk-pond-1 - train/epoch": 2.96,
      "brisk-pond-1 - train/epoch__MIN": 2.96,
      "brisk-pond-1 - train/epoch__MAX": 2.96
    },
    {
      "Step": 1061,
      "brisk-pond-1 - train/epoch": 2.96,
      "brisk-pond-1 - train/epoch__MIN": 2.96,
      "brisk-pond-1 - train/epoch__MAX": 2.96
    },
    {
      "Step": 1062,
      "brisk-pond-1 - train/epoch": 2.97,
      "brisk-pond-1 - train/epoch__MIN": 2.97,
      "brisk-pond-1 - train/epoch__MAX": 2.97
    },
    {
      "Step": 1063,
      "brisk-pond-1 - train/epoch": 2.97,
      "brisk-pond-1 - train/epoch__MIN": 2.97,
      "brisk-pond-1 - train/epoch__MAX": 2.97
    },
    {
      "Step": 1064,
      "brisk-pond-1 - train/epoch": 2.97,
      "brisk-pond-1 - train/epoch__MIN": 2.97,
      "brisk-pond-1 - train/epoch__MAX": 2.97
    },
    {
      "Step": 1065,
      "brisk-pond-1 - train/epoch": 2.97,
      "brisk-pond-1 - train/epoch__MIN": 2.97,
      "brisk-pond-1 - train/epoch__MAX": 2.97
    },
    {
      "Step": 1066,
      "brisk-pond-1 - train/epoch": 2.98,
      "brisk-pond-1 - train/epoch__MIN": 2.98,
      "brisk-pond-1 - train/epoch__MAX": 2.98
    },
    {
      "Step": 1067,
      "brisk-pond-1 - train/epoch": 2.98,
      "brisk-pond-1 - train/epoch__MIN": 2.98,
      "brisk-pond-1 - train/epoch__MAX": 2.98
    },
    {
      "Step": 1068,
      "brisk-pond-1 - train/epoch": 2.98,
      "brisk-pond-1 - train/epoch__MIN": 2.98,
      "brisk-pond-1 - train/epoch__MAX": 2.98
    },
    {
      "Step": 1069,
      "brisk-pond-1 - train/epoch": 2.98,
      "brisk-pond-1 - train/epoch__MIN": 2.98,
      "brisk-pond-1 - train/epoch__MAX": 2.98
    },
    {
      "Step": 1070,
      "brisk-pond-1 - train/epoch": 2.99,
      "brisk-pond-1 - train/epoch__MIN": 2.99,
      "brisk-pond-1 - train/epoch__MAX": 2.99
    },
    {
      "Step": 1071,
      "brisk-pond-1 - train/epoch": 2.99,
      "brisk-pond-1 - train/epoch__MIN": 2.99,
      "brisk-pond-1 - train/epoch__MAX": 2.99
    },
    {
      "Step": 1072,
      "brisk-pond-1 - train/epoch": 2.99,
      "brisk-pond-1 - train/epoch__MIN": 2.99,
      "brisk-pond-1 - train/epoch__MAX": 2.99
    },
    {
      "Step": 1073,
      "brisk-pond-1 - train/epoch": 3,
      "brisk-pond-1 - train/epoch__MIN": 3,
      "brisk-pond-1 - train/epoch__MAX": 3
    },
    {
      "Step": 1074,
      "brisk-pond-1 - train/epoch": 3,
      "brisk-pond-1 - train/epoch__MIN": 3,
      "brisk-pond-1 - train/epoch__MAX": 3
    },
    {
      "Step": 1075,
      "brisk-pond-1 - train/epoch": 3,
      "brisk-pond-1 - train/epoch__MIN": 3,
      "brisk-pond-1 - train/epoch__MAX": 3
    },
    {
      "Step": 1076,
      "brisk-pond-1 - train/epoch": 3,
      "brisk-pond-1 - train/epoch__MIN": 3,
      "brisk-pond-1 - train/epoch__MAX": 3
    }
  ]
export default function RunReport() {
    return (
        <div className='px-10 py-5 flex flex-wrap'>
            <div className='mt-8 w-6/12 pr-5'>
                <Card>
                    <Text>train/loss</Text>
                    <LineChart
                        className="mt-4 h-80"
                        data={data}
                        categories={['brisk-pond-1 - train/loss']}
                        index="Step"
                        colors={['indigo']}
                        // valueFormatter={(number: number) =>
                        //     `$ ${Intl.NumberFormat('us').format(number).toString()}`
                        // }
                        yAxisWidth={60}
                    />
                </Card>
            </div>
            <div className='mt-8 w-6/12'>
                <Card>
                    <Text>train/learning_rate</Text>
                    <LineChart
                        className="mt-4 h-80"
                        data={lr_data}
                        categories={['brisk-pond-1 - train/learning_rate']}
                        index="Step"
                        colors={['indigo']}
                        // valueFormatter={(number: number) =>
                        //     `$ ${Intl.NumberFormat('us').format(number).toString()}`
                        // }
                        yAxisWidth={60}
                    />
                </Card>
            </div>
            <div className='mt-8 w-6/12 pr-5'>
                <Card>
                    <Text>train/global_step</Text>
                    <LineChart
                        className="mt-4 h-80"
                        data={step_data}
                        categories={['brisk-pond-1 - train/global_step']}
                        index="Step"
                        colors={['indigo']}
                        // valueFormatter={(number: number) =>
                        //     `$ ${Intl.NumberFormat('us').format(number).toString()}`
                        // }
                        yAxisWidth={60}
                    />
                </Card>
            </div>
            <div className='mt-8 w-6/12'>
                <Card>
                    <Text>train/epoch</Text>
                    <LineChart
                        className="mt-4 h-80"
                        data={epoch_data}
                        categories={['brisk-pond-1 - train/epoch']}
                        index="Step"
                        colors={['indigo']}
                        // valueFormatter={(number: number) =>
                        //     `$ ${Intl.NumberFormat('us').format(number).toString()}`
                        // }
                        yAxisWidth={60}
                    />
                </Card>
            </div>


        </div>
    )
}