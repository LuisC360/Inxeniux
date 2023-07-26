import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';
import ContentCenterDiv from './ContentCenterDiv';

export default function LoadingAndErrorCentered({
    isLoading,
    isError,
    error
}: {
    isLoading: boolean;
    isError: boolean;
    error: unknown;
}): JSX.Element {
    return (
        <ContentCenterDiv>
            <LoadingIndicator isLoading={isLoading} />
            <ErrorIndicator isError={isError} error={error} />
        </ContentCenterDiv>
    );
}
