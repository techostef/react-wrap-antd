import React from 'react';
interface IState {
    error: any;
    errorInfo: any;
}
declare class ErrorBoundary extends React.Component<{}, IState> {
    constructor(props: any);
    componentDidCatch(error: any, errorInfo: any): void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
