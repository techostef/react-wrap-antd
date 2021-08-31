export default argTypesEnum;
declare const argTypesEnum: Readonly<{
    ARRAY: {
        defaultValue: any[];
        control: {
            type: string;
        };
    };
    BOOL_TRUE: {
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    BOOL_FALSE: {
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    DATE: {
        defaultValue: any;
        control: {
            type: string;
        };
    };
    EVENTS: {
        table: {
            category: string;
        };
    };
    NUMBER: {
        defaultValue: number;
        control: {
            type: string;
        };
    };
    OBJECT: {
        defaultValue: any;
        control: {
            type: string;
        };
    };
    RADIO: ({ defaultValue, options }: {
        defaultValue?: any;
        options?: any;
    }) => {
        defaultValue: any;
        control: {
            type: string;
            options: any;
        };
    };
    STRING: {
        defaultValue: string;
        control: {
            type: string;
        };
    };
}>;
