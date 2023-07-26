import Spinner from 'react-bootstrap/Spinner';

export default function LoadingIndicator({isLoading, ...others}: {isLoading?: boolean}): JSX.Element | null {
    return isLoading != null && isLoading ? <Spinner {...others} animation={'grow'} /> : null;
}
