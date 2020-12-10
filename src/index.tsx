import { debounce } from 'debounce';
import { RefObject, useEffect, useRef } from 'react';

export interface HideAndSeekMenuOptions {
    ref: RefObject<HTMLElement | null>;
    offset?: number;
    debounceTime?: number;
    transitionDuration?: number;
    transitionTimingFunction?: string;
}

const useHideAndSeekMenu = (options: HideAndSeekMenuOptions): void => {
    const {
        ref,
        offset = 90,
        debounceTime = 10,
        transitionDuration = 0.3,
        transitionTimingFunction = 'ease',
    } = options;

    // Keep and change the previous scroll position in a ref because it's mutable.
    const prevScrollpos = useRef(0);

    useEffect(() => {
        // Set ref styles
        if (ref.current) {
            ref.current.style.position = 'sticky';
            ref.current.style.top = '0';
            ref.current.style.transition = `top ${transitionDuration}s ${transitionTimingFunction}`;
        }

        const handleScroll = () => {
            const currentScrollpos = window.pageYOffset;

            if (currentScrollpos >= offset) {
                // Scrolling up:
                // If the previous scroll position is higher than the current scroll position,
                // for example previous is 50 and where you are currently is 40, then it means
                // that the pageYOffset has decreased for your current position.
                // You are getting closer to the top of the page, so you are scrolling up.
                if (prevScrollpos.current > currentScrollpos) {
                    if (ref.current) {
                        ref.current.style.top = '0';
                    }
                } else {
                    // Scrolling down.
                    if (ref.current) {
                        ref.current.style.top = '-100px';
                    }
                }
            }

            prevScrollpos.current = currentScrollpos;
        };

        // Add debounce, otherwise it will fire the event listener like crazy.
        window.addEventListener('scroll', debounce(handleScroll, debounceTime));

        // Clean up the effect after it finishes and remove the event listener.
        return () => {
            // Add debounce, otherwise it will fire the event listener like crazy.
            window.removeEventListener(
                'scroll',
                debounce(handleScroll, debounceTime)
            );
        };
    }, [
        debounceTime,
        offset,
        ref,
        transitionTimingFunction,
        transitionDuration,
    ]);

    return;
};

export { useHideAndSeekMenu };
