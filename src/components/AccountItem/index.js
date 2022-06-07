import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/270961679_10159870536636108_2642967668131478092_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Iy3uhSF5eOIAX82VGZV&_nc_oc=AQlGblFx3blhDpGLM3pLu0PssnIWKPpwQQ1aGOxt1jxw5uakgfJmv36W-fE1OfdkB1cepaX3s7Bg-kcLmPmwwWOy&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT8jfWn3RX1dv9fmImHJEX_v7nVetrBx0laTJL_u-K77bQ&oe=628AE457"
                alt="Hoang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen The Hoang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>giao.lang.office</span>
            </div>
        </div>
    );
}

export default AccountItem;
