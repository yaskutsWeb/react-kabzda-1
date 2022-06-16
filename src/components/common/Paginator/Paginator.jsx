import React, {useState} from 'react';
import styles from "../../Users/users.module.css";

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const onPreviousClick = () => {
		setPortionNumber(portionNumber - 1);
	}
	const onNextClick = () => {
		setPortionNumber(portionNumber + 1);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;
	return (
		<div>
			{portionNumber > 1 && <button onClick={onPreviousClick}>Previous</button>}
			{pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map(page =>
				<span key={page} onClick={() => onPageChanged(page)}
					  className={currentPage === page ? styles.selectedPage : ''}>
					{page}
					</span>)}
			{portionNumber < portionCount && <button onClick={onNextClick}>next</button>}
		</div>

	);
};