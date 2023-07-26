import Alert from 'react-bootstrap/Alert';

export default function ErrorIndicator({
    isError,
    error,
    className,
    ...others
}: {
    isError: boolean;
    error: unknown;
    className?: string;
}): JSX.Element | null {
    return isError ? (
        <Alert {...others} className={`mb-3 ${className ?? 'default'}`} variant='danger'>
            {(error as Error).message}
        </Alert>
    ) : null;
}
