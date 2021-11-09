import { useEffect } from 'react';

const useScriptHook = url => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
        // deps: is script url
    }, [url]);

};

export default useScriptHook;
