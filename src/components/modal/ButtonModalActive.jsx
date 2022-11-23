import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InnerAlert from './InnerAlert';
import Modal from './Modal';
import PostModal from './PostModal';

function ButtonModalActive({
    propState,
    propsCloseFunc,
    postModalValues,
    innerAlertValues,
    commentId,
    post_id,
    link,
}) {
    const [showModal, setShowModal] = useState(false);
    const [showInnerModal, setShowInnerModal] = useState(false);
    useEffect(() => {
        setShowModal(propState);
    }, [propState]);
    console.log(propState);
    console.log(showModal);
    console.log(postModalValues.values);

    const closeModal = () => {
        console.log(false);
        setShowModal(false);
        setShowInnerModal(false);
        propsCloseFunc(false);
    };

    const openInnerModal = (stateProp) => {
        setShowInnerModal(stateProp);
    };

    return (
        <>
            {showModal ? (
                <>
                    <BackgroundModal onClick={closeModal} />
                    <Modal>
                        <PostModal
                            values={postModalValues.values}
                            propFunc={openInnerModal}
                            post_id={post_id}
                            link={link}
                        />
                    </Modal>
                    {showInnerModal ? (
                        <InnerAlert
                            title={innerAlertValues.title}
                            rightText={innerAlertValues.rightText}
                            closeModalPropFunc={closeModal}
                            rightBtnPropFunc={innerAlertValues.rightBtnPropFunc}
                            commentId={commentId}
                            post_id={post_id}
                        />
                    ) : null}
                </>
            ) : null}
        </>
    );
}

const BackgroundModal = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    width: 450px;
    margin: 0 auto;
`;

export default ButtonModalActive;