<template>
  <div
    class="vue-form-item"
  >
    <div
      class="vue-form-item"
    >
      <template
        v-if="type === 'input'"
      >
        <input
          :id="`input-${name}`"
          :value="modelValue"
          :type="isPasswordInput ? currentType : inputType"
          :placeholder="placeholder"
          class="rounded-md"
          :class="[
          {
            'dir-ltr': rtl,
            'has-value': modelValue,
            'has-prepend-item': isPasswordInput || prepend
          },
          inputClass
          ]"
          :readonly="readonly"
          :disabled="disabled || isLoading"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          @input="onChange"
        />
        <b-spinner
          v-if="isLoading"
          variant="primary"
          label="Loading..."
        />
        <div
          v-if="icon || label"
          class="form-item-placeholder d-flex align-items-center"
        >
          <div
            v-if="icon"
            class="b-icon-wrapper"
          >
            <b-icon
              :icon="icon"
            />
          </div>
          <label
            v-if="label"
            :for="`input-${name}`"
            class="form-item-label mb-0"
          >
            {{ label }}
          </label>
        </div>
        <div
          v-if="prepend"
          class="form-item-prepend"
          :class="{ 'dir-ltr': rtl }"
        >
            {{ prepend }}
        </div>
        <span
          v-if="isPasswordInput"
          class="show-password cursor-pointer"
          @click="changePasswordType()"
        >
          <b-icon
            :icon="isPasswordVisible ? 'eye-slash' : 'eye'"
          />
        </span>
      </template>
    </div>
  </div>
</template>
  
<script lang="ts">
  export default {
    name: 'VueFormItem',
    props: {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true,
        default: ''
      },
      inputType: {
        type: String,
        required: false,
        default: 'text'
      },
      modelValue: {
        type: [String, Boolean, Number],
        required: true,
        default: ''
      },
      label: {
        type: String,
        required: false,
        default: ''
      },
      icon: {
        type: String,
        required: false,
        default: ''
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      prepend: {
        type: String,
        required: false,
        default: ''
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      validation: {
        type: Object,
        required: false,
        default: () => {}
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      autocomplete: {
        type: String,
        required: false,
        default: 'on'
      },
      autofocus: {
        type: Boolean,
        required: false,
        default: false
      },
      rtl: {
        type: Boolean,
        required: false,
        default: false
      },
      options: {
        type: [Array, Object],
        required: false,
        default: () => []
      },
      acceptFile: {
        type: String,
        required: false,
        default: ''
      },
      isLoading: {
        type: Boolean,
        required: false,
        default: false
      },
      multiple: {
        type: Boolean,
        required: false,
        default: false
      },
      inputClass: {
        type: [String, Array],
        required: false,
        default: ''
      },
      farsiOnly: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data () {
      return {
        currentType: this.inputType,
        isPasswordVisible: false,
        invalid: false,
        showConfirm: false
      }
    },
    computed: {
      isPasswordInput () {
        let output
        if (this.inputType === 'password') {
          output = true
        } else {
          output = false
        }
        return output
      }
    },
    methods: {
      onChange (e: any) {
        this.$emit('update:modelValue', e.target.value)
      },
      changePasswordType () {
        if (this.currentType === 'password') {
          this.currentType = 'text'
          this.isPasswordVisible = true
        } else {
          this.currentType = 'password'
          this.isPasswordVisible = false
        }
      },
      formatBytes (bytes: number, decimals = 2) {
        if (bytes === 0) {
          return '0 Bytes'
        }
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
      },
      createImage (file: Blob) {
        const url = URL.createObjectURL(file)
        return url
      }
    }
  }
</script>
  