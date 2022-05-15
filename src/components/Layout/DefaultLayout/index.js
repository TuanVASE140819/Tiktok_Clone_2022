import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
