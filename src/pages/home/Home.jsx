import { size } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import Nav from '../../components/nav/Nav';
import TopMainNav from '../../components/nav/TopMainNav';
import HomePost from '../../components/PostForm/HomePost';
import TabMenu from '../../components/tab/TabMenu';
import axiosHomeList from '../../utils/axiosHomeList';
import NonFollowing from '../NonFollowing';
import * as S from './Styled';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function Home() {
    const [loading, setLoading] = useState(false);
    const [postsInfo, setPostInfo] = useState([]);
    const [limitItem, setLimitItem] = useState(5);
    const skipItem = 0;

    const { setObservationTarget } = useIntersectionObserver({
        limitItem,
        setLimitItem,
    });

    const targetStyle = { height: '100px' };

    const homeList = useCallback(() => {
        setLoading(true);
        axiosHomeList(limitItem, skipItem).then((data) => setPostInfo(data)); //promise에서 response 추출
        setLoading(false);
    }, [limitItem, skipItem]);

    useEffect(() => {
        homeList();
    }, [limitItem]);
    return (
        <>
            <Nav>
                <TopMainNav title={'youth-gallery 홈'} />
            </Nav>
            <S.Div>
                <S.PaddingDiv>
                    {size(postsInfo) > 0 ? (
                        <S.View>
                            <S.ScrollBlind>
                                {postsInfo.map((post, i) => (
                                    <HomePost
                                        key={`${post.id}_${i}`}
                                        postsInfos={post}
                                    />
                                ))}
                                {loading && <Loading />}
                                {!loading && (
                                    <div
                                        ref={setObservationTarget}
                                        style={targetStyle}
                                    ></div>
                                )}
                            </S.ScrollBlind>
                        </S.View>
                    ) : (
                        <NonFollowing />
                    )}
                </S.PaddingDiv>
            </S.Div>
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Home;
