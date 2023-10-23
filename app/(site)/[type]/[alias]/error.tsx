'use client';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
 return <div>{JSON.stringify(error)} NOT FOUND 404</div>;
};

export default Error;
