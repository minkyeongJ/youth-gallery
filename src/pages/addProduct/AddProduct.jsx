import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import TopUploadNav from '../../components/nav/TopUploadNav';
import styles from './AddProduct.module.css';

const AddProduct = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(Number);
    const [link, setLink] = useState('');

    const [state, setState] = useState(false);

    // 현재 인라인으로 바꾸는 방법 밖에 생각나지 않아 인라인으로 구현.
    //  혹시 다른 방법 생각난다면 수정 예정.
    const backgroundstyle = {
        backgroundImage: `url('${image}')`,
    };
    // 버튼 활성화
    useEffect(() => {
        if (
            name.length > 0 &&
            price.length > 0 &&
            image.length > 0 &&
            link.length > 0 &&
            price !== Number
        ) {
            setState(true);
        } else {
            setState(false);
        }
    }, [name, price, image, link]);

    const createProduct = async (e) => {
        e.preventDefault();
        // 추후에 로그인 기능 구현되면 삭제. 일회성 토큰
        const url = 'https://mandarin.api.weniv.co.kr';
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JjNTJiODJmZGNjNzEyZjQzODgyOSIsImV4cCI6MTY2Mzg0ODQ1NSwiaWF0IjoxNjU4NjY0NDU1fQ.B0lhuOQectFJpxPqedzfuXTLceUzZUkNOGk-t6NWA1U';
        localStorage.setItem('token', token);
        const getToken = localStorage.getItem('token');
        console.log(getToken);

        try {
            axios.post(
                `${url}/product`,
                {
                    product: {
                        itemName: name,
                        price: parseInt(
                            price
                                .split(',')
                                .reduce((curr, acc) => curr + acc, '')
                        ),
                        link: link,
                        itemImage: `${image}`,
                    },
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`,
                        'Content-type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    // 숫자에 , 찍어주는 함수
    const inputPriceFormat = (str) => {
        console.log('s', str);
        const comma = (str) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        };
        const uncomma = (str) => {
            str = String(str);
            return str.replace(/[^\d]+/g, '');
        };
        return comma(uncomma(str));
    };

    return (
        <form className={styles.add_product_section} onSubmit={createProduct}>
            <Nav>
                <TopUploadNav title="저장" state={state} />
            </Nav>
            <section className={styles.input_section}>
                <h2 className={styles.add_image_title}>이미지 등록</h2>
                {
                    <section
                        className={styles.upload_img_section}
                        style={backgroundstyle}
                    >
                        <h3 className={styles.ir}>
                            업로드할 이미지가 보이는 곳 입니다.
                        </h3>
                        <label
                            className={styles.image_upload_button}
                            htmlFor={styles.image_upload_input}
                        ></label>
                        <input
                            id={styles.image_upload_input}
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                setImage(
                                    URL.createObjectURL(e.target.files[0])
                                );
                                console.log(e.target.files);
                                console.log(image);
                            }}
                        ></input>
                    </section>
                }
                <label
                    className={styles.input_title}
                    htmlFor={styles.product_name_input}
                >
                    상품명
                </label>
                <input
                    id={styles.product_name_input}
                    className={styles.product_input}
                    type="text"
                    placeholder="2~15자 이내여야 합니다."
                    onChange={(e) => {
                        setName(e.target.value);
                        console.log(name);
                    }}
                />
                <label
                    className={styles.input_title}
                    htmlFor={styles.product_price_input}
                >
                    가격
                </label>
                <input
                    id={styles.product_price_input}
                    className={styles.product_input}
                    type="text"
                    value={price}
                    placeholder="숫자만 입력 가능합니다."
                    onChange={(e) => {
                        setPrice(inputPriceFormat(e.target.value));
                        console.log(price);
                    }}
                />
                <label
                    className={styles.input_title}
                    htmlFor={styles.product_link_input}
                >
                    판매링크
                </label>
                <input
                    id={styles.product_link_input}
                    className={styles.product_input}
                    type="text"
                    placeholder="URL을 입력해 주세요."
                    onChange={(e) => {
                        setLink(e.target.value);
                    }}
                />
            </section>
        </form>
    );
};

export default AddProduct;
