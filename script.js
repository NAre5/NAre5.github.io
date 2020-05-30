var app = new Vue({
  el: "#app",
  data() {
    return {
      current_style_index: 0,
      color_styles: [
        { value: "noraml", filter: "none" },
        { value: "greyscale", filter: "grayscale(100%)" },
        {
          value: "blue",
          filter: "sepia(200%) hue-rotate(190deg) saturate(1000%)"
        }
      ]
    };
  },
  methods: {
    changeColor() {
      this.current_style_index =
        (this.current_style_index + 1) % this.color_styles.length;
    }
  },
  computed: {
    age() {
      let age_dif = Date.now() - Date.UTC(1998, 6, 27);
      let age_date = new Date(age_dif);
      let age = Math.abs(1970 - age_date.getUTCFullYear());
      return age;
    },
    colorValue() {
      return this.color_styles[this.current_style_index].value;
    },
    sectionColor() {
      return {
        filter: this.color_styles[this.current_style_index].filter
      };
    }
  }
});
