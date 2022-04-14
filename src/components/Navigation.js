import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBlock = styled.div`
    width: 100%;
    height: 80px;

    .navi_wrap {
        width: 1400px;
        height: 100%;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .link {
            text-decoration: none;
        }

        h1 .logo {
            font-family: 'Yeongdo-Rg';
            font-size: 40px;
            color: #DA0037;
        }

        ul {
            width: 20%;
            display: flex;
            justify-content: space-between;


            li {
                .menu {
                    font-family: 'GangwonEdu_OTFBoldA';
                    font-size: 24px;
                    color: #EDEDED;
                    transition: all .5s;
                }
                
                &:hover .menu {
                    color: #DA0037;
                }
            }
        }

        button {
            padding: 7px 20px 5px;
            border-radius: 15px;
            background-color: #EDEDED;
            border: none;
            outline: none;
            transition: all .5s;

            .signIn {
                display: block;
                height: 100%;
                font-family: 'GangwonEdu_OTFBoldA';
                font-size: 20px;
                color: #171717;
                transition: all .5s;
            }

            &:hover {
                background-color: #f0003c;

                .signIn {
                    color: #EDEDED;
                }
            }
            &:active {
                background-color: #bb002f;

                .signIn {
                    color: #EDEDED;
                }
            }
        }
    }
`

function Navigation() {
    return (
        <NavigationBlock>
            <div className='navi_wrap'>
                <h1>
                    <Link to="/" className='link logo'>무비무어</Link>
                </h1>
                <ul>
                    <li><Link to="/" className='link menu'>홈</Link></li>
                    <li><Link to="/genre" className='link menu'>장르별</Link></li>
                    <li><Link to="/ranking" className='link menu'>랭킹</Link></li>
                </ul>
                <button>
                    <Link to="/signIn" className='link signIn' >로그인</Link>
                </button>
            </div>
        </NavigationBlock>
    )
}

export default Navigation;