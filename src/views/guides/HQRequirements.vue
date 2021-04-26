<template>
  <h4 class="text-decoration-underline text-center">HQ Upgrade Requirements</h4>
  <div class="my-3">
    <div class="row justify-content-between">
      <label class="col-auto col-form-label col-form-label-sm" :for="lastFocused">Reduction</label>
      <div class="col-auto">
        <div class="reduction-group input-group input-group-sm">
          <input type="number" min="0" max="100" step="0.5"
                 style="width: 3.5em"
                 id="reductionInput"
                 class="form-control text-right"
                 v-model="reduction"
                 @focus="lastFocused = 'reductionInput'" />
          <span class="input-group-text">%</span>
        </div>
      </div>
    </div>
    <input type="range" min="0" max="100" step="0.5"
           id="reductionRange"
           class="form-range"
           v-model="rangeVal"
           @focus="lastFocused = 'reductionRange'" />
  </div>
  <table class="table table-striped table-hover table-bordered border-secondary">
    <thead>
    <tr>
      <th scope="col" class="text-center">HQ Level</th>
      <th scope="col" class="text-center">Food</th>
      <th scope="col" class="text-center">Steel</th>
      <th scope="col" class="text-center">Oil</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(rss, lvl) in levels" :key="lvl">
      <th scope="row" class="text-center">
        {{ lvl - 1 }}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
        {{ lvl }}
      </th>
      <td v-for="(val, i) in rss" :key="`hq-${lvl}-${i}`" v-text="fmt(val - (val * reduction / 100))"
          class="text-right" />
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <th scope="row" class="text-center">TOTAL</th>
      <td v-for="(val, i) in total" :key="`total-${i}`" v-text="fmt(val - (val * reduction / 100))" class="text-right" />
    </tr>
    </tfoot>
  </table>
</template>

<script>
import Muted from '@/components/muted'
import { abbreviate } from '@/modules/utils/abbreviate'

export default {
  name: "HQRequirements",
  components: { Muted },
  data() {
    return {
      lastFocused: 'reductionRange',
      reduction: 0,
      rangeVal: 0,
      levels: {
        2: [ 3500, 3500, 0 ],
        3: [ 6500, 6500, 0 ],
        4: [ 11_800, 11_800, 0 ],
        5: [ 21_400, 21_400, 0 ],
        6: [ 36_300, 36_300, 0 ],
        7: [ 54_400, 54_400, 25_200 ],
        8: [ 81_800, 81_800, 36_800 ],
        9: [ 122_800, 122_800, 49_200 ],
        10: [ 184_300, 184_300, 78_700 ],
        11: [ 227_500, 227_500, 120_000 ],
        12: [ 417_500, 417_500, 180_000 ],
        13: [ 627_500, 627_500, 270_000 ],
        14: [ 942_500, 942_500, 405_500 ],
        15: [ 1_200_000, 1_200_000, 607_000 ],
        16: [ 2_100_000, 2_100_000, 912_200 ],
        17: [ 3_200_000, 3_200_000, 1_400_000 ],
        18: [ 4_800_000, 4_800_000, 2_100_000 ],
        19: [ 7_200_000, 7_200_000, 3_300_000 ],
        20: [ 10_800_000, 10_800_000, 4_700_000 ],
        21: [ 16_200_000, 16_200_000, 7_000_000 ],
        22: [ 24_300_000, 24_300_000, 10_600_000 ],
        23: [ 36_500_000, 36_500_000, 15_900_000 ],
        24: [ 54_800_000, 54_800_000, 24_000_000 ],
        25: [ 82_000_000, 82_000_000, 36_000_000 ]
      }
    }
  },

  computed: {
    total() { return Object.values(this.levels).reduce((tot, lvl) => tot.map((t, i) => t + lvl[i]), [ 0, 0, 0 ]) },
  },

  methods: {
    fmt(val) { return abbreviate(val).toString(1) }
  },

  watch: {
    rangeVal(nVal) {
      if (this.reduction !== nVal) this.reduction = nVal;
    },
    reduction(nVal) {
      if (this.rangeVal !== nVal) this.rangeVal = nVal;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.form-range::-webkit-slider-runnable-track {
  background-color: $secondary;
}

::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.reduction-group {
  &:not(:focus-within) > * {
    border-color: transparent;
    background-color: transparent;

    &:first-child {
      padding-right: 0;
    }

    &:last-child {
      padding-left: 0;
    }
  }

  &:focus-within > * {
    background-color: $dark;
  }
}

tbody > tr:last-child {
  th, td {
    border-bottom: 3px solid $secondary !important;
  }
}

tbody > tr:first-child {
  th, td {
    border-top: 3px solid $secondary;
  }
}
</style>