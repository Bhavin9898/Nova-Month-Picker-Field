<template>
  <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
    <template slot="field">
      <month-picker-input
        no-default=false
        :input-pre-filled="this.inputPreFilled"
        :id="field.name"
        type="text"
        class=""
        :class="errorClasses"
        :placeholder="field.name"
        :default-month="this.defaultMonth"
        :default-year="this.defaultYear"
        :max-date="this.todayDate"
        v-model="value"></month-picker-input>
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors, Vue } from 'laravel-nova'
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'

export default {
  components: { MonthPicker,  MonthPickerInput},

  data() {

      return {
          defaultMonth: (this.field.value && this.field.value.month != undefined) ? Number(this.field.value.month, true) : '',
          defaultYear: (this.field.value && this.field.value.year != undefined) ? Number(this.field.value.year, true) : '',
          inputPreFilled: (this.field.value && this.field.value.month != undefined && this.field.value.year != undefined) ? true : false,
          todayDate:  (this.field.value && this.field.value.maxdate != undefined) ? new Date(this.field.value.maxdate) : false
      };
  },
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      if(this.field.value && this.field.value.year != undefined && this.field.value.month!= undefined){
        let date = this.field.value.year  + '-' + this.field.value.month +  '-1';
        let date_value = {'to' : date};
        this.value = date_value || '';
      }
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      let data =  JSON.parse(JSON.stringify(this.value))
      let date = data['to'];
      formData.append(this.field.attribute, date || '')
    },
  },
}
</script>
