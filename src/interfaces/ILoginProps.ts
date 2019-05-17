import IComponentProps from './IComponentProps';

interface ILoginProps extends IComponentProps {
    onSubmit: Function;
    directoryName: string;
    fieldConfig?: any;
    error?: string;
}

export default ILoginProps;
