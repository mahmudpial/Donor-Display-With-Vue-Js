import { donors } from "./Donors.js";

export default {
  data() {
    return {
      donors,
      htmlMessage:
        "<strong>Connecting donors with those in need, saving lives together. ❤️</strong>",
    };
  },
  computed: {
    // Only A+ donors
    aPlusDonors() {
      return this.donors.filter((d) => d.blood === "A+");
    },
    // Count available donors
    availableCount() {
      return this.donors.filter((d) => d.available).length;
    },
  },
};
