import React from 'react'
import './style/index.scss'

export default function Home(): JSX.Element {
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach((el) => {
                el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target
                    const $target: any = document.getElementById(target)
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active')
                    $target.classList.toggle('is-active')
                })
            })
        }
    })
    return (
        <div>
            <header>
                <nav className='navbar bg-navbar is-transparent' role='navigation' aria-label='main navigation'>
                    <div className='container'>
                        <div className='navbar-brand'>
                            <a className='navbar-item' href='https://bulma.io'>
                                <img src='https://bulma.io/images/bulma-logo.png' width={112} height={28} />
                            </a>
                            <a
                                role='button'
                                className='navbar-burger burger'
                                aria-label='menu'
                                aria-expanded='false'
                                data-target='navMenu'>
                                <span aria-hidden='true' />
                                <span aria-hidden='true' />
                                <span aria-hidden='true' />
                            </a>
                        </div>
                        <div id='navMenu' className='navbar-menu'>
                            <div className='navbar-start'>
                                <a className='navbar-item navbar-text'>Trang chủ</a>
                                <a className='navbar-item navbar-text'>Giới thiệu</a>
                                <a className='navbar-item navbar-text'>Dịch vụ</a>
                                <a className='navbar-item navbar-text'>Tin tức</a>
                                <a className='navbar-item navbar-text'>Tuyển dụng</a>
                                <a className='navbar-item navbar-text'>Liên hệ</a>
                                <div className='navbar-item has-dropdown is-hoverable'>
                                    <a className='navbar-link navbar-text'>Thêm</a>
                                    <div className='navbar-dropdown'>
                                        <a className='navbar-item'> About </a>
                                        <a className='navbar-item'> Jobs </a>
                                        <a className='navbar-item'> Contact </a>
                                        <hr className='navbar-divider' />
                                        <a className='navbar-item'> Report an issue </a>
                                    </div>
                                </div>
                            </div>
                            <div className='navbar-end'>
                                <div className='navbar-item'>
                                    <a className='icon navbar-text'>
                                        <i className='fas fa-search' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='service-container bg-grey'>
                <div className='section'>
                    <div className='container'>
                        <h1 className='_title'>Dịch vụ</h1>
                        <div className='columns is-mobile is-multiline'>
                            <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='follow-new-container'>
                <div className='section'>
                    <div className='container'>
                        <div className='follow-videos-container'>
                            <div className='columns is-multiline'>
                                <div className='column is-one-quarter-desktop is-full-tablet'>
                                    <div className='follow-container'>
                                        <h1 className='_title'>Theo dõi</h1>
                                        <ul className='list-social'>
                                            <li className='facebook'>
                                                <div className='icon'>
                                                    <a href=''>
                                                        <i className='fab fa-facebook-f'></i>
                                                    </a>
                                                </div>
                                                <div className='count'>350</div>
                                                <div className='followers'>followers</div>
                                            </li>
                                            <li className='twitter'>
                                                <div className='icon'>
                                                    <a href=''>
                                                        <i className='fab fa-twitter'></i>
                                                    </a>
                                                </div>
                                                <div className='count'>350</div>
                                                <div className='followers'>followers</div>
                                            </li>
                                            <li className='linkedin'>
                                                <div className='icon'>
                                                    <a href=''>
                                                        <i className='fab fa-linkedin-in'></i>
                                                    </a>
                                                </div>
                                                <div className='count'>350</div>
                                                <div className='followers'>followers</div>
                                            </li>
                                            <li className='dribbble'>
                                                <div className='icon'>
                                                    <a href=''>
                                                        <i className='fab fa-dribbble'></i>
                                                    </a>
                                                </div>
                                                <div className='count'>350</div>
                                                <div className='followers'>followers</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='video-container'>
                                        <h1 className='_title'>Videos nổi bật</h1>
                                        videos
                                    </div>
                                </div>
                                <div className='column is-three-quarters-desktop is-full-tablet'>
                                    <h1 className='_title'>Tin tức</h1>
                                    <div className='new-under'>
                                        <div className='columns is-mobile is-multiline'>
                                            <div className='column is-full-desktop is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column is-one-third-desktop is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column is-one-third-desktop is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column is-one-third-desktop is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sports-container bg-grey'>
                <div className='section'>
                    <div className='container'>
                        <div className='columns is-mobile is-multiline'>
                            <div className='column is-three-quarters-desktop is-full-tablet is-full-mobile'>
                                <div className='box-title'>
                                    <div className='_title'>Tin tức</div>
                                    <a className='btn' href=''>
                                        Xem tất cả »
                                    </a>
                                </div>
                                <div className='columns'>
                                    <div className='new-left column is-two-fifths-tablet'>
                                        <div className='card'>
                                            <div className='card-image'>
                                                <figure className='image is-4by3'>
                                                    <img
                                                        src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                        alt='Placeholder image'
                                                    />
                                                </figure>
                                            </div>
                                            <div className='card-content'>
                                                <div className='post-info'>
                                                    <h2 className='post-caption'>Dịch vụ</h2>
                                                    <div className='info'>
                                                        <span className='author-name'>John Doe</span>
                                                        <span className='date'>
                                                            <i className='far fa-clock'></i> may 1, 2015
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='media'>
                                                    <div className='media-content'>
                                                        <a href='' className='title'>
                                                            Dịch vụ vận chuyển hàng
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='content-media'>
                                                    Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi
                                                    Campuchia Tiết Kiệm Chi Phí
                                                </div>
                                                <a className='btn' href=''>
                                                    Xem thêm »
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column is-three-fifths-tablet'>
                                        <div className='columns is-multiline is-mobile'>
                                            <div className='column is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='column is-half-tablet is-half-mobile'>
                                                <div className='card'>
                                                    <div className='card-image'>
                                                        <figure className='image is-4by3'>
                                                            <img
                                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                                alt='Placeholder image'
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className='card-content'>
                                                        <div className='post-info'>
                                                            <h2 className='post-caption'>Dịch vụ</h2>
                                                            <div className='info'>
                                                                <span className='author-name'>John Doe</span>
                                                                <span className='date'>
                                                                    <i className='far fa-clock'></i> may 1, 2015
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='media'>
                                                            <div className='media-content'>
                                                                <a href='' className='title'>
                                                                    Dịch vụ vận chuyển hàng
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='content-media'>
                                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển
                                                            Hàng Đi Campuchia Tiết Kiệm Chi Phí
                                                        </div>
                                                        <a className='btn' href=''>
                                                            Xem thêm »
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-quarter-desktop is-full-tablet is-full-mobile'>
                                <div className='_title'>Đăng ký nhận tin</div>
                                <div className='subcribe-now'>
                                    <h1>Subscribe Now</h1>
                                    <input name='email' type='text' placeholder='Your Email' />
                                    <input name='Submit' type='submit' defaultValue='Subscribe' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='latest-container'>
                <div className='section'>
                    <div className='container'>
                        <div className='_title'>Tin tức</div>
                        <div className='columns is-multiline is-mobile'>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <figure className='image is-4by3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='post-info'>
                                            <h2 className='post-caption'>Dịch vụ</h2>
                                            <div className='info'>
                                                <span className='author-name'>John Doe</span>
                                                <span className='date'>
                                                    <i className='far fa-clock'></i> may 1, 2015
                                                </span>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <div className='media-content'>
                                                <a href='' className='title'>
                                                    Dịch vụ vận chuyển hàng
                                                </a>
                                            </div>
                                        </div>
                                        <div className='content-media'>
                                            Bạn đang có hàng gửi đi Campuchia, cần dịch vụ Vận Chuyển Hàng Đi Campuchia
                                            Tiết Kiệm Chi Phí
                                        </div>
                                        <a className='btn' href=''>
                                            Xem thêm »
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className='pagination' role='navigation' aria-label='pagination'>
                            <a className='pagination-previous' title='This is the first page'>
                                Previous
                            </a>
                            <a className='pagination-next'>Next page</a>
                            <ul className='pagination-list'>
                                <li>
                                    <a className='pagination-link is-current' aria-label='Page 1' aria-current='page'>
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a className='pagination-link' aria-label='Goto page 2'>
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a className='pagination-link' aria-label='Goto page 3'>
                                        3
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='section'>
                    <div className='container'>
                        <div className='columns is-mobile is-multiline'>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='box-title'>
                                    <div className='_title has-text-white'>Tin tức</div>
                                    <a className='btn' href=''>
                                        Xem tất cả »
                                    </a>
                                </div>
                                <div className='new-footer'>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='box-title'>
                                    <div className='_title has-text-white'>Tin tức</div>
                                    <a className='btn' href=''>
                                        Xem tất cả »
                                    </a>
                                </div>
                                <div className='new-footer'>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-half-mobile'>
                                <div className='box-title'>
                                    <div className='_title has-text-white'>Tin tức</div>
                                    <a className='btn' href=''>
                                        Xem tất cả »
                                    </a>
                                </div>
                                <div className='new-footer'>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='columns is-gapless'>
                                        <div className='column is-3'>
                                            <img
                                                src='http://pro-theme.com/html/alia-envato/every-sunday-newspaper-magazine-blog-theme/images/autos/22.jpg'
                                                alt='Placeholder image'
                                            />
                                        </div>
                                        <div className='column-right column is-9'>
                                            <div className='post-info'>
                                                <h2 className='post-caption'>Dịch vụ</h2>
                                                <div className='info'>
                                                    <span className='author-name has-text-white'>John Doe</span>
                                                    <span className='date'>
                                                        <i className='far fa-clock'></i> may 1, 2015
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-content'>
                                                    <a href='' className='title has-text-white'>
                                                        Dịch vụ vận chuyển hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-info'>
                <div className='section'>
                    <div className='container'>
                        <div className='columns is-mobile is-multiline'>
                            <div className='column is-one-third-tablet is-full-mobile'>
                                <img src='https://bulma.io/images/bulma-logo.png' />
                                <div className='about-short'>
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                                    ante.
                                </div>
                            </div>
                            <div className='column is-one-third-tablet is-full-mobile'>
                                <div className='_title  has-text-white'>Live Tweets</div>
                            </div>
                            <div className='column is-one-third-tablet is-full-mobile'>
                                <div className='_title  has-text-white'>Contact Us</div>
                                <div className='info-line'>
                                    <span className='icon-info has-text-white'>
                                        <i className='fas fa-map-marker-alt'></i>
                                    </span>
                                    <span className='content-info'>
                                        PO Box 16122 Collins Street West Victoria 8007 Australia
                                    </span>
                                </div>
                                <div className='info-line'>
                                    <span className='icon-info has-text-white'>
                                        <i className='fas fa-phone-alt'></i>
                                    </span>
                                    <a className='content-info' href='tel: +61 3 8376 6284'>
                                        +61 3 8376 6284
                                    </a>
                                </div>
                                <div className='info-line'>
                                    <span className='icon-info has-text-white'>
                                        <i className='far fa-envelope'></i>
                                    </span>
                                    <a className='content-info' href='mailto:info@umag.com'>
                                        info@umag.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-site'>© Copyright 2020 - Every Sunday</div>
        </div>
    )
}
