/// <reference types="react" />

declare module 'react-typed' {
    export interface ReactTypedProps {
        typedRef?: Function,
        /** initialize in stopped state */
        stopped?: boolean,
        /** strings to be typed */
        strings?: string[],
        /**  type speed in milliseconds */
        typeSpeed?: number,
        /** time before typing starts in milliseconds */
        startDelay?: number,
        /** backspacing speed in milliseconds */
        backSpeed?: number,
        /**  only backspace what doesn't match the previous string */
        smartBackspace?: boolean,
        /** shuffle the strings */
        shuffle?: boolean,
        /** time before backspacing in milliseconds */
        backDelay?: number,
        /** Fade out instead of backspace */
        fadeOut?: boolean,
        /** css class for fade animation */
        fadeOutClass?: string,
        /** Fade out delay in milliseconds */
        fadeOutDelay?: number,
        /** loop the strings */
        loop?: boolean,
        /** amount of loops */
        loopCount?: number,
        /** show cursor */
        showCursor?: boolean,
        /** character for cursor */
        cursorChar?: string,
        /** insert CSS for cursor and fadeOut into HTML */
        autoInsertCss?: boolean,
        /** attribute for typing Ex?: input placeholder, value, or just HTML text */
        attr?: string,
        /**  bind to focus and blur if el is text input */
        bindInputFocusEvents?: boolean,
        /**  'html' or 'null' for plaintext */
        contentType?: 'html' | null
        /** onComplete(self?: Typed) All typing is complete */
        onComplete?: Function,
        /** preStringTyped(arrayPos?: number, self?: Typed) Before each string is typed */
        preStringTyped?: Function,
        /** onStringTyped(arrayPos?: number, self?: Typed) After each string is typed */
        onStringTyped?: Function,
        /** onLastStringBackspaced(self?: Typed) During looping, after last string is typed */
        onLastStringBackspaced?: Function,
        /** onTypingPaused(arrayPos?: number, self?: Typed) Typing has been stopped */
        onTypingPaused?: Function,
        /** onTypingResumed(arrayPos?: number, self?: Typed) Typing has been started after being stopped */
        onTypingResumed?: Function,
        /** onReset(self?: Typed) After reset */
        onReset?: Function,
        /** onStop(arrayPos?: number, self?: Typed)    After stop */
        onStop?: Function,
        /** onStart(arrayPos?: number, self?: Typed) After start */
        onStart?: Function,
        /** onDestroy(self?: Typed) After destroy */
        onDestroy?: Function,
        className?: string,
        style?: React.CSSProperties,
    }
    class ReactTyped extends React.Component<ReactTypedProps, any> { }
    export default ReactTyped
}

