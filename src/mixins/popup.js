export default {
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  computed: {
    visible: {
      get: function() {
        return this.show
      },
      set: function(val) {
        this.$emit('change', val)
      }
    }
  }
}
