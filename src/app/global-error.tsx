'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>An error occurred. Please try again.</p>
          <button
            onClick={reset}
            style={{
              padding: '0.5rem 1rem',
              marginTop: '1rem',
              cursor: 'pointer',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
