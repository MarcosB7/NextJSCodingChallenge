import styles from '../styles/Pagination.module.css'

type Props = {
    handlePageChange: any;
    page: number;
}

const PaginationPresenter = (props: Props) => {

    const renderPagination = () => {
        return (
            <>
                {props.page > 1 &&
                    <li>
                        <a onClick={() => props.handlePageChange(props.page - 1)} href='#' className={styles.prevNext} >
                            {'<'} Prev
                        </a>
                    </li>
                }
                <li>
                    <a onClick={() => props.handlePageChange(props.page + 1)} href='#' className={styles.prevNext} >
                        Next {'>'}
                    </a>
                </li>
            </>
        )
    }

    return (
        <div className={styles.container}>
            {renderPagination()}
        </div>
    );

};

export default PaginationPresenter;
