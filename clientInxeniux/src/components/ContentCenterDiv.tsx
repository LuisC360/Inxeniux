import {PropsWithChildren} from 'react';

export default function ContentCenterDiv({className, ...others}: PropsWithChildren<{className?: string | 'default'}>): JSX.Element {
    return <div {...others} className={`w-100 d-flex flex-column align-items-center ${className ?? 'default'}`} />;
}
