import React from 'react'
import { SidebarComponentModel } from '../../definitions/sidebar.def'
import './../../styles/sidebar.scss'
import { HooksList } from '../../definitions/hooks.def';

const listOfHooks: HooksList = {
    basic: [
        'useState',
        'useEffect',
        'useContext'
    ],
    additional: [
        'useReducer',
        'useCallback',
        'useMemo',
        'useRef',
        'useImperativeHandle',
        'useLayoutEffect',
        'useDebugValue'
    ],
    custom: [
        'useFetch',
        'useForm',
        'useLocalStorage',
        'useDebounce',
        'usePrevious',
        'useWindowSize',
        'useMediaQuery',
        'useTimeout',
        'useInterval'
    ]
};


const SidebarComponent: React.FC<SidebarComponentModel> = () => {
    const { basic, additional, custom } = listOfHooks
    return (
        <aside className="sidebar">
            <h1>Reactive Things</h1>
            <ul className='list-reset'>
                <li>
                    <h2>
                        Basic Hooks
                    </h2>
                    <ol className='list-spacing-sm'>
                        {basic?.map((basicHook, index) => <li key={index}>
                            <button className='btn typo-sm btn-primary'>
                                {basicHook}
                            </button>
                        </li>)}
                    </ol>
                </li>
                <li>
                    <h2>
                        Additional Hooks
                    </h2>
                    <ol>
                        {additional?.map((additionalHook, index) => <li key={index}>{additionalHook}</li>)}
                    </ol>
                </li>
                <li>
                    <h2>
                        Custom Hooks
                    </h2>
                    <ol>
                        {custom?.map((customHook, index) => <li key={index}>{customHook}</li>)}
                    </ol>
                </li>
            </ul>
        </aside>
    )
}

export default SidebarComponent