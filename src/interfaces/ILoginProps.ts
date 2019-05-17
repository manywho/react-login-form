import IComponentProps from './IComponentProps';

interface ILoginProps extends IComponentProps {
    onSubmit: Function;
    directoryName: string;
    error?: string;
}

export default ILoginProps;
