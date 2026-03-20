import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init('phc_aur20epnEcOsmKpTpdbPMjJSzM5ypEtSD4zLwm0Q0aD', {
    api_host: 'https://g.theoutdoorprogrammer.com',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  });
}

export default posthog;
