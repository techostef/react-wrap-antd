const argTypesEnum = Object.freeze({
    ARRAY: {
      defaultValue: [],
      control: {
        type: 'text'
      }
    },
    BOOL_TRUE: {
        defaultValue: true,
        control: {
          type: 'boolean'
        }
    },
    BOOL_FALSE: {
        defaultValue: false,
        control: {
          type: 'boolean'
        }
    },
    DATE: {
      defaultValue: null,
      control: {
        type: 'date'
      }
    },
    EVENTS: {
      table: {
        category: 'Events',
      }
    },
    NUMBER: {
        defaultValue: 0,
        control: {
          type: 'number'
        }
    },
    OBJECT: {
        defaultValue: null,
        control: {
          type: 'object'
        }
    },
    RADIO: ({defaultValue = null, options = null}) => {
      return {
        defaultValue: defaultValue,
        control: {
          type: 'radio',
          options: options
        }
      }
    },
    STRING: {
      defaultValue: '',
      control: {
        type: 'text'
      }
    },
    ARRAY: {
      defaultValue: [ ],
      control: {
        type: 'text'
      }
    }
});

export default argTypesEnum;