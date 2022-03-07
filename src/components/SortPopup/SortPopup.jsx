import { useState, useEffect, useRef } from 'react';

import sortOptions from '../../constants/sort';

import styles from './SortPopup.module.scss';

const sortPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeOption, setActiveOption] = useState(0);
    const sortRef = useRef(null);
    const activeOptionLabel = sortOptions[activeOption];

    const toggleVisiblePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleOutsideClick = (e) => {
        if (e.path.includes(sortRef.current)) {
            setIsOpen(false);
        }
    }

    const handleClickOption = (index) => {
        setActiveOption(index);
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    }, [isOpen]);

    const sortOptionItems = sortOptions?.map((option, index) => {
        return (
            <li key={ `${option}_${index}` } className={ activeOption === index ? styles.option_item_active : null }>
                <button onClick={() => handleClickOption(index)}>
                    { option }
                </button>
            </li>
        )
    });

    return (
        <div ref={ sortRef }>
            <div>
                Сортировка по:
                <button onClick={ toggleVisiblePopup }>
                    { activeOptionLabel }
                </button>
            </div>
            { isOpen && <ul>
                sortOptionItems
            </ul> }
        </div>
    )
}

export default sortPopup;